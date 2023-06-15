"use strict";
const Env = use("Env");
const FormasiApply = use("App/Models/FormasiApply");
const Formasi = use("App/Models/Formasi");
const Peserta = use("App/Models/Peserta");
const Golongan = use("App/Models/Golongan");
const Pendidikan = use("App/Models/Pendidikan");

class LaporanController {
  async index({ request, respponse }) {}
  async report({ request, respponse, view }) {
    const formasiapply = await FormasiApply.all();

    const datas = [];

    for (let i in formasiapply.rows) {
      const rows = formasiapply.rows[i];
      const peserta = await Peserta.find(rows.peserta_id);
      const golongan = await Golongan.find(peserta.golongan_id);
      const pendidikan = await Pendidikan.find(peserta.pendidikan_id);
      const formasi = await Formasi.find(rows.formasi_id);
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      let nama = peserta.nama;
      row["nama"] = nama.toUpperCase();
      row["nip"] = peserta.nip;
      row["golongan"] = golongan.name;
      row["pendidikan"] = pendidikan.name;
      row["jabatan"] =
        peserta.jabatan_asal + "/" + peserta.perangkat_daerah_pemohon;
      row["formasi"] = formasi.nama_jabatan;
      row["path"] =
        Env.get("BASE_URL") + "/api/download/peserta/" + peserta.photo;

      datas.push(row);
    }

    return view.render("laporan.pelamar", { items: datas });
  }
}

module.exports = LaporanController;
