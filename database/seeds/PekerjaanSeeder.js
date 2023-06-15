"use strict";

/*
|--------------------------------------------------------------------------
| PekerjaanSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Pekerjaan = use("App/Models/Pekerjaan");

class PekerjaanSeeder {
  async run() {
    await Pekerjaan.createMany([
      {
        kode: "01",
        name: "Tidak Berkerja",
      },
      {
        kode: "02",
        name: "Nelayan",
      },
      {
        kode: "03",
        name: "Petani",
      },
      {
        kode: "04",
        name: "Peternak",
      },
      {
        kode: "05",
        name: "PNS/TNI/Polri",
      },
      {
        kode: "06",
        name: "Karyawan Swasta",
      },
      {
        kode: "07",
        name: "Pedagang Kecil",
      },
      {
        kode: "08",
        name: "Pedagang Besar",
      },
      {
        kode: "09",
        name: "Wiraswasta",
      },
      {
        kode: "10",
        name: "Wirausaha",
      },
      {
        kode: "11",
        name: "Buruh",
      },
      {
        kode: "12",
        name: "Pensiunan",
      },
      {
        kode: "13",
        name: "Tenaga Kerja Indonesia",
      },
      {
        kode: "14",
        name: "Tidak Dapat Diterapkan",
      },
      {
        kode: "15",
        name: "Sudah Meninggal",
      },
      {
        kode: "99",
        name: "Lainnya",
      },
    ]);
  }
}

module.exports = PekerjaanSeeder;
