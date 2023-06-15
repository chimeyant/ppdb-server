'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PesertaSchema extends Schema {
  up() {
    this.table('pesertas', (table) => {
      // alter table
      table.decimal('nilai_akhir_umum', 5, 2).defaultTo(0)
      table.decimal('nilai_akhir_prestasi', 5, 2).defaultTo(0);
    })
  }

  down() {
    this.table('pesertas', (table) => {
      // reverse alternations
      table.dropColumn('nilai_akhir_umum')
      table.dropColumn('nilai_akhir_prestasi')
    })
  }
}

module.exports = PesertaSchema
