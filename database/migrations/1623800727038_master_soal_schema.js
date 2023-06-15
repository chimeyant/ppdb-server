'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MasterSoalSchema extends Schema {
  up() {
    this.create('master_soals', (table) => {
      table.increments()
      table.string('mapel');
      table.string('keterangan');
      table.bigInteger('user_id');
      table.timestamps()
    })
  }

  down() {
    this.drop('master_soals')
  }
}

module.exports = MasterSoalSchema
