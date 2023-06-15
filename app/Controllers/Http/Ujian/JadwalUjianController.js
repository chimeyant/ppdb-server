'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const JadwalUjian = use('App/Models/JadwalUjian')
const { validate } = use("Validator")
const ProgramKeahlian = use("App/Models/ProgramKeahlian")
var dateFormat = require('dateformat')


/**
 * Resourceful controller for interacting with jadwalujians
 */
class JadwalUjianController {
  /**
   * Show a list of all jadwalujians.
   * GET jadwalujians
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const jadwalujian = await JadwalUjian.query().orderBy('tanggal', 'desc').fetch()


    const datas = []

    for (let i in jadwalujian.rows) {
      const rows = jadwalujian.rows[i]
      const programkeahlian = await ProgramKeahlian.find(rows.program_keahlian_id)

      const row = {}
      row['id'] = rows.id
      row['num'] = i++ + 1
      row['name'] = rows.name;
      row['jurusan'] = programkeahlian.name;
      row['tanggal'] = dateFormat(rows.tanggal, "dd/mm/yyyy");

      datas.push(row)


    }

    return datas;

  }

  /**
   * Render a form to be used for creating a new jadwalujian.
   * GET jadwalujians/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new jadwalujian.
   * POST jadwalujians
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { name, program_keahlian_id, master_soal_id_1, master_soal_id_2, tanggal, waktu, bobot, jumlah_soal_1, jumlah_soal_2, jumlah_soal, jumlah_per_sesi, isToken, isRandom } = request.all()

    const rules = {
      name: 'required',
      program_keahlian_id: 'required',
      master_soal_id_1: 'required',
      tanggal: 'required',
      bobot: 'required',
      waktu: 'required',
      jumlah_soal_1: 'required',
      jumlah_soal: 'required',
    }

    const messages = {
      'name.required': "Ujian harus diisi",
      'program_keahlian_id.required': "Program Keahlian harus diisi",
      'master_soal_id_1.required': "Master Soal wajib diisi",
      'jumlah_soal_1.required': "Jumlah Soal 1 harus diisi",
      'tanggal.required': "Tanggal wajib dipilih",
      'bobot.required': "Bobot wajib diisi",
      'waktu.required': "Waktu harus diisi",
      "jumlah_soal_1.required": "Jumlah soal satu harus diisi",
      "jumlah_soal.required": "Total jumlah soal",

    }

    const Validations = await validate(request.all(), rules, messages)

    if (Validations.fails()) {
      const msg = await Validations.messages()

      return response.json({
        status: false,
        message: msg[0].message
      })
    }

    try {
      const jadwalujian = new JadwalUjian()
      jadwalujian.name = name
      jadwalujian.program_keahlian_id = program_keahlian_id;
      jadwalujian.master_soal_id_1 = master_soal_id_1
      jadwalujian.master_soal_id_2 = master_soal_id_2
      jadwalujian.tanggal = dateFormat(tanggal, 'yyyy-mm-dd')
      jadwalujian.waktu = waktu
      jadwalujian.bobot = bobot;
      jadwalujian.jumlah_soal_1 = jumlah_soal_1
      jadwalujian.jumlah_soal_2 = jumlah_soal_2
      jadwalujian.jumlah_soal = jumlah_soal
      jadwalujian.jumlah_per_sesi = jumlah_per_sesi;
      jadwalujian.isRandom = isRandom

      await jadwalujian.save()

      return response.json({
        status: true,
        message: "Proses tambah jadwal ujian berhasil"
      })


    } catch (error) {

      return response.json({
        status: false,
        message: "Opps..., terjadi kesalaha " + error
      })

    }


  }

  /**
   * Display a single jadwalujian.
   * GET jadwalujians/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params

    const jadwalujian = await JadwalUjian.find(id)

    const data = {}
    data['id'] = jadwalujian.id
    data['name'] = jadwalujian.name
    data['program_keahlian_id'] = Number(jadwalujian.program_keahlian_id)
    data['master_soal_id_1'] = Number(jadwalujian.master_soal_id_1)
    data['master_soal_id_2'] = Number(jadwalujian.master_soal_id_2)
    data['tanggal'] = dateFormat(jadwalujian.tanggal, 'yyyy-mm-dd')
    data['waktu'] = jadwalujian.waktu
    data['bobot'] = jadwalujian.bobot
    data['jumlah_soal_1'] = jadwalujian.jumlah_soal_1
    data['jumlah_soal_2'] = jadwalujian.jumlah_soal_2
    data['jumlah_soal'] = jadwalujian.jumlah_soal
    data['jumlah_per_sesi'] = jadwalujian.jumlah_per_sesi
    data['isRandom'] = jadwalujian.isRandom

    return data;
  }

  /**
   * Render a form to update an existing jadwalujian.
   * GET jadwalujians/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update jadwalujian details.
   * PUT or PATCH jadwalujians/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params
    const { name, program_keahlian_id, master_soal_id_1, master_soal_id_2, tanggal, waktu, bobot, jumlah_soal_1, jumlah_soal_2, jumlah_soal, jumlah_per_sesi, isToken, isRandom } = request.all()

    const rules = {
      name: 'required',
      program_keahlian_id: 'required',
      master_soal_id_1: 'required',
      tanggal: 'required',
      bobot: 'required',
      waktu: 'required',
      jumlah_soal_1: 'required',
      jumlah_soal: 'required',

    }

    const messages = {
      'name.required': "Ujian harus diisi",
      'program_keahlian_id.required': "Program Keahlian harus diisi",
      'master_soal_id_1.required': "Master Soal wajib diisi",
      'jumlah_soal_1.required': "Jumlah Soal 1 harus diisi",
      'tanggal.required': "Tanggal wajib dipilih",
      'bobot.required': "Bobot wajib diisi",
      'waktu.required': "Waktu harus diisi",
      "jumlah_soal_1.required": "Jumlah soal satu harus diisi",
      "jumlah_soal.required": "Total jumlah soal",

    }

    const Validations = await validate(request.all(), rules, messages)

    if (Validations.fails()) {
      const msg = await Validations.messages()

      return response.json({
        status: false,
        message: msg[0].message
      })
    }

    try {
      const jadwalujian = await JadwalUjian.find(id)
      jadwalujian.name = name
      jadwalujian.program_keahlian_id = program_keahlian_id;
      jadwalujian.master_soal_id_1 = master_soal_id_1
      jadwalujian.master_soal_id_2 = master_soal_id_2
      jadwalujian.tanggal = dateFormat(tanggal, 'yyyy-mm-dd')
      jadwalujian.waktu = waktu
      jadwalujian.bobot = bobot;
      jadwalujian.jumlah_soal_1 = jumlah_soal_1
      jadwalujian.jumlah_soal_2 = jumlah_soal_2
      jadwalujian.jumlah_soal = jumlah_soal
      jadwalujian.jumlah_per_sesi = jumlah_per_sesi;
      jadwalujian.isRandom = isRandom

      await jadwalujian.save()

      return response.json({
        status: true,
        message: "Proses ubah jadwal ujian berhasil"
      })


    } catch (error) {

      return response.json({
        status: false,
        message: "Opps..., terjadi kesalaha " + error
      })

    }


  }

  /**
   * Delete a jadwalujian with id.
   * DELETE jadwalujians/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params

    try {
      const jadwalujian = await JadwalUjian.find(id)
      await jadwalujian.delete()

      return response.json({
        status: true,
        message: "Hapus data jadwal ujian berhasil"
      })
    } catch (error) {
      return response.json({
        status: false,
        message: 'Opps..., terjadi kesalahan ' + error
      })
    }
  }
}

module.exports = JadwalUjianController
