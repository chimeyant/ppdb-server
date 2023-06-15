"use strict";

/*
|--------------------------------------------------------------------------
| SpecialiSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Jurusan = use("App/Models/Jurusan");

class SpecialiSeeder {
  async run() {
    await Jurusan.createMany([
      {
        jurusan_id: "3715",
        name: "S I IPS PPKN",
      },
      {
        jurusan_id: "3716",
        name: "Spesialis I Kandungan",
      },
      {
        jurusan_id: "3717",
        name: "Spesialis I Obstetri/Ginekologi",
      },
      {
        jurusan_id: "3718",
        name: "Spesialis I Mata",
      },
      {
        jurusan_id: "3719",
        name: "Spesialis I THT",
      },
      {
        jurusan_id: "3720",
        name: "Spesialis I Kulit dan Kelamin",
      },
      {
        jurusan_id: "3721",
        name: "Spesialis I Penyakit Dalam",
      },
      {
        jurusan_id: "3722",
        name: "Spesialis I Jantung",
      },
      {
        jurusan_id: "3723",
        name: "S-1  PLS",
      },
      {
        jurusan_id: "3724",
        name: "Spesialis I Radiologi",
      },
      {
        jurusan_id: "3725",
        name: "Spesialis I Saraf",
      },
      {
        jurusan_id: "3726",
        name: "S-1 PLS",
      },
      {
        jurusan_id: "3727",
        name: "Spesialis I Psikiatri",
      },
      {
        jurusan_id: "3728",
        name: "Spesialis I Fisio Terapi",
      },
      {
        jurusan_id: "3729",
        name: "Spesialis I Parasitologi",
      },
      {
        jurusan_id: "3730",
        name: "Spesialis I Farmakologi",
      },
      {
        jurusan_id: "3731",
        name: "Spesialis I Microbiologi",
      },
      {
        jurusan_id: "3732",
        name: "Spesialis I Urolog",
      },
      {
        jurusan_id: "3733",
        name: "Spesialis I Laboran",
      },
      {
        jurusan_id: "3734",
        name: "Spesialis I Ortopedi",
      },
      {
        jurusan_id: "3735",
        name: "Spesialis I Pathologi",
      },
      {
        jurusan_id: "3736",
        name: "S-1",
      },
      {
        jurusan_id: "4074",
        name: "Magister Epidemiologi",
      },
      {
        jurusan_id: "4385",
        name: "S 1 GEOGRAPI",
      },
      {
        jurusan_id: "4397",
        name: "S I PENDIDIKAN BAHASA SENI",
      },
    ]);
  }
}

module.exports = SpecialiSeeder;
