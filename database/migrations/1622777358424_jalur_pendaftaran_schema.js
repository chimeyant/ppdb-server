"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class JalurPendaftaranSchema extends Schema {
  up() {
    this.create("jalur_pendaftarans", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.text("keterangan").nullable();
      table.decimal("kuota", 4, 2).nullable();
      table.integer("prosentasi").nullable();
      table.boolean("is_active").defaultTo(true);
      table.timestamps();
    });
  }

  down() {
    this.drop("jalur_pendaftarans");
  }
}

module.exports = JalurPendaftaranSchema;
