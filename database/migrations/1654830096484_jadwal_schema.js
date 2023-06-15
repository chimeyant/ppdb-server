"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class JadwalSchema extends Schema {
  up() {
    this.create("jadwals", (table) => {
      table.increments();
      table.string("title", 255);
      table.text("descriptions").nullable();
      table.string("tanggal").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("jadwals");
  }
}

module.exports = JadwalSchema;
