"use strict";

/*
|--------------------------------------------------------------------------
| SltpKejuruanSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Jurusan = use("App/Models/Jurusan");

class SltpKejuruanSeeder {
  async run() {
    await Jurusan.createMany([
      {
        pendidikan_id: 3,
        jurusan_id: "6",
        name: "SMEP",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "7",
        name: "SMPP",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "8",
        name: "SKKP",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "9",
        name: "SKKP Rumah Tangga",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "10",
        name: "SKKP Tata Laksana Rumah Tangga",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "11",
        name: "SKKP Memasak",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "12",
        name: "SKKP Tata Boga",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "13",
        name: "SKKP Tata Laksana Makanan",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "14",
        name: "SKKP Menjahit",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "15",
        name: "SKKP Tata Laksana Pakaian",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "16",
        name: "SKP",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "17",
        name: "SLTP Bidang Kesehatan",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "18",
        name: "Sekolah Juru Rawat",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "19",
        name: "Sekolah Juru Rawat A/1",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "20",
        name: "Sekolah Juru Rawat B/1",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "21",
        name: "Sekolah Penjenang Kes",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "22",
        name: "Sekolah Penjenang Kes. A/B",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "23",
        name: "Sekolah Penjenang Kes. B",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "24",
        name: "Sekolah Penjenang Kes. C",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "25",
        name: "Sekolah Penjenang Kes. D",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "26",
        name: "Sekolah Penjenang Kes. E",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "27",
        name: "Sekolah Penjenang Kes. F",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "28",
        name: "Sekolah Penjenang Kes. G",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "29",
        name: "Sekolah Penjenang Kes. U",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "30",
        name: "Sekolah Pekarya Kesehatan",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "31",
        name: "Sekolah Penyusun Makanan Rakyat",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "32",
        name: "Sekolah Teknik Produksi Pertanian",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "33",
        name: "Sekolah Usaha Perikanan Pertama",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "34",
        name: "Sekolah Kerajinan",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "35",
        name: "Sekolah Kerajinan Perabot Rumah Tangga",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "36",
        name: "Sekolah Kerajinan Besi",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "37",
        name: "Sekolah Kerajinan Kulit",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "38",
        name: "Sekolah Kerajinan Penyamakan Kulit",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "39",
        name: "SLTP Kelautan",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "40",
        name: "Sekolah Menengah Pelayaran Pertama",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "41",
        name: "Mualim Pelayaran Terbatas",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "42",
        name: "Sekolah Teknik",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "43",
        name: "ST",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "44",
        name: "SGB",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "45",
        name: "SLTP Kejuruan 4 Tahun",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "46",
        name: "PGA 6 TH",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "47",
        name: "PGA Islam 4 Tahun",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "48",
        name: "PGA Kristen 4 Tahun",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "49",
        name: "PGA Katholik 4 Tahun",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "50",
        name: "PGA Hindu 4 Tahun",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "51",
        name: "PGA Budha 4 Tahun",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "3768",
        name: "PGAN",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "3769",
        name: "PGSD",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "3834",
        name: "SLTP",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "3978",
        name: "PASPAL",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "4028",
        name: "STN",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "4136",
        name: "SLTP PERSAMAAN",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "4158",
        name: "PSGB",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "4361",
        name: "SPG",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "4374",
        name: "RBB",
      },
      {
        pendidikan_id: 3,
        jurusan_id: "4375",
        name: "KPG",
      },
    ]);
  }
}

module.exports = SltpKejuruanSeeder;
