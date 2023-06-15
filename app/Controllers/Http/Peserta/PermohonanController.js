"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const FormasiApply = use("App/Models/FormasiApply");
const Formasi = use("App/Models/Formasi");
const Opd = use("App/Models/Opd");
const DokumenPeserta = use("App/Models/PesertaDokuman");
const Dokumen = use("App/Models/Dokuman");
const { validate } = use("Validator");
var randomstring = require("randomstring");

/**
 * Resourceful controller for interacting with permohonans
 */
class PermohonanController {
  /**
   * Show a list of all permohonans.
   * GET permohonans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view, auth }) {
    const user = await auth.user;

    const fa = await FormasiApply.query()
      .where("peserta_id", user.peserta_id)
      .fetch();

    const datas = [];

    for (let i in fa.rows) {
      const rows = fa.rows[i];
      const formasi = await Formasi.findOrFail(rows.formasi_id);
      const opd = await Opd.findOrFail(formasi.opd_id);
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["noreg"] = rows.nomor_pendaftaran;
      row["nama_jabatan"] = formasi.nama_jabatan;
      row["opd"] = opd.name;
      row["status"] = rows.status;
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new permohonan.
   * GET permohonans/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new permohonan.
   * POST permohonans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {
    const { formasi_id } = request.all();

    const user = await auth.user;

    const countdokumenpeserta = await DokumenPeserta.query()
      .where("peserta_id", user.peserta_id)
      .where("wajib", true)
      .where("path", "!=", "null")
      .getCount();

    const countdokumen = await Dokumen.query().where("status", true).getCount();

    if (Number(countdokumen) != Number(countdokumenpeserta)) {
      return response.json({
        status: false,
        message: "Dokumen Persyaratan Belum lengkap...!",
      });
    }

    const cfa = await FormasiApply.query()
      .where("peserta_id", user.peserta_id)
      .where("status", "!=", "DITOLAK")
      .getCount();

    if (Number(cfa) > 0) {
      return response.json({
        status: false,
        message: "Maaf maksimal hanya 1 pengajuan permohonan",
      });
    }

    try {
      const fa = new FormasiApply();
      fa.nomor_pendaftaran =
        "REG-" + randomstring.generate({ length: 7, charset: "1234567890" });
      fa.formasi_id = formasi_id;
      fa.peserta_id = user.peserta_id;
      fa.status = "PENGAJUAN";
      await fa.save();

      return response.json({
        status: true,
        message: "Proses kirim pengajuan berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Display a single permohonan.
   * GET permohonans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const data = await FormasiApply.find(id);

    return data;
  }

  /**
   * Render a form to update an existing permohonan.
   * GET permohonans/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update permohonan details.
   * PUT or PATCH permohonans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;

    try {
      const permohoan = await FormasiApply.find(id);
      if (permohoan.status == "DITERIMA") {
        return response.json({
          status: false,
          message: "Maaf data telah dikunci",
        });
      }
      permohoan.status = "PENGAJUAN";
      permohoan.save();

      return response.json({
        status: true,
        message: "Proses pengajuan ulang berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..terjadi kesalahan ...." + error,
      });
    }
  }

  /**
   * Delete a permohonan with id.
   * DELETE permohonans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = request.all();
    try {
      const fa = await FormasiApply.find(id);
      if (fa.status == "DITERIMA") {
        return response.json({
          status: false,
          message: "Maaf data telah dikunci",
        });
      }
      fa.delete();

      return response.json({
        status: true,
        message: "Proses pembatalan permohoan berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...., terjadi kesalahan",
      });
    }
  }
}

module.exports = PermohonanController;
