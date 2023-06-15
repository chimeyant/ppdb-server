'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfilSekolahSchema extends Schema {
  up() {
    this.table('profil_sekolahs', (table) => {
      // alter table
      table.text('apikey').nullable();

    })
  }

  down() {
    this.table('profil_sekolahs', (table) => {
      // reverse alternations
      table.dropColumn('apikey')
    })
  }
}

module.exports = ProfilSekolahSchema
