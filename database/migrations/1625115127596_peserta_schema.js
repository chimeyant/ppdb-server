'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PesertaSchema extends Schema {
  up() {
    this.table('pesertas', (table) => {
      // alter table
      table.string('daftar_ulang_dokumen').nullable()

    })
  }

  down() {
    this.table('pesertas', (table) => {
      // reverse alternations
      table.dropColumn('daftar_ulang_dokumen');
    })
  }
}

module.exports = PesertaSchema
