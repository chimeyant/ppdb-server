'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfilSekolahSchema extends Schema {
  up() {
    this.table('profil_sekolahs', (table) => {
      // alter table
      table.jsonb('pesertas').nullable()
      table.integer('limit_sesi').defaultTo(100)
    })
  }

  down() {
    this.table('profil_sekolahs', (table) => {
      // reverse alternations
      table.dropColumn('pesertas')
      table.dropColumn('limit_sesi');
    })
  }
}

module.exports = ProfilSekolahSchema
