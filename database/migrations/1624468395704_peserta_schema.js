'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PesertaSchema extends Schema {
  up() {
    this.table('pesertas', (table) => {
      // alter table
      table.string('prioritas').nullable()
    })
  }

  down() {
    this.table('pesertas', (table) => {
      // reverse alternations
      table.dropColumn('prioritas');
    })
  }
}

module.exports = PesertaSchema
