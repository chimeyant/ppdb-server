'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use("Env")
const Peserta = use("App/Models/Peserta")
const Desa = use("App/Models/Village")
const Kecamatan = use("App/Models/District")
const Kabupaten = use("App/Models/Regency")
const Provinsi = use("App/Models/Province")
const { validate } = use("Validator")
var dateFormat = require('dateformat')
const Queue = use("Queue")
const VerifikasiDaftarUlang = use("App/Jobs/Producers/VerifikasiDaftarUlang")


/**
 * Resourceful controller for interacting with verifikasis
 */
class VerifikasiController {
  /**
   * Show a list of all verifikasis.
   * GET verifikasis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ params, request, response, view }) {
    const { jurusan_id } = params
    const peserta = await Peserta.query().where('jurusan_id_1', jurusan_id).where('kelulusan_pil_1_status', true).orWhere('jurusan_id_2', jurusan_id).where('kelulusan_pil_1_status', false).where('kelulusan_pil_2_status', true).fetch()

    const datas = []

    for (let i in peserta.rows) {
      const rows = peserta.rows[i]

      const row = {}
      row['id'] = rows.id
      row['num'] = i++ + 1
      row['nisn'] = rows.nisn
      let nama = rows.nama;
      row['nama'] = nama.toUpperCase();
      let sekolah = rows.nama_sekolah_asal
      row['sekolah'] = sekolah.toUpperCase()
      row['jenis_kelamin'] = rows.jenis_kelamin
      row['daftar_ulang_status'] = rows.daftar_ulang_status ? dateFormat(rows.daftar_ulang_tanggal, 'dd/mm/yyyy') : 'BELUM'
      row['daftar_ulang_verifikasi_status'] = !rows.daftar_ulang_status ? "BELUM" : rows.daftar_ulang_status == 'true' ? "PENGAJUAN" : rows.daftar_ulang_status
      datas.push(row)
    }
    return datas;
  }

  /**
   * Render a form to be used for creating a new verifikasi.
   * GET verifikasis/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new verifikasi.
   * POST verifikasis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
  }

  /**
   * Display a single verifikasi.
   * GET verifikasis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { jurusan_id, id } = params;

    const peserta = await Peserta.find(id);
    const village = await Desa.find(peserta.village_id)
    const kecamatan = await Kecamatan.find(peserta.district_id)
    const kabupaten = await Kabupaten.find(peserta.regency_id);

    const data = {}
    data['id'] = peserta.id
    let nama = peserta.nama
    data['nisn'] = peserta.nisn
    data['nik'] = peserta.nik
    data['nama'] = nama.toUpperCase()
    data['ttl'] = peserta.tempat_lahir + ", " + dateFormat(peserta.tanggal_lahir, 'dd/mm/yyyy')
    data['gen'] = peserta.jenis_kelamin == 'L' ? 'Laki-laki' : 'Perempuan'
    data['alamat'] = peserta.alamat
    data['desa'] = village.name
    data['kecamatan'] = kecamatan.name
    data['kabupaten'] = kabupaten.name
    let sekolah = peserta.nama_sekolah_asal
    data['sekolah'] = sekolah.toUpperCase()
    data['wa'] = peserta.nomor_hp
    data['telp'] = peserta.telpon_rumah
    data['foto'] = Env.get("BASE_URL") + "/api/download/peserta/" + peserta.foto
    data['keterangan'] = peserta.keterangan;
    data['dok_kartu_keluarga'] = Env.get('BASE_URL') + "/api/download/peserta/" + peserta.dok_kartu_keluarga
    data['dok_akte_lahir'] = Env.get('BASE_URL') + "/api/download/peserta/" + peserta.dok_akte_lahir
    data['dok_skl'] = Env.get('BASE_URL') + "/api/download/peserta/" + peserta.dok_skl
    data['daftar_ulang_dokumen'] = Env.get('BASE_URL') + "/api/download/peserta/" + peserta.daftar_ulang_dokumen
    return data;
  }

  /**
   * Render a form to update an existing verifikasi.
   * GET verifikasis/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update verifikasi details.
   * PUT or PATCH verifikasis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { jurusan_id, id } = params
    const { daftar_ulang_status, verifikasi_keterangan } = request.all()

    const rules = {
      daftar_ulang_status: "required"
    }

    const messages = {
      "daftar_ulang_status.required": "Status Verifikasi harus dipilih"
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
      const peserta = await Peserta.find(id)
      peserta.daftar_ulang_status = daftar_ulang_status
      peserta.verifikasi_keterangan = verifikasi_keterangan
      await peserta.save()

      //send wa here
      let job;
      job = new VerifikasiDaftarUlang({ 'nomor_register': peserta.nomor_register, 'nama': peserta.nama, 'nomor': peserta.nomor_hp, 'status': peserta.daftar_ulang_status + " " + peserta.verifikasi_keterangan })

      Queue.dispatch(job, '10 seconds from now')

      return response.json({
        status: true,
        message: "Proses verifikasi berhasil"
      })
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error
      })
    }
  }

  /**
   * Delete a verifikasi with id.
   * DELETE verifikasis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = VerifikasiController
