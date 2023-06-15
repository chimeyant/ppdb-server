"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProfilSekolahSchema extends Schema {
  up() {
    this.table("profil_sekolahs", (table) => {
      // alter table
      table.string("ketua_panitia_nama").nullable();
      table.string("ketua_panitia_nip").nullable();
      table.string("titi_mangsa_ttd").nullable();
    });
  }

  down() {
    this.table("profil_sekolahs", (table) => {
      // reverse alternations
      table.dropColumn("ketua_panitia_nama");
      table.dropColumn("ketua_panitia_nip");
      table.dropColumn("titi_mangsa_ttd");
    });
  }
}

module.exports = ProfilSekolahSchema;
