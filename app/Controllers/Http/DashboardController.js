"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use("Env");
const Peserta = use("App/Models/Peserta");
const Pesan = use("App/Models/Pesan");
const User = use("App/Models/User");
const ProgramKeahlian = use("App/Models/ProgramKeahlian");
var dateFormat = require("dateformat");
const ProfilSekolah = use("App/Models/ProfilSekolah");

/**
 * Resourceful controller for interacting with dashboards
 */
class DashboardController {
  /**
   * Show a list of all dashboards.
   * GET dashboards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const currdate = await dateFormat(Date.now(), "yyyy-mm-dd");

    return response.json({});
  }

  async getpesan({ request, response, auth }) {
    const user = auth.user;

    const profilsekolah = await ProfilSekolah.query().first();

    const pesan = await Pesan.query().orderBy("id", "desc").limit(5).fetch();

    const pesans = [];

    for (let i in pesan.rows) {
      const rows = pesan.rows[i];
      const user = await User.find(rows.from_id);
      const row = {};
      row["id"] = rows.id;
      row["title"] = rows.title;
      row["body"] = rows.body;
      row["dari"] = user.username;
      row["from_id"] = rows.from_id;
      row["from_name"] = user.username;
      row["avatar"] =
        user.avatar == null
          ? Env.get("BASE_URL") + "/api/download/logo/" + profilsekolah.logo
          : Env.get("BASE_URL") + "/api/download/avatar/" + user.avatar;
      row["status"] = rows.status;

      pesans.push(row);
    }

    return response.json({
      pesans: pesans,
    });
  }

  async pendaftarperjeniskelamin({ request, response }) {
    const jmll = await Peserta.query().where("jenis_kelamin", "L").getCount();
    const jmlp = await Peserta.query().where("jenis_kelamin", "P").getCount();

    const datas = [];
    datas.push(Number(jmll));
    datas.push(Number(jmlp));
    const labels = ["Laki-laki", "Perempuan"];

    return response.json({
      labels: labels,
      datas: datas,
      jmll: Number(jmll),
      jmlp: Number(jmlp),
    });
  }

  async pendaftarperjurusan({ request, response }) {
    const programkeahlian = await ProgramKeahlian.all();

    const datas = [];
    const labels = [];

    for (let i in programkeahlian.rows) {
      const rows = programkeahlian.rows[i];
      const jmlpeserta = await Peserta.query()
        .where("jurusan_id_1", rows.id)
        .getCount();

      labels.push(rows.singkat);
      datas.push(Number(jmlpeserta));
      //datas.push(Number(i++ + 1))
    }

    return response.json({
      labels: labels,
      datas: datas,
    });
  }

  async pendaftarperjurusanperpilihan({ request, response }) {
    const programkeahlian = await ProgramKeahlian.all();

    const datas = [];

    for (let i in programkeahlian.rows) {
      const rows = programkeahlian.rows[i];
      const jmlpil1 = await Peserta.query()
        .where("jurusan_id_1", rows.id)
        .getCount();
      const jmlpil2 = await Peserta.query()
        .where("jurusan_id_2", rows.id)
        .getCount();

      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["name"] = rows.name;
      row["jmlpil1"] = jmlpil1;
      row["jmlpil2"] = jmlpil2;

      datas.push(row);
    }

    return response.json({
      datas: datas,
    });
  }

  async perstatus({ request, response }) {
    const jmlpengajuan = await Peserta.query()
      .where("verifikasi_status", "1")
      .getCount();
    const jmlditolak = await Peserta.query()
      .where("verifikasi_status", "5")
      .getCount();
    const jmlperbaikan = await Peserta.query()
      .where("verifikasi_status", "3")
      .orWhere("verifikasi_status", "2")
      .getCount();
    const jmlditerima = await Peserta.query()
      .where("verifikasi_status", "4")
      .getCount();
    const jmldicabut = await Peserta.query()
      .where("verifikasi_status", "6")
      .getCount();

    const labels = ["Pengajuan", "Perbaikan", "Ditolak", "Diterima", "Dicabut"];

    const datas = [
      Number(jmlpengajuan),
      Number(jmlperbaikan),
      Number(jmlditolak),
      Number(jmlditerima),
      Number(jmldicabut),
    ];

    return response.json({
      labels: labels,
      datas: datas,
    });
  }

  async perhari({ request, response }) {
    const programkeahlian = await ProgramKeahlian.all();

    const headers = [];
    const records = [];

    const tanggalheader = {};
    tanggalheader["text"] = "TANGGAL";
    tanggalheader["value"] = "tgl";
    headers.push(tanggalheader);

    for (let i in programkeahlian.rows) {
      const rows = await programkeahlian.rows[i];

      const row = {};

      row["text"] = rows.singkat;
      row["value"] = rows.singkat;

      headers.push(row);
    }

    const totalheader = {};
    totalheader["text"] = "TOTAL";
    totalheader["value"] = "total";
    headers.push(totalheader);

    //hitung banyak program keahlian

    const jmlpa = await ProgramKeahlian.query().getCount();

    const tanggals = await Peserta.query()
      .distinct("tanggal_register")
      .orderBy("tanggal_register", "desc")
      .fetch();

    for (const i in tanggals.rows) {
      const rows = tanggals.rows[i];
      const row = {};
      row["tgl"] = dateFormat(rows.tanggal_register, "dd-mm-yyyy");

      let total = 0;
      for (let j in programkeahlian.rows) {
        const rows1 = await programkeahlian.rows[j];
        const jmlpeserta = await Peserta.query()
          .where("jurusan_id_1", rows1.id)
          .where("tanggal_register", rows.tanggal_register)
          .getCount();
        row[rows1.singkat] = jmlpeserta;
        total = total + Number(jmlpeserta);
      }
      row["total"] = total;
      records.push(row);
    }

    return response.json({
      headers: headers,
      records: records,
    });
  }

  async verifikasidata({ request, response }) {
    const programkeahlian = await ProgramKeahlian.all();

    const datas = [];

    for (let i in programkeahlian.rows) {
      const rows = programkeahlian.rows[i];

      const jmlbelum = await Peserta.query()
        .where("jurusan_id_1", rows.id)
        .whereIn("verifikasi_status", [1, 2, 3])
        .getCount();

      const jmlselesai = await Peserta.query()
        .where("jurusan_id_1", rows.id)
        .whereIn("verifikasi_status", [4, 5])
        .getCount();

      const jmll = await Peserta.query()
        .where("jurusan_id_1", rows.id)
        .where("jenis_kelamin", "L")
        .getCount();
      const jmlp = await Peserta.query()
        .where("jurusan_id_1", rows.id)
        .where("jenis_kelamin", "P")
        .getCount();

      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["jurusan"] = rows.name;
      row["jmll"] = jmll;
      row["jmlp"] = jmlp;
      row["jmlbelum"] = jmlbelum;
      row["jmlsudah"] = jmlselesai;

      datas.push(row);
    }

    return response.json({
      data: datas,
    });
  }

  /**
   * Render a form to be used for creating a new dashboard.
   * GET dashboards/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new dashboard.
   * POST dashboards
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single dashboard.
   * GET dashboards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing dashboard.
   * GET dashboards/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update dashboard details.
   * PUT or PATCH dashboards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a dashboard with id.
   * DELETE dashboards/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = DashboardController;
