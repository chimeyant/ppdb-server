"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use("Env");
const Dokumen = use("App/Models/Dokuman");
const { validate } = use("Validator");

/**
 * Resourceful controller for interacting with dokumen
 */
class DokumanController {
  /**
   * Show a list of all dokumen.
   * GET dokumen
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const dokumen = await Dokumen.query().orderBy("id", "asc").fetch();

    const datas = [];

    for (let i in dokumen.rows) {
      const rows = dokumen.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["name"] = rows.name;
      row["description"] = rows.description;
      row["path"] = rows.path;
      row["download"] =
        Env.get("BASE_URL") + "/api/download/dokumen/" + rows.path;
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new dokuman.
   * GET dokumen/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new dokuman.
   * POST dokumen
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { name, description, path, status } = request.all();

    const rules = {
      name: "required",
    };

    const messages = {
      "name.required": "Nama dokumen harus diisi",
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
      const dok = new Dokumen();
      dok.name = name;
      dok.description = description;
      dok.path = path;

      await dok.save();

      return response.json({
        status: true,
        message: "Proses tambah dokumen berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Display a single dokuman.
   * GET dokumen/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const dok = await Dokumen.findOrFail(id);

    return dok;
  }

  /**
   * Render a form to update an existing dokuman.
   * GET dokumen/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update dokuman details.
   * PUT or PATCH dokumen/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { name, description, path, status } = request.all();

    const rules = {
      name: "required",
    };

    const messages = {
      "name.required": "Nama dokumen harus diisi",
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
      const dok = await Dokumen.find(id);
      dok.name = name;
      dok.description = description;
      dok.path = path;

      await dok.save();

      return response.json({
        status: true,
        message: "Proses ubah dokumen berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a dokuman with id.
   * DELETE dokumen/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;
    try {
      const dok = await Dokumen.find(id);
      dok.delete();

      return response.json({
        status: true,
        message: "Proses hapus dokumen berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..terjadi kesalahan " + error,
      });
    }
  }
}

module.exports = DokumanController;
