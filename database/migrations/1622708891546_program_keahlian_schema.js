"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProgramKeahlianSchema extends Schema {
  up() {
    this.create("program_keahlians", (table) => {
      table.increments();
      table.string("name");
      table.string("singkat").nullable();
      table.integer("pagu").defaultTo(0);
      table.string("warna").nullable();
      table.string("logo").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("program_keahlians");
  }
}

module.exports = ProgramKeahlianSchema;
