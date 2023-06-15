'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use("Env")
const Pesan = use("App/Models/Pesan")
const User = use("App/Models/User")
var dateFormat = require("dateformat")


/**
 * Resourceful controller for interacting with pesans
 */
class PesanController {
  /**
   * Show a list of all pesans.
   * GET pesans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const pesan = await Pesan.query().orderBy('updated_at', 'desc').fetch()

    const datas = [];

    for (let i in pesan.rows) {
      const rows = pesan.rows[i]
      const user = await User.find(rows.from_id);
      const row = {}
      row['id'] = rows.id;
      row['title'] = rows.title
      row['body'] = rows.body
      row['name'] = user.username
      row['avatar'] = user.avatar == null
        ? Env.get("BASE_URL") + "/images/logo-kab.png"
        : Env.get("BASE_URL") + "/api/download/avatar/" + user.avatar;

      datas.push(row)

    }

    return datas;

  }

  /**
   * Render a form to be used for creating a new pesan.
   * GET pesans/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new pesan.
   * POST pesans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {
    const { title, body, to_id } = request.all()

    const user = await auth.user

    const data = new Date()
    const current_date = data.getTime();

    try {
      const pesan = new Pesan()
      pesan.title = title
      pesan.body = body
      pesan.tanggal = dateFormat(current_date, 'yyyy-mm-dd')
      await pesan.save()

      return response.json({
        status: true,
        message: "Pesan terkirim"
      })

    } catch (error) {
      return response.json({
        status: false,
        message: "Opps.., pesan tidak terkirim"
      })
    }
  }

  /**
   * Display a single pesan.
   * GET pesans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing pesan.
   * GET pesans/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update pesan details.
   * PUT or PATCH pesans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a pesan with id.
   * DELETE pesans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = PesanController
