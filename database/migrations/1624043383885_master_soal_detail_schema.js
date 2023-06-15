'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MasterSoalDetailSchema extends Schema {
  up() {
    this.create('master_soal_details', (table) => {
      table.increments()
      table.bigInteger('master_soal_id');
      table.foreign('master_soal_id').references('id').on('master_soals').onDelete('cascade');
      table.integer('nomor').nullable();
      table.text('soal').nullable();
      table.string('soal_gambar');
      table.text('pilihan_a').nullable();
      table.string('pilihan_a_gambar').nullable()
      table.text('pilihan_b').nullable()
      table.string('pilihan_b_gambar').nullable()
      table.text('pilihan_c').nullable()
      table.string('pilihan_c_gambar').nullable()
      table.text('pilihan_d').nullable()
      table.string("pilihan_d_gambar").nullable()
      table.text("pilihan_e").nullable()
      table.string("pilihan_e_gambar").nullable()
      table.string('jawaban').nullable()
      table.decimal('bobot', 5, 2).nullable();
      table.timestamps()
    })
  }

  down() {
    this.drop('master_soal_details')
  }
}

module.exports = MasterSoalDetailSchema
