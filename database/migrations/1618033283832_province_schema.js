"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProvinceSchema extends Schema {
  up() {
    this.create("provinces", (table) => {
      table.increments();
      table.string("name", 255);
      table.timestamps();
    });
  }

  down() {
    this.drop("provinces");
  }
}

module.exports = ProvinceSchema;
