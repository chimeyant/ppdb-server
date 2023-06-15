'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfilSekolahSchema extends Schema {
  up() {
    this.table('profil_sekolahs', (table) => {
      // alter table
      table.boolean('skck').defaultTo(false);
      table.boolean('butawarna').defaultTo(false)
    })
  }

  down() {
    this.table('profil_sekolahs', (table) => {
      // reverse alternations
      table.dropColumn('skck')
      table.dropColumn('butawarna')
    })
  }
}

module.exports = ProfilSekolahSchema
