"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class VillageSchema extends Schema {
  up() {
    this.create("villages", (table) => {
      table.bigIncrements();
      table.bigInteger("district_id");
      table.string("name", 255);
      table.timestamps();
    });
  }

  down() {
    this.drop("villages");
  }
}

module.exports = VillageSchema;
