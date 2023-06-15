"use strict";

/*
|--------------------------------------------------------------------------
| SatuanSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Satuan = use("App/Models/Satuan");

class SatuanSeeder {
  async run() {
    await Satuan.createMany([
      {
        nama: "Milimieter",
        inisial: "mm",
      },
      {
        nama: "Centimeter",
        inisial: "cm",
      },
      {
        nama: "Meter",
        inisial: "M",
      },
      {
        nama: "Gram",
        inisial: "Gr",
      },
      {
        nama: "Kilo Gram",
        inisial: "Kg",
      },
    ]);
  }
}

module.exports = SatuanSeeder;
