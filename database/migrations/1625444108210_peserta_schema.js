'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PesertaSchema extends Schema {
  up() {
    this.table('pesertas', (table) => {
      // alter table
      table.boolean('koperasi_status').defaultTo(false)
      table.string('koperasi_dokumen').nullable()
    })
  }

  down() {
    this.table('pesertas', (table) => {
      // reverse alternations
      table.dropColumn('koperasi_status')
      table.dropColumn('koperasi_dokumen');
    })
  }
}

module.exports = PesertaSchema
