"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Peserta = use("App/Models/Peserta");
const Jurusan = use("App/Models/ProgramKeahlian");
const ProfilSekolah = use("App/Models/ProfilSekolah");
const SendWa = use("App/Jobs/Producers/SendWa");
const Wa = use("App/Models/Wa");
const Queue = use("Queue");
const { validate } = use("Validator");

/**
 * Resourceful controller for interacting with was
 */
class WaController {
  /**
   * Show a list of all was.
   * GET was
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const pesan = await Wa.query().orderBy("id", "desc").fetch();

    const datas = [];
    for (let i in pesan.rows) {
      const rows = pesan.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["name"] = rows.name;
      row["nomor"] = rows.nomor;
      row["jenis_informasi"] =
        rows.jenis_informasi == "informasi-umum" ? "UMUM" : "DAFTAR ULANG";
      row["pesan"] = rows.pesan;
      row["status"] = rows.status;
      datas.push(row);
    }

    return datas;
  }

  /**
   * Render a form to be used for creating a new wa.
   * GET was/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new wa.
   * POST was
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const { program_keahlian_id, pesan } = request.all();

    try {
      const jurusan = await Jurusan.find(program_keahlian_id);

      //cari pagu
      const jmlpeserta = await Peserta.query()
        .where("jurusan_id_1", program_keahlian_id)
        .getCount();

      if (Number(jmlpeserta >= Number(jurusan.pagu))) {
        const pesertas = await Peserta.query()
          .where("jurusan_id_1", program_keahlian_id)
          .where("kelulusan_pil_1_status", true)
          .orderBy("id", "asc")
          .fetch();
        let waktu = 0;

        if (pesertas) {
          for (let i in pesertas.rows) {
            const rows = pesertas.rows[i];
            const wa = new Wa();
            wa.nomor_register = rows.nomor_register;
            wa.name = rows.nama + " (" + jurusan.singkat + ") ";
            wa.nomor = rows.nomor_hp;
            wa.pesan = pesan;
            wa.status = false;
            await wa.save();
          }
        } else {
          return response.json({
            status: false,
            message: "Data Kelulusan belum tersedia",
          });
        }

        let job;
        job = new SendWa({ data: "tes" });

        await Queue.dispatch(job, "every 8 seconds");

        return response.json({
          status: true,
          message: "Proses Kirim Pesan Berhasil",
        });
      } else {
        const pesertas1 = await Peserta.query()
          .where("jurusan_id_1", program_keahlian_id)
          .where("kelulusan_pil_1_status", true)
          .orWhere("jurusan_id_2", program_keahlian_id)
          .where("kelulusan_pil_1_status", false)
          .where("kelulusan_pil_2_status", true)
          .orderBy("id", "asc")
          .fetch();

        if (!pesertas1 == null) {
          for (let i in pesertas1.rows) {
            const rows = pesertas1.rows[i];
            const wa = new Wa();
            wa.nomor_register = rows.nomor_register;
            wa.name = rows.nama + " (" + jurusan.singkat + ") ";
            wa.nomor = rows.nomor_hp;
            wa.pesan = pesan;
            wa.status = false;
            await wa.save();
          }
        } else {
          return response.json({
            status: false,
            message: "Kelulusan belum di tentukan...!",
          });
        }
        const jmlrecord = await Wa.query().where("status", false).getCount();

        let job;
        job = new SendWa({ data: "Sending Ujian" });

        Queue.dispatch(job, "10 seconds from now");

        return response.json({
          status: true,
          message: "Proses Kirim  Pesan Berhasil",
        });
      }
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps.., terjadi kesalahan " + error,
      });
    }
  }

  async kirimulang({ request, response }) {
    const { id } = request.all();

    const profilsekolah = await ProfilSekolah.query().first();

    const wa = await Wa.find(id);
  }

  /**
   * Display a single wa.
   * GET was/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Render a form to update an existing wa.
   * GET was/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update wa details.
   * PUT or PATCH was/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a wa with id.
   * DELETE was/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      await Wa.query().delete();

      return response.json({
        status: true,
        message: "Berhasil di hapus",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opp terjadi kesalahan " + error,
      });
    }
  }

  async kiriminformasi({ request, response }) {
    const { program_keahlian_id, jenis_informasi, pesan } = request.all();

    const rules = {
      program_keahlian_id: "required",
      pesan: "required",
    };

    const messages = {
      "program_keahlian_id.required": "Program keahlian belum dipilih",
      "pesan.required": "Pesan tidak boleh kosong",
    };

    const Validation = await validate(request.all(), rules, messages);

    if (Validation.fails()) {
      const msg = await Validation.messages();
      return response.json({
        status: false,
        message: msg[0].messaages,
      });
    }

    try {
      const jurusan = await Jurusan.find(program_keahlian_id);

      const pesertas1 = await Peserta.query()
        .where("jurusan_id_1", program_keahlian_id)
        .where("kelulusan_pil_1_status", true)
        .orderBy("id", "asc")

        .fetch();

      if (pesertas1) {
        for (let i in pesertas1.rows) {
          const rows = pesertas1.rows[i];
          const wa = new Wa();
          wa.nomor_register = rows.nomor_register;
          wa.jenis_informasi = jenis_informasi;
          wa.name = rows.nama + " (" + jurusan.singkat + ") ";
          wa.nomor = rows.nomor_hp;
          wa.pesan = pesan;
          wa.status = false;
          await wa.save();
        }

        const jmlrecord = await Wa.query().where("status", false).getCount();

        let job;
        job = new SendWa({ data: "Sending" });

        Queue.dispatch(job, "every 3 seconds");

        return response.json({
          status: true,
          message: "Proses Kirim  Pesan Berhasil",
        });
      } else {
        return response.json({
          status: false,
          message: "Data peserta tidak ada ",
        });
      }
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan",
      });
    }
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}

module.exports = WaController;
