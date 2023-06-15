'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfilSekolahSchema extends Schema {
  up() {
    this.table('profil_sekolahs', (table) => {
      // alter table
      table.string('url').nullable();
      table.boolean('sms').nullable()
    })
  }

  down() {
    this.table('profil_sekolahs', (table) => {
      // reverse alternations
      table.dropColumn('url')
      table.dropColumn('sms')
    })
  }
}

module.exports = ProfilSekolahSchema
