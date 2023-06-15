"use strict";

/**
 * Sample job consumer class
 *
 * @version 2.0.0
 * @adonis-version 4.0+
 */

const Peserta = use("App/Models/Peserta");
const fs = require("fs");
const dateFormat = require("dateformat");
const ProgramKeahlian = use("App/Models/ProgramKeahlian");
const Helpers = use("Helpers");

class Pendaftar {
  /**
   * Concurrency for processing this job
   * @return {Int} Num of jobs processed at time
   */
  static get concurrency() {
    return 1;
  }

  /**
   * UUID for this job class
   * Make sure consumer and producer are in sync
   * @return {String}
   */
  static get type() {
    return "pendaftar";
  }

  /**
   * Inject custom payload into the job class
   * @param  {Object} data
   *
   * DO NOT MODIFY!
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Inject the kue ctx to the consumer, you can use it to
   * pause(), shutdown() or remove() handler actions.
   * See kue's doc for more details
   * @param  {Object} data
   *
   * DO NOT MODIFY!
   */
  setContext(ctx) {
    this.ctx = ctx;
  }

  /**
   * Handle the sending of email data
   * You can drop the async keyword if it is synchronous
   */
  async handle() {
    // Execute your task here...
    try {
      const pesertas = await Peserta.query()
        .orderBy("tanggal_register", "desc")
        .orderBy("id", "desc")
        .fetch();

      const datas = [];

      for (let i in pesertas.rows) {
        const rows = pesertas.rows[i];
        const programkeahlian1 = await ProgramKeahlian.find(rows.jurusan_id_1);
        const programkeahlian2 = await ProgramKeahlian.find(rows.jurusan_id_2);
        //
        const row = {};
        row["id"] = rows.id;
        row["num"] = i++ + 1;
        row["nisn"] = rows.nisn;
        row["nama"] = rows.nama.toUpperCase();
        row["jenis_kelamin"] = rows.jenis_kelamin;
        row["nama_sekolah_asal"] = rows.nama_sekolah_asal.toUpperCase();
        row["pil1"] = programkeahlian1.name;
        if (programkeahlian2) {
          row["pil2"] = programkeahlian2.name;
        }

        row["status_warna"] =
          rows.verifikasi_status == "1"
            ? "grey"
            : rows.verifikasi_status == "2"
            ? "red"
            : rows.verifikasi_status == "3"
            ? "yellow"
            : "green";
        row["status"] =
          rows.verifikasi_status == "1"
            ? "Pengajuan"
            : rows.verifikasi_status == "2"
            ? "Perbaikan Berkas"
            : rows.verifikasi_status == "3"
            ? "Pengajuan Perbaikan"
            : rows.verifikasi_status == "4"
            ? "Berkas Diterima"
            : rows.verifikasi_status == "5"
            ? "Berkas Ditolak"
            : "Berkas Dicabut";

        datas.push(row);
      }

      const pendaftars = {
        timestamps: dateFormat(new Date(), "dd/mm/yyyy HH:MM:ss"),
        datas: datas,
      };

      const path = Helpers.publicPath("uploads/datas/pendaftars.json");

      const jsonpendaftars = JSON.stringify(pendaftars);

      fs.writeFile(path, jsonpendaftars, function (err) {
        console.log(err);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Pendaftar;
