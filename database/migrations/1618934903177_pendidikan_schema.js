"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PendidikanSchema extends Schema {
  up() {
    this.create("pendidikans", (table) => {
      table.increments();
      table.string("name");
      table.timestamps();
    });
  }

  down() {
    this.drop("pendidikans");
  }
}

module.exports = PendidikanSchema;
