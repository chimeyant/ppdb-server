"use strict";

/*
|--------------------------------------------------------------------------
| DoctorSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Jurusan = use("App/Models/Jurusan");

class DoctorSeeder {
  async run() {
    await Jurusan.createMany([
      {
        jurusan_id: "3746",
        name: "S-3 Bidang Ekonomi",
      },
      {
        jurusan_id: "3747",
        name: "S-3 Bidang Kedokteran",
      },
      {
        jurusan_id: "3748",
        name: "S-3 Bidang Farmasi/Kimia",
      },
      {
        jurusan_id: "3749",
        name: "S-3 Bidang Pertanian",
      },
      {
        jurusan_id: "3750",
        name: "S-3 Bidang Teknik",
      },
      {
        jurusan_id: "3751",
        name: "Bidang Pendidikan",
      },
      {
        jurusan_id: "3752",
        name: "S-3 Bidang Hukum",
      },
      {
        jurusan_id: "3753",
        name: "S-3 Bidang Administrasi",
      },
      {
        jurusan_id: "3754",
        name: "S-3 Bidang Ilmu Sosial",
      },
      {
        jurusan_id: "3755",
        name: "S-3 Bidang Elektronika",
      },
      {
        jurusan_id: "3756",
        name: "S-3 Sistem Informasi/Komunikasi",
      },
      {
        jurusan_id: "3757",
        name: "S-3 Komputer",
      },
      {
        jurusan_id: "3758",
        name: "S-3 Matematika/Statistik",
      },
      {
        jurusan_id: "4744",
        name: "S-3 Konsentrasi Manajemen Pendidikan",
      },
    ]);
  }
}

module.exports = DoctorSeeder;
