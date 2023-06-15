'use strict'

/*
|--------------------------------------------------------------------------
| RefSekolahPkbmSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const RefSekolah = use("App/Models/RefSekolah")

class RefSekolahPkbmSeeder {
  async run() {
    await RefSekolah.createMany([
      {
        "id": '9999',
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": null,
        "kode_rayon": null,
        "kode_sr": null,
        "kode_sek": null,
        "npsn": null,
        "name": "PKBM"
      },
    ]

    )
  }
}

module.exports = RefSekolahPkbmSeeder
