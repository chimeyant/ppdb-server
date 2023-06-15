'use strict'

/*
|--------------------------------------------------------------------------
| NilaiNaUmSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const ParamNilai = use("App/Models/ParamNilai");

class NilaiNaUmSeeder {
  async run() {
    await ParamNilai.createMany([
      {
        "kode": "NAUM",
        "name": "BOBOT NILAI AKHIR UMUM",
        "prosentase": "40"
      },
      {
        "kode": "NAPR",
        "name": "BOBOT NILAI AKHIR PRESTASI",
        "prosentase": "60"
      },
    ])
  }
}

module.exports = NilaiNaUmSeeder
