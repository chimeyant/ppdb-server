"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Peserta extends Model {
  jadwal_ujian_peserta() {
    return this.hasOne("App/Models/JadwalUjianPeserta", "id", "peserta_id");
  }
}

module.exports = Peserta;
