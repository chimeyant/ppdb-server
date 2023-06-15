'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JadwalUjianSesiSchema extends Schema {
  up() {
    this.create('jadwal_ujian_sesis', (table) => {
      table.increments()
      table.string('name')
      table.time('jam_mulai');
      table.time('jam_selesai');
      table.timestamps()
    })
  }

  down() {
    this.drop('jadwal_ujian_sesis')
  }
}

module.exports = JadwalUjianSesiSchema
