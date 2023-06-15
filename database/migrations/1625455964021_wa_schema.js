'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WaSchema extends Schema {
  up() {
    this.alter('was', (table) => {
      // alter table
      table.text('pesan').nullable().alter()
    })
  }

  down() {
    this.alter('was', (table) => {
      // reverse alternations
      table.string('pesan').nullable().alter()
    })
  }
}

module.exports = WaSchema
