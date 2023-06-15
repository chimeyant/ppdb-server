"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.table("users", (table) => {
      // alter table
      table.string("username", 255).alter();
    });
  }

  down() {
    this.table("users", (table) => {
      // reverse alternations
      //table.string("username").unique().alter();
    });
  }
}

module.exports = UserSchema;
