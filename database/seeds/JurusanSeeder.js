"use strict";

/*
|--------------------------------------------------------------------------
| JurusanSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Jurusan = use("App/Models/Jurusan");

class JurusanSeeder {
  async run() {
    await Jurusan.createMany([
      {
        pendidikan_id: "0",
        jurusan_id: "00000000",
        name: "Tidak Sekolah",
      },
      {
        pendidikan_id: "0",
        jurusan_id: "10000000",
        name: "Pendidikan Dasar",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "10010000",
        name: "SD",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "10020000",
        name: "Madrasah Ibtidaiyah",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "10030000",
        name: "Taman Muda",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040000",
        name: "Sekolah Juru Kesehatan",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040110",
        name: "Sekolah Perawat Tingkat I",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040120",
        name: "Sekolah Pembantu Rawat",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040130",
        name: "Sekolah Perakit Rawat",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040140",
        name: "Sekolah Penolong Bersalin",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040210",
        name: "Sekolah Teknik Laboratorium",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040220",
        name: "Sekolah Mantri Laboratorium",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040230",
        name: "Sekolah Penyelidik Malaria",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040240",
        name: "Sekolah Juru Surveilance",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040310",
        name: "Sekolah Penjenang Kesehatan Tingkat",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040320",
        name: "Sekolah Penjenang Tingkat I",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040330",
        name: "Sekolah Penjenang Laboran",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040410",
        name: "Sekolah Juru Penerang Pes",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040420",
        name: "Sekolah Juru Teknik Pes",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040510",
        name: "Sekolah Juru Imunisasi",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040520",
        name: "Sekolah Juru BCG",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040530",
        name: "Sekolah Juru Kusta",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040540",
        name: "Sekolah Juru Patek",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040550",
        name: "Sekolah Juru Cacar",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040560",
        name: "Sekolah Juru Malaria",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040600",
        name: "Sekolah Pengasuh KIA",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040700",
        name: "Sekolah Mantri Higiene",
      },
      {
        pendidikan_id: "1",
        jurusan_id: "11040800",
        name: "Sekolah Pengunjung Rumah",
      },
      {
        pendidikan_id: "2",
        jurusan_id: "20000000",
        name: "SLTP Umum",
      },
      {
        pendidikan_id: "2",
        jurusan_id: "20010000",
        name: "SMP",
      },
      {
        pendidikan_id: "2",
        jurusan_id: "20020000",
        name: "Madrasah Tsanawiyah",
      },
      {
        pendidikan_id: "2",
        jurusan_id: "20030000",
        name: "Taman Dewasa",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21000000",
        name: "SLTP Kejuruan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21010000",
        name: "SLTP Jurusan Ekonomi/Pertanian",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21010100",
        name: "SMEP",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21010200",
        name: "SMPP",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21020000",
        name: "SKKP",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21020100",
        name: "Umum",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21020110",
        name: "Rumah Tangga",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21020120",
        name: "Tatalaksana Rumah Tangga",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21020210",
        name: "Memasak",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21020220",
        name: "Tata Boga",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21020230",
        name: "Tatalaksana Makanan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21020310",
        name: "Tekstil",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21020320",
        name: "Menjahit",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21020330",
        name: "Tatalaksana Pakaian",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21021000",
        name: "SKP",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040000",
        name: "SLTP Bidang Kesehatan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040110",
        name: "Sekolah Juru Rawat",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040120",
        name: "Sekolah Juru Rawat A/1 ( Umum )",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040130",
        name: "Sekolah Juru Rawat B/1 ( Jiwa )",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040200",
        name: "Sekolah Pengamat Kesehatan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040300",
        name: "Sekolah Penjenang Kesehatan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040310",
        name: "A/B",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040320",
        name: "B",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040330",
        name: "C",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040340",
        name: "D",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040350",
        name: "E",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040360",
        name: "F",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040370",
        name: "G",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040380",
        name: "H",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040400",
        name: "Sekolah Penjaga Orang Sakit",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040500",
        name: "Sekolah Pengatur Rawat Gigi",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040600",
        name: "Sekolah Juru Resep Obat",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040700",
        name: "Sekolah Pekarya Kesehatan Menengah",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21040800",
        name: "Sekolah Juru Teknik Kesehatan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21060000",
        name: "Sekolah Pertanian Menengah Pertama",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21060100",
        name: "Sekolah Teknik Pertanian",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21060200",
        name: "Sekolah Penyusun Makanan Rakyat",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21060300",
        name: "Sekolah Teknik Produksi Pertanian",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21061000",
        name: "Sekolah Perkebunan Menengah Pertama",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21062000",
        name: "Sekolah Teknik Peternakan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21063000",
        name: "Sekolah Teknik Perikanan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21063100",
        name: "Sekolah Usaha Perikanan Pertama",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21070000",
        name: "Sekolah Kerajinan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21070100",
        name: "Perabot Rumah Tangga",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21070200",
        name: "Besi",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21070300",
        name: "Sekolah Kerajinan Kulit",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21070310",
        name: "Sekolah Kerajinan Penyamakan Kulit",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21080000",
        name: "SLTP Kelautan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21080100",
        name: "Sekolah Menengah Pelayaran Pertama",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21080110",
        name: "Mualim Pelayaran Terbatas",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21080120",
        name: "Sekolah Pelaut",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21080130",
        name: "MMD",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21080140",
        name: "MD",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21080150",
        name: "Motor Diesel Kapal",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21080160",
        name: "Juru Motor",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21080170",
        name: "Juru Mesin",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21090000",
        name: "Sekolah Teknik",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21091010",
        name: "Bangunan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21091020",
        name: "Bangunan Gedung",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21091030",
        name: "Bangunan Air",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21091040",
        name: "Bangunan Jalan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21091050",
        name: "Bangunan Kapal",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21091060",
        name: "Sipil",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21092070",
        name: "Pertukangan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21092080",
        name: "Pertukangan Kayu",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21092090",
        name: "Perabot Rumah Tangga",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21092100",
        name: "Kayu",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21093010",
        name: "Ukur Tanah",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21093020",
        name: "Geografi",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21094010",
        name: "Percetakan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21094020",
        name: "Grafika",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21095010",
        name: "Seni Ukir",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21095020",
        name: "Dekorasi",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21095030",
        name: "Dekorasi Ukir",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21095040",
        name: "Keramik",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21096000",
        name: "Sekolah Teknik",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21096010",
        name: "Mesin",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21096020",
        name: "Mesin Diesel",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21096030",
        name: "Motor Diesel",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21096040",
        name: "Diesel Kapal",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21096050",
        name: "Mesin Kapal",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21096060",
        name: "Mesin Konstruksi",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21096070",
        name: "Mobil",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21096080",
        name: "Otomotif",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21096090",
        name: "Perkapalan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21097010",
        name: "Elektro",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21097020",
        name: "Las",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21097030",
        name: "Listrik",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21097040",
        name: "Radio",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21097050",
        name: "Mesin Listrik",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21098010",
        name: "Besi",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21099010",
        name: "Geologi dan Pertambangan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21099020",
        name: "Menjahit",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21099030",
        name: "Tekstil",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21101000",
        name: "SGPLB Tingkat Pertama",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21102000",
        name: "SGB",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21102010",
        name: "KPA",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21103010",
        name: "Kursus Kader Masyrakat",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21103020",
        name: "Kursus Penjenang Pendidikan Masyarakat",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21103030",
        name: "Kursus Dinas Pendidikan Administras",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21103040",
        name: "Kursus Pendidikan Agama",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21103050",
        name: "Kursus Karyawan Perusahaan",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "21103060",
        name: "Pendidikan Pegawai dan Peradilan Agama",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "22000000",
        name: "SLTP 4 Tahun",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "22110000",
        name: "SLTP 4 Tahun",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "22111000",
        name: "SLTP Kejurusan 4 Tahun",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "22112000",
        name: "PGA 4 Tahun",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "22113000",
        name: "PGA Islam 4 Tahun",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "22114000",
        name: "PGA Kristen 4 Tahun",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "22115000",
        name: "PGA Katholik 4 Tahun",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "22116000",
        name: "PGA Hindu 4 Tahun",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "22117000",
        name: "PGA Budha 4 Tahun",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "22330000",
        name: "Sekolah Teknik Logam",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "22330110",
        name: "Penuangan Logam",
      },
      {
        pendidikan_id: "3",
        jurusan_id: "22330120",
        name: "Logam",
      },
      {
        pendidikan_id: "4",
        jurusan_id: "30000000",
        name: "SLTA Umum",
      },
      {
        pendidikan_id: "4",
        jurusan_id: "30010000",
        name: "Sekolah Menengah Atas",
      },
      {
        pendidikan_id: "4",
        jurusan_id: "30010010",
        name: "A.1/Fisika",
      },
      {
        pendidikan_id: "4",
        jurusan_id: "30010020",
        name: "A.2/Biologi",
      },
      {
        pendidikan_id: "4",
        jurusan_id: "30010030",
        name: "A.3/IPS",
      },
      {
        pendidikan_id: "4",
        jurusan_id: "30010040",
        name: "A.4/Bahasa",
      },
      {
        pendidikan_id: "4",
        jurusan_id: "30010050",
        name: "IPA/PASPAL",
      },
      {
        pendidikan_id: "4",
        jurusan_id: "30010060",
        name: "Sastra Sosial",
      },
      {
        pendidikan_id: "4",
        jurusan_id: "30020000",
        name: "Madrasah Aliyah",
      },
      {
        pendidikan_id: "4",
        jurusan_id: "30020010",
        name: "A.1/Fisika",
      },
      {
        pendidikan_id: "4",
        jurusan_id: "30020020",
        name: "A.2/Biologi",
      },
      {
        pendidikan_id: "4",
        jurusan_id: "30020030",
        name: "A.3/IPS",
      },
      {
        pendidikan_id: "4",
        jurusan_id: "30020040",
        name: "A.4/Sosial Budaya dan Bahasa",
      },
      {
        pendidikan_id: "4",
        jurusan_id: "30030000",
        name: "Sekolah Luar Biasa",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31000000",
        name: "SLTA Kejuruan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31000010",
        name: "Pelayaran",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31000500",
        name: "Pariwisata",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31011000",
        name: "Sekolah Koperasi Menengah Atas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31012000",
        name: "Kursus Penilik Perbendaharaan Negara",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31013000",
        name: "Sekolah Kepemimpinan Administrasi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31013100",
        name: "KPAA/KKPA",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31014000",
        name: "Sekolah Pendidikan Guru",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015000",
        name: "Sekolah Menengah Ekonomi Atas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015100",
        name: "Sekolah Menengah Ekonomi Atas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015101",
        name: "ILMU-ILMU AGAMA",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015110",
        name: "Tata Usaha",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015120",
        name: "Tata Usaha Kesekretariatan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015130",
        name: "Tata Kesekretariatan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015140",
        name: "Tata Niaga",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015150",
        name: "Tata Perusahaan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015160",
        name: "Tata Buku",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015170",
        name: "Tata Laksana",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015180",
        name: "Tata Persuratan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015190",
        name: "Akuntansi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015210",
        name: "Kesekretariatan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015220",
        name: "Koperasi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015230",
        name: "Perusahaan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015240",
        name: "Administrasi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015250",
        name: "Administrasi Perkantoran",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015260",
        name: "Ekonomi Perusahaan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015270",
        name: "Keuangan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015280",
        name: "Perdagangan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31015290",
        name: "Perkantoran",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021000",
        name: "Sekolah Kesejahteraan Keluarga Atas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021100",
        name: "Tata Boga",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021110",
        name: "Tata Laksana Makanan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021120",
        name: "Masak",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021130",
        name: "Makanan / Masakan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021210",
        name: "Tata Busana",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021220",
        name: "Tata Laksana Pakaian",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021230",
        name: "Pakaian",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021240",
        name: "Tekstil",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021250",
        name: "Menjahit",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021260",
        name: "Kerajinan Batik",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021310",
        name: "Tata Laksana Rumah Tangga",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021320",
        name: "Tata Graha",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021330",
        name: "Rumah Tangga",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31021340",
        name: "Pendidikan Anak",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31022000",
        name: "Pekerja Sosial",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040000",
        name: "Sekolah Pembantu Penilik Hygene",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040110",
        name: "Sekolah Perawat Kesejahteraan Keluarga",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040210",
        name: "Sekolah Perawat Kesehatan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040220",
        name: "Sekolah Pengatur Rawat",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040230",
        name: "Sekolah Penjenang Kesehatan Atas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040310",
        name: "Sekolah Pengawas Kesehatan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040320",
        name: "Sekolah Penilik Kesehatan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040400",
        name: "Sekolah Kebidanan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040410",
        name: "Sekolah Perawat Bidan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040420",
        name: "Sekolah Guru Bidan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040500",
        name: "Sekolah Menengah Atas Kesehatan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040510",
        name: "Sekolah Pengatur Teknik Gigi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040520",
        name: "Sekolah Perawat Gigi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040530",
        name: "Sekolah Pengatur Rawat Gigi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040610",
        name: "Sekolah Pembantu Ahli Gizi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040620",
        name: "Sekolah Pengatur Rontgen",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040800",
        name: "Sekolah Perawat Fisioterapy",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040810",
        name: "Sekolah Perawat Jiwa ( B )",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040820",
        name: "Sekolah Perawat Umum ( A )",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040830",
        name: "Sekolah Guru Rawat",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040910",
        name: "Sekolah Pembantu Para Medis",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31040920",
        name: "Sekolah Pekarya Kesehatan Atas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041000",
        name: "Sla Jurusan Farmasi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041100",
        name: "Sekolah Menengah Farmasi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041200",
        name: "Sekolah Asisten Apoteker",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041300",
        name: "Sekolah Pengatur Obat",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041400",
        name: "Sekolah Menengah Analisis Kesehatan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041410",
        name: "Sekolah Pengatur Analisis",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041420",
        name: "Khusus",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041430",
        name: "Bakteriologi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041440",
        name: "Bakteri Klinis",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041450",
        name: "Kimia",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041460",
        name: "Mikro Biologi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041470",
        name: "Analisis Kimia",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041480",
        name: "Kimia Organik",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041490",
        name: "Analisis Farmasi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31041500",
        name: "Patologie",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31060000",
        name: "SLTA Pertanian",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31060100",
        name: "SPP/SPMA",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31061000",
        name: "Sekolah Menengah Teknologi Pertanian",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31061100",
        name: "Pertanian",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31061110",
        name: "Produksi Pertanian",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31061120",
        name: "Produksi Pangan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31061130",
        name: "Mekanisasi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31061140",
        name: "Prosesing",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31061150",
        name: "Agronimi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31061210",
        name: "Teknik Pertanian",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31061220",
        name: "Teknik Produksi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31061230",
        name: "Teknologi Produksi Pertanian",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31061240",
        name: "Teknologi Peralatan Pertanian",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31061250",
        name: "Teknologi Hasil Pertanian",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31061260",
        name: "Teknik Penangkapan Ikan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31061270",
        name: "Teknologi Sumberdaya Pertanian",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31062000",
        name: "Sekolah Perkebunan Menengah Atas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31063000",
        name: "Sekolah Kehutanan Menengah Atas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31064000",
        name: "Sekolah Peternakan Menengah Atas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31065110",
        name: "Sekolah Perikanan Menengah Atas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31065120",
        name: "Perikanan Darat",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31065130",
        name: "Perikanan Laut",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31065210",
        name: "Sekolah Usaha Perikanan Menengah",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31065220",
        name: "Perikanan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31065230",
        name: "Perikanan Darat",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31065240",
        name: "Perikanan Laut",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31070000",
        name: "Sekolah Menengah Industri dan Kerajinan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31070100",
        name: "Anyaman",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31070110",
        name: "Tenun",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31070200",
        name: "Ukir",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31070210",
        name: "Logam",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31070220",
        name: "Keramik",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31070230",
        name: "Kayu",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31070240",
        name: "Batik",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31070300",
        name: "Kimia Industri",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31070400",
        name: "Kulit",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31081000",
        name: "Sekolah Pelayaran Menengah Atas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31082100",
        name: "Mualim Pelayaran Interinsuler",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31082200",
        name: "Mualim Pelayaran Terbatas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31082300",
        name: "Mualim Pelayaran Besar III",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31082400",
        name: "Mualim Pelayaran Indonesia",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31083100",
        name: "Sekolah Laut",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31083200",
        name: "C1",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31083300",
        name: "C2",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31083400",
        name: "C3",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31083500",
        name: "Telepon 1 ST",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31091000",
        name: "Sekolah Teknik Menengah",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31091100",
        name: "Sipil",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31091200",
        name: "Bangunan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31091300",
        name: "Bangunan Gedung",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31091400",
        name: "Bangunan Air/Jalan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31091500",
        name: "Bangunan Sipil",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31091600",
        name: "Bangunan Kapal",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31091700",
        name: "Bangunan Jalan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31095100",
        name: "Seni",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31095200",
        name: "Seni Ukir",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31095300",
        name: "Dekorasi Ukir",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31095400",
        name: "Seni Tari",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096000",
        name: "STM Mesin",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096100",
        name: "Mesin",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096200",
        name: "Mesin Industri",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096300",
        name: "Mesin Konstruksi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096310",
        name: "Konstruksi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096320",
        name: "Tenaga Motor Bakar",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096330",
        name: "Tenaga Uap",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096400",
        name: "Mesin Kapal",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096450",
        name: "Mekanik Umum",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096500",
        name: "Mesin Produksi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096600",
        name: "Mesin Motor",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096700",
        name: "Mesin Diesel",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096710",
        name: "Mobil",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096720",
        name: "Mobil Diesel",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096730",
        name: "Otomotif",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096800",
        name: "Mesin Listrik",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096810",
        name: "Instruktur Mesin",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31096900",
        name: "Mesin Otomatis",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31097000",
        name: "STM Elektro",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31097100",
        name: "Elektronika",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31097110",
        name: "Elektronika Radio",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31097120",
        name: "Elektronika Pesawat Terbang",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31097130",
        name: "Elektronika Mesin",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31097140",
        name: "Pembangunan  Elektro",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31098000",
        name: "STM Listrik",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31098100",
        name: "Listrik Umum",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31098110",
        name: "Listrik Arus Lemah",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31098120",
        name: "Listrik Arus Kuat",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31098200",
        name: "Listrik / Instrumen Pesawat Terbang",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31098300",
        name: "Listrik Kapal",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31098400",
        name: "Listrik Industri",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31098410",
        name: "Instruktur Listrik",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099100",
        name: "Telekomunikasi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099110",
        name: "Mikro Komunikasi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099200",
        name: "Instrumen",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099300",
        name: "Metalurgi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099310",
        name: "Pengerjaan Logam",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099400",
        name: "Industri",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099510",
        name: "Pertambangan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099520",
        name: "Geodesi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099530",
        name: "Geologi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099600",
        name: "Perabot Rumah Tangga",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099700",
        name: "Monitor",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099800",
        name: "Teknik Pendinginan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099900",
        name: "Kursus Dinas Pendidikan Teknik",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099910",
        name: "Gedung",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "31099920",
        name: "Listrik",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32000000",
        name: "SLTA Keguruan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101000",
        name: "Sekolah Pendidikan Guru",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101010",
        name: "Pendidikan Tk",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101020",
        name: "Pendidikan Sd",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101100",
        name: "SGA",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101120",
        name: "SGPT",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101130",
        name: "SMOA",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101140",
        name: "SGO",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101150",
        name: "SGPLB Tingkat Atas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101170",
        name: "SMA Paket A",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101180",
        name: "SMA Paket B",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101190",
        name: "SMA Paket C",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101200",
        name: "KPG",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101210",
        name: "KPG Paket A",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101220",
        name: "KPG Paket B",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101230",
        name: "KPG Paket C",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101300",
        name: "PGSLP/PGSMTP",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101310",
        name: "PGSLA",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101400",
        name: "STM Paket A",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101410",
        name: "STM Paket B",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101420",
        name: "STM Paket C",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101500",
        name: "SMEA Paket A",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101510",
        name: "SMEA Paket B",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101520",
        name: "SMEA Paket C",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101600",
        name: "PGA 6 Tahun",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101610",
        name: "PGA Islam 6 Tahun",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101620",
        name: "PGA Kristen 6 Tahun",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101630",
        name: "PGA Katholik 6 Tahun",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101640",
        name: "PGA Hindu 6 Tahun",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "32101650",
        name: "PGA Budha 6 Tahun",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33110100",
        name: "Sekolah Teknik Menengah Pembangunan 4 T",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33120100",
        name: "STM Penerbangan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33121100",
        name: "Motor Roket",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33121200",
        name: "Motor / Rangka Pesawat",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33121300",
        name: "Mesin Pesawat Terbang",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33122100",
        name: "Instrumen Penerbangan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33122200",
        name: "Elektronika Radio Pesawat Terbang",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33122300",
        name: "Aironika Elektronika Pesawat Terbang",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33123100",
        name: "Listrik Instrumen Pesawat Terbang",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33130000",
        name: "STM Grafika",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33130100",
        name: "Susunan Huruf Mesin",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33130200",
        name: "Penjilidan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33130300",
        name: "Foto Reproduksi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33130400",
        name: "Cetak",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33140000",
        name: "STM Perkapalan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33140100",
        name: "Mesin Kapal",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33140200",
        name: "Motor Kapal",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33140300",
        name: "Listrik Kapal",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33140400",
        name: "Bangunan Kapal",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33150000",
        name: "STM Kimia",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33150100",
        name: "Kimia Industri",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33150200",
        name: "Kimia Teknik",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33160000",
        name: "STM Pekerjaan Umum",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33160100",
        name: "Geodesi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33160200",
        name: "Bangunan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33160300",
        name: "Bangunan Air / Jalan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33170000",
        name: "Sekolah Teknologi Laboratorium",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33170100",
        name: "Mesin",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33180000",
        name: "Sekolah Topografi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33195000",
        name: "Sekolah Seni Rupa",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33195100",
        name: "Seni Ukir",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33195110",
        name: "Seni Patung",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33195200",
        name: "Dekorasi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33195210",
        name: "Reklame",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33195300",
        name: "Vokasional",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33195400",
        name: "Seni Kriya",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33195410",
        name: "Seni Lukis",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33210100",
        name: "Sekolah Pendidikan Sosial Atas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33210200",
        name: "Sekolah Menengah Pekerjaan Sosial",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33210210",
        name: "Pelayanan Sosial",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33210220",
        name: "Pengembangan Masyarakat",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33210300",
        name: "Sekolah Pembangunan Sosial",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33220100",
        name: "Sekolah Menengah Pariwisata",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33220200",
        name: "Sekolah Menengah Industri Pariwisata",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33230100",
        name: "Sekolah Hakim dan Jaksa",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33230200",
        name: "Sekolah Menengah Kehakiman Atas",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33230300",
        name: "Sekolah Panitra Pengadilan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33230400",
        name: "Pendidikan Hakim Islam Negeri",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33235000",
        name: "Sekolah Persiapan Iain (SPIAIN)",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33236000",
        name: "Sekolah Musik Indonesia",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33240000",
        name: "Sekolah Menengah Karawitan Indonesi",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33240100",
        name: "Seni Karawitan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33240200",
        name: "Kesenian",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33240300",
        name: "Seni Dalang",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33240400",
        name: "Seni Tari",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33240500",
        name: "Seni Musik",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33240600",
        name: "Kesenian Sunda",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33240610",
        name: "Seni Karawitan Sunda",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33240700",
        name: "Kesenian Jawa",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33240710",
        name: "Seni Karawitan Jawa",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33240800",
        name: "Seni Tabuh",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33240900",
        name: "Pedalangan / Theater Daerah",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33241000",
        name: "Sekolah Menengah Kesenian",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33242000",
        name: "Konsevatori Tari",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33243000",
        name: "Konsevatori Karawitan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33243100",
        name: "Bali",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33243200",
        name: "Karawitan",
      },
      {
        pendidikan_id: "5",
        jurusan_id: "33243300",
        name: "Tari",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34000000",
        name: "Diploma I",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010000",
        name: "Diploma I : Ekonomi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010110",
        name: "Administrasi Keuangan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010120",
        name: "Administrasi Niaga",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010130",
        name: "Administrasi Perusahan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010150",
        name: "Tata Niaga",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010210",
        name: "Ekonomi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010220",
        name: "Ekonomi Niaga",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010230",
        name: "Ekonomi Perusahaan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010310",
        name: "Kesekretariatan dan Administrasi Niaga",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010320",
        name: "Ketata Laksanaan Pelayaran Niaga",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010400",
        name: "Koperasi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010410",
        name: "Akutansi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010420",
        name: "Keuangan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010430",
        name: "Keuangan dan Perbankan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010500",
        name: "Management",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010510",
        name: "Management Perusahaan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010520",
        name: "Management Akutansi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010530",
        name: "Management Keuangan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010540",
        name: "Management Keuangan dan Perbandingan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010550",
        name: "Management Perbendaharaan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010560",
        name: "Sekretaris Management",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010570",
        name: "Management Kesekretariatan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010600",
        name: "Management Perkantoran",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010700",
        name: "Management Produksi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010710",
        name: "Pemasaran",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34010800",
        name: "Perbankan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34020000",
        name: "Diploma I : PPAP",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34020010",
        name: "Administrasi Negara",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34020020",
        name: "Administrasi Pemasaran",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34020030",
        name: "Administrasi Perkantoran",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34020040",
        name: "Administrasi Keuangan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34020050",
        name: "Akutansi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34020060",
        name: "Kesekretariatan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34020070",
        name: "Keuangan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34020080",
        name: "Koperasi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34020090",
        name: "Management",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34020100",
        name: "Management Kesekretariatan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34020110",
        name: "Marketing",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34030000",
        name: "Diploma I : P3D",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34030010",
        name: "AAUN",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34030020",
        name: "Bina  Pemasaran Wisata",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34030030",
        name: "Ketatalaksanaan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34030040",
        name: "Nautika",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34030050",
        name: "Penerbangan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34030060",
        name: "RE",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34030070",
        name: "RKP / AIS IV",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34030080",
        name: "RLLU",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34030090",
        name: "RTL",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34030100",
        name: "RTR",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34030110",
        name: "Teknik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34030120",
        name: "Tour And Travel",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34040000",
        name: "Diploma I : Parpostel",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34040110",
        name: "Administrasi Perhotelan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34040120",
        name: "Akomodasi Hotel",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34040130",
        name: "Management Hotel",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34040210",
        name: "Hotel dan Katering",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34040220",
        name: "Pengatur Makanan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34040230",
        name: "Tata Boga",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34040240",
        name: "Tata Hidangan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34040310",
        name: "Tour And Travel",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34040320",
        name: "Tourism Planning And Marketing",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34040330",
        name: "Pariwisata",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34040340",
        name: "Bina Wisata",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34050000",
        name: "Diploma I : Perhubungan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34050100",
        name: "Ahli LLAJR",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34050200",
        name: "Ahli Mesin Kapal",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34050300",
        name: "Mualim Pelayaran Besar",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34060000",
        name: "Diploma I : Pertambangan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34060100",
        name: "Geofisika",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34060200",
        name: "Kegrafikaan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34070000",
        name: "Diploma I : Agama",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34070100",
        name: "Kataketik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34070200",
        name: "Pendidikan Agama Budha",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34070300",
        name: "Pendidikan Agama Hindu",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34070400",
        name: "Pendidikan Agama Islam",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34070500",
        name: "Pendidikan Agama Kristen",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34070600",
        name: "Pendidikan Agama Khatolik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34070700",
        name: "Theologi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080000",
        name: "Diploma I : Bahasa dan Seni",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080100",
        name: "Bahasa Indonesia",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080210",
        name: "Bahasa Jepang",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080220",
        name: "Bahasa Korea",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080230",
        name: "Bahasa Cina",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080240",
        name: "Bahasa Arab",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080300",
        name: "Bahasa Asing",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080310",
        name: "Bahasa Belanda",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080320",
        name: "Bahasa Inggris",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080330",
        name: "Bahasa Jerman",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080340",
        name: "Bahasa Perancis",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080350",
        name: "Bahasa Portugis",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080360",
        name: "Bahasa Rusia",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080370",
        name: "Bahasa Spanyol",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34080380",
        name: "Bahasa Latin",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090000",
        name: "Diploma I : Seni dan Sastra",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090010",
        name: "Penyaji Tari",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090020",
        name: "Sastra",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090030",
        name: "Seni Bali",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090040",
        name: "Seni Karawitan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090050",
        name: "Seni Kriya",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090060",
        name: "Seni Minang",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090070",
        name: "Seni Musik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090080",
        name: "Seni Pendalangan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090090",
        name: "Seni Rupa",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090100",
        name: "Seni Sunda",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090110",
        name: "Seni Tari",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090120",
        name: "Symponi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090130",
        name: "Theater/Drama",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34090140",
        name: "Ukir",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34100000",
        name: "Diploma I : Industri",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34100100",
        name: "Ketrampilan Kerajinan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34100200",
        name: "Management Industri",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34100300",
        name: "Pelayanan Industri",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34110000",
        name: "Diploma I : Kesehatan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34110100",
        name: "Analis",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34110200",
        name: "Analis Medis",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34110300",
        name: "Gizi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34110400",
        name: "Hiperkes",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34110500",
        name: "Keperawatan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34110600",
        name: "Kimia Analis",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34110700",
        name: "Laboratorium Kesehatan/Medis",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34110800",
        name: "Rontgen",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34110900",
        name: "Sanitasi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34120000",
        name: "Diploma I : MIPA",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34120100",
        name: "Fisika",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34120200",
        name: "Grafik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34120300",
        name: "Informatika dan Komputer",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34120400",
        name: "Matematika",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34120500",
        name: "Matematika dan Komputer",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34120600",
        name: "Programmer",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34120700",
        name: "Statistik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34130000",
        name: "Diploma I : Administrasi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34130100",
        name: "Administrasi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34130200",
        name: "Administrasi Negara",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34130300",
        name: "Administrasi Pembangunan Desa",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34130400",
        name: "Administrasi Perkantoran",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34130500",
        name: "Kesekretariatan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34130600",
        name: "Tata Perkantoran",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34140000",
        name: "Diploma I : Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34140100",
        name: "Ilmu Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34140200",
        name: "P3GK",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34140300",
        name: "P3GT",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150000",
        name: "Diploma I : Pertanian",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150110",
        name: "Agronomi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150120",
        name: "Budidaya Pertanian",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150130",
        name: "Budidaya Tanaman Hortikultura",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150140",
        name: "Pengawas Mutu Benih",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150150",
        name: "Penyuluhan Pertanian",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150160",
        name: "Pertanian",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150170",
        name: "Produksi Pertanian",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150200",
        name: "Hama dan Penyakit Tumbuhan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150210",
        name: "Kehutanan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150220",
        name: "Teknik Penyuluhan Kehutanan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150310",
        name: "Teknik Peternakan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150320",
        name: "Ternak Unggas",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150400",
        name: "Usaha Perikanan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34150410",
        name: "Perlindungan Tanaman",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34160000",
        name: "Diploma I : Sosial Politik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34160100",
        name: "Ilmu Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34160200",
        name: "IPS",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34160300",
        name: "Perpustakaan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34160400",
        name: "Phsikologi Pendidikan dan Bimbingan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34160500",
        name: "PLS",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34160600",
        name: "Sospol",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34160700",
        name: "Kesejahteraan Sosial",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170000",
        name: "Diploma I : Teknik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170110",
        name: "Teknik Sipil",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170120",
        name: "Teknik Industri",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170130",
        name: "Teknik Kimia",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170140",
        name: "Teknik Komputer",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170150",
        name: "Teknik Mesin",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170160",
        name: "Teknik Mesin Mekanik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170170",
        name: "Teknik Penyehatan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170180",
        name: "Teknik Perkapalan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170190",
        name: "Teknik Radio",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170210",
        name: "Elektro",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170220",
        name: "Elektronika Industri",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170230",
        name: "Teknik Elektronika",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170310",
        name: "Konstruksi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170320",
        name: "Konstruksi Bangunan Gedung",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170330",
        name: "Konstruksi Bangunan Kapal",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170410",
        name: "Listrik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170420",
        name: "Listrik Arus Kuat",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170430",
        name: "Listrik Arus Lemah",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170440",
        name: "Teknologi Listrik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170450",
        name: "Instalasi Listrik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170510",
        name: "Mesin Produksi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170520",
        name: "Perawatan Mesin",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170530",
        name: "Karya Mesin",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170610",
        name: "Ahli Ukur",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170620",
        name: "Geodesi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170630",
        name: "Hedroteknik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170640",
        name: "Metalurgi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170650",
        name: "Meteorologi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170660",
        name: "Observator",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170670",
        name: "Pengukuran dan Pemetaan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170710",
        name: "Sipil Basah",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170720",
        name: "Sipil Keairan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170730",
        name: "Sipil Kering",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170810",
        name: "Arsitektur",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170820",
        name: "Foto Grametri dan Kartografi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170830",
        name: "Kejuruan Teknik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170840",
        name: "Kimia Analis",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34170850",
        name: "Teknik Telekomunikasi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34180000",
        name: "Diploma I : Pendidikan Ahli Teknik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34180100",
        name: "Teknik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34180200",
        name: "Arsitektur",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34180300",
        name: "Elektro",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34180400",
        name: "Komputer",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34180500",
        name: "Mesin",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34180600",
        name: "Sipil",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34190000",
        name: "Diploma I : Polyteknik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34190100",
        name: "Bangunan Gedung",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34190200",
        name: "Logam",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34190300",
        name: "Mekanik Swis ITB",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34190400",
        name: "Pertanian",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34190500",
        name: "Teknik Elektro",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34190600",
        name: "Teknik Elektronika",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34190700",
        name: "Teknik Mesin",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34500000",
        name: "Diploma I : Komputer",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34500100",
        name: "Aplikasi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34500200",
        name: "Informatika",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34500300",
        name: "Programmer",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34500400",
        name: "Teknik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "34500500",
        name: "Teknik Elektro",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35000000",
        name: "D - I / A - I",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010000",
        name: "D - I / A - I IPS",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010110",
        name: "Anthropologi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010120",
        name: "Anthropologi Budaya",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010130",
        name: "Anthropologi Sosial",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010140",
        name: "Sejarah",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010150",
        name: "Sejarah dan Anthropologi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010160",
        name: "Sejarah dan Archeologi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010170",
        name: "Sejarah dan Budaya",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010180",
        name: "Sejarah Geografi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010190",
        name: "Sejarah Indonesia",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010200",
        name: "Sejarah Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010210",
        name: "Sejarah Purbakala",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010220",
        name: "Civics Hukum",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010230",
        name: "Hukum PMP",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010240",
        name: "Kewarganegaraan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010250",
        name: "PKK",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010260",
        name: "Pkn dan Hukum",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010270",
        name: "PMP dan Kewarganegaraan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010280",
        name: "PSPB",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010310",
        name: "Ilmu Bumi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010400",
        name: "Ilmu Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010410",
        name: "Paedagogik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010420",
        name: "Kataketik Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010430",
        name: "Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010440",
        name: "Pendidikan dan Pengembangan Sosial",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010450",
        name: "Pendidikan dan Pengembangan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010460",
        name: "Pendidikan Dasar",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010480",
        name: "Pendidikan Kesehatan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010490",
        name: "Pendidikan Kesejahteraan Sosial",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010500",
        name: "Pendidikan Khusus",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010510",
        name: "Pendidikan Luar Biasa",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010520",
        name: "Pendidikan Luar Sekolah",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010530",
        name: "Pendidikan Masyarakat",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010540",
        name: "Pendidikan Moral Pancasila",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010550",
        name: "Pendidikan Sekolah",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010560",
        name: "Pendidikan Sosial",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010570",
        name: "Pendidikan Umum",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010580",
        name: "Teori dan Sejarah Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010600",
        name: "Ilmu Kesejahteraan Sosial",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010610",
        name: "Ilmu Pembangunan Masyarakat",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010620",
        name: "Ilmu Pengetahuan Sosial",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010630",
        name: "Kesejahteraan Sosial",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010640",
        name: "Pembangunan Masyarakat Desa",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010700",
        name: "Publisistik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010710",
        name: "Perpustakaan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010800",
        name: "Phsikologi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010810",
        name: "Olahraga",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010820",
        name: "Olahraga dan Kesehatan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010900",
        name: "Sosial",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35010910",
        name: "Sosial Ekonomi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35020000",
        name: "D - I / A - I Eksakta",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35020100",
        name: "Biologi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35020200",
        name: "Fisika",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35020210",
        name: "Ilmu Alam",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35020220",
        name: "Ilmu Pasti dan Alam",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35020230",
        name: "Ilmu Pengetahuan Alam",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35020300",
        name: "Geologi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35020400",
        name: "Ilmu Kimia",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35020410",
        name: "Kimia",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35020500",
        name: "Ilmu Pasti",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35020510",
        name: "Matematika",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35020520",
        name: "Statistik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030000",
        name: "D - I / A - I Bahasa",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030100",
        name: "Bahasa dan Sastra Indonesia",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030110",
        name: "Bahasa dan Sastra Jawa",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030120",
        name: "Bahasa dan Sastra Sunda",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030130",
        name: "Bahasa dan Sastra Batak",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030140",
        name: "Bahasa dan Sastra Bali",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030150",
        name: "Bahasa dan Sastra Minangkabau",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030160",
        name: "Bahasa dan Sastra Daerah",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030200",
        name: "Bahasa Daerah",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030300",
        name: "Sejarah dan Budaya",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030310",
        name: "Sejarah Bahasa Bali",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030500",
        name: "Bahasa dan Sastra Asing",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030510",
        name: "Bahasa dan Sastra Arab",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030520",
        name: "Bahasa dan Sastra Belanda",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030530",
        name: "Bahasa dan Sastra Cina",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030540",
        name: "Bahasa dan Sastra India",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030550",
        name: "Bahasa dan Sastra Inggris",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030560",
        name: "Bahasa dan Sastra Jepang",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030570",
        name: "Bahasa dan Sastra Jerman",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030580",
        name: "Bahasa dan Sastra Korea",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030590",
        name: "Bahasa dan Sastra Perancis",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030600",
        name: "Bahasa dan Sastra Rusia",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030610",
        name: "Bahasa dan Sastra Slavia",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030700",
        name: "Bahasa Arab",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030710",
        name: "Bahasa Bali",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030720",
        name: "Bahasa Batak",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030800",
        name: "Bahasa Asing",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030810",
        name: "Bahasa Belanda",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35030820",
        name: "Bahasa Cina/Cinologi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35040000",
        name: "D - I / A - I Seni",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35040100",
        name: "Bahasa dan Seni",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35040200",
        name: "Menggambar",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35040300",
        name: "Seni Musik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35040400",
        name: "Seni Rupa",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35040500",
        name: "Seni Tari",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35050000",
        name: "D - I / A - I Administrasi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35050100",
        name: "Administrasi Ekonomi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35050200",
        name: "Administrasi Keterampilan Jasa",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35050300",
        name: "Administrasi Keuangan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35050400",
        name: "Administrasi Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35050410",
        name: "Administrasi Supervisi Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35050500",
        name: "Administrasi Perkantoran",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35050510",
        name: "Tata Perkantoran",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35050600",
        name: "Administrasi Perusahaan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35050700",
        name: "Administrasi Sekolah",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35050800",
        name: "Administrasi Sosial",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35050900",
        name: "Ilmu Administrasi Negara",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060000",
        name: "D - I / A - I Ekonomi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060010",
        name: "Akuntansi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060020",
        name: "Bisnis",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060030",
        name: "Bisnis Tata Usaha",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060040",
        name: "Bisnis Vokasional",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060050",
        name: "Ekonomi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060060",
        name: "Ekonomi Koperasi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060070",
        name: "Ekonomi Management",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060080",
        name: "Ekonomi Pembangunan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060090",
        name: "Ekonomi Perusahaan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060100",
        name: "Ilmu Ekonomi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060110",
        name: "Keuangan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060120",
        name: "Management",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060130",
        name: "Pendidikan Dunia Usaha",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060140",
        name: "Pendidikan Management",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060150",
        name: "Studi Pembangunan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060160",
        name: "Tata Niaga",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35060170",
        name: "Tata Perusahaan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070000",
        name: "D - I / A - I Bimbingan dan Penyuluhan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070110",
        name: "Administrasi Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070120",
        name: "Administrasi Supervisi Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070210",
        name: "Bimbingan dan Konseling",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070220",
        name: "Bimbingan dan Penyuluhan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070310",
        name: "Didakti",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070320",
        name: "Didakti dan Kurikulum",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070330",
        name: "Pondasi Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070410",
        name: "Psikologi Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070420",
        name: "Psikologi Pendidikan dan Bimbingan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070510",
        name: "Kurikulum dan Persekolahan/Pengajaran",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070520",
        name: "Kurikulum dan Teknologi Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070530",
        name: "Kurikulum Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070540",
        name: "Kurikulum Penyuluhan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070550",
        name: "Kurtek Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070560",
        name: "Pengajaran dan Pengembangan Kurikulum",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35070600",
        name: "Keolahragaan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35080000",
        name: "D - I / A - I Filsafat",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35080100",
        name: "Filsafat",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35080200",
        name: "Filsafat Bahasa dan Sastra Indonesia",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35080300",
        name: "Filsafat Barat",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35080400",
        name: "Filsafat dan Sosiologi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35080500",
        name: "Filsafat Kebudayaan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35080600",
        name: "Filsafat Pendidikan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090000",
        name: "D - I / A - I Teknik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090100",
        name: "Arsitektur",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090110",
        name: "Teknik Arsitektur",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090200",
        name: "Elektronika",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090210",
        name: "Teknik Elektro",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090220",
        name: "Teknik Elektro Komputer",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090230",
        name: "Teknik Elektro Komunikasi",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090240",
        name: "Teknik Elektronika",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090250",
        name: "Teknik Komputer",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090310",
        name: "Gedung",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090320",
        name: "Teknik Bangunan",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090330",
        name: "Teknik Sipil",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090340",
        name: "Teknik Aliran Sungai",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090410",
        name: "Kimia",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090420",
        name: "Teknik Kimia",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090510",
        name: "Listrik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090520",
        name: "Teknik Listrik",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090610",
        name: "Mesin",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090620",
        name: "Teknik Mesin",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090630",
        name: "Teknik Otomotif",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090710",
        name: "Teknik dan Management Industri",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35090720",
        name: "Teknik Industri",
      },
      {
        pendidikan_id: "6",
        jurusan_id: "35100000",
        name: "Ak.Militer Nasional",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40000000",
        name: "Diploma II",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010000",
        name: "Diploma II : Ekonomi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010110",
        name: "Administrasi Keuangan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010120",
        name: "Administrasi Niaga",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010130",
        name: "Administrasi Perusahaan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010150",
        name: "Tata Niaga",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010210",
        name: "Ekonomi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010220",
        name: "Ekonomi Management",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010230",
        name: "Ekonomi Perusahaan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010310",
        name: "Kesekretariatan dan Administrasi Niaga",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010320",
        name: "Ketatalaksanaan Pelayaran Niaga",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010400",
        name: "Koperasi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010410",
        name: "Akuntansi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010420",
        name: "Keuangan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010430",
        name: "Keuangan dan Perbankan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010500",
        name: "Management",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010510",
        name: "Management Perusahaan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010520",
        name: "Management Akuntansi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010530",
        name: "Management Keuangan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010540",
        name: "Management Keuangan dan Perbandingan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010550",
        name: "Management Perbendaharaan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010560",
        name: "Management Kesekretariatan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010570",
        name: "Management Perkantoran",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010600",
        name: "Management Produksi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010700",
        name: "Sekretaris Management",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010710",
        name: "Pemasaran",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40010800",
        name: "Perbankan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40020000",
        name: "Diploma II : PPAP",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40020010",
        name: "Administrasi Negara",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40020020",
        name: "Administrasi Pemasaran",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40020030",
        name: "Administrasi Perkantoran",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40020040",
        name: "Administrasi Keuangan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40020050",
        name: "Akuntansi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40020060",
        name: "Kesekretariatan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40020070",
        name: "Keuangan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40020080",
        name: "Koperasi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40020090",
        name: "Management",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40020100",
        name: "Management Kesekretariatan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40020110",
        name: "Marketing",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40030010",
        name: "Aaun",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40030020",
        name: "Bina Pemasaran Wisata",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40030030",
        name: "Ketatalaksanaan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40030040",
        name: "Nautika",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40030050",
        name: "Penerbangan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40030060",
        name: "RE",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40030070",
        name: "RKP/AIS IV",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40030080",
        name: "RLLU",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40030090",
        name: "RTL",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40030100",
        name: "RTR",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40030110",
        name: "Tour And Travel",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40030120",
        name: "Teknik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40040000",
        name: "Diploma II : Parpostel",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40040110",
        name: "Administrasi Perhotelan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40040120",
        name: "Akomodasi Hotel",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40040130",
        name: "Manajemen Hotel",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40040210",
        name: "Hotel dan Katering",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40040220",
        name: "Pengatur Makanan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40040230",
        name: "Tata Boga",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40040240",
        name: "Tata Hidangan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40040310",
        name: "Tour dan Travel",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40040320",
        name: "Tourism Planning And Marketing",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40040330",
        name: "Pariwisata",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40040340",
        name: "Bina Wisata",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40050000",
        name: "Diploma II : Perhubungan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40050010",
        name: "Pengujian Kendaraan Bermotor",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40050100",
        name: "Ahli LLAJR",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40050200",
        name: "Ahli Mesin Kapal",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40050300",
        name: "Mualim Pelayaran Besar",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40060000",
        name: "Diploma II : Pertambangan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40060100",
        name: "Geofisika",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40060200",
        name: "Kegrafikaan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40070000",
        name: "Diploma II : Agama",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40070100",
        name: "Kataketik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40070200",
        name: "Pendidikan Agama Islam",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40070300",
        name: "Pendidikan Agama Hindu",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40070400",
        name: "Pendidikan Agama Budha",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40070500",
        name: "Pendidikan Agama Kristen",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40070600",
        name: "Pendidikan Agama Khatolik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40070700",
        name: "Theologi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080000",
        name: "Diploma II : Bahasa dan Seni",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080100",
        name: "Bahasa Indonesia",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080210",
        name: "Bahasa Jepang",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080220",
        name: "Bahasa Korea",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080230",
        name: "Bahasa Cina",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080240",
        name: "Bahasa Arab",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080300",
        name: "Bahasa Asing",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080310",
        name: "Bahasa Belanda",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080320",
        name: "Bahasa Inggris",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080330",
        name: "Bahasa Jerman",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080340",
        name: "Bahasa Perancis",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080350",
        name: "Bahasa Portugis",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080360",
        name: "Bahasa Rusia",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080370",
        name: "Bahasa Spanyol",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40080380",
        name: "Bahasa Latin",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090000",
        name: "Dinas Seni dan Sastra",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090010",
        name: "Seni Bali",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090020",
        name: "Seni Sunda",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090030",
        name: "Seni Minang",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090040",
        name: "Seni Karawitan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090050",
        name: "Seni Kriya",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090060",
        name: "Seni Musik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090070",
        name: "Seni Pendalangan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090090",
        name: "Seni Rupa",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090100",
        name: "Seni Tari",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090110",
        name: "Penyaji Tari",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090120",
        name: "Symponi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090130",
        name: "Theater/Drama",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090140",
        name: "Sastra",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40090150",
        name: "Ukir",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40100000",
        name: "Diploma II : Industri",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40100100",
        name: "Ketrampilan Kerajinan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40100200",
        name: "Management Industri",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40100300",
        name: "Pelayan Industri",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40110000",
        name: "Diploma II : Kesehatan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40110100",
        name: "Analis",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40110200",
        name: "Anaalis Medis",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40110300",
        name: "Gizi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40110400",
        name: "Hiperkes",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40110500",
        name: "Keperawatan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40110600",
        name: "Kimia Analis",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40110700",
        name: "Laboratorium Kesehatan/Medis",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40110800",
        name: "Rontgen",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40110900",
        name: "Sanitasi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40111000",
        name: "Bidan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40111010",
        name: "Progam Pendidikan Bidan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40120000",
        name: "Diploma II : MIPA",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40120100",
        name: "Fisika",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40120200",
        name: "Grafik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40120300",
        name: "Informatika dan Komputer",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40120400",
        name: "Matematika",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40120500",
        name: "Matematika dan Komputer",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40120600",
        name: "Programmer",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40120700",
        name: "Statistik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40130000",
        name: "Diploma II : Administrasi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40130100",
        name: "Administrasi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40130200",
        name: "Administrasi Negara",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40130300",
        name: "Administrasi Pembangunan Desa",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40130400",
        name: "Administrasi Perkantoran",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40130500",
        name: "Kesekretariatan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40130600",
        name: "Tata Perkantoran",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40140000",
        name: "Diploma II : Pendidikan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40140100",
        name: "Ilmu Pendidikan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40140200",
        name: "P3Gk",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40140300",
        name: "P3Gt",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40150000",
        name: "Diploma II : Pertanian",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40150110",
        name: "Agronomi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40150120",
        name: "Budidaya Pertanian",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40150130",
        name: "Budidaya Tanaman Hortikultura",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40150140",
        name: "Pengawas Mutu Benih",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40150150",
        name: "Penyuluhan Pertanian",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40150160",
        name: "Pertanian",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40150170",
        name: "Pruduksi Pertanian",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40150180",
        name: "Perbenihan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40150210",
        name: "Kehutanan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40150220",
        name: "Teknik Penyuluhan Kehutanan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40150310",
        name: "Teknik Peternakan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40150320",
        name: "Ternak Unggas",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40150400",
        name: "Usaha Perikanan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40160000",
        name: "Diploma II : Sosial Politik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40160100",
        name: "Ilmu Pendidikan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40160200",
        name: "IPS",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40160300",
        name: "Perpustakaan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40160400",
        name: "Phsikologi Pendidikan dan Bimbingan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40160500",
        name: "PLS",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40160600",
        name: "Sospol",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170000",
        name: "Diploma II : Teknik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170110",
        name: "Teknik Sipil",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170120",
        name: "Teknik Industri",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170130",
        name: "Teknik Kimia",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170140",
        name: "Teknik Komputer",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170150",
        name: "Teknik Mesin",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170160",
        name: "Teknik Mesin Mekanik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170170",
        name: "Teknik Penyehatan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170180",
        name: "Teknik Perkapalan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170190",
        name: "Teknik Radio",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170210",
        name: "Elektro",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170220",
        name: "Elektronika Industri",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170230",
        name: "Teknik Elektronika",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170310",
        name: "Konstruksi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170320",
        name: "Konstruksi Bangunan Gedung",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170330",
        name: "Konstruksi Bangunan Kapal",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170410",
        name: "Listrik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170420",
        name: "Listrik Arus Kuat",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170430",
        name: "Listrik Arus Lemah",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170440",
        name: "Teknologi Listrik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170450",
        name: "Instalasi Listrik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170510",
        name: "Mesin Industri",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170520",
        name: "Perawatan Mesin",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170530",
        name: "Karya Mesin",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170610",
        name: "Ahli Ukur",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170620",
        name: "Geodesi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170630",
        name: "Hedroteknik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170640",
        name: "Metalurgi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170650",
        name: "Meteorologi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170660",
        name: "Observator",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170670",
        name: "Pengukuran dan Pemetaan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170710",
        name: "Sipil Basah",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170720",
        name: "Sipil Keairan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170730",
        name: "Sipil Kering",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170810",
        name: "Arsitektur",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170820",
        name: "Foto Grametri dan Kartografi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170830",
        name: "Kejuruan Teknik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170840",
        name: "Kimia Analis",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40170850",
        name: "Teknik Telekomunikasi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40180000",
        name: "Diploma II : Pendidikan Ahli Teknik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40180100",
        name: "Teknik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40180200",
        name: "Arsitektur",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40180300",
        name: "Elektro",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40180400",
        name: "Komputer",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40180500",
        name: "Mesin",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40180600",
        name: "Sipil",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40190000",
        name: "Diploma II : Polyteknik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40190100",
        name: "Bangunan Gedung",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40190200",
        name: "Logam",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40190300",
        name: "Mekanik Swis ITB",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40190400",
        name: "Pertanian",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40190500",
        name: "Teknik Elektro",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40190600",
        name: "Teknik Elektronika",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40190700",
        name: "Teknik Mesin",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40500000",
        name: "Diploma II : Komputer",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40500100",
        name: "Aplikasi",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40500200",
        name: "Informatika",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40500300",
        name: "Programmer",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40500400",
        name: "Teknik",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40500500",
        name: "Teknik Elektro",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40600000",
        name: "Diploma II : Pendidikan",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40600100",
        name: "SGPLB",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40600110",
        name: "SGPLB-A (Tuna Netra)",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40600120",
        name: "SGPLB-B (Tuna Rungu)",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40600130",
        name: "SGPLB-C (Tuna Grahita)",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40600140",
        name: "SGPLB-D (Tuna Daksa)",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40600200",
        name: "SGPLB",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40600210",
        name: "SGPLB-A (Tuna Netra)",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40600220",
        name: "SGPLB-B (Tuna Rungu)",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40600230",
        name: "SGPLB-C (Tuna Grahita)",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40600240",
        name: "SGPLB-D (Tuna Daksa)",
      },
      {
        pendidikan_id: "7",
        jurusan_id: "40600250",
        name: "SGPLB-E (Tuna Laras )",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41000000",
        name: "Sarjana Muda",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011000",
        name: "Ekonomi Studi Pembangunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011110",
        name: "Ekonomi Pembangunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011120",
        name: "Ekonomi Pertanian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011130",
        name: "Ekonomi Internasional",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011140",
        name: "Ekonomi Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011150",
        name: "Ekonomi Regional",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011160",
        name: "Ekonomi dan Studi Pembangunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011170",
        name: "Ekonomi Umum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011180",
        name: "Industri",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011190",
        name: "Studi Pembangunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011210",
        name: "Agraria",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011220",
        name: "Koperasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011230",
        name: "Demografi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011240",
        name: "Pertanian Agraria",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011250",
        name: "Sumber Daya Alam",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011260",
        name: "Kebendaharaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011310",
        name: "Perdagangan Luar Negri",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011320",
        name: "Ketataniagaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011330",
        name: "Pemerintahan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011410",
        name: "Statistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011420",
        name: "Studi Perbandingan Ekonomi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011510",
        name: "Transportasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011520",
        name: "Perumahan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41011530",
        name: "Kesehatan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41012000",
        name: "Ekonomi Akuntansi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41012110",
        name: "Ekonomi Inti",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41012120",
        name: "Ekonomi Moneter",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41012210",
        name: "Keuangan dan Perbankan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41012220",
        name: "Keuangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41012230",
        name: "Keuangan Negara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41012310",
        name: "Management Akutansi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41012320",
        name: "Management Keuangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41012330",
        name: "Management Keuangan dan Perbankan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41012400",
        name: "Makro",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41013000",
        name: "Ekonomi Managemen",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41013110",
        name: "Management",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41013120",
        name: "Management Pemasaran",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41013130",
        name: "Management Personalia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41013210",
        name: "Ketatalaksanaan Perusahaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41013220",
        name: "Ketatalaksanaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41013300",
        name: "Ekonomi Perusahaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41013700",
        name: "Pembangunan Masyarakat Desa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41044000",
        name: "Farmasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41044100",
        name: "Apoteker",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41044200",
        name: "Biologi Farmasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41044300",
        name: "Farma Setika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41044500",
        name: "Mikrobiologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41044600",
        name: "Biokimia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41044700",
        name: "Anorganik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41044800",
        name: "Laboratorium",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061000",
        name: "Pertanian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061010",
        name: "Biologi Perairan/Perikanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061020",
        name: "Bercocok Tanam",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061030",
        name: "Usaha Tani",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061040",
        name: "Pembangunan Pertanian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061050",
        name: "Penyuluhan Pertanian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061060",
        name: "Pengolahan Hasil Pertanian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061070",
        name: "Ilmu Tanaman Setahun",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061080",
        name: "Keahlian Agraria",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061090",
        name: "Ilmu Sosial dan Ilmu Ekonomi Pertanian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061100",
        name: "Sosiologi Produksi Tanaman",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061110",
        name: "Teknologi Pertanian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061120",
        name: "Teknologi Pangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061130",
        name: "Teknik Tanaman Keras",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061140",
        name: "Teknik Tanaman Muda",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061150",
        name: "Teknologi Serat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061160",
        name: "Teknologi Pengolahan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061170",
        name: "Teknologi Industri Pertanian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061180",
        name: "Produksi Pertanian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061190",
        name: "Teknik Tanaman Industri",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061210",
        name: "Mekanisasi Pertanian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061220",
        name: "Alat - Alat Pertanian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061230",
        name: "Teknologi Benih",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061240",
        name: "Statistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061250",
        name: "Statistik Pertanian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061260",
        name: "Sosiologi Pedesaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061270",
        name: "Bidang Keahlian Statistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061280",
        name: "Sosial Ekonomi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061290",
        name: "Ekonomi Pembangunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061310",
        name: "Agronomi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061320",
        name: "Agrobisnis",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061330",
        name: "Agronomi Pemulihan Tanah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061340",
        name: "Agronomi Hortikultural",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061350",
        name: "Agronomi Tanaman Keras",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061360",
        name: "Agroklimatologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061370",
        name: "Agroekonomi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061380",
        name: "Agronomi Produksi Tanaman",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061390",
        name: "Pertanian Agronomi Tanah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061410",
        name: "Budidaya Perkebunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061420",
        name: "Budidaya Tanaman Keras",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061430",
        name: "Teknologi Pangan dan Gizi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061440",
        name: "Bercocok Tanam Perkebunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061450",
        name: "Pengawetan Tanah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061460",
        name: "Ilmu Kesuburan Tanah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061470",
        name: "Pengawetan dan Retamalasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061480",
        name: "Penyuluhan Tanah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061490",
        name: "Pengolahan Tanah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061510",
        name: "Perkebunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061520",
        name: "Kehutanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061530",
        name: "Perikanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061540",
        name: "Peternakan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061550",
        name: "Teknologi Hasil Hewan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061560",
        name: "Pengolahan Hasil Hewan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061570",
        name: "Pengolahan Hasil Ternak",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061580",
        name: "Produksi Peternakan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061590",
        name: "Tanaman Pangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061810",
        name: "Tanah dan Pemupukan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061820",
        name: "Pengolahan Tanah dan Tata Air",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061830",
        name: "Klasifikasi Tanah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061840",
        name: "Mikrologi Tanah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061900",
        name: "Produksi dan Pengolahan Tanaman",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061910",
        name: "Gizi Masyarakat dan Sumber Daya Keluarga",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061920",
        name: "Gizi Pertanian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061930",
        name: "Sumber Daya Alam dan Lingkungan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061940",
        name: "Pemanfaatan Sumber Daya",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061950",
        name: "Perusahaan Pertanian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061960",
        name: "Perniagaan Tani",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061970",
        name: "Pembangunan Pedesaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41061980",
        name: "Ekonomi Sumber Daya",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41062000",
        name: "Perkebunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41062200",
        name: "Ekonomi Perkebunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41062300",
        name: "Budidaya Perkebunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41063000",
        name: "Pertamanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41064000",
        name: "Kehutanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41064100",
        name: "Management Hutan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41064110",
        name: "Management Hasil Hutan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41064510",
        name: "Budidaya Hutan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065000",
        name: "Peternakan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065110",
        name: "Produksi Ternak",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065210",
        name: "Ternak Unggas",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065220",
        name: "Ternak Perah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065230",
        name: "Ternak Potong",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065310",
        name: "Nutrisi Makanan Ternak",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065320",
        name: "Makanan Ternak",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065500",
        name: "Ahli Usaha Kultura",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065610",
        name: "Pemeliharaan Ternak",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065620",
        name: "Budi Daya Peternakan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065700",
        name: "Perikanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065800",
        name: "Sosial Ekonomi Peternakan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065900",
        name: "Pemuliaan Ternak",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065910",
        name: "Ilmu Ternak",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41065920",
        name: "Produksi Ternak Unggas",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066000",
        name: "Perikanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066110",
        name: "Budi Daya Perairan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066120",
        name: "Budi Daya Perikanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066210",
        name: "Bidang Keahlian Aquakultur",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066350",
        name: "Penangkapan Ikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066430",
        name: "Managemen dan Kultur Perairan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066440",
        name: "Managemen Sumber Daya Perikanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066450",
        name: "Managemen Penangkapan Ikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066510",
        name: "Pengolahan Hasil Perikanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066520",
        name: "Pengolahan Hasil Laut",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066530",
        name: "Pengolahan Hasil Perairan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066610",
        name: "Sosial Ekonomi Perikanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066620",
        name: "Sosial Ekonomi Perairan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066630",
        name: "Tata Niaga",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066710",
        name: "Perikanan Laut",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066720",
        name: "Biologi Perikanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066910",
        name: "Tata Produksi Perikanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066920",
        name: "Tata Laksana Hasil",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41066930",
        name: "Ekonomi Perikanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41071000",
        name: "MIPA Fisika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41071100",
        name: "Fisika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41071200",
        name: "Fisika Teknik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41071300",
        name: "Ilmu Pasti dan Alam",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072000",
        name: "MIPA Kimia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072100",
        name: "Geologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072110",
        name: "Kimia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072120",
        name: "Kimia Analitik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072130",
        name: "Kimia Umum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072140",
        name: "Kimia Murni",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072150",
        name: "Kimia Analis",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072160",
        name: "Teknik Kimia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072170",
        name: "Anorganik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072180",
        name: "Kimia dan Fisika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072200",
        name: "Geofisika dan Meteorologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072220",
        name: "Apoteker",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072230",
        name: "Farmasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072300",
        name: "Geofisika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41072400",
        name: "Agrometeorologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41073000",
        name: "MIPA Geofisika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41074100",
        name: "Analitik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41075100",
        name: "Astronomi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41076110",
        name: "Statistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41076120",
        name: "Statistika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41077110",
        name: "Eksakta",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41077120",
        name: "Matematika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41078110",
        name: "Biologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41078120",
        name: "Geografi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41079110",
        name: "Kependudukan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41079120",
        name: "Geografi Kependudukan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091000",
        name: "Teknik Sipil",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091010",
        name: "Bangunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091020",
        name: "Teknik Aliran Sungai",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091030",
        name: "Pengairan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091040",
        name: "Perencanaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091050",
        name: "Industri dan Konstruksi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091060",
        name: "Arsitektur",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091070",
        name: "Seni Rupa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091080",
        name: "Konstruksi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091090",
        name: "Grafika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091100",
        name: "Hidrografi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091110",
        name: "Transmigrasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091120",
        name: "Mekanik Tanah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091130",
        name: "Mesin Konstruksi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091140",
        name: "Industri Kapal",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091150",
        name: "Geodesi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091160",
        name: "Planologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091170",
        name: "Teknik Perkapalan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091180",
        name: "Bangunan Kapal",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091190",
        name: "Teknik Regional",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091200",
        name: "Regional Planing",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091210",
        name: "Perhubungan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091220",
        name: "Lingkungan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091230",
        name: "Teknik Penyehatan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41091650",
        name: "Reaktor",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41092000",
        name: "Teknologi Mineral",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41092010",
        name: "Geologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41092020",
        name: "Geofisika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41092100",
        name: "Mineral",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41092110",
        name: "Pertambangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41092120",
        name: "Tambang Metalurgi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41092130",
        name: "Tambang Umum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41092140",
        name: "Tambang Eksplorasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41092210",
        name: "Perminyakan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41092220",
        name: "Mesin Perminyakan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41092310",
        name: "Teknik Geografi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41092320",
        name: "Geografi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41092410",
        name: "Paleantology",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093000",
        name: "Teknologi Industri",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093010",
        name: "Konstruksi Kapal Terbang",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093020",
        name: "Teknologi Kimia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093040",
        name: "Kimia Organik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093050",
        name: "Kimia Anorganik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093070",
        name: "Chemical Enginering",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093080",
        name: "Farmasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093100",
        name: "Laboratorium",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093110",
        name: "Kimia Industri",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093130",
        name: "Kimia Tekstil",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093140",
        name: "Industri Kimia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093210",
        name: "Fisika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093220",
        name: "Fisika Teknik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093230",
        name: "Production Machin Enginering",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093240",
        name: "Mekanik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093310",
        name: "Elektronika/Telekomunikasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093320",
        name: "Teknik Elektro Sistem Pengaturan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093330",
        name: "Teknik Elektro/Arus Lemah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093340",
        name: "Elektronika Arus Lemah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093350",
        name: "Elektro Arus Lemah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093360",
        name: "Teknik Elektronika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093370",
        name: "Elektronika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093380",
        name: "Elektronika/Komunikasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093410",
        name: "Teknik Tenaga Listrik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093420",
        name: "Scrence Pembangkit dan Distribusi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093430",
        name: "Listrik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093440",
        name: "Listrik Arus Lemah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093450",
        name: "Listrik Arus Kuat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093460",
        name: "Kabinet Tenaga Listrik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093510",
        name: "Mesin Umum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093520",
        name: "Elemen Mesin",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093530",
        name: "Elemen Sistem Tenaga",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093540",
        name: "Mesin Produksi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093550",
        name: "Mesin Listrik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093560",
        name: "Mesin Kapal",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093570",
        name: "Teknik Mesin Konstruksi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093580",
        name: "Mesin",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093590",
        name: "Teknik Mesin Penerbangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093600",
        name: "Automotif",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093610",
        name: "Metalurgi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093620",
        name: "Nuklir/Tenaga Reaktor",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093710",
        name: "Teknik Komputer",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093730",
        name: "Sains dan Teknologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093740",
        name: "Informatika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093750",
        name: "Informasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093810",
        name: "Komunikasi/Komputer",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093820",
        name: "Radio dan Televisi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093830",
        name: "Sistem Tenaga",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093840",
        name: "Telekomunikasi dan Elektronika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093850",
        name: "Telekomunikasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093860",
        name: "Radio Fisik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093870",
        name: "Instrument",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093910",
        name: "Teknik dan Management Industri",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093920",
        name: "Sumber Daya",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093940",
        name: "Teknik Makanan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093950",
        name: "Matematika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093970",
        name: "Teknik Gas dan Petrokimia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41093980",
        name: "Teknik Energi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41096000",
        name: "Teknologi Kelautan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41096100",
        name: "Elektronika dan Comunication Enginering",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41096200",
        name: "Enginering",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41096300",
        name: "Naval/Electrical Enginering",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41096400",
        name: "Elektronika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41096500",
        name: "Radar/Suar",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41096600",
        name: "Telekomunikasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41096700",
        name: "Oceanologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41100000",
        name: "Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41101000",
        name: "Pendidikan MIPA",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41101100",
        name: "Ilmu Pasti dan Alam",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41101110",
        name: "Ilmu Pasti",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41101200",
        name: "Matematika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41101210",
        name: "Matematika dan Ipa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41101220",
        name: "Ilmu Pengetahuan Alam",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41101300",
        name: "Fisika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41101500",
        name: "Ilmu Bumi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41101600",
        name: "Biologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41101700",
        name: "Ilmu Hayat/Biologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41101800",
        name: "Statistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102000",
        name: "Pendidikan Teknik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102100",
        name: "Teknik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102120",
        name: "Teknik Bangunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102130",
        name: "Teknik Sipil Bangunan Air",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102140",
        name: "Arsitektur",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102210",
        name: "Teknik Mesin",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102220",
        name: "Teknik Mesin Industri",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102230",
        name: "Teknik Mesin Produksi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102240",
        name: "Teknik Otomotif",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102250",
        name: "Teknik Mekanik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102300",
        name: "Elektro",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102310",
        name: "Teknik Elektro",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102320",
        name: "Teknik Elektronika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102330",
        name: "Elektro Arus Lemah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102400",
        name: "Listrik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102410",
        name: "Listrik Arus Kuat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41102420",
        name: "Listrik Arus Lemah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41103000",
        name: "Pendidikan IPS",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41103100",
        name: "Administrasi Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41103200",
        name: "Administrasi Supervisi Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41103300",
        name: "Administrasi Sekolah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41103400",
        name: "Administrasi Ketrampilan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41103500",
        name: "Administrasi Ketrampilan Jasa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41103600",
        name: "Administrasi Perkantoran",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41103700",
        name: "Administrasi Perusahaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41104100",
        name: "Civics Hukum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41104200",
        name: "Hukum PMP",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41104300",
        name: "Pkn dan Hukum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41104400",
        name: "PMP dan Kewarganegaraan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41104500",
        name: "Tata Negara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41104600",
        name: "Pendidikan Moral Pancasila",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41104610",
        name: "PSPB",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41104620",
        name: "Sejarah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41104630",
        name: "Sejarah dan Anthropologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41105000",
        name: "Seni",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41105110",
        name: "PKK",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41105210",
        name: "Ketrampilan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41105220",
        name: "Ketrampilan Jasa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41105230",
        name: "Ketrampilan Teknik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41105310",
        name: "Sandratari dan Musik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41105320",
        name: "Seni Musik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41105330",
        name: "Seni Rupa dan Kerajinan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41105340",
        name: "Seni Tari",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41105510",
        name: "Tata Boga",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41105520",
        name: "Tata Busana",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41105530",
        name: "Tata Graha",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106100",
        name: "IPS",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106210",
        name: "Tata Niaga",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106220",
        name: "Tata Perkantoran",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106230",
        name: "Tata Perusahaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106240",
        name: "Tata Buku",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106250",
        name: "Akuntansi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106260",
        name: "Hitung Dagang",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106310",
        name: "Ilmu Ekonomi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106320",
        name: "Ekonomi Perusahaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106330",
        name: "Ekonomi Koperasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106340",
        name: "Koperasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106410",
        name: "Bisnis Tata Buku",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106420",
        name: "Bisnis Vokasional",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106510",
        name: "Kesehatan dan Rekreasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106520",
        name: "Kesejahteraan Keluarga",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106530",
        name: "Kesejahteraan Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41106700",
        name: "Management",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41107100",
        name: "Filsafat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41107200",
        name: "Filsafat Kebudayaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41107300",
        name: "Filsafat Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41107400",
        name: "Filsafat Sosiologi Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108000",
        name: "Pendidikan Bahasa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108110",
        name: "Sastra Indonesia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108120",
        name: "Bahasa Indonesia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108130",
        name: "Bahasa dan Sastra",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108140",
        name: "Bahasa & Sastra Indonesia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108150",
        name: "Bahasa dan Sastra Daerah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108160",
        name: "Bahasa dan Sastra Jawa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108170",
        name: "Bahasa Jawa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108180",
        name: "Bahasa dan Sastra Sunda",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108210",
        name: "Sastra Arab",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108220",
        name: "Bahasa Arab",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108230",
        name: "Bahasa dan Sastra Arab",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108310",
        name: "Sastra Rusia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108320",
        name: "Bahasa Rusia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108410",
        name: "Bahasa dan Sastra Asing",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108510",
        name: "Bahasa dan Sastra Inggris",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108610",
        name: "Bahasa dan Sastra Jepang",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108620",
        name: "Bahasa Jepang",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108710",
        name: "Bahasa dan Sastra Jerman",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108720",
        name: "Bahasa Jerman",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41108910",
        name: "Bahasa Perancis",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109000",
        name: "Ilmu Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109100",
        name: "Paedagogik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109200",
        name: "Didaktik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109210",
        name: "Sejarah Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109310",
        name: "Bimbingan dan Penyuluhan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109320",
        name: "Bimbingan dan Konseling",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109330",
        name: "Psikologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109340",
        name: "Psikologi Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109350",
        name: "Psikologi Pendidikan dan Bimbingan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109410",
        name: "Keguruan dan Ilmu Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109420",
        name: "Kurikulum dan Persekolahan/Pengajaran",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109430",
        name: "Kurikulum dan Teknologi Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109440",
        name: "Kurikulum Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109450",
        name: "Kurikulum Penyuluhan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109460",
        name: "Kurtek Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109470",
        name: "Metodologi dan Kurikulum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109480",
        name: "Metodologi Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109490",
        name: "Pengajaran dan Pengembangan Kurikulum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109500",
        name: "Perencanaan Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109510",
        name: "Pendidikan Agama Kristen",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109600",
        name: "Pendidikan Anak",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109610",
        name: "Pendidikan Dasar",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109620",
        name: "Pendidikan Dasar Umum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109630",
        name: "Olahraga",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109640",
        name: "Olahraga dan Kesehatan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109700",
        name: "Pendidikan Bisnis",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109710",
        name: "Pendidikan Dunia Usaha",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109800",
        name: "Pendidikan Guru",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109810",
        name: "Program Guru SPG",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109820",
        name: "Pendidikan Luar Biasa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109830",
        name: "Pendidikan Luar Sekolah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109910",
        name: "Pendidikan Masyarakat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41109920",
        name: "Pendidikan dan Pengembangan Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190110",
        name: "Seni Rupa dan Desain",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190120",
        name: "Seni Murni",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190130",
        name: "Seni Grafis",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190140",
        name: "Seni Rupa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190150",
        name: "Seni Grafik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190160",
        name: "Seni Lukis",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190170",
        name: "Seniman",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190180",
        name: "Illustrasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190210",
        name: "Seni Kriya",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190220",
        name: "Seni Patung",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190230",
        name: "Seni Keramik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190240",
        name: "Kriya Logam",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190250",
        name: "Kriya Kayu",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190310",
        name: "Desain Komunikasi Visual",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190320",
        name: "Desain Tekstil",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190330",
        name: "Seni Reklame",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190340",
        name: "Dekorasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190350",
        name: "Desain Produk",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190360",
        name: "Desain Interior",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190370",
        name: "Desain Komunikasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190380",
        name: "Desain Kriya",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190390",
        name: "Produksi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190410",
        name: "Seni Tari",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190420",
        name: "Tari Jawa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190430",
        name: "Desain Komposisi Tari",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190440",
        name: "Sastra Tari",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190450",
        name: "Teori dan Komposisi Tari",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190460",
        name: "Tari Bali",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190470",
        name: "Kurealogi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190480",
        name: "Tari",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190490",
        name: "Tari Nusantara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190510",
        name: "Karawitan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190520",
        name: "Seni Karawitan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190610",
        name: "Seni Musik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190620",
        name: "Musik Sekolah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190630",
        name: "Sastra Musik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190640",
        name: "Teori Komposisi Musik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190710",
        name: "Theater",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190720",
        name: "Cinematografi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190730",
        name: "Pedalangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190740",
        name: "Diamlurgi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190750",
        name: "Komposisi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190760",
        name: "Camera",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41190770",
        name: "Perhotelan dan Pariwisata",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41201000",
        name: "Sastra Indonesia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41201120",
        name: "Bahasa Indonesia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41201130",
        name: "Sejarah Indonesia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41201140",
        name: "Filsafat Bahasa dan Sastra Indonesia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41201160",
        name: "Bahasa dan Sastra Indonesia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41201170",
        name: "Sastra Nusantara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41201180",
        name: "Bahasa Sansekerta",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41202000",
        name: "Sastra Daerah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41202110",
        name: "Bahasa Jawa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41202120",
        name: "Sastra Jawa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41202130",
        name: "Bahasa dan Sastra Jawa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41202140",
        name: "Budaya Jawa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41202150",
        name: "Jawa Kuno",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41202210",
        name: "Bahasa Sunda",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41202220",
        name: "Sastra Sunda",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41202230",
        name: "Bahasa dan Sastra Sunda",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41202310",
        name: "Bahasa Bali",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41202320",
        name: "Sastra Bali",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41202330",
        name: "Bahasa dan Sastra Bali",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41203000",
        name: "Sastra Asia Timur",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41203110",
        name: "Bahasa Jepang",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41203120",
        name: "Sastra Jepang",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41203130",
        name: "Bahasa dan Sastra Jepang",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41203210",
        name: "Bahasa Cina",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41203220",
        name: "Sastra Cina",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41203230",
        name: "Bahasa dan Sastra Cina",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41203310",
        name: "Bahasa Korea",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41203320",
        name: "Sastra Korea",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41203330",
        name: "Bahasa dan Sastra Korea",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41204000",
        name: "Sastra Barat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41204110",
        name: "Bahasa Arab",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41204120",
        name: "Sastra Arab",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41204130",
        name: "Bahasa dan Sastra Arab",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41204140",
        name: "Sastra Arab dan Kebudayaan Islam",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41204210",
        name: "Bahasa India",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41204220",
        name: "Sastra India",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41204230",
        name: "Bahasa dan Sastra India",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205000",
        name: "Sastra Eropa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205010",
        name: "Bahasa dan Sastra Eropa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205110",
        name: "Sastra Inggris",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205120",
        name: "Bahasa Inggris",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205130",
        name: "Bahasa dan Sastra Inggris",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205140",
        name: "Kesusastraan Inggris",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205150",
        name: "Anglo Saxon",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205210",
        name: "Sastra Perancis",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205220",
        name: "Bahasa Perancis",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205230",
        name: "Bahasa dan Sastra Perancis",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205310",
        name: "Sastra Belanda",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205320",
        name: "Bahasa Belanda",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205330",
        name: "Bahasa dan Sastra Belanda",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205410",
        name: "Sastra Rusia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205420",
        name: "Bahasa Rusia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205430",
        name: "Bahasa dan Sastra Rusia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205510",
        name: "Sastra Jerman",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205520",
        name: "Bahasa Jerman",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205530",
        name: "Bahasa dan Sastra Jerman",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205600",
        name: "Sastra Roma",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205710",
        name: "Sastra Slavia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41205720",
        name: "Bahasa dan Sastra Slavia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206000",
        name: "Sastra Sejarah Antropologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206010",
        name: "Purbakala",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206110",
        name: "Archeologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206120",
        name: "Anthropology",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206130",
        name: "Sejarah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206140",
        name: "Purbakala dan Etnologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206210",
        name: "Sejarah dan Budaya",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206220",
        name: "Sejarah dan Anthropologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206310",
        name: "Anthropologi Budaya",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206320",
        name: "Anthropologi Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206400",
        name: "Sosiologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206500",
        name: "Paedagogik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206600",
        name: "Linguistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206700",
        name: "Linguistik Jawa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41206800",
        name: "Linguistik Indonesia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41207000",
        name: "Sastra Lain - Lain",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41207100",
        name: "Linguistik Inggris",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41207200",
        name: "Kesusastraan Sariah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41207300",
        name: "Sastra dan Filsafat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41207400",
        name: "Indonesialogi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41207500",
        name: "Etnomusicologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41207600",
        name: "Musik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41207710",
        name: "Seni Rupa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41207720",
        name: "Seni Lukis",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41207810",
        name: "Desain Tektil",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41207820",
        name: "Desain Grafis",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41207900",
        name: "Perpustakaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41230000",
        name: "Hukum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41231100",
        name: "Hukum Kenegaraan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41231110",
        name: "Adat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41231120",
        name: "Perundang - Undangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41231130",
        name: "Ilmu Hukum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41231140",
        name: "Tata Hukum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41231150",
        name: "Umum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233110",
        name: "Hukum Keperdataan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233120",
        name: "Perdata Adat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233130",
        name: "Perdata Internasional",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233140",
        name: "Perdata Pidana Islam",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233150",
        name: "Perdata Umum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233160",
        name: "Studi Hukum Perdata",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233170",
        name: "Hukum Perdata",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233180",
        name: "Perdata Bw",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233190",
        name: "Studi Hukum Pidana",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233210",
        name: "Hukum Islam",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233220",
        name: "Hukum Sipil",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233310",
        name: "Agraria",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233320",
        name: "Sosial Agraria",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233330",
        name: "Dagang",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233340",
        name: "Notariat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233410",
        name: "Hukum Administrasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233420",
        name: "Hukum Pemda dan Keswatantraan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233430",
        name: "Penerbangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41233440",
        name: "Perburuhan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41234100",
        name: "Tata Negara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41234200",
        name: "Tata Pemerintahan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41234300",
        name: "Kenegaraan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41234400",
        name: "Hukum Tata Negara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41234500",
        name: "Ketatanegaraan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41235100",
        name: "Hukum Internasional",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41235200",
        name: "Hukum Laut Internasional",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41235300",
        name: "Perjanjian Internasional",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41237100",
        name: "Sarmud Hukum Kemasyarakatan & Pembangun",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41237200",
        name: "Hukum Ekonomi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41237300",
        name: "Ilmu Kemasyarakatan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41237400",
        name: "Masyarakatan dan Pembangunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41237500",
        name: "Puspenmas",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41238100",
        name: "Hukum Acara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41238200",
        name: "Acara Pidana",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41238300",
        name: "Peradilan Perdata",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41238400",
        name: "Pratisi Hukum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41239100",
        name: "Hukum Pidana",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41239200",
        name: "Kepidanaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41239300",
        name: "Kriminologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41260000",
        name: "Adnimistrasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41260110",
        name: "Administrasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41260120",
        name: "Sarmud Administrasi Negara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41260130",
        name: "Administrasi Niaga",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41260140",
        name: "Administrasi Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41260200",
        name: "Ketatanegaraan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41260300",
        name: "Keuangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41260400",
        name: "Komunikasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41260500",
        name: "Publisistik/Jurnalistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41260610",
        name: "Management",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41260620",
        name: "Management Keuangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41260630",
        name: "Management Produksi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41260700",
        name: "Pemerintahan Umum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41260800",
        name: "Sosiologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41300000",
        name: "Psikologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41300110",
        name: "Anak dan Pengembangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41300120",
        name: "Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41300130",
        name: "Klinis",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41300210",
        name: "Botani",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41300220",
        name: "Zoologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41300310",
        name: "Sarjana Muda Sosial Politik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41300320",
        name: "Psikologi Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41300410",
        name: "Eksperimen",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41300510",
        name: "Industri dan Organisasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41300520",
        name: "Perusahaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41300530",
        name: "Industri",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41310000",
        name: "Kemasyarakatan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41310100",
        name: "Administrasi Kesehatan Masyarakat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41310200",
        name: "Epidemiologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41310300",
        name: "Kependudukan dan Statistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41310400",
        name: "Kesehatan dan Lingkungan Kerja",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41310500",
        name: "Pendidikan Kesehatan Masyarakat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401000",
        name: "Agama Islam",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401100",
        name: "Agama Ushuluddin",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401110",
        name: "Aqidah dan Filsafat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401120",
        name: "Dakwah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401130",
        name: "Filsafat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401140",
        name: "Ilmu Agama",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401150",
        name: "Pendidikan Agama",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401160",
        name: "Perbandingan Agama",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401170",
        name: "Tauhid",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401180",
        name: "Ushuludin",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401200",
        name: "Agama Adab",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401210",
        name: "Dakwah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401220",
        name: "Sastra Arab",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401230",
        name: "Sejarah dan Kebudayaan Islam",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401300",
        name: "Agama Tarbiyah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401310",
        name: "Bahasa Arab",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401320",
        name: "Bahasa Indonesia",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401330",
        name: "Bahasa Inggris",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401340",
        name: "Bimbingan Penyuluhan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401350",
        name: "Dakwah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401360",
        name: "Ilmu Agama",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401370",
        name: "Ketatanegaraan/Ketataniagaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401380",
        name: "Paedagogik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401390",
        name: "Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401400",
        name: "Pendidikan Agama",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401410",
        name: "Pendidikan Kemasyarakatan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401420",
        name: "Tadris",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401430",
        name: "Tarbiyah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401440",
        name: "Pendidikan Umum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401450",
        name: "Pendidikan Agama Islam",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401460",
        name: "Pendidikan Ilmu Agama",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401500",
        name: "Agama Syariah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401510",
        name: "Ekonomi ( Muamalat )",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401520",
        name: "Filsafat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401540",
        name: "Pendidikan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401550",
        name: "Pengadilan Agama",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401560",
        name: "Perbandingan Agama",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401570",
        name: "Perdata",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401580",
        name: "Pidana ( Jinayat )",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401590",
        name: "Qodhlo",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401600",
        name: "Sejarah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401610",
        name: "Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401620",
        name: "Syariyah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401630",
        name: "Tafsir dan Hadist",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401640",
        name: "Hukum Agama",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401700",
        name: "Agama Dakwah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401710",
        name: "Dakwah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401720",
        name: "Jurnalistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401730",
        name: "Publisistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41401740",
        name: "Retorika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41402000",
        name: "Hindu Dharma",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41403100",
        name: "Budha",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41404000",
        name: "Seminari",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41404100",
        name: "Seminari Alkitab",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41406100",
        name: "Theologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41406110",
        name: "Filsafat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41406120",
        name: "Kataketik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41406130",
        name: "Agama Kristen Katholik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41406140",
        name: "Agama Kristen Protestan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41406150",
        name: "Ilmu Agama dan Theologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41406160",
        name: "Filsafat Theologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41406170",
        name: "Pendidikan Agama Kristen",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41440000",
        name: "Ilmu Pemerintahan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41440010",
        name: "Ilmu Pemerintahan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41446000",
        name: "Upn Veteran",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41446010",
        name: "Geologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41446020",
        name: "Perminyakan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41446030",
        name: "Tambang Umum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450000",
        name: "Sosial Politik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450110",
        name: "Umum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450120",
        name: "Ilmu Politik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450130",
        name: "Ilmu Sosial Politik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450140",
        name: "Politik Pemerintahaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450210",
        name: "Ketatanegaraan Dalam Negeri",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450220",
        name: "Tata Negara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450230",
        name: "Administrasi Pemerintah",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450240",
        name: "Sosial Ekonomi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450250",
        name: "Ilmu Pemerintahan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450300",
        name: "Hubungan Internasional",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450410",
        name: "Sosiatri",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450420",
        name: "Psikologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450430",
        name: "Sosiologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450440",
        name: "Filsafat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450450",
        name: "Pengetahuan Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450460",
        name: "Psikologi Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450470",
        name: "Studi Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450500",
        name: "Anthropologi Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450510",
        name: "Kesejahteraan Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450520",
        name: "Kriminologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450530",
        name: "Anthropologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450540",
        name: "Sejarah dan Archeologi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450610",
        name: "Administrasi Negara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450620",
        name: "Adminisrtasi Fiskal",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450640",
        name: "Ketataniagaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450650",
        name: "Personal Management",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450660",
        name: "Publik Administrasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450670",
        name: "Administrasi Pembangunan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450680",
        name: "Administrasi Kepegawaian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450690",
        name: "Hubungan Masyarakat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450710",
        name: "Komunikasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450720",
        name: "Publisistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450730",
        name: "Komunikasi Massa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450740",
        name: "Jurnalistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450750",
        name: "Penerangan / Propaganda",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450760",
        name: "Komunikasi Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450770",
        name: "Penerangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41450780",
        name: "Perpustakaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41460000",
        name: "Kesejahteraan Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41460010",
        name: "Umum",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41460100",
        name: "Pekerjaan Sosial",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41500000",
        name: "Komputer",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41500100",
        name: "Aplikasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41500200",
        name: "Informatika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41500300",
        name: "Programmer",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41500400",
        name: "Teknik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41500500",
        name: "Teknik Elektro",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41510000",
        name: "Statistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41510100",
        name: "Statistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41510200",
        name: "Matematika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41530000",
        name: "Komunikasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41530100",
        name: "Jurnalistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41530200",
        name: "Hubungan Internasional",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41530210",
        name: "Hubungan Masyarakat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41530300",
        name: "Publisistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41530400",
        name: "Komunikasi Massa",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41530500",
        name: "Kesehatan Masyarakat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41530700",
        name: "Ilmu Perpustakaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41530800",
        name: "Ilmu Penerangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41580000",
        name: "Koperasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41580100",
        name: "Management Pemasaran",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41580200",
        name: "Management Perbelanjaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41580300",
        name: "Management Perbankan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41580310",
        name: "Teknologi Sanitasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "41580320",
        name: "Teknologi Tekstil",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43000000",
        name: "Akademi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43060000",
        name: "APDN",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43060010",
        name: "Pemerintahan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43151000",
        name: "Akademi Pendidikan Kemasyarakatan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43152000",
        name: "Akademi Pendidikan Jasmani",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43153000",
        name: "Akademi Perpustakaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43160000",
        name: "Akademi Penerangan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43187000",
        name: "Akademi Perburuhan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43200010",
        name: "Akademi Kimia Analis",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43210000",
        name: "Akademi Keperawatan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43221000",
        name: "Akademi Gula Negara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43222000",
        name: "Akademi Ilmu Kepegawaian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43223000",
        name: "Akademi Ilmu Administrasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43223010",
        name: "Administrasi Negara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43223020",
        name: "Kesekretariatan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43223030",
        name: "Negara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43223040",
        name: "Niaga",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43224000",
        name: "Akademi Ilmu Management",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43224010",
        name: "Office Management",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43224020",
        name: "Management Pemerintahan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43225000",
        name: "Akademi Dinas Luar Negeri",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43226000",
        name: "Akademi Perkantoran",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43227000",
        name: "Akademi Hidrografi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43228000",
        name: "Akademi Elektronika",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43229000",
        name: "Akademi Industri Militer",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43230000",
        name: "Akademi Sandi Negara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43231000",
        name: "Akademi Kataketik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43233000",
        name: "Akademi Statistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43233010",
        name: "Statistik Industri dan Komputasi",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43233020",
        name: "Statistik",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43233030",
        name: "Akademi Pimpinan Perusahaan",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43250000",
        name: "Akademi Abri",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43250110",
        name: "Darat",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43250120",
        name: "Kepolisian",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43250130",
        name: "Laut",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43250140",
        name: "Udara",
      },
      {
        pendidikan_id: "8",
        jurusan_id: "43250150",
        name: "Manajemen Industri",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44000000",
        name: "Diploma III",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44000010",
        name: "Akademi Militer Nasional",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44000020",
        name: "Pemerintahan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010000",
        name: "Diploma III Ekonomi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010090",
        name: "Administrasi Pertanahan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010100",
        name: "Administrasi Logistik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010110",
        name: "Administrasi Keuangan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010120",
        name: "Administrasi Niaga",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010130",
        name: "Administrasi Perusahaan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010140",
        name: "Administrasi Kepegawaian",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010150",
        name: "Tata Niaga",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010160",
        name: "Kearsipan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010210",
        name: "Ekonomi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010220",
        name: "Ekonomi Management",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010230",
        name: "Ekonomi Perusahaan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010240",
        name: "Ekonomi Pemasaran",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010310",
        name: "Kesekretariatan dan Administrasi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010320",
        name: "Ketatalaksanaan Pelayaran Niaga",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010330",
        name: "Pelayaran",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010400",
        name: "Koperasi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010410",
        name: "Akuntansi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010420",
        name: "Keuangan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010430",
        name: "Keuangan dan Perbankan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010440",
        name: "Perpajakan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010500",
        name: "Management",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010510",
        name: "Management Perusahaan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010520",
        name: "Management Akuntansi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010530",
        name: "Management Keuangan dan Perbankan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010540",
        name: "Management Perbendaharaan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010550",
        name: "Sekretaris Management",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010560",
        name: "Management Kesekretariatan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010570",
        name: "Management Perkantoran",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010580",
        name: "Management Pemerintahan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010600",
        name: "Management Produksi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010700",
        name: "Manajemen Pemasaran",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44010800",
        name: "Perbankan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44020000",
        name: "Diploma III PPAP",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44020010",
        name: "Administrasi Negara",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44020020",
        name: "Administrasi Pemasaran",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44020030",
        name: "Administrasi Perkantoran",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44020060",
        name: "Kesekretariatan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44020070",
        name: "Administrasi Keuangan Negara",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44020080",
        name: "Koperasi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44020100",
        name: "Management Kesekretariatan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44020110",
        name: "Marketing",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44030010",
        name: "Aaun",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44030020",
        name: "Bina Pemasaran Wisata",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44030030",
        name: "Ketatalaksanaan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44030040",
        name: "Nautika",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44030050",
        name: "Penerbangan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44030060",
        name: "RE",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44030070",
        name: "RKP / AIS IV",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44030080",
        name: "RLLU",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44030090",
        name: "RTL",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44030100",
        name: "RTR",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44030110",
        name: "Teknik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44030120",
        name: "Tour And Travel",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44030130",
        name: "Otomotip",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44030140",
        name: "Teknik Aeronautika",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44040000",
        name: "Diploma III Parpostel",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44040110",
        name: "Administrasi Perhotelan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44040120",
        name: "Akomodasi Hotel",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44040130",
        name: "Management Hotel",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44040210",
        name: "Hotel dan Katering",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44040220",
        name: "Pengaturan Makanan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44040230",
        name: "Tata Boga",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44040240",
        name: "Tata Hidangan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44040310",
        name: "Tour And Travel",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44040320",
        name: "Tourism Planning And Marketing",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44040330",
        name: "Pariwisata",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44040340",
        name: "Bina Wisata",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44040350",
        name: "Dokumentasi Budaya",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44050000",
        name: "Diploma III Perhubungan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44050100",
        name: "Ahli LLAJR",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44050200",
        name: "Ahli Mesin Kapal",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44050300",
        name: "Mualim Pelayaran Besar",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44060000",
        name: "Diploma III Pertambangan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44060100",
        name: "Geofisika",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44060200",
        name: "Kegrafikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44070000",
        name: "Diploma III Agama",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44070100",
        name: "Kataketik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44070200",
        name: "Pendidikan Agama Islam",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44070300",
        name: "Pendidikan Agama Hindu",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44070400",
        name: "Pendidikan Agama Budha",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44070500",
        name: "Pendidikan Agama Katholik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44070600",
        name: "Pendidikan Agama Kristen",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44070700",
        name: "Theologi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080000",
        name: "Diploma III Bahasa dan Seni",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080100",
        name: "Bahasa Indonesia",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080210",
        name: "Bahasa Jepang",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080220",
        name: "Bahasa Korea",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080230",
        name: "Bahasa Cina",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080240",
        name: "Bahasa Arab",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080300",
        name: "Bahasa Asing",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080310",
        name: "Bahasa Belanda",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080320",
        name: "Bahasa Inggris",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080330",
        name: "Bahasa Jerman",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080340",
        name: "Bahasa Perancis",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080350",
        name: "Bahasa Portugis",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080360",
        name: "Bahasa Rusia",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080370",
        name: "Bahasa Spanyol",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44080380",
        name: "Bahasa Latin",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090000",
        name: "Diploma III Seni dan Sastra",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090010",
        name: "Sastra",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090020",
        name: "Seni Bali",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090030",
        name: "Seni Karawitan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090040",
        name: "Seni Kriya",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090050",
        name: "Seni Minang",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090060",
        name: "Seni Musik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090070",
        name: "Seni Pendalangan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090080",
        name: "Seni Rupa",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090090",
        name: "Seni Sunda",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090100",
        name: "Seni Tari",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090110",
        name: "Symponi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090120",
        name: "Drama / Theater",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090130",
        name: "Ukir",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44090140",
        name: "Penyaji Tari",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44100000",
        name: "Diploma III Industri",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44100010",
        name: "Ketempilan Kerajinan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44100020",
        name: "Management Industri",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44100030",
        name: "Pelayanan Industri",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110000",
        name: "Kesehatan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110010",
        name: "Ilmu Kesehatan Masyarakat",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110020",
        name: "Kesehatan Gigi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110030",
        name: "Kesehatan Lingkungan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110040",
        name: "Hiperkes dan Keselamatan Kerja",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110100",
        name: "Analis",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110110",
        name: "Analis Kesehatan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110120",
        name: "Analis Farmasi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110200",
        name: "Analis Medis",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110300",
        name: "Gizi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110400",
        name: "Hipertensi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110500",
        name: "Keperawatan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110510",
        name: "Kebidanan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110520",
        name: "Radiodiagnostik & Radioterapi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110530",
        name: "Administrasi Rekam Medis",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110540",
        name: "Perekam dan Informatika Kesehatan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110550",
        name: "Manajemen Informasi Kesehatan dan Rekam Medis",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110560",
        name: "Fisioterapi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110570",
        name: "Radiografer",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110600",
        name: "Kimia Analis",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110610",
        name: "Kimia Industri",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110700",
        name: "Laboratorium Kesehatan / Medis",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110800",
        name: "Rontgen",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110810",
        name: "Elektro Medik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44110900",
        name: "Sanitasi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44120000",
        name: "Diploma III MIPA",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44120010",
        name: "Kimia Tekstil",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44120100",
        name: "Fisika",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44120200",
        name: "Grafik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44120300",
        name: "Informatika dan Komputer",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44120400",
        name: "Matematika",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44120500",
        name: "Matematika dan Komputer",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44120600",
        name: "Progmer",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44120700",
        name: "Statistik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44130000",
        name: "Diploma III Administrasi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44130100",
        name: "Administrasi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44130300",
        name: "Administrasi Pembangunan Desa",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44130400",
        name: "Administrasi Perkantoran",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44130500",
        name: "Kesekretariatan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44130600",
        name: "Tata Perkantoran",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44140000",
        name: "Diploma III Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44140100",
        name: "Ilmu Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44140110",
        name: "Pendidikan Luar Biasa",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44140120",
        name: "Pendidikan Kimia",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44140200",
        name: "P 3 G T",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44140300",
        name: "P 3 G K",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150000",
        name: "Diploma III Pertanian",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150010",
        name: "Agribisnis",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150100",
        name: "Perkebunan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150110",
        name: "Agronomi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150120",
        name: "Budidaya Pertanian",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150130",
        name: "Budidaya Tanaman Hortikultura",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150140",
        name: "Pengawas Mutu Benih",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150150",
        name: "Penyuluhan Pertanian",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150160",
        name: "Pertanian",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150170",
        name: "Produksi Pertanian",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150180",
        name: "Usaha Tani",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150190",
        name: "Perlindungan Tanaman",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150200",
        name: "Penyuluhan Perikanan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150210",
        name: "Kehutanan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150220",
        name: "Teknik Penyuluhan Kehutanan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150230",
        name: "Manajemen Hutan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150300",
        name: "Teknologi dan Industri Pakan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150310",
        name: "Teknik Peternakan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150320",
        name: "Ternak Unggas",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150330",
        name: "Medis Veteriner",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150340",
        name: "Kesehatan Hewan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150390",
        name: "Budidaya Perairan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150400",
        name: "Usaha Perikanan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150410",
        name: "Pengolahan Hasil Laut",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150420",
        name: "Budidaya Perikanan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150430",
        name: "Pendidikan Dan Latihan Ahli Usaha Perikanan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150440",
        name: "Pengelolaan Sumber Daya Perairan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44150500",
        name: "Teknik Reproduksi Ikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44160000",
        name: "Diploma III Sosial Politik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44160100",
        name: "Ilmu Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44160200",
        name: "IPS",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44160300",
        name: "Perpustakaan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44160310",
        name: "Lmu Perpustakaan dan Informasi Islam",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44160400",
        name: "Psikologi Pendidkan dan Bimbingan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44160500",
        name: "PLS",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44160600",
        name: "Sospol",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44160700",
        name: "Kesejahteraan Sosial",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170000",
        name: "Diploma III Teknik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170110",
        name: "Teknik Sipil",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170120",
        name: "Teknik Industri",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170130",
        name: "Teknik Kimia",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170140",
        name: "Teknik Komputer",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170150",
        name: "Teknik Mesin",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170160",
        name: "Teknik Mesin Mekanik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170170",
        name: "Teknik Penyehatan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170180",
        name: "Teknik Perkapalan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170190",
        name: "Teknik Radio",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170200",
        name: "Teknik Pengairan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170210",
        name: "Teknik Elektronika",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170220",
        name: "Elektronika Industri",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170230",
        name: "Elektro",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170240",
        name: "Teknik Lingkungan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170250",
        name: "Teknik Planologi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170260",
        name: "Teknik Mesin Maintenance",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170310",
        name: "Konstruksi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170320",
        name: "Konstruksi Bangunan Gedung",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170330",
        name: "Konstruksi Bangunan Kapal",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170340",
        name: "Konstruksi Sipil",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170410",
        name: "Listrik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170420",
        name: "Listrik Arus Kuat",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170430",
        name: "Listrik Arus Lemah",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170440",
        name: "Teknologi Listrik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170450",
        name: "Instalasi Listrik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170460",
        name: "Penilik Teknik Listrik Bandar Udara",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170510",
        name: "Mesin Produksi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170520",
        name: "Perawatan Mesin",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170530",
        name: "Karya Mesin",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170610",
        name: "Ahili Ukur",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170620",
        name: "Geodesi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170630",
        name: "Hedroteknik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170640",
        name: "Metalurgi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170650",
        name: "Meteorologi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170660",
        name: "Observator",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170670",
        name: "Pengukuran dan Pemetaan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170710",
        name: "Sipil Basah",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170720",
        name: "Sipil Kering",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170730",
        name: "Sipil Keairan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170810",
        name: "Arsitektur",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170820",
        name: "Foto Grametri dan Kartografi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170830",
        name: "Kejuruan Teknik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44170850",
        name: "Teknik Telekomunikasi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44180000",
        name: "Diploma III Pendidikan Ahli Teknik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44180400",
        name: "Komputer",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44180410",
        name: "Teknik Komputer dan Informatika",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44180500",
        name: "Mesin",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44180600",
        name: "Sipil",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44190000",
        name: "Diploma III Potyteknik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44190100",
        name: "Bangunan Gedung",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44190200",
        name: "Logam",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44190300",
        name: "Mekanik Swiss ITB",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44190500",
        name: "Teknik Elektro",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44500000",
        name: "Diploma III Komputer",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44500100",
        name: "Aplikasi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44500110",
        name: "Komputer Keuangan dan Perbankan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44500210",
        name: "Teknik Informatika",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44500220",
        name: "Manajemen Informatika",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44500230",
        name: "Sistem Informasi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44500300",
        name: "Programmer",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "44500510",
        name: "Pembangunan Kota",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46000000",
        name: "D - III / A - III",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010000",
        name: "D - III / A - III IPS",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010110",
        name: "Antropologi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010120",
        name: "Antropologi Budaya",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010130",
        name: "Antropologi Sosial",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010140",
        name: "Sejarah",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010150",
        name: "Sejarah dan Anthropologi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010160",
        name: "Sejarah dan Archeologi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010170",
        name: "Sejarah dan Budaya",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010180",
        name: "Sejarah Geografi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010190",
        name: "Sejarah Indonesia",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010200",
        name: "Sejarah Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010210",
        name: "Sejarah Purbakala",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010220",
        name: "Civic Hukum",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010230",
        name: "Hukum PMP",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010240",
        name: "Kewarganegaraan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010250",
        name: "PKK",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010260",
        name: "Pkn dan Hukum",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010270",
        name: "PMP dan Kewarganegaraan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010280",
        name: "PSPB",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010310",
        name: "Ilmu Bumi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010400",
        name: "Ilmu Mendidik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010410",
        name: "Paedagogik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010420",
        name: "Kataketik Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010430",
        name: "Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010440",
        name: "Pendidikan dan Pengembangan Sosial",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010450",
        name: "Pendidikan dan Pengembangan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010460",
        name: "Pendidikan Dasar",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010470",
        name: "Pendidikan Kemasyarakatan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010480",
        name: "Pendidikan Kesehatan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010490",
        name: "Pendidikan Kesejahteraan Sosial",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010500",
        name: "Pendidikan Khusus",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010510",
        name: "Pendidikan Luar Biasa",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010520",
        name: "Pendidikan Luar Sekolah",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010530",
        name: "Pendidikan Masyarakat",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010540",
        name: "Pendidikan Moral Pancasila",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010550",
        name: "Pendidikan Sekolah",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010560",
        name: "Pendidikan Sosial",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010570",
        name: "Pendidikan Umum",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010580",
        name: "Teori dan Sejarah Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010600",
        name: "Ilmu Kesejahteraan Sosial",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010610",
        name: "Ilmu Pembangunan Masyarakat",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010620",
        name: "Ilmu Pembangunan Sosial",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010630",
        name: "Kesejahteraan Sosial",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010640",
        name: "Pembangunan Masyarakat Desa",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010700",
        name: "Publisistik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010710",
        name: "Perpustakaan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010800",
        name: "Psikologi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010810",
        name: "Olahraga",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010820",
        name: "Olahraga dan Kesehatan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010900",
        name: "Sosial",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46010910",
        name: "Sosial  Ekonomi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46020000",
        name: "D - III / A - III Eksakta",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46020100",
        name: "Boilogi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46020200",
        name: "Fisika",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46020210",
        name: "Ilmu Alam",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46020220",
        name: "Ilmu Pasti dan Alam",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46020230",
        name: "Ilmu Pengetahuan Alam",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46020300",
        name: "Ilmu Kimia",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46020400",
        name: "Ilmu Pasti",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46020410",
        name: "Kimia",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46020500",
        name: "Matematika",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46020510",
        name: "Geologi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46020520",
        name: "Statistik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030000",
        name: "D - III / A - III Bahasa",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030100",
        name: "Bahasa dan Sastra Indonesia",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030110",
        name: "Bahasa dan Sastra Jawa",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030120",
        name: "Bahasa dan Sastra Sunda",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030130",
        name: "Bahasa dan Sastra Batak",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030140",
        name: "Bahasa dan Sastra Bali",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030150",
        name: "Bahasa dan Sastra Minangkabau",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030160",
        name: "Bahasa dan Sastra Daerah",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030200",
        name: "Bahasa Daerah",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030300",
        name: "Sejarah dan Budaya",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030310",
        name: "Sejarah Bahasa Bali",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030500",
        name: "Bahasa dan Sastra Asing",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030510",
        name: "Bahasa dan Sastra Arab",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030520",
        name: "Bahasa dan Sastra Belanda",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030530",
        name: "Bahasa dan Sastra Cina",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030540",
        name: "Bahasa dan Sastra India",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030550",
        name: "Bahasa dan Sastra Inggris",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030560",
        name: "Bahasa dan Sastra Jepang",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030570",
        name: "Bahasa dan Sastra Jerman",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030580",
        name: "Bahasa dan Sastra Korea",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030590",
        name: "Bahasa dan Sastra Perancis",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030600",
        name: "Bahasa dan Sastra Rusia",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030610",
        name: "Bahasa dan Sastra Slavia",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030700",
        name: "Bahasa Arab",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030710",
        name: "Bahasa Bali",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030720",
        name: "Bahasa Batak",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030800",
        name: "Bahasa Asing",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030810",
        name: "Bahasa Belanda",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46030820",
        name: "Bahasa Cina / Cinologi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46040000",
        name: "D - III / A - III Seni",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46040100",
        name: "Bahasa dan Seni",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46040200",
        name: "Menggambar",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46040300",
        name: "Seni Musik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46040400",
        name: "Seni Rupa",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46040500",
        name: "Seni Tari",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46050000",
        name: "D - III / A - III Administrasi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46050100",
        name: "Administrasi Ekonomi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46050200",
        name: "Administrasi Ketrampilan Jasa",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46050300",
        name: "Administrasi Keuangan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46050400",
        name: "Administrasi Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46050410",
        name: "Administrasi Supervisi Pendidika",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46050500",
        name: "Administrasi Perkantoran",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46050510",
        name: "Tata Perkantoran",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46050600",
        name: "Administrasi Perusahaan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46050700",
        name: "Administrasi Sekolah",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46050800",
        name: "Administrasi Sosial",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46050900",
        name: "Ilmu Administrasi Negara",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060000",
        name: "D - III / A - III Ekonomi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060010",
        name: "Akuntansi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060020",
        name: "Bisnis",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060030",
        name: "Bisnis Tata Usaha",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060050",
        name: "Bisnis Vokasional",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060060",
        name: "Ekonomi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060070",
        name: "Ekonomi Koperasi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060080",
        name: "Ekonomi Management",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060090",
        name: "Ekonomi Pembangunan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060100",
        name: "Ekonomi Perusahaan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060110",
        name: "Ilmu Ekonomi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060120",
        name: "Keuangan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060130",
        name: "Management",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060140",
        name: "Pendidikan Dunia Usaha",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060150",
        name: "Pendidikan Management",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060160",
        name: "Studi Pembangunan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060170",
        name: "Tata Niaga",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46060180",
        name: "Tata Perusahaan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070000",
        name: "D - III / A - III Bimbingan dan Penyuluhan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070110",
        name: "Administrsi Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070120",
        name: "Administrsi Supervisi Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070210",
        name: "Bimbingan dan Konseling",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070220",
        name: "Bimbingan dan Penyuluhan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070310",
        name: "Didaktik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070320",
        name: "Didaktik dan Kurikulum",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070330",
        name: "Pondasi Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070410",
        name: "Psikologi Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070420",
        name: "Psikologi Pendidikan dan Bimbing",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070510",
        name: "Kurikulum dan Persekolahan / Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070520",
        name: "Kurikulum dan Teknologi Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070530",
        name: "Kurikulum Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070540",
        name: "Kurikulum Penyuluhan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070550",
        name: "Kurtek Pendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070560",
        name: "Pengajaran dan Pengembangan Kurikulum",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46070600",
        name: "Keolahragaan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46080000",
        name: "D - III / A - III Filsafat",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46080100",
        name: "Filsafat",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46080200",
        name: "Filsafat Bahasa dan Sastra Indonesia",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46080300",
        name: "Filsafat Barat",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46080400",
        name: "Filsafat dan Sosiologi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46080500",
        name: "Filsafat Kebudayaan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46080600",
        name: "Filsafatpendidikan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090000",
        name: "D - III / A - III Teknik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090100",
        name: "Arsitektur",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090110",
        name: "Teknik Arsitektur",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090200",
        name: "Elektronika",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090210",
        name: "Teknik Elektro",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090220",
        name: "Teknik Elektro Komputer",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090230",
        name: "Teknik Elektro Komunikasi",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090240",
        name: "Teknik Elektronika",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090250",
        name: "Teknik Komputer",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090310",
        name: "Gedung",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090320",
        name: "Teknik Bangunan",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090330",
        name: "Teknik Sipil",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090340",
        name: "Teknik Aliran Sungai",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090410",
        name: "Kimia",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090420",
        name: "Teknik Kimia",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090510",
        name: "Listrik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090520",
        name: "Teknik Listrik",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090610",
        name: "Mesin",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090620",
        name: "Teknik Mesin",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090630",
        name: "Teknik Otomotif",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090710",
        name: "Teknik dan Management Industri",
      },
      {
        pendidikan_id: "9",
        jurusan_id: "46090720",
        name: "Teknik Industri",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50000000",
        name: "Diploma IV",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50000040",
        name: "Teknik Elektro",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50000050",
        name: "Transportasi Darat",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50011000",
        name: "Sekolah Tinggi Pemerintahan Dalam Negeri",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50011010",
        name: "Politik Pemerintahan",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50012000",
        name: "Institut Ilmu Pemerintahan",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50012010",
        name: "Ilmu Pemerintahan",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50012020",
        name: "Keuangan Daerah",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50013000",
        name: "Perikanan",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50013010",
        name: "Pengolahan Hasil Perikanan",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50013020",
        name: "Penangkapan Ikan",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50013030",
        name: "Penyuluhan Perikanan",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50013040",
        name: "Teknologi Akuakultur",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50013050",
        name: "Teknologi Hasil Perikanan",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50013060",
        name: "Teknologi Pengelolaan Sumber Daya Perairan",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50014000",
        name: "Transportasi Darat",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50015000",
        name: "Gizi",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50015010",
        name: "Keperawatan Gawat Darurat",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50015020",
        name: "Analisa Kesehatan",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50015030",
        name: "Perawat Pendidik",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50016000",
        name: "Kesejahteraan Sosial",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50016010",
        name: "Pekerjaan Sosial",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50017000",
        name: "Teknik",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50017010",
        name: "Teknik Radiologi",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50017100",
        name: "Teknik Sipil",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50017110",
        name: "Teknik Perenc. Wilayah dan Kota",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50017120",
        name: "Teknik Penerbangan",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50018000",
        name: "Administrasi Niaga",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50019000",
        name: "Pariwisata",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50019010",
        name: "Administrasi Hotel",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50020000",
        name: "Manajemen Aset",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50021000",
        name: "Teknik Elektro Medik",
      },
      {
        pendidikan_id: "10",
        jurusan_id: "50022000",
        name: "ADMINISTRASI KEPENDUDUKAN DAN CATATAN SIPIL",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51000000",
        name: "Sarjana",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011000",
        name: "Ilmu Ekonomi Studi Pembangunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011110",
        name: "Ekonomi Pembangunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011120",
        name: "Ekonomi Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011130",
        name: "Ekonomi Internasional",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011140",
        name: "Ekonomi Sosial",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011150",
        name: "Ekonomi Regional",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011160",
        name: "Ekonomi dan Studi Pembangunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011170",
        name: "Ekonomi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011180",
        name: "Industri",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011190",
        name: "Studi Pembangunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011210",
        name: "Agraria",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011230",
        name: "Demografi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011240",
        name: "Pertanian Agraria",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011250",
        name: "Sumber Daya Alam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011260",
        name: "Kebendaharaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011270",
        name: "Keuangan Daerah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011310",
        name: "Perdagangan Luar Negeri",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011320",
        name: "Ketataniagaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011330",
        name: "Pemerintahan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011410",
        name: "Statistik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011420",
        name: "Studi Perbandingan Ekonomi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011510",
        name: "Transportasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011520",
        name: "Perumahan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011530",
        name: "Kesehatan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011540",
        name: "Kesehatan Lingkungan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51011550",
        name: "Kesehatan Anak",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51012000",
        name: "Ekonomi Akuntansi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51012010",
        name: "Akuntansi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51012110",
        name: "Ekonomi Inti",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51012120",
        name: "Ekonomi Moneter",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51012210",
        name: "Keuangan dan Perbankan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51012310",
        name: "Management Akuntansi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51012320",
        name: "Management Keuangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51012330",
        name: "Management Keuangan dan Perbankan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51012340",
        name: "Manajemen Ekonomi Publik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51012400",
        name: "Makro",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51013000",
        name: "Ekonomi Management",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51013010",
        name: "Sumber Daya Manusia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51013110",
        name: "Manajemen",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51013120",
        name: "Management Pemasaran",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51013130",
        name: "Management Personalia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51013140",
        name: "Management Perkantoran",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51013150",
        name: "Management Informatika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51013160",
        name: "Management Transpor Darat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51013170",
        name: "Manajemen Transpor Udara",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51013180",
        name: "Manajemen Bisnis Telekomunikasi & Informatika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51013210",
        name: "Ketatalaksanaan Perusahaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51013220",
        name: "Ketatalaksanaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51013300",
        name: "Ekonomi Perusahaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041000",
        name: "Kedokteran",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041010",
        name: "Pendidikan Dokter",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041100",
        name: "Dokter Umum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041110",
        name: "Arthodontic",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041210",
        name: "Bacteriologi / Virologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041220",
        name: "Diagn / Extroctie",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041310",
        name: "Donsenvasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041320",
        name: "Eseodonsi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041330",
        name: "Padodontie",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041420",
        name: "Parasitologi / Protozoologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041510",
        name: "Ilmu Alam Dasar Kedokteran",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041520",
        name: "Kedokteran Dasar",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041530",
        name: "Kedokteran Dasar Umum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041540",
        name: "Kesehatan Masyarakat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041550",
        name: "Ilmu Keperawatan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041560",
        name: "Keperawatan dan Ners",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041610",
        name: "Parmatokanologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041620",
        name: "Farmakogmasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041700",
        name: "Medis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041800",
        name: "Klinik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51041900",
        name: "Prothetik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51042000",
        name: "Kedokteran Gigi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51042100",
        name: "Gigi Dasar",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51042200",
        name: "Gigi Kuratif",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51042300",
        name: "Gigi Masyarakat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51042400",
        name: "Gigi Rehabilitasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51043000",
        name: "Kedokteran Hewan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51043100",
        name: "Anatomi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51043300",
        name: "Farmakologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51043400",
        name: "Fisiologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51043410",
        name: "Fisiologi Reproduksi dan Kebidanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51043600",
        name: "Kesehatan Masyarakat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51043700",
        name: "Parasitologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51043710",
        name: "Microbiologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51043800",
        name: "Pathologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51043910",
        name: "Peternakan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51043920",
        name: "Veteriner / Klinik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51044000",
        name: "Farmasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51044100",
        name: "Apoteker",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51044200",
        name: "Biologi Farmasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51044300",
        name: "Farma Setika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51044600",
        name: "Teknologi Farmasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51044800",
        name: "Anorganik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51044900",
        name: "Laboratorium",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061000",
        name: "Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061010",
        name: "Biologi Perairan / Perikanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061020",
        name: "Bercocok Tanam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061030",
        name: "Usaha Tani",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061040",
        name: "Pembangunan Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061050",
        name: "Penyuluhan Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061060",
        name: "Pengolahan Hasil Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061070",
        name: "Ilmu Tanaman Setahun",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061080",
        name: "Keahlian Agraria",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061090",
        name: "Ilmu Sosial dan Ilmu Ekonomi Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061100",
        name: "Sosiologi Produksi Tanaman",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061110",
        name: "Teknologi Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061120",
        name: "Teknologi Pangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061130",
        name: "Teknik Tanaman Keras",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061140",
        name: "Teknik Tanaman Muda",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061150",
        name: "Teknologi Serat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061160",
        name: "Teknologi Pengolahan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061170",
        name: "Teknologi Industri Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061180",
        name: "Produksi Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061190",
        name: "Teknik Tanaman Industri",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061200",
        name: "Agroteknologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061210",
        name: "Mekanisasi Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061220",
        name: "Alat-Alat Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061230",
        name: "Teknologi Benih",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061250",
        name: "Statistik Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061260",
        name: "Bidang Keahlian Statistik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061270",
        name: "Sosiologi Pedesaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061280",
        name: "Sosial Ekonomi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061290",
        name: "Ekonomi Pembangunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061310",
        name: "Agronomi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061320",
        name: "Agrobisnis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061330",
        name: "Agronomi Pemulihan Tanah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061340",
        name: "Agronomi Holtikultura",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061350",
        name: "Agronomi Tanaman Keras",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061360",
        name: "Agroklimatologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061370",
        name: "Agroekonomi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061380",
        name: "Agronomi Produksi Tanaman",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061390",
        name: "Pertanian Agronomi Tanah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061400",
        name: "Agronomi Budidaya Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061410",
        name: "Budidaya Perkebunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061420",
        name: "Budidaya Tanaman Keras",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061430",
        name: "Tanaman Pangan dan Gizi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061440",
        name: "Bercocok Tanam Perkebunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061450",
        name: "Pengawetan Tanah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061460",
        name: "Ilmu Tanah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061470",
        name: "Pengawetan dan Retamalasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061480",
        name: "Penyuluhan Tanah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061490",
        name: "Pengolahan Tanah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061510",
        name: "Perkebunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061520",
        name: "Kehutanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061530",
        name: "Perikanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061550",
        name: "Teknologi Hasil Hewan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061560",
        name: "Pengolahan Hasil Hewan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061570",
        name: "Pengolahan Hasil Ternak",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061580",
        name: "Produksi Peternakan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061590",
        name: "Tanaman Pangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061610",
        name: "Hama dan Penyakit Tumbuhan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061620",
        name: "Pitapologi dan Tumbuh - Tumbuhan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061630",
        name: "Virologi Tumbuh - Tumbuhan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061640",
        name: "Hama Tumbuhan / Penyakit Tahunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061650",
        name: "Patologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061660",
        name: "Hama dan Penyakit Tanah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061670",
        name: "Perlindungan Tanaman",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061710",
        name: "Pemulian Tanaman",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061720",
        name: "Botanical Science",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061730",
        name: "Ekonomi Produksi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061740",
        name: "Proteksi Tanaman",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061750",
        name: "Fisiologi Reproduksi Tumbuhan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061760",
        name: "Mixed Farming",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061810",
        name: "Tanah dan Pemupukan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061820",
        name: "Pengolahan Tanah dan Tata Air",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061830",
        name: "Klasifikasi Tanah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061840",
        name: "Mikrologi Tanah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061850",
        name: "Akua Kultur",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061900",
        name: "Produksi dan Pengolahan Tanaman",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061910",
        name: "Gizi Masyarakat dan Sumber Daya Keluarga",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061920",
        name: "Gizi Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061930",
        name: "Sumber Daya Alam dan Lingkungan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061940",
        name: "Pemanfaatan Sumber Daya",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061950",
        name: "Perusahan Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061960",
        name: "Perniagaan Tani",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061970",
        name: "Pembangunan Pedesaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061980",
        name: "Ekonomi Sumber Daya",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51061990",
        name: "Budidaya Perairan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51062000",
        name: "Perkebunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51062100",
        name: "Teknik Perkebunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51062200",
        name: "Ekonomi Perkebunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51062300",
        name: "Budidaya Perkebunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51062400",
        name: "Teknologi Perkebunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51063100",
        name: "Management Hutan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51063110",
        name: "Management Hasil Hutan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51063120",
        name: "Manajemen Program Pembangunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51063300",
        name: "Teknologi Hasil Hutan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51063310",
        name: "Teknologi Kehutanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51063320",
        name: "Teknik Kayu",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51063400",
        name: "Pembinaan Hutan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51063410",
        name: "Konservasi Sumber Daya Hutan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51063420",
        name: "Pemulian Hutan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51063430",
        name: "Silvikultur",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51063500",
        name: "Ilmu Kehutanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51063510",
        name: "Budidaya Hutan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064110",
        name: "Produksi Ternak",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064210",
        name: "Ternak Unggas",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064220",
        name: "Ternak Perah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064230",
        name: "Ternak Potong",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064310",
        name: "Nutrisi Makanan Ternak",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064320",
        name: "Makanan Ternak",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064410",
        name: "Teknik Hasil Ternak",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064420",
        name: "Teknik Peternakan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064430",
        name: "Teknik Penyehatan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064500",
        name: "Ahli Usaha Kultura",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064610",
        name: "Pemeliharaan Ternak",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064620",
        name: "Budidaya Peternakan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064800",
        name: "Sosial Ekonomi Peternakan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064900",
        name: "Pemulian Ternak",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064910",
        name: "Ilmu Ternak",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51064920",
        name: "Produksi Ternak Unggas",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065110",
        name: "Budidaya Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065120",
        name: "Budidaya Perikanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065130",
        name: "Manajemen Sumberdaya Perairan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065210",
        name: "Bidang Keahlian Aquakultur",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065310",
        name: "Teknik Penangkapan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065320",
        name: "Teknologi Hasil Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065330",
        name: "Teknologi Hasil Perairan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065340",
        name: "Teknik Perikanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065350",
        name: "Penangkapan Ikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065410",
        name: "Management Sumber Daya Perairan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065430",
        name: "Management dan Kultur Perikanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065440",
        name: "Management Sumber Daya Perikanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065450",
        name: "Management Penangkapan Ikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065460",
        name: "Manajemen Perekonomian Negara",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065510",
        name: "Pengolahan Hasil Perikanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065520",
        name: "Pengolahan Hasil Laut",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065530",
        name: "Pengolahan Hasil Perairan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065600",
        name: "Sosial Ekonomi Perikanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065610",
        name: "Sosial Ekonomi Pertanian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065620",
        name: "Tata Niaga",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065710",
        name: "Perikanan Laut",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065720",
        name: "Biologi Perikanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065810",
        name: "Pemanfaatan Sumber Daya Perikanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065820",
        name: "Eksplotasi Sumber Daya Perairan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065910",
        name: "Tata Produksi Perikanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065920",
        name: "Tata Laksana Hasil",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51065930",
        name: "Ekonomi Perikanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51071000",
        name: "MIPA Fisika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51071100",
        name: "Fisika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51071200",
        name: "Fisikateknik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51071300",
        name: "Ilmu Pasti dan Alam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072000",
        name: "MIPA Kimia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072100",
        name: "Geologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072110",
        name: "Kimia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072120",
        name: "Kimia Analitik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072140",
        name: "Kimia Murni",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072150",
        name: "Kimia Analis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072160",
        name: "Teknik Kimia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072170",
        name: "Anorganik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072180",
        name: "Kimia dan Fisika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072200",
        name: "Geofisika dan Meteorologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072210",
        name: "Meteorologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072300",
        name: "Geofisika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072310",
        name: "Teknik Geofisika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072400",
        name: "Agrometeorologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51072410",
        name: "Paleantologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51073000",
        name: "MIPA Geofisika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51073100",
        name: "Analitik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51073110",
        name: "Astronomi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51073140",
        name: "Eksakta",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51073150",
        name: "Matematika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51073160",
        name: "Biologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51073170",
        name: "Geografi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51073180",
        name: "Kependudukan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51073190",
        name: "Geografi Kependudukan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091000",
        name: "Teknik Sipil",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091010",
        name: "Bangunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091020",
        name: "Tenik Aliran Sungai",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091030",
        name: "Pengairan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091040",
        name: "Perencanaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091050",
        name: "Industri dan Konstruksi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091060",
        name: "Arsitetur",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091070",
        name: "Seni Rupa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091080",
        name: "Konstruksi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091090",
        name: "Grafika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091100",
        name: "Hidrografi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091110",
        name: "Transmigrasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091120",
        name: "Mekanik Tanah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091130",
        name: "Mesin Konstruksi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091140",
        name: "Industri Kapal",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091150",
        name: "Geodesi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091160",
        name: "Teknik Planologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091170",
        name: "Teknik Perkapalan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091180",
        name: "Bangunan Kapal",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091190",
        name: "Teknik Regional",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091200",
        name: "Regional Planning",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091210",
        name: "Perhubungan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091220",
        name: "Lingkungan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091230",
        name: "Teknik Penyehatan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091240",
        name: "Perencanaan Wilayah dan Kota",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51091650",
        name: "Reaktor",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51092000",
        name: "Teknologi Mineral",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51092020",
        name: "Geofisika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51092100",
        name: "Mineral",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51092110",
        name: "Pertambangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51092120",
        name: "Tambang Metalurgi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51092130",
        name: "Tambang Umum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51092140",
        name: "Tambang Eksplorasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51092150",
        name: "Teknik Pertambangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51092210",
        name: "Perminyakan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51092220",
        name: "Mesin Perminyakan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51092310",
        name: "Teknik Geografi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51092320",
        name: "Geografi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093000",
        name: "Teknologi Industri",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093010",
        name: "Konstruksi Kapal Terbang",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093020",
        name: "Teknologi Kimia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093040",
        name: "Kimia Organik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093050",
        name: "Kimia Anorganik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093060",
        name: "Kimia Umum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093070",
        name: "Chemikal Enginering",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093090",
        name: "Biokimia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093100",
        name: "Laboratorium",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093110",
        name: "Kimia Industri",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093120",
        name: "Kimia Murni",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093130",
        name: "Kimia Tekstil",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093140",
        name: "Industri Kimia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093210",
        name: "Fisika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093220",
        name: "Fisika Teknik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093230",
        name: "Production Machin Enginering",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093240",
        name: "Mekanik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093310",
        name: "Elektronika / Telekomunikasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093320",
        name: "Teknik Elektro Sistem Pengaturan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093330",
        name: "Teknik Elektro / Arus Lemah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093340",
        name: "Elektro Arus Lemah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093350",
        name: "Elektronika Arus Lemah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093360",
        name: "Teknik Elektronika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093370",
        name: "Elektronika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093380",
        name: "Elektronika / Komunikasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093410",
        name: "Teknik Tenega Listrik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093420",
        name: "Scrence Pembangkit dan Distribusi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093430",
        name: "Listrik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093440",
        name: "Listrik Arus Lemah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093450",
        name: "Listrik Arus Kuat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093460",
        name: "Kabinet Tenaga Listrik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093500",
        name: "Mesin Umum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093510",
        name: "Elemen Mesin",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093520",
        name: "Elemen Mesin Tenaga",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093530",
        name: "Mesin Produksi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093540",
        name: "Mesin Kapal",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093550",
        name: "Mesin Listrik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093560",
        name: "Mesin",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093570",
        name: "Teknik Mesin Konstruksi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093580",
        name: "Teknik Mesin Penerbangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093590",
        name: "Automotif",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093600",
        name: "Metalurgi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093610",
        name: "Nuklir / Tenaga Reaktor",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093710",
        name: "Teknik Komputer",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093730",
        name: "Sains dan Teknologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093740",
        name: "Teknik Informatika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093750",
        name: "Informasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093760",
        name: "Sistem Informasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093770",
        name: "Ilmu Komputer",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093780",
        name: "Sains Terapan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093810",
        name: "Komunikasi / Komputer",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093820",
        name: "Radio dan Televisi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093830",
        name: "Sistem Tenaga",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093840",
        name: "Telekomunikasi dan Elektronika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093850",
        name: "Telekomunikasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093860",
        name: "Radio Fisik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093870",
        name: "Instrument",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093910",
        name: "Teknik dan Management Industri",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093920",
        name: "Sumber Daya",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093930",
        name: "Teknik Makanan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093950",
        name: "Teknik Sistem Pengaturan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093960",
        name: "Teknik Gas dan Petrokimia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093970",
        name: "Teknik Energi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093980",
        name: "Teknik Industri",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51093990",
        name: "Teknik dan Manajemen Industri",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51095980",
        name: "Perikanan dan Ilmu Kelautan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51095990",
        name: "Ilmu Kelautan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51096000",
        name: "Teknologi Kelautan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51096010",
        name: "Teknik Lingkungan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51096100",
        name: "Elektronika dan Comunication Enginering",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51096200",
        name: "Enginering",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51096300",
        name: "Naval / Electrical",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51096500",
        name: "Radar / Suar",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51096600",
        name: "Telekomunikasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51096700",
        name: "Oceanologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51100000",
        name: "Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51100010",
        name: "Pendidikan Kepelatihan Olah Raga",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51100100",
        name: "Pendidikan Akuntansi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51100110",
        name: "Pendidikan Ilmu Ekonomi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51100120",
        name: "Pendidikan Matematika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51100130",
        name: "Pendidikan Bahasa Inggris",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51101000",
        name: "Pendidikan MIPA",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51101100",
        name: "Ilmu Pasti dan Alam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51101110",
        name: "Ilmu Pasti",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51101200",
        name: "Matematika dan Ipa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51101220",
        name: "Ilmu Pengetahuan Alam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51101300",
        name: "Fisika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51101500",
        name: "Ilmu Bumi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51101700",
        name: "Ilmu Hayat / Biologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102000",
        name: "Pendidikan Teknik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102100",
        name: "Teknik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102120",
        name: "Teknik Bangunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102130",
        name: "Teknik Sipil Bangunan Air",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102140",
        name: "Teknik Arsitektur",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102210",
        name: "Teknik Mesin",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102220",
        name: "Teknik Mesin Induksi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102230",
        name: "Teknik Mesin Produksi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102240",
        name: "Teknik Otomotif",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102250",
        name: "Teknik Mekanik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102300",
        name: "Elektro",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102310",
        name: "Teknik Elektro",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102330",
        name: "Elektro Arus Lemah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102400",
        name: "Listrik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102410",
        name: "Listrik Arus Kuat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51102420",
        name: "Listrik Arus Lemah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51103000",
        name: "Pendidikan IPS",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51103010",
        name: "Pendidikan Jasmani Kesehatan dan Rekreasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51103100",
        name: "Administrasi Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51103200",
        name: "Administrasi Supervisi Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51103300",
        name: "Administrasi Sekolah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51103400",
        name: "Administrasi Ketrampilan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51103500",
        name: "Administrasi Ketrampilan Jasa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51103600",
        name: "Administrasi Perkantoran",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51103700",
        name: "Administrasi Perusahaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51104100",
        name: "Civic Hukum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51104200",
        name: "Hukum PMP",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51104300",
        name: "Pkn dan Hukum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51104400",
        name: "PMP dan Kewarganegaraan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51104600",
        name: "Pendidikan Moral Pancasila",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51104610",
        name: "PSPB",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51104620",
        name: "Sejarah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51104630",
        name: "Sejarah dan Anthropologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51105110",
        name: "PKK",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51105210",
        name: "Ketrampilan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51105220",
        name: "Ketrampilan Jasa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51105230",
        name: "Ketrampilan Teknik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51105310",
        name: "Sandratari dan Musik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51105320",
        name: "Seni Musik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51105330",
        name: "Seni Rupa dan Kerajinan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51105340",
        name: "Seni Tari",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51105510",
        name: "Tata Boga",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51105520",
        name: "Tata Busana",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51105530",
        name: "Tata Graha",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51106000",
        name: "Sosial",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51106100",
        name: "IPS",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51106220",
        name: "Tata Perkantoran",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51106230",
        name: "Tata Perusahaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51106240",
        name: "Tata Buku",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51106260",
        name: "Hitung Dagang",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51106310",
        name: "Ilmu Ekonomi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51106330",
        name: "Ekonomi Koperasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51106340",
        name: "Koperasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51106410",
        name: "Bisnis Tata Buku",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51106420",
        name: "Bisnis Vokasional",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51106510",
        name: "Kesehatan dan Rekreasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51106520",
        name: "Kesejahteraan Keluarga",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51106530",
        name: "Ilmu Kesejahteraan Sosial",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51107100",
        name: "Filsafat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51107200",
        name: "Filsafat Kebudayaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51107300",
        name: "Filsafat Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51107400",
        name: "Filsafat Sosiologi Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108000",
        name: "Pendidikan Bahasa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108110",
        name: "Sastra Indonesia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108120",
        name: "Bahasa Indonesia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108130",
        name: "Bahasa dan Sastra",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108140",
        name: "Pendidikan Bahasa dan Sastra Indonesia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108150",
        name: "Bahasa dan Sastra Daerah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108160",
        name: "Bahasa dan Sastra Jawa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108170",
        name: "Bahasa Jawa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108180",
        name: "Bahasa dan Sastra Sunda",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108210",
        name: "Sastra Arab",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108220",
        name: "Bahasa Arab",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108230",
        name: "Bahasa dan Sastra Arab",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108240",
        name: "Bimbingan dan Penyuluhan Islam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108310",
        name: "Sastra Rusia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108320",
        name: "Bahasa Rusia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108410",
        name: "Bahasa dan Sastra Asing",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108510",
        name: "Bahasa dan Sastra Inggris",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108610",
        name: "Bahasa dan Sastra Jepang",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108620",
        name: "Bahasa Jepang",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108710",
        name: "Bahasa dan Sastra Jerman",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108720",
        name: "Bahasa Jerman",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51108910",
        name: "Bahasa Perancis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109000",
        name: "Ilmu Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109100",
        name: "Paedagogik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109200",
        name: "Didaktik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109210",
        name: "Sejarah Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109310",
        name: "Bimbingan dan Penyuluhan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109320",
        name: "Bimbingan dan Konseling",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109330",
        name: "Psikologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109340",
        name: "Psikologi Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109350",
        name: "Psikologi Pendidikan dan Bimbingan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109410",
        name: "Keguruan dan Ilmu Sosial",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109420",
        name: "Kurikulum dan Persekolahan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109430",
        name: "Kurikulum dan Teknologi Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109440",
        name: "Kurikulum Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109450",
        name: "Kurikulum Penyuluhan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109460",
        name: "Kurtek Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109470",
        name: "Metodologi dan Kurikulum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109480",
        name: "Metodologi Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109490",
        name: "Pengajaran dan Pengembangan Kurikulum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109500",
        name: "Perencanaan Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109510",
        name: "Pendidikan Agama Kristen",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109520",
        name: "Pendidikan Agama Hindu",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109530",
        name: "Pendidikan Agama Budha",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109600",
        name: "Pendidikan Anak",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109610",
        name: "Pendidikan Dasar",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109620",
        name: "Pendidikan Dasar Umum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109630",
        name: "Pendidikan Olah Raga",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109640",
        name: "Olahraga dan Kesehatan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109650",
        name: "Pendidikan Kepelatihan Olah Raga",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109700",
        name: "Pendidikan Bisnis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109710",
        name: "Pendidikan Dunia Usaha",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109800",
        name: "Pendidikan Guru",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109810",
        name: "Program Guru SPG",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109820",
        name: "Pendidikan Luar Sekolah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109830",
        name: "Pendidikan Luar Biasa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109840",
        name: "Pendidikan Anak Tunarungu",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109850",
        name: "Pendidikan Guru Sekolah Dasar",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109910",
        name: "Pendidikan Masyarakat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109920",
        name: "Ilmu Pendidikan dan Pengembangan Sosial",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109930",
        name: "Pendidikan Ekonomi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109940",
        name: "Pendidikan Khusus",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51109950",
        name: "Pendidikan Dokter",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190000",
        name: "Seni",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190110",
        name: "Seni Rupa dan Desain",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190120",
        name: "Seni Murni",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190130",
        name: "Seni Grafis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190140",
        name: "Seni Rupa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190150",
        name: "Seni Grafik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190160",
        name: "Seni Luki",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190170",
        name: "Seniman",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190180",
        name: "Illustrasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190210",
        name: "Seni Kriya",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190220",
        name: "Seni Patung",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190230",
        name: "Seni Keramik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190240",
        name: "Kriya Logam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190250",
        name: "Kriya Kayu",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190310",
        name: "Desain Komunikasi Visual",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190320",
        name: "Desain Tekstil",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190330",
        name: "Seni Reklame",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190340",
        name: "Dekorasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190350",
        name: "Desian Produk",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190360",
        name: "Desian Interior",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190370",
        name: "Desian Komunikasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190380",
        name: "Desian Kriya",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190390",
        name: "Produksi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190410",
        name: "Seni Tari",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190420",
        name: "Tari Jawa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190430",
        name: "Desain Komposisi Tari",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190440",
        name: "Sastra Tari",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190450",
        name: "Teori dan Komposisi Tari",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190460",
        name: "Tari Bali",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190470",
        name: "Kurealogi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190480",
        name: "Tari",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190490",
        name: "Tari Nusantara",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190510",
        name: "Karawitan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190520",
        name: "Seni Karawitan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190610",
        name: "Seni Musik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190620",
        name: "Musik Sekolah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190630",
        name: "Sastra Musik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190640",
        name: "Teori Komposisi Musik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190710",
        name: "Theater",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190720",
        name: "Cinematografi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190730",
        name: "Pendalangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190740",
        name: "Diamlurgi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190750",
        name: "Komposisi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51190760",
        name: "Camera",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51201120",
        name: "Bahasa Indonesia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51201130",
        name: "Sejarah Indonesia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51201140",
        name: "Filsafat Bahasa dan Sastra Indonesia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51201170",
        name: "Sastra Nusantara",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51201180",
        name: "Bahasa Sansekerta",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51202000",
        name: "Sastra Daerah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51202120",
        name: "Sastra Jawa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51202130",
        name: "Bahasa dan Sastra Jawa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51202140",
        name: "Budaya Jawa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51202150",
        name: "Jawa Kuno",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51202210",
        name: "Bahasa Sunda",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51202220",
        name: "Sastra Sunda",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51202310",
        name: "Bahasa Bali",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51202320",
        name: "Sastra Bali",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51202330",
        name: "Bahasa dan Sastra Bali",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51203000",
        name: "Sastra Asia Timur",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51203110",
        name: "Bahasa Jepang",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51203120",
        name: "Sastra Jepang",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51203130",
        name: "Bahasa dan Sastra Jepang",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51203210",
        name: "Bahasa Cina",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51203220",
        name: "Sastra Cina",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51203230",
        name: "Bahasa dan Sastra Cina",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51203310",
        name: "Bahasa Korea",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51203320",
        name: "Sastra Korea",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51203330",
        name: "Bahasa dan Sastra Korea",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51204000",
        name: "Sastra Asia Barat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51204110",
        name: "Bahasa Arab",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51204120",
        name: "Sastra Arab",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51204130",
        name: "Bahasa dan Sastra Arab",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51204140",
        name: "Sastra Arab dan Kebudayaan Islam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51204210",
        name: "Bahasa India",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51204220",
        name: "Sastra India",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51204230",
        name: "Bahasa dan Sastra India",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205000",
        name: "Sastra Eropa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205010",
        name: "Bahasa dan Sastra Eropa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205110",
        name: "Sastra Inggris",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205120",
        name: "Bahasa dan Sastra Inggris",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205130",
        name: "Bahasa Inggris",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205140",
        name: "Kesusastraan Inggris",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205150",
        name: "Anglo Saxon",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205210",
        name: "Sastra Perancis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205220",
        name: "Bahasa Perancis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205230",
        name: "Bahasa dan Sastra Perancis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205310",
        name: "Sastra Belanda",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205320",
        name: "Bahasa Belanda",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205330",
        name: "Bahasa dan Sastra Belanda",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205410",
        name: "Sastra Rusia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205420",
        name: "Bahasa Rusia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205430",
        name: "Bahasa dan Sastra Rusia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205510",
        name: "Sastra Jerman",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205520",
        name: "Bahasa Jerman",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205530",
        name: "Bahasa dan Sastra Jerman",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205600",
        name: "Sastra Roma",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205710",
        name: "Sastra Slavia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51205720",
        name: "Bahasa dan Sastra Slavia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206000",
        name: "Sastra Sejarah Anthropologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206010",
        name: "Purbakala",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206110",
        name: "Archeologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206120",
        name: "Anthropologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206130",
        name: "Sejarah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206140",
        name: "Purbakala dan Etnologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206210",
        name: "Sejarah dan Budaya",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206220",
        name: "Sejarah dan Anthropologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206310",
        name: "Anthropologi Budaya",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206320",
        name: "Antropologi Sosial",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206330",
        name: "Antropologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206400",
        name: "Sosiologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206500",
        name: "Paedagogik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206600",
        name: "Linguistik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206700",
        name: "Linguistik Jawa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51206800",
        name: "Linguistik Indonesia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51207000",
        name: "Sastra Lain - Lain",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51207100",
        name: "Linguistik Inggris",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51207200",
        name: "Kesusastraan Sariah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51207300",
        name: "Sastra dan Filsafat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51207400",
        name: "Indonesialogi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51207500",
        name: "Etnomusicologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51207600",
        name: "Musik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51207710",
        name: "Seni Rupa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51207720",
        name: "Seni Lukis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51207810",
        name: "Desain Grafis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51207820",
        name: "Desain Tekstil",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51230000",
        name: "Hukum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51231000",
        name: "Hukum Dasar",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51231100",
        name: "Hukum Adat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51231200",
        name: "Perundang - Undangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51231300",
        name: "Ilmu Hukum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51231400",
        name: "Tata Hukum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51231500",
        name: "Umum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233000",
        name: "Hukum Keperdataan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233110",
        name: "Perdata Adat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233120",
        name: "Perdata Internasional",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233130",
        name: "Perdata Pidana Islam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233140",
        name: "Perdata Umum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233150",
        name: "Studi Hukum Perdata",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233160",
        name: "Hukum Perdata",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233170",
        name: "Perdata Bw",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233180",
        name: "Studi Hukum Pidana",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233210",
        name: "Hukum Islam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233220",
        name: "Hukum Sipil",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233310",
        name: "Hukum Agraria",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233320",
        name: "Sosial Agraria",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233330",
        name: "Dagang",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233340",
        name: "Notariat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233400",
        name: "Hukum Administrasi Negara",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233410",
        name: "Hukum Pemda dan Kesejahteraan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233420",
        name: "Penerbangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51233430",
        name: "Perburuhan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51234200",
        name: "Tata Pemerintahan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51234400",
        name: "Kenegaraan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51234500",
        name: "Hukum Tata Negara",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51235000",
        name: "Hukum Internasional",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51235100",
        name: "Hukum Laut Internasional",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51235200",
        name: "Perjanjian Internasional",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51237000",
        name: "Hukum Kemasyarakatan dan Pembangunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51237100",
        name: "Hukum Ekonomi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51237200",
        name: "Ilmu Kemasyarakatan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51237300",
        name: "Masyarakat dan Pembangunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51237400",
        name: "Puspenmas",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51238000",
        name: "Hukum Acara",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51238100",
        name: "Acara Pidana",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51238200",
        name: "Peradilan Perdata",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51238300",
        name: "Praktisi Hukum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51239000",
        name: "Hukum Pidana",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260000",
        name: "Administrasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260090",
        name: "Manajemen Kebijakan Publik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260100",
        name: "Administrasi Publik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260120",
        name: "Administrasi Negara",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260130",
        name: "Administrasi Niaga",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260140",
        name: "Administrasi Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260150",
        name: "Administrasi Bisnis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260200",
        name: "Ketatanegaraan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260400",
        name: "Ilmu Komunikasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260500",
        name: "Publisistik / Jurnalistik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260510",
        name: "Komunikasi Jurnalistik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260620",
        name: "Management Keuangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260630",
        name: "Management Produksi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260640",
        name: "Manajemen Sumber Daya Manusia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260650",
        name: "Manajemen Pembangunan Daerah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260660",
        name: "Manajemen Pembangunan Perkotaan dan Daerah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260700",
        name: "Pemerintahan Umum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51260710",
        name: "Perencanaan Pembangunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51300110",
        name: "Anak dan Perkembangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51300130",
        name: "Klinis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51300210",
        name: "Botani",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51300220",
        name: "Zoologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51300320",
        name: "Psikologi Sosial",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51300410",
        name: "Eksperimen",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51300510",
        name: "Industri dan Organisasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51300520",
        name: "Perusahaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51300530",
        name: "Industri",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51310000",
        name: "Kemasyarakatan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51310100",
        name: "Administrasi Kesehatan Masyarakat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51310200",
        name: "Epidemiologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51310300",
        name: "Kependudukan dan Statistik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51310400",
        name: "Kesehatan dan Lingkungan Kerja",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51310500",
        name: "Pendidikan dan Kesehatan Masyarakat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51401000",
        name: "Agama",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51401110",
        name: "Islam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51401120",
        name: "Protestan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51401130",
        name: "Katholik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51401140",
        name: "Hindu",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51401150",
        name: "Budha",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51401160",
        name: "Filsafat Agama",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402000",
        name: "Tarbiyah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402010",
        name: "Jinayah Siyasah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402110",
        name: "Theologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402120",
        name: "Aqidah dan Filsafat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402130",
        name: "Bahasa Arab",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402140",
        name: "Bahasa dan Sastra Arab",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402160",
        name: "Dakwah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402170",
        name: "Filsafat Islam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402180",
        name: "Methodologi Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402190",
        name: "Pendidikan Agama Islam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402210",
        name: "Perbandingan Agama",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402220",
        name: "Qodhlo",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402230",
        name: "Retorika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402240",
        name: "Tadris",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402250",
        name: "Sejarah dan Kebudayaan Islam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402270",
        name: "Tablig dan Nasy'Ku",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402280",
        name: "Ushuludin",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51402290",
        name: "Bahasa dan Seni",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51403000",
        name: "Syariah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51403100",
        name: "Pidana (Jinayat)",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51403110",
        name: "Syariyah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51403120",
        name: "Fiqih",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51403130",
        name: "Penerangan Siariat Islam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51403140",
        name: "Peradilan Islam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51403150",
        name: "Islamologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51403160",
        name: "Perbandingan Mazhab dan Hukum Syariah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51403170",
        name: "Perdata Islam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51403180",
        name: "Peradilan dan Perdata",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51403200",
        name: "Ekonomi Muamalat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51403210",
        name: "Tafsir dan Hadist",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51404110",
        name: "Adab",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51404130",
        name: "Pendidikan Kemasyarakatan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51404140",
        name: "Pendidikansastra Arab",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51440000",
        name: "Ilmu Pemerintahan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450000",
        name: "Sosial Politik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450110",
        name: "Umum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450120",
        name: "Ilmu Politik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450130",
        name: "Ilmu Sosial Politik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450140",
        name: "Politik Pemerintahan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450210",
        name: "Ketatanegaraan Dalam Negeri",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450230",
        name: "Administrasi Pemerintahan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450240",
        name: "Sosial Ekonomi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450310",
        name: "Hubungan Internasional",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450410",
        name: "Sosiatri",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450440",
        name: "Filsafat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450450",
        name: "Pengetahuan Sosial",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450470",
        name: "Studi Sosial",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450500",
        name: "Anthropologi Budaya",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450520",
        name: "Krominologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450530",
        name: "Anthropologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450540",
        name: "Sejarah dan Archeologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450630",
        name: "Administrasi Fiskal",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450650",
        name: "Ketataniagaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450660",
        name: "Personal Management",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450670",
        name: "Publik Administrsi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450680",
        name: "Administrasi Pembangunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450690",
        name: "Administrasi Kepegawaian",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450710",
        name: "Hubungan Masyarakat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450720",
        name: "Komunikasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450740",
        name: "Komunikasi Massa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450750",
        name: "Jurnalistik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450760",
        name: "Penerangan / Propaganda",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450770",
        name: "Komunikasi Sosial",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51450780",
        name: "Penerangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51460010",
        name: "Umum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51460100",
        name: "Pekerjaan Sosial",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51500000",
        name: "Komputer",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51500100",
        name: "Aplikasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51500300",
        name: "Programmer",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51530700",
        name: "Ilmu Perpustakaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51530800",
        name: "Ilmu Penerangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51535100",
        name: "Public Relation",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51535400",
        name: "Publisistik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51535600",
        name: "Penerangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51535800",
        name: "Kehumasan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51540000",
        name: "Filsafat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51540100",
        name: "Filsafat Timur",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51540200",
        name: "Filsafat Barat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51540310",
        name: "Filsafat Indonesia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51540320",
        name: "Pancasila",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51540330",
        name: "Sejarah Filsafat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51540350",
        name: "Theologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51570000",
        name: "Keuangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51570100",
        name: "Administrasi Keuangan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51570300",
        name: "Bea dan Cukai",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51570400",
        name: "Kebendaharaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51570500",
        name: "Kesekretariatan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51570600",
        name: "Keuangan Negara",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51570700",
        name: "Pajak Umum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51570800",
        name: "Theasuri Negara",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51580100",
        name: "Management Pemasaran",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51580200",
        name: "Management Pembelanjaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51580300",
        name: "Management Perbankan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51590100",
        name: "Botani",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51590110",
        name: "Fisiologi Tumbuhan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51590200",
        name: "Ekologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51590300",
        name: "Genetika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51590400",
        name: "Hidrobiologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51590600",
        name: "Radiobiologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51590700",
        name: "Toxycdogi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51590800",
        name: "Zoologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600000",
        name: "Geografi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600090",
        name: "Agribisnis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600100",
        name: "PPKN",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600110",
        name: "Alam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600120",
        name: "Geografi Fisik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600130",
        name: "Geomorpologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600140",
        name: "Hidrologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600150",
        name: "Kartografi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600160",
        name: "Morpologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600170",
        name: "Sumber Daya",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600180",
        name: "Tambang / Metlurgi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600210",
        name: "Demografi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600230",
        name: "Geografi Manusia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600240",
        name: "Geografi Penduduk dan Demografi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600250",
        name: "Penginderaan Jauh",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600260",
        name: "Regional dan Politik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600310",
        name: "Pendidikan Ilmu Komputer",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600320",
        name: "Pendidikan Seni Rupa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600330",
        name: "Pendidikan Sosiologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600340",
        name: "Pendidikan Ekonomi Akutansi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600350",
        name: "Pendidikan Ilmu Pengetahuan Alam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600360",
        name: "Pendidikan Teknik Informatika & Komputer",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600370",
        name: "Pendidikan Biologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600380",
        name: "Pendidikan Sosiologi dan Antropologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600390",
        name: "Pendidikan Bahasa Arab",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "51600400",
        name: "Pendidikan Bahasa Inggris",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60000000",
        name: "Akta IV Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60101000",
        name: "Akta IV MIPA",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60101100",
        name: "Ilmu Pasti dan Alam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60101110",
        name: "Ilmu Pasti",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60101200",
        name: "Matematika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60101210",
        name: "Matematika dan Ipa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60101220",
        name: "Ilmu Pengetahuan Alam",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60101300",
        name: "Fisika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60101400",
        name: "Kimia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60101500",
        name: "Ilmu Bumi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60101600",
        name: "Biologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60101700",
        name: "Ilmu Hayat / Biologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60101800",
        name: "Statistik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102000",
        name: "Akta IV Teknik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102100",
        name: "Teknik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102110",
        name: "Teknik Sipil",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102120",
        name: "Teknik Bangunan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102130",
        name: "Teknik Sipil Bangunan Air",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102140",
        name: "Arsitektur",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102210",
        name: "Teknik Mesin",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102220",
        name: "Teknik Mesin Induksi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102230",
        name: "Teknik Mesin Produksi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102240",
        name: "Teknik Otomotif",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102250",
        name: "Teknik Mekanik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102300",
        name: "Elektro",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102310",
        name: "Teknik Elektro",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102320",
        name: "Teknik Elektronika",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102330",
        name: "Elektro Arus Lemah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102400",
        name: "Listrik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102410",
        name: "Listrik Arus Kuat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60102420",
        name: "Listrik Arus Lemah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60103000",
        name: "Akta IV IPS",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60103100",
        name: "Administrsi Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60103200",
        name: "Administrsi Supervisi Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60103300",
        name: "Administrsi Sekolah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60103400",
        name: "Administrsi Ketrmpilan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60103500",
        name: "Administrsi Ketrampilan Jasa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60103600",
        name: "Administrsi Perkantoran",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60103700",
        name: "Administrsi Perusahaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60104100",
        name: "Civic Hukum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60104200",
        name: "HukumPMP",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60104300",
        name: "Pkn dan Hukum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60104400",
        name: "PMP dan Kewarganegaraan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60104500",
        name: "Tata Negara",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60104600",
        name: "Pendidikan Moral Pancasila",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60104610",
        name: "PSPB",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60104620",
        name: "Sejarah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60104630",
        name: "Sejarah dan Anthropologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60105110",
        name: "PKK",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60105210",
        name: "Ketrampilan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60105220",
        name: "Ketrampilan Jasa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60105230",
        name: "Ketrampilan Teknik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60105310",
        name: "Sandratari dan Musik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60105320",
        name: "Seni Musik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60105330",
        name: "Seni Rupa dan Kerajinan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60105340",
        name: "Seni Tari",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60105510",
        name: "Tata Boga",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60105520",
        name: "Tata Busana",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60105530",
        name: "Tata Graha",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106100",
        name: "IPS",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106210",
        name: "Tata Niaga",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106220",
        name: "Tata Perkantoran",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106230",
        name: "Tata Perusahaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106240",
        name: "Tata Buku",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106260",
        name: "Hitung Dagang",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106310",
        name: "Ilmu Ekonomi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106320",
        name: "Ekonomi Perusahaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106330",
        name: "Ekonomi Koperasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106340",
        name: "Koperasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106410",
        name: "Bisnis Tata Buku",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106420",
        name: "Bisnis Vokasional",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106510",
        name: "Kesehatan dan Rekreasi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106520",
        name: "Kesejahteraan Keluarga",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106530",
        name: "Kesejahteraan Sosial",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60106700",
        name: "Management",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60107100",
        name: "Filsafat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60107200",
        name: "Filsafat Kebudayaan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60107300",
        name: "Filsafat Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60107400",
        name: "Filsafat Sosiologi Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108000",
        name: "Akta IV Bahasa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108110",
        name: "Sastra Indonesia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108120",
        name: "Bahasa Indonesia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108130",
        name: "Bahasa dan Sastra",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108140",
        name: "Bahasa dan Sastra Indonesia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108150",
        name: "Bahasa dan Sastra Daerah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108160",
        name: "Bahasa dan Sastra Jawa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108170",
        name: "Bahasa Jawa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108180",
        name: "Bahasa dan Sastra Sunda",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108210",
        name: "Bahasa dan Sastra Arab",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108220",
        name: "Bahasa Arab",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108230",
        name: "Sastra Arab",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108310",
        name: "Sastra Rusia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108320",
        name: "Bahasa Rusia",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108410",
        name: "Bahasa dan Sastra Asing",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108510",
        name: "Bahasa dan Sastra Inggris",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108610",
        name: "Bahasa dan Sastra Jepang",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108620",
        name: "Bahasa Jepang",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108710",
        name: "Bahasa dan Sastra Jerman",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108720",
        name: "Bahasa Jerman",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60108910",
        name: "Bahasa Perancis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109000",
        name: "Akta IV Bidang Kependidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109100",
        name: "Paedagogik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109200",
        name: "Didaktik",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109210",
        name: "Sejarah Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109310",
        name: "Bimbingan dan Penyuluhan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109320",
        name: "Bimbingan dan Konseling",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109330",
        name: "Psikologi",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109340",
        name: "Psikologi Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109350",
        name: "Psikologi Pendidikan dan Bimbingan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109410",
        name: "Keguruan dan Ilmu Sosial",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109420",
        name: "Kurikulum dan Persekolahan / Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109430",
        name: "Kurikulum dan Teknologi Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109440",
        name: "Kurikulum Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109450",
        name: "Kurikulum Penyuluhan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109460",
        name: "Kurtek Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109470",
        name: "Metodologi dan Kurikulum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109480",
        name: "Metodologi Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109490",
        name: "Perencanaan Pendidikan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109500",
        name: "Pengajaran dan Pengembangan Kurikulum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109510",
        name: "Pendidikan Agama Kristen",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109600",
        name: "Pendidikan Anak",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109610",
        name: "Pendidikan Dasar",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109620",
        name: "Pendidikan Dasar Umum",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109630",
        name: "Olahraga",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109640",
        name: "Olahraga dan Kesehatan",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109700",
        name: "Pendidikan Bisnis",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109710",
        name: "Pendidikan Dunia Usah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109720",
        name: "Pendidikan Guru",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109810",
        name: "Program Guru SPG",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109820",
        name: "Pendidikan Luar Biasa",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109830",
        name: "Pendidikan Luar Sekolah",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109910",
        name: "Pendidikan Masyarakat",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109920",
        name: "Pendidikan dan Pengembangan Sosial",
      },
      {
        pendidikan_id: "11",
        jurusan_id: "60109930",
        name: "Pendidikan D - II / PGSD",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61000000",
        name: "Spesialis I",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61000010",
        name: "Gigi",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040110",
        name: "Anak",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040120",
        name: "Kandungan",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040130",
        name: "Obstetri / Ginokolog",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040210",
        name: "Mata",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040220",
        name: "THT",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040230",
        name: "Kulit dan Kelamin",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040310",
        name: "Penyakuit Dalam",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040320",
        name: "Jantung",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040410",
        name: "Anestesi",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040420",
        name: "Radiologi",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040430",
        name: "Saraf",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040440",
        name: "Bedah",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040450",
        name: "Kedokteran Umum",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040470",
        name: "Kedokteran Hewan",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040510",
        name: "Psikiatri",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040520",
        name: "Fisio Terapi",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040600",
        name: "Ortodonsia",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040610",
        name: "Parasitolog",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040620",
        name: "Farmakologi",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040630",
        name: "Microbiologi",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040710",
        name: "Urolog",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040720",
        name: "Laboran",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040810",
        name: "Ortopedi",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040820",
        name: "Pathologi",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040900",
        name: "Notariat",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "61040950",
        name: "Teknik Pengairan",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "62000000",
        name: "Spesialis II",
      },
      {
        pendidikan_id: "12",
        jurusan_id: "62010000",
        name: "Sanitary",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71000000",
        name: "Pasca Sarjana",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71000500",
        name: "Keuangan Daerah",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71000510",
        name: "Akuntansi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71011000",
        name: "Ilmu Administrasi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71011020",
        name: "Administrasi Negara",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71011030",
        name: "Administrasi Rumah Sakit",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71011040",
        name: "Administrasi Pemerintahan Daerah",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71011050",
        name: "Administrasi Bisnis",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71011060",
        name: "Administrasi Pariwisata",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71012000",
        name: "Bidang Ekonomi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71012010",
        name: "Ilmu Ekonomi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71012020",
        name: "Ekonomika Pembangunan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71012030",
        name: "Ekonomi Sumberdaya Kelautan Tropika",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71012040",
        name: "Ekonomi Pembangunan dan Perencanaan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013000",
        name: "Manajemen",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013010",
        name: "Manajemen Modern",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013020",
        name: "Manajemen Sumber Daya Manusia",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013030",
        name: "Manajemen Pemasaran",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013040",
        name: "Manajemen Kebijakan Publik",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013050",
        name: "Manajemen Pemerintahan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013060",
        name: "Manajemen Pembangunan Daerah",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013070",
        name: "Manajemen Pendidikan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013080",
        name: "Department Of Integrated Survey For Natural Resources Management",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013090",
        name: "Manajemen Pemerintahan Daerah",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013100",
        name: "Manajemen Ekonomi Publik",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013110",
        name: "Manajemen dan Bisnis",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013120",
        name: "Manajemen Keuangan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013130",
        name: "Manajemen Sumber Daya Aparatur",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013140",
        name: "Manajemen Perusahaan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013150",
        name: "Manajemen Agribisnis",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013160",
        name: "Manajemen Rumah Sakit",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013170",
        name: "Manajemen Kesehatan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013180",
        name: "Manajemen Parawisata",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013190",
        name: "Manajemen Transportasi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71013200",
        name: "Manajemen Sistem Informasi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71014000",
        name: "Psikologi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71014010",
        name: "Psikiatri",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71015000",
        name: "Bioteknologi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71030000",
        name: "Ilmu Teknologi Kelautan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71030010",
        name: "Ilmu Kelautan Hayati dan Non Hayati",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71040000",
        name: "Bidang Informasi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71040010",
        name: "Rekayasa Sistem Informasi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71040020",
        name: "Sistem Informasi Geografis",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71050020",
        name: "Management Marketing",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71060000",
        name: "Bidang Pertanian",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71060010",
        name: "Ilmu Peternakan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71060020",
        name: " Agribisnis Pertanian",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71060030",
        name: "Ilmu Ekonomi Pertanian",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71060040",
        name: "Agronomi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71060050",
        name: "Ilmu Perairan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71060060",
        name: "Ilmu Produksi Ternak",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71060070",
        name: "Teknologi Industri Pangan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71060200",
        name: "Agroteknologi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71070000",
        name: "Ilmu Pemerintahan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71070020",
        name: "Ilmu Perencanaan dan Kebijakan Publik",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71070030",
        name: "Kebijakan Publik",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091000",
        name: "Bidang Teknik",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091010",
        name: "Rekayasa Pertambangan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091020",
        name: "Irigasi & Drainase",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091030",
        name: "Water Use Management",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091040",
        name: "Teknik Sipil",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091050",
        name: "Teknik Hidraulica",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091060",
        name: "Developmen Water Resources",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091070",
        name: "Pengembangan Sumber Daya Air",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091080",
        name: "Studi Pembangunan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091090",
        name: "Sanitary Engineering",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091100",
        name: "Teknik dan Manajemen Jalan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091110",
        name: "Teknik dan Manajemen Industri",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091120",
        name: "Teknik Industri",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091130",
        name: "Teknik Geodesi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091140",
        name: "Rekayasa Jalan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091150",
        name: "Pengelolaan Sumberdaya Air",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091160",
        name: "Informatika",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71091170",
        name: "Water Science And Engineering",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71092000",
        name: "Bidang Ilmu Teknik",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71092010",
        name: "Teknik Lingkungan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71092020",
        name: "Ilmu Lingkungan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71100000",
        name: "Bidang Pendidikan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71100020",
        name: "Perencanaan & Manajemen Pendidikan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71100030",
        name: "Administrasi Pendidikan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71100040",
        name: "Pendidikan Kebutuhan Khusus",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71100050",
        name: "Bimbingan dan Penyuluhan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71100100",
        name: "Pendidikan Luar Sekolah",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71100110",
        name: "Pendidikan Olah Raga",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71100200",
        name: "Pendidikan Ilmu Agama Islam",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71100210",
        name: "Studi Ekonomi Islam",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71100220",
        name: "Teknologi Pembelajaran",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71200000",
        name: "Bidang Ilmu Sastra",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71200010",
        name: "Museologi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71230000",
        name: "Bidang Hukum",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71230010",
        name: "Hukum Ekonomi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71230020",
        name: "Ilmu Hukum",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71230030",
        name: "Spesialis Notariat",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71230040",
        name: "Hukum Kesehatan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71230050",
        name: "Hukum Ketatanegaraan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71310000",
        name: "Bidang Kependudukan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71310010",
        name: "Kajian Kependudukan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71450000",
        name: "Bidang Ilmu Sosial",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71450010",
        name: "Pengembangan Masyarakat",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71450020",
        name: "Pasti Alam/Biologi/Ecologi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71450030",
        name: "Sosiologi ",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71450040",
        name: "Pekerjaan Sosial Klinis",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71450050",
        name: "Spesialis-1 Pekerjaan Sosial",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71460000",
        name: "Ilmu Perencanaan Kota & Daerah",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71460010",
        name: "Perencanaan Wilayah dan Kota",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71460020",
        name: "Ilmu Perencanaan Pembangunan Wilayah dan Pedesaan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71460030",
        name: "Kajian Pembangunan Perkotaan dan Wilayah",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71510000",
        name: "Bidang Matematika / Statistik",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71520000",
        name: "Perenc.Pemb.Regional",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71530000",
        name: "Ilmu Politik",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71530020",
        name: "Politik Lokal dan Otda",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71540110",
        name: "Master Of Public Administration",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71541000",
        name: "Kebijakan Administrasi Publik",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71542000",
        name: "Administrasi Publik",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71543000",
        name: "International Development",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71550010",
        name: "Master Of City Planning",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71560000",
        name: "Pengkajian Ketahanan Nasional",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71560010",
        name: "Master Of Commecle In Economics",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71600010",
        name: "Master Of Science In Urban Infrastructure Management",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71600020",
        name: "Master Of Professional Accounting",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71610010",
        name: "Master Of Arts In Urban Management And Development",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71610020",
        name: "Remote Sensing And Geographic Information System",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71620000",
        name: "Ilmu Komunikasi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71620010",
        name: "Master Of Planning Studies",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71630010",
        name: "Master Of Public International Administration",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71640010",
        name: "Master Of Urban And Rural City",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71640020",
        name: "Master Of Urban Management",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650000",
        name: "Bidang Kesehatan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650010",
        name: "Master Of Physical Health",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650020",
        name: "Spesialis Anak",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650030",
        name: "Spesialis Gigi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650040",
        name: "Spesialis Paru-Paru",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650050",
        name: "Spesialis Kejiwaan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650060",
        name: "Kesehatan Masyarakat",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650070",
        name: "Spesialis Patologi Klinik",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650080",
        name: "Epidemiologi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650090",
        name: "Ilmu Kesehatan Masyarakat",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650100",
        name: "Master Of Clinical Nursing",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650110",
        name: "Ilmu Kedokteran Dasar",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650120",
        name: "Ilmu Keperawatan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650130",
        name: "Ilmu Kedokteran Jiwa",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650140",
        name: "Ilmu Kesehtan Anak",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71650200",
        name: "Apoteker",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71660010",
        name: "Master Of Education",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71660020",
        name: "Master Of Engineering",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71660030",
        name: "Master In Information And Library Studies",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71660040",
        name: "Urban Engineering",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71670010",
        name: "Legal Law Master",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71680010",
        name: "Master Of Businnes Administration",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71700000",
        name: "Bidang Transportasi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71700010",
        name: "Sistem dan Teknik Transportasi",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71800000",
        name: "Kehutanan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71801000",
        name: "Tropical Forest Resource Management",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71802000",
        name: "Teknologi Hasil Hutan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71803000",
        name: "Ilmu Komputer",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71930000",
        name: "Public And Internasional",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71940000",
        name: "Teknologi Manajemen Lingkungan",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71950000",
        name: "Medical Anthropology",
      },
      {
        pendidikan_id: "13",
        jurusan_id: "71960000",
        name: "Pendidikan Bahasa Indonesia",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72000000",
        name: "Doktor",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72011010",
        name: "Ilmu Komunikasi",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72012000",
        name: "Bidang Ekonomi",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72012050",
        name: "Ilmu Manajemen",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72040000",
        name: "Bidang Kedokteran",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72044000",
        name: "Bidang Farmasi / Kimia",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72060000",
        name: "Bidang Pertanian",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72060010",
        name: "Ilmu Peternakan",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72060020",
        name: "Ilmu Pertanian",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72060030",
        name: "Agronomi",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72091000",
        name: "Bidang Teknik",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72091010",
        name: "Geologie",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72091050",
        name: "Transportasi",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72100000",
        name: "Bidang Pendidikan",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72100010",
        name: "Administrasi Pendidikan",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72100020",
        name: "Pendidikan Olah Raga",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72100030",
        name: "Pendidikan Luar Sekolah",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72100040",
        name: "Pengembangan Kurikulum",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72230000",
        name: "Bidang Hukum",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72230010",
        name: "Ilmu Hukum",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72240000",
        name: "Ilmu Manajemen Pemerintahan",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72240010",
        name: "Ilmu Manajemen Pemerintahan",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72450000",
        name: "Bidang Administrasi",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72450010",
        name: "Administrasi Publik",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72450100",
        name: "Bidang Ilmu Sosial",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72450110",
        name: "Sosiologi",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72450200",
        name: "Public Policy",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72500000",
        name: "Bidang Elektronika",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72500100",
        name: "Bidang Sistem Informasi / Komunikasi",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72500200",
        name: "Bidang Komputer",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72510000",
        name: "Bidang Matematika / Statistik",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72520000",
        name: "Administrasi Negara",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72600000",
        name: "Ilmu Sosial Politik",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72700000",
        name: "Master Of Social Scien Development Adm.",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72800000",
        name: "Rural Regional Dev. Planning",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72900000",
        name: "Map",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72910000",
        name: "Ilmu Lingkungan",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72920000",
        name: "Management Pembangunan",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72940000",
        name: "Ilmu Politik",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72950000",
        name: "School Of Science And Technology",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72960000",
        name: "Sosiology",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72970000",
        name: "Study Pembangunan",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "72980000",
        name: "Kebijakan Kehutanan",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "73000010",
        name: "Notariat",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "73001000",
        name: "Bidang Pendidikan",
      },
      {
        pendidikan_id: "14",
        jurusan_id: "73001010",
        name: "Administrasi Pendidikan",
      },
    ]);
  }
}

module.exports = JurusanSeeder;
