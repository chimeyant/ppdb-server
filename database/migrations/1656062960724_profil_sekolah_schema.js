"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProfilSekolahSchema extends Schema {
  up() {
    this.table("profil_sekolahs", (table) => {
      // alter table
      table.date("tanggal_pengumuman").nullable();
      table.string("jam_pengumuman").nullable();
    });
  }

  down() {
    this.table("profil_sekolahs", (table) => {
      // reverse alternations
      table.dropColumn("tanggal_pengumuman");
      table.dropColumn("jam_pengumuman");
    });
  }
}

module.exports = ProfilSekolahSchema;
