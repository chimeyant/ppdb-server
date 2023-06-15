"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Env = use("Env");
const got = use("got");
const Peserta = use("App/Models/Peserta");
const ParamPrestasi = use("App/Models/ParamPrestasi");
const User = use("App/Models/User");
const { validate } = use("Validator");
var randomstring = require("randomstring");
var dateFormat = require("dateformat");
const FormData = use("form-data");
const ProfilSekolah = use("App/Models/ProfilSekolah");
const Axios = use("axios");

/**
 * Resourceful controller for interacting with pendaftarans
 */
class PendaftaranController {
  /**
   * Show a list of all pendaftarans.
   * GET pendaftarans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view, auth }) {
    const user = await auth.user;

    const peserta = await Peserta.find(user.peserta_id);
    const data = {};

    if (peserta) {
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
      data["dok_akte_lahir"] = peserta.dok_akte_lahir;
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
      data["smt_1_dokumen"] = peserta.smt_1_dokumen;

      data["smt_2_pai"] = Number(peserta.smt_2_pai);
      data["smt_2_pkn"] = Number(peserta.smt_2_pkn);
      data["smt_2_bindo"] = Number(peserta.smt_2_bindo);
      data["smt_2_bing"] = Number(peserta.smt_2_bing);
      data["smt_2_mtk"] = Number(peserta.smt_2_mtk);
      data["smt_2_ipa"] = Number(peserta.smt_2_ipa);
      data["smt_2_ips"] = Number(peserta.smt_2_ips);
      data["smt_2_dokumen"] = peserta.smt_2_dokumen;

      data["smt_3_pai"] = Number(peserta.smt_3_pai);
      data["smt_3_pkn"] = Number(peserta.smt_3_pkn);
      data["smt_3_bindo"] = Number(peserta.smt_3_bindo);
      data["smt_3_bing"] = Number(peserta.smt_3_bing);
      data["smt_3_mtk"] = Number(peserta.smt_3_mtk);
      data["smt_3_ipa"] = Number(peserta.smt_3_ipa);
      data["smt_3_ips"] = Number(peserta.smt_3_ips);
      data["smt_3_dokumen"] = peserta.smt_3_dokumen;

      data["smt_4_pai"] = Number(peserta.smt_4_pai);
      data["smt_4_pkn"] = Number(peserta.smt_4_pkn);
      data["smt_4_bindo"] = Number(peserta.smt_4_bindo);
      data["smt_4_bing"] = Number(peserta.smt_4_bing);
      data["smt_4_mtk"] = Number(peserta.smt_4_mtk);
      data["smt_4_ipa"] = Number(peserta.smt_4_ipa);
      data["smt_4_ips"] = Number(peserta.smt_4_ips);
      data["smt_4_dokumen"] = peserta.smt_4_dokumen;

      data["smt_5_pai"] = Number(peserta.smt_5_pai);
      data["smt_5_pkn"] = Number(peserta.smt_5_pkn);
      data["smt_5_bindo"] = Number(peserta.smt_5_bindo);
      data["smt_5_bing"] = Number(peserta.smt_5_bing);
      data["smt_5_mtk"] = Number(peserta.smt_5_mtk);
      data["smt_5_ipa"] = Number(peserta.smt_5_ipa);
      data["smt_5_ips"] = Number(peserta.smt_5_ips);
      data["smt_5_dokumen"] = peserta.smt_5_dokumen;

      data["dok_skl"] = peserta.dok_skl;
      /**
       * Data Prestasi
       */
      data["prestasi_status"] = peserta.prestasi_status;
      data["param_prestasi_id"] = Number(peserta.param_prestasi_id);
      data["prestasi_penyelenggara"] = peserta.prestasi_penyelenggara;
      data["prestasi_nama"] = peserta.prestasi_nama;
      data["prestasi_skor"] = peserta.prestasi_skor;
      data["prestasi_dokumen"] = peserta.prestasi_dokumen;

      /**
       * Data Bantuan
       */
      data["afirmasi_status"] = peserta.afirmasi_status;
      data["afirmasi_jenis_bantuan"] = peserta.afirmasi_jenis_bantuan;
      data["afirmasi_nama"] = peserta.afirmasi_nama;
      data["afirmasi_nomor"] = peserta.afirmasi_nomor;
      data["afirmasi_dokumen"] = peserta.afirmasi_dokumen;

      /**
       * Data Surat keterangan
       */
      data["tinggi_badan"] = peserta.tinggi_badan;
      data["dok_skck"] = peserta.dok_skck;
      data["dok_surat_keterangan_sehat"] = peserta.dok_surat_keterangan_sehat;
      data["dok_surat_keterangan_buta_warna"] =
        peserta.dok_surat_keterangan_buta_warna;

