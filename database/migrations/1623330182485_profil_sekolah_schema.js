'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfilSekolahSchema extends Schema {
  up() {
    this.table('profil_sekolahs', (table) => {
      // alter table
      table.date('tanggal_mulai').nullable();
      table.date('tanggal_selesai').nullable()
    })
  }

  down() {
    this.table('profil_sekolahs', (table) => {
      // reverse alternations
      table.dropColumn('tanggal_mulai');
      table.dropColumn('tanggal_selesai');
    })
  }
}

module.exports = ProfilSekolahSchema
