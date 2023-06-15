"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Formasi = use("App/Models/Formasi");
const Opd = use("App/Models/Opd");
const Jurusan = use("App/Models/Jurusan");
const { validate } = use("Validator");

var dateFormat = require("dateformat");

/**
 * Resourceful controller for interacting with formasis
 */
class FormasiController {
  /**
   * Show a list of all formasis.
   * GET formasis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const formasi = await Formasi.query().orderBy("id", "desc").fetch();

    const datas = [];

    for (let i in formasi.rows) {
      const rows = formasi.rows[i];
      const row = {};
      const opd = await Opd.findOrFail(rows.opd_id);
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["nama_jabatan"] = rows.nama_jabatan;
      row["jenis_jabatan"] = rows.jenis_jabatan;
      row["tanggal"] =
        dateFormat(rows.tanggal_mulai, "dd/mm/yyyy") +
        " s.d " +
        dateFormat(rows.tanggal_selesai, "dd/mm/yyyy");
      row["opd"] = opd.name;
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new formasi.
   * GET formasis/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new formasi.
   * POST formasis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const {
      opd_id,
      skpd2_id,
      skpd3_id,
      unit_kerja_id,
      nama_jabatan,
      jenis_jabatan,
      keterangan,
      pendidikan_id,
      jurusans,
      jumlah,
      tanggal_mulai,
      tanggal_selesai,
    } = request.all();

    const rules = {
      opd_id: "required",

      nama_jabatan: "required",
      jenis_jabatan: "required",
      pendidikan_id: "required",
      jurusans: "required",
      jumlah: "required",
      tanggal_mulai: "required",
      tanggal_selesai: "required",
    };

    const messages = {
      "opd_id.required": "OPD harus dipilih",

      "nama_jabatan.required": "Nama jabatan harus diisi",
      "jenis_jabatan.required": "Jenis jabatan harus diisi",
      "pendidikan.required": "Pendidikan harus dipilih",
      "jurusans.required": " Jurusan harus dipilih",
      "jumlah.required": "Jumlah formasi harus diisi",

      "tanggal_mulai.required": "Tanggal mulai harus di pilih/diisi",
      "tanggal_selesai.required": "Tanggal selesai harus dipilih/diisi",
    };

    const Validations = await validate(request.all(), rules, messages);

    if (Validations.fails()) {
      const msg = await Validations.messages();
      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const formasi = new Formasi();
      formasi.opd_id = opd_id;
      formasi.skpd2_id = skpd2_id;
      formasi.skpd3_id = skpd3_id;
      formasi.unit_kerja_id = unit_kerja_id;
      formasi.nama_jabatan = nama_jabatan;
      formasi.jenis_jabatan = jenis_jabatan;
      formasi.pendidikan_id = pendidikan_id;
      formasi.jurusans = JSON.stringify(jurusans);
      formasi.jumlah = jumlah;
      formasi.tanggal_mulai = tanggal_mulai;
      formasi.tanggal_selesai = tanggal_selesai;
      formasi.keterangan = keterangan;
      await formasi.save();

      return response.json({
        status: true,
        message: "Proses tambah formasi berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Display a single formasi.
   * GET formasis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;
    const formasi = await Formasi.findOrFail(id);

    const data = {};

    const jurusan = await Jurusan.query()
      .whereIn("id", formasi.jurusans)
      .fetch();

    data["id"] = formasi.id;
    data["opd_id"] = Number(formasi.opd_id);
    data["skpd2_id"] = Number(formasi.skpd2_id);
    data["skpd3_id"] = Number(formasi.skpd3_id);
    data["unit_kerja_id"] = Number(formasi.unit_kerja_id);
    data["jenis_jabatan"] = formasi.jenis_jabatan;
    data["nama_jabatan"] = formasi.nama_jabatan;
    data["keterangan"] = formasi.keterangan;
    data["pendidikan_id"] = Number(formasi.pendidikan_id);
    data["jurusans"] = formasi.jurusans;
    data["jumlah"] = formasi.jumlah;
    data["tanggal_mulai"] = dateFormat(formasi.tanggal_mulai, "yyyy-mm-dd");
    data["tanggal_selesai"] = dateFormat(formasi.tanggal_selesai, "yyyy-mm-dd");
    data["detjurusan"] = jurusan;

    return data;
  }

  /**
   * Render a form to update an existing formasi.
   * GET formasis/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update formasi details.
   * PUT or PATCH formasis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const {
      opd_id,
      skpd2_id,
      skpd3_id,
      unit_kerja_id,
      nama_jabatan,
      jenis_jabatan,
      keterangan,
      pendidikan_id,
      jurusans,
      jumlah,
      tanggal_mulai,
      tanggal_selesai,
    } = request.all();

    const rules = {
      opd_id: "required",
      nama_jabatan: "required",
      jenis_jabatan: "required",
      pendidikan_id: "required",
      jurusans: "required",
      jumlah: "required",
      tanggal_mulai: "required",
      tanggal_selesai: "required",
    };

    const messages = {
      "opd_id.required": "OPD harus dipilih",
      "nama_jabatan.required": "Nama jabatan harus diisi",
      "jenis_jabatan.required": "Jenis jabatan harus diisi",
      "pendidikan.required": "Pendidikan harus dipilih",
      "jurusans.required": " Jurusan harus dipilih",
      "jumlah.required": "Jumlah formasi harus diisi",

      "tanggal_mulai.required": "Tanggal mulai harus di pilih/diisi",
      "tanggal_selesai.required": "Tanggal selesai harus dipilih/diisi",
    };

    const Validations = await validate(request.all(), rules, messages);

    if (Validations.fails()) {
      const msg = await Validations.messages();
      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const formasi = await Formasi.find(id);
      formasi.opd_id = opd_id;
      formasi.skpd2_id = skpd2_id;
      formasi.skpd3_id = skpd3_id;
      formasi.unit_kerja_id = unit_kerja_id;
      formasi.nama_jabatan = nama_jabatan;
      formasi.jenis_jabatan = jenis_jabatan;
      formasi.pendidikan_id = pendidikan_id;
      formasi.jurusans = JSON.stringify(jurusans);
      formasi.jumlah = jumlah;
      formasi.tanggal_mulai = tanggal_mulai;
      formasi.tanggal_selesai = tanggal_selesai;
      formasi.keterangan = keterangan;
      await formasi.save();

      return response.json({
        status: true,
        message: "Proses ubah formasi berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a formasi with id.
   * DELETE formasis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;
    try {
      const formasi = await Formasi.find(id);
      formasi.delete();

      return response.json({
        status: true,
        message: "Proses ubah data berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...terjadi kesalahan " + error,
      });
    }
  }
}

module.exports = FormasiController;
