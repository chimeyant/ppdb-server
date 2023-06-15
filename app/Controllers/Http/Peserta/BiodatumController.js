"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use("Env");
const Peserta = use("App/Models/Peserta");
const { validate } = use("Validator");
var dateFormat = require("dateformat");

/**
 * Resourceful controller for interacting with biodata
 */
class BiodatumController {
  /**
   * Show a list of all biodata.
   * GET biodata
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view, auth }) {
    const user = auth.user;

    const peserta_id = user.peserta_id;

    const peserta = await Peserta.find(peserta_id);

    const data = {};
    data["id"] = peserta.id;
    data["nama"] = peserta.nama;
    data["nip"] = peserta.nip;
    data["nik"] = peserta.nik;
    data["tempat_lahir"] = peserta.tempat_lahir;
    data["tanggal_lahir"] = dateFormat(peserta.tanggal_lahir, "yyyy-mm-dd");
    data["jenis_kelamin"] = peserta.jenis_kelamin;
    data["province_id"] = Number(peserta.province_id);
    data["regency_id"] = Number(peserta.regency_id);
    data["district_id"] = Number(peserta.district_id);
    data["village_id"] = peserta.village_id;
    data["alamat_asal"] = peserta.alamat_asal;
    data["alamat_domisili"] = peserta.alamat_domisili;
    data["telp"] = peserta.telp;
    data["email"] = peserta.email;
    data["golongan_id"] = Number(peserta.golongan_id);
    data["prestasi"] = peserta.prestasi;
    data["pendidikan_id"] = Number(peserta.pendidikan_id);
    data["jurusan_id"] = peserta.jurusan_id;
    data["sekolah"] = peserta.sekolah;
    data["jenis_pns"] = peserta.jenis_pns;
    data["perangkat_daerah_pemohon"] = peserta.perangkat_daerah_pemohon;
    data["jabatan_asal"] = peserta.jabatan_asal;
    data["photo"] = peserta.photo;
    data["path"] =
      Env.get("BASE_URL") + "/api/download/peserta/" + peserta.photo;

    return data;
  }

  /**
   * Render a form to be used for creating a new biodatum.
   * GET biodata/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new biodatum.
   * POST biodata
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single biodatum.
   * GET biodata/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing biodatum.
   * GET biodata/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update biodatum details.
   * PUT or PATCH biodata/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const {
      nama,
      nip,
      nik,
      tempat_lahir,
      tanggal_lahir,
      jenis_kelamin,
      province_id,
      regency_id,
      district_id,
      village_id,
      alamat_asal,
      alamat_domisili,
      telp,
      email,
      golongan_id,
      prestasi,
      pendidikan_id,
      jurusan_id,
      sekolah,
      photo,
      jenis_pns,
      perangkat_daerah_pemohon,
      jabatan_asal,
    } = request.all();

    const rules = {
      nama: "required",
      nip: "required",
      nik: "required",
      tempat_lahir: "required",
      tanggal_lahir: "required|date",
      jenis_kelamin: "required",
      province_id: "required",
      regency_id: "required",
      district_id: "required",
      village_id: "required",
      alamat_asal: "required",
      telp: "required",
      email: "required",
      golongan_id: "required",
      pendidikan_id: "required",
      jurusan_id: "required",
      photo: "required",
      jenis_pns: "required",
      jabatan_asal: "required",
      perangkat_daerah_pemohon: "required",
    };

    const messages = {
      "nama.required": "Nama harus diisi",
      "nip.required": "NIP harus diisi",
      "nik.required": "NIK harus diisi",
      "tempat_lahir.required": "Tempat lahir harus diisi",
      "tanggal_lahir.required": "Tanggal lahir harus diisi",
      "jenis_kelamin.required": "Jenis kelamin harus dipilih",
      "province_id.required": "Provinsi asal harus dipilih",
      "regency_id.required": "Kabupaten asal harus dipilih",
      "district_id.required": "Kecamatan asal harus dipilih",
      "village_id.required":
        "Propinsi, Kabupaten, Kecamatan dan Desa harus dipilih",
      "alamat_asal.required": "Alamat asal harus diisi",
      "telp.required": "Nomor telpon harus diisi",
      "email.required": "Email harus diisi",
      "golongan_id.required": "Golongan atau ruang harus dipilih",
      "pendidikan_id.required": "Pendidikan harus dipilih",
      "jurusan_id.required": "Pendidikan dan Jurusan Pendidikan harus dipilih",
      "photo.required": "Photo harus di upload",
      "jenis_pns.required": "Instansi asal harus dipilih",
      "jabatan_asal.required": "Jabatan Asal haru diisi",
      "perangkat_daerah_pemohona.required":
        "Perangkat Daerah Pemohon wajib diisi",
    };

    const Validation = await validate(request.all(), rules, messages);

    if (Validation.fails()) {
      const msg = await Validation.messages();

      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const peserta = await Peserta.find(id);
      peserta.nama = nama;
      peserta.nip = nip;
      peserta.nik = nik;
      peserta.tempat_lahir = tempat_lahir;
      peserta.tanggal_lahir = tanggal_lahir;
      peserta.jenis_kelamin = jenis_kelamin;
      peserta.province_id = province_id;
      peserta.regency_id = regency_id;
      peserta.district_id = district_id;
      peserta.village_id = village_id;
      peserta.alamat_asal = alamat_asal;
      peserta.alamat_domisili = alamat_domisili;
      peserta.telp = telp;
      peserta.email = email;
      peserta.golongan_id = golongan_id;
      peserta.prestasi = prestasi;
      peserta.pendidikan_id = pendidikan_id;
      peserta.jurusan_id = jurusan_id;
      peserta.sekolah = sekolah;
      peserta.photo = photo;
      peserta.jenis_pns = jenis_pns;
      peserta.perangkat_daerah_pemohon = perangkat_daerah_pemohon;
      peserta.jabatan_asal = jabatan_asal;
      peserta.is_completed = true;
      await peserta.save();

      return response.json({
        status: true,
        message: "Proses simpan data berhasil..!",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a biodatum with id.
   * DELETE biodata/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = BiodatumController;
