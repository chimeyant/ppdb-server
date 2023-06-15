"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Jadwal = use("App/Models/Jadwal");
var dateFormat = require("dateformat");
const { validate } = use("Validator");
const Helpers = use("Helpers");
const fs = require("fs");
/**
 * Resourceful controller for interacting with jadwals
 */
class JadwalController {
  /**
   * Show a list of all jadwals.
   * GET jadwals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const jadwal = await Jadwal.query().orderBy("id", "asc").fetch();

    const datas = [];

    for (let i in jadwal.rows) {
      const rows = jadwal.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;

      row["tanggal"] = rows.tanggal;
      row["title"] = rows.title;
      row["descriptions"] = rows.descriptions;
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new jadwal.
   * GET jadwals/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new jadwal.
   * POST jadwals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { title, descriptions, tanggal } = request.all();

    const rules = {
      title: "required",
      descriptions: "required",
    };

    const messages = {
      "title.required": "Judul tidak boleh kosong",
      "descriptions.required": "Keterangan tidak boleh kosong",
    };

    const Validation = await validate(request.all(), rules, messages);

    if (Validation.fails()) {
      const msg = await Validation.messages();
      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const jadwal = new Jadwal();
      jadwal.title = title;
      jadwal.descriptions = descriptions;
      jadwal.tanggal = tanggal;
      await jadwal.save();

      //generate json
      const jadwals = await Jadwal.query().orderBy("id", "asc").fetch();

      const datas = [];

      for (let i in jadwals.rows) {
        const rows = jadwals.rows[i];
        const row = {};
        row["id"] = rows.id;
        row["num"] = i++ + 1;

        row["tanggal"] = rows.tanggal;
        row["title"] = rows.title;
        row["descriptions"] = rows.descriptions;
        datas.push(row);
      }

      const path = Helpers.publicPath("uploads/datas/jadwal.json");

      const jsondatas = JSON.stringify(datas);

      fs.writeFile(path, jsondatas, function (err) {
        console.log(err);
      });

      return response.json({
        status: true,
        message: "Proses tambah jadwal berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Display a single jadwal.
   * GET jadwals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;
    const jadwal = await Jadwal.find(id);

    return jadwal;
  }

  /**
   * Render a form to update an existing jadwal.
   * GET jadwals/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update jadwal details.
   * PUT or PATCH jadwals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { title, descriptions, tanggal } = request.all();

    const rules = {
      title: "required",
      descriptions: "required",
    };

    const messages = {
      "title.required": "Judul tidak boleh kosong",
      "descriptions.required": "Keterangan tidak boleh kosong",
    };

    //validation

    const Validation = await validate(request.all(), rules, messages);

    if (Validation.fails()) {
      const msg = await Validation.messages();
      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const jadwal = await Jadwal.find(id);
      jadwal.title = title;
      jadwal.descriptions = descriptions;
      jadwal.tanggal = tanggal;
      await jadwal.save();

      const jadwals = await Jadwal.query().orderBy("id", "asc").fetch();

      const datas = [];

      for (let i in jadwals.rows) {
        const rows = jadwals.rows[i];
        const row = {};
        row["id"] = rows.id;
        row["num"] = i++ + 1;

        row["tanggal"] = rows.tanggal;
        row["title"] = rows.title;
        row["descriptions"] = rows.descriptions;
        datas.push(row);
      }

      const path = Helpers.publicPath("uploads/datas/jadwal.json");

      const jsondatas = JSON.stringify(datas);

      fs.writeFile(path, jsondatas, function (err) {
        console.log(err);
      });

      return response.json({
        status: true,
        message: "Proses tambah jadwal berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a jadwal with id.
   * DELETE jadwals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;

    try {
      const jadwal = await Jadwal.find(id);
      await jadwal.delete();
      return response.json({
        status: true,
        message: "Proses hapus data berhasil...!",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }
}

module.exports = JadwalController;
