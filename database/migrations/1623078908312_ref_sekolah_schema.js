'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RefSekolahSchema extends Schema {
  up() {
    this.create('ref_sekolahs', (table) => {
      table.increments()
      table.bigInteger('province_id')
      table.bigInteger('regency_id');
      table.string('kode_prov').nullable()
      table.string('kode_rayon').nullable()
      table.string('kode_sr').nullable()
      table.string('kode_sek').nullable()
      table.string('npsn')
      table.string('name')
      table.timestamps()
    })
  }

  down() {
    this.drop('ref_sekolahs')
  }
}

module.exports = RefSekolahSchema
