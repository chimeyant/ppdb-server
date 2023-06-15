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
const Pesan = use("App/Models/Pesan");
const Province = use("App/Models/Province");
const Regency = use("App/Models/Regency");
const District = use("App/Models/District");
const Village = use("App/Models/Village");
const ProfilSekolah = use("App/Models/ProfilSekolah");
const got = use("got");
const FormData = use("form-data");
var dateFormat = require("dateformat");
const Axios = use("axios");

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
  async index({ request, response, view, auth }) {
    const user = await auth.user;
    if (user.authent == "administrator") {
      const peserta = await Peserta.query()
        .whereIn("verifikasi_status", [1, 2, 3])
        .orderBy("tanggal_register", "asc")
        .fetch();

      const datas = [];

      for (let i in peserta.rows) {
        const rows = peserta.rows[i];
        const programkeahlian1 = await ProgramKeahlian.find(rows.jurusan_id_1);
        const row = {};
        row["id"] = rows.id;
        row["num"] = i++ + 1;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        row["nama"] = rows.nama;
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = programkeahlian1.singkat;
        row["status"] = rows.verifikasi_status;
        datas.push(row);
      }

      return datas;
    } else if (user.authent == "supervisor") {
      const peserta = await Peserta.query()
        .whereIn("verifikasi_status", [1, 2, 3])
        .orderBy("tanggal_register", "asc")
        .fetch();

      const datas = [];

      for (let i in peserta.rows) {
        const rows = peserta.rows[i];
        const programkeahlian1 = await ProgramKeahlian.find(rows.jurusan_id_1);
        const row = {};
        row["id"] = rows.id;
        row["num"] = i++ + 1;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        row["nama"] = rows.nama;
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = programkeahlian1.singkat;
        row["status"] = rows.verifikasi_status;
        datas.push(row);
      }

      return datas;
    } else {
      const peserta = await Peserta.query()
        .where("jurusan_id_1", user.jurusan_id)
        .whereIn("verifikasi_status", [1, 2, 3])
        .orderBy("tanggal_register", "asc")
        .fetch();

      const datas = [];

      for (let i in peserta.rows) {
        const rows = peserta.rows[i];
        const programkeahlian1 = await ProgramKeahlian.find(rows.jurusan_id_1);
        const row = {};
        row["id"] = rows.id;
        row["num"] = i++ + 1;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        row["nama"] = rows.nama;
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = programkeahlian1.singkat;
        row["status"] = rows.verifikasi_status;
        datas.push(row);
      }

      return datas;
    }
  }

  async verified({ request, response, auth }) {
    const user = await auth.user;
    if (user.authent == "administrator") {
      const peserta = await Peserta.query()
        .whereIn("verifikasi_status", [4, 5, 6])
        .orderBy("tanggal_register", "desc")
        .fetch();

      const datas = [];

      for (let i in peserta.rows) {
        const rows = peserta.rows[i];
        const programkeahlian1 = await ProgramKeahlian.find(rows.jurusan_id_1);
        const row = {};
        row["id"] = rows.id;
        row["num"] = i++ + 1;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        row["nama"] = rows.nama;
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = programkeahlian1.singkat;
        row["status"] = rows.verifikasi_status;
        datas.push(row);
      }

      return datas;
    } else {
      const peserta = await Peserta.query()
        .where("jurusan_id_1", user.jurusan_id)
        .whereIn("verifikasi_status", [4, 5, 6])
        .orderBy("tanggal_register", "desc")
        .fetch();

      const datas = [];

      for (let i in peserta.rows) {
        const rows = peserta.rows[i];
        const programkeahlian1 = await ProgramKeahlian.find(rows.jurusan_id_1);
        const row = {};
        row["id"] = rows.id;
        row["num"] = i++ + 1;
        row["tanggal_register"] = dateFormat(
          rows.tanggal_register,
          "dd/mm/yyyy"
        );
        row["nisn"] = rows.nisn;
        row["nama"] = rows.nama;
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["sekolah"] = rows.nama_sekolah_asal;
        row["pil1"] = programkeahlian1.singkat;
        row["status"] = rows.verifikasi_status;
        datas.push(row);
      }

      return datas;
    }
  }

  async downloadExcel({ request, response }) {
    const peserta = await Peserta.query()
      .whereIn("verifikasi_status", [1, 2, 3, 4, 5, 6])
      .orderBy("tanggal_register", "asc")
      .fetch();

    const datas = [];

    for (let i in peserta.rows) {
      const rows = peserta.rows[i];
      const pa1 = await ProgramKeahlian.find(rows.jurusan_id_1);
      const pa2 = await ProgramKeahlian.find(rows.jurusan_id_2);

      const row = {};
      row["id"] = rows.id;
      row["nomor_register"] = rows.nomor_register;
      row["nisn"] = rows.nisn;
      row["nama_lengkap"] = rows.nama;
      row["tempat_lahir"] = rows.tempat_lahir;
      row["tanggal_lahir"] = dateFormat(rows.tanggal_lahir, "dd/mm/yyyy");
      row["agama"] = rows.agama;
      row["domisili"] = rows.daerah_asal;
      row["asal_sekolah"] = rows.nama_sekolah_asal;
      row["tahun_lulus"] = rows.tahun_lulus;
      row["nomoe_kartu_keluarga"] = rows.nokk;
      row["nik"] = rows.nik;
      row["nama_ayah"] = rows.nama_ayah;
      row["nama_ibu"] = rows.nama_ibu;
      row["wa_siswa"] = rows.nomor_hp;
      row["wa_orang_tua"] = rows.telpon_rumah;

      const provinsi = await Province.find(rows.province_id);
      const regency = await Regency.find(rows.regency_id);
      const district = await District.find(rows.district_id);
      const village = await Village.find(rows.village_id);

      row["pilihan_1"] = pa1.name;
      if (pa2) {
        row["pilihan_2"] = pa2.name;
      } else {
        row["pilihan_2"] = "";
      }

      row["provinsi"] = provinsi.name;
      row["kabupaten"] = regency.name;
      row["kecamatan"] = district.name;
      row["desa"] = village.name;
      row["rt"] = rows.rt;
      row["rw"] = rows.rw;
      row["alamat"] = rows.alamat;

      row["smt_1_pai"] = rows.smt_1_pai;
      row["smt_1_pkn"] = rows.smt_1_pkn;
      row["smt_1_bindo"] = rows.smt_1_bindo;
      row["smt_1_bing"] = rows.smt_1_bing;
      row["smt_1_mtk"] = rows.smt_1_mtk;
      row["smt_1_ipa"] = rows.smt_1_ipa;
      row["smt_1_ips"] = rows.smt_1_ips;

      row["smt_2_pai"] = rows.smt_2_pai;
      row["smt_2_pkn"] = rows.smt_2_pkn;
      row["smt_2_bindo"] = rows.smt_2_bindo;
      row["smt_2_bing"] = rows.smt_2_bing;
      row["smt_2_mtk"] = rows.smt_2_mtk;
      row["smt_2_ipa"] = rows.smt_2_ipa;
      row["smt_2_ips"] = rows.smt_2_ips;

      row["smt_3_pai"] = rows.smt_3_pai;
      row["smt_3_pkn"] = rows.smt_3_pkn;
      row["smt_3_bindo"] = rows.smt_3_bindo;
      row["smt_3_bing"] = rows.smt_3_bing;
      row["smt_3_mtk"] = rows.smt_3_mtk;
      row["smt_3_ipa"] = rows.smt_3_ipa;
      row["smt_3_ips"] = rows.smt_3_ips;

      row["smt_4_pai"] = rows.smt_4_pai;
      row["smt_4_pkn"] = rows.smt_4_pkn;
      row["smt_4_bindo"] = rows.smt_4_bindo;
      row["smt_4_bing"] = rows.smt_4_bing;
      row["smt_4_mtk"] = rows.smt_4_mtk;
      row["smt_4_ipa"] = rows.smt_4_ipa;
      row["smt_4_ips"] = rows.smt_4_ips;

      row["smt_5_pai"] = rows.smt_5_pai;
      row["smt_5_pkn"] = rows.smt_5_pkn;
      row["smt_5_bindo"] = rows.smt_5_bindo;
      row["smt_5_bing"] = rows.smt_5_bing;
      row["smt_5_mtk"] = rows.smt_5_mtk;
      row["smt_5_ipa"] = rows.smt_5_ipa;
      row["smt_5_ips"] = rows.smt_5_ips;
      row["nilai_rapor"] = rows.nilai_rapor;
      row["nilai_prestasi"] = rows.prestasi_skor;

      row["status"] =
        rows.verifikasi_status == "1"
          ? "PENGAJUAN"
          : row.verifikasi_status == "2"
          ? "PERBAIKAN"
          : row.verifikasi_status == "3"
          ? "PENGAJUAN PERBAIKAN"
          : rows.verifikasi_status == "4"
          ? "BERKAS DITERIMA"
          : rows.verifikasi_status == "5"
          ? "BERKAS DITOLAK"
          : "BERKAS DICABUT";

      //

      datas.push(row);
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
  async create({ request, response, view }) {}

  /**
   * Create/save a new verifikasi.
   * POST verifikasis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {
    const {
      id,
      jurusan_id_1,
      jurusan_id_2,
      daerah_asal,
      ref_sekolah_id,
      nama_sekolah_asal,
      npsn,
      nama,
      jenis_kelamin,
      tempat_lahir,
      tanggal_lahir,
      agama,
      nisn,
      tahun_lulus,
      jenis_lulusan,
      foto,
      nik,
      nokk,
      dok_kartu_keluarga,
      dok_akte_lahir,
      dok_domisili,
      province_id,
      regency_id,
      district_id,
      village_id,
      rt,
      rw,
      alamat,
      kode_pos,
      telpon_rumah,
      nomor_hp,
      jarak_kesekolah,
      nama_ayah,
      nama_ibu,
      pekerjaan_id,
      smt_1_pai,
      smt_1_pkn,
      smt_1_bindo,
      smt_1_bing,
      smt_1_mtk,
      smt_1_ipa,
      smt_1_ips,
      smt_1_dokumen,
      smt_2_pai,
      smt_2_pkn,
      smt_2_bindo,
      smt_2_bing,
      smt_2_mtk,
      smt_2_ipa,
      smt_2_ips,
      smt_2_dokumen,
      smt_3_pai,
      smt_3_pkn,
      smt_3_bindo,
      smt_3_bing,
      smt_3_mtk,
      smt_3_ipa,
      smt_3_ips,
      smt_3_dokumen,
      smt_4_pai,
      smt_4_pkn,
      smt_4_bindo,
      smt_4_bing,
      smt_4_mtk,
      smt_4_ipa,
      smt_4_ips,
      smt_4_dokumen,
      smt_5_pai,
      smt_5_pkn,
      smt_5_bindo,
      smt_5_bing,
      smt_5_mtk,
      smt_5_ipa,
      smt_5_ips,
      smt_5_dokumen,
      dok_skl,
      prestasi_status,
      param_prestasi_id,
      prestasi_penyelenggara,
      prestasi_nama,
      prestasi_dokumen,
      afirmasi_status,
      afirmasi_jenis_bantuan,
      afirmasi_nama,
      afirmasi_nomor,
      afirmasi_dokumen,
      butawarna_status,
      tinggi_badan,
      dok_surat_keterangan_sehat,
      dok_surat_keterangan_buta_warna,
      dok_skck,
      pernyataan_status,
      pernyataan_dokumen,
      verifikasi_status,
      pesan,
    } = request.all();

    const user = await auth.user;

    const rules = {
      jurusan_id_1: "required",
      daerah_asal: "required",
      nama_sekolah_asal: "required",
      npsn: "required",
      nama: "required",
      jenis_kelamin: "required",
      tempat_lahir: "required",
      tanggal_lahir: "required",
      agama: "required",
      nisn: "required|min:10|max:10",
      tahun_lulus: "required",
      jenis_lulusan: "required",
      foto: "required",
      nik: "required",
      nokk: "required",
      dok_kartu_keluarga: "required",
      dok_akte_lahir: "required",
      province_id: "required",
      regency_id: "required",
      district_id: "required",
      village_id: "required",
      rt: "required",
      rw: "required",
      alamat: "required",
      telpon_rumah: "required",
      nomor_hp: "required",
      nama_ayah: "required",
      nama_ibu: "required",
      pekerjaan_id: "required",
      /**
       * rules semester I
       */
      smt_1_pai: "required|range:10,100|integer",
      smt_1_pkn: "required|integer|range:10,101",
      smt_1_bindo: "required|integer|range:10,101",
      smt_1_bing: "required|integer|range:10,101",
      smt_1_mtk: "required|integer|range:10,101",
      smt_1_ipa: "required|integer|range:10,101",
      smt_1_ips: "required|integer|range:10,101",
      smt_1_dokumen: "required",
      /**
       * rules semester II
       */
      smt_2_pai: "required|range:10,100|integer",
      smt_2_pkn: "required|integer|range:10,101",
      smt_2_bindo: "required|integer|range:10,101",
      smt_2_bing: "required|integer|range:10,101",
      smt_2_mtk: "required|integer|range:10,101",
      smt_2_ipa: "required|integer|range:10,101",
      smt_2_ips: "required|integer|range:10,101",
      smt_2_dokumen: "required",

      /**
       * rules semester III
       */
      smt_3_pai: "required|range:10,100|integer",
      smt_3_pkn: "required|integer|range:10,101",
      smt_3_bindo: "required|integer|range:10,101",
      smt_3_bing: "required|integer|range:10,101",
      smt_3_mtk: "required|integer|range:10,101",
      smt_3_ipa: "required|integer|range:10,101",
      smt_3_ips: "required|integer|range:10,101",
      smt_3_dokumen: "required",

      /**
       * rules semester IV
       */
      smt_4_pai: "required|range:10,100|integer",
      smt_4_pkn: "required|integer|range:10,101",
      smt_4_bindo: "required|integer|range:10,101",
      smt_4_bing: "required|integer|range:10,101",
      smt_4_mtk: "required|integer|range:10,101",
      smt_4_ipa: "required|integer|range:10,101",
      smt_4_ips: "required|integer|range:10,101",
      smt_4_dokumen: "required",

      /**
       * rules semester V
       */
      smt_5_pai: "required|range:10,100|integer",
      smt_5_pkn: "required|integer|range:10,101",
      smt_5_bindo: "required|integer|range:10,101",
      smt_5_bing: "required|integer|range:10,101",
      smt_5_mtk: "required|integer|range:10,101",
      smt_5_ipa: "required|integer|range:10,101",
      smt_5_ips: "required|integer|range:10,101",
      smt_5_dokumen: "required",

      /**
       * RuleDokumen SKL
       */
      dok_skl: "required",

      /**
       * Rules Prestasi
       */
      prestasi_dokumen: prestasi_status ? "required" : "string",

      /**
       * Rules Afirmasi
       */
      afirmasi_jenis_bantuan: afirmasi_status ? "required" : "string",
      afirmasi_dokumen: afirmasi_status ? "required" : "string",

      /**
       * Surat Keterangan Dokter
       */
      dok_surat_keterangan_sehat: "required",
      dok_surat_keterangan_buta_warna: butawarna_status ? "required" : "string",

      /**
       * Verifikasi
       */
      verifikasi_status: "required",
    };

    const messages = {
      "jurusan_id_1.required": "Pilihan Program Keahlian 1 Harus Dipilih",
      "daerah_asal.required": "Daerah Asal Harus Dipilih",
      "nama_sekolah_asal.required": "Sekolah Asal Harus Dipilih Atau Diisi",
      "npsn.required": "NPSN wajib diisi",
      "nama.required": "Nama Peserta Harus diisi",
      "jenis_kelamin.required": "Jenis Kelamin Harus Dipilih",
      "tempat_lahir.required": "Tempat Lahir Harus Diisi",
      "tanggal_lahir.required": "Tanggal Lahir Wajib Diisi",
      "agama.required": "Agama harus dipilih",
      "nisn.required": "NISN harus diisi",
      "nisn.min": "NISN tidak benar harus 10 digit",
      "nisn.max": "NISN tidak benar harus 10 digit",
      "tahun_lulus.required": "Tahun Lulus Harus Dipilih",
      "jenis_lulusan.required": "Jenis Lulusan Harus Dipilih",
      "foto.required": "Foto 3x4 anda harus diupload",
      "nik.required": "Nomor Identitas Penduduk (NIK) harus diisi",
      "nokk.required": "Nomor Kartu Keluarga harus diisi",
      "dok_kartu_keluarga.required":
        "Kartu Keluarga harus diupload dalam bentuk PDF",
      "dok_akte_lahir.required": "Akte Lahir harus diupload dalam bentuk PDF",
      "province_id.required": "Provinsi harus dipilih",
      "regency_id.required": "Kabupaten/Kota harus dipilih",
      "district_id.required": "Kecamatan harus dipilih",
      "village_id.required": "Desa/Kelurahan harus dipilih",
      "rt.required": "RT harus diisi",
      "rw.required": "RW harus diisi",
      "alamat.required": "Alamat harus diisi",
      "telpon_rumah.required": "Telepon rumah atau orang tua harus diisi",
      "nomor_hp.required": "Nomor HP yang aktif Whatsapp (WA) harus diisi",
      "nama_ayah.required": "Nama ayah harus diisi",
      "nama_ibu.required": "Nama ibu harus diisi",
      "pekerjaan_id.required": "Pekerjaan harus dipilih",
      /**
       * Pesan Salaha Semester I
       */
      "smt_1_pai.required": "Nilai PAI Semester I harus diisi",
      "smt_1_pai.range":
        "Nilai PAI Semester I terlalu kecil atau besar (60 s.d 100)",
      "smt_1_pai.integer": "Nilai PAI Semester I harus angka",
      "smt_1_pkn.required": "Nilai PKn Semester I harus diisi",
      "smt_1_pkn.integer": "Nilai Pkn Semester I  harus angka",
      "smt_1_pkn.range":
        "Nilai Pkn Semester I terlalu kecil atau besar (60 s.d 100)",
      "smt_1_bindo.required": "Nilai Bahasa Indonesia Semester I harus diisi",
      "smt_1_bindo.integer": "Nilai Bahasa Indonesia Semster I harus angka",
      "smt_1_bindo.range":
        "Nilai Bahasa Indonesia Semester I terlalu kecil atau besar (60 s.d 100)",
      "smt_1_bing.required": "Nilai Bahasa Inggris Semester I harus diisi",
      "smt_1_bing.integer": "Nilai Bahasa Inggris Semester I harus angka",
      "smt_1_bing.range":
        "Nilai Bahasa Inggris Semester I terlalu kecil atau besar (60 sd 100)",
      "smt_1_mtk.required": "Nilai Matematika Semester I harus diisi",
      "smt_1_mtk.integer": "Nilai Matematika Semester I harus angka",
      "smt_1_mtk.range":
        "Nilai Matematika Semester I terlalu kecil atau besar (60 s.d 100)",
      "smt_1_ipa.required": "Nilai IPA Semester I harus diisi",
      "smt_1_ipa.integer": "Nilai IPA Semester I harus angka",
      "smt_1_ipa.range":
        "Nilai IPA Semester I terlalu kecil atau besar (60 s.d 100",
      "smt_1_ips.required": "Nilai IPS Semester I harus diisi",
      "smt_1_ips.integer": "Nilai IPS Semester I harus angka",
      "smt_1_ips.range":
        "Nilai IPS Semester I terlalu kecil atau besar (60 s.d 100)",
      "smt_1_dokumen.required": "Rapor Semester I harus diupload",

      /**
       * Pesan Salah Semester II
       */
      "smt_2_pai.required": "Nilai PAI Semester II harus diisi",
      "smt_2_pai.range":
        "Nilai PAI Semester II terlalu kecil atau besar (60 s.d 100)",
      "smt_2_pai.integer": "Nilai PAI Semester II harus angka",
      "smt_2_pkn.required": "Nilai PKn Semester II harus diisi",
      "smt_2_pkn.integer": "Nilai Pkn Semester II  harus angka",
      "smt_2_pkn.range":
        "Nilai Pkn Semester II terlalu kecil atau besar (60 s.d 100)",
      "smt_2_bindo.required": "Nilai Bahasa Indonesia Semester II harus diisi",
      "smt_2_bindo.integer": "Nilai Bahasa Indonesia Semster II harus angka",
      "smt_2_bindo.range":
        "Nilai Bahasa Indonesia Semester II terlalu kecil atau besar (60 s.d 100)",
      "smt_2_bing.required": "Nilai Bahasa Inggris Semester II harus diisi",
      "smt_2_bing.integer": "Nilai Bahasa Inggris Semester II harus angka",
      "smt_2_bing.range":
        "Nilai Bahasa Inggris Semester II terlalu kecil atau besar (60 sd 100)",
      "smt_2_mtk.required": "Nilai Matematika Semester II harus diisi",
      "smt_2_mtk.integer": "Nilai Matematika Semester II harus angka",
      "smt_2_mtk.range":
        "Nilai Matematika Semester II terlalu kecil atau besar (60 s.d 100)",
      "smt_2_ipa.required": "Nilai IPA Semester II harus diisi",
      "smt_2_ipa.integer": "Nilai IPA Semester II harus angka",
      "smt_2_ipa.range":
        "Nilai IPA Semester II terlalu kecil atau besar (60 s.d 100",
      "smt_2_ips.required": "Nilai IPS Semester II harus diisi",
      "smt_2_ips.integer": "Nilai IPS Semester II harus angka",
      "smt_2_ips.range":
        "Nilai IPS Semester II terlalu kecil atau besar (60 s.d 100)",
      "smt_2_dokumen.required": "Rapor Semester II harus diupload",

      /**
       * Pesan Salah Semester III
       */
      "smt_3_pai.required": "Nilai PAI Semester III harus diisi",
      "smt_3_pai.range":
        "Nilai PAI Semester III terlalu kecil atau besar (60 s.d 100)",
      "smt_3_pai.integer": "Nilai PAI Semester III harus angka",
      "smt_3_pkn.required": "Nilai PKn Semester III harus diisi",
      "smt_3_pkn.integer": "Nilai Pkn Semester III  harus angka",
      "smt_3_pkn.range":
        "Nilai Pkn Semester III terlalu kecil atau besar (60 s.d 100)",
      "smt_3_bindo.required": "Nilai Bahasa Indonesia Semester III harus diisi",
      "smt_3_bindo.integer": "Nilai Bahasa Indonesia Semster III harus angka",
      "smt_3_bindo.range":
        "Nilai Bahasa Indonesia Semester III terlalu kecil atau besar (60 s.d 100)",
      "smt_3_bing.required": "Nilai Bahasa Inggris Semester III harus diisi",
      "smt_3_bing.integer": "Nilai Bahasa Inggris Semester III harus angka",
      "smt_3_bing.range":
        "Nilai Bahasa Inggris Semester III terlalu kecil atau besar (60 sd 100)",
      "smt_3_mtk.required": "Nilai Matematika Semester III harus diisi",
      "smt_3_mtk.integer": "Nilai Matematika Semester III harus angka",
      "smt_3_mtk.range":
        "Nilai Matematika Semester III terlalu kecil atau besar (60 s.d 100)",
      "smt_3_ipa.required": "Nilai IPA Semester III harus diisi",
      "smt_3_ipa.integer": "Nilai IPA Semester III harus angka",
      "smt_3_ipa.range":
        "Nilai IPA Semester III terlalu kecil atau besar (60 s.d 100",
      "smt_3_ips.required": "Nilai IPS Semester III harus diisi",
      "smt_3_ips.integer": "Nilai IPS Semester III harus angka",
      "smt_3_ips.range":
        "Nilai IPS Semester III terlalu kecil atau besar (60 s.d 100)",
      "smt_3_dokumen.required": "Rapor Semester III harus diupload",

      /**
       * Pesan Salah Semester IV
       */
      "smt_4_pai.required": "Nilai PAI Semester IV harus diisi",
      "smt_4_pai.range":
        "Nilai PAI Semester IV terlalu kecil atau besar (60 s.d 100)",
      "smt_4_pai.integer": "Nilai PAI Semester IV harus angka",
      "smt_4_pkn.required": "Nilai PKn Semester IV harus diisi",
      "smt_4_pkn.integer": "Nilai Pkn Semester IV  harus angka",
      "smt_4_pkn.range":
        "Nilai Pkn Semester IV terlalu kecil atau besar (60 s.d 100)",
      "smt_4_bindo.required": "Nilai Bahasa Indonesia Semester IV harus diisi",
      "smt_4_bindo.integer": "Nilai Bahasa Indonesia Semster IV harus angka",
      "smt_4_bindo.range":
        "Nilai Bahasa Indonesia Semester IV terlalu kecil atau besar (60 s.d 100)",
      "smt_4_bing.required": "Nilai Bahasa Inggris Semester IV harus diisi",
      "smt_4_bing.integer": "Nilai Bahasa Inggris Semester IV harus angka",
      "smt_4_bing.range":
        "Nilai Bahasa Inggris Semester IV terlalu kecil atau besar (60 sd 100)",
      "smt_4_mtk.required": "Nilai Matematika Semester IV harus diisi",
      "smt_4_mtk.integer": "Nilai Matematika Semester IV harus angka",
      "smt_4_mtk.range":
        "Nilai Matematika Semester IV terlalu kecil atau besar (60 s.d 100)",
      "smt_4_ipa.required": "Nilai IPA Semester IV harus diisi",
      "smt_4_ipa.integer": "Nilai IPA Semester IV harus angka",
      "smt_4_ipa.range":
        "Nilai IPA Semester IV terlalu kecil atau besar (60 s.d 100",
      "smt_4_ips.required": "Nilai IPS Semester IV harus diisi",
      "smt_4_ips.integer": "Nilai IPS Semester IV harus angka",
      "smt_4_ips.range":
        "Nilai IPS Semester IV terlalu kecil atau besar (60 s.d 100)",
      "smt_4_dokumen.required": "Rapor Semester IV harus diupload",

      /**
       * Pesan Salah Semester V
       */
      "smt_5_pai.required": "Nilai PAI Semester V harus diisi",
      "smt_5_pai.range":
        "Nilai PAI Semester V terlalu kecil atau besar (60 s.d 100)",
      "smt_5_pai.integer": "Nilai PAI Semester V harus angka",
      "smt_5_pkn.required": "Nilai PKn Semester V harus diisi",
      "smt_5_pkn.integer": "Nilai Pkn Semester V  harus angka",
      "smt_5_pkn.range":
        "Nilai Pkn Semester V terlalu kecil atau besar (60 s.d 100)",
      "smt_5_bindo.required": "Nilai Bahasa Indonesia Semester V harus diisi",
      "smt_5_bindo.integer": "Nilai Bahasa Indonesia Semster V harus angka",
      "smt_5_bindo.range":
        "Nilai Bahasa Indonesia Semester V terlalu kecil atau besar (60 s.d 100)",
      "smt_5_bing.required": "Nilai Bahasa Inggris Semester V harus diisi",
      "smt_5_bing.integer": "Nilai Bahasa Inggris Semester V harus angka",
      "smt_5_bing.range":
        "Nilai Bahasa Inggris Semester V terlalu kecil atau besar (60 sd 100)",
      "smt_5_mtk.required": "Nilai Matematika Semester V harus diisi",
      "smt_5_mtk.integer": "Nilai Matematika Semester V harus angka",
      "smt_5_mtk.range":
        "Nilai Matematika Semester V terlalu kecil atau besar (60 s.d 100)",
      "smt_5_ipa.required": "Nilai IPA Semester V harus diisi",
      "smt_5_ipa.integer": "Nilai IPA Semester V harus angka",
      "smt_5_ipa.range":
        "Nilai IPA Semester V terlalu kecil atau besar (60 s.d 100",
      "smt_5_ips.required": "Nilai IPS Semester V harus diisi",
      "smt_5_ips.integer": "Nilai IPS Semester V harus angka",
      "smt_5_ips.range":
        "Nilai IPS Semester V terlalu kecil atau besar (60 s.d 100)",
      "smt_5_dokumen.required": "Rapor Semester V harus diupload",

      /**
       * Erro dok skl
       */
      "dok_skl.required": "Surat Keterangan Lulus Harus diupload",

      /**
       * Error Prestasi
       */
      "prestasi_dokumen.required":
        "Sertifikat/Dokumen Prestasi harus diupload (PDF)",

      /**
       * Erros Afirmasi
       */
      "afirmasi_jenis_bantuan.required": "Jenis bantuan harus dipilih",
      "afirmasi_dokumen.required": "Dokumen/PKH/KIS/Kartu harus diupload (PDF)",

      /**
       * Error Kesehatan
       */
      "dok_surat_keterangan_sehat.required":
        "Surat Keterangan Sehat harus diupload",
      "dok_surat_keterangan_buta_warna.required":
        "Surat Keterangan Buta warna harus diupload",

      /**
       * Erro Verifikasi
       */
      "verifikasi_status.required": "Hasil Verifikasi harus dipilih",
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
      /**
       * Area Registrasi Pilih Kompetensi

      if (peserta.verifikasi_status == "4" || peserta.verifikasi_status == "5") {
        return response.json({
          status: false,
          message: "Data anda telah terkunci",
          data: peserta
        })
      }
      */

      peserta.jurusan_id_1 = jurusan_id_1;
      peserta.jurusan_id_2 = jurusan_id_2;

      /**
       * Daerah asal sekolah
       */
      peserta.daerah_asal = daerah_asal;
      peserta.ref_sekolah_id = ref_sekolah_id;
      peserta.nama_sekolah_asal = nama_sekolah_asal;
      peserta.npsn = npsn;

      /**
       * Identitas Pribadi
       */
      peserta.nama = nama;
      peserta.jenis_kelamin = jenis_kelamin;
      peserta.tempat_lahir = tempat_lahir;
      peserta.tanggal_lahir = dateFormat(tanggal_lahir, "yyyy-mm-dd");
      peserta.agama = agama;
      peserta.nisn = nisn;
      peserta.tahun_lulus = tahun_lulus;
      peserta.jenis_lulusan = jenis_lulusan;
      peserta.foto = foto;

      /**
       * Data Kependudukan Peserta
       */
      peserta.nik = nik;
      peserta.nokk = nokk;
      peserta.dok_kartu_keluarga = dok_kartu_keluarga;
      peserta.dok_akte_lahir = dok_akte_lahir;
      peserta.dok_domisili = dok_domisili;

      /**
       * Datat Alamat Peserta
       */
      peserta.province_id = province_id;
      peserta.regency_id = regency_id;
      peserta.district_id = district_id;
      peserta.village_id = village_id;
      peserta.rt = rt;
      peserta.rw = rw;
      peserta.alamat = alamat;
      peserta.kode_pos = kode_pos;
      peserta.telpon_rumah = telpon_rumah;
      peserta.nomor_hp = nomor_hp;
      peserta.jarak_kesekolah = jarak_kesekolah;

      /**
       * Data Orang Tua Siswa
       */
      peserta.nama_ayah = nama_ayah;
      peserta.nama_ibu = nama_ibu;
      peserta.pekerjaan_id = pekerjaan_id;

      /**
       * Data Semester I
       */
      peserta.smt_1_pai = smt_1_pai;
      peserta.smt_1_pkn = smt_1_pkn;
      peserta.smt_1_bindo = smt_1_bindo;
      peserta.smt_1_bing = smt_1_bing;
      peserta.smt_1_mtk = smt_1_mtk;
      peserta.smt_1_ipa = smt_1_ipa;
      peserta.smt_1_ips = smt_1_ips;
      peserta.smt_1_nr =
        (Number(smt_1_pai) +
          Number(smt_1_pkn) +
          Number(smt_1_bindo) +
          Number(smt_1_bing) +
          Number(smt_1_mtk) +
          Number(smt_1_ipa) +
          Number(smt_1_ips)) /
        7;
      peserta.smt_1_dokumen = smt_1_dokumen;

      /**
       * Data Semester II
       */
      peserta.smt_2_pai = smt_2_pai;
      peserta.smt_2_pkn = smt_2_pkn;
      peserta.smt_2_bindo = smt_2_bindo;
      peserta.smt_2_bing = smt_2_bing;
      peserta.smt_2_mtk = smt_2_mtk;
      peserta.smt_2_ipa = smt_2_ipa;
      peserta.smt_2_ips = smt_2_ips;
      peserta.smt_2_nr =
        (Number(smt_2_pai) +
          Number(smt_2_pkn) +
          Number(smt_2_bindo) +
          Number(smt_2_bing) +
          Number(smt_2_mtk) +
          Number(smt_2_ipa) +
          Number(smt_2_ips)) /
        7;
      peserta.smt_2_dokumen = smt_2_dokumen;

      /**
       * Data Semester III
       */
      peserta.smt_3_pai = smt_3_pai;
      peserta.smt_3_pkn = smt_3_pkn;
      peserta.smt_3_bindo = smt_3_bindo;
      peserta.smt_3_bing = smt_3_bing;
      peserta.smt_3_mtk = smt_3_mtk;
      peserta.smt_3_ipa = smt_3_ipa;
      peserta.smt_3_ips = smt_3_ips;
      peserta.smt_3_nr =
        (Number(smt_3_pai) +
          Number(smt_3_pkn) +
          Number(smt_3_bindo) +
          Number(smt_3_bing) +
          Number(smt_3_mtk) +
          Number(smt_3_ipa) +
          Number(smt_3_ips)) /
        7;
      peserta.smt_3_dokumen = smt_3_dokumen;

      /**
       * Data Semester IV
       */
      peserta.smt_4_pai = smt_4_pai;
      peserta.smt_4_pkn = smt_4_pkn;
      peserta.smt_4_bindo = smt_4_bindo;
      peserta.smt_4_bing = smt_4_bing;
      peserta.smt_4_mtk = smt_4_mtk;
      peserta.smt_4_ipa = smt_4_ipa;
      peserta.smt_4_ips = smt_4_ips;
      peserta.smt_4_nr =
        (Number(smt_4_pai) +
          Number(smt_4_pkn) +
          Number(smt_4_bindo) +
          Number(smt_4_bing) +
          Number(smt_4_mtk) +
          Number(smt_4_ipa) +
          Number(smt_4_ips)) /
        7;
      peserta.smt_4_dokumen = smt_4_dokumen;

      /**
       * Dokumen Semester V
       */
      peserta.smt_5_pai = smt_5_pai;
      peserta.smt_5_pkn = smt_5_pkn;
      peserta.smt_5_bindo = smt_5_bindo;
      peserta.smt_5_bing = smt_5_bing;
      peserta.smt_5_mtk = smt_5_mtk;
      peserta.smt_5_ipa = smt_5_ipa;
      peserta.smt_5_ips = smt_5_ips;
      peserta.smt_5_nr =
        (Number(smt_5_pai) +
          Number(smt_5_pkn) +
          Number(smt_5_bindo) +
          Number(smt_5_bing) +
          Number(smt_5_mtk) +
          Number(smt_5_ipa) +
          Number(smt_5_ips)) /
        7;
      peserta.smt_5_dokumen = smt_5_dokumen;
      peserta.dok_skl = dok_skl;

      /**
       * simpan data prestasi
       */
      const paramprestasi = await ParamPrestasi.find(param_prestasi_id);

      if (paramprestasi) {
        peserta.prestasi_status = prestasi_status;
        peserta.param_prestasi_id = param_prestasi_id;
        peserta.prestasi_penyelenggara = prestasi_penyelenggara;
        peserta.prestasi_nama = prestasi_nama;
        peserta.prestasi_skor = paramprestasi.skor;
        peserta.prestasi_dokumen = prestasi_dokumen;
      }

      /**
       * Area afirmasi
       */
      peserta.afirmasi_status = afirmasi_status;
      peserta.afirmasi_jenis_bantuan = afirmasi_jenis_bantuan;
      peserta.afirmasi_nama = afirmasi_nama;
      peserta.afirmasi_nomor = afirmasi_nomor;
      peserta.afirmasi_dokumen = afirmasi_dokumen;

      /**
       * Area kondisi kesehatan
       */
      peserta.butawarna_status = butawarna_status;
      peserta.tinggi_badan = tinggi_badan;
      peserta.dok_surat_keterangan_sehat = dok_surat_keterangan_sehat;
      peserta.dok_surat_keterangan_buta_warna = dok_surat_keterangan_buta_warna;
      peserta.dok_skck = dok_skck;

      /**
       * Dokumen Pernyataan
       */
      peserta.pernyataan_status = pernyataan_status;
      peserta.pernyataan_dokumen = pernyataan_dokumen;

      //Mencari nilai rata rata
      const nr_pai =
        (Number(smt_1_pai) +
          Number(smt_2_pai) +
          Number(smt_3_pai) +
          Number(smt_4_pai) +
          Number(smt_5_pai)) /
        5;
      const nr_pkn =
        (Number(smt_1_pkn) +
          Number(smt_2_pkn) +
          Number(smt_3_pkn) +
          Number(smt_4_pkn) +
          Number(smt_5_pkn)) /
        5;
      const nr_bindo =
        (Number(smt_1_bindo) +
          Number(smt_2_bindo) +
          Number(smt_3_bindo) +
          Number(smt_4_bindo) +
          Number(smt_5_bindo)) /
        5;
      const nr_bing =
        (Number(smt_1_bing) +
          Number(smt_2_bing) +
          Number(smt_3_bing) +
          Number(smt_4_bing) +
          Number(smt_5_bing)) /
        5;
      const nr_mtk =
        (Number(smt_1_mtk) +
          Number(smt_2_mtk) +
          Number(smt_3_mtk) +
          Number(smt_4_mtk) +
          Number(smt_5_mtk)) /
        5;
      const nr_ipa =
        (Number(smt_1_ipa) +
          Number(smt_2_ipa) +
          Number(smt_3_ipa) +
          Number(smt_4_ipa) +
          Number(smt_5_ipa)) /
        5;
      const nr_ips =
        (Number(smt_1_ips) +
          Number(smt_2_ips) +
          Number(smt_3_ips) +
          Number(smt_4_ips) +
          Number(smt_5_ips)) /
        5;
      const nr =
        (nr_pai + nr_pkn + nr_bindo + nr_bing + nr_mtk + nr_ipa + nr_ips) / 7;

      peserta.nr_pai = nr_pai;
      peserta.nr_pkn = nr_pkn;
      peserta.nr_bindo = nr_bindo;
      peserta.nr_bing = nr_bing;
      peserta.nr_mtk = nr_mtk;
      peserta.nr_ipa = nr_ipa;
      peserta.nr_ips = nr_ips;
      peserta.nilai_rapor = nr;

      /**
       * verifikasi status 1 : Pengajuan 2: Perbaikan 3:Berkasi Ditolak 4: Berkas Diterima
       */
      var date = new Date();
      var current_date = date.getTime();

      peserta.verifikasi_status = verifikasi_status;
      peserta.verifikasi_tanggal = dateFormat(current_date, "yyyy-mm-dd");
      peserta.verifikasi_user_id = user.id;
      peserta.verifikasi_keterangan = pesan;

      await peserta.save();

      /**
       * Simpan Ke Table Pesan
       */
      const userpeserta = await User.query()
        .where("peserta_id", peserta.id)
        .first();

      if (pesan != "" || pesan != null) {
        const pesanmodel = new Pesan();
        pesanmodel.title = "Konfirmasi Hasil Verifikasi";
        pesanmodel.body = pesan;
        pesanmodel.from_id = user.id;
        pesanmodel.to_id = userpeserta.id;
        pesanmodel.tanggal = dateFormat(current_date, "yyyy-mm-dd");
        await pesanmodel.save();
      }

      /**
       * Wa Blast
       */
      const profilsekolah = await ProfilSekolah.query().first();

      if (profilsekolah.sms) {
        let strpesan = "";
        let form = new FormData();

        let strapikey = profilsekolah.apikey;
        let strtelephone = peserta.nomor_hp;

        if (peserta.verifikasi_status == 2) {
          strpesan =
            "*INFORMASI PPDB 2022/2023* " +
            profilsekolah.nama +
            ".  Mohon Maaf  *Berkas Anda Belum Lengkap* di sistem kami *" +
            peserta.nomor_register +
            "* Atas Nama " +
            peserta.nama +
            ". " +
            pesan;
        }
        if (peserta.verifikasi_status == 4) {
          strpesan =
            "*INFORMASI PPDB 2022/2023* " +
            profilsekolah.nama +
            ".  Selamat  *Berkas Diterima* di sistem kami *" +
            peserta.nomor_register +
            "* Atas Nama " +
            peserta.nama +
            " ";
        }
        if (peserta.verifikasi_status == 5) {
          strpesan =
            "*INFORMASI PPDB 2022/2023 * " +
            profilsekolah.nama +
            " . Mohon Maaf  *Berkas Ditolak* di sistem kami *" +
            peserta.nomor_register +
            "* Atas Nama " +
            peserta.nama +
            ". " +
            pesan;
        }

        /*
        peserta.nomor_register +
          "* Atas Nama *" +
          peserta.nama +
          "*" +
          " Pesan ini tidak bisa dibalas (Mesin/Robot)";
        */

        const msg = {
          apikey: strapikey,
          nomor: strtelephone,
          pesan: strpesan,
        };

        await Axios.post("http://api.senderwa.com/api/v2/send-wa", msg);
      }

      return response.json({
        status: true,
        message: "Proses verifikasi berhasil ",
        data: peserta,
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...!, terjadi kesalahan" + error,
      });
    }
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
    const { id } = params;

    const peserta = await Peserta.find(id);

    const data = {};
    data["id"] = peserta.id;
    data["jalur_pendaftaran"] = peserta.jalur_pendaftaran;
    data["nomor_register"] = peserta.nomor_register;
    data["tanggal_register"] = peserta.tanggal_register;
    data["jurusan_id_1"] = Number(peserta.jurusan_id_1);
    data["jurusan_id_2"] = Number(peserta.jurusan_id_2);
    data["daerah_asal"] = peserta.daerah_asal;
    data["ref_sekolah_id"] = Number(peserta.ref_sekolah_id);
    data["nama_sekolah_asal"] = peserta.nama_sekolah_asal;
    data["npsn"] = peserta.npsn;
    data["nama"] = peserta.nama;
    data["jenis_kelamin"] = peserta.jenis_kelamin;
    data["tempat_lahir"] = peserta.tempat_lahir;
    data["tanggal_lahir"] = dateFormat(peserta.tanggal_lahir, "yyyy-mm-dd");
    data["agama"] = peserta.agama;
    data["nisn"] = peserta.nisn;
    data["tahun_lulus"] = Number(peserta.tahun_lulus);
    data["jenis_lulusan"] = peserta.jenis_lulusan;
    data["foto"] = peserta.foto;
    data["path"] =
      Env.get("BASE_URL") + "/api/download/peserta/" + peserta.foto;

    data["nik"] = peserta.nik;
    data["nokk"] = peserta.nokk;
    data["dok_kartu_keluarga"] = peserta.dok_kartu_keluarga;
    data["path_dok_kartu_keluarga"] =
      Env.get("BASE_URL") +
      "/api/download/peserta/" +
      peserta.dok_kartu_keluarga;
    data["dok_akte_lahir"] = peserta.dok_akte_lahir;
    data["path_dok_akte_lahir"] =
      Env.get("BASE_URL") + "/api/download/peserta/" + peserta.dok_akte_lahir;
    data["dok_domisili"] = peserta.dok_domisili;
    data["province_id"] = Number(peserta.province_id);
    data["regency_id"] = Number(peserta.regency_id);
    data["district_id"] = Number(peserta.district_id);
    data["village_id"] = peserta.village_id;
    data["rt"] = peserta.rt;
    data["rw"] = peserta.rw;
    data["alamat"] = peserta.alamat;
    data["kode_pos"] = peserta.kode_pos;
    data["telpon_rumah"] = peserta.telpon_rumah;
    data["nomor_hp"] = peserta.nomor_hp;
    data["jarak_kesekolah"] = peserta.jarak_kesekolah;
    data["nama_ayah"] = peserta.nama_ayah;
    data["nama_ibu"] = peserta.nama_ibu;
    data["pekerjaan_id"] = Number(peserta.pekerjaan_id);
    data["smt_1_pai"] = Number(peserta.smt_1_pai);
    data["smt_1_pkn"] = Number(peserta.smt_1_pkn);
    data["smt_1_bindo"] = Number(peserta.smt_1_bindo);
    data["smt_1_bing"] = Number(peserta.smt_1_bing);
    data["smt_1_mtk"] = Number(peserta.smt_1_mtk);
    data["smt_1_ipa"] = Number(peserta.smt_1_ipa);
    data["smt_1_ips"] = Number(peserta.smt_1_ips);
    data["smt_1_nr"] = Number(peserta.smt_1_nr);
    data["smt_1_dokumen"] = peserta.smt_1_dokumen;
    data["path_smt_1_dokumen"] =
      Env.get("BASE_URL") + "/api/download/peserta/" + peserta.smt_1_dokumen;

    data["smt_2_pai"] = Number(peserta.smt_2_pai);
    data["smt_2_pkn"] = Number(peserta.smt_2_pkn);
    data["smt_2_bindo"] = Number(peserta.smt_2_bindo);
    data["smt_2_bing"] = Number(peserta.smt_2_bing);
    data["smt_2_mtk"] = Number(peserta.smt_2_mtk);
    data["smt_2_ipa"] = Number(peserta.smt_2_ipa);
    data["smt_2_ips"] = Number(peserta.smt_2_ips);
    data["smt_2_nr"] = Number(peserta.smt_2_nr);
    data["smt_2_dokumen"] = peserta.smt_2_dokumen;
    data["path_smt_2_dokumen"] =
      Env.get("BASE_URL") + "/api/download/peserta/" + peserta.smt_2_dokumen;

    data["smt_3_pai"] = Number(peserta.smt_3_pai);
    data["smt_3_pkn"] = Number(peserta.smt_3_pkn);
    data["smt_3_bindo"] = Number(peserta.smt_3_bindo);
    data["smt_3_bing"] = Number(peserta.smt_3_bing);
    data["smt_3_mtk"] = Number(peserta.smt_3_mtk);
    data["smt_3_ipa"] = Number(peserta.smt_3_ipa);
    data["smt_3_ips"] = Number(peserta.smt_3_ips);
    data["smt_3_nr"] = Number(peserta.smt_3_nr);
    data["smt_3_dokumen"] = peserta.smt_3_dokumen;
    data["path_smt_3_dokumen"] =
      Env.get("BASE_URL") + "/api/download/peserta/" + peserta.smt_3_dokumen;

    data["smt_4_pai"] = Number(peserta.smt_4_pai);
    data["smt_4_pkn"] = Number(peserta.smt_4_pkn);
    data["smt_4_bindo"] = Number(peserta.smt_4_bindo);
    data["smt_4_bing"] = Number(peserta.smt_4_bing);
    data["smt_4_mtk"] = Number(peserta.smt_4_mtk);
    data["smt_4_ipa"] = Number(peserta.smt_4_ipa);
    data["smt_4_ips"] = Number(peserta.smt_4_ips);
    data["smt_4_nr"] = Number(peserta.smt_4_nr);
    data["smt_4_dokumen"] = peserta.smt_4_dokumen;
    data["path_smt_4_dokumen"] =
      Env.get("BASE_URL") + "/api/download/peserta/" + peserta.smt_4_dokumen;

    data["smt_5_pai"] = Number(peserta.smt_5_pai);
    data["smt_5_pkn"] = Number(peserta.smt_5_pkn);
    data["smt_5_bindo"] = Number(peserta.smt_5_bindo);
    data["smt_5_bing"] = Number(peserta.smt_5_bing);
    data["smt_5_mtk"] = Number(peserta.smt_5_mtk);
    data["smt_5_ipa"] = Number(peserta.smt_5_ipa);
    data["smt_5_ips"] = Number(peserta.smt_5_ips);
    data["smt_5_nr"] = Number(peserta.smt_5_nr);
    data["smt_5_dokumen"] = peserta.smt_5_dokumen;
    data["path_smt_5_dokumen"] =
      Env.get("BASE_URL") + "/api/download/peserta/" + peserta.smt_5_dokumen;

    data["nr_pai"] = Number(peserta.nr_pai);
    data["nr_pkn"] = Number(peserta.nr_pkn);
    data["nr_bindo"] = Number(peserta.nr_bindo);
    data["nr_bing"] = Number(peserta.nr_bing);
    data["nr_mtk"] = Number(peserta.nr_mtk);
    data["nr_ipa"] = Number(peserta.nr_ipa);
    data["nr_ips"] = Number(peserta.nr_ips);
    data["nilai_rapor"] = Number(peserta.nilai_rapor);

    data["dok_skl"] = peserta.dok_skl;
    data["path_dok_skl"] =
      Env.get("BASE_URL") + "/api/download/peserta/" + peserta.dok_skl;

    /**
     * Data Prestasi
     */
    data["prestasi_status"] = peserta.prestasi_status;
    data["param_prestasi_id"] = Number(peserta.param_prestasi_id);
    data["prestasi_penyelenggara"] = peserta.prestasi_penyelenggara;
    data["prestasi_nama"] = peserta.prestasi_nama;
    data["prestasi_skor"] = peserta.prestasi_skor;
    data["prestasi_dokumen"] = peserta.prestasi_dokumen;
    data["path_prestasi_dokumen"] =
      Env.get("BASE_URL") + "/api/download/peserta/" + peserta.prestasi_dokumen;

    /**
     * Data Bantuan
     */
    data["afirmasi_status"] = peserta.afirmasi_status;
    data["afirmasi_jenis_bantuan"] = peserta.afirmasi_jenis_bantuan;
    data["afirmasi_nama"] = peserta.afirmasi_nama;
    data["afirmasi_nomor"] = peserta.afirmasi_nomor;
    data["afirmasi_dokumen"] = peserta.afirmasi_dokumen;
    data["path_afirmasi_dokumen"] =
      Env.get("BASE_URL") + "/api/download/peserta/" + peserta.afirmasi_dokumen;

    /**
     * Data Surat keterangan
     */
    data["tinggi_badan"] = peserta.tinggi_badan;
    data["dok_skck"] = peserta.dok_skck;
    data["path_dok_skck"] =
      Env.get("BASE_URL") + "/api/download/peserta/" + peserta.dok_skck;
    data["dok_surat_keterangan_sehat"] = peserta.dok_surat_keterangan_sehat;
    data["path_dok_surat_keterangan_sehat"] =
      Env.get("BASE_URL") +
      "/api/download/peserta/" +
      peserta.dok_surat_keterangan_sehat;
    data["dok_surat_keterangan_buta_warna"] =
      peserta.dok_surat_keterangan_buta_warna;
    data["path_dok_surat_keterangan_buta_warna"] =
      Env.get("BASE_URL") +
      "/api/download/peserta/" +
      peserta.dok_surat_keterangan_buta_warna;

    /**
     * Data Pernyataan
     */
    data["pernyataan_status"] = peserta.pernyataan_status;
    data["pernyataan_dokumen"] = peserta.pernyataan_dokumen;

    /**
     * Keterangan verifikasi
     */
    data["pesan"] = peserta.verifikasi_keterangan;

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
  async edit({ params, request, response, view }) {}

  /**
   * Update verifikasi details.
   * PUT or PATCH verifikasis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a verifikasi with id.
   * DELETE verifikasis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = VerifikasiController;
