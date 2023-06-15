"use strict";

/*
|--------------------------------------------------------------------------
| PascaSarjanaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Jurusan = use("App/Models/Jurusan");

class PascaSarjanaSeeder {
  async run() {
    await Jurusan.createMany([
      {
        jurusan_id: "3737",
        name: "S-2 Bidang Ekonomi",
      },
      {
        jurusan_id: "3738",
        name: "S-2 Magister Manajemen",
      },
      {
        jurusan_id: "3739",
        name: "S-2 Bidang Pertanian",
      },
      {
        jurusan_id: "3740",
        name: "S-2 Bidang Teknik",
      },
      {
        jurusan_id: "3741",
        name: "S-2  Pendidikan IPS",
      },
      {
        jurusan_id: "3742",
        name: "S-2 Hukum",
      },
      {
        jurusan_id: "3743",
        name: "S-2 Bidang Kependudukan",
      },
      {
        jurusan_id: "3744",
        name: "DIII Bidang Ilmu Sosial DAN POLITIK",
      },
      {
        jurusan_id: "3745",
        name: "S-2 Bidang Matematika/Statistik",
      },
      {
        jurusan_id: "3759",
        name: "S-2 Manajemen Pembangunan Daerah",
      },
      {
        jurusan_id: "3770",
        name: "S-2 Ekologi Manusia Pengembangan Masyarakat",
      },
      {
        jurusan_id: "3775",
        name: "S-2 ILMU PEMERINTAHAN",
      },
      {
        jurusan_id: "3783",
        name: "S-2 KEBIJAKAN PUBLIK",
      },
      {
        jurusan_id: "3795",
        name: "S-2 SPESIALIS PENYAKIT DALAM",
      },
      {
        jurusan_id: "3805",
        name: "S-1 BAHASA INDONESIA",
      },
      {
        jurusan_id: "3812",
        name: "S-2 PENDIDIKAN",
      },
      {
        jurusan_id: "3813",
        name: "S-2 SYARI,AH",
      },
      {
        jurusan_id: "3815",
        name: "S-1 TARBIYAH",
      },
      {
        jurusan_id: "3823",
        name: "S-II Ilmu Administrasi",
      },
      {
        jurusan_id: "3835",
        name: "S-1 ADMINISTRASI NEGARA",
      },
      {
        jurusan_id: "3841",
        name: "S-2 Magister Ilmu Pemerintahan",
      },
      {
        jurusan_id: "3855",
        name: "S-2 TEKNIK INDUSTRI",
      },
      {
        jurusan_id: "3861",
        name: "S-1 SOSIAL",
      },
      {
        jurusan_id: "3862",
        name: "S-1 SOSIAL",
      },
      {
        jurusan_id: "3870",
        name: "S- 2 KEDOKTERAN",
      },
      {
        jurusan_id: "3871",
        name: "S-2 ADMINISTRASI PUBLIK",
      },
      {
        jurusan_id: "3891",
        name: "S-2 ADM DAN KEBIJAKAN KESEHATAN",
      },
      {
        jurusan_id: "3895",
        name: "S-1 PDU-Akuntansi",
      },
      {
        jurusan_id: "3911",
        name: "S-2 MANAGEMEN",
      },
      {
        jurusan_id: "3914",
        name: "S-2 MANAJEMEN PERSEKOLAH/PT",
      },
      {
        jurusan_id: "3929",
        name: "S-2 PLS",
      },
      {
        jurusan_id: "3934",
        name: "Profesi Kenotariatan",
      },
      {
        jurusan_id: "3935",
        name: "S-2 EKONOMI MANAJEMEN",
      },
      {
        jurusan_id: "3950",
        name: "S-2 BUDIDAYA MANAJEMEN",
      },
      {
        jurusan_id: "3962",
        name: "S II",
      },
      {
        jurusan_id: "3969",
        name: "S-2 TEKNIK",
      },
      {
        jurusan_id: "3973",
        name: "S-2 URBAN MANAGEMENT",
      },
      {
        jurusan_id: "4002",
        name: "S-2 TEKNIK PLANOLOGI",
      },
      {
        jurusan_id: "4021",
        name: "S-2 ADMINISTRASI NEGARA",
      },
      {
        jurusan_id: "4023",
        name: "S-2 TEHNIK LINGKUNGAN",
      },
      {
        jurusan_id: "4027",
        name: "S-2 Konservasi Tanah",
      },
      {
        jurusan_id: "4029",
        name: "SARJANA HUKUM",
      },
      {
        jurusan_id: "4031",
        name: "S-2 KESEHATAN",
      },
      {
        jurusan_id: "4042",
        name: "S-2 APOTEKER",
      },
      {
        jurusan_id: "4048",
        name: "S-2 SOSIAL POLITIK",
      },
      {
        jurusan_id: "4049",
        name: "S-2 MANAJEMEN KESEHATAN",
      },
      {
        jurusan_id: "4061",
        name: "S-2KEBIJAKAN",
      },
      {
        jurusan_id: "4062",
        name: "S-2 SPESIALIS PATOLOGI KLINIK",
      },
      {
        jurusan_id: "4063",
        name: "S-2 SPESIALIS KEDOKTERAN HEWAN",
      },
      {
        jurusan_id: "4095",
        name: "S-2 KESEHATAN MASYARAKAT",
      },
      {
        jurusan_id: "4097",
        name: "S-2 Manajemen Pendidikan",
      },
      {
        jurusan_id: "4132",
        name: "S-2 Administrasi Pendidikan",
      },
      {
        jurusan_id: "4157",
        name: "ENGLISH LANGUAGE TEACHING",
      },
      {
        jurusan_id: "4163",
        name: "S-2 ADMINISTRASI RUMAH SAKIT",
      },
      {
        jurusan_id: "4172",
        name: "S-1 AGRONOMI",
      },
      {
        jurusan_id: "4249",
        name: "S-2 FISIKA",
      },
      {
        jurusan_id: "4251",
        name: "S- II MANAJEMEN PENDIDIKAN",
      },
      {
        jurusan_id: "4258",
        name: "S.2 MAGISTER MANAJEMENT",
      },
      {
        jurusan_id: "4274",
        name: "S-2 PEND. AGAMA",
      },
      {
        jurusan_id: "4366",
        name: "S- II MANAJEMEN SKOLAH",
      },
      {
        jurusan_id: "4390",
        name: "S-2 MIPA",
      },
      {
        jurusan_id: "4409",
        name: "FARMASI",
      },
      {
        jurusan_id: "4414",
        name: "S-2 ILMU SOSIAL",
      },
      {
        jurusan_id: "4448",
        name: "S 2 EDUCASION",
      },
      {
        jurusan_id: "4490",
        name: "S- 2 PISIKO",
      },
      {
        jurusan_id: "4516",
        name: "S- II MANAJEMEN PENDIDIKAN",
      },
      {
        jurusan_id: "4520",
        name: "S-2 KIMIA",
      },
      {
        jurusan_id: "4545",
        name: "S-2 PETERNAKAN",
      },
      {
        jurusan_id: "4547",
        name: "PPS ILMU ADMINISTRASI",
      },
      {
        jurusan_id: "4548",
        name: "S-2 KENOTARIATAN",
      },
      {
        jurusan_id: "4549",
        name: "S-2 Perencanaan Wilayah",
      },
      {
        jurusan_id: "4551",
        name: "S-2 TEKNIK HIDROLIK",
      },
      {
        jurusan_id: "4553",
        name: "S-2 Manajemen Keuangan",
      },
      {
        jurusan_id: "4556",
        name: "S-2 BIDANG AGRIBISNIS",
      },
      {
        jurusan_id: "4558",
        name: "S-2 EPIDEMIOLOGI",
      },
      {
        jurusan_id: "4566",
        name: "S-2 Magister Ilmu Administrasi",
      },
      {
        jurusan_id: "4567",
        name: "S2 ILMU ADMINISTRASI",
      },
      {
        jurusan_id: "4572",
        name: "S-2 TEKNIK SIPIL",
      },
      {
        jurusan_id: "4573",
        name: "S-2 ILMU EKONOMI PEMBANGUNAN",
      },
      {
        jurusan_id: "4574",
        name: "S-2 MANAJEMEN SDM",
      },
      {
        jurusan_id: "4577",
        name: "S-2 TEKNOLOGI",
      },
      {
        jurusan_id: "4578",
        name: "S-2 URBAN HOUSING MANAGEMENT",
      },
      {
        jurusan_id: "4579",
        name: "S-2 URBAN INFRASTRUCTURE MANAGEMENT",
      },
      {
        jurusan_id: "4580",
        name: "S-2 TEKNIK PRASARANA LINGKUNGAN PEMUKIMAN",
      },
      {
        jurusan_id: "4581",
        name: "S-2 MANAJEMEN KONSTRUKSI",
      },
      {
        jurusan_id: "4582",
        name: "S-2 MAGISTER HUKUM KESEHATAN",
      },
      {
        jurusan_id: "4583",
        name: "S-2 SPESIALIS GIGI",
      },
      {
        jurusan_id: "4587",
        name: "S-2 MAGISTER SAINS",
      },
      {
        jurusan_id: "4588",
        name: "S-2 MAGISTER MARKETING",
      },
      {
        jurusan_id: "4604",
        name: "S-2 SPESIALIS ANAK",
      },
      {
        jurusan_id: "4631",
        name: "S-2 SPESIALIS  MATA",
      },
      {
        jurusan_id: "4660",
        name: "S-2 SPESIALIS ORTODENTI",
      },
      {
        jurusan_id: "4661",
        name: "S-2 SPESIALIS BEDAH",
      },
      {
        jurusan_id: "4706",
        name: "S-2 SPESIALIS THT",
      },
      {
        jurusan_id: "4707",
        name: "S-2 SPESIALIS KANDUNGAN",
      },
      {
        jurusan_id: "4708",
        name: "S-2 SPESIALIS SYARAF",
      },
      {
        jurusan_id: "4709",
        name: "S-2 SPESIALIS KULIT DAN KELAMIN",
      },
      {
        jurusan_id: "4710",
        name: "S-2 SPESIALIS RADIOLOGI",
      },
      {
        jurusan_id: "4711",
        name: "S-2 SPESIALIS REHABILITASI MEDIS",
      },
      {
        jurusan_id: "4712",
        name: "S-2 SPESIALIS KESEHATAN JIWA",
      },
      {
        jurusan_id: "4713",
        name: "S-2 SPESIALIS ANESTHESI",
      },
      {
        jurusan_id: "4714",
        name: "S-2 SPESIALIS BEDAH MULUT",
      },
      {
        jurusan_id: "4731",
        name: "S- 2",
      },
      {
        jurusan_id: "4732",
        name: "S- 2",
      },
      {
        jurusan_id: "4745",
        name: "S-2 Industri Kecil Menengah",
      },
    ]);
  }
}

module.exports = PascaSarjanaSeeder;
