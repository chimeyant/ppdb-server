"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class JadwalUjianPeserta extends Model {
  sesi() {
    return this.belongsTo("App/Models/JadwalUjianSesi");
  }
}

module.exports = JadwalUjianPeserta;
