"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PekerjaanSchema extends Schema {
  up() {
    this.create("pekerjaans", (table) => {
      table.increments();
      table.string("kode");
      table.string("name");
      table.timestamps();
    });
  }

  down() {
    this.drop("pekerjaans");
  }
}

module.exports = PekerjaanSchema;
