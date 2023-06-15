"use strict";

/*
|--------------------------------------------------------------------------
| SltaKejuruanSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Jurusan = use("App/Models/Jurusan");

class SltaKejuruanSeeder {
  async run() {
    await Jurusan.createMany([
      {
        pendidikan_id: 5,
        jurusan_id: "69",
        name: "Sekolah Menengah Ekonomi Atas",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "70",
        name: "SMEA",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "71",
        name: "SMEA Tata Usaha",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "72",
        name: "SMEA Tata Usaha Kesekretariatan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "73",
        name: "SMEA Tata Kesekretariatan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "74",
        name: "SMEA TATA NIAGA",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "75",
        name: "SMEA Tata Perusahaan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "76",
        name: "SMEA Tata Buku",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "77",
        name: "SMEA Tata Laksana",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "78",
        name: "SMEA Tata Persuratan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "79",
        name: "SMEA Kesekretariatan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "80",
        name: "SMEA Koperasi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "81",
        name: "SMEA Perusahaan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "82",
        name: "SMEA Administrasi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "83",
        name: "SMEA Administrasi Perkantoran",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "84",
        name: "SMEA Ekonomi Perusahaan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "85",
        name: "SMEA Keuangan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "86",
        name: "SMEA Perdagangan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "87",
        name: "SMEA Perkantoran",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "88",
        name: "SMEA Paket A",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "89",
        name: "SMEA Paket B",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "90",
        name: "SMEA Paket C",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "91",
        name: "SKKA",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "92",
        name: "SMK TATA BOGA",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "93",
        name: "SKKA Tata Laksana Makanan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "94",
        name: "SKKA Memasak",
      },
      {
        jurusan_id: "95",
        name: "SKKA Makanan/Masakan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "96",
        name: "SKKA Tata Busana",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "97",
        name: "SKKA Tata Laksana Pakaian",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "98",
        name: "SKKA Pakaian",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "99",
        name: "SKKA Tekstil",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "100",
        name: "SKKA Menjahit",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "101",
        name: "SKKA Kerajinan Batik",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "102",
        name: "SKKA Tata Laksana Rumah Tangga",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "103",
        name: "SKKA Tata Graha",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "104",
        name: "SKKA Rumah Tangga",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "105",
        name: "SKKA Pendidikan Anak",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "106",
        name: "SLTA TATANIAGA",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "107",
        name: "Sekolah Pendidikan Guru",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "108",
        name: "SPGN PURWAKARTA",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "109",
        name: "SPG Pendidikan TK",
      },

      {
        pendidikan_id: 5,
        jurusan_id: "111",
        name: "PGSLP",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "112",
        name: "PGSMTP",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "113",
        name: "SGA",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "114",
        name: "SGPT",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "115",
        name: "SMOA",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "116",
        name: "SGO",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "117",
        name: "PGA 6 Tahun",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "118",
        name: "PGAN 6 Tahun",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "119",
        name: "PGA Kristen 6 Tahun",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "120",
        name: "PGA Katholik 6 Tahun",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "121",
        name: "PGA Budha 6 Tahun",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "122",
        name: "PGA Hindu 6 Tahun",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "123",
        name: "KPG KEGURUAN",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "124",
        name: "KPG Paket A",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "125",
        name: "KPG Paket B",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "126",
        name: "KPG Paket C",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "127",
        name: "SPPH",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "128",
        name: "Sekolah Perawat Kesejahteraan Keluarga",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "129",
        name: "Sekolah Perawat Kesehatan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "130",
        name: "SPK",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "131",
        name: "Sekolah Pengatur Rawat",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "132",
        name: "Sekolah Penilik Kesehatan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "133",
        name: "Sekolah Kebidanan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "134",
        name: "Sekolah Guru Bidan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "135",
        name: "Sekolah Menengah Analis Kesehatan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "136",
        name: "SMAK",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "137",
        name: "Sekolah Pengatur Teknik Gigi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "138",
        name: "Sekolah Perawat Gigi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "139",
        name: "Sekolah Pengatur Rawat Gigi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "140",
        name: "SPRG",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "141",
        name: "Sekolah Pembantu Ahli Gizi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "142",
        name: "SPAG",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "143",
        name: "Sekolah Pengatur Gizi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "144",
        name: "Sekolah Pengatur Rontgen",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "145",
        name: "Sekolah Perawat Fisioterapy",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "146",
        name: "Sekolah Perawat Jiwa (B)",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "147",
        name: "Sekolah Perawat Umum (A)",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "148",
        name: "Sekolah Guru Rawat",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "149",
        name: "Sekolah Pembantu Paramedik",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "150",
        name: "Sekolah Menengah Farmasi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "151",
        name: "SMF",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "152",
        name: "Sekolah Asisten Apoteker",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "153",
        name: "SAA",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "154",
        name: "Sekolah Pengatur Obat",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "155",
        name: "Sekolah Pengatur Analis",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "156",
        name: "Sekolah Pengatur Analis Khusus",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "157",
        name: "Sekolah Pengatur Analis Bakteri",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "158",
        name: "Sekolah Menengah Analis Kimia",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "159",
        name: "Sekolah Pengatur Analis Mikro",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "160",
        name: "Sekolah Pengatur Analis",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "161",
        name: "Sekolah Pengatur Analis Kimia",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "162",
        name: "Sekolah Pengatur Analis",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "163",
        name: "Sekolah Pengatur Analis Patologi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "164",
        name: "SLTA Pertanian",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "165",
        name: "SPMA",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "166",
        name: "SMT Pertanian",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "167",
        name: "SMT Produksi Pertanian",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "168",
        name: "SMT Produksi Pangan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "169",
        name: "SMT Mekanisasi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "170",
        name: "SMT Prosessing",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "171",
        name: "SMT Agronomi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "172",
        name: "SMT Teknik Pertanian",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "173",
        name: "SMT Teknik Produksi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "174",
        name: "SMT Teknologi Produksi Pertanian",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "175",
        name: "SMT Teknologi Peralatan Pertanian",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "176",
        name: "SMT Teknologi Hasil Pertanian",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "177",
        name: "SMT Teknologi Penangkapan Ikan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "178",
        name: "SMT Teknologi Sumber Daya Pertanian",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "179",
        name: "Sekolah Perkebunan Menengah Atas",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "180",
        name: "Sekolah Kehutanan Menengah Atas",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "181",
        name: "Sekolah Peternakan Menengah Ataas",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "182",
        name: "Sekolah Perikanan Menengah Atas",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "183",
        name: "SPMA Perikanan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "184",
        name: "SUPM Perikanan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "185",
        name: "SUPM Perikanan Darat",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "186",
        name: "SUPM Perikanan Laut",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "187",
        name: "SMIK",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "188",
        name: "SMIK Anyaman",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "189",
        name: "SMIK Tenun",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "190",
        name: "SMIK Ukir",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "191",
        name: "SMIK Logam",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "192",
        name: "SMIK Keramik",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "193",
        name: "SMIK Kayu",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "194",
        name: "SMIK Batik",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "195",
        name: "SMIK Kimia",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "196",
        name: "SMIK Kulit",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "197",
        name: "Sekolah Pelayaran Menengah Atas",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "198",
        name: "Mualim Pelayaran Interinsuler",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "199",
        name: "Mualim Pelayaran Besar",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "200",
        name: "Mualim Pelayaran Indonesia",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "201",
        name: "Sekolah Laut",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "202",
        name: "Sekolah Laut  C1",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "203",
        name: "Sekolah Laut  C2",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "204",
        name: "Sekolah Laut  C3",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "205",
        name: "Sekolah Laut Teleponist",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "206",
        name: "Sekolah Teknik Menengah",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "207",
        name: "STM",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "208",
        name: "STM Sipil",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "209",
        name: "STM Bangunan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "210",
        name: "STM Bangunan Gedung",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "211",
        name: "STM Bangunan Air/Jalan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "212",
        name: "STM Bangunan Sipil",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "213",
        name: "STM Bangunan Kapal",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "214",
        name: "STM Bangunan Jalan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "215",
        name: "STM Seni",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "216",
        name: "STM Seni Ukir",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "217",
        name: "STM Dekorasi Ukir",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "218",
        name: "STM Mesin",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "219",
        name: "STM Mesin Industri",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "220",
        name: "STM Mesin Konstruksi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "221",
        name: "STM Konstruksi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "222",
        name: "STM Tenaga Motor Bakar",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "223",
        name: "STM Tenaga Uap",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "224",
        name: "STM Mesin Kapal",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "225",
        name: "STM Mesin Produksi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "226",
        name: "STM Mesin Motor",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "227",
        name: "STM Mesin Disel",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "228",
        name: "STM Mobil",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "229",
        name: "STM Mobil Disel",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "230",
        name: "STM Mesin Listrik",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "231",
        name: "STM Instruktur Mesin",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "232",
        name: "STM Mesin Otomatis",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "233",
        name: "STM Elektronika",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "234",
        name: "STM Elektronika Radio",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "235",
        name: "STM Elektronika Pesawat Terbang",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "236",
        name: "STM Pembangunan Elektronika",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "237",
        name: "STM Listrik Umum",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "238",
        name: "STM Listrik Arus Lemah",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "239",
        name: "STM Listrik Arus Kuat",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "240",
        name: "STM Listrik/Instumentasi Pesawat Terbang",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "241",
        name: "STM Listrik Kapal",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "242",
        name: "STM Listrik Industri",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "243",
        name: "STM Instruktur Listrik",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "244",
        name: "STM Telekomunikasi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "245",
        name: "STM Mikro Komunikasi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "246",
        name: "STM Instrumen",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "247",
        name: "STM Metalurgi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "248",
        name: "STM Pengerjaan Logam",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "249",
        name: "STM Industri",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "250",
        name: "STM Pertambangan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "251",
        name: "STM Geodesi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "252",
        name: "STM Geologi",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "253",
        name: "STM Perabotan Rumah Tangga",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "254",
        name: "STM Monitor",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "255",
        name: "STM Teknik Pendingin",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "256",
        name: "STM Paket A",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "257",
        name: "STM Paket B",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "258",
        name: "STM Paket C",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "259",
        name: "STM Pembangunan 4 Tahun",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "260",
        name: "STM Penerbangan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "261",
        name: "STM Penerbangan Motor Roket",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "262",
        name: "STM Penerbangan Motor/Rangka",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "263",
        name: "STM Penerbangan Mesin Pesawat",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "264",
        name: "STM Penerbangan Instrumentasi Penerabangan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "265",
        name: "STM Penerbangan Elektro Radio Pesawat Terbang",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "266",
        name: "STM Pendidikan Aeronika Elektronika Pesawat Terbang",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "267",
        name: "STM Penerbangan Listrik Instrumentasi Pesawat Terbang",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "268",
        name: "STM Grafika",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "269",
        name: "STM Grafika Susunan Huruf Mesin",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "270",
        name: "STM Grafika Penjilidan",
      },
      {
        pendidikan_id: 5,
        jurusan_id: "271",
        name: "STM Grafika Fotro Reproduksi",
      },
      {
        jurusan_id: "272",
        name: "STM Grafika Cetak",
      },
      {
        jurusan_id: "273",
        name: "STM Perkapalan",
      },
      {
        jurusan_id: "274",
        name: "STM Perkapalan Mesin Kapal",
      },
      {
        jurusan_id: "275",
        name: "STM Perkapalan Motor Kapal",
      },
      {
        jurusan_id: "276",
        name: "STM Perkapalan Listrik Kapal",
      },
      {
        jurusan_id: "277",
        name: "STM Perkapalan Bangunan Kapal",
      },
      {
        jurusan_id: "278",
        name: "STM Kimia",
      },
      {
        jurusan_id: "279",
        name: "STM  MESIN",
      },
      {
        jurusan_id: "280",
        name: "STM Kimia Teknik",
      },
      {
        jurusan_id: "281",
        name: "STM Pekerjaan Umum",
      },
      {
        jurusan_id: "282",
        name: "STM PU",
      },
      {
        jurusan_id: "283",
        name: "STM PU Geodesi",
      },
      {
        jurusan_id: "284",
        name: "STM PU Bangunan",
      },
      {
        jurusan_id: "285",
        name: "STM PU Bangunan Air/Jalan",
      },
      {
        jurusan_id: "286",
        name: "STM Laboratorium",
      },
      {
        jurusan_id: "287",
        name: "STM Laboratorium Mesin",
      },
      {
        jurusan_id: "288",
        name: "Sekolah Topografi",
      },
      {
        jurusan_id: "289",
        name: "Sekolah Seni Rupa",
      },
      {
        jurusan_id: "290",
        name: "Sekolah Seni Rupa Seni Ukir",
      },
      {
        jurusan_id: "291",
        name: "Sekolah Seni Rupa Seni Patung",
      },
      {
        jurusan_id: "292",
        name: "Sekolah Seni Rupa Dekorasi",
      },
      {
        jurusan_id: "293",
        name: "Sekolah Seni Rupa Reklame",
      },
      {
        jurusan_id: "294",
        name: "Sekolah Seni Rupa Vokasional",
      },
      {
        jurusan_id: "295",
        name: "Sekolah Seni Rupa Seni Kriya",
      },
      {
        jurusan_id: "296",
        name: "Sekolah Seni Rupa Seni Lukis",
      },
      {
        jurusan_id: "297",
        name: "Sekolah Pendidikan Sosial Atas",
      },
      {
        jurusan_id: "298",
        name: "Sekolah Menengah Pekerjaan Sosial",
      },
      {
        jurusan_id: "299",
        name: "Sekolah Pembangunan Sosial",
      },
      {
        jurusan_id: "300",
        name: "Sekolah Menengah Pariwisata",
      },
      {
        jurusan_id: "301",
        name: "Sekolah Menengah Industri Pariwisata",
      },
      {
        jurusan_id: "302",
        name: "Sekolah Hakim dan Jaksa",
      },
      {
        jurusan_id: "303",
        name: "Sekolah Menengah Kehakiman Atas",
      },
      {
        jurusan_id: "304",
        name: "Sekolah Panitra Pengadilan",
      },
      {
        jurusan_id: "305",
        name: "Pendidikan Hakim Islam Negeri",
      },
      {
        jurusan_id: "306",
        name: "Sekolah Persiapan IAIN (SPIAIN)",
      },
      {
        jurusan_id: "307",
        name: "Sekolah Musik Indonesia",
      },
      {
        jurusan_id: "308",
        name: "Sekolah Menengah Karawitan Indonesia",
      },
      {
        jurusan_id: "309",
        name: "SMKI",
      },
      {
        jurusan_id: "310",
        name: "SMKI Kesenian",
      },
      {
        jurusan_id: "311",
        name: "SMKI Seni Dalang",
      },
      {
        jurusan_id: "312",
        name: "SMKI Seni Tari",
      },
      {
        jurusan_id: "313",
        name: "SMKI Seni Musik",
      },
      {
        jurusan_id: "314",
        name: "SMKI Kesenian Sunda",
      },
      {
        jurusan_id: "315",
        name: "SMKI Seni Karawitan Sunda",
      },
      {
        jurusan_id: "316",
        name: "SMKI Kesenian Jawa",
      },
      {
        jurusan_id: "317",
        name: "SMKI Seni Karawitan Jawa",
      },
      {
        jurusan_id: "318",
        name: "SMKI Seni Tabuh",
      },
      {
        jurusan_id: "319",
        name: "SMKI Pedalangan/Teater Daerah",
      },
      {
        jurusan_id: "320",
        name: "Konsevatori Tari",
      },
      {
        jurusan_id: "321",
        name: "Konsevatori Karawitan",
      },
      {
        jurusan_id: "322",
        name: "Konsevatori Karawitan Bali",
      },
      {
        jurusan_id: "323",
        name: "SPK KEPERAWATAN",
      },
      {
        jurusan_id: "324",
        name: "SMPS",
      },
      {
        jurusan_id: "325",
        name: "SMPS Pelayanan Sosial",
      },
      {
        jurusan_id: "326",
        name: "SMPS Pengembangan Masyarakat",
      },
      {
        jurusan_id: "3781",
        name: "PGAN 4 Tahun",
      },
      {
        jurusan_id: "3786",
        name: "STM Instruktur",
      },
      {
        jurusan_id: "3798",
        name: "SMA",
      },
      {
        jurusan_id: "3814",
        name: "PGAN",
      },
      {
        jurusan_id: "3816",
        name: "SPR",
      },
      {
        jurusan_id: "3818",
        name: "SGO N BDG",
      },
      {
        jurusan_id: "3831",
        name: "PEL. PERAWAT",
      },
      {
        jurusan_id: "3838",
        name: "SMKK PROGRAM GIZI",
      },
      {
        jurusan_id: "3839",
        name: "SMKK",
      },
      {
        jurusan_id: "3886",
        name: "SMTP",
      },
      {
        jurusan_id: "3912",
        name: "IPS",
      },
      {
        jurusan_id: "3913",
        name: "STMN MESIN",
      },
      {
        jurusan_id: "3918",
        name: "SLTA UMUM",
      },
      {
        jurusan_id: "3926",
        name: "KPAA",
      },
      {
        jurusan_id: "3928",
        name: "PGA KERISTEN",
      },
      {
        jurusan_id: "3931",
        name: "STM PERTANIAN",
      },
      {
        jurusan_id: "3940",
        name: "STM MESIN UMUM",
      },
      {
        jurusan_id: "3958",
        name: "SLTA TEKNIK",
      },
      {
        jurusan_id: "3979",
        name: "PASPAL",
      },
      {
        jurusan_id: "3992",
        name: "SNAKMA",
      },
      {
        jurusan_id: "4046",
        name: "SPK/SLTA",
      },
      {
        jurusan_id: "4052",
        name: "SMGA",
      },
      {
        jurusan_id: "4088",
        name: "SP IAIN",
      },
      {
        jurusan_id: "4111",
        name: "SMA PLUS",
      },
      {
        jurusan_id: "4119",
        name: "PGSLTP",
      },
      {
        jurusan_id: "4125",
        name: "SLTA SD",
      },
      {
        jurusan_id: "4133",
        name: "PROGRAM B SGO",
      },
      {
        jurusan_id: "4147",
        name: "SMON",
      },
      {
        jurusan_id: "4160",
        name: "SPG PENDIDIKAN SD",
      },
      {
        jurusan_id: "4185",
        name: "STM PLUS PKB",
      },
      {
        jurusan_id: "4206",
        name: "PGA SD",
      },
      {
        jurusan_id: "4271",
        name: "PGA 6 TH",
      },
      {
        jurusan_id: "4283",
        name: "SAAN",
      },
      {
        jurusan_id: "4284",
        name: "PSGB",
      },
      {
        jurusan_id: "4313",
        name: "KPG.",
      },
      {
        jurusan_id: "4317",
        name: "SPMA PERTANIAN",
      },
      {
        jurusan_id: "4325",
        name: "SPG MUTIARA BANDUNG",
      },
      {
        jurusan_id: "4326",
        name: "S  P  G",
      },
      {
        jurusan_id: "4328",
        name: "SPG MUSLIMIN",
      },
      {
        jurusan_id: "4330",
        name: "SPG GURU SD",
      },
      {
        jurusan_id: "4331",
        name: "KOKAR",
      },
      {
        jurusan_id: "4332",
        name: "SPGN II BANDUNG",
      },
      {
        jurusan_id: "4333",
        name: "SPGTK",
      },
      {
        jurusan_id: "4334",
        name: "SPGN TAMBUN",
      },
      {
        jurusan_id: "4335",
        name: "SPG BOGOR",
      },
      {
        jurusan_id: "4336",
        name: "SPG KP PASEH",
      },
      {
        jurusan_id: "4337",
        name: "SPG KARYA PEMBANGUNAN",
      },
      {
        jurusan_id: "4338",
        name: "SPG DARUL HIKAM",
      },
      {
        jurusan_id: "4339",
        name: "PGAN BANDUNG",
      },
      {
        jurusan_id: "4340",
        name: "SPG MATHAUL ANWAR",
      },
      {
        jurusan_id: "4341",
        name: "SPG PASUNDAN",
      },
      {
        jurusan_id: "4342",
        name: "SPG I KP. PASEH",
      },
      {
        jurusan_id: "4345",
        name: "SPG KARTINI",
      },
      {
        jurusan_id: "4360",
        name: "SPG LEBAK WANGI",
      },
      {
        jurusan_id: "4363",
        name: "SPG FATHUL HUDA",
      },
      {
        jurusan_id: "4365",
        name: "KPAAN",
      },
      {
        jurusan_id: "4369",
        name: "SPGN KUNINGAN",
      },
      {
        jurusan_id: "4370",
        name: "SPGN I SERANG",
      },
      {
        jurusan_id: "4376",
        name: "S P G",
      },
      {
        jurusan_id: "4378",
        name: "SPG MA BANDUNG",
      },
      {
        jurusan_id: "4379",
        name: "SPG PGRI BANDUNG",
      },
      {
        jurusan_id: "4380",
        name: "SPG PARIPURNA JKT",
      },
      {
        jurusan_id: "4382",
        name: "SPGN TASIKMALAYA",
      },
      {
        jurusan_id: "4383",
        name: "SPG PANGUDI",
      },
      {
        jurusan_id: "4386",
        name: "SPGN CIMAHI",
      },
      {
        jurusan_id: "4389",
        name: "SPGN GARUT",
      },
      {
        jurusan_id: "4396",
        name: "SPGN CIANJUR",
      },
      {
        jurusan_id: "4400",
        name: "SPGN I BANDUNG",
      },
      {
        jurusan_id: "4408",
        name: "SPGN CITARUM",
      },
      {
        jurusan_id: "4413",
        name: "SPG CIMAHI",
      },
      {
        jurusan_id: "4417",
        name: "SPG MUHAMADIAH",
      },
      {
        jurusan_id: "4419",
        name: "SPG KAMPUNG PASEH",
      },
      {
        jurusan_id: "4421",
        name: "SPG MA. MARGAHAYU",
      },
      {
        jurusan_id: "4424",
        name: "SPG SD",
      },
      {
        jurusan_id: "4435",
        name: "SPG TK",
      },
      {
        jurusan_id: "4457",
        name: "SPG I BANDUNG",
      },
      {
        jurusan_id: "4466",
        name: "SPG PATRIA",
      },
      {
        jurusan_id: "4477",
        name: "SPG IPS",
      },
      {
        jurusan_id: "4478",
        name: "SMEA AKUNTANSI",
      },
      {
        jurusan_id: "4479",
        name: "SMKN",
      },
      {
        jurusan_id: "4482",
        name: "SPG ALIANAH CIANJUR",
      },
      {
        jurusan_id: "4487",
        name: "SPGN CIAMIS",
      },
      {
        jurusan_id: "4491",
        name: "SPGN CIREBON",
      },
      {
        jurusan_id: "4496",
        name: "SPG BINA MUDA",
      },
      {
        jurusan_id: "4502",
        name: "IPA",
      },
      {
        jurusan_id: "4503",
        name: "SPG NEGERI",
      },
      {
        jurusan_id: "4504",
        name: "SPGN MADIUN",
      },
      {
        jurusan_id: "4506",
        name: "SPGN II MEDAN",
      },
      {
        jurusan_id: "4511",
        name: "SPGN SUKABUMI",
      },
      {
        jurusan_id: "4517",
        name: "SPG PGSD",
      },
      {
        jurusan_id: "4519",
        name: "SPGN 1 BANDUNG",
      },
      {
        jurusan_id: "4524",
        name: "SPGN PAMEKASAN",
      },
      {
        jurusan_id: "4527",
        name: "SPGN KARAWANG",
      },
      {
        jurusan_id: "4528",
        name: "SPG PGRI CIANJUR",
      },
      {
        jurusan_id: "4561",
        name: "SPG KIFAYATUL AHYAR",
      },
      {
        jurusan_id: "4593",
        name: "MAN CILILIN",
      },
      {
        jurusan_id: "4596",
        name: "MAN I CIJERAH",
      },
      {
        jurusan_id: "4610",
        name: "SMA Paket A",
      },
      {
        jurusan_id: "4611",
        name: "SMA Paket B",
      },
      {
        jurusan_id: "4612",
        name: "SMA Paket C",
      },
      {
        jurusan_id: "4614",
        name: "SMK Kimia",
      },
      {
        jurusan_id: "4618",
        name: "SMK Perdagangan",
      },
      {
        jurusan_id: "4619",
        name: "KKPA",
      },
      {
        jurusan_id: "4622",
        name: "SPG IPA",
      },
      {
        jurusan_id: "4623",
        name: "STM OTOMOTIF",
      },
      {
        jurusan_id: "4630",
        name: "SMPP",
      },
      {
        jurusan_id: "4656",
        name: "SLTA KEJURUAN",
      },
      {
        jurusan_id: "4704",
        name: "SMK",
      },
      {
        jurusan_id: "4705",
        name: "SMKI Seni Karawitan",
      },
      {
        jurusan_id: "4718",
        name: "SMK INSTALASI LISTRIK",
      },
      {
        jurusan_id: "4721",
        name: "SMK ELEKTRONIKA",
      },
    ]);
  }
}

module.exports = SltaKejuruanSeeder;
