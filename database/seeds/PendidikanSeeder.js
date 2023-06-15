"use strict";

/*
|--------------------------------------------------------------------------
| PendidikanSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Pendidikan = use("App/Models/Pendidikan");

class PendidikanSeeder {
  async run() {
    await Pendidikan.createMany([
      {
        name: "TIDAK SEKOLAH",
      },
      {
        name: "PUTUS SD",
      },
      {
        name: "SD Sederajat",
      },
      {
        name: "SMP Sederajat",
      },
      {
        name: "SMA Sederajat",
      },
      {
        name: "D1",
      },
      {
        name: "D2",
      },
      {
        name: "D3",
      },
      {
        name: "D4/S1",
      },
      {
        name: "S2",
      },
      {
        name: "S3",
      },
    ]);
  }
}

module.exports = PendidikanSeeder;
