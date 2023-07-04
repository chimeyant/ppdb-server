"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const JadwalUjianAbsen = use("App/Models/JadwalUjianAbsen");
const JadwalUjian = use("App/Models/JadwalUjian");
const Peserta = use("App/Models/Peserta");
const ProgramKeahlian = use("App/Models/ProgramKeahlian");
const JadwalUjianSesi = use("App/Models/JadwalUjianSesi");
const ProfilSekolah = use("App/Models/ProfilSekolah");
const JadwalUjianPeserta = use("App/Models/JadwalUjianPeserta");
var dateFormat = require("dateformat");
const Database = use("Database");
const Axios = use("axios");

/**
 * Resourceful controller for interacting with jadwalujianabsens
 */
class JadwalUjianAbsenController {
  /**
   * Show a list of all jadwalujianabsens.
   * GET jadwalujianabsens
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ params, request, response, view }) {
    const { tanggal, jadwal_ujian_sesi_id } = params;

    const jadwalujianabsen = await JadwalUjianAbsen.query()
      .where("tanggal", tanggal)
      .where("jadwal_ujian_sesi_id", jadwal_ujian_sesi_id)
      .fetch();

    const datas = [];

    for (let i in jadwalujianabsen.rows) {
      const rows = jadwalujianabsen.rows[i];
      const peserta = await Peserta.find(rows.peserta_id);
      const programkeahlian = await ProgramKeahlian.find(peserta.jurusan_id_1);
      const jadwalujiansesi = await JadwalUjianSesi.find(
        rows.jadwal_ujian_sesi_id
      );
      const row = {};
      row["id"] = rows.id;

      row["num"] = i++ + 1;
      row["noreg"] = peserta.nomor_register;
      row["nama"] = peserta.nama;
      row["jurusan"] = programkeahlian.name;
      row["jam_masuk"] = rows.jam_masuk;
      row["jam_keluar"] = rows.jam_keluar;
      row["nilai"] = rows.nilai;
      row["status"] = rows.selesai
        ? "SELESAI"
        : rows.jam_masuk
        ? "SEDANG MENGERJAKAN"
        : "BELUM HADIR";
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new jadwalujianabsen.
   * GET jadwalujianabsens/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new jadwalujianabsen.
   * POST jadwalujianabsens
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single jadwalujianabsen.
   * GET jadwalujianabsens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing jadwalujianabsen.
   * GET jadwalujianabsens/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update jadwalujianabsen details.
   * PUT or PATCH jadwalujianabsens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a jadwalujianabsen with id.
   * DELETE jadwalujianabsens/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}

  async createsusulan({ request, response }) {
    const {
      tanggal,
      jadwal_ujian_sesi_id,
      tanggal_susulan,
      jam_mulai,
      jam_selesai,
    } = request.all();

    try {
      const jadwalujianabsen = await JadwalUjianAbsen.query()
        .where("tanggal", tanggal)
        .where("jadwal_ujian_sesi_id", jadwal_ujian_sesi_id)
        .where("selesai", false)
        .fetch();

      const curdate = dateFormat(tanggal_susulan, "yyyy-mm-dd");

      for (let i in jadwalujianabsen.rows) {
        const rows = jadwalujianabsen.rows[i];
        //update data jadwal ujian peserta
        await JadwalUjianPeserta.query()
          .where("jadwal_ujian_id", rows.jadwal_ujian_id)
          .where("peserta_id", rows.peserta_id)
          .update({
            tanggal: curdate,
            jam_mulai: jam_mulai,
            jam_selesai: jam_selesai,
            status_pesan: false,
          });

        //update data jadwal ujian absen
        await JadwalUjianAbsen.query()
          .where("jadwal_ujian_id", rows.jadwal_ujian_id)
          .where("peserta_id", rows.peserta_id)
          .update({ tanggal: curdate });
      }

      return response.json({
        status: true,
        message: "Proses buat jadwal ujian susulan berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi keslahan  " + error,
      });
    }
  }

  async sendprivatemessage({ request, response }) {
    const { id } = request.all();

    try {
      const jadwalujianabsen = await JadwalUjianAbsen.find(id);
      const peserta = await Peserta.find(jadwalujianabsen.peserta_id);
      const jadwalujian = await JadwalUjian.find(
        jadwalujianabsen.jadwal_ujian_id
      );

      const profilsekolah = await ProfilSekolah.query().first();

      if (profilsekolah.sms) {
        const strPesan =
          "*INFORMASI PPDB 2022/2023* " +
          profilsekolah.nama +
          " . *" +
          peserta.nomor_register +
          "* Atas Nama " +
          peserta.nama +
          " mengingatkan bahwa anda ada  Jadwal " +
          jadwalujian.name +
          " Anda pada tanggal " +
          dateFormat(jadwalujian.tanggal, "dd/mm/yyyy") +
          " Jam " +
          " secara *online* " +
          profilsekolah.url +
          "/login *TETAP DIRUMAH SAJA*";

        const msg = {
          apikey: profilsekolah.apikey,
          nomor: peserta.nomor_hp,
          pesan: strPesan,
        };

        await Axios.post("http://api.senderwa.com/api/v2/send-wa", msg);
      }

      return response.json({
        status: true,
        message: "Kirim pesan berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  async resetujian({ request, response }) {
    const { id } = request.all();
    try {
      const jadwalujianabsen = await JadwalUjianAbsen.find(id);
      jadwalujianabsen.selesai = false;
      return response.json({
        status: true,
        message: "Proses reset ujian berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  async setselesai({ request, response }) {
    const { id } = request.all();
    try {
      const date = new Date();
      const currtime = dateFormat(date, "HH:MM:ss");

      const absen = await JadwalUjianAbsen.find(id);

      const jadwalUjianId = absen.jadwal_ujian_id;
      const pesertaId = absen.peserta_id;

      const nilai = await Database.from("jadwal_ujian_hasils")
        .where("jadwal_ujian_id", jadwalUjianId)
        .where("peserta_id", pesertaId)
        .getSum("nilai");

      //hitung nilai dan update
      absen.jam_keluar = currtime;
      absen.nilai = nilai;
      absen.status = true;
      await absen.save();

      //update nilai teori
      await Peserta.query()
        .where("id", pesertaId)
        .update({ nilai_teori: nilai });

      return response.json({
        status: true,
        message: "Set Ujian Selesai Berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan",
        error: error,
      });
    }
  }
}

module.exports = JadwalUjianAbsenController;
