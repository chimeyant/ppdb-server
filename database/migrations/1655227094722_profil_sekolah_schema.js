"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProfilSekolahSchema extends Schema {
  up() {
    this.table("profil_sekolahs", (table) => {
      // alter table
      table.boolean("tanpa_berkas").defaultTo(false);
      table.string("regby").defaultTo("email");
    });
  }

  down() {
    this.table("profil_sekolahs", (table) => {
      // reverse alternations
      table.dropColumn("tanpa_berkas");
      table.dropColumn("regby");
    });
  }
}

module.exports = ProfilSekolahSchema;
