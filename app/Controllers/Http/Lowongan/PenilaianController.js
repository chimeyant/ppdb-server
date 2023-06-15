"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Peserta = use("App/Models/Peserta");
const Formasi = use("App/Models/Formasi");
const Opd = use("App/Models/Opd");
const FormasiApply = use("App/Models/FormasiApply");

/**
 * Resourceful controller for interacting with penilaians
 */
class PenilaianController {
  /**
   * Show a list of all penilaians.
   * GET penilaians
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const formasiapply = await FormasiApply.query()
      .where("status", "TERVERIFIKASI")
      .fetch();

    const datas = [];

    for (let i in formasiapply.rows) {
      const rows = formasiapply.rows[i];
      const peserta = await Peserta.find(rows.peserta_id);
      const formasi = await Formasi.find(rows.formasi_id);
      const opd = await Opd.find(formasi.opd_id);
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["name"] = peserta.nama;
      row["nama_jabatan"] = formasi.nama_jabatan;
      row["opd"] = opd.name;
      row["n_integrasi"] =
        rows.n_integrasi == 1
          ? "Dibawah Rata-Rata"
          : rows.n_integrasi == 2
          ? "Rata-Rata"
          : rows.n_integrasi == 3
          ? "Diatas Rata-Rata"
          : "Belum Dinilai";
      row["n_wawancara"] = rows.n_wawancara;
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new penilaian.
   * GET penilaians/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new penilaian.
   * POST penilaians
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single penilaian.
   * GET penilaians/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const permohonan = await FormasiApply.find(id);

    const data = {};

    data["id"] = permohonan.id;
    data["n_integrasi"] = Number(permohonan.n_integrasi);
    data["n_wawancara"] = permohonan.n_wawancara;

    return data;
  }

  /**
   * Render a form to update an existing penilaian.
   * GET penilaians/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update penilaian details.
   * PUT or PATCH penilaians/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { n_integrasi, n_wawancara } = request.all();

    try {
      const formasi = await FormasiApply.find(id);
      formasi.n_integrasi = n_integrasi;
      formasi.n_wawancara = n_wawancara;
      await formasi.save();

      return response.json({
        status: true,
        message: "Proses simpan data nilai berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...,terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a penilaian with id.
   * DELETE penilaians/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = PenilaianController;
