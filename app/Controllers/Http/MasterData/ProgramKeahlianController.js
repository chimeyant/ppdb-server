"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use("Env");
const ProgramKeahlian = use("App/Models/ProgramKeahlian");
const { validate } = use("Validator");
const Helpers = use("Helpers");
const fs = require("fs");

/**
 * Resourceful controller for interacting with programkeahlians
 */
class ProgramKeahlianController {
  /**
   * Show a list of all programkeahlians.
   * GET programkeahlians
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const programkeahlian = await ProgramKeahlian.query()
      .orderBy("id", "asc")
      .fetch();

    const datas = [];
    for (let i in programkeahlian.rows) {
      const rows = programkeahlian.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["name"] = rows.name;
      row["singkat"] = rows.singkat;
      row["pagu"] = rows.pagu;

      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new programkeahlian.
   * GET programkeahlians/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new programkeahlian.
   * POST programkeahlians
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { name, singkat, pagu, warna, logo } = request.all();

    const rules = {
      name: "required",
      singkat: "required",
    };

    const messages = {
      "name.required": "Program Keahlian tidak boleh kosong... ",
      "singkat.required": "Singkatan gak boleh kosong...",
    };

    const Validator = await validate(request.all(), rules, messages);

    if (Validator.fails()) {
      const msg = await Validator.messages();
      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const programkeahlian = new ProgramKeahlian();
      programkeahlian.name = name;
      programkeahlian.singkat = singkat;
      programkeahlian.pagu = pagu;
      programkeahlian.warna = warna;

      await programkeahlian.save();

      //load data to json
      const programkeahlians = await ProgramKeahlian.query()
        .orderBy("id", "asc")
        .fetch();

      const datas = [];

      for (let i in programkeahlians.rows) {
        const rows = programkeahlians.rows[i];
        const row = {};
        row["id"] = rows.id;
        row["num"] = i++ + 1;
        row["nama"] = rows.name;
        row["warna"] = rows.warna;
        row["pagu"] = rows.pagu;

        datas.push(row);
      }

      const path = Helpers.publicPath("uploads/datas/programkeahlian.json");

      const jsonprogramkeahlians = JSON.stringify(datas);

      fs.writeFile(path, jsonprogramkeahlians, function (err) {
        console.log(err);
      });

      return response.json({
        status: true,
        message: "Proses penambahan program keahlian berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...,terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Display a single programkeahlian.
   * GET programkeahlians/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const programkeahlian = await ProgramKeahlian.findOrFail(id);

    const row = {};
    row["id"] = programkeahlian.id;
    row["name"] = programkeahlian.name;
    row["singkat"] = programkeahlian.singkat;
    row["pagu"] = programkeahlian.pagu;
    row["warna"] = programkeahlian.warna;

    return programkeahlian;
  }

  /**
   * Render a form to update an existing programkeahlian.
   * GET programkeahlians/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update programkeahlian details.
   * PUT or PATCH programkeahlians/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { name, singkat, pagu, warna, logo } = request.all();

    const rules = {
      name: "required",
      singkat: "required",
    };

    const messages = {
      "name.required": "Program Keahlian tidak boleh kosong... ",
      "singkat.required": "Singkatan gak boleh kosong...",
    };

    const Validator = await validate(request.all(), rules, messages);

    if (Validator.fails()) {
      const msg = await Validator.messages();
      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const programkeahlian = await ProgramKeahlian.find(id);
      programkeahlian.name = name;
      programkeahlian.singkat = singkat;
      programkeahlian.pagu = pagu;
      programkeahlian.warna = warna;
      await programkeahlian.save();

      //load data to json
      const programkeahlians = await ProgramKeahlian.query()
        .orderBy("id", "asc")
        .fetch();

      const datas = [];

      for (let i in programkeahlians.rows) {
        const rows = programkeahlians.rows[i];
        const row = {};
        row["id"] = rows.id;
        row["num"] = i++ + 1;
        row["nama"] = rows.name;
        row["warna"] = rows.warna;
        row["pagu"] = rows.pagu;

        datas.push(row);
      }

      const path = Helpers.publicPath("uploads/datas/programkeahlian.json");

      const jsonprogramkeahlians = JSON.stringify(datas);

      fs.writeFile(path, jsonprogramkeahlians, function (err) {
        console.log(err);
      });

      return response.json({
        status: true,
        message: "Proses ubah program keahlian berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...,terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a programkeahlian with id.
   * DELETE programkeahlians/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;

    try {
      const programkeahlian = await ProgramKeahlian.find(id);
      await programkeahlian.delete();
      return response.json({
        status: true,
        message: "Proses hapus data program keahlian berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...,terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Combo Jurusan
   */
  async combo({ request, response }) {
    const data = await ProgramKeahlian.query()
      .select("id as value", "name as text")
      .orderBy("name", "asc")
      .fetch();

    return data;
  }
}

module.exports = ProgramKeahlianController;
