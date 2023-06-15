'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JadwalUjianSchema extends Schema {
  up() {
    this.create('jadwal_ujians', (table) => {
      table.increments()
      table.string('name')
      table.bigInteger('program_keahlian_id');
      table.bigInteger('master_soal_id_1').nullable()
      table.bigInteger('master_soal_id_2').nullable()
      table.date('tanggal');
      table.integer('waktu');
      table.decimal('bobot', 5, 2).nullable()
      table.integer('jumlah_soal_1').nullable()
      table.integer('jumlah_soal_2').nullable();
      table.integer('jumlah_soal').nullable()
      table.integer('jumlah_per_sesi').nullable();
      table.boolean('isToken').default(false);
      table.boolean('isRandom').default(true);
      table.timestamps()
    })
  }

  down() {
    this.drop('jadwal_ujians')
  }
}

module.exports = JadwalUjianSchema
