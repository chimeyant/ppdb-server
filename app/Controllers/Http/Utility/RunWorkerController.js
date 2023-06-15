"use strict";
const Pendaftar = use("App/Jobs/Producers/Pendaftar");
const Queue = use("Queue");
const fs = require("fs");
const Helpers = use("Helpers");
const Peserta = use("App/Models/Peserta");
const Jurusan = use("App/Models/ProgramKeahlian");

class RunWorkerController {
  async syncPendaftars({ response }) {
    let job;
    job = new Pendaftar({ data: "pendaftarans" });

    await Queue.dispatch(job, "every 120 seconds");

    const jobId = await new Promise((resolve) =>
      job.on("init", (jobId) => {
        resolve(jobId);
      })
    );
    return response.json({
      status: true,
      message: "Service berhasil dijalankan " + jobId,
    });
  }

  async syncPengumuman({ response }) {
    const jurusan = await Jurusan.query().orderBy("id", "asc").fetch();

    try {
      const datas = [];

      for (let i in jurusan.rows) {
        const rows = jurusan.rows[i];

        //lulus pilihan pertama
        const peserta1 = await Peserta.query()
          .where("jurusan_id_1", rows.id)
          .where("kelulusan_pil_1_status", true)
          .orderBy("nilai_akhir", "desc")
          .fetch();
        let num = 0;
        for (let j in peserta1.rows) {
          const rows1 = peserta1.rows[j];
          const row1 = {};
          row1["id"] = rows1.id;
          num = num + 1;
          row1["num"] = num;
          row1["nisn"] = rows1.nisn;
          let nama = rows1.nama;
          row1["nama"] = nama.toUpperCase();
          row1["jeniskelamin"] = rows1.jenis_kelamin;
          let namasekolah = rows1.nama_sekolah_asal;
          row1["sekolah"] = namasekolah.toUpperCase();
          row1["jurusan"] = rows.singkat;
          row1["status"] = "DITERIMA";

          datas.push(row1);
        }

        //lulusan piliahn 2

        const peserta2 = await Peserta.query()
          .where("jurusan_id_2", rows.id)
          .where("kelulusan_pil_1_status", false)
          .where("kelulusan_pil_2_status", true)
          .fetch();
        for (let k in peserta2.rows) {
          const rows2 = peserta2.rows[k];
          const row2 = {};
          row2["id"] = rows2.id;
          num = num + 1;
          row2["num"] = num;
          row2["nisn"] = rows2.nisn;
          let nama = rows2.nama;
          row2["nama"] = nama.toUpperCase();
          row2["jeniskelamin"] = rows2.jenis_kelamin;
          let namasekolah = rows2.nama_sekolah_asal;
          row2["sekolah"] = namasekolah.toUpperCase();
          row2["jurusan"] = rows.singkat;
          row2["status"] = "DITERIMA";

          datas.push(row2);
        }
      }
      //create json dile
      const path = Helpers.publicPath("uploads/datas/pengumuman.json");

      const jsonpengumuman = JSON.stringify(datas);

      fs.writeFile(path, jsonpengumuman, function (err) {
        console.log(err);
      });

      return response.json({
        status: true,
        message: "Service pengumuman berhasil dijalankan..!",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps..., terjadi kesalahan " + error,
      });
    }
  }
}

module.exports = RunWorkerController;
