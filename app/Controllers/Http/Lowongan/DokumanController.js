"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const DokumenPenilaian = use("App/Models/DokumenPenilaian");
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

  async index({ params, request, response, view }) {
    const { formasi_apply_id } = params;

    const dokumenpenilaian = await DokumenPenilaian.query()
      .where("formasi_apply_id", formasi_apply_id)
      .fetch();

    const datas = [];

    for (let i in dokumenpenilaian.rows) {
      const rows = dokumenpenilaian.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["name"] = rows.name;
      row["keterangan"] = rows.keterangan;
      row["path"] = rows.path;
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
  async store({ params, request, response }) {
    const { formasi_apply_id } = params;
    const { name, keterangan, path } = request.all();

    try {
      const dokumenpenilaian = new DokumenPenilaian();
      dokumenpenilaian.formasi_apply_id = formasi_apply_id;
      dokumenpenilaian.name = name;
      dokumenpenilaian.keterangan = keterangan;
      dokumenpenilaian.path = path;
      dokumenpenilaian.save();

      return response.json({
        status: true,
        message: "Proses upload dokumen berhasi",
      });
    } catch (error) {}
  }

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
    const formasi_aplly_id = params;

    return formasi_aplly_id;

    const dokumenpenilaian = await DokumenPenilaian.query()
      .where("formasi_apply_id", formasi_aplly_id)
      .fetch();

    const datas = [];

    for (let i in dokumenpenilaian.rows) {
      const rows = dokumenpenilaian.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["name"] = rows.name;
      row["keterangan"] = rows.keterangan;
      row["path"] = rows.path;
      datas.push(row);
    }

    return datas;
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
  async update({ params, request, response }) {}

  /**
   * Delete a dokuman with id.
   * DELETE dokumen/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;

    try {
      const dokumenpenilaian = await DokumenPenilaian.find(id);
      dokumenpenilaian.delete();

      return response.json({
        status: true,
        message: "Proses hapus data berhasi",
      });
    } catch (error) {}
  }
}

module.exports = DokumanController;
