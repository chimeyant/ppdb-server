'use strict'

/*
|--------------------------------------------------------------------------
| NilaiWawancaraSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const ParamNilai = use("App/Models/ParamNilai");

class NilaiWawancaraSeeder {
  async run() {
    await ParamNilai.createMany([
      {
        "kode": "NWC",
        "name": "Nilai Wawancara",
        "prosentase": "100"
      },
    ])
  }
}

module.exports = NilaiWawancaraSeeder
