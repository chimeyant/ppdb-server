"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class RegencySchema extends Schema {
  up() {
    this.create("regencies", (table) => {
      table.increments();
      table.bigInteger("province_id");
      table.string("name");
      table.timestamps();
    });
  }

  down() {
    this.drop("regencies");
  }
}

module.exports = RegencySchema;
