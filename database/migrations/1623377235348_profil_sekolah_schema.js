'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfilSekolahSchema extends Schema {
  up() {
    this.table('profil_sekolahs', (table) => {
      // alter table
      table.string('bg').nullable()
      table.string('bg_nav').nullable()
      table.string('color').nullable()
      table.string('theme').nullable();
    })
  }

  down() {
    this.table('profil_sekolahs', (table) => {
      // reverse alternations
      table.dropColumn('bg')
      table.dropColumn('bg_nav')
      table.dropColumn('color')
      table.dropColumn('theme')
    })
  }
}

module.exports = ProfilSekolahSchema
