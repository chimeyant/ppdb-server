"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PersyaratanSchema extends Schema {
  up() {
    this.create("persyaratans", (table) => {
      table.increments();
      table.text("persyaratan");
      table.timestamps();
    });
  }

  down() {
    this.drop("persyaratans");
  }
}

module.exports = PersyaratanSchema;
