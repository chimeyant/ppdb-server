"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DistrictSchema extends Schema {
  up() {
    this.create("districts", (table) => {
      table.increments();
      table.bigInteger("regency_id");
      table.string("name", 255);
      table.timestamps();
    });
  }

  down() {
    this.drop("districts");
  }
}

module.exports = DistrictSchema;
