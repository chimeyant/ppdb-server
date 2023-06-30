"use strict";

const Env = use("Env");
const Peserta = use("App/Models/Peserta");
const ProgramKeahlian = use("App/Models/ProgramKeahlian");
const ProfilSekolah = use("App/Models/ProfilSekolah");
const Pesan = use("App/Models/Pesan");
const User = use("App/Models/User");
const JadwalUjianPeserta = use("App/Models/JadwalUjianPeserta");
const JadwalUjian = use("App/Models/JadwalUjian");
const Dokumen = use("App/Models/Dokuman");
const QRCode = require("qrcode");

var dateFormat = require("dateformat");

class DashboardController {
  async index({ request, response, auth }) {
    const user = auth.user;

    const peserta = await Peserta.find(user.peserta_id);

    //Ambil Profil sekolah
    const profilsekolah = await ProfilSekolah.query().first();

    var date = await new Date();
    var current_date = dateFormat(new Date(), "yyyy-mm-dd");
    var tanggal_pengumuman = dateFormat(
      profilsekolah.tanggal_pengumuman,
      "yyyy-mm-dd"
    );
    var current_time = dateFormat(date.getTime(), "HH:MM:ss");

    let status_pengumuman = false;

    if (current_date == tanggal_pengumuman) {
      if (
        this.timeStringToFloat(current_time) >=
        this.timeStringToFloat(profilsekolah.jam_pengumuman)
      ) {
        status_pengumuman = true;
      }
    } else if (new Date(current_date) >= new Date(tanggal_pengumuman)) {
      status_pengumuman = true;
    } else {
      status_pengumuman = false;
    }

    const programkeahlian1 = await ProgramKeahlian.find(peserta.jurusan_id_1);

    const data = {};
    data["nomor_register"] = peserta.nomor_register;
    data["nisn"] = peserta.nisn;
    data["nama"] = peserta.nama.toUpperCase();
    data["ttl"] =
      peserta.tempat_lahir.toUpperCase() +
      ", " +
      dateFormat(peserta.tanggal_lahir, "dd/mm/yyyy");
    data["nama_sekolah_asal"] = peserta.nama_sekolah_asal;
    data["pil1"] = programkeahlian1.name.toUpperCase();
    if (peserta.jurusan_id_2 != null) {
      const programkeahlian2 = await ProgramKeahlian.find(peserta.jurusan_id_2);
      if (programkeahlian2) {
        data["pil2"] = programkeahlian2.name.toUpperCase();
      }
    }
    data["diterima"] = status_pengumuman
      ? peserta.kelulusan_pil_1_status
        ? "Pilihan 1 "
        : "Pilihan 2"
      : "";
    data["status"] = status_pengumuman
      ? peserta.kelulusan_pil_1_status
        ? true
        : peserta.kelulusan_pil_2_status
        ? true
        : false
      : false;

    data["status_color"] =
      peserta.verifikasi_status == "1"
        ? "grey"
        : peserta.verifikasi_status == "2"
        ? "red"
        : peserta.verifikasi_status == "3"
        ? "orange"
        : peserta.verifikasi_status == "4"
        ? "green"
        : peserta.verifikasi_status == "5"
        ? "red"
        : "red";

    data["status_text"] =
      peserta.verifikasi_status == "1"
        ? "PENGAJUAN"
        : peserta.verifikasi_status == "2"
        ? "PERBAIKAN BERKAS"
        : peserta.verifikasi_status == "3"
        ? "PENGAJUAN PERBAIKAN"
        : peserta.verifikasi_status == "4"
        ? "BERKAS DITERIMA"
        : peserta.verifikasi_status == "5"
        ? "BERKAS DITOLAK"
        : peserta.verifikasi_status == "6"
        ? "BERKAS DICABUT"
        : "";

    data["path"] =
      Env.get("BASE_URL") + "/api/download/peserta/" + peserta.foto;
    data["pesan"] = peserta.verifikasi_keterangan;
    data["daerah_asal"] = peserta.daerah_asal;
    data["jenis_kelamin"] = peserta.jenis_kelamin;
    data["tanggal_lahir"] = dateFormat(peserta.tanggal_lahir, "dd-mm-yyyy");
    data["waktu_pendaftaran"] = dateFormat(
      peserta.tanggal_register,
      "dd-mm-yyyy"
    );

    const pesan = await Pesan.query()
      .where("to_id", user.id)
      .orWhere("from_id", user.id)
      .orderBy("id", "desc")
      .fetch();

    const pesans = [];

    for (let i in pesan.rows) {
      const rows = pesan.rows[i];
      const user = await User.findOrFail(rows.from_id);
      const row = {};
      row["id"] = rows.id;
      row["title"] = rows.title;
      row["body"] = rows.body;
      row["dari"] = user.username;
      row["from_id"] = rows.from_id;
      row["from_name"] = user.username;
      row["avatar"] =
        user.avatar == null
          ? Env.get("BASE_URL") + "/api/download/logo/" + profilsekolah.logo
          : Env.get("BASE_URL") + "/api/download/avatar/" + user.avatar;
      row["status"] = rows.status;

      pesans.push(row);
    }

    return response.json({
      peserta: data,
      pesans: pesans,
    });
  }

