"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use("Env");
const Peserta = use("App/Models/Peserta");
const User = use("App/Models/User");
const ProgramKeahlian = use("App/Models/ProgramKeahlian");
const { validate } = use("Validator");
const ParamPrestasi = use("App/Models/ParamPrestasi");
const ParamNilai = use("App/Models/ParamNilai");
const Pesan = use("App/Models/Pesan");
const ProfilSekolah = use("App/Models/ProfilSekolah");
var dateFormat = require("dateformat");
const got = use("got");
const FormData = use("form-data");
const Queue = use("Queue");
const SendWa = use("App/Jobs/Producers/SendWa");
const SendPengumuman = use("App/Jobs/Producers/SendPengumuman");
const JadwalUjianAbsen = use("App/Models/JadwalUjianAbsen");

/**
 * Resourceful controller for interacting with olahnilais
 */
class OlahNilaiController {
  /**
   * Show a list of all olahnilais.
   * GET olahnilais
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */

  async index({ params, request, response, view, auth }) {
    const { jurusan_id } = params;

    const profilsekolah = await ProfilSekolah.query().first();

    const jurusan = await ProgramKeahlian.find(jurusan_id);

    const jmlpeserta = await Peserta.query()
      .where("jurusan_id_1", jurusan_id)
      .whereIn("verifikasi_status", profilsekolah.pesertas)
      .getCount();

    if (Number(jmlpeserta) >= Number(jurusan.pagu)) {
      //cari peserta afirmasi

      //binding data
      const data = [];
      let num = 0;

      /*

      const peserta_prestasi =  await Peserta.query()
        .where("jurusan_id_1", jurusan_id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("prestasi_status", true)
        .where("kelulusan_pil_1_status", true)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      for (let i in peserta_prestasi.rows) {
        const rows = peserta_prestasi.rows[i];
        const pil1 = await ProgramKeahlian.find(jurusan_id);

        num = num + 1;

        const row = {};
        row["id"] = rows.id;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = pil1.singkat;
        //area nilai

        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["na"] = rows.nilai_akhir;
        row["status"] =
          rows.jurusan_id_1 == jurusan_id
            ? rows.kelulusan_pil_1_status
              ? "L"
              : "TL"
            : rows.kelulusan_pil_2_status
            ? "L"
            : "TL";
        row["order_person_status"] = rows.order_person_status;
        row["prioritas"] = rows.prioritas;

        data.push(row);
      }

      //binding peserta afirmasi
      /**
      const peserta_afirmasi = await Peserta.query()
        .where("jurusan_id_1", jurusan_id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("prestasi_status", false)
        .where("afirmasi_status", true)
        .where("kelulusan_pil_1_status", true)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      for (let i in peserta_afirmasi.rows) {
        const rows = peserta_afirmasi.rows[i];
        const pil1 = await ProgramKeahlian.find(jurusan_id);

        num = num + 1;

        const row = {};
        row["id"] = rows.id;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = pil1.singkat;
        //area nilai

        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["na"] = rows.nilai_akhir;
        row["status"] =
          rows.jurusan_id_1 == jurusan_id
            ? rows.kelulusan_pil_1_status
              ? "L"
              : "TL"
            : rows.kelulusan_pil_2_status
            ? "L"
            : "TL";
        row["order_person_status"] = rows.order_person_status;
        row["prioritas"] = rows.prioritas;

        data.push(row);
      }

      */

      //binding peserta umum
      const peserta_umum = await Peserta.query()
        .where("jurusan_id_1", jurusan_id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        //.where("prestasi_status", false)
        //.where("afirmasi_status", false)
        .where("kelulusan_pil_1_status", true)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      for (let i in peserta_umum.rows) {
        const rows = peserta_umum.rows[i];
        const pil1 = await ProgramKeahlian.find(jurusan_id);

        num = num + 1;

        const row = {};
        row["id"] = rows.id;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = pil1.singkat;
        //area nilai

        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["na"] = rows.nilai_akhir;
        row["status"] =
          rows.jurusan_id_1 == jurusan_id
            ? rows.kelulusan_pil_1_status
              ? "L"
              : "TL"
            : rows.kelulusan_pil_2_status
            ? "L"
            : "TL";
        row["order_person_status"] = rows.order_person_status;
        row["prioritas"] = rows.prioritas;

        data.push(row);
      }

      //bidning data tidak lulus
      const peserta_tl = await Peserta.query()
        .where("jurusan_id_1", jurusan_id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("kelulusan_pil_1_status", false)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      for (let i in peserta_tl.rows) {
        const rows = peserta_tl.rows[i];
        const pil1 = await ProgramKeahlian.find(jurusan_id);

        num = num + 1;

        const row = {};
        row["id"] = rows.id;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = pil1.singkat;
        //area nilai

        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["na"] = rows.nilai_akhir;
        row["status"] =
          rows.jurusan_id_1 == jurusan_id
            ? rows.kelulusan_pil_1_status
              ? "L"
              : "TL"
            : rows.kelulusan_pil_2_status
            ? "L"
            : "TL";
        row["order_person_status"] = rows.order_person_status;
        row["prioritas"] = rows.prioritas;

        data.push(row);
      }

      return data;
    } else {
      //cari peserta prestasi
      const peserta_prestasi = await Peserta.query()
        .where("jurusan_id_1", jurusan_id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("prestasi_status", true)
        .where("kelulusan_pil_1_status", true)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      //binding data
      const data = [];

      let num = 0;

      for (let i in peserta_prestasi.rows) {
        const rows = peserta_prestasi.rows[i];
        const pil1 = await ProgramKeahlian.find(jurusan_id);

        num = num + 1;

        const row = {};
        row["id"] = rows.id;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = pil1.singkat;
        //area nilai

        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["na"] = rows.nilai_akhir;
        row["status"] =
          rows.jurusan_id_1 == jurusan_id
            ? rows.kelulusan_pil_1_status
              ? "L"
              : "TL"
            : rows.kelulusan_pil_2_status
            ? "L"
            : "TL";
        row["order_person_status"] = rows.order_person_status;
        row["prioritas"] = rows.prioritas;

        data.push(row);
      }

      //binding peserta afirmasi
      const peserta_afirmasi = await Peserta.query()
        .where("jurusan_id_1", jurusan_id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("prestasi_status", false)
        .where("afirmasi_status", true)
        .where("kelulusan_pil_1_status", true)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      for (let i in peserta_afirmasi.rows) {
        const rows = peserta_afirmasi.rows[i];
        const pil1 = await ProgramKeahlian.find(jurusan_id);

        num = num + 1;

        const row = {};
        row["id"] = rows.id;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = pil1.singkat;
        //area nilai

        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["na"] = rows.nilai_akhir;
        row["status"] =
          rows.jurusan_id_1 == jurusan_id
            ? rows.kelulusan_pil_1_status
              ? "L"
              : "TL"
            : rows.kelulusan_pil_2_status
            ? "L"
            : "TL";
        row["order_person_status"] = rows.order_person_status;
        row["prioritas"] = rows.prioritas;

        data.push(row);
      }

      //binding peserta umum
      const peserta_umum = await Peserta.query()
        .where("jurusan_id_1", jurusan_id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("prestasi_status", false)
        .where("afirmasi_status", false)
        .where("kelulusan_pil_1_status", true)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      for (let i in peserta_umum.rows) {
        const rows = peserta_umum.rows[i];
        const pil1 = await ProgramKeahlian.find(jurusan_id);

        num = num + 1;

        const row = {};
        row["id"] = rows.id;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = pil1.singkat;
        //area nilai

        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["na"] = rows.nilai_akhir;
        row["status"] =
          rows.jurusan_id_1 == jurusan_id
            ? rows.kelulusan_pil_1_status
              ? "L"
              : "TL"
            : rows.kelulusan_pil_2_status
            ? "L"
            : "TL";
        row["order_person_status"] = rows.order_person_status;
        row["prioritas"] = rows.prioritas;

        data.push(row);
      }

      //peserta pilihan 2
      const peserta_pil2 = await Peserta.query()
        .where("jurusan_id_2", jurusan_id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("kelulusan_pil_1_status", false)
        .where("kelulusan_pil_2_status", true)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      for (let i in peserta_pil2.rows) {
        const rows = peserta_pil2.rows[i];
        const pil1 = await ProgramKeahlian.find(jurusan_id);

        num = num + 1;

        const row = {};
        row["id"] = rows.id;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = pil1.singkat + "- PIL 2";
        //area nilai

        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["na"] = rows.nilai_akhir;
        row["status"] =
          rows.jurusan_id_1 == jurusan_id
            ? rows.kelulusan_pil_1_status
              ? "L"
              : "TL"
            : rows.kelulusan_pil_2_status
            ? "L"
            : "TL";
        row["order_person_status"] = rows.order_person_status;
        row["prioritas"] = rows.prioritas;

        data.push(row);
      }

      //bidingdata tidak lulus
      const peserta_tl = await Peserta.query()
        .where("jurusan_id_1", jurusan_id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("kelulusan_pil_1_status", false)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      for (let i in peserta_tl.rows) {
        const rows = peserta_tl.rows[i];
        const pil1 = await ProgramKeahlian.find(jurusan_id);

        num = num + 1;

        const row = {};
        row["id"] = rows.id;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = pil1.singkat;
        //area nilai

        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["na"] = rows.nilai_akhir;
        row["status"] =
          rows.jurusan_id_1 == jurusan_id
            ? rows.kelulusan_pil_1_status
              ? "L"
              : "TL"
            : rows.kelulusan_pil_2_status
            ? "L"
            : "TL";
        row["order_person_status"] = rows.order_person_status;
        row["prioritas"] = rows.prioritas;

        data.push(row);
      }

      //binding pilihan 2 tidak lulus
      const peserta_pil2_tl = await Peserta.query()
        .where("jurusan_id_2", jurusan_id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("kelulusan_pil_1_status", false)
        .where("kelulusan_pil_2_status", false)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      for (let i in peserta_pil2_tl.rows) {
        const rows = peserta_pil2_tl.rows[i];
        const pil1 = await ProgramKeahlian.find(jurusan_id);

        num = num + 1;

        const row = {};
        row["id"] = rows.id;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = pil1.singkat + "- PIL 2";
        //area nilai

        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["na"] = rows.nilai_akhir;
        row["status"] =
          rows.jurusan_id_1 == jurusan_id
            ? rows.kelulusan_pil_1_status
              ? "L"
              : "TL"
            : rows.kelulusan_pil_2_status
            ? "L"
            : "TL";
        row["order_person_status"] = rows.order_person_status;
        row["prioritas"] = rows.prioritas;
        data.push(row);
      }

      return data;
    }
  }

  /**
   * Render a form to be used for creating a new olahnilai.
   * GET olahnilais/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new olahnilai.
   * POST olahnilais
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {}

  /**
   * Display a single olahnilai.
   * GET olahnilais/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params;

    const peserta = await Peserta.find(id);
    const jurusan = await ProgramKeahlian.find(peserta.jurusan_id_1);

    const data = {};
    data["id"] = peserta.id;
    data["nisn"] = peserta.nisn;
    var nama = peserta.nama;
    data["nama"] = nama.toUpperCase();

    data["jenis_kelamin"] = peserta.jenis_kelamin;
    data["asal"] = peserta.nama_sekolah_asal;
    data["prestasi_skor"] = peserta.prestasi_skor;
    data["nilai_rapor"] = peserta.nilai_rapor;
    data["nilai_teori"] = peserta.nilai_teori;
    data["nilai_wawancara"] = peserta.nilai_wawancara;
    data["nilai_akhir"] =
      Number(peserta.nilai_rapor) +
      Number(peserta.nilai_teori) +
      Number(peserta.nilai_wawancara);
    data["order_person_status"] = peserta.order_person_status;
    data["order_person_name"] = peserta.order_person_name;
    data["order_person_date"] = peserta.order_person_date;

    return data;
  }

  /**
   * Render a form to update an existing olahnilai.
   * GET olahnilais/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update olahnilai details.
   * PUT or PATCH olahnilais/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const { id } = params;

    const {
      nilai_rapor,
      nilai_teori,
      nilai_wawancara,
      nilai_akhir,
      order_person_status,
      order_person_name,
      prestasi_skor,
    } = request.all();

    const date = new Date();
    const currdate = dateFormat(date.getTime(), "yyyy-mm-dd");

    try {
      const peserta = await Peserta.find(id);
      peserta.prestasi_skor = prestasi_skor;
      peserta.prestasi_status = peserta.status
        ? prestasi_skor == 0 || prestasi_skor == "0.00"
          ? false
          : true
        : false;
      peserta.prioritas =
        prestasi_skor == 0 || prestasi_skor == "0.00" ? "" : peserta.prioritas;
      peserta.nilai_rapor = nilai_rapor;
      peserta.nilai_teori = nilai_teori;
      peserta.nilai_wawancara = nilai_wawancara;
      peserta.order_person_status = order_person_status;
      peserta.order_person_name = order_person_name;
      peserta.order_person_date = currdate;

      await peserta.save();

      //update jadwal ujian absen
      const jadwalujianabsen = await JadwalUjianAbsen.findBy("peserta_id", id);
      jadwalujianabsen.nilai = nilai_teori;
      jadwalujianabsen.selesai = true;
      await jadwalujianabsen.save();

      return response.json({
        status: true,
        message: "Ubah data berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  /**
   * Delete a olahnilai with id.
   * DELETE olahnilais/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}

  async jurusan({ request, response }) {
    const jurusan = await ProgramKeahlian.query().orderBy("id", "asc").fetch();

    const profilsekolah = await ProfilSekolah.query().first();
    const datas = [];

    for (let i in jurusan.rows) {
      const rows = jurusan.rows[i];
      const jmlpeserta = await Peserta.query()
        .where("jurusan_id_1", rows.id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .getCount();
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["name"] = rows.name;
      row["pagu"] = rows.pagu;
      row["jumlah"] = jmlpeserta;

      datas.push(row);
    }

    return datas;
  }

  async grade({ request, response }) {
    const { id } = request.all();

    try {
      //reset status lulus per jurusan
      await Peserta.query()
        .where("jurusan_id_1", id)
        .update({ kelulusan_pil_1_status: false });

      //Profil Sekolah
      const profilsekolah = await ProfilSekolah.query().first();

      //cari persentasi rapor
      const params_rapor = await ParamNilai.query()
        .where("kode", "RPT")
        .first();
      const prosentase_rapor = Number(params_rapor.prosentase);

      //cari prosentse nilai teori
      const params_nilaiteori = await ParamNilai.query()
        .where("kode", "NTR")
        .first();
      const prosentase_nilai_teori = Number(params_nilaiteori.prosentase);

      //cari prosentase nilai wawancara
      const param_nilaiwawancara = await ParamNilai.query()
        .where("kode", "NWC")
        .first();
      const prosentase_nilai_wawancara = Number(
        param_nilaiwawancara ? param_nilaiwawancara.prosentase : 100
      );

      //squesial hitung nilai akhir
      const peserta = await Peserta.query()
        .where("jurusan_id_1", id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .orderBy("id", "asc")
        .fetch();

      for (let i in peserta.rows) {
        const rows = peserta.rows[i];
        const nilai_prestasi = Number(rows.prestasi_skor);
        const nilai_rapor = Number(rows.nilai_rapor);
        const nilai_teori = Number(rows.nilai_teori);
        const nilai_wawancara = Number(rows.nilai_wawancara);

        if (rows.prestasi_status) {
          //load paramete
          const param_bobot_nilai_umum = await ParamNilai.query()
            .where("kode", "UM")
            .first();
          const param_bobot_nilai_prestasi = await ParamNilai.query()
            .where("kode", "PRT")
            .first();

          const prosentase_naum = Number(param_bobot_nilai_umum.prosentase);
          const prosentase_napr = Number(param_bobot_nilai_prestasi.prosentase);

          const nilai_akhir_umum =
            (nilai_rapor * prosentase_rapor) / 100 +
            (nilai_teori * prosentase_nilai_teori) / 100 +
            (nilai_wawancara * prosentase_nilai_wawancara) / 100;

          // const nilai_akhir_prestasi =
          //   (rows.prestasi_skor * prosentase_napr) / 100 +
          //   (nilai_akhir_umum * prosentase_naum) / 100;

          //update nilai prestasi
          // const nilai_akhir_prestasi =
          //   (rows.prestasi_skor * 90) / 100 + (nilai_akhir_umum * 50) / 100;

          const nilai_akhir_prestasi =
            Number(rows.prestasi_skor) + nilai_akhir_umum;

          const nilai_akhir = nilai_akhir_prestasi;

          //simpan ke database
          const model = await Peserta.find(rows.id);
          model.nilai_akhir_umum = nilai_akhir_umum;
          model.nilai_akhir_prestasi = nilai_akhir_prestasi;
          model.prioritas = "PRESTASI";
          model.nilai_akhir = nilai_akhir;
          await model.save();
        } else {
          const nilai_akhir =
            (nilai_rapor * prosentase_rapor) / 100 +
            (nilai_teori * prosentase_nilai_teori) / 100 +
            (nilai_wawancara * prosentase_nilai_wawancara) / 100;
          //update nilai akhir
          const model = await Peserta.find(rows.id);
          model.nilai_akhir = nilai_akhir;
          await model.save();
        }
      }

      /**
       * Bagiang Filter data prestasi
       */

      //Cari Pagu jurusan
      const jurusan = await ProgramKeahlian.find(id);
      const pagu = Number(jurusan.pagu);

      //cari pagu prestasi
      const param_prestasi = await ParamNilai.query()
        .where("kode", "PRT")
        .first();
      const pagu_prestasi = Math.ceil(
        (pagu * Number(param_prestasi.prosentase)) / 100
      );

      // //filter data peserta berprestasi
      // const peserta_prestasi = await Peserta.query()
      //   .where("jurusan_id_1", id)
      //   .whereIn("verifikasi_status", profilsekolah.pesertas)
      //   .where("prestasi_status", true)
      //   .orderBy("nilai_akhir", "desc")
      //   .fetch();

      // let jml_prestasi = 0;
      // let temp_prestasi = 0;
      // for (let i in peserta_prestasi.rows) {
      //   const rows = peserta_prestasi.rows[i];

      //   const nilai_prestasi = Number(rows.prestasi_skor);
      //   const nilai_rapor = Number(rows.nilai_rapor);
      //   const nilai_teori = Number(rows.nilai_teori);
      //   const nilai_wawancara = Number(rows.nilai_wawancara);

      //   temp_prestasi = temp_prestasi + 1;
      //   if (temp_prestasi <= pagu_prestasi) {
      //     //update syayus lulus
      //     const model = await Peserta.find(rows.id);
      //     model.kelulusan_pil_1_status = false;
      //     model.prioritas = "PRESTASI";
      //     await model.save();
      //     jml_prestasi = jml_prestasi + 1;
      //   } else {
      //     const nilai_akhir =
      //       (nilai_rapor * prosentase_rapor) / 100 +
      //       (nilai_teori * prosentase_nilai_teori) / 100 +
      //       (nilai_wawancara * prosentase_nilai_wawancara) / 100;

      //     const model = await Peserta.find(rows.id);

      //     model.kelulusan_pil_1_status = false;
      //     model.prioritas = "Prestasi";
      //     model.prestasi_status = false;
      //     model.nilai_akhir = nilai_akhir;

      //     await model.save();
      //   }
      // }

      /**
       * Bagian Afirmasi
       */

      //Cari Pagu Afirmasi
      const param_afirmasi = await ParamNilai.query()
        .where("kode", "AFR")
        .first();
      const pagu_afirmasi = Math.ceil(
        (pagu * Number(param_afirmasi.prosentase)) / 100
      );

      //filter peserta afirmasi
      const peserta_afirmasi =
        pagu_afirmasi == 0
          ? []
          : await Peserta.query()
              .where("jurusan_id_1", id)
              .whereIn("verifikasi_status", profilsekolah.pesertas)
              .where("afirmasi_status", true)
              .where("kelulusan_pil_1_status", false)
              .orderBy("nilai_akhir", "desc")
              .fetch();

      let jml_afirmasi = 0;
      let temp_afirmasi = 0;

      for (let i in peserta_afirmasi.rows) {
        const rows = await peserta_afirmasi.rows[i];

        temp_afirmasi = temp_afirmasi + 1;
        if (temp_afirmasi <= pagu_afirmasi) {
          const model = await Peserta.find(rows.id);
          model.kelulusan_pil_1_status = true;
          model.prioritas = "AFIRMASI";
          await model.save();
          jml_afirmasi = jml_afirmasi + 1;
        }
      }

      /**
       * Bagian Jalur Umum
       */

      //cari jml sisa
      // let jml_sisa =
      //   pagu_prestasi - jml_prestasi + (pagu_afirmasi - jml_afirmasi);

      //cari prosentase jalur umum
      const param_umum = await ParamNilai.query().where("kode", "UM").first();

      const pagu_umum =
        Number(pagu) -
        // Number(pagu_prestasi) -
        Number(pagu_afirmasi);
      // Number(jml_sisa);

      const peserta_umum = await Peserta.query()
        .where("jurusan_id_1", id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("kelulusan_pil_1_status", false)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      let jml_umum = 0;
      let temp_umum = 0;

      for (let i in peserta_umum.rows) {
        const rows = peserta_umum.rows[i];

        temp_umum = temp_umum + 1;

        if (temp_umum <= pagu_umum) {
          const model = await Peserta.find(rows.id);
          model.kelulusan_pil_1_status = true;
          model.prioritas = model.prestasi_status ? "PRESTASI" : "";
          await model.save();
          jml_umum = jml_umum + 1;
        }
      }

      return response.json({
        status: true,
        message: "Proses generate pasing grade berhasil...!",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  async grade2({ request, response }) {
    const { id } = request.all();

    try {
      //reset status lulus per jurusan
      await Peserta.query()
        .where("jurusan_id_2", id)
        .where("kelulusan_pil_1_status", false)
        .update({ kelulusan_pil_2_status: false });

      //Profil Sekolah
      const profilsekolah = await ProfilSekolah.query().first();

      //cari persentasi rapor
      const params_rapor = await ParamNilai.query()
        .where("kode", "RPT")
        .first();
      const prosentase_rapor = Number(params_rapor.prosentase);

      //cari prosentse nilai teori
      const params_nilaiteori = await ParamNilai.query()
        .where("kode", "NTR")
        .first();
      const prosentase_nilai_teori = Number(params_nilaiteori.prosentase);

      //cari prosentase nilai wawancara
      const param_nilaiwawancara = await ParamNilai.query()
        .where("kode", "NWC")
        .first();
      const prosentase_nilai_wawancara = Number(
        param_nilaiwawancara ? param_nilaiwawancara.prosentase : 100
      );

      //hitung pagu jurusan
      //Cari Pagu jurusan
      const jurusan = await ProgramKeahlian.find(id);
      const pagu = Number(jurusan.pagu);

      //hitung pagu sisa
      const jmljurusan1 = await Peserta.query()
        .where("jurusan_id_1", id)
        .where("kelulusan_pil_1_status", true)
        .getCount();
      const pagu_sisa = pagu - Number(jmljurusan1);

      //squesial hitung nilai akhir
      const peserta = await Peserta.query()
        .where("jurusan_id_2", id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("kelulusan_pil_1_status", false)
        .orderBy("id", "asc")
        .fetch();

      for (let i in peserta.rows) {
        const rows = peserta.rows[i];

        const nilai_rapor = peserta.nilai_rapor;
        const nilai_teori = peserta.nilai_teori;
        const nilai_wawancara = peserta.nilai_wawancara;
        const nilai_akhir =
          (nilai_rapor * prosentase_rapor) / 100 +
          (nilai_teori * prosentase_nilai_teori) / 100 +
          (nilai_wawancara * prosentase_nilai_wawancara) / 100;

        //update nilai akhir
        const model = await Peserta.find(rows.id);
        model.nilai_akhir = nilai_akhir;
        await model.save();
      }

      const peserta_umum = await Peserta.query()
        .where("jurusan_id_2", id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("kelulusan_pil_1_status", false)
        .where("kelulusan_pil_2_status", false)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      let jml_umum = 0;
      let temp_umum = 0;

      for (let i in peserta_umum.rows) {
        const rows = peserta_umum.rows[i];

        temp_umum = temp_umum + 1;
        if (temp_umum <= pagu_sisa) {
          const model = await Peserta.find(rows.id);
          model.kelulusan_pil_2_status = true;
          model.prioritas = "LULUS PIL 2";
          await model.save();
          jml_umum = jml_umum + 1;
        }
      }

      return response.json({
        status: true,
        message: "Proses passing grade 2 berhasil dibuat",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  async exports({ request, response }) {
    const { id } = request.all();

    const jurusan = await ProgramKeahlian.find(id);
    const jmlpagu = jurusan.pagu;
    const profilsekolah = await ProfilSekolah.query().first();

    const jmlpeserta = await Peserta.query()
      .where("jurusan_id_1", id)
      .whereIn("verifikasi_status", profilsekolah.pesertas)
      .getCount();

    if (Number(jmlpeserta) >= Number(jmlpagu)) {
      const peserta = await Peserta.query()
        .where("jurusan_id_1", id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .orderBy("kelulusan_pil_1_status", "desc")
        .orderBy("nilai_akhir", "desc")
        .orderBy("prioritas", "desc")
        .fetch();

      const datas = [];
      let num = 0;

      for (let i in peserta.rows) {
        const rows = peserta.rows[i];
        const programkeahlian1 = await ProgramKeahlian.find(rows.jurusan_id_1);
        const row = {};

        num = num + 1;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = programkeahlian1.singkat;
        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["naum"] = rows.nilai_akhir_umum;
        row["napr"] = rows.nilai_akhir_prestasi;
        row["na"] = rows.nilai_akhir;
        row["status"] = rows.kelulusan_pil_1_status ? "L" : "TL";
        row["order_person_status"] = rows.order_person_status ? "*" : "";
        row["jalur"] = rows.prioritas;

        datas.push(row);
      }
      return datas;
    } else {
      //peserta lulus
      const peserta = await Peserta.query()
        .where("jurusan_id_1", id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("kelulusan_pil_1_status", true)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      const datas = [];
      let num = 0;

      for (let i in peserta.rows) {
        const rows = peserta.rows[i];
        const programkeahlian1 = await ProgramKeahlian.find(rows.jurusan_id_1);
        const row = {};

        num = num + 1;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = programkeahlian1.singkat;
        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["naum"] = rows.nilai_akhir_umum;
        row["napr"] = rows.nilai_akhir_prestasi;
        row["na"] = rows.nilai_akhir;
        row["status"] = rows.kelulusan_pil_1_status ? "L" : "TL";
        row["order_person_status"] = rows.order_person_status ? "*" : "";
        row["jalur"] = rows.prioritas;

        datas.push(row);
      }

      //peserta lulusan pilhan ke 2
      //peserta lulus
      const peserta2 = await Peserta.query()
        .where("jurusan_id_2", id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("kelulusan_pil_1_status", false)
        .where("kelulusan_pil_2_status", true)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      for (let i in peserta2.rows) {
        const rows = peserta2.rows[i];
        const programkeahlian1 = await ProgramKeahlian.find(rows.jurusan_id_2);
        const row = {};

        num = num + 1;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = programkeahlian1.singkat + " (PIL 2)";
        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["naum"] = rows.nilai_akhir_umum;
        row["napr"] = rows.nilai_akhir_prestasi;
        row["na"] = rows.nilai_akhir;
        row["status"] = rows.kelulusan_pil_2_status ? "L" : "TL";
        row["order_person_status"] = rows.order_person_status ? "*" : "";
        row["jalur"] = rows.prioritas;

        datas.push(row);
      }

      //peserta tidak lulus

      //peserta lulus
      const peserta3 = await Peserta.query()
        .where("jurusan_id_1", id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("kelulusan_pil_1_status", false)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      for (let i in peserta3.rows) {
        const rows = peserta3.rows[i];
        const programkeahlian1 = await ProgramKeahlian.find(rows.jurusan_id_1);
        const row = {};

        num = num + 1;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = programkeahlian1.singkat;
        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["naum"] = rows.nilai_akhir_umum;
        row["napr"] = rows.nilai_akhir_prestasi;
        row["na"] = rows.nilai_akhir;
        row["status"] = rows.kelulusan_pil_1_status ? "L" : "TL";
        row["order_person_status"] = rows.order_person_status ? "*" : "";
        row["jalur"] = rows.prioritas;

        datas.push(row);
      }

      //tidka lulus pilihan 2
      const peserta4 = await Peserta.query()
        .where("jurusan_id_2", id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("kelulusan_pil_1_status", false)
        .where("kelulusan_pil_2_status", false)
        .orderBy("nilai_akhir", "desc")
        .fetch();

      for (let i in peserta4.rows) {
        const rows = peserta4.rows[i];
        const programkeahlian1 = await ProgramKeahlian.find(rows.jurusan_id_2);
        const row = {};

        num = num + 1;
        row["num"] = num;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        var nama = rows.nama;
        row["nama"] = nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = programkeahlian1.singkat + " (PIL 2)";
        row["np"] = rows.prestasi_skor;
        row["nr"] = rows.nilai_rapor;
        row["nt"] = rows.nilai_teori;
        row["nw"] = rows.nilai_wawancara;
        row["naum"] = rows.nilai_akhir_umum;
        row["napr"] = rows.nilai_akhir_prestasi;
        row["na"] = rows.nilai_akhir;
        row["status"] = rows.kelulusan_pil_1_status ? "L" : "TL";
        row["order_person_status"] = rows.order_person_status ? "*" : "";
        row["order_person_name"] = rows.order_person_name;
        row["jalur"] = rows.prioritas;

        datas.push(row);
      }

      return datas;
    }
  }

  async sendpublicmessage({ request, response, assert }) {
    const { id } = request.all();

    return response.json({
      status: false,
      message: "Sementara di matikan pada sistem ini",
    });

    try {
      const profilsekolah = await ProfilSekolah.query().first();

      const peserta = await Peserta.query()
        .where("jurusan_id_1", id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .orWhere("jurusan_id_2", id)
        .whereIn("verifikasi_status", profilsekolah.pesertas)
        .where("kelulusan_pil_1_status", false)
        .orderBy("id", "asc")
        .fetch();

      let waktu = 0;

      for (let i in peserta.rows) {
        const rows = peserta.rows[i];
        waktu = waktu + 10;
        if (rows.kelulusan_pil_1_status) {
          let job;
          job = new SendPengumuman({
            id: rows.id,
            pesan: "DINYATAKAN DITERIMA DI PILIHAN 1",
          });

          Queue.dispatch(job, waktu + " seconds from now");
        } else {
          if (rows.kelulusan_pil_2_status) {
            let job;
            job = new SendPengumuman({
              id: rows.id,
              pesan: "DINYATAKAN DITERIMA DI PILIHAN 2",
            });

            Queue.dispatch(job, waktu + " seconds from now");
          } else {
            let job;
            job = new SendPengumuman({
              id: rows.id,
              pesan: "DINYATAKAN BELUM DITERIMA",
            });

            Queue.dispatch(job, waktu + " seconds from now");
          }
        }
      }

      return response.json({
        status: true,
        message: "Proses kirim pesan berhasil ",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  async sendprivatemessage({ request, response }) {
    const { id } = await request.all();

    return response.json({
      status: false,
      message: "Sementara service ini dimatikan",
    });

    try {
      const profilsekolah = await ProfilSekolah.query().first();

      const peserta = await Peserta.find(id);

      if (peserta.kelulusan_pil_1_status) {
        //send to queue

        let job;
        job = new SendPengumuman({
          id: id,
          pesan: "DINYATAKAN DITERIMA DI PILIHAN 1",
        });

        Queue.dispatch(job, "5 seconds from now");

        return response.json({
          status: true,
          message: "Proses kirim pesan berhasil ",
        });
      } else {
        if (peserta.kelulusan_pil_2_status) {
          let job;
          job = new SendPengumuman({
            id: id,
            pesan: "DINYATAKAN DITERIMA DI PILIHAN 2",
          });

          Queue.dispatch(job, "5 seconds from now");

          return response.json({
            status: true,
            message: "Proses kirim pesan berhasil ",
          });
        } else {
          let job;
          job = new SendPengumuman({
            id: id,
            pesan: "DINYATAKAN BELUM DITERIMA",
          });

          Queue.dispatch(job, "5 seconds from now");

          return response.json({
            status: true,
            message: "Proses kirim pesan berhasil ",
          });
        }
      }
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  async manualgrade({ request, response }) {
    const { jurusan_id, id } = request.all();

    try {
      const jurusan = await ProgramKeahlian.find(jurusan_id);
      const temppeserta = await Peserta.find(id);

      if (temppeserta.jurusan_id_1 == jurusan.id) {
        if (temppeserta.kelulusan_pil_1_status) {
          const peserta = await Peserta.find(id);
          peserta.kelulusan_pil_1_status = false;
          await peserta.save();
          return response.json({
            status: true,
            message: "Proses manual grade berhasil.. 1!",
          });
        } else {
          const peserta = await Peserta.find(id);
          peserta.kelulusan_pil_1_status = true;
          await peserta.save();
          return response.json({
            status: true,
            message: "Proses manual grade berhasil.. 2!",
          });
        }
      } else {
        if (temppeserta.kelulusan_pil_2_status) {
          const peserta = await Peserta.find(id);
          peserta.kelulusan_pil_2_status = false;
          await peserta.save();
          return response.json({
            status: true,
            message: "Proses manual grade berhasil.. 3!",
          });
        } else {
          const peserta = await Peserta.find(id);
          peserta.kelulusan_pil_2_status = true;
          await peserta.save();

          return response.json({
            status: true,
            message: "Proses manual grade berhasil.. 4!",
          });
        }
      }
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps terjadi kesalahan" + error,
      });
    }
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}

module.exports = OlahNilaiController;
