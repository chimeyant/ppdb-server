'use strict'

/*
|--------------------------------------------------------------------------
| ParamPrestasiSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const ParamPrestasi = use("App/Models/ParamPrestasi")

class ParamPrestasiSeeder {
  async run() {
    await ParamPrestasi.createMany([
      {
        name: "Juara Tiga Tingkat Kabupaten/Kota",
        skor: 5,
      },
      {
        name: "Juara Dua Tingkat Kabupaten/Kota",
        skor: 10,
      },
      {
        name: "Juara Satu Tingkat Kabupaten/Kota",
        skor: 15,
      },
      {
        name: "Juara Tiga Tingkat Provinsi",
        skor: 20,
      },
      {
        name: "Juara Dua Tingkat Provinsi",
        skor: 25,
      },
      {
        name: "Juara Satu Tingkat Provinsi",
        skor: 30,
      },
      {
        name: "Juara Harapan Tiga Tingkat Nasional",
        skor: 35,
      },
      {
        name: "Juara Harapan Dua Tingkat Nasional ",
        skor: 40,
      },
      {
        name: "Juara Harapan Satu Tingkat Nasional",
        skor: 45,
      },
      {
        name: "Juara Tiga Tingkat Nasional",
        skor: 50,
      },
      {
        name: "Juara Dua Tingkat Nasional",
        skor: 55,
      },
      {
        name: "Juara Satu Tingkat Nasional",
        skor: 60,
      },
      {
        name: "Juara Harapan Tiga Tingkat Internasional",
        skor: 65,
      },
      {
        name: "Juara Harapan Dua Tingkat Internasional",
        skor: 70,
      },
      {
        name: "Juara Harapan Satu Tingkat Internasional",
        skor: 75,
      },
      {
        name: "Juara Tiga Tingkat Internasional",
        skor: 80,
      },
      {
        name: "Juara Dua Tingkat Internasional",
        skor: 85,
      },
      {
        name: "Juara Satu Tingkat Internasional",
        skor: 90,
      },
    ])
  }
}

module.exports = ParamPrestasiSeeder
