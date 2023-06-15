"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const DokumenPeserta = use("App/Models/PesertaDokuman");
const Dokumen = use("App/Models/Dokuman");
const { validate } = use("Validator");

/**
 * Resourceful controller for interacting with dokumen
 */
class DokumanController {
  /**
   * Show a list of all dokumen.
   * GET dokumen
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view, auth }) {
    const user = auth.user;

    const countDokumenPeserta = await DokumenPeserta.query()
      .where("peserta_id", user.peserta_id)
      .getCount();

    const countDokumen = await Dokumen.query().getCount();

    if (Number(countDokumenPeserta) < Number(countDokumen)) {
      const dokumen = await Dokumen.query().orderBy("id", "asc").fetch();

      for (let j in dokumen.rows) {
        const rows = dokumen.rows[j];

        const checkdokumenpeserta = await DokumenPeserta.query()
          .where("peserta_id", user.peserta_id)
          .where("dokumen_id", rows.id)
          .first();

        if (!checkdokumenpeserta) {
          const store = new DokumenPeserta();
          store.dokumen_id = rows.id;
          store.peserta_id = user.peserta_id;
          store.wajib = rows.status;
          await store.save();
        }
      }
    }

    const dokumenpeserta = await DokumenPeserta.query()
      .where("peserta_id", user.peserta_id)
      .orderBy("id")
      .fetch();

    const datas = [];

    for (let i in dokumenpeserta.rows) {
      const rows = dokumenpeserta.rows[i];
      const row = {};
      const tempdok = await Dokumen.findOrFail(rows.dokumen_id);
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["name"] = tempdok.name;
      row["status"] = tempdok.status;
      row["keterangan"] = rows.path == null ? "Belum Lengkap" : "Lengkap";
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new dokuman.
   * GET dokumen/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new dokuman.
   * POST dokumen
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single dokuman.
   * GET dokumen/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const dokumenpeserta = await DokumenPeserta.findOrFail(id);

    const dokumen = await Dokumen.findOrFail(dokumenpeserta.dokumen_id);

    const data = {};
    data["id"] = dokumenpeserta.id;
    data["name"] = dokumen.name;
    data["path"] = dokumenpeserta.path;

    return data;
  }

  /**
   * Render a form to update an existing dokuman.
   * GET dokumen/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update dokuman details.
   * PUT or PATCH dokumen/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { path } = request.all();

    try {
      const dokumenpeserta = await DokumenPeserta.findOrFail(id);
      dokumenpeserta.path = path;
      await dokumenpeserta.save();

      return response.json({
        status: true,
        message: "Proses Upload Dokumen Berhasil ",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..,terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a dokuman with id.
   * DELETE dokumen/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = DokumanController;
