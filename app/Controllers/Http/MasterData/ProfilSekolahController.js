"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use("Env");

const ProfilSekolah = use("App/Models/ProfilSekolah");
const Peserta = use("App/Models/Peserta");
const { validate } = use("Validator");

var dateFormat = require("dateformat");

/**
 * Resourceful controller for interacting with profilsekolahs
 */
class ProfilSekolahController {
  /**
   * Show a list of all profilsekolahs.
   * GET profilsekolahs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new profilsekolah.
   * GET profilsekolahs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ params, request, response, view }) {
    const id = 1;

    const profilsekolah = await ProfilSekolah.find(id);

    const data = {};
    data["id"] = profilsekolah.id;
    data["npsn"] = profilsekolah.npsn;
    data["nama"] = profilsekolah.nama;
    data["program_keahlian"] = profilsekolah.program_keahlian;
    data["province_id"] = Number(profilsekolah.province_id);
    data["regency_id"] = Number(profilsekolah.regency_id);
    data["district_id"] = Number(profilsekolah.district_id);
    data["village_id"] = profilsekolah.village_id;
    data["alamat"] = profilsekolah.alamat;
    data["email"] = profilsekolah.email;
    data["website"] = profilsekolah.website;
    data["facebook"] = profilsekolah.facebook;
    data["twitter"] = profilsekolah.twitter;
    data["instagram"] = profilsekolah.instagram;
    data["kepalasekolah"] = profilsekolah.kepalasekolah;
    data["nip"] = profilsekolah.nip;
    data["logo"] = profilsekolah.logo;
    data["path"] =
      profilsekolah.logo == null
        ? Env.get("BASE_URL") + "/images/logo-kab.png"
        : Env.get("BASE_URL") + "/api/download/logo/" + profilsekolah.logo;
    data["bg"] = profilsekolah.bg;
    data["path_bg"] =
      Env.get("BASE_URL") + "/api/download/logo/" + profilsekolah.bg;
    data["tanggal_mulai"] = profilsekolah.tanggal_mulai;
    data["tanggal_selesai"] = profilsekolah.tanggal_selesai;
    data["theme"] = profilsekolah.theme;
    data["showpagu"] = profilsekolah.showpagu;
    data["slider"] = profilsekolah.slider;
    data["tanpa_berkas"] = profilsekolah.tanpa_berkas;
    data["regby"] = profilsekolah.regby;
    data["ketua_panitia_nama"] = profilsekolah.ketua_panitian_nama;
    data["ketua_panitia_nip"] = profilsekolah.ketua_panitia_nip;
    data["titi_mangsa_ttd"] = profilsekolah.titi_mangsa_ttd;

    return data;
  }

  /**
   * Create/save a new profilsekolah.
   * POST profilsekolahs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single profilsekolah.
   * GET profilsekolahs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const id = 1;

    const profilsekolah = await ProfilSekolah.find(id);

    const data = {};
    data["id"] = profilsekolah.id;
    data["npsn"] = profilsekolah.npsn;
    data["nama"] = profilsekolah.nama;
    data["program_keahlian"] = profilsekolah.program_keahlian;
    data["province_id"] = Number(profilsekolah.province_id);
    data["regency_id"] = Number(profilsekolah.regency_id);
    data["district_id"] = Number(profilsekolah.district_id);
    data["village_id"] = profilsekolah.village_id;
    data["alamat"] = profilsekolah.alamat;
    data["telpon"] = profilsekolah.telpon;
    data["email"] = profilsekolah.email;
    data["website"] = profilsekolah.website;
    data["facebook"] = profilsekolah.facebook;
    data["twitter"] = profilsekolah.twitter;
    data["instagram"] = profilsekolah.instagram;
    data["kepalasekolah"] = profilsekolah.kepalasekolah;
    data["nip"] = profilsekolah.nip;
    data["logo"] = profilsekolah.logo;
    data["showpagu"] = profilsekolah.showpagu;
    data["slider"] = profilsekolah.slider;
    data["path"] =
      profilsekolah.logo == null
        ? Env.get("BASE_URL") + "/images/logo-kab.png"
        : Env.get("BASE_URL") + "/api/download/logo/" + profilsekolah.logo;
    data["bg"] = profilsekolah.bg;
    data["path_bg"] =
      profilsekolah.bg == null
        ? Env.get("BASE_URL") + "/images/logo-kab.png"
        : Env.get("BASE_URL") + "/api/download/logo/" + profilsekolah.bg;
    data["bg_nav"] = profilsekolah.bg_nav;
    data["path_bg_nav"] =
      profilsekolah.bg_nav == null
        ? Env.get("BASE_URL") + "/images/logo-kab.png"
        : Env.get("BASE_URL") + "/api/download/logo/" + profilsekolah.bg_nav;

    data["tanggal_mulai"] = dateFormat(
      profilsekolah.tanggal_mulai,
      "yyyy-mm-dd"
    );
    data["tanggal_selesai"] = dateFormat(
      profilsekolah.tanggal_selesai,
      "yyyy-mm-dd"
    );
    data["jam_mulai"] = profilsekolah.jam_mulai;
    data["jam_selesai"] = profilsekolah.jam_selesai;

    data["theme"] = profilsekolah.theme;
    data["color"] = profilsekolah.color;
    data["apps_name"] = profilsekolah.apps_name;
    data["apps_ver"] = profilsekolah.apps_ver;
    data["apps_desc"] = profilsekolah.apps_desc;
    data["skck"] = profilsekolah.skck;
    data["butawarna"] = profilsekolah.butawarna;
    data["pagu"] = profilsekolah.pagu;
    data["materai"] = profilsekolah.materai;
    data["url"] = profilsekolah.url;
    data["sms"] = profilsekolah.sms;
    data["apikey"] = profilsekolah.apikey;
    data["pesertas"] = profilsekolah.pesertas;
    data["limit_sesi"] = profilsekolah.limit_sesi;
    data["tanpa_berkas"] = profilsekolah.tanpa_berkas;
    data["regby"] = profilsekolah.regby;
    data["ketua_panitia_nama"] = profilsekolah.ketua_panitia_nama;
    data["ketua_panitia_nip"] = profilsekolah.ketua_panitia_nip;
    data["titi_mangsa_ttd"] = profilsekolah.titi_mangsa_ttd;

    //jadwal pengumuman
    data["tanggal_pengumuman"] = dateFormat(
      profilsekolah.tanggal_pengumuman,
      "yyyy-mm-dd"
    );
    data["jam_pengumuman"] = profilsekolah.jam_pengumuman;

    return data;
  }

  /**
   * Render a form to update an existing profilsekolah.
   * GET profilsekolahs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update profilsekolah details.
   * PUT or PATCH profilsekolahs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const {
      npsn,
      nama,
      program_keahlian,
      province_id,
      regency_id,
      district_id,
      village_id,
      alamat,
      telpon,
      email,
      website,
      facebook,
      twitter,
      instagram,
      kepalasekolah,
      nip,
      logo,
      bg,
      theme,
      bg_nav,
      color,
      tanggal_mulai,
      tanggal_selesai,
      jam_mulai,
      jam_selesai,
      apps_name,
      apps_ver,
      apps_desc,
      skck,
      butawarna,
      pagu,
      materai,
      url,
      sms,
      apikey,
      pesertas,
      limit_sesi,
      showpagu,
      slider,
      tanpa_berkas,
      regby,
      tanggal_pengumuman,
      jam_pengumuman,
      ketua_panitia_nama,
      ketua_panitia_nip,
      titi_mangsa_ttd,
    } = request.all();

    const rules = {
      npsn: "required",
      nama: "required",
    };

    const messages = {
      "npsn.required": "NPSN tidak boleh kosong..!",
      "nama.required": "Nama Sekolah tidak boleh kosong",
    };

    const Validator = await validate(request.all(), rules, messages);

    if (Validator.fails()) {
      const msg = await Validator.messages();
      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const profilsekolah = await ProfilSekolah.find(id);
      profilsekolah.npsn = npsn;
      profilsekolah.nama = nama;
      profilsekolah.program_keahlian = program_keahlian;
      profilsekolah.province_id = province_id;
      profilsekolah.regency_id = regency_id;
      profilsekolah.district_id = district_id;
      profilsekolah.village_id = village_id;
      profilsekolah.alamat = alamat;
      profilsekolah.telpon = telpon;
      profilsekolah.email = email;
      profilsekolah.website = website;
      profilsekolah.facebook = facebook;
      profilsekolah.twitter = twitter;
      profilsekolah.instagram = instagram;
      profilsekolah.kepalasekolah = kepalasekolah;
      profilsekolah.nip = nip;
      profilsekolah.logo = logo;
      profilsekolah.bg = bg;
      profilsekolah.theme = theme;
      profilsekolah.tanggal_mulai = tanggal_mulai;
      profilsekolah.tanggal_selesai = tanggal_selesai;
      profilsekolah.jam_mulai = jam_mulai;
      profilsekolah.jam_selesai = jam_selesai;
      profilsekolah.theme = theme;
      profilsekolah.bg_nav = bg_nav;
      profilsekolah.color = color;
      profilsekolah.apps_name = apps_name;
      profilsekolah.apps_ver = apps_ver;
      profilsekolah.apps_desc = apps_desc;
      profilsekolah.skck = skck;
      profilsekolah.butawarna = butawarna;
      profilsekolah.pagu = pagu;
      profilsekolah.materai = materai;
      profilsekolah.url = url;
      profilsekolah.sms = sms;
      profilsekolah.apikey = apikey;
      profilsekolah.pesertas = JSON.stringify(pesertas);
      profilsekolah.limit_sesi = limit_sesi;
      profilsekolah.showpagu = showpagu;
      profilsekolah.slider = slider;
      profilsekolah.tanpa_berkas = tanpa_berkas;
      profilsekolah.regby = regby;
      profilsekolah.tanggal_pengumuman = tanggal_pengumuman;
      profilsekolah.jam_pengumuman = jam_pengumuman;
      profilsekolah.ketua_panitia_nama = ketua_panitia_nama;
      profilsekolah.ketua_panitia_nip = ketua_panitia_nip;
      profilsekolah.titi_mangsa_ttd = titi_mangsa_ttd;

      await profilsekolah.save();

      return response.json({
        status: true,
        message: "Update profil sekolah berhasil..!",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...!, terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a profilsekolah with id.
   * DELETE profilsekolahs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response, auth }) {}

  async resetdata({ request, response, auth }) {
    const user = await auth.user;

    if (user.authent == "administrator") {
      await Peserta.query().delete();

      return response.json({
        status: true,
        message: "Proses reset data berhasil...!",
      });
    } else {
      return response.json({
        status: false,
        message: "Opps...!, anda tidak berhak untuk mengeksekusi proses ini ",
      });
    }
  }
}

module.exports = ProfilSekolahController;
