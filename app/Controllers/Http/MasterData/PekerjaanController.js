"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Pekerjaan = use("App/Models/Pekerjaan");

/**
 * Resourceful controller for interacting with pekerjaans
 */
class PekerjaanController {
  /**
   * Show a list of all pekerjaans.
   * GET pekerjaans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new pekerjaan.
   * GET pekerjaans/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new pekerjaan.
   * POST pekerjaans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single pekerjaan.
   * GET pekerjaans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing pekerjaan.
   * GET pekerjaans/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update pekerjaan details.
   * PUT or PATCH pekerjaans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a pekerjaan with id.
   * DELETE pekerjaans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}

  async combo({ request, response }) {
    const pekerjaan = await Pekerjaan.query()
      .select("name as text", "id as value")
      .orderBy("kode", "asc")
      .fetch();

    return pekerjaan;
  }
}

module.exports = PekerjaanController;
