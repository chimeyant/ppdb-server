'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JadwalUjianHasilSchema extends Schema {
  up() {
    this.create('jadwal_ujian_hasils', (table) => {
      table.bigIncrements()
      table.bigInteger('jadwal_ujian_id');
      table.foreign('jadwal_ujian_id').references('id').on('jadwal_ujians').onDelete('cascade');
      table.bigInteger('jadwal_ujian_sesi_id').nullable()
      table.bigInteger('master_soal_id').nullable();
      table.bigInteger("master_soal_detail_id").nullable()
      table.bigInteger("peserta_id").nullable()
      table.integer('nomor').nullable()
      table.string('benar').nullable()
      table.string('jawaban').nullable()
      table.decimal("bobot", 5, 2).nullable()
      table.decimal('nilai', 5, 2).nullable()
      table.boolean('ragu').defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('jadwal_ujian_hasils')
  }
}

module.exports = JadwalUjianHasilSchema
