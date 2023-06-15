'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const MasterSoal = use('App/Models/MasterSoal')
const MasterSoalDetail = use("App/Models/MasterSoalDetail")
const { validate } = use("Validator")
var dateFormat = require("dateformat")

/**
 * Resourceful controller for interacting with mastersoals
 */
class MasterSoalController {
  /**
   * Show a list of all mastersoals.
   * GET mastersoals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const mastersoal = await MasterSoal.query().orderBy('id', 'desc').fetch()

    const datas = []

    for (let i in mastersoal.rows) {
      const rows = mastersoal.rows[i]

      const row = {}
      row['id'] = rows.id
      row['num'] = i++ + 1
      row['mapel'] = rows.mapel
      row['keterangan'] = rows.keterangan
      row['tanggal'] = dateFormat(rows.created_at, 'dd/mm/yyyy HH:MM:ss')

      datas.push(row)
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new mastersoal.
   * GET mastersoals/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new mastersoal.
   * POST mastersoals
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { mapel, keterangan } = request.all()

    const rules = {
      mapel: 'required',

    }

    const messages = {
      "mapel.required": "Mata Pelajaran tidak boleh kosong"
    }

    const Validation = await validate(request.all(), rules, messages)

    if (Validation.fails()) {
      const msg = await Validation.messages()

      return response.json({
        status: false,
        message: msg[0].message
      })
    }

    try {
      const mastersoal = new MasterSoal()
      mastersoal.mapel = mapel
      mastersoal.keterangan = keterangan
      await mastersoal.save()

      return response.json({
        status: true,
        message: "Tambah Soal Berhasil "
      })
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error
      })
    }
  }

  /**
   * Display a single mastersoal.
   * GET mastersoals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params

    const mastersoal = await MasterSoal.find(id)

    return mastersoal

  }

  /**
   * Render a form to update an existing mastersoal.
   * GET mastersoals/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update mastersoal details.
   * PUT or PATCH mastersoals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params
    const { mapel, keterangan } = await MasterSoal.find(id)

    try {
      const mastersoal = await MasterSoal.find(id)
      mastersoal.mapel = mapel
      mastersoal.keterangan = keterangan

      await mastersoal.save()

      return response.json({
        status: true,
        message: "Proses ubah soal berhasil"
      })

    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error
      })
    }
  }

  /**
   * Delete a mastersoal with id.
   * DELETE mastersoals/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params

    try {
      const mastersoal = await MasterSoal.find(id)
      await mastersoal.delete()

      return response.json({
        status: true,
        message: "Proses hapus data berhasil..!"
      })

    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error
      })
    }
  }

  async infoSoal({ request, response }) {
    const { id } = request.all();

    const mastersoal = await MasterSoal.find(id)
    const jmlbutirsoal = await MasterSoalDetail.query().where('master_soal_id', id).getCount()

    const data = {}
    data['id'] = mastersoal.id
    data['nomor'] = mastersoal.nomor
    data['mapel'] = mastersoal.mapel

    data['jumlah'] = Number(jmlbutirsoal)


    return data;
  }

  async combo({ request, response }) {
    const mastersoal = await MasterSoal.query().select('mapel as text', 'id as value').fetch()

    return mastersoal;
  }


}

module.exports = MasterSoalController
