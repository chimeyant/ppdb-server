"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ParamNilaiSchema extends Schema {
  up() {
    this.create("param_nilais", (table) => {
      table.increments();
      table.string("kode").unique();
      table.string("name");
      table.integer("prosentase").defaultTo(0);
      table.boolean("is_active").defaultTo(true);
      table.timestamps();
    });
  }

  down() {
    this.drop("param_nilais");
  }
}

module.exports = ParamNilaiSchema;
