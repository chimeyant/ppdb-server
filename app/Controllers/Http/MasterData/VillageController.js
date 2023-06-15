"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Village = use("App/Models/Village");
const { validate } = use("Validator");

/**
 * Resourceful controller for interacting with villages
 */
class VillageController {
  /**
   * Show a list of all villages.
   * GET villages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ params, request, response, view }) {
    const { district_id } = params;
    const villages = await Village.query()
      .where("district_id", district_id)
      .orderBy("id", "asc")
      .fetch();

    const datas = [];

    for (let i in villages.rows) {
      const rows = villages.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["district_id"] = rows.district_id;
      row["name"] = rows.name;
      row["aksi"] = rows.id;
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new village.
   * GET villages/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new village.
   * POST villages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ params, request, response }) {
    const { district_id } = params;
    const { id, name } = request.all();

    const rules = {
      id: "required",
      name: "required",
    };

    const messages = {
      "id.required": "Kode tidak boleh kosong",
      "name.required": "Nama desa tidak boleh kosong",
    };

    const Validations = await validate(request.all(), rules, messages);

    if (Validations.fails()) {
      const msg = await Validations.messages();
      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const village = new Village();
      village.id = id;
      village.district_id = district_id;
      village.name = name;
      await village.save();

      return response.json({
        status: true,
        message: "Proses tambah desa/kelurahan berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan ",
      });
    }
  }

  /**
   * Display a single village.
   * GET villages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;
    const village = await Village.find(id);
    return village;
  }

  /**
   * Render a form to update an existing village.
   * GET villages/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update village details.
   * PUT or PATCH villages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { district_id } = params;
    const { name } = request.all();

    const rules = {
      id: "required",
      name: "required",
    };

    const messages = {
      "id.required": "Kode tidak boleh kosong",
      "name.required": "Nama desa tidak boleh kosong",
    };

    const Validations = await validate(request.all(), rules, messages);

    if (Validations.fails()) {
      const msg = await Validations.messages();
      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const village = await Village.find(id);
      village.id = id;
      village.name = name;
      await village.save();

      return response.json({
        status: true,
        message: "Proses ubah desa/kelurahan berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan ",
      });
    }
  }

  /**
   * Delete a village with id.
   * DELETE villages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;

    try {
      const village = await Village.find(id);
      await village.delete();
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
}

module.exports = VillageController;
