'use strict'

/*
|--------------------------------------------------------------------------
| AddSekolahMuhamadiyahSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const RefSekolah = use("App/Models/RefSekolah")

class AddSekolahMuhamadiyahSeeder {
  async run() {
    await RefSekolah.createMany([
      {

        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": null,
        "kode_rayon": null,
        "kode_sr": null,
        "kode_sek": null,
        "npsn": '20606254',
        "name": "SMP MUHAMMADIYAH"
      },
    ]

    )
  }
}

module.exports = AddSekolahMuhamadiyahSeeder
