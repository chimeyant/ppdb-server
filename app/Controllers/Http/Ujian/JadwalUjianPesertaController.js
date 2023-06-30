"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const ProfilSekolah = use("App/Models/ProfilSekolah");
const got = use("got");
const Peserta = use("App/Models/Peserta");
const JadwalUjian = use("App/Models/JadwalUjian");
const JadwalUjianSesi = use("App/Models/JadwalUjianSesi");
const JadwalUjianPeserta = use("App/Models/JadwalUjianPeserta");
const JadwalUjianAbsen = use("App/Models/JadwalUjianAbsen");
const ProgramKeahlian = use("App/Models/ProgramKeahlian");
const JadwalUjianHasil = use("App/Models/JadwalUjianHasil");
var dateFormat = require("dateformat");
const FormData = use("form-data");
const Axios = use("axios");
const SendWa = use("App/Jobs/Producers/SendWa");
const Wa = use("App/Models/Wa");
const Queue = use("Queue");

/**
 * Resourceful controller for interacting with jadwalujianpesertas
 */
class JadwalUjianPesertaController {
  /**
   * Show a list of all jadwalujianpesertas.
   * GET jadwalujianpesertas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ params, request, response, view }) {
    const { tanggal, jadwal_ujian_sesi_id } = params;

    const jadwalujianpeserta = await JadwalUjianPeserta.query()
      .where("tanggal", tanggal)
      .where("jadwal_ujian_sesi_id", jadwal_ujian_sesi_id)
      .fetch();

    const datas = [];

    for (let i in jadwalujianpeserta.rows) {
      const rows = jadwalujianpeserta.rows[i];
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
      row["tanggal"] = dateFormat(rows.tanggal, "dd/mm/yyyy");
      row["sesi"] = jadwalujiansesi.name;
      row["status_pesan"] = rows.status_pesan ? "Terkirim" : "";
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new jadwalujianpeserta.
   * GET jadwalujianpesertas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new jadwalujianpeserta.
   * POST jadwalujianpesertas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single jadwalujianpeserta.
   * GET jadwalujianpesertas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing jadwalujianpeserta.
   * GET jadwalujianpesertas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update jadwalujianpeserta details.
   * PUT or PATCH jadwalujianpesertas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a jadwalujianpeserta with id.
   * DELETE jadwalujianpesertas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}

  async generate({ request, response }) {
    const { tanggal, jadwal_ujian_sesi_id } = request.all();

    try {
      //cari ketersediaan jadwal
      const jmlujian = await JadwalUjian.query()
        .where("tanggal", dateFormat(tanggal, "yyyy-mm-dd"))
        .getCount();

      if (jmlujian < 1) {
        return response.json({
          status: false,
          message:
            "Opp..., tidak ditemukan jadwal ujian pada tanggal tersebut ",
        });
      }

      //cari jadwal ujian peserta
      const jmlpeserta = await JadwalUjianPeserta.query()
        .where("tanggal", dateFormat(tanggal, "yyyy-mm-dd"))
        .where("jadwal_ujian_sesi_id", jadwal_ujian_sesi_id)
        .getCount();

      if (jmlpeserta > 0) {
        return response.json({
          status: false,
          message: "Jadwal ujian peserta telah tersedia",
        });
      }

      //cari limitasi ujian per sesi
      const profilsekolah = await ProfilSekolah.query().first();

      const pesertas_status = profilsekolah.pesertas;
      const limit_sesi = Number(profilsekolah.limit_sesi);

      //ambil pesertas ujian
      const pesertas = await Peserta.query()
        .whereIn("verifikasi_status", pesertas_status)
        .where("ujian_status", false)
        .limit(limit_sesi)
        .orderBy("id", "asc")
        .fetch();

      for (let i in pesertas.rows) {
        const rows = pesertas.rows[i];

        //cari jadwal
        const jadwalujian = await JadwalUjian.query()
          .where("tanggal", tanggal)
          .where("program_keahlian_id", rows.jurusan_id_1)
          .first();

        //cari sesi
        const sesi = await JadwalUjianSesi.find(jadwal_ujian_sesi_id);

        if (jadwalujian) {
          const jadwalujianpeserta = new JadwalUjianPeserta();
          jadwalujianpeserta.jadwal_ujian_id = jadwalujian.id;
          jadwalujianpeserta.jadwal_ujian_sesi_id = sesi.id;
          jadwalujianpeserta.peserta_id = rows.id;
          jadwalujianpeserta.tanggal = dateFormat(tanggal, "yyyy-mm-dd");
          jadwalujianpeserta.jam_mulai = sesi.jam_mulai;
          jadwalujianpeserta.jam_selesai = sesi.jam_selesai;
          jadwalujianpeserta.waktu = jadwalujian.waktu;
          await jadwalujianpeserta.save();

          const jadwalujianabsen = new JadwalUjianAbsen();
          jadwalujianabsen.jadwal_ujian_id = jadwalujian.id;
          jadwalujianabsen.jadwal_ujian_sesi_id = sesi.id;
          jadwalujianabsen.peserta_id = rows.id;
          jadwalujianabsen.tanggal = dateFormat(tanggal, "yyyy-mm-dd");
          jadwalujianabsen.time_left = jadwalujian.waktu;
          await jadwalujianabsen.save();

          //update peserta statu ujian
          await Peserta.query()
            .where("id", rows.id)
            .update({ ujian_status: true, nilai_teori: 0 });
        }
      }

      return response.json({
        status: true,
        message: "Proses pembuatan jadwal ujian peserta berhasil oke",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  async reset({ request, response, auth }) {
    const { tanggal, jadwal_ujian_sesi_id } = request.all();

    try {
      const jup = await JadwalUjianPeserta.query()
        .where("tanggal", dateFormat(tanggal, "yyyy-mm-dd"))
        .where("jadwal_ujian_sesi_id", jadwal_ujian_sesi_id)
        .orderBy("id", "asc")
        .fetch();

      const pesertaid = [];
      const jadwalujianid = [];

      for (let i in jup.rows) {
        const rows = jup.rows[i];

        //ha[us dari daftar ujian hasil
        const rowpesertaid = {};
        rowpesertaid["id"] = rows.peserta_id;

        const rowjadwalujianid = rows.jadwal_ujian_id;

        const row_peserta_id = {};
        row_peserta_id = Number(rowpesertaid);

        const row_jadwal_ujian_id = {};
        row_jadwal_ujian_id = Number(rowjadwalujianid);

        pesertaid.push(row_peserta_id);
        jadwalujianid.push(row_jadwal_ujian_id);

        /**
         * Deprecated
         */

