"use strict";

const { route } = require("@adonisjs/framework/src/Route/Manager");

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", "AppController.wellcome");
Route.get("/email", "AppController.email");
Route.get("sliders", "Frontend/HomeController.sliders");
Route.get("summarydata", "Frontend/HomeController.summarydata");
Route.get("pendaftars", "Frontend/HomeController.pendaftars");
Route.get("pagu", "Frontend/HomeController.pagu");
Route.get("images/:name", "MediaController.images");
Route.get("pengumuman", "Frontend/PengumumanController.index");
Route.get("countdown", "Frontend/PengumumanController.countdown");
Route.post("verify", "Frontend/PengumumanController.verify");
Route.get("jadwals", "Frontend/HomeController.jadwal");
Route.get("persyaratans", "MasterData/DokumanController.index");
Route.get("splash-info", "Utility/PengumumanController.topnews");

Route.group(() => {
  Route.get("/info", "AppController.index");

  /**
   * Route Register Akun Peserta PPDB
   */
  Route.post("auth/register", "Peserta/UserController.register");

  /**
   * Route Login Peserta dan Admin
   */
  Route.post("auth/token", "UserController.login");
  Route.post("auth/login-mobile", "UserController.loginMobile");

  Route.get("download/:dir/:name", "MediaController.download");

  /**
   * route Dashboard
   */
  Route.get("dashboard-index", "DashboardController.index");
  Route.get("dashboard-pesan", "DashboardController.getpesan").middleware([
    "auth",
  ]);
  Route.get(
    "dashboard-perjeniskelamin",
    "DashboardController.pendaftarperjeniskelamin"
  ).middleware(["auth"]);
  Route.get(
    "dashboard-perjurusan",
    "DashboardController.pendaftarperjurusan"
  ).middleware(["auth"]);
  Route.get(
    "dashboard-perjurusan-per-pilihan",
    "DashboardController.pendaftarperjurusanperpilihan"
  ).middleware(["auth"]);
  Route.get("dashboard-perstatus", "DashboardController.perstatus").middleware([
    "auth",
  ]);
  Route.get("dashboard-perhari", "DashboardController.perhari").middleware([
    "auth",
  ]);
  Route.get(
    "dashboard-verifikasi",
    "DashboardController.verifikasidata"
  ).middleware(["auth"]);

  Route.resource("user", "UserController").middleware(["auth"]);
  Route.post("generate-account", "UserController.generateAccount").middleware([
    "auth",
  ]);
  Route.get("user-info", "UserController.userInfo").middleware(["auth"]);
  Route.get("menus", "AppController.menus").middleware(["auth"]);
  Route.post("chngpwd", "UserController.chngpwd").middleware(["auth"]);
  Route.post("update-profil", "UserController.updateprofil").middleware([
    "auth",
  ]);

  /**Route Upload Media */
  Route.post("media", "MediaController.store").middleware(["auth"]);

  /**
   * Route Daerah
   */
  Route.post("provinsi-combo", "ProvinceController.combo").middleware(["auth"]);

  Route.post("kabupaten-combo", "RegencyController.combo").middleware(["auth"]);

  Route.post("kecamatan-combo", "DistrictController.combo").middleware([
    "auth",
  ]);
  Route.post(
    "kecamatan-combo-by-regency",
    "DistrictController.combobyregency"
  ).middleware(["auth"]);

  Route.post("desa-combo", "VillageController.combo").middleware(["auth"]);

  /**
   * Master Data Profil Sekolah
   */
  Route.resource(
    "profil-sekolah",
    "MasterData/ProfilSekolahController"
  ).middleware(["auth"]);

  Route.post(
    "profile-reset-data",
    "MasterData/ProfilSekolahController.resetdata"
  ).middleware(["auth"]);

  /**
   * Master Route Program Keahlian
   *
   */
  Route.resource(
    "program-keahlian",
    "MasterData/ProgramKeahlianController"
  ).middleware(["auth"]);
  Route.post(
    "program-keahlian-combo",
    "MasterData/ProgramKeahlianController.combo"
  ).middleware(["auth"]);
  Route.resource(
    "master-persyaratan",
    "MasterData/PersyaratanController"
  ).middleware(["auth"]);

  Route.resource("master-jadwal", "MasterData/JadwalController").middleware([
    "auth",
  ]);

  /**
   * Master Route Pekerjaan
   */
  Route.post(
    "pekerjaan-combo",
    "MasterData/PekerjaanController.combo"
  ).middleware(["auth"]);

  /**
   * Master Pendidikan
   */
  Route.post(
    "pendidikan-combo",
    "MasterData/PendidikanController.combo"
  ).middleware(["auth"]);

  /**
   * Route Master Jalur Pendaftaran
   */
  Route.resource(
    "jalur-pendaftaran",
    "MasterData/JalurPendaftaranController"
  ).middleware(["auth"]);
  Route.post(
    "jalur-pendaftaran-combo",
    "MasterPData/JalurPendaftaranController.combo"
  ).middleware(["auth"]);

  /**
   * Route Master Parameter Nilai
   */
  Route.resource("param-nilai", "MasterData/ParamNilaiController").middleware([
    "auth",
  ]);

  /**
   * Route Master Parameter Prestasi
   */
  Route.resource(
    "param-prestasi",
    "MasterData/ParamPrestasiController"
  ).middleware(["auth"]);
  Route.post(
    "param-prestasi-combo",
    "MasterData/ParamPrestasiController.combo"
  ).middleware(["auth"]);

  /**
   * Route Master Ref Sekolah
   */
  Route.resource("ref-sekolah", "MasterData/RefSekolahController").middleware([
    "auth",
  ]);

  /**
   * Route Master Wilayah
   */
  Route.resource("provinsi", "MasterData/ProvinceController").middleware([
    "auth",
  ]);

  Route.resource(
    "kabupaten/:province_id",
    "MasterData/RegencyController"
  ).middleware(["auth"]);

  Route.resource(
    "kecamatan/:regency_id",
    "MasterData/DistrictController"
  ).middleware(["auth"]);

  Route.resource(
    "desa/:district_id",
    "MasterData/VillageController"
  ).middleware(["auth"]);

  Route.post(
    "ref-sekolah-combo",
    "MasterData/RefSekolahController.combo"
  ).middleware(["auth"]);

  /**
   * Master Dokumen pesyaratan
   */
  Route.resource(
    "dokumen-persyaratan",
    "MasterData/DokumanController"
  ).middleware(["auth"]);

  /**Route Verifikator */
  Route.resource("verifikasi", "Verifikator/VerifikasiController").middleware([
    "auth",
  ]);
  Route.get("verified", "Verifikator/VerifikasiController.verified").middleware(
    ["auth"]
  );
  Route.post(
    "verified-download",
    "Verifikator/VerifikasiController.downloadExcel"
  ).middleware(["auth"]);
  Route.post(
    "import-data-peserta",
    "Verifikator/VerifikasiController.import"
  ).middleware(["auth"]);

  /**
   * Route Master Soal
   */
  Route.resource("master-soal", "Ujian/MasterSoalController").middleware([
    "auth",
  ]);
  Route.post(
    "master-soal-info",
    "Ujian/MasterSoalController.infoSoal"
  ).middleware(["auth"]);
  Route.post(
    "master-soal-combo",
    "Ujian/MasterSoalController.combo"
  ).middleware(["auth"]);
  Route.resource(
    "master-soal-detail/:master_soal_id",
    "Ujian/MasterSoalDetailController"
  ).middleware(["auth"]);
  Route.post(
    "master-soal-detail-info",
    "Ujian/MasterSoalDetailController.fetchSoalDetail"
  ).middleware(["auth"]);

  /**
   * Route Jadwal Ujian
   */
  Route.resource(
    "jadwal-ujian-sesi",
    "Ujian/JadwalUjianSesiController"
  ).middleware(["auth"]);
  Route.post(
    "jadwal-ujian-sesi-combo",
    "Ujian/JadwalUjianSesiController.combo"
  ).middleware(["auth"]);

  Route.resource("jadwal-ujian", "Ujian/JadwalUjianController").middleware([
    "auth",
  ]);

  Route.resource(
    "jadwal-ujian-peserta/:tanggal/:jadwal_ujian_sesi_id",
    "Ujian/JadwalUjianPesertaController"
  ).middleware(["auth"]);
  Route.post(
    "jadwal-ujian-peserta-generate",
    "Ujian/JadwalUjianPesertaController.generate"
  ).middleware(["auth"]);
  Route.post(
    "jadwal-ujian-peserta-reset",
    "Ujian/JadwalUjianPesertaController.reset"
  ).middleware(["auth"]);
  Route.post(
    "jadwal-ujian-peserta-public-pesan",
    "Ujian/JadwalUjianPesertaController.sendpublicmessage"
  ).middleware(["auth"]);

  Route.post(
    "jadwal-ujian-peserta-private-pesan",
    "Ujian/JadwalUjianPesertaController.sendprivatemessage"
  ).middleware("auth");

  Route.resource(
    "jadwal-ujian-absen/:tanggal/:jadwal_ujian_sesi_id",
    "Ujian/JadwalUjianAbsenController"
  ).middleware(["auth"]);
  Route.post(
    "jadwal-ujian-absen-send-private-message",
    "Ujian/JadwalUjianAbsenController.sendprivatemessage"
  ).middleware(["auth"]);
  Route.post(
    "jadwal-ujian-susulan",
    "Ujian/JadwalUjianAbsenController.createsusulan"
  ).middleware(["auth"]);
  Route.post(
    "reset-ujian-private",
    "JadwalUjianAbsenController.resetujian"
  ).middleware(["auth"]);

  /**
   * Route Olah Nilai
   */
  Route.get(
    "olah-nilai-jurusan",
    "Verifikator/OlahNilaiController.jurusan"
  ).middleware(["auth"]);
  Route.resource(
    "olah-nilai/:jurusan_id",
    "Verifikator/OlahNilaiController"
  ).middleware(["auth"]);
  Route.post(
    "olah-nilai-grade",
    "Verifikator/OlahNilaiController.grade"
  ).middleware(["auth"]);
  Route.post(
    "olah-nilai-grade2",
    "Verifikator/OlahNilaiController.grade2"
  ).middleware(["auth"]);
  Route.post(
    "olah-nilai-export",
    "Verifikator/OlahNilaiController.exports"
  ).middleware(["auth"]);
  Route.post(
    "olah-nilai-manual-grade",
    "Verifikator/OlahNilaiController.manualgrade"
  ).middleware(["auth"]);
  Route.post(
    "olah-nilai-public-send",
    "Verifikator/OlahNilaiController.sendpublicmessage"
  ).middleware(["auth"]);
  Route.post(
    "olah-nilai-private-send",
    "Verifikator/OlahNilaiController.sendprivatemessage"
  ).middleware(["auth"]);

  /**
   * Route Pesan
   */
  Route.resource("pesan", "PesanController").middleware(["auth"]);

  /**
   * Utility Grouo
   */
  Route.resource("utility-wa", `Utility/WaController`).middleware(["auth"]);
  Route.post("utility-kirim-informasi", "Utility/WaController.kiriminformasi");
  Route.post(
    "utility-send-bulk-message-account",
    "Utility/WaController.sendBroadcastAccount"
  );
  Route.post(
    "utility-wa-kirim-ulang",
    "Utility/WaController.kirimulang"
  ).middleware(["auth"]);

  Route.post(
    "run-job-pendaftars",
    "Utility/RunWorkerController.syncPendaftars"
  ).middleware(["auth"]);

  Route.post(
    "run-service-pengumuman",
    "Utility/RunWorkerController.syncPengumuman"
  ).middleware(["auth"]);

  /**
   * Pengumuman
   */
  Route.resource("pengumuman", "Utility/PengumumanController").middleware([
    "auth",
  ]);
  Route.get("pengumuman-topnews", "Utility/PengumumanController.topnews");

  /**
   * Daftar Ulang
   */
  Route.resource(
    "daftar-ulang-verifikasi/:jurusan_id",
    "DaftarUlang/VerifikasiController"
  ).middleware(["auth"]);

  /**
   * Slider
   */
  Route.resource("slider", "Utility/SliderController").middleware(["auth"]);

  /**
   * Route Laporan & Export Data
   */
  Route.post(
    "download-data-absen",
    "Laporan/DaftarPesertaController.exportDataAbsenUjian"
  ).middleware(["auth"]);
}).prefix("api");

