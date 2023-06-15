"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Pengumuman = use("App/Models/Pengumuman");
const { validate } = use("Validator");

/**
 * Resourceful controller for interacting with pengumumen
 */
class PengumumanController {
  /**
   * Show a list of all pengumumen.
   * GET pengumumen
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const pengumuman = await Pengumuman.query().orderBy("id", "desc").fetch();

    const datas = [];

    for (let i in pengumuman.rows) {
      const rows = pengumuman.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["title"] = rows.title;
      row["body"] = rows.body;
      row["status"] = rows.status;
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new pengumuman.
   * GET pengumumen/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new pengumuman.
   * POST pengumumen
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {
    const { title, body, status } = request.all();

    const rules = {
      title: "required",
    };

    const messages = {
      "title.required": "Judul harus diisi",
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
      const user = await auth.user;
      const pengumuman = new Pengumuman();
      pengumuman.title = title;
      pengumuman.body = body;
      pengumuman.status = status;
      pengumuman.user_id = user.id;
      await pengumuman.save();

      return response.json({
        status: true,
        message: "Pengumuman berhasil ditambahkan",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Display a single pengumuman.
   * GET pengumumen/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const pengumuman = await Pengumuman.find(id);

    return pengumuman;
  }

  /**
   * Render a form to update an existing pengumuman.
   * GET pengumumen/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update pengumuman details.
   * PUT or PATCH pengumumen/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response, auth }) {
    const { id } = params;
    const { title, body, status } = request.all();

    const rules = {
      title: "required",
    };

    const messages = {
      "title.required": "Judul harus diisi",
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
      const user = await auth.user;
      const pengumuman = await Pengumuman.find(id);
      pengumuman.title = title;
      pengumuman.body = body;
      pengumuman.status = status;
      pengumuman.user_id = user.id;
      pengumuman.status = status;
      await pengumuman.save();

      return response.json({
        status: true,
        message: "Pengumuman berhasil diubah",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a pengumuman with id.
   * DELETE pengumumen/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;

    try {
      const pengumuman = await Pengumuman.find(id);
      await pengumuman.delete();

      return response.json({
        status: true,
        message: "Proses hapus data berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...,terjadi kesalahan " + error,
      });
    }
  }

  async topnews({ request, response }) {
    const pengumuman = await Pengumuman.query()
      .where("status", true)
      .orderBy("id", "desc")
      .first();
    return pengumuman;
  }
}

module.exports = PengumumanController;
