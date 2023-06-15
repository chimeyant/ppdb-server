'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const JadwalUjianSesi = use("App/Models/JadwalUjianSesi")
const { validate } = use("Validator")
var dateFormat = require("dateformat")

/**
 * Resourceful controller for interacting with jadwalujiansesis
 */
class JadwalUjianSesiController {
  /**
   * Show a list of all jadwalujiansesis.
   * GET jadwalujiansesis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const jadwalujiansesi = await JadwalUjianSesi.query().orderBy('id', 'asc').fetch()

    const datas = []

    for (let i in jadwalujiansesi.rows) {
      const rows = jadwalujiansesi.rows[i]
      const row = {}
      row['id'] = rows.id;
      row['num'] = i++ + 1
      row['name'] = rows.name
      row['jam_mulai'] = rows.jam_mulai
      row['jam_selesai'] = rows.jam_selesai

      datas.push(row)

    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new jadwalujiansesi.
   * GET jadwalujiansesis/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new jadwalujiansesi.
   * POST jadwalujiansesis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { name, jam_mulai, jam_selesai } = request.all()

    const rules = {
      name: 'required',
    }

    const message = {
      "name.required": "Opps..., nama wajib diisi..."
    }

    const Validations = await validate(request.all(), rules, message);

    if (Validations.fails()) {
      const msg = await Validations.messages()

      return response.json({
        status: false,
        message: msg[0].message
      })
    }

    try {
      const jadwalujiansesi = new JadwalUjianSesi()
      jadwalujiansesi.name = name
      jadwalujiansesi.jam_mulai = jam_mulai
      jadwalujiansesi.jam_selesai = jam_selesai
      await jadwalujiansesi.save()

      return response.json({
        status: true,
        message: "Proses tambah sesi berhasil"
      })
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error
      })
    }

  }

  /**
   * Display a single jadwalujiansesi.
   * GET jadwalujiansesis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params

    const jadwalujiansesi = await JadwalUjianSesi.find(id)

    const data = {}
    data['id'] = jadwalujiansesi.id
    data['name'] = jadwalujiansesi.name
    data['jam_mulai'] = jadwalujiansesi.jam_mulai
    data['jam_selesai'] = jadwalujiansesi.jam_selesai

    return data;


  }

  /**
   * Render a form to update an existing jadwalujiansesi.
   * GET jadwalujiansesis/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update jadwalujiansesi details.
   * PUT or PATCH jadwalujiansesis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params
    const { name, jam_mulai, jam_selesai } = request.all()

    const rules = {
      name: 'required',
    }

    const message = {
      "name.required": "Opps..., nama wajib diisi..."
    }

    const Validations = await validate(request.all(), rules, message);

    if (Validations.fails()) {
      const msg = await Validations.messages()

      return response.json({
        status: false,
        message: msg[0].message
      })
    }

    try {
      const jadwalujiansesi = await JadwalUjianSesi.find(id)
      jadwalujiansesi.name = name
      jadwalujiansesi.jam_mulai = jam_mulai
      jadwalujiansesi.jam_selesai = jam_selesai
      await jadwalujiansesi.save()

      return response.json({
        status: true,
        message: "Proses tambah sesi berhasil"
      })
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error
      })
    }

  }

  /**
   * Delete a jadwalujiansesi with id.
   * DELETE jadwalujiansesis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params

    try {
      const jadwalujiansesi = await JadwalUjianSesi.find(id)
      await jadwalujiansesi.delete()

      return response.json({
        status: true,
        message: "Proses hapus data berhasil"
      })
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error
      })
    }
  }

  async combo({ request, response }) {
    const data = await JadwalUjianSesi.query().select('name as text', 'id as value').orderBy('id', 'asc').fetch();

    return data;
  }
}

module.exports = JadwalUjianSesiController