      /**
       * Data Pernyataan
       */
      data["pernyataan_status"] = peserta.pernyataan_status;
      data["pernyataan_dokumen"] = peserta.pernyataan_dokumen;
    }

    return data;
  }

  /**
   * Render a form to be used for creating a new pendaftaran.
   * GET pendaftarans/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new pendaftaran.
   * POST pendaftarans
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, auth }) {
    const {
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
      nisn:
        user.peserta_id == null
          ? "required|unique:pesertas,nisn|min:10|max:10"
          : "required|min:10|max:10",
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
      jarak_kesekolah: "integer",

      /**
       * rules semester I
       */
      smt_1_pai: "required|range:55,101|integer",
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
      smt_2_pai: "required|range:10,101|integer",
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
      smt_3_pai: "required|range:10,101|integer",
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
      smt_4_pai: "required|range:10,101|integer",
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
      smt_5_pai: "required|range:10,101|integer",
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
      "jarak_kesekolah.integer": "Jarak Kesekolah tidak benar Satuan Meter",
      /**
       *
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
    };

    const Validation = await validate(request.all(), rules, messages);

    if (Validation.fails()) {
      const msg = await Validation.messages();

      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    const profilsekolah = await ProfilSekolah.query().first();

    if (user.peserta_id == null) {
      try {
        const date = new Date();
        const current_date = date.getTime();

        const tanggal_mulai = dateFormat(
          profilsekolah.tanggal_mulai,
          "yyyy-mm-dd"
        );
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
          if (
            jam_mulai < dateFormat(current_date, "HH:MM:ss") &&
            jam_selesai > dateFormat(current_date, "HH:MM:ss")
          ) {
            pendaftaran = true;
          }
        }

        if (pendaftaran == false) {
          return response.json({
            status: false,
            message: "Pendaftaran telah ditutup",
          });
        }

        const peserta = new Peserta();
        /**
         * Area Registrasi Pilih Kompetensi
         */
        const tempnoreg = await randomstring.generate({
          length: 6,
          charset: "1234567890",
        });
        //substring
        peserta.nomor_register = "REG-" + tempnoreg.substring(0, 6);
        peserta.tanggal_register = dateFormat(current_date, "yyyy-mm-dd");
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
        if (prestasi_status) {
          const paramprestasi = await ParamPrestasi.find(param_prestasi_id);
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
        peserta.dok_surat_keterangan_buta_warna =
          dok_surat_keterangan_buta_warna;
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
         * verifikasi status 1 : Pengajuan 2: Perbaikan 3:Pengajuan Ulang,  4: Berkas Ditolak, 5 Berkas Diterima
         */

        peserta.verifikasi_status = 1;

        await peserta.save();

        const usermodel = await User.find(user.id);
        usermodel.peserta_id = peserta.id;
        await usermodel.save();

        //Kirim Pesan
        if (profilsekolah.sms) {
          const msg = {
            apikey: profilsekolah.apikey,
            nomor: peserta.nomor_hp,
            pesan:
              "*INFORMASI PPDB 2022/2023* * " +
              profilsekolah.nama +
              "* . Selamat anda telah *TERDAFTAR* di sistem kami * Nomor Register *" +
              peserta.nomor_register +
              "* Atas Nama " * +peserta.nama +
              " * Pesan Ini Tidak Untuk Dibalas (Pesan Otomatis)",
          };

          await Axios.post("http://api.senderwa.com/api/v2/send-wa", msg);
        }

        return response.json({
          status: true,
          message: "Pendaftaran berhasil  ",
          data: peserta,
        });
      } catch (error) {
        return response.json({
          status: false,
          message: "Opps...!, terjadi kesalahan" + error,
        });
      }
    } else {
      try {
        const peserta = await Peserta.find(user.peserta_id);
        /**
         * Area Registrasi Pilih Kompetensi
         */
        if (
          peserta.verifikasi_status == "4" ||
          peserta.verifikasi_status == "5"
        ) {
          return response.json({
            status: false,
            message: "Data anda telah terkunci",
            data: peserta,
          });
        }

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
        if (prestasi_status) {
          const paramprestasi = await ParamPrestasi.findOrFail(
            param_prestasi_id
          );
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
        peserta.dok_surat_keterangan_buta_warna =
          dok_surat_keterangan_buta_warna;
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
        if (
          peserta.verifikasi_status == 1 ||
          peserta.verifikasi_status == null
        ) {
          peserta.verifikasi_status = 1;
        } else {
          peserta.verifikasi_status = 3;
        }

        await peserta.save();

        const usermodel = await User.find(user.id);
        usermodel.peserta_id = peserta.id;
        await usermodel.save();

        if (profilsekolah.sms) {
          const msg = {
            apikey: profilsekolah.apikey,
            nomor: peserta.nomor_hp,
            pesan:
              "*INFORMASI PPDB 2022/2023* *" +
              profilsekolah.nama +
              "* . Selamat anda telah melakukan *PERBAIKAN DATA* di sistem kami * Nomor Register * " +
              peserta.nomor_register +
              "* Atas Nama *" +
              peserta.nama +
              " *" +
              " Pesan ini tidak untuk dibalas (Otomatis Sistem)",
          };

          await Axios.post("http://api.senderwa.com/api/v2/send-wa", msg);
        }

        return response.json({
          status: true,
          message: "Proses Perbaikan atau Perubahan data berhasil ",
          data: peserta,
        });
      } catch (error) {
        return response.json({
          status: false,
          message: "Opps...!, terjadi kesalahan",
        });
      }
    }
  }

  /**
   * Display a single pendaftaran.
   * GET pendaftarans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view, auth }) {
    return 0;
  }

  /**
   * Render a form to update an existing pendaftaran.
   * GET pendaftarans/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update pendaftaran details.
   * PUT or PATCH pendaftarans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a pendaftaran with id.
   * DELETE pendaftarans/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = PendaftaranController;
