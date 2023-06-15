"use strict";

/*
|--------------------------------------------------------------------------
| JalurPendaftaranSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const JalurPendaftaran = use("App/Models/JalurPendaftaran");

class JalurPendaftaranSeeder {
  async run() {
    await JalurPendaftaran.createMany([
      {
        name: "Afirmasi",
        keterangan:
          "Calon Peserta Didik dari keluarga tidak mampu dibuktikan dengan bukti program penanganan PEMDA atau PUSAT dilengkapi dengan surat pernyataan Orang Tua/Wali Kuata => 15%.",
        kuota: "0.15",
        is_active: true,
        prosentasi: "0",
      },
      {
        name: "Pindah Orang Tua",
        keterangan:
          "Calon Peserta Didik dikarenakan perpindahan orang tua, dibuktikan dengan surat penugasaan instansi orang tua, untuk anak guru atau adanya kebijakan Pemda terkait orang tua terdampak Covid 19 Kuota <= 15%",
        kuota: "0.15",
        is_active: "1",
        prosentasi: "0",
      },
      {
        name: "Jalur Prestasi",
        keterangan:
          "Nilai Ujian Sekolah; dan atau/ nilai rapor lima semester terkahir SMP/MTs sederjat. penghargaan dibidang akademik atau non akademik",
        kuota: "0.05",
        is_active: "1",
        prosentasi: "0",
      },
      {
        name: "Reguler",
        keterangan: "",
        kuota: "0.5",
        is_active: "1",
        prosentasi: "0",
      },
    ]);
  }
}

module.exports = JalurPendaftaranSeeder;
