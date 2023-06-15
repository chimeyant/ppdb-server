"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const ParamPrestasi = use("App/Models/ParamPrestasi");

/**
 * Resourceful controller for interacting with paramprestasis
 */
class ParamPrestasiController {
  /**
   * Show a list of all paramprestasis.
   * GET paramprestasis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const paramprestasi = await ParamPrestasi.query()
      .orderBy("id", "asc")
      .fetch();

    const datas = [];

    for (let i in paramprestasi.rows) {
      const rows = paramprestasi.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["name"] = rows.name;

      row["skor"] = rows.skor;

      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new paramprestasi.
   * GET paramprestasis/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new paramprestasi.
   * POST paramprestasis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single paramprestasi.
   * GET paramprestasis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;
    const prestasi = await ParamPrestasi.find(id);
    return prestasi;
  }

  /**
   * Render a form to update an existing paramprestasi.
   * GET paramprestasis/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update paramprestasi details.
   * PUT or PATCH paramprestasis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { skor } = request.all();
    try {
      const paramprestasi = await ParamPrestasi.find(id);
      paramprestasi.skor = skor;
      await paramprestasi.save();

      return response.json({
        status: true,
        message: "Proses ubah skor berhasil...!",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan ",
      });
    }
  }

  /**
   * Delete a paramprestasi with id.
   * DELETE paramprestasis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
  async combo({ request, response }) {
    const data = await ParamPrestasi.query()
      .select("id as value", "name as text")
      .orderBy("id", "asc")
      .fetch();

    return data;
  }
}

module.exports = ParamPrestasiController;
