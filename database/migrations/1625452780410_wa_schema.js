'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WaSchema extends Schema {
  up() {
    this.table('was', (table) => {
      // alter table
      table.string('nomor_register').nullable()

    })
  }

  down() {
    this.table('was', (table) => {
      // reverse alternations
      table.dropColumn('nomor_register')
    })
  }
}

module.exports = WaSchema
