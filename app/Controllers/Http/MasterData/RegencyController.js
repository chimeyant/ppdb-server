"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Regency = use("App/Models/Regency");

/**
 * Resourceful controller for interacting with regencies
 */
class RegencyController {
  /**
   * Show a list of all regencies.
   * GET regencies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ params, request, response, view }) {
    const { province_id } = params;
    const regencies = await Regency.query()
      .where("province_id", province_id)
      .orderBy("id", "asc")
      .fetch();

    const datas = [];

    for (let i in regencies.rows) {
      const rows = regencies.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["province_id"] = rows.province_id;
      row["name"] = rows.name;
      row["aksi"] = rows.id;
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new regency.
   * GET regencies/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new regency.
   * POST regencies
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single regency.
   * GET regencies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing regency.
   * GET regencies/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update regency details.
   * PUT or PATCH regencies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a regency with id.
   * DELETE regencies/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = RegencyController;
