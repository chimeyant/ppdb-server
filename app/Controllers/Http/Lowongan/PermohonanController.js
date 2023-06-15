"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use("Env");
const Permohonan = use("App/Models/FormasiApply");
const Peserta = use("App/Models/Peserta");
const Formasi = use("App/Models/Formasi");
const Opd = use("App/Models/Opd");
const Pendidikan = use("App/Models/Pendidikan");
const Jurusan = use("App/Models/Jurusan");
const Provinsi = use("App/Models/Province");
const Kabupaten = use("App/Models/Regency");
const Kecamatan = use("App/Models/District");
const Desa = use("App/Models/Village");
const Dokumen = use("App/Models/Dokuman");
const PesertaDokumen = use("App/Models/PesertaDokuman");
const Pesan = use("App/Models/Pesan");
const User = use("App/Models/User");

var dateFormat = require("dateformat");

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
  async index({ request, response, view }) {
    const data = await Permohonan.query().orderBy("id", "asc").fetch();

    const datas = [];

    for (let i in data.rows) {
      const rows = data.rows[i];
      const peserta = await Peserta.findOrFail(rows.peserta_id);
      const formasi = await Formasi.findOrFail(rows.formasi_id);
      const opd = await Opd.findOrFail(formasi.opd_id);
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["name"] = peserta.nama;
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
  async store({ request, response }) {}

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

    const permohonan = await Permohonan.findOrFail(id);
    const peserta = await Peserta.findOrFail(permohonan.peserta_id);
    const provinsi = await Provinsi.findOrFail(peserta.province_id);
    const kabupaten = await Kabupaten.findOrFail(peserta.regency_id);
    const kecamatan = await Kecamatan.findOrFail(peserta.district_id);
    const desa = await Desa.findOrFail(peserta.village_id);

    const data = {};
    data["id"] = permohonan.id;
    data["nama"] = peserta.nama;
    data["jenis_kelamin"] =
      peserta.jenis_kelamin == "L" ? "LAKI-LAKI" : "PEREMPUAN";
    data["ttl"] =
      peserta.tempat_lahir +
      ", " +
      dateFormat(peserta.tanggal_lahir, "dd/mm/yyyy");
    data["nip"] = peserta.nip;
    data["nik"] = peserta.nik;

    const pendidikan = await Pendidikan.findOrFail(peserta.pendidikan_id);
    data["pendidikan"] = pendidikan.name;

    const jurusan = await Jurusan.findOrFail(peserta.jurusan_id);

    data["jurusan"] = jurusan.name;
    data["sekolah"] = peserta.sekolah;

    data["instansi_asal"] = peserta.jenis_pns;
    data["perangkat_daerah_pemohon"] = peserta.perangkat_daerah_pemohon;
    data["jabatan_asal"] = peserta.jabatan_asal;

    data["provinsi"] = provinsi.name;
    data["kabupaten"] = kabupaten.name;
    data["kecamatan"] = kecamatan.name;
    data["desa"] = desa.name;
    data["alamat"] = peserta.alamat_asal;
    data["telp"] = peserta.telp;
    data["path"] =
      Env.get("BASE_URL") + "/api/download/peserta/" + peserta.photo;

    const dokumenpeserta = await PesertaDokumen.query()
      .where("peserta_id", peserta.id)
      .orderBy("id", "asc")
      .fetch();

    const dokumens = [];

    for (let i in dokumenpeserta.rows) {
      const rows = dokumenpeserta.rows[i];
      const dokumen = await Dokumen.findOrFail(rows.dokumen_id);
      const row = {};
      row["id"] = rows.id;
      row["name"] = dokumen.name;
      row["tanggal"] = dateFormat(rows.updated_at, "dd/mm/yyyy");
      row["wajib"] = rows.wajib ? "Wajib" : "Opsional";
      row["path"] =
        Env.get("BASE_URL") + "/api/download/permohonan/" + rows.path;
      row["status"] =
        rows.status == null
          ? "Belum Diverifikasi"
          : rows.status == 1
          ? "Sudah Diverifikasi"
          : "Ditolak";
      dokumens.push(row);
    }

    data["dokumens"] = dokumens;

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
  async update({ params, request, response, auth }) {
    const { id } = params;
    const { status, pesan } = request.all();

    try {
      const permohonan = await Permohonan.findOrFail(id);
      permohonan.status = status;
      await permohonan.save();

      //cek ada pesan atau tidak
      if (pesan != null || pesan != "") {
        //cari user peserta
        const peserta = await User.query()
          .where("peserta_id", permohonan.peserta_id)
          .first();

        const user = auth.user;

        const psn = new Pesan();
        psn.title = "Konfirmasi";
        psn.body = pesan;
        psn.from_id = user.id;
        psn.to_id = peserta.id;
        psn.status = "1";
        await psn.save();
      }

      //save pesan

      return response.json({
        status: true,
        message: "Proses verifikasi berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
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
    const { id } = params;

    try {
      const permohonan = await Permohonan.find(id);
      await permohonan.delete();

      return response.json({
        status: true,
        message: "Proses hapus data berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  async updatedokumen({ params, request, response }) {
    const { id } = params;
    const { status } = request.all();

    try {
      const dokumenpeserta = await PesertaDokumen.find(id);
      dokumenpeserta.status = status;
      await dokumenpeserta.save();

      return response.json({
        status: true,
        message: "Proses update dokumen berhasil..!",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }
}

module.exports = PermohonanController;
