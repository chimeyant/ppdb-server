"use strict";
const ProfilSekolah = use("App/Models/ProfilSekolah");
const Helpers = use("Helpers");
const Peserta = use("App/Models/Peserta");
const ProgramKeahlian = use("App/Models/ProgramKeahlian");
var dateFormat = require("dateformat");

class PengumumanController {
  async index({ request, response }) {
    //validasi waktu
    const profilsekolah = await ProfilSekolah.query().first();

    var date = await new Date();
    var current_date = dateFormat(new Date(), "yyyy-mm-dd");
    var tanggal_pengumuman = dateFormat(
      profilsekolah.tanggal_pengumuman,
      "yyyy-mm-dd"
    );
    var current_time = dateFormat(date.getTime(), "HH:MM:ss");

    if (current_date == tanggal_pengumuman) {
      if (
        this.timeStringToFloat(current_time) >=
        this.timeStringToFloat(profilsekolah.jam_pengumuman)
      ) {
        const path = Helpers.publicPath("uploads/datas/pengumuman.json");
        return response.download(path);
      }
      {
        return [];
      }
    } else if (new Date(current_date) >= new Date(tanggal_pengumuman)) {
      const path = Helpers.publicPath("uploads/datas/pengumuman.json");
      return response.download(path);
    } else {
      return [];
    }
  }

  async countdown({ request, response }) {
    const profilsekolah = await ProfilSekolah.query().first();

    var date = await new Date();
    var current_date = dateFormat(new Date(), "yyyy-mm-dd");
    var tanggal_pengumuman = dateFormat(
      profilsekolah.tanggal_pengumuman,
      "yyyy-mm-dd"
    );
    var current_time = dateFormat(date.getTime(), "HH:MM:ss");

    if (current_date == tanggal_pengumuman) {
      if (
        this.timeStringToFloat(current_time) >=
        this.timeStringToFloat(profilsekolah.jam_pengumuman)
      ) {
        return response.json({
          countdownshow: true,
          countdowntime: dateFormat(
            profilsekolah.tanggal_pengumuman,
            "mmmm d, yyyy " + profilsekolah.jam_pengumuman
          ),
        });
      }
      {
        return response.json({
          countdownshow: true,
          countdowntime: dateFormat(
            profilsekolah.tanggal_pengumuman,
            "mmmm d,yyyy"
          ),
        });
      }
    } else if (new Date(current_date) >= new Date(tanggal_pengumuman)) {
      return response.json({
        countdownshow: false,
        conuntdowntime: "",
      });
    } else {
      return response.json({
        countdownshow: true,
        countdowntime: dateFormat(
          profilsekolah.tanggal_pengumuman,
          "mmmm d, yyyy " + profilsekolah.jam_pengumuman + ":00"
        ),
      });
    }
  }

  async topnews({ request, response }) {
    const pengumuman = await Pengumuman.query()
      .where("status", true)
      .orderBy("id", "desc")
      .first();
    return pengumuman;
  }

  async verify({ request, response }) {
    const { id } = request.all();

    try {
      const peserta = await Peserta.find(id);
      const jurusan1 = await ProgramKeahlian.find(peserta.jurusan_id_1);
      const jurusan2 = peserta.jurusan_id_2
        ? await ProgramKeahlian.find(peserta.jurusan_id_2)
        : null;

      const data = {};
      data["nopend"] = peserta.nomor_register;
      data["nisn"] = peserta.nisn;
      data["nama"] = peserta.nama;
      data["ttl"] =
        peserta.tempat_lahir +
        ", " +
        dateFormat(peserta.tanggal_lahir, "dd/mm/yyyy");
      data["sekolah_asal"] = peserta.nama_sekolah_asal;
      data["jurusan"] = peserta.kelulusan_pil_1_status
        ? jurusan1.name + "(Pil 1)"
        : peserta.kelulusan_pil_2_status
        ? jurusan2.name + "(Pil 2)"
        : jurusan1.name + "(Pil 1) / " + jurusan2.name + "(Pil 2)";
      data["status"] = peserta.kelulusan_pil_1_status
        ? "DITERIMA"
        : peserta.kelulusan_pil_2_status
        ? "DITERIMA"
        : "BELUM DITERIMA";

      return data;
    } catch (error) {}
  }

  timeStringToFloat(time) {
    var hoursMinutes = time.split(/[.:]/);
    var hours = parseInt(hoursMinutes[0], 10);
    var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
  }
}

module.exports = PengumumanController;
