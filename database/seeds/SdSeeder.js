"use strict";

/*
|--------------------------------------------------------------------------
| SdSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Jurusan = use("App/Models/Jurusan");

class SdSeeder {
  async run() {
    await Jurusan.createMany([
      {
        pendidikan_id: 1,
        jurusan_id: "1",
        name: "SD",
      },
      {
        pendidikan_id: 1,
        jurusan_id: "2",
        name: "MADRASYAH IBTIDAIYAH",
      },
      {
        pendidikan_id: 1,
        jurusan_id: "3806",
        name: "S.I",
      },
      {
        pendidikan_id: 1,
        jurusan_id: "4117",
        name: "UPSD",
      },
      {
        pendidikan_id: 1,
        jurusan_id: "4129",
        name: "SDN",
      },
      {
        pendidikan_id: 1,
        jurusan_id: "4641",
        name: "MADRASAH TSANAWIYAH",
      },
    ]);
  }
}

module.exports = SdSeeder;
