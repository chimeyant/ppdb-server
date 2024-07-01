"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use("Env");
const JadwalUjianHasil = use("App/Models/JadwalUjianHasil");
const JadwalUjian = use("App/Models/JadwalUjian");
const JadwalUjianPeserta = use("App/Models/JadwalUjianPeserta");
const JadwalUjianAbsen = use("App/Models/JadwalUjianAbsen");
const MasterSoalDetail = use("App/Models/MasterSoalDetail");
const Database = use("Database");
const Peserta = use("App/Models/Peserta");
var dateFormat = require("dateformat");

/**
 * Resourceful controller for interacting with jadwalujianhasils
 */
class JadwalUjianHasilController {
  /**
   * Show a list of all jadwalujianhasils.
   * GET jadwalujianhasils
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) { }

  /**
   * Render a form to be used for creating a new jadwalujianhasil.
   * GET jadwalujianhasils/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) { }

  /**
   * Create/save a new jadwalujianhasil.
   * POST jadwalujianhasils
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) { }

  /**
   * Display a single jadwalujianhasil.
   * GET jadwalujianhasils/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) { }

  /**
   * Render a form to update an existing jadwalujianhasil.
   * GET jadwalujianhasils/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) { }

  /**
   * Update jadwalujianhasil details.
   * PUT or PATCH jadwalujianhasils/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) { }

  /**
   * Delete a jadwalujianhasil with id.
   * DELETE jadwalujianhasils/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) { }

  async fetchInfoStatusUjian({ request, response, auth }) {
    const { jadwal_ujian_id } = request.all();

    const user = await auth.user;

    const jadwalujianabsen = await JadwalUjianAbsen.query()
      .where("jadwal_ujian_id", jadwal_ujian_id)
      .where("peserta_id", user.peserta_id)
      .first();

    try {
      let selesai = false;

      if (jadwalujianabsen) {
        selesai = jadwalujianabsen.selesai;
      }

      return selesai;
    } catch (error) {
      return response.json({
        status: false,
        message: error,
      });
    }
  }

  async createsoals({ request, response, auth }) {
    const { jadwal_ujian_id, token } = request.all();

    //token data

    if (token != "B1254VBC") {
      return response.json({
        status: false,
        lanjut: false,
        tokenstatus: false,
        message:
          "Token anda tidak benar, silahkan tanyakan kepada guru pengawas anda...!",
      });
    }

    try {
      //bind user
      const user = await auth.user;

      //cari jadwal ujian
      const jadwalujian = await JadwalUjian.find(jadwal_ujian_id);

      //cek soal peserta
      const jmlsoal = await JadwalUjianHasil.query()
        .where("jadwal_ujian_id", jadwal_ujian_id)
        .where("peserta_id", user.peserta_id)
        .getCount();

      //jika soal tidak sama akan dihapus
      if (Number(jmlsoal) != Number(jadwalujian.jumlah_soal)) {
        //haups data jadwal ujian hasil
        await JadwalUjianHasil.query()
          .where("jadwal_ujian_id", jadwal_ujian_id)
          .where("peserta_id", user.peserta_id)
          .delete();
      } else {
        return response.json({
          status: true,
          lanjut: true,
          tokenstatus: true,
          message: "Soal telah berhasil di buat ",
        });
      }

      //create soal baru

      //random soal bagian 1
      const soals = await MasterSoalDetail.query()
        .where("master_soal_id", jadwalujian.master_soal_id_1)
        .limit(jadwalujian.jumlah_soal_1)
        .orderByRaw("random()")
        .fetch();

      let num = 0;
      for (let i in soals.rows) {
        const rows = soals.rows[i];
        const jadwalujianhasil = new JadwalUjianHasil();
        num = num + 1;
        jadwalujianhasil.jadwal_ujian_id = jadwalujian.id;
        jadwalujianhasil.master_soal_id = jadwalujian.master_soal_id_1;
        jadwalujianhasil.master_soal_detail_id = rows.id;
        jadwalujianhasil.peserta_id = user.peserta_id;
        jadwalujianhasil.nomor = num;
        jadwalujianhasil.benar = rows.jawaban;
        jadwalujianhasil.bobot = jadwalujian.bobot;
        await jadwalujianhasil.save();
      }

      //random soal bagian 2
      const soals2 = await MasterSoalDetail.query()
        .where("master_soal_id", jadwalujian.master_soal_id_2)
        .limit(jadwalujian.jumlah_soal_2)
        .orderByRaw("random()")
        .fetch();

      for (let i in soals2.rows) {
        const rows = soals2.rows[i];
        const jadwalujianhasil = new JadwalUjianHasil();
        num = num + 1;
        jadwalujianhasil.jadwal_ujian_id = jadwalujian.id;
        jadwalujianhasil.master_soal_id = jadwalujian.master_soal_id_1;
        jadwalujianhasil.master_soal_detail_id = rows.id;
        jadwalujianhasil.peserta_id = user.peserta_id;
        jadwalujianhasil.nomor = num;
        jadwalujianhasil.benar = rows.jawaban;
        jadwalujianhasil.bobot = jadwalujian.bobot;
        await jadwalujianhasil.save();
      }

      //verifikasi soal terakhir
      const jmlsoalfinal = await JadwalUjianHasil.query()
        .where("jadwal_ujian_id", jadwal_ujian_id)
        .where("peserta_id", user.peserta_id)
        .getCount();

      if (Number(jmlsoalfinal != Number(jadwalujian.jumlah_soal))) {
        return response.json({
          status: true,
          lanjut: false,
          message:
            "Pembuatan soal tidak berhasil silahkan ulang kembali.., Klik Setuju untuk mengulang pembuatan soal!",
        });
      }

      //save to basen
      const date = new Date();
      const currtime = dateFormat(date.getTime(), "HH:MM:ss");

      await JadwalUjianAbsen.query()
        .where("jadwal_ujian_id", jadwalujian.id)
        .where("peserta_id", user.peserta_id)
        .update({ status: true, jam_masuk: currtime });

      return response.json({
        status: true,
        lanjut: true,
        tokenstatus: true,
        message: "Soal berhasil dibuat",
      });
    } catch (error) {
      return response.json({
        status: false,
        message:
          "Opps.., soal gagal dibuat silahkan ulang untuk beberapa saat lagi..!" +
          error,
      });
    }
  }

  async fetchInfoSoal({ request, response, auth }) {
    const { jadwal_ujian_id } = request.all();

    const user = await auth.user;

    const jadwalujian = await JadwalUjian.find(jadwal_ujian_id);
    const jadwalujianpeserta = await JadwalUjianPeserta.query()
      .where("jadwal_ujian_id", jadwal_ujian_id)
      .where("peserta_id", user.peserta_id)
      .first();

    const data = {};
    data["ujian"] = jadwalujian.name;
    data["jumlah_soal"] = jadwalujian.jumlah_soal;
    data["jam_mulai"] = jadwalujianpeserta.jam_mulai;
    data["jam_selesai"] = jadwalujianpeserta.jam_selesai;
    data["waktu"] = jadwalujian.waktu;

    return data;
  }

  async fetchsoals({ request, response, auth }) {
    const { jadwal_ujian_id, nomor } = request.all();

    try {
      //cari user
      const user = await auth.user;

      //cari jadwal ujian
      const jadwalujianhasil = await JadwalUjianHasil.query()
        .where("jadwal_ujian_id", jadwal_ujian_id)
        .where("peserta_id", user.peserta_id)
        .where("nomor", nomor)
        .first();

      const msd = await MasterSoalDetail.find(
        jadwalujianhasil.master_soal_detail_id
      );

      const data = {};
      data["id"] = jadwalujianhasil.id;
      data["nomor"] = jadwalujianhasil.nomor;
      data["soal"] = msd.soal;
      data["pilihan_a"] = msd.pilihan_a;
      data["pilihan_b"] = msd.pilihan_b;
      data["pilihan_c"] = msd.pilihan_c;
      data["pilihan_d"] = msd.pilihan_d;
      data["pilihan_e"] = msd.pilihan_e;
      //gambar
      data["soal_gambar"] = msd.soal_gambar ? true : false;
      data["soal_gambar_path"] = msd.soal_gambar
        ? Env.get("BASE_URL") + "/api/download/soals/" + msd.soal_gambar
        : "/";
      //gambar pilihan
      data["pilihan_a_gambar"] = msd.pilihan_a_gambar ? true : false;
      data["pilihan_a_gambar_path"] = msd.pilihan_a_gambar
        ? Env.get("BASE_URL") + "/api/download/soals/" + msd.pilihan_a_gambar
        : "/";

      data["pilihan_b_gambar"] = msd.pilihan_b_gambar ? true : false;
      data["pilihan_b_gambar_path"] = msd.pilihan_b_gambar
        ? Env.get("BASE_URL") + "/api/download/soals/" + msd.pilihan_b_gambar
        : "";

      data["pilihan_c_gambar"] = msd.pilihan_c_gambar ? true : false;
      data["pilihan_c_gambar_path"] = msd.pilihan_c_gambar
        ? Env.get("BASE_URL") + "/api/download/soals/" + msd.pilihan_c_gambar
        : "/";
      data["pilihan_d_gambar"] = msd.pilihan_d_gambar ? true : false;
      data["pilihan_d_gambar_path"] = msd.pilihan_d_gambar
        ? Env.get("BASE_URL") + "/api/download/soals/" + msd.pilihan_d_gambar
        : "/";
      data["pilihan_e_gambar"] = msd.pilihan_e_gambar ? true : false;
      data["pilihan_e_gambar_path"] = msd.pilihan_e_gambar
        ? Env.get("BASE_URL") + "/api/download/soals/" + msd.pilihan_e_gambar
        : "/";
      data["jawaban"] = jadwalujianhasil.jawaban;

      return data;
    } catch (error) {
      return error;
    }
  }

  async storeJawaban({ request, response, auth }) {
    const { id, pilihan } = request.all();

    var date = await new Date();
    var current_date = dateFormat(new Date(), "yyyy-mm-dd");
    var current_time = dateFormat(date.getTime(), "HH:MM:ss");

    const user = await auth.user;

    const jadwalujianpeserta = await JadwalUjianPeserta.query()
      .where("peserta_id", user.peserta_id)
      .first();

    /*

    if (
      this.timeStringToFloat(jadwalujianpeserta.jam_selesai) >=
      this.timeStringToFloat(current_time)
    ) {
      return response.json({
        status: true,
        exp: true,
        message: "Waktu Telah habis",
      });
    }

    */

