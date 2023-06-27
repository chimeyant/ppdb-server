"use strict";

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
const Factory = use("Factory");
const ParamPrestasi = use("App/Models/ParamPrestasi");

class ParamPrestasiSeeder {
  async run() {
    await ParamPrestasi.createMany([
      {
        name: "Juara 3 Tingkat Kota/Kabupaten",
        skor: 5,
      },
      {
        name: "Juara 2 Tingkat Kota/Kabupaten",
        skor: 10,
      },
      {
        name: "Juara 1 Tingkat Kota/Kabupaten",
        skor: 15,
      },
      {
        name: "Juara 3 Tingkat Provinsi",
        skor: 20,
      },
      {
        name: "Juara 2 Tingkat Provinsi",
        skor: 25,
      },
      {
        name: "Juara 2 Tingkat Provinsi",
        skor: 30,
      },
      {
        name: "Juara Harapan 3 Tingkat Nasional",
        skor: 35,
      },
      {
        name: "Juara Harapan 2 Tingkat Nasional ",
        skor: 40,
      },
      {
        name: "Juara Harapan 1 Tingkat Nasional",
        skor: 45,
      },
      {
        name: "Juara 3 Tingkat Nasional",
        skor: 50,
      },
      {
        name: "Juara 2 Tingkat Nasional",
        skor: 55,
      },
      {
        name: "Juara 1 Tingkat Nasional",
        skor: 60,
      },
      {
        name: "Juara Harapan 3 Tingkat Internasional",
        skor: 65,
      },
      {
        name: "Juara Harapan 2 Tingkat Internasional",
        skor: 70,
      },
      {
        name: "Juara Harapan 1 Tingkat Internasional",
        skor: 75,
      },
      {
        name: "Juara 3 Tingkat Internasional",
        skor: 80,
      },
      {
        name: "Juara 2 Tingkat Internasional",
        skor: 85,
      },
      {
        name: "Juara 1 Tingkat Internasional",
        skor: 90,
      },
    ]);
  }
}

module.exports = ParamPrestasiSeeder;
