"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use("Env");
const Slider = use("App/Models/Slider");
const Peserta = use("App/Models/Peserta");
const ProgramKeahlian = use("App/Models/ProgramKeahlian");
const fs = require("fs");
const Helpers = use("Helpers");
/**
 * Resourceful controller for interacting with homes
 */
class HomeController {
  /**
   * Show a list of all homes.
   * GET homes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new home.
   * GET homes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new home.
   * POST homes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single home.
   * GET homes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing home.
   * GET homes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update home details.
   * PUT or PATCH homes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a home with id.
   * DELETE homes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}

  /**
   * home
   */
  async home({ request, response }) {}

  async summarydata({ request, response }) {
    const jmlpendaftar = await Peserta.query().getCount();
    const jmllakilaki = await Peserta.query()
      .where("jenis_kelamin", "L")
      .getCount();
    const jmlperempuan = await Peserta.query()
      .where("jenis_kelamin", "P")
      .getCount();

    return response.json({
      jmlpendaftar: jmlpendaftar,
      jmllakilaki: jmllakilaki,
      jmlperempuan: jmlperempuan,
    });
  }

  async sliders({ request, response }) {
    const slider = await Slider.query()
      .where("status", true)
      .orderBy("id", "desc")
      .fetch();

    const datas = [];

    for (let i in slider.rows) {
      const rows = slider.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["title"] = rows.title;
      (row["path"] = Env.get("BASE_URL") + "/api/download/logo/" + rows.path),
        datas.push(row);
    }

    return datas;
  }

  async pagu({ request, response }) {
    const pagus = Helpers.publicPath() + "/uploads/datas/programkeahlian.json";

    return response.download(pagus);
    const programkeahlian = await ProgramKeahlian.query()
      .orderBy("id", "asc")
      .fetch();

    const datas = [];

    for (let i in programkeahlian.rows) {
      const rows = programkeahlian.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["nama"] = rows.name;
      row["warna"] = rows.warna;
      row["pagu"] = rows.pagu;
      row["pendaftar"] = await Peserta.query()
        .where("jurusan_id_1", rows.id)
        .getCount();

      datas.push(row);
    }

    return datas;
  }

  async pendaftars({ request, response }) {
    const path = Helpers.publicPath("uploads/datas/pendaftars.json");

    return response.download(path);
  }

  async jadwal({ response }) {
    const path = Helpers.publicPath() + "/uploads/datas/jadwal.json";
    return response.download(path);
  }
}

module.exports = HomeController;
