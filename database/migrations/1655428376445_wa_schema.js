"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class WaSchema extends Schema {
  up() {
    this.table("was", (table) => {
      // alter table
      table.string("jenis_informasi").nullable();
    });
  }

  down() {
    this.table("was", (table) => {
      // reverse alternations
      table.dropColumn("jenis_informasi");
    });
  }
}

module.exports = WaSchema;
