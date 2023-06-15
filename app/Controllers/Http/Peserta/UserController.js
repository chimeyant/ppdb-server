"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const User = use("App/Models/User");
const ProfilSekolah = use("App/Models/ProfilSekolah");
var dateFormat = require("dateformat");
const { validate } = use("Validator");
const Axios = use("axios");

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async register({ request, response }) {
    const { username, email, password, telepon } = request.all();

    const profilsekolah = await ProfilSekolah.query().first();

    const date = new Date();
    const current_date = date.getTime();

    const tanggal_mulai = dateFormat(profilsekolah.tanggal_mulai, "yyyy-mm-dd");
    const tanggal_selesai = dateFormat(
      profilsekolah.tanggal_selesai,
      "yyyy-mm-dd"
    );

    const jam_mulai = profilsekolah.jam_mulai;
    const jam_selesai = profilsekolah.jam_selesai;

    let pendaftaran = false;
    if (
      dateFormat(current_date, "yyyy-mm-dd") >= tanggal_mulai &&
      dateFormat(current_date, "yyyy-mm-dd") <= tanggal_selesai
    ) {
      //if (jam_mulai < dateFormat(current_date, "HH:mm:ss") && jam_selesai > dateFormat(current_date, "HH:mm:ss")){

      pendaftaran = true;
      //}
    } else {
      return response.json({
        status: false,
        message: "Mohon maaf pendaftaran masih/telah ditutup...",
        user: {},
      });
    }

    const authent = "peserta";

    let rules = {};
    let messages = {};

    if (profilsekolah.regby == "email") {
      rules = {
        username: "required",
        email: "required|email|unique:users",
        telepon: "required",
        password: "required|min:8",
      };

      messages = {
        "username.required": "Nama lengkap tidak boleh kosong",
        "email.required": "Email tidak boleh kosong",
        "email.email": "Email tidak benar",
        "email.unique": "Email telah terdaftar",
        "telepon.requried": "Nomor telepon tidak boleh kosong",
        "password.required": "Kata sandi tidak boleh kosong",
      };
    } else {
      rules = {
        username: "required",
        email: "required|unique:users",
        telepon: "required",
        password: "required|min:8",
      };

      messages = {
        "username.required": "Nama lengkap tidak boleh kosong",
        "email.required": "Email tidak boleh kosong",
        "email.unique": "Email telah terdaftar",
        "telepon.requried": "Nomor telepon tidak boleh kosong",
        "password.required": "Kata sandi tidak boleh kosong",
      };
    }

    const Validation = await validate(request.all(), rules, messages);

    if (Validation.fails()) {
      const msg = await Validation.messages();
      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const user = new User();
      user.username = username;
      user.email = email;
      user.password = password;
      user.authent = authent;
      user.telepon = telepon;
      await user.save();

      const msg = {
        apikey: profilsekolah.apikey,
        nomor: telepon,
        pesan:
          "Selamat.., Registrasi akun berhasil Disekolah " +
          profilsekolah.nama +
          "  \r\n\r\n Dengan User/Pengguna  : " +
          email +
          " \r\n\r\n Kata Sandi : " +
          password +
          "\r\n\r\n Silahkan login dan lakukan pengisian *form pendaftaran* secara online, mohon persiapkan dokumen sesuai persyaratan. \r\n\r\n  Untuk kelancaran proses pendaftaran gunakan *Laptop / PC dengan Browser yang direkomendasikan : brave Browser / google chrome / Firefox*. \r\n\r\n Panitia PPDB 2022  \r\n\r\n Pesan ini tidak untuk dibalas ( Pesan Otomatis ).",
      };

      await Axios.post("http://api.senderwa.com/api/v2/send-wa", msg);

      return response.json({
        status: true,
        message: "Proses Registrasi Berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan email sudah terdaftar ",
      });
    }
  }
  async index({ request, response, view }) {}

  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = UserController;
