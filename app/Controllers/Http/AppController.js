"use strict";
const Env = use("Env");
const ProfilSekolah = use("App/Models/ProfilSekolah");
var dateFormat = require("dateformat");

class AppController {
  async wellcome({ response, view }) {
    return view.render("wellcome");
  }

  async email({ view }) {
    return view.render("emails.register");
  }

  async index({ response }) {
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
      if (
        jam_mulai < dateFormat(current_date, "HH:MM:ss") &&
        jam_selesai > dateFormat(current_date, "HH:MM:ss")
      ) {
        pendaftaran = true;
      }
    }

    const data = {
      company: profilsekolah.nama,
      slogan: profilsekolah.program_keahlian,

      apps_title: profilsekolah.apps_name,
      apps_ver: profilsekolah.apps_ver,
      apps_desc: profilsekolah.apps_desc,
      apps_url: profilsekolah.url,
      apps_logo:
        Env.get("BASE_URL") + "/api/download/logo/" + profilsekolah.logo,
      apps_logo_banten: Env.get("BASE_URL") + "/images/logo-banten.png",
      apps_background:
        Env.get("BASE_URL") + "/api/download/logo/" + profilsekolah.bg,
      apps_background_nav:
        Env.get("BASE_URL") + "/api/download/logo/" + profilsekolah.bg_nav,
      apps_pendaftaran: pendaftaran,
      apps_theme: profilsekolah.theme,
      apps_thememode: profilsekolah.color,
      skck: profilsekolah.skck,
      butawarna: profilsekolah.butawarna,
      pagu: profilsekolah.pagu,
      materai: profilsekolah.materai,
      telepon: profilsekolah.telpon,
      alamat: profilsekolah.alamat,
      showpagu: profilsekolah.showpagu,
      slider: profilsekolah.slider,
      regby: profilsekolah.regby.toUpperCase(),
    };
    return data;
  }

  async menus({ request, response, auth }) {
    const user = await auth.user;

    if (user.authent == "administrator") {
      let menus = [
        {
          title: "Dashboard",
          type: "item",
          icon: "mdi-view-dashboard",
          route: "/backend/dashboard",
        },

        { title: "Master Data", type: "subheader", route: "/" },
        {
          title: "Profil Sekolah",
          icon: "home",
          route: "/backend/master-profil-sekolah",
          type: "item",
        },
        {
          title: "Refrensi Sekolah",
          icon: "mdi-store",
          route: "/backend/master-refsekolah",
          type: "item",
        },

        {
          title: "Refrensi Wilayah",
          icon: "mdi-map",
          route: "/backend/master-provinsi",
          type: "item",
        },

        {
          title: "Program Keahlian",
          icon: "call_split",
          route: "/backend/master-program-keahlian",
          type: "item",
        },
        /**
        {
          title: "Jalur Pendaftaran",
          icon: "hail",
          route: "/backend/master-jalur-pendaftaran",
          type: "item",
        },
        **/
        {
          title: "Parameter Penilaian",
          icon: "auto_fix_normal",
          route: "/backend/master-param-nilai",
          type: "item",
        },
        {
          title: "Parameter Prestasi",
          icon: "emoji_events",
          route: "/backend/master-param-prestasi",
          type: "item",
        },
        {
          title: "Dokumen Persyaratan",
          icon: "folder",
          route: "/backend/master-dokumen",
          type: "item",
        },
        {
          title: "Jadwal PPDB",
          icon: "mdi-calendar",
          route: "/backend/master-jadwal",
          type: "item",
        },
        {
          title: "Slider",
          icon: "image",
          route: "/backend/utility-slider",
          type: "item",
        },
        {
          title: "Pengumuman",
          icon: "mic",
          route: "/backend/utility-pengumuman",
          type: "item",
        },

        { title: "PPDB", type: "subheader", route: "/" },
        // {
        //   title: "Verifkasi Peserta",
        //   icon: "how_to_reg",
        //   route: "/backend/verifikasi-index",
        //   type: "item",
        // },
        {
          title: "Daftar Peserta",
          icon: "how_to_reg",
          route: "/backend/verified-index",
          type: "item",
        },
        {
          title: "Olah Nilai",
          icon: "mdi-calculator",
          route: "/backend/olahnilai-jurusan",
          type: "item",
        },
        // {
        //   title: "Pendaftaran",
        //   icon: "follow_the_signs",
        //   route: "/peserta/pendaftaran",
        //   type: "item",
        // },
        /**
        { title: "DAFTAR ULANG", type: "subheader", route: "/" },
        {
          title: "Verifikasi",
          icon: "fact_check",
          route: "/backend/daftar-ulang-jurusan",
          type: "item",
        },

        { title: "Halaman Depan", type: "subheader", route: "/" },
        {
          title: "Pengumuman",
          icon: "mic",
          route: "/backend/utility-pengumuman",
          type: "item",
        },
        /**
        {
          title: "Slider",
          icon: "image",
          route: "/backend/utility-slider",
          type: "item",
        },
        */

        { title: "UJIAN", type: "subheader", route: "/" },
        {
          title: "Bank Soal",
          icon: "cases",
          route: "/backend/ujian-master-soal",
          type: "item",
        },
        {
          title: "Sesi Ujian",
          icon: "alarm",
          route: "/backend/jadwal-ujian-sesi",
          type: "item",
        },

        {
          title: "Jadwal Ujian",
          icon: "alarm_on",
          route: "/backend/jadwal-ujian",
          type: "item",
        },

        {
          title: "Jadwal Ujian Peserta",
          icon: "local_library",
          route: "/backend/jadwal-ujian-peserta",
          type: "item",
        },
        {
          title: "Absen Ujian",
          icon: "emoji_people",
          route: "/backend/jadwal-ujian-absen",
          type: "item",
        },

        {
          title: "Whatsapp Blast",
          icon: "mdi-whatsapp",
          route: "/backend/utility-wa",
          type: "item",
        },

        { title: "Laporan", type: "subheader", route: "/" },

        { title: "Utility", type: "subheader", route: "/" },
        {
          title: "Akun Aplikasi",
          icon: "engineering",
          route: "/backend/user",
          type: "item",
        },

        {
          title: "Profil Pengguna",
          icon: "accessibility",
          route: "/backend/profil-akun",
          type: "item",
        },
        {
          title: "Ganti Kata Sandi",
          icon: "vpn_key",
          route: "/backend/chngpwd",
          type: "item",
        },
        {
          title: "Run Workers",
          icon: "mdi-owl",
          route: "/backend/utility-run-workers",
          type: "item",
        },
      ];

      return menus;
    }

    if (user.authent == "supervisor") {
      let menus = [
        {
          title: "Dashboard",
          type: "item",
          icon: "mdi-view-dashboard",
          route: "/backend/dashboard",
        },

        { title: "OPERATOR", type: "subheader", route: "/" },
        {
          title: "Verifkasi Peserta",
          icon: "how_to_reg",
          route: "/backend/verifikasi-index",
          type: "item",
        },
        {
          title: "Terverifikasi",
          icon: "verified",
          route: "/backend/verified-index",
          type: "item",
        },
        {
          title: "Olah Nilai",
          icon: "mdi-calculator",
          route: "/backend/olahnilai-jurusan",
          type: "item",
        },

        {
          title: "Pendaftaran",
          icon: "follow_the_signs",
          route: "/peserta/pendaftaran",
          type: "item",
        },

        /**
        { title: "DAFTAR ULANG", type: "subheader", route: "/" },
        {
          title: "Verifikasi",
          icon: "fact_check",
          route: "/backend/daftar-ulang-jurusan",
          type: "item",
        },



        { title: "Halaman Depan", type: "subheader", route: "/" },
        {
          title: "Pengumuman",
          icon: "mic",
          route: "/backend/utility-pengumuman",
          type: "item",
        },
        {
          title: "Slider",
          icon: "image",
          route: "/backend/utility-slider",
          type: "item",
        },

        { title: "Laporan", type: "subheader", route: "/" },

        */

        { title: "Utility", type: "subheader", route: "/" },

        {
          title: "Profil Pengguna",
          icon: "accessibility",
          route: "/backend/profil-akun",
          type: "item",
        },
        {
          title: "Ganti Kata Sandi",
          icon: "vpn_key",
          route: "/backend/chngpwd",
          type: "item",
        },
      ];

      return menus;
    }

    if (user.authent == "operator") {
      let menus = [
        {
          title: "Dashboard",
          type: "item",
          icon: "mdi-view-dashboard",
          route: "/backend/dashboard",
        },

        { title: "OPERATOR", type: "subheader", route: "/" },
        {
          title: "Verifkasi Peserta",
          icon: "how_to_reg",
          route: "/backend/verifikasi-index",
          type: "item",
        },
        {
          title: "Pendaftaran",
          icon: "follow_the_signs",
          route: "/peserta/pendaftaran",
          type: "item",
        },
        /**
        { title: "DAFTAR ULANG", type: "subheader", route: "/" },
        {
          title: "Verifikasi",
          icon: "fact_check",
          route: "/backend/daftar-ulang-jurusan",
          type: "item",
        },


        { title: "Halaman Depan", type: "subheader", route: "/" },
        {
          title: "Pengumuman",
          icon: "mic",
          route: "/backend/utility-pengumuman",
          type: "item",
        },
        {
          title: "Slider",
          icon: "image",
          route: "/backend/utility-slider",
          type: "item",
        },

        { title: "Laporan", type: "subheader", route: "/" },
        */

        { title: "Utility", type: "subheader", route: "/" },

        {
          title: "Profil Pengguna",
          icon: "accessibility",
          route: "/backend/profil-akun",
          type: "item",
        },
        {
          title: "Ganti Kata Sandi",
          icon: "vpn_key",
          route: "/backend/chngpwd",
          type: "item",
        },
      ];

      return menus;
    }

    if (user.authent == "guru") {
      let menus = [
        {
          title: "Dashboard",
          type: "item",
          icon: "mdi-view-dashboard",
          route: "/backend/dashboard",
        },
        { title: "UJIAN", type: "subheader", route: "/" },
        {
          title: "Bank Soal",
          icon: "cases",
          route: "/backend/ujian-master-soal",
          type: "item",
        },
        { title: "Utility", type: "subheader", route: "/" },
        {
          title: "Profil Pengguna",
          icon: "accessibility",
          route: "/backend/profil-akun",
          type: "item",
        },
        {
          title: "Ganti Kata Sandi",
          icon: "vpn_key",
          route: "/backend/chngpwd",
          type: "item",
        },
      ];

      return menus;
    }

    if (user.authent == "peserta") {
      let menus = [
        {
          title: "Dashboard",
          type: "item",
          icon: "mdi-view-dashboard",
          route: "/peserta/dashboard",
        },
        { title: "PPDB", type: "subheader", route: "/" },
        {
          title: "Pendaftaran",
          icon: "follow_the_signs",
          route: "/peserta/pendaftaran",
          type: "item",
        },
        /**
        {
          title: "Konfirmasi Daftar Ulang",
          icon: "schedule_send",
          route: "/peserta/konfirmasi-daftar-ulang",
          type: "item",
        },
        */

        { title: "Utility", type: "subheader", route: "/" },
        {
          title: "Profil Pengguna",
          icon: "accessibility",
          route: "/backend/profil-akun",
          type: "item",
        },

        {
          title: "Ganti Kata Sandi",
          icon: "vpn_key",
          route: "/backend/chngpwd",
          type: "item",
        },
      ];

      return menus;
    }
  }
}

module.exports = AppController;
