"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.table("users", (table) => {
      // alter table
      table.string("telepon").nullable();
    });
  }

  down() {
    this.table("users", (table) => {
      // reverse alternations
      table.dropColumn("telepon");
    });
  }
}

module.exports = UserSchema;
