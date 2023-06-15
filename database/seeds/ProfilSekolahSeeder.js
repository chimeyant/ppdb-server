"use strict";

/*
|--------------------------------------------------------------------------
| ProfilSekolahSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const ProfilSekolah = use("App/Models/ProfilSekolah");

class ProfilSekolahSeeder {
  async run() {
    await ProfilSekolah.createMany([
      {
        id: 1,
        npsn: "12345678",
        nama: "Nama SMK",
        program_keahlian: "Jurusan/Program Keahlian",
      },
    ]);
  }
}

module.exports = ProfilSekolahSeeder;
