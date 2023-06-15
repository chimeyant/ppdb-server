"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments();
      table.string("username", 80).notNullable();
      table.string("email", 254).notNullable().unique();
      table.string("password", 60).notNullable();
      table.string("authent", 254).nullable();
      table.date("verified_at").nullable();
      table.string("avatar").nullable();
      table.bigInteger("peserta_id").nullable();
      table.boolean("status").defaultTo(true);
      table.timestamps();
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
