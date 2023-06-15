'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfilSekolahSchema extends Schema {
  up() {
    this.table('profil_sekolahs', (table) => {
      // alter table
      table.time('jam_mulai').defaultTo('00:00:00');
      table.time('jam_selesai').defaultTo('23:00:00');
      table.boolean('materai').defaultTo(false)
    })
  }

  down() {
    this.table('profil_sekolahs', (table) => {
      // reverse alternations
      table.dropColumn('jam_mulai')
      table.dropColumn('jam_selesai')
      table.dropColumn('materai')
    })
  }
}

module.exports = ProfilSekolahSchema
