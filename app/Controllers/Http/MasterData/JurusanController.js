"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Jurusan = use("App/Models/Jurusan");
const Pendidikan = use("App/Models/Pendidikan");
const Helpers = use("Helpers");
const fs = require("fs");

/**
 * Resourceful controller for interacting with jurusans
 */
class JurusanController {
  /**
   * Show a list of all jurusans.
   * GET jurusans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const jurusan = await Jurusan.query().orderBy("id", "asc").fetch();

    const datas = [];

    for (let i in jurusan.rows) {
      const rows = jurusan.rows[i];
      const pendidikan = await Pendidikan.find(rows.pendidikan_id);
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["pendidikan"] = pendidikan != null ? pendidikan.name : "-";
      row["name"] = rows.name;
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new jurusan.
   * GET jurusans/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new jurusan.
   * POST jurusans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { pendidikan_id, name } = request.all();

    try {
      const jurusan = new Jurusan();
      jurusan.pendidikan_id = pendidikan_id;
      jurusan.name = name;
      await jurusan.save();

      //read data jurusan
      const jurusans = await Jurusan.query().orderBy("id", "asc").fetch();

      const datas = [];

      for (let i in jurusan.rows) {
        const rows = jurusan.rows[i];
        const pendidikan = await Pendidikan.find(rows.pendidikan_id);
        const row = {};
        row["id"] = rows.id;
        row["num"] = i++ + 1;
        row["pendidikan"] = pendidikan != null ? pendidikan.name : "-";
        row["name"] = rows.name;
        datas.push(row);
      }

      const path = Helpers.publicPath("uploads/datas/jurusan.json");

      const jsonjurusans = JSON.stringify(jurusans);

      fs.writeFile(path, jsonjurusans, function (err) {
        console.log(err);
      });

      return response.json({
        status: true,
        message: "Proses tambah jurusan pendidikan berhasil..",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Display a single jurusan.
   * GET jurusans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const jurusan = await Jurusan.findOrFail(id);

    return jurusan;
  }

  /**
   * Render a form to update an existing jurusan.
   * GET jurusans/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update jurusan details.
   * PUT or PATCH jurusans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { pendidikan_id, name } = request.all();

    try {
      const jurusan = await Jurusan.find(id);
      jurusan.pendidikan_id = pendidikan_id;
      jurusan.name = name;
      await jurusan.save();

      //read data jurusan
      const jurusans = await Jurusan.query().orderBy("id", "asc").fetch();

      const datas = [];

      for (let i in jurusan.rows) {
        const rows = jurusan.rows[i];
        const pendidikan = await Pendidikan.find(rows.pendidikan_id);
        const row = {};
        row["id"] = rows.id;
        row["num"] = i++ + 1;
        row["pendidikan"] = pendidikan != null ? pendidikan.name : "-";
        row["name"] = rows.name;
        datas.push(row);
      }

      const path = Helpers.publicPath("uploads/datas/jurusan.json");

      const jsonjurusans = JSON.stringify(jurusans);

      fs.writeFile(path, jsonjurusans, function (err) {
        console.log(err);
      });

      return response.json({
        status: true,
        message: "Proses ubah jurusan pendidikan berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a jurusan with id.
   * DELETE jurusans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}

  async combo({ request, response }) {
    const { pendidikan_id } = request.only("pendidikan_id");

    const data = await Jurusan.query()
      .select("name as text", "id as value")
      .where("pendidikan_id", pendidikan_id)
      .fetch();

    return data;
  }
}

module.exports = JurusanController;
