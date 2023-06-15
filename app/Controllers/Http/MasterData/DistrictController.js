"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const District = use("App/Models/District");
const { validate } = use("Validator");

/**
 * Resourceful controller for interacting with districts
 */
class DistrictController {
  /**
   * Show a list of all districts.
   * GET districts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ params, request, response, view }) {
    const { regency_id } = params;

    const districts = await District.query()
      .where("regency_id", regency_id)
      .orderBy("id", "asc")
      .fetch();

    const datas = [];

    for (let i in districts.rows) {
      const rows = districts.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["regency_id"] = rows.regency_id;
      row["name"] = rows.name;
      row["aksi"] = rows.id;
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new district.
   * GET districts/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new district.
   * POST districts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ params, request, response }) {
    const { regency_id } = params;
    const { id, name } = request.all();

    const rules = {
      id: "required",
      name: "required",
    };

    const messages = {
      "id.required": "Kode Wilayah tidak boleh kosong",
      "name.required": "Nama Kecamatan tidak boleh kosong",
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
      const district = new District();
      district.id = id;
      district.regency_id = regency_id;
      district.name = name;
      await district.save();

      return response.json({
        status: true,
        message: "Proses tambah kecamatan berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Display a single district.
   * GET districts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;
    const district = await District.find(id);

    return district;
  }

  /**
   * Render a form to update an existing district.
   * GET districts/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update district details.
   * PUT or PATCH districts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { name } = request.all();

    const rules = {
      name: "required",
    };

    const messages = {
      "name.required": "Nama kecamatan tidak boleh kosong",
    };

    const Validations = await validate(request.all(), rules, messages);

    if (Validations.fails()) {
      const msg = await Validations.messages();
      return response.json({
        statusfalse,
        message: msg[0].message,
      });
    }

    try {
      const district = await District.find(id);
      district.kode = kode;
      district.name = name;
      await district.save();
      return response.json({
        status: true,
        message: "Proses ubah kecamatan berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a district with id.
   * DELETE districts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;
    try {
      const district = await District.find(id);
      await district.delete();
      return response.json({
        status: true,
        message: "Proses hapus kecamatan berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }
}

module.exports = DistrictController;
