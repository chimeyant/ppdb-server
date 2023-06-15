'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PengumumanSchema extends Schema {
  up() {
    this.create('pengumumen', (table) => {
      table.increments()
      table.string('title')
      table.text('body').nullable()
      table.bigInteger('user_id').nullable();
      table.boolean('status').defaultTo(true);
      table.timestamps()
    })
  }

  down() {
    this.drop('pengumumen')
  }
}

module.exports = PengumumanSchema
