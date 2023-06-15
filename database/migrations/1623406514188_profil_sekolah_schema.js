'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfilSekolahSchema extends Schema {
  up() {
    this.table('profil_sekolahs', (table) => {
      // alter table
      table.string('apps_name').nullable()
      table.string('apps_ver').nullable();
      table.string('apps_desc').nullable()
    })
  }

  down() {
    this.table('profil_sekolahs', (table) => {
      // reverse alternations
      table.dropColumn('apps_name');
      table.dropColumn('apps_ver');
      table.dropColumn('apps_desc');
    })
  }
}

module.exports = ProfilSekolahSchema
