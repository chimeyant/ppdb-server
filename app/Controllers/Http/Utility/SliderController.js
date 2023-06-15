'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Slider = use("App/Models/Slider");
const { validate } = use("Validator");

/**
 * Resourceful controller for interacting with sliders
 */
class SliderController {
  /**
   * Show a list of all sliders.
   * GET sliders
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const slider = await Slider.query().orderBy('id', 'desc').fetch()

    const datas = []

    for (let i in slider.rows) {
      const rows = slider.rows[i]
      const row = {}
      row['id'] = rows.id
      row['num'] = i++ + 1
      row['title'] = rows.title
      row['status'] = rows.status

      datas.push(row)
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new slider.
   * GET sliders/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new slider.
   * POST sliders
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { title, subtitle, body, path, status } = request.all()

    const rules = {
      title: 'required',
      path: 'required'
    }

    const messages = {
      'title.required': "Judul haru diisi",
      "path.required": "Image harus diupload"
    }

    const Validator = await validate(request.all(), rules, messages);

    if (Validator.fails()) {
      const msg = await Validator.messages()
      return response.json({
        status: false,
        message: msg[0].message
      })
    }

    try {
      const slider = new Slider()
      slider.title = title
      slider.subtitle = subtitle
      slider.body = body
      slider.path = path
      slider.status = status
      await slider.save()

      return response.json({
        status: true,
        message: "Proses tambah slider berhasil"
      })
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error
      })
    }
  }

  /**
   * Display a single slider.
   * GET sliders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params

    const slider = await Slider.find(id)

    return slider;
  }

  /**
   * Render a form to update an existing slider.
   * GET sliders/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update slider details.
   * PUT or PATCH sliders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params
    const { title, subtitle, body, path, status } = request.all()

    const rules = {
      title: 'required',
      path: 'required'
    }

    const messages = {
      'title.required': "Judul haru diisi",
      "path.required": "Image harus diupload"
    }

    const Validator = await validate(request.all(), rules, messages);

    if (Validator.fails()) {
      const msg = await Validator.messages()
      return response.json({
        status: false,
        message: msg[0].message
      })
    }

    try {
      const slider = await Slider.find(id)
      slider.title = title
      slider.subtitle = subtitle
      slider.body = body
      slider.path = path
      slider.status = status
      await slider.save()

      return response.json({
        status: true,
        message: "Proses ubah slider berhasil"
      })
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error
      })
    }


  }

  /**
   * Delete a slider with id.
   * DELETE sliders/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params

    try {
      const slider = await Slider.find(id)
      await slider.delete()
      return response.json({
        status: true,
        message: "Proses hapus slider berhasil "
      })

    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error
      })
    }
  }
}

module.exports = SliderController
