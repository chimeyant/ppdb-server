"use strict";

/*
|--------------------------------------------------------------------------
| SltpSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Jurusan = use("App/Models/Jurusan");

class SltpSeeder {
  async run() {
    await Jurusan.createMany([
      {
        pendidikan_id: 2,
        jurusan_id: "3",
        name: "SMP",
      },
      {
        pendidikan_id: 2,
        jurusan_id: "4",
        name: "Madrasah Tsanawiyah",
      },
      {
        pendidikan_id: 2,
        jurusan_id: "5",
        name: "KPA",
      },
      {
        pendidikan_id: 2,
        jurusan_id: "3793",
        name: "SMP PERSAMAAN",
      },
      {
        pendidikan_id: 2,
        jurusan_id: "3804",
        name: "STN",
      },
      {
        pendidikan_id: 2,
        jurusan_id: "4168",
        name: "UPS SMP",
      },
      {
        pendidikan_id: 2,
        jurusan_id: "4180",
        name: "SLTP",
      },
      {
        pendidikan_id: 2,
        jurusan_id: "4253",
        name: "MTS",
      },
      {
        pendidikan_id: 2,
        jurusan_id: "4352",
        name: "PKBM",
      },
      {
        pendidikan_id: 2,
        jurusan_id: "4440",
        name: "SMPN",
      },
    ]);
  }
}

module.exports = SltpSeeder;
