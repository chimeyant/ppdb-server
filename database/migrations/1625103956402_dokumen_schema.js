'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DokumenSchema extends Schema {
  up() {
    this.create('dokumen', (table) => {
      table.increments()
      table.string('name');
      table.text('description').nullable()
      table.string('path').nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('dokumen')
  }
}

module.exports = DokumenSchema
