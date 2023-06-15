"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const RefSekolah = use("App/Models/RefSekolah");
const { validate } = use("Validator");
/**
 * Resourceful controller for interacting with refsekolahs
 */
class RefSekolahController {
  /**
   * Show a list of all refsekolahs.
   * GET refsekolahs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const refsekolahs = await RefSekolah.query().orderBy("id", "desc").fetch();

    const datas = [];

    for (let i in refsekolahs.rows) {
      const rows = refsekolahs.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["npsn"] = rows.npsn;
      row["name"] = rows.name;
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new refsekolah.
   * GET refsekolahs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new refsekolah.
   * POST refsekolahs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { npsn, name } = request.all();

    const rules = {
      npsn: "required",
      name: "required",
    };

    const messages = {
      "npsn.required": "NPSN tidak boleh kosong",
      "name.required": "Nama sekolah tidak boleh kosong",
    };

    const Validations = await validate(request.all(), rules, messages);

    if (Validations.fails()) {
      const msg = await Validations.messages();
      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const refsekolah = new RefSekolah();
      refsekolah.npsn = npsn;
      refsekolah.name = name;
      await refsekolah.save();

      return response.json({
        status: true,
        message: "Proses tambah referensi sekolah berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Display a single refsekolah.
   * GET refsekolahs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;
    const data = await RefSekolah.find(id);

    return data;
  }

  /**
   * Render a form to update an existing refsekolah.
   * GET refsekolahs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update refsekolah details.
   * PUT or PATCH refsekolahs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { npsn, name } = request.all();

    const rules = {
      npsn: "required",
      name: "required",
    };

    const messages = {
      "npsn.required": "NPSN tidak boleh kosong",
      "name.required": "Nama sekolah tidak boleh kosong",
    };

    const Validations = await validate(request.all(), rules, messages);

    if (Validations.fails()) {
      const msg = await Validations.messages();
      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const refsekolah = await RefSekolah.find(id);
      refsekolah.npsn = npsn;
      refsekolah.name = name;
      await refsekolah.save();

      return response.json({
        status: true,
        message: "Proses ubah referensi sekolah berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a refsekolah with id.
   * DELETE refsekolahs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}

  async combo({ request, response }) {
    const data = await RefSekolah.query()
      .select("id as value", "name as text")
      .orderBy("id", "asc")
      .fetch();

    return data;
  }
}

module.exports = RefSekolahController;
