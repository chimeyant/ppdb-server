'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ParamPrestasiSchema extends Schema {
  up() {
    this.create('param_prestasis', (table) => {
      table.increments()
      table.string('name').nullable();
      table.integer('skor').nullable();
      table.timestamps()
    })
  }

  down() {
    this.drop('param_prestasis')
  }
}

module.exports = ParamPrestasiSchema
