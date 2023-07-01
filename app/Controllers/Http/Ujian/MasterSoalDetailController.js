"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use("Env");
const MasterSoal = use("App/Models/MasterSoal");
const MasterSoalDetail = use("App/Models/MasterSoalDetail");
const { validate } = use("Validator");

/**
 * Resourceful controller for interacting with mastersoaldetails
 */
class MasterSoalDetailController {
  /**
   * Show a list of all mastersoaldetails.
   * GET mastersoaldetails
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ params, request, response, view }) {
    const { master_soal_id } = params;
    const mastersoaldetail = await MasterSoalDetail.query()
      .where("master_soal_id", master_soal_id)
      .orderBy("id", "asc")
      .fetch();

    const datas = [];

    for (let i in mastersoaldetail.rows) {
      const rows = mastersoaldetail.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["nomor"] = rows.nomor;
      row["soal"] = rows.soal;
      /**
      row['pilihan_a'] = rows.pilihan_a

      row['pilihan_a_gambar'] = rows.pilihan_a_gambar
      row['pilihan_a_gambar_path'] = rows.pilihan_a_gambar ? Env.get("BASE_URL") + "/api/download/soals/" + rows.pilihan_a_gambar : "/";
      row['pilihan_b'] = rows.pilihan_b
      row['pilihan_b_gambar'] = rows.pilihan_a_gambar
      row['pilihan_b_gambar_path'] = rows.pilihan_b_gambar ? Env.get("BASE_URL") + "/api/download/soals/" + rows.pilihan_b_gambar : "/"
      row['pilihan_c'] = rows.pilihan_c
      row['pilihan_c_gambar'] = rows.pilihan_c_gambar
      row['pilihan_c_gambar_path'] = rows.pilihan_c_gambar ? Env.get("BASE_URL") + "/api/download/soals/" + rows.pilihan_c_gambar : "/"
      row['pilihan_d'] = rows.pilihan_d
      row['pilihan_d_gambar'] = rows.pilihan_d_gambar
      row['pilihan_d_gambar_path'] = rows.pilihan_d_gambar ? Env.get("BASE_URL") + "/api/download/soals/" + rows.pilihan_d_gambar : "/"
      row['pilihan_e'] = rows.pilihan_e
      row['pilihan_e_gambar'] = rows.pilihan_e_gambar
      row['pilihan_e_gambar_path'] = rows.pilihan_e_gambar ? Env.get("BASE_URL") + "api/download/soals/" + rows.pilihan_d_gambar : "/"
      */
      row["jawaban"] = rows.jawaban;

