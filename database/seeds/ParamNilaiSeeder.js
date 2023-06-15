"use strict";

/*
|--------------------------------------------------------------------------
| ParamNilaiSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const ParamNilai = use("App/Models/ParamNilai");

class ParamNilaiSeeder {
  async run() {
    await ParamNilai.createMany([
      {
        "kode":"RPT",
        "name":"NILAI RAPOR",
        "prosentase":"40"
        },
        {
        "kode":"NTR",
        "name":"Nilai Teori",
        "prosentase":"60"
        },
        {
        "kode":"UM",
        "name":"Jalur Umum",
        "prosentase":"80"
        },
        {
        "kode":"AFR",
        "name":"Jalur Afirmasi",
        "prosentase":"10"
        },
        {
        "kode":"PRT",
        "name":"Jalur Prestasi",
        "prosentase":"10"
        }
    ]);
  }
}

module.exports = ParamNilaiSeeder;
