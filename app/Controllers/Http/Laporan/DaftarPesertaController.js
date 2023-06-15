"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Peserta = use("App/Models/Peserta");
const ProgramKeahlian = use("App/Models/ProgramKeahlian");
const Province = use("App/Models/Province");
const Regency = use("App/Models/Regency");
const District = use("App/Models/District");
const Village = use("App/Models/Village");
const JadwalUjian = use("App/Models/JadwalUjian");
const JadwalUjianAbsen = use("App/Models/JadwalUjianAbsen");
var dateFormat = require("dateformat");

/**
 * Resourceful controller for interacting with daftarpesertas
 */
class DaftarPesertaController {
  async exportxls({ request, response }) {
    const peserta = await Peserta.query()
      .where("verifikasi_status", "4")
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
      row["asal_sekolah"] = rows.nama_asal_sekolah;
      row["tahun_lulus"] = rows.tahun_lulus;
      row["nik"] = rows.nik;
      row["nama_ayah"] = rows.nama_ayah;
      row["nama_ibu"] = rows.nama_ibu;
      row["nomor_hp"] = rows.nomor_hp;

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
      datas.push(row);
    }

    return datas;
  }

  /**
   * Export Data Excel Ujian
   */
  async exportDataAbsenUjian({ request, response }) {
    const { tanggal, jadwal_ujian_sesi_id } = request.all();

    const absens = await JadwalUjianAbsen.query()
      .where("tanggal", tanggal)
      .where("jadwal_ujian_sesi_id", jadwal_ujian_sesi_id)
      .orderBy("jadwal_ujian_sesi_id")
      .fetch();

    const datas = [];

    for (let i in absens.rows) {
      const rows = absens.rows[i];
      const peserta = await Peserta.find(rows.peserta_id);
      const programkeahlian = await ProgramKeahlian.find(peserta.jurusan_id_1);
      const row = {};
      row["NO"] = i++ + 1;
      row["NISN"] = peserta.nisn;
      var nama = peserta.nama;
      row["NAMA"] = nama.toUpperCase();
      row["ASAL SEKOLAH"] = peserta.nama_sekolah_asal;
      row["JURUSAN"] = programkeahlian.name;
      row["JAM MASUK"] = rows.jam_masuk;
      row["JAM_KELUAR"] = rows.jam_keluar;
      row["NILAI"] = rows.nilai;
      datas.push(row);
    }

    return datas;
  }
}

module.exports = DaftarPesertaController;