      const pilihans = [];
      const pilihan = {};

      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new mastersoaldetail.
   * GET mastersoaldetails/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new mastersoaldetail.
   * POST mastersoaldetails
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ params, request, response }) {
    const { master_soal_id } = params;
    const {
      nomor,
      soal,
      soal_gambar,
      pilihan_a,
      pilihan_a_gambar,
      pilihan_b,
      pilihan_b_gambar,
      pilihan_c,
      pilihan_c_gambar,
      pilihan_d,
      pilihan_d_gambar,
      pilihan_e,
      pilihan_e_gambar,
      jawaban,
    } = request.all();

    const rules = {
      nomor: "required",
      jawaban: "required",
    };

    const message = {
      "jawaban.required": "Jawaban belum dipilih",
      "nomor.required": "Nomor harus diisi",
    };

    const Validation = await validate(request.all(), rules, message);

    if (Validation.fails()) {
      const msg = await Validation.messages();

      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const msd = new MasterSoalDetail();
      msd.master_soal_id = master_soal_id;
      msd.nomor = nomor;
      msd.soal = soal;
      msd.soal_gambar = soal_gambar;
      msd.pilihan_a = pilihan_a;
      msd.pilihan_a_gambar = pilihan_a_gambar;
      msd.pilihan_b = pilihan_b;
      msd.pilihan_b_gambar = pilihan_b_gambar;
      msd.pilihan_c = pilihan_c;
      msd.pilihan_c_gambar = pilihan_c_gambar;
      msd.pilihan_d = pilihan_d;
      msd.pilihan_d_gambar = pilihan_d_gambar;
      msd.pilihan_e = pilihan_e;
      msd.pilihan_e_gambar = pilihan_e_gambar;
      msd.jawaban = jawaban;

      await msd.save();

      return response.json({
        status: true,
        message: "Soal berhasil ditambahkan",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Display a single mastersoaldetail.
   * GET mastersoaldetails/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const mastersoaldetail = await MasterSoalDetail.find(id);

    const data = {};

    data["id"] = mastersoaldetail.id;

    data["master_soal_id"] = mastersoaldetail.master_soal_id;
    data["nomor"] = mastersoaldetail.nomor;
    data["soal"] = mastersoaldetail.soal;
    data["soal_gambar"] = mastersoaldetail.soal_gambar;
    data["soal_gambar_path"] = mastersoaldetail.soal_gambar
      ? Env.get("BASE_URL") +
        "/api/download/soals/" +
        mastersoaldetail.soal_gambar
      : "/";
    data["pilihan_a"] = mastersoaldetail.pilihan_a;
    data["pilihan_a_gambar"] = mastersoaldetail.pilihan_a_gambar;
    data["pilihan_a_gambar_path"] = mastersoaldetail.pilihan_a_gambar
      ? Env.get("BASE_URL") +
        "/api/download/soals/" +
        mastersoaldetail.pilihan_a_gambar
      : "/";
    data["pilihan_b"] = mastersoaldetail.pilihan_b;
    data["pilihan_b_gambar"] = mastersoaldetail.pilihan_b_gambar;
    data["pilihan_b_gambar_path"] = mastersoaldetail.pilihan_a_gambar
      ? Env.get("BASE_URL") +
        "/api/download/soals/" +
        mastersoaldetail.pilihan_b_gambar
      : "/";
    data["pilihan_c"] = mastersoaldetail.pilihan_c;
    data["pilihan_c_gambar"] = mastersoaldetail.pilihan_c_gambar;
    data["pilihan_c_gambar_path"] = mastersoaldetail.pilihan_c_gambar
      ? Env.get("BASE_URL") +
        "/api/download/soals/" +
        mastersoaldetail.pilihan_c_gambar
      : "/";
    data["pilihan_d"] = mastersoaldetail.pilihan_d;
    data["pilihan_d_gambar"] = mastersoaldetail.pilihan_d_gambar;
    data["pilihan_d_gambar_path"] = mastersoaldetail.pilihan_d_gambar
      ? Env.get("BASE_URL") +
        "/api/download/soals/" +
        mastersoaldetail.pilihan_d_gambar
      : "/";
    data["pilihan_e"] = mastersoaldetail.pilihan_e;
    data["pilihan_e_gambar"] = mastersoaldetail.pilihan_e_gambar;
    data["pilihan_e_gambar_path"] = mastersoaldetail.pilihan_e_gambar
      ? Env.get("BASE_URL") +
        "/api/download/soals/" +
        mastersoaldetail.pilihan_e_gambar
      : "/";
    data["jawaban"] = mastersoaldetail.jawaban;

    return data;
  }

  /**
   * Render a form to update an existing mastersoaldetail.
   * GET mastersoaldetails/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update mastersoaldetail details.
   * PUT or PATCH mastersoaldetails/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { master_soal_id, id } = params;
    const {
      nomor,
      soal,
      soal_gambar,
      pilihan_a,
      pilihan_a_gambar,
      pilihan_b,
      pilihan_b_gambar,
      pilihan_c,
      pilihan_c_gambar,
      pilihan_d,
      pilihan_d_gambar,
      pilihan_e,
      pilihan_e_gambar,
      jawaban,
    } = request.all();

    const rules = {
      nomor: "required",
      jawaban: "required",
    };

    const message = {
      "jawaban.required": "Jawaban belum dipilih",
      "nomor.required": "Nomor harus diisi ",
    };

    const Validation = await validate(request.all(), rules, message);

    if (Validation.fails()) {
      const msg = await Validation.messages();

      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const msd = await MasterSoalDetail.find(id);

      msd.nomor = nomor;
      msd.soal = soal;
      msd.soal_gambar = soal_gambar;
      msd.pilihan_a = pilihan_a;
      msd.pilihan_a_gambar = pilihan_a_gambar;
      msd.pilihan_b = pilihan_b;
      msd.pilihan_b_gambar = pilihan_b_gambar;
      msd.pilihan_c = pilihan_c;
      msd.pilihan_c_gambar = pilihan_c_gambar;
      msd.pilihan_d = pilihan_d;
      msd.pilihan_d_gambar = pilihan_d_gambar;
      msd.pilihan_e = pilihan_e;
      msd.pilihan_e_gambar = pilihan_e_gambar;
      msd.jawaban = jawaban;

      //gambar

      await msd.save();

      return response.json({
        status: true,
        message: "Soal berhasil diubah",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a mastersoaldetail with id.
   * DELETE mastersoaldetails/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;

    try {
      const masterdetail = await MasterSoalDetail.find(id);
      await masterdetail.delete();

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

  async fetchSoalDetail({ request, response }) {
    const { master_soal_id, nomor } = request.all();

    const msd = await MasterSoalDetail.query()
      .where("master_soal_id", master_soal_id)
      .where("nomor", nomor)
      .first();

    const data = {};
    data["id"] = msd.id;
    data["nomor"] = msd.nomor;
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

    return data;
  }
}

module.exports = MasterSoalDetailController;
