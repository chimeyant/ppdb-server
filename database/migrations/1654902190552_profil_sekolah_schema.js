"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProfilSekolahSchema extends Schema {
  up() {
    this.table("profil_sekolahs", (table) => {
      // alter table
      table.boolean("showpagu").defaultTo(false);
      table.boolean("slider").defaultTo(false);
    });
  }

  down() {
    this.table("profil_sekolahs", (table) => {
      // reverse alternations
      table.dropColumn("showpagu");
      table.dropColumn("slider");
    });
  }
}

module.exports = ProfilSekolahSchema;
