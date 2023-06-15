'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WaSchema extends Schema {
  up() {
    this.alter('was', (table) => {
      // alter table
      table.boolean('status').defaultTo(false).alter()
    })
  }

  down() {
    this.alter('was', (table) => {
      // reverse alternations
      table.string('status').alter()
    })
  }
}

module.exports = WaSchema
