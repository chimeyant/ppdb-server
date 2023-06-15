'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.table('users', (table) => {
      // alter table
      table.bigInteger('jurusan_id').nullable()
    })
  }

  down() {
    this.table('users', (table) => {
      // reverse alternations
      table.dropColumn('jurusan_id')
    })
  }
}

module.exports = UserSchema
