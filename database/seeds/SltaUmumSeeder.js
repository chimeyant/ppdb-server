"use strict";

/*
|--------------------------------------------------------------------------
| SltaUmumSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Jurusan = use("App/Models/Jurusan");

class SltaUmumSeeder {
  async run() {
    await Jurusan.createMany([
      {
        pendidikan_id: 4,
        jurusan_id: "52",
        name: "Sekolah Menengah Atas",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "53",
        name: "SMA",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "54",
        name: "SMA PERSAMAAN",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "55",
        name: "SMA A.2 / Biologi",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "56",
        name: "SMA A.3 / IPS",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "57",
        name: "SMA A.4 / Bahasa",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "58",
        name: "SMA Paket A",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "59",
        name: "SMA Paket B",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "60",
        name: "SMA Paket C",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "61",
        name: "PK",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "62",
        name: "Madrasah Aliyah",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "63",
        name: "MA A.1 / Fisika",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "64",
        name: "MA A.2 / Biologi",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "65",
        name: "MA A.3 / IPS",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "66",
        name: "MA A.4 / Bahasa",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "67",
        name: "KPAA",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "68",
        name: "SERJANA",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "3762",
        name: "SMU",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "3817",
        name: "SMA NEGERI",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "3824",
        name: "SEMA",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "3844",
        name: "KPAAN",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "3866",
        name: "SMA/IPA",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "3915",
        name: "SLTA UMUM",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "3925",
        name: "SMEA",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "3948",
        name: "SMA KIMIA",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "4011",
        name: "PERBENDAHARAAN",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "4056",
        name: "SMA FARMASI",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "4067",
        name: "PLS",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "4186",
        name: "SMA PROGRAM B",
      },

      {
        pendidikan_id: 4,
        jurusan_id: "4362",
        name: "SMU PROGRAM KHUSUS",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "4465",
        name: "SMU/ALIYAH",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "4546",
        name: "SMAN",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "4608",
        name: "SAA - ASISTEN APOTEKER",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "4609",
        name: "SMA A.1 / Fisika",
      },
      {
        pendidikan_id: 4,
        jurusan_id: "4653",
        name: "SMU IPS",
      },
    ]);
  }
}

module.exports = SltaUmumSeeder;
