"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const JalurPendaftaran = use("App/Models/JalurPendaftaran");
const { validate } = use("Validator");

/**
 * Resourceful controller for interacting with jalurpendaftarans
 */
class JalurPendaftaranController {
  /**
   * Show a list of all jalurpendaftarans.
   * GET jalurpendaftarans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async index({ request, response, view }) {
    const jalurpendaftaran = await JalurPendaftaran.query()
      .orderBy("id", "asc")
      .fetch();

    const datas = [];

    for (let i in jalurpendaftaran.rows) {
      const rows = jalurpendaftaran.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["name"] = rows.name;
      row["keterangan"] = rows.keterangan;
      row["kuota"] = rows.kuota;
      row["is_active"] = rows.is_active;

      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new jalurpendaftaran.
   * GET jalurpendaftarans/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new jalurpendaftaran.
   * POST jalurpendaftarans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single jalurpendaftaran.
   * GET jalurpendaftarans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const jalurpendaftaran = await JalurPendaftaran.findOrFail(id);
    return jalurpendaftaran;
  }

  /**
   * Render a form to update an existing jalurpendaftaran.
   * GET jalurpendaftarans/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update jalurpendaftaran details.
   * PUT or PATCH jalurpendaftarans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { name, keterangan, kuota, is_active } = request.all();

    const rules = {
      name: "required",
    };

    const messages = {
      "name.required": "Nama  harus diisi",
    };

    const Validator = await validate(request.all(), rules, messages);

    if (Validator.fails()) {
      const msg = await Validator.messages();

      return response.json({
        status: false,
        messages: msg[0].message,
      });
    }

    try {
      const jalurpendaftaran = await JalurPendaftaran.findOrFail(id);
      jalurpendaftaran.name = name;
      jalurpendaftaran.keterangan = keterangan;
      jalurpendaftaran.kuota = kuota;
      jalurpendaftaran.is_active = is_active;
      await jalurpendaftaran.save();

      return response.json({
        status: true,
        messagead: "Proses perubahan berhasil disimpan",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a jalurpendaftaran with id.
   * DELETE jalurpendaftarans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = JalurPendaftaranController;