        // await JadwalUjianHasil.query()
        //   .where("jadwal_ujian_id", rows.jadwal_ujian_id)
        //   .where("peserta_id", rows.peserta_id)
        //   .delete();

        //update data peserta ujian statu jadi false
        // await Peserta.query()
        //   .where("id", rows.peserta_id)
        //   .update({ ujian_status: false, nilai_teori: 0 });
      }

      await JadwalUjianHasil.query()
        .whereIn("jadwal_ujian_id", jadwalujianid)
        .whereIn("peserta_id", pesertaid)
        .delete();

      await Peserta.query()
        .whereIn(id, pesertaid)
        .update({ ujian_status: true });

      await JadwalUjianPeserta.query()
        .where("tanggal", dateFormat(tanggal, "yyyy-mm-dd"))
        .where("jadwal_ujian_sesi_id", jadwal_ujian_sesi_id)
        .delete();

      await JadwalUjianAbsen.query()
        .where("tanggal", dateFormat(tanggal, "yyyy-mm-dd"))
        .where("jadwal_ujian_sesi_id", jadwal_ujian_sesi_id)
        .delete();

      return response.json({
        status: true,
        message: "Proses reset jadwal ujian berhasil..!",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  async sendpublicmessage({ request, response }) {
    const { tanggal, jadwal_ujian_sesi_id } = request.all();

    const jadwalujianpeserta = await JadwalUjianPeserta.query()
      .where("tanggal", dateFormat(tanggal, "yyyy-mm-dd"))
      .where("jadwal_ujian_sesi_id", jadwal_ujian_sesi_id)
      .orderBy("updated_at", "asc")
      .fetch();

    const profilsekolah = await ProfilSekolah.query().first();

    let waktujeda = 5;
    for (let i in jadwalujianpeserta.rows) {
      const rows = jadwalujianpeserta.rows[i];
      const peserta = await Peserta.find(rows.peserta_id);
      const ujian = await JadwalUjian.find(rows.jadwal_ujian_id);

      if (profilsekolah.sms) {
        let strPesan =
          "*INFORMASI PPDB 2022/2023* " +
          profilsekolah.nama +
          " . *" +
          peserta.nomor_register +
          "* Atas Nama " +
          peserta.nama +
          " Jadwal " +
          ujian.name +
          " Anda pada tanggal " +
          dateFormat(rows.tanggal, "dd/mm/yyyy") +
          " jam " +
          rows.jam_mulai +
          " secara online di " +
          profilsekolah.url +
          "/login";

        const msg = {
          apikey: profilsekolah.apikey,
          nomor: peserta.nomor_hp,
          pesan: strPesan,
          steptime: waktujeda,
        };

        await Axios.post("http://api.senderwa.com/api/v2/send-wa", msg);

        await JadwalUjianPeserta.query()
          .where("id", rows.id)
          .update({ status_pesan: true });
      }

      waktujeda = waktujeda + 5;
    }

    return response.json({
      status: true,
      message: "Proses pengiriman pesan selesai",
    });
  }

  async sendprivatemessage({ request, response }) {
    const { id } = request.all();

    try {
      const profilsekolah = await ProfilSekolah.query().first();
      const jadwalujianpeserta = await JadwalUjianPeserta.find(id);
      const jadwalujian = await JadwalUjian.find(
        jadwalujianpeserta.jadwal_ujian_id
      );
      const peserta = await Peserta.find(jadwalujianpeserta.peserta_id);

      let strPesan =
        "*INFORMASI PPDB 2022/2023* " +
        profilsekolah.nama +
        " . *" +
        peserta.nomor_register +
        "* Atas Nama " +
        peserta.nama +
        " Jadwal " +
        jadwalujian.name +
        " Anda pada tanggal " +
        dateFormat(jadwalujian.tanggal, "dd/mm/yyyy") +
        " jam " +
        jadwalujianpeserta.jam_mulai +
        " secara online di " +
        profilsekolah.url +
        "/login";

      const msg = {
        apikey: profilsekolah.apikey,
        nomor: peserta.nomor_hp,
        pesan: strPesan,
      };

      await Axios.post("http://api.senderwa.com/api/v2/send-wa", msg);

      await JadwalUjianPeserta.query()
        .where("id", id)
        .update({ status_pesan: true });

      return response.json({
        status: true,
        message: "Kirim pesan berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps terjadi kesalahan " + error,
      });
    }
  }
}

module.exports = JadwalUjianPesertaController;
