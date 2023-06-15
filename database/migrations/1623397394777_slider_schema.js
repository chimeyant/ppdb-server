'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SliderSchema extends Schema {
  up() {
    this.create('sliders', (table) => {
      table.increments()
      table.string('title')
      table.text('subtitle').nullable()
      table.text('body').nullable()
      table.string('path').nullable()
      table.boolean('status').defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('sliders')
  }
}

module.exports = SliderSchema
