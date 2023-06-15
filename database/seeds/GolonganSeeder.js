"use strict";

/*
|--------------------------------------------------------------------------
| GolonganSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Golongan = use("App/Models/Golongan");

class GolonganSeeder {
  async run() {
    await Golongan.createMany([
      {
        name: "I/a",
      },
      {
        name: "I/b",
      },
      {
        name: "I/c",
      },
      {
        name: "I/d",
      },
      {
        name: "II/a",
      },
      {
        name: "II/b",
      },
      {
        name: "II/c",
      },
      {
        name: "II/d",
      },
      {
        name: "III/a",
      },
      {
        name: "III/b",
      },
      {
        name: "III/c",
      },
      {
        name: "III/d",
      },
      {
        name: "IV/a",
      },
      {
        name: "IV/b",
      },
      {
        name: "IV/c",
      },
      {
        name: "IV/d",
      },
      {
        name: "IV/e",
      },
    ]);
  }
}

module.exports = GolonganSeeder;