  async postpesan({ request, response, auth }) {
    const { title, body, to_id } = request.all();

    const user = auth.user;

    try {
      const date = new Date();
      const current_date = date.getTime();

      const pesan = new Pesan();
      pesan.title = title;
      pesan.body = body;
      pesan.from_id = user.id;
      pesan.to_id = to_id;
      pesan.tanggal = dateFormat(current_date, "yyyy-mm-dd");
      pesan.save();

      return response.json({
        status: true,
        message: "Pesan telah terkirim",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }

  async fetchJadwalUjian({ request, response, auth }) {
    const user = await auth.user;

    //cari tanggal sekarang
    var date = new Date();
    var current_date = dateFormat(new Date(), "yyyy-mm-dd");
    var current_time = dateFormat(date.getTime(), "HH:MM:ss");

    const jadwalujianpeserta = await JadwalUjianPeserta.query()
      //.where("tanggal", current_date)
      .where("peserta_id", user.peserta_id)
      .orderBy("tanggal", "desc")
      .fetch();

    const datas = [];

    for (let i in jadwalujianpeserta.rows) {
      const rows = jadwalujianpeserta.rows[i];
      const jadwalujan = await JadwalUjian.find(rows.jadwal_ujian_id);
      const progamkeahlian = await ProgramKeahlian.find(
        jadwalujan.program_keahlian_id
      );
      const row = {};
      row["id"] = rows.id;
      row["jadwal_ujian_id"] = rows.jadwal_ujian_id;
      row["jadwal"] = jadwalujan.name;
      row["jurusan"] = progamkeahlian.name;
      row["tanggal"] = dateFormat(rows.tanggal, "dd/mm/yyyy");
      row["waktu"] = rows.waktu;
      row["jam_mulai"] = rows.jam_mulai;
      row["jam_selesai"] = rows.jam_selesai;
      //row["aktif"] = rows.jadwal_ujian_sesi_id == 2 ? false : false;
      row["aktif"] = true;
      // dateFormat(rows.tanggal, "yyyy-mm-dd") == current_date
      //   ? this.timeStringToFloat(rows.jam_mulai) <=
      //     this.timeStringToFloat(current_time)
      //     ? this.timeStringToFloat(row.jam_selesai) >=
      //       this.timeStringToFloat(current_time)
      //       ? true
      //       : false
      //     : false
      //   : false;

      datas.push(row);
    }

    return datas;
  }

  async fetchDokumenPersyaratan({ request, response }) {
    const dokumen = await Dokumen.query().orderBy("id", "asc").fetch();

    const datas = [];

    for (let i in dokumen.rows) {
      const rows = dokumen.rows[i];

      const row = {};
      row["id"] = rows.id;
      row["title"] = rows.name;
      row["subtitle"] = rows.description;
      row["hasfile"] = rows.path ? true : false;
      row["path"] = Env.get("BASE_URL") + "/api/download/dokumen/" + rows.path;

      datas.push(row);
    }

    return datas;
  }

  async cetakBuktiKelulusan({ request, response, view, auth }) {
    const user = await auth.user;
    const profil = await ProfilSekolah.query().first();

    const logo = Env.get("BASE_URL") + "/images/logo-banten.png";
    const namasekolah = profil.nama;

    const peserta = await Peserta.find(user.peserta_id);

    const pesertaurl = Env.get("APP_URL") + "/verify/" + user.peserta_id;
    let qrurl = "";

    await QRCode.toDataURL(pesertaurl, function (err, url) {
      qrurl = url;
    });

    const jurusan1 = peserta.jurusan_id_1
      ? await ProgramKeahlian.find(peserta.jurusan_id_1)
      : null;
    const jurusan2 = peserta.jurusan_id_2
      ? await ProgramKeahlian.find(peserta.jurusan_id_2)
      : null;

    const jurusan = peserta.kelulusan_pil_1_status
      ? jurusan1.name.toUpperCase()
      : peserta.kelulusan_pil_2_status
      ? jurusan2.name.toUpperCase()
      : "";

    return view.render("surat-keputusan", {
      logo: logo,
      namasekolah: namasekolah,
      alamat: profil.alamat,
      url: profil.url,
      email: profil.email,
      noreg: peserta.nomor_register,
      nisn: peserta.nisn,
      nama: peserta.nama.toUpperCase(),
      ttl:
        peserta.tempat_lahir.toUpperCase() +
        ", " +
        dateFormat(peserta.tanggal_lahir, "dd/mm/yyyy"),
      nama_sekolah_asal: peserta.nama_sekolah_asal,
      jurusan: jurusan,
      titimangsa: profil.titi_mangsa_ttd,
      namakepalasekolah: profil.kepalasekolah,
      nipkepalasekolah: profil.nip,
      ketuapanitianama: profil.ketua_panitia_nama,
      ketuapanitianip: profil.ketua_panitia_nip,
      qrcode: qrurl,
    });
  }

  timeStringToFloat(time) {
    try {
      var hoursMinutes = time.split(/[.:]/);
      var hours = parseInt(hoursMinutes[0], 10);
      var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
      return hours + minutes / 60;
    } catch (error) {
      return 0;
    }
  }
}

module.exports = DashboardController;
