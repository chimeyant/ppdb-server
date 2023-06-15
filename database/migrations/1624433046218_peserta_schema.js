'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PesertaSchema extends Schema {
  up() {
    this.table('pesertas', (table) => {
      // alter table
      table.decimal('nilai_akhir', 5, 2).defaultTo(0)
    })
  }

  down() {
    this.table('pesertas', (table) => {
      // reverse alternations\tab z
      table.dropColumn('nilai_akhir')
    })
  }
}

module.exports = PesertaSchema
