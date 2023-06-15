'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JadwalUjianAbsenSchema extends Schema {
  up() {
    this.create('jadwal_ujian_absens', (table) => {
      table.increments()
      table.bigInteger('jadwal_ujian_id')
      table.foreign('jadwal_ujian_id').references('id').on('jadwal_ujians').onDelete('cascade')
      table.bigInteger('jadwal_ujian_sesi_id').nullable()
      table.bigInteger('peserta_id')
      table.foreign('peserta_id').references('id').on('pesertas').onDelete('cascade')
      table.date('tanggal').nullable()
      table.time('jam_masuk').nullable()
      table.time('jam_keluar').nullable();
      table.decimal('nilai', 5, 2).defaultTo(0)
      table.boolean('status').defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('jadwal_ujian_absens')
  }
}

module.exports = JadwalUjianAbsenSchema
