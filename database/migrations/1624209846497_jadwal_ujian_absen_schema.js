'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JadwalUjianAbsenSchema extends Schema {
  up() {
    this.table('jadwal_ujian_absens', (table) => {
      // alter table
      table.integer('time_left').defaultTo(0)
      table.boolean('selesai').defaultTo(false)
    })
  }

  down() {
    this.table('jadwal_ujian_absens', (table) => {
      // reverse alternations
      table.dropColumn('time_left')
      table.dropColumn('selesai');
    })
  }
}

module.exports = JadwalUjianAbsenSchema
