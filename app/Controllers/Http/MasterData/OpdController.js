"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Opd = use("App/Models/Opd");
const { validate } = use("Validator");

/**
 * Resourceful controller for interacting with opds
 */
class OpdController {
  /**
   * Show a list of all opds.
   * GET opds
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const opd = await Opd.query()
      .where("level", "1")
      .orderBy("id", "asc")
      .fetch();

    const datas = [];

    for (let i in opd.rows) {
      const rows = opd.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["kode"] = rows.kode;
      row["name"] = rows.name;

      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new opd.
   * GET opds/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new opd.
   * POST opds
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { name } = request.all();

    const rules = {
      name: "required",
    };

    const messages = {
      "name.required": "Nama OPD harus diisi",
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
      const opd = new Opd();
      opd.name = name;
      await opd.save();

      return response.json({
        status: true,
        message: "Proses tambah OPD berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Display a single opd.
   * GET opds/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;
    const data = await Opd.find(id);

    return data;
  }

  /**
   * Render a form to update an existing opd.
   * GET opds/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update opd details.
   * PUT or PATCH opds/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;
    const { name } = request.all();

    const rules = {
      name: "required",
    };

    const messages = {
      "name.required": "Nama OPD harus diisi",
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
      const opd = await Opd.find(id);
      opd.name = name;
      await opd.save();

      return response.json({
        status: true,
        message: "Proses ubah OPD berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a opd with id.
   * DELETE opds/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params;

    try {
      const opd = await Opd.find(id);
      opd.delete();

      return response.json({
        status: true,
        message: "Proses hapus data berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...terjadi kesalahan " + error,
      });
    }
  }

  async combo({ request, response }) {
    const data = await Opd.query()
      .select("name as text", "id as value")
      .where("level", "1")
      .fetch();

    return data;
  }

  async skpd2({ request, response }) {
    const { opd_id } = request.all();

    const opd = await Opd.findOrFail(opd_id);

    const tempkode = opd.kode;

    const kode = tempkode.substr(0, 4);

    const data = await Opd.query()
      .select("name as text", "id as value")
      .where("level", "2")
      .where("kode", "like", kode + "%")
      .fetch();

    return data;
  }

  async skpd3({ request, response }) {
    const { skpd2_id } = request.all();

    const opd = await Opd.findOrFail(skpd2_id);

    const tempkode = opd.kode;

    const kode = tempkode.substr(0, 6);

    const data = await Opd.query()
      .select("name as text", "id as value")
      .where("level", "3")
      .where("kode", "like", kode + "%")
      .fetch();

    return data;
  }

  async comboUnker({ request, response }) {
    const { skpd3_id } = request.all();

    const opd = await Opd.findOrFail(skpd3_id);

    const tempkode = opd.kode;

    const kode = tempkode.substr(0, 8);

    const data = await Opd.query()
      .select("name as text", "id as value")
      .where("level", "4")
      .where("kode", "like", kode + "%")
      .fetch();

    return data;
  }

  async njab({ request, response }) {
    const { unit_kerja_id } = request.all();

    const data = await Opd.findOrFail(unit_kerja_id);

    return data.njab;
  }
}

module.exports = OpdController;
