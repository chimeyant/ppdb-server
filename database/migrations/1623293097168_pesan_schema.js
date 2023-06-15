'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PesanSchema extends Schema {
  up() {
    this.create('pesans', (table) => {
      table.bigIncrements()
      table.string('title');
      table.text('body').nullable();
      table.bigInteger('from_id').nullable();
      table.bigInteger('to_id').nullable();
      table.boolean('public').default('false');
      table.date('tanggal').nullable();
      table.boolean('status').default(false);
      table.timestamps()
    })
  }

  down() {
    this.drop('pesans')
  }
}

module.exports = PesanSchema