//Route Calon siswa

Route.group(() => {
  Route.get("dashboard", "Peserta/DashboardController.index");
  Route.post("dashboard-kirim-pesan", "Peserta/DashboardController.postpesan");
  Route.resource("pendaftaran", "Peserta/PendaftaranController");
  Route.post(
    "dashboard-jadwal-ujian",
    "Peserta/DashboardController.fetchJadwalUjian"
  );
  Route.post(
    "fetch-info-status-ujian",
    "Peserta/JadwalUjianHasilController.fetchInfoStatusUjian"
  );
  Route.post("create-soals", "Peserta/JadwalUjianHasilController.createsoals");
  Route.post(
    "fetch-info-soal",
    "Peserta/JadwalUjianHasilController.fetchInfoSoal"
  );
  Route.post("fetch-soal", "Peserta/JadwalUjianHasilController.fetchsoals");
  Route.post("get-time-left", "Peserta/TimeLeftController.getTimeLeft");
  Route.post("set-time-left", "Peserta/TimeLeftController.setTimeLeft");
  Route.post(
    "store-jawaban",
    "Peserta/JadwalUjianHasilController.storeJawaban"
  );
  Route.post(
    "konfirmasi-selesai",
    "Peserta/JadwalUjianHasilController.konfirmasiselesai"
  );
  Route.post(
    "konfirmasi-selesai",
    "Peserta/JadwalUjianHasilController.konfirmasiselesai"
  );
  Route.post(
    "dashboard-dokumen",
    "Peserta/DashboardController.fetchDokumenPersyaratan"
  );
  Route.post(
    "konfirmasi-daftar-ulang",
    "Peserta/DaftarUlangController.confirm"
  );
  Route.post(
    "cetak-bukti-pengumuman",
    "Peserta/DashboardController.cetakBuktiKelulusan"
  );
})
  .prefix("api/peserta")
  .middleware(["auth"]);
