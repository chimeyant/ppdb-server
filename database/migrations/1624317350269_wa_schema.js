'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WaSchema extends Schema {
  up() {
    this.create('was', (table) => {
      table.increments()
      table.string('name')
      table.string('nomor')
      table.string('pesan')
      table.string('status')
      table.timestamps()
    })
  }

  down() {
    this.drop('was')
  }
}

module.exports = WaSchema