    try {
      const jadwalujianhasil = await JadwalUjianHasil.find(id);
      jadwalujianhasil.nilai =
        jadwalujianhasil.benar == pilihan ? jadwalujianhasil.bobot : 0;
      jadwalujianhasil.jawaban = pilihan;
      await jadwalujianhasil.save();

      return response.json({
        status: true,
        exp: false,
        jawaban: pilihan,
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Jaringan sedang sibuk " + error,
      });
    }
  }

  async konfirmasiselesai({ request, response, auth }) {
    const { jadwal_ujian_id } = request.all();

    const user = await auth.user;

    try {
      //cari nialai
      const nilai = await Database.from("jadwal_ujian_hasils")
        .where("jadwal_ujian_id", jadwal_ujian_id)
        .where("peserta_id", user.peserta_id)
        .getSum("nilai");

      //simpan niali ke absen
      const date = new Date();
      const currtime = dateFormat(date, "HH:MM:ss");

      const jadwalujianabsen = await JadwalUjianAbsen.query()
        .where("jadwal_ujian_id", jadwal_ujian_id)
        .where("peserta_id", user.peserta_id)
        .first();

      const jua = await JadwalUjianAbsen.find(jadwalujianabsen.id);

      jua.jam_keluar = currtime;
      jua.nilai = nilai;
      jua.selesai = true;

      await jua.save();

      //update nilai teori
      await Peserta.query()
        .where("id", user.peserta_id)
        .update({ nilai_teori: nilai });

      return response.json({
        status: true,
        message: "Ujian telah selesai",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., silahkan ulang beberapa saat lagi " + error,
      });
    }
  }

  timeStringToFloat(time) {
    var hoursMinutes = time.split(/[.:]/);
    var hours = parseInt(hoursMinutes[0], 10);
    var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
  }
}

module.exports = JadwalUjianHasilController;
