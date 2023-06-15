'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const ParamNilai = use("App/Models/ParamNilai")
const { validate } = use("Validator")

/**
 * Resourceful controller for interacting with paramnilais
 */
class ParamNilaiController {
  /**
   * Show a list of all paramnilais.
   * GET paramnilais
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const paramnilai = await ParamNilai.query().orderBy('id', 'asc').fetch();

    const datas = []

    for (let i in paramnilai.rows) {
      const rows = paramnilai.rows[i]
      const row = {}
      row['id'] = rows.id;
      row['num'] = i++ + 1;
      row['kode'] = rows.kode;
      row['name'] = rows.name;
      row['prosentase'] = rows.prosentase
      row['is_active'] = rows.is_active;
      datas.push(row)

    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new paramnilai.
   * GET paramnilais/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new paramnilai.
   * POST paramnilais
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
  }

  /**
   * Display a single paramnilai.
   * GET paramnilais/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params

    const paramnilai = await ParamNilai.findOrFail(id)

    return paramnilai;
  }

  /**
   * Render a form to update an existing paramnilai.
   * GET paramnilais/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {

  }

  /**
   * Update paramnilai details.
   * PUT or PATCH paramnilais/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params
    const { prosentase, is_active } = request.all()

    try {
      const paramnilai = await ParamNilai.find(id)
      paramnilai.prosentase = prosentase
      paramnilai.is_active = is_active
      await paramnilai.save()
      return response.json({
        status: true,
        message: "Proses ubah data parameter berhasil..."
      })
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error
      })
    }
  }

  /**
   * Delete a paramnilai with id.
   * DELETE paramnilais/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = ParamNilaiController
