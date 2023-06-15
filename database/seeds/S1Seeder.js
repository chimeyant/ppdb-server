"use strict";

/*
|--------------------------------------------------------------------------
| S1Seeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Jurusan = use("App/Models/Jurusan");

class S1Seeder {
  async run() {
    await Jurusan.createMany([
      {
        jurusan_id: "2719",
        name: "S.1 MATEMATIKA",
      },
      {
        jurusan_id: "2720",
        name: "S.1 Ekonomi Pembangunan",
      },
      {
        jurusan_id: "2721",
        name: "S.1 Ekonomi Pertanian",
      },
      {
        jurusan_id: "2722",
        name: "S.1 Ekonomi Internasional",
      },
      {
        jurusan_id: "2723",
        name: "S.1 Ekonomi Sosial",
      },
      {
        jurusan_id: "2724",
        name: "S.1 Ekonomi Regional",
      },
      {
        jurusan_id: "2725",
        name: "S.1 Ekonomi dan Studi Pembangunan",
      },
      {
        jurusan_id: "2726",
        name: "S.1 Ekonomi Umum",
      },
      {
        jurusan_id: "2727",
        name: "S.1 Ekonomi Industri",
      },
      {
        jurusan_id: "2728",
        name: "S.1 Ekonomi Studi Pembangunan",
      },
      {
        jurusan_id: "2729",
        name: "S.1 Ekonomi Agraria",
      },
      {
        jurusan_id: "2730",
        name: "S.1 Ekonomi Koperasi",
      },
      {
        jurusan_id: "2731",
        name: "S.1 Ekonomi Demografi",
      },
      {
        jurusan_id: "2732",
        name: "S.1 Ekonomi Pertanian Agraria",
      },
      {
        jurusan_id: "2733",
        name: "S.1 Ekonomi Sumber Daya Alam",
      },
      {
        jurusan_id: "2734",
        name: "S.1 Ekonomi Kebendaharaan",
      },
      {
        jurusan_id: "2735",
        name: "S.1 Ekonomi Perdagangan Luar Negeri",
      },
      {
        jurusan_id: "2736",
        name: "S.1 Ekonomi Ketataniagaan",
      },
      {
        jurusan_id: "2737",
        name: "S.1 Ekonomi Pemerintahan",
      },
      {
        jurusan_id: "2738",
        name: "S.1 Ekonomi Statistik",
      },
      {
        jurusan_id: "2739",
        name: "S.1 Ekonomi Studi Perbandingan Ekonomi",
      },
      {
        jurusan_id: "2740",
        name: "S.1 Ekonomi Transportasi",
      },
      {
        jurusan_id: "2741",
        name: "S.1 Ekonomi Perumahan",
      },
      {
        jurusan_id: "2742",
        name: "S.1 Ekonomi Kesehatan",
      },
      {
        jurusan_id: "2743",
        name: "S.1 Ekonomi Akutansi",
      },
      {
        jurusan_id: "2744",
        name: "S.1 Ekonomi Ekonomi Inti",
      },
      {
        jurusan_id: "2745",
        name: "S.1 Ekonomi Ekonomi Moneter",
      },
      {
        jurusan_id: "2746",
        name: "S.1 Ekonomi Keuangan dan Perbankan",
      },
      {
        jurusan_id: "2747",
        name: "S.1 Ekonomi Keuangan",
      },
      {
        jurusan_id: "2748",
        name: "S.1 Ekonomi Keuangan Negara",
      },
      {
        jurusan_id: "2749",
        name: "S.1 Ekonomi Manajemen Akutansi",
      },
      {
        jurusan_id: "2750",
        name: "S.1 Ekonomi Manajemen Keuangan",
      },
      {
        jurusan_id: "2751",
        name: "S.1 Ekonomi Manajemen Keuangan dan Perbankan",
      },
      {
        jurusan_id: "2752",
        name: "S.1 Ekonomi Makro",
      },
      {
        jurusan_id: "2753",
        name: "S.1 Ekonomi Manajemen",
      },
      {
        jurusan_id: "2754",
        name: "S.1 Ekonomi Manajemen Pemasaran",
      },
      {
        jurusan_id: "2755",
        name: "S.1 Ekonomi Manajemen Personalia",
      },
      {
        jurusan_id: "2756",
        name: "S.1 Ekonomi Ketatalaksanaan Perusahaan",
      },
      {
        jurusan_id: "2757",
        name: "S.1 Ekonomi Ketatalaksanaan",
      },
      {
        jurusan_id: "2758",
        name: "S.1 Ekonomi Perusahaan",
      },
      {
        jurusan_id: "2759",
        name: "S.1 MANAJEMEN",
      },
      {
        jurusan_id: "2760",
        name: "S.1 Pertanian Bio Perairan/Ikan",
      },
      {
        jurusan_id: "2761",
        name: "S.1 Pertanian Bercocok Tanam",
      },
      {
        jurusan_id: "2762",
        name: "S.1 Pertanian Usaha Tani",
      },
      {
        jurusan_id: "2763",
        name: "S.1 Pertanian Pemb. Pertanian",
      },
      {
        jurusan_id: "2764",
        name: "S.1 Pertanian Penyuluhan Pertanian",
      },
      {
        jurusan_id: "2765",
        name: "S.1 Pertanian Pengolahan Hasil Pertanian",
      },
      {
        jurusan_id: "2766",
        name: "S.1 Pertanian Ilmu Tanaman 1 Tahun",
      },
      {
        jurusan_id: "2767",
        name: "S.1 Pertanian Keahlian Agraria",
      },
      {
        jurusan_id: "2768",
        name: "S.1 Sosial Ekonomi Pertanian",
      },
      {
        jurusan_id: "2769",
        name: "S.1 Pertanian Sosio Produksi Tanaman",
      },
      {
        jurusan_id: "2770",
        name: "S.1 Pertanian Teknologi Pertanian",
      },
      {
        jurusan_id: "2771",
        name: "S.1 Pertanian Teknologi Pangan",
      },
      {
        jurusan_id: "2772",
        name: "S.1 Pertanian Teknologi Tanaman Keras",
      },
      {
        jurusan_id: "2773",
        name: "S.1 Pertanian Teknologi Tanaman Muda",
      },
      {
        jurusan_id: "2774",
        name: "S.1 Pertanian Teknologi Serat",
      },
      {
        jurusan_id: "2775",
        name: "S.1 Pertanian Teknologi Pengolahan",
      },
      {
        jurusan_id: "2776",
        name: "S.1 Pertanian Teknologi Industri Pertanian",
      },
      {
        jurusan_id: "2777",
        name: "S.1 Pertanian Produksi Pertanian",
      },
      {
        jurusan_id: "2778",
        name: "S.1 Pertanian Teknologi Tanaman Industri",
      },
      {
        jurusan_id: "2779",
        name: "S.1 Pertanian Mekanisme Pertanian",
      },
      {
        jurusan_id: "2780",
        name: "S.1 Pertanian Alat-alat Pertanian",
      },
      {
        jurusan_id: "2781",
        name: "S.1 Pertanian Teknologi Benih",
      },
      {
        jurusan_id: "2782",
        name: "S.1 Pertanian Statistik",
      },
      {
        jurusan_id: "2783",
        name: "S.1 Pertanian Statistik Pertanian",
      },
      {
        jurusan_id: "2784",
        name: "S.1 Pertanian Bidang Statistik",
      },
      {
        jurusan_id: "2785",
        name: "S.1 Pertanian Sosiologi Pedesaan",
      },
      {
        jurusan_id: "2786",
        name: "S.1 Pertanian Sosial Ekonomi",
      },
      {
        jurusan_id: "2787",
        name: "S.1 Pertanian Ekonomi Pembangunan",
      },
      {
        jurusan_id: "2788",
        name: "S.1 Pertanian Agronomi",
      },
      {
        jurusan_id: "2789",
        name: "S.1 Pertanian Agrobisnis",
      },
      {
        jurusan_id: "2790",
        name: "S.1 Pertanian Agronomi Pemulihan Tanah",
      },
      {
        jurusan_id: "2791",
        name: "S.1 Pertanian Agronomi Holtikultural",
      },
      {
        jurusan_id: "2792",
        name: "S.1 Pertanian Agronomi Tanaman",
      },
      {
        jurusan_id: "2793",
        name: "S.1 Pertanian Agroklimatologi",
      },
      {
        jurusan_id: "2794",
        name: "S.1 Pertanian Agro Ekonomi",
      },
      {
        jurusan_id: "2795",
        name: "S.1 Pertanian Agronomi Produksi Tanaman",
      },
      {
        jurusan_id: "2796",
        name: "S.1 Pertanian Agronomi Tanah",
      },
      {
        jurusan_id: "2797",
        name: "S.1 Pertanian Budi Daya Pertanian",
      },
      {
        jurusan_id: "2798",
        name: "S.1 Pertanian Budi Daya Tanaman Keras",
      },
      {
        jurusan_id: "2799",
        name: "S.1 Pertanian Tanaman Pangan dan Gizi",
      },
      {
        jurusan_id: "2800",
        name: "S.1 Pertanian Bercocok Tanam Perkebunan",
      },
      {
        jurusan_id: "2801",
        name: "S.1 Pertanian Pengawetan Tanah",
      },
      {
        jurusan_id: "2802",
        name: "S.1 Pertanian Ilmu Kesuburan Tanah",
      },
      {
        jurusan_id: "2803",
        name: "S.1 Pertanian Pengawetan dan Rekl.",
      },
      {
        jurusan_id: "2804",
        name: "S.1 Pertanian Penyuluhan Tanah",
      },
      {
        jurusan_id: "2805",
        name: "S.1 Pertanian Pengolahan Tanah",
      },
      {
        jurusan_id: "2806",
        name: "S.1 Pertanian Perkebunan",
      },
      {
        jurusan_id: "2807",
        name: "S.1 Pertanian Kehutanan",
      },
      {
        jurusan_id: "2808",
        name: "S.1 Pertanian Perikanan",
      },
      {
        jurusan_id: "2809",
        name: "S.1 Pertanian Peternakan",
      },
      {
        jurusan_id: "2810",
        name: "S.1 Pertanian Teknologi Hasil Hewan",
      },
      {
        jurusan_id: "2811",
        name: "S.1 Pertanian Pengolahan Hasil Hewan",
      },
      {
        jurusan_id: "2812",
        name: "S.1 Pertanian Pengolahan Hasil Ternak",
      },
      {
        jurusan_id: "2813",
        name: "S.1 Pertanian Produksi Peternakan",
      },
      {
        jurusan_id: "2814",
        name: "S.1 Pertanian Tanaman Pangan",
      },
      {
        jurusan_id: "2815",
        name: "S.1 Pertanian Hama dan Penyakit Tanaman",
      },
      {
        jurusan_id: "2816",
        name: "S.1 Pitopatologi dan Tumbuhan",
      },
      {
        jurusan_id: "2817",
        name: "S.1 Virologi Tumbuh-tumbuhan",
      },
      {
        jurusan_id: "2818",
        name: "S.1 Pertanian Hama Tumbuhan/Penyakit",
      },
      {
        jurusan_id: "2819",
        name: "S.1 Pertanian Patologi",
      },
      {
        jurusan_id: "2820",
        name: "S.1 Hama dan Penyakit Tanaman",
      },
      {
        jurusan_id: "2821",
        name: "S.1 Pertanian Perlindungan Tanaman",
      },
      {
        jurusan_id: "2822",
        name: "S.1 Pertanian Pemuliaan Tanaman",
      },
      {
        jurusan_id: "2823",
        name: "S.1 Pertanian Botanical Science",
      },
      {
        jurusan_id: "2824",
        name: "S.1 Pertanian Ekonomi Produksi",
      },
      {
        jurusan_id: "2825",
        name: "S.1 Pertanian Proteksi Tanaman",
      },
      {
        jurusan_id: "2826",
        name: "S.1 Fisiologi Reproduksi Tanaman",
      },
      {
        jurusan_id: "2827",
        name: "S.1 Pertanian Mixed Farming",
      },
      {
        jurusan_id: "2828",
        name: "S.1 Pertanian Tanah dan Pemupukan",
      },
      {
        jurusan_id: "2829",
        name: "S.1 Pengolahan Tanah dan Tanaman",
      },
      {
        jurusan_id: "2830",
        name: "S.1 Pertanian Klasifikasi Tanah",
      },
      {
        jurusan_id: "2831",
        name: "S.1 Pertanian Mikrologi Tanah",
      },
      {
        jurusan_id: "2832",
        name: "S.1 Pertanian Produksi dan Pengolahan",
      },
      {
        jurusan_id: "2833",
        name: "S.1 Ilmu Gizi Masyarakat",
      },
      {
        jurusan_id: "2834",
        name: "S.1 Pertanian Gizi Pertanian",
      },
      {
        jurusan_id: "2835",
        name: "S.1 Sumber Daya Alam dan Lingkungan",
      },
      {
        jurusan_id: "2836",
        name: "S.1 Pemanfatan Sumber Daya",
      },
      {
        jurusan_id: "2837",
        name: "S.1 Perusahaan Pertanian",
      },
      {
        jurusan_id: "2838",
        name: "S.1 Pertanian Perniagaan Tani",
      },
      {
        jurusan_id: "2839",
        name: "S.1 Pertanian Pembangunan Pedesaan",
      },
      {
        jurusan_id: "2840",
        name: "S.1 Pertanian Ekonomi Sumber Daya",
      },
      {
        jurusan_id: "2841",
        name: "S.1 Perkebunan",
      },
      {
        jurusan_id: "2842",
        name: "S.1 Perkebunan Teknik Perkebunan",
      },
      {
        jurusan_id: "2843",
        name: "S.1 Perkebunan Ekonomi Perkebunan",
      },
      {
        jurusan_id: "2844",
        name: "S.1 Budaya Perkebunan",
      },
      {
        jurusan_id: "2845",
        name: "S.1 Teknologi Perkebunan",
      },
      {
        jurusan_id: "2846",
        name: "S.1 Kehutanan",
      },
      {
        jurusan_id: "2847",
        name: "S.1 Kehutanan Manajemen Hutan",
      },
      {
        jurusan_id: "2848",
        name: "S.1 Kehutanan Manajemen Hasil Hutan",
      },
      {
        jurusan_id: "2849",
        name: "S.1 Kehutanan Ek. Perusahaan",
      },
      {
        jurusan_id: "2850",
        name: "S.1 Teknologi Hasil Hutan",
      },
      {
        jurusan_id: "2851",
        name: "S.1 Kehutanan Teknik Kehutanan",
      },
      {
        jurusan_id: "2852",
        name: "S.1 Kehutanan Teknik Kayu",
      },
      {
        jurusan_id: "2853",
        name: "S.1 Kehutanan Pembinaan Hutan",
      },
      {
        jurusan_id: "2854",
        name: "S.1 Kehutanan Konservasi Sumber Daya Hutan",
      },
      {
        jurusan_id: "2855",
        name: "S.1 Kehutanan Pemuliaan Hutan",
      },
      {
        jurusan_id: "2856",
        name: "S.1 Kehutanan Silvikultur",
      },
      {
        jurusan_id: "2857",
        name: "S.1 Kehutanan Ilmu Hutan",
      },
      {
        jurusan_id: "2858",
        name: "S.1 Kehutanan Budidaya Hutan",
      },
      {
        jurusan_id: "2859",
        name: "S.1 Peternakan",
      },
      {
        jurusan_id: "2860",
        name: "S.1 Produksi Ternak",
      },
      {
        jurusan_id: "2861",
        name: "S.1 Peternakan Ternak Unggas",
      },
      {
        jurusan_id: "2862",
        name: "S.1 Peternakan Ternak Perah",
      },
      {
        jurusan_id: "2863",
        name: "S.1 Peternakan Ternak Potong",
      },
      {
        jurusan_id: "2864",
        name: "S.1 Peternakan Nutrisi Makanan Ternak",
      },
      {
        jurusan_id: "2865",
        name: "S.1 Peternakan Makanan Ternak",
      },
      {
        jurusan_id: "2866",
        name: "S.1 Peternakan Teknik Hasil Ternak",
      },
      {
        jurusan_id: "2867",
        name: "S.1 Peternakan Teknik Peternakan",
      },
      {
        jurusan_id: "3090",
        name: "S.1 Pendidikan IPS Sandratari dan Musik",
      },
      {
        jurusan_id: "3091",
        name: "S.1 Pendidikan IPS Seni Musik",
      },
      {
        jurusan_id: "3092",
        name: "S.1 Pendidikan IPS Seni Rupa",
      },
      {
        jurusan_id: "3093",
        name: "S.1 Pendidikan IPS Seni Tari",
      },
      {
        jurusan_id: "3094",
        name: "S.1 Pendidikan IPS Tata Boga",
      },
      {
        jurusan_id: "3095",
        name: "S.1 Pendidikan IPS Tata Busana",
      },
      {
        jurusan_id: "3096",
        name: "S.1 Pendidikan IPS Tata Graha",
      },
      {
        jurusan_id: "3097",
        name: "S.1 Pendidikan FP IPS",
      },
      {
        jurusan_id: "3098",
        name: "S.1 Pendidikan IPS Tata Niaga",
      },
      {
        jurusan_id: "3099",
        name: "S.1 Pendidikan IPS Tata Perkantoran",
      },
      {
        jurusan_id: "3100",
        name: "S.1 Pendidikan IPS Tata Perusahaan",
      },
      {
        jurusan_id: "3101",
        name: "S.1 Pendidikan IPS Tata Buku",
      },
      {
        jurusan_id: "3102",
        name: "S.1 Pendidikan IPS Akutansi",
      },
      {
        jurusan_id: "3103",
        name: "S.1 Pendidikan IPS Hitung Dagang",
      },
      {
        jurusan_id: "3104",
        name: "S.1 ILMU KEGURUAN DAN PENDIDIKAN",
      },
      {
        jurusan_id: "3105",
        name: "S.1 Pendidikan IPS Ekonomi Perusahaan",
      },
      {
        jurusan_id: "3106",
        name: "S.1 Pendidikan IPS Ekonomi Koperasi",
      },
      {
        jurusan_id: "3107",
        name: "S.1 Pendidikan IPS Koperasi",
      },
      {
        jurusan_id: "3108",
        name: "S.1 Pendidikan IPS Bisnis Tata Buku",
      },
      {
        jurusan_id: "3109",
        name: "S.1 Pendidikan IPS Bisnis Vokasional",
      },
      {
        jurusan_id: "3110",
        name: "S.1 Pendidikan IPS Kesehatan dan Rekreasi",
      },
      {
        jurusan_id: "3111",
        name: "S.1 Pendidikan IPS Kesejahteraan Keluarga",
      },
      {
        jurusan_id: "3112",
        name: "S.1 Pendidikan Kesejahteraan Sosial",
      },
      {
        jurusan_id: "3113",
        name: "S.1 Pendidikan Manajemen",
      },
      {
        jurusan_id: "3114",
        name: "S.1 Pendidikan Filsafat",
      },
      {
        jurusan_id: "3115",
        name: "S.1 Pendidikan Filsafat Kebudayaan",
      },
      {
        jurusan_id: "3116",
        name: "S.1 Pendidikan Filsafat Pendidikan",
      },
      {
        jurusan_id: "3117",
        name: "S.1 Pendidikan Fisafat Sosiologi",
      },
      {
        jurusan_id: "3118",
        name: "S.1 Pendidikan Bahasa",
      },
      {
        jurusan_id: "3119",
        name: "S.1 Pendidikan Bahasa dan Sastra Indonesia",
      },
      {
        jurusan_id: "3120",
        name: "S.1 Pendidikan Bahasa Indonesia",
      },
      {
        jurusan_id: "3121",
        name: "S.1 Pendidikan Bahasa dan Sastra",
      },
      {
        jurusan_id: "3122",
        name: "S.1 Pendidikan Bahasa dan Sastra Indonesia",
      },
      {
        jurusan_id: "3123",
        name: "S.1 Pendidikan Bahasa dan Sastra Daerah",
      },
      {
        jurusan_id: "3124",
        name: "S.1 Pendidikan Bahasa dan Sastra Jawa",
      },
      {
        jurusan_id: "3125",
        name: "S.1 Pendidikan Bahasa Jawa",
      },
      {
        jurusan_id: "3126",
        name: "S.1 Pendidikan Bahasa dan Sastra Sundah",
      },
      {
        jurusan_id: "3127",
        name: "S.1 Pendidikan Sastra Arab",
      },
      {
        jurusan_id: "3128",
        name: "S.1 Pendidikan Bahasa Arab",
      },
      {
        jurusan_id: "3129",
        name: "S.1 Pendidikan Bahasa dan Sastra Arab",
      },
      {
        jurusan_id: "3130",
        name: "S.1 Pendidikan Sastra Rusia",
      },
      {
        jurusan_id: "3131",
        name: "S.1 Pendidikan Bahasa Rusia",
      },
      {
        jurusan_id: "3132",
        name: "S.1 Pendidikan Bahasa dan Sastra Asing",
      },
      {
        jurusan_id: "3133",
        name: "S.1 Pendidikan Bahasa dan Sastra Inggris",
      },
      {
        jurusan_id: "3134",
        name: "S.1 Pendidikan Bahasa dan Sastra Jepang",
      },
      {
        jurusan_id: "3135",
        name: "S.1 Pendidikan Bahasa Jepang",
      },
      {
        jurusan_id: "3136",
        name: "S.1 Pendidikan Bahasa dan Sastra Jerman",
      },
      {
        jurusan_id: "3137",
        name: "S.1 Pendidikan Bahasa Jerman",
      },
      {
        jurusan_id: "3138",
        name: "S.1 Pendidikan Bahasa Perancis",
      },
      {
        jurusan_id: "3139",
        name: "S.1 ILMU PENDIDIKAN",
      },
      {
        jurusan_id: "3140",
        name: "S.1 Pendidikan Paedagogik",
      },
      {
        jurusan_id: "3141",
        name: "S.1 Pendidikan Didaktik",
      },
      {
        jurusan_id: "3142",
        name: "S.1 Pendidikan Sejarah",
      },
      {
        jurusan_id: "3143",
        name: "S.1 Pendidikan Bimbingan dan Konseling",
      },
      {
        jurusan_id: "3144",
        name: "S.1  Bimbingan dan Konseling",
      },
      {
        jurusan_id: "3145",
        name: "S.1 Pendidikan Psikologi",
      },
      {
        jurusan_id: "3146",
        name: "S.1 Pendidikan Psikologi Pendidikan",
      },
      {
        jurusan_id: "3147",
        name: "S.1 Pendidikan PSIK Pendidikan",
      },
      {
        jurusan_id: "3148",
        name: "S.1 Pendidikan Keguruan dan Ilmu Sosial",
      },
      {
        jurusan_id: "3149",
        name: "S.1 Pendidikan Kurikulum dan Persekolahan",
      },
      {
        jurusan_id: "3150",
        name: "S.1 Pendidikan Kurikulum dan Teknologi",
      },
      {
        jurusan_id: "3151",
        name: "S.1 Pendidikan Kurikulum Pendidikan",
      },
      {
        jurusan_id: "3152",
        name: "S.1 Pendidikan Kurikulum Penyuluhan",
      },
      {
        jurusan_id: "3153",
        name: "S.1 Pendidikan Kurtek Pendidikan",
      },
      {
        jurusan_id: "3154",
        name: "S.1 Pendidikan Metodologi dan Kurikulum",
      },
      {
        jurusan_id: "3155",
        name: "S.1 Pendidikan Metodologi Pendidikan",
      },
      {
        jurusan_id: "3156",
        name: "S.1  Pendidikan Pengetahun dan Pengembangan",
      },
      {
        jurusan_id: "3157",
        name: "S.1 Pendidikan Perencanaan Pendidikan",
      },
      {
        jurusan_id: "3158",
        name: "S.1 Pendidikan Agama Kristen",
      },
      {
        jurusan_id: "3159",
        name: "S.1 Pendidikan Anak",
      },
      {
        jurusan_id: "3160",
        name: "S.1 Pendidikan Dasar",
      },
      {
        jurusan_id: "3161",
        name: "S.1 Pendidikan Dasar Hukum",
      },
      {
        jurusan_id: "3162",
        name: "S.1 Pendidikan Olah Raga dan rekreasi",
      },
      {
        jurusan_id: "3163",
        name: "S 1 IPS",
      },
      {
        jurusan_id: "3164",
        name: "S.1 Pendidikan Bisnis",
      },
      {
        jurusan_id: "3165",
        name: "S.1 Pendidikan Dunia Usaha",
      },
      {
        jurusan_id: "3166",
        name: "S.1 Pendidikan Guru",
      },
      {
        jurusan_id: "3167",
        name: "S.1 Pendidikan Program Guru Sekolah",
      },
      {
        jurusan_id: "3168",
        name: "S.1 Pendidikan Luar Biasa",
      },
      {
        jurusan_id: "3169",
        name: "S.1 Pendidikan Luar Sekolah",
      },
      {
        jurusan_id: "3170",
        name: "S.1 Pendidikan Masyarakat",
      },
      {
        jurusan_id: "3171",
        name: "S.1 Pendidikan dan Pengembangan",
      },
      {
        jurusan_id: "3172",
        name: "S.1 Seni",
      },
      {
        jurusan_id: "3173",
        name: "S.1 Seni Rupa dan Desain",
      },
      {
        jurusan_id: "3174",
        name: "S.1 Seni Murni",
      },
      {
        jurusan_id: "3175",
        name: "S.1 Seni Grafis",
      },
      {
        jurusan_id: "3176",
        name: "S.1 Seni Rupa dan Kerajinan",
      },
      {
        jurusan_id: "3177",
        name: "S.1 Seni Grafik",
      },
      {
        jurusan_id: "3178",
        name: "S.1 Seni Lukis",
      },
      {
        jurusan_id: "3179",
        name: "S.1 Seni Seniman",
      },
      {
        jurusan_id: "3180",
        name: "S.1 Seni Illustrasi",
      },
      {
        jurusan_id: "3181",
        name: "S.1 Seni Kriya",
      },
      {
        jurusan_id: "3182",
        name: "S.1 Seni Patung",
      },
      {
        jurusan_id: "3183",
        name: "S.1 Seni Keramik",
      },
      {
        jurusan_id: "3184",
        name: "S.1 Seni Kriya Logam",
      },
      {
        jurusan_id: "3185",
        name: "S.1 Seni Kriya Kayu",
      },
      {
        jurusan_id: "3186",
        name: "S.1 Seni Desain Komposisi Visual",
      },
      {
        jurusan_id: "3187",
        name: "S.1 Seni Desain Tekstil",
      },
      {
        jurusan_id: "3188",
        name: "S.1 Seni Reklame",
      },
      {
        jurusan_id: "3189",
        name: "S.1 Seni Dekorasi",
      },
      {
        jurusan_id: "3190",
        name: "S.1 Seni Desain Produksi",
      },
      {
        jurusan_id: "3191",
        name: "S.1 Seni Desain Interior",
      },
      {
        jurusan_id: "3192",
        name: "S.1 Seni Desain Komunikasi",
      },
      {
        jurusan_id: "3193",
        name: "S.1 Seni Desain Kriya",
      },
      {
        jurusan_id: "3194",
        name: "S.1 Seni Produksi",
      },
      {
        jurusan_id: "3195",
        name: "S.1 Seni Tari",
      },
      {
        jurusan_id: "3196",
        name: "S.1 Seni Tari Jawa",
      },
      {
        jurusan_id: "3197",
        name: "S.1 Seni Desain Komposisi Tari",
      },
      {
        jurusan_id: "3198",
        name: "S.1 Seni Sastra Tari",
      },
      {
        jurusan_id: "3199",
        name: "S.1 Seni Teori dan Komposisi Tari",
      },
      {
        jurusan_id: "3200",
        name: "S.1 Seni Tari Bali",
      },
      {
        jurusan_id: "3201",
        name: "S.1 Seni Kurealogi",
      },
      {
        jurusan_id: "3202",
        name: "S.1 Seni Tari",
      },
      {
        jurusan_id: "3203",
        name: "S.1 Seni Tari Nusantara",
      },
      {
        jurusan_id: "3204",
        name: "S.1 Seni Karawitan",
      },
      {
        jurusan_id: "3205",
        name: "S.1 Seni Karawitan",
      },
      {
        jurusan_id: "3206",
        name: "S.1 Seni Musik",
      },
      {
        jurusan_id: "3207",
        name: "S.1 Seni Musik Sekolah",
      },
      {
        jurusan_id: "3208",
        name: "S.1 Seni Sastra Musik",
      },
      {
        jurusan_id: "3209",
        name: "S.1 Seni Teori Komposisi Musik",
      },
      {
        jurusan_id: "3210",
        name: "S.1 Seni Teater",
      },
      {
        jurusan_id: "3211",
        name: "S.1 Seni Cinematografi",
      },
      {
        jurusan_id: "3212",
        name: "S.1 Seni Pedalangan",
      },
      {
        jurusan_id: "3213",
        name: "S.1 Seni Diamlurgi",
      },
      {
        jurusan_id: "3214",
        name: "S.1 Seni Komposisi",
      },
      {
        jurusan_id: "3215",
        name: "S.1 Seni Kamera",
      },
      {
        jurusan_id: "3216",
        name: "S.1 Sastra Indonesia",
      },
      {
        jurusan_id: "3217",
        name: "S.1 BAHASA INDONESIA",
      },
      {
        jurusan_id: "3218",
        name: "S.1 Sejarah Indonesia",
      },
      {
        jurusan_id: "3219",
        name: "S.1 Filsafat Bahasa dan Sastra",
      },
      {
        jurusan_id: "3220",
        name: "S.1 Bahasa dan Sastra Indonesia",
      },
      {
        jurusan_id: "3221",
        name: "S.1 Sastra Nusantara",
      },
      {
        jurusan_id: "3222",
        name: "S.1 Bahasa Sansekerta",
      },
      {
        jurusan_id: "3223",
        name: "S.1 Sastra Daerah",
      },
      {
        jurusan_id: "3224",
        name: "S.1 Bahasa Jawa",
      },
      {
        jurusan_id: "3225",
        name: "S.1 Sastra Jawa",
      },
      {
        jurusan_id: "3226",
        name: "S.1 Bahasa dan Sastra Jawa",
      },
      {
        jurusan_id: "3227",
        name: "S.1 Sastra Budaya Jawa",
      },
      {
        jurusan_id: "3228",
        name: "S.1 Sastra Jawa Kuno",
      },
      {
        jurusan_id: "3229",
        name: "S.1 Bahasa Daerah",
      },
      {
        jurusan_id: "3230",
        name: "S.1 Sastra Sunda",
      },
      {
        jurusan_id: "3231",
        name: "S.1 Bahasa dan Sastra Sunda",
      },
      {
        jurusan_id: "3232",
        name: "S.1 Bahasa Bali",
      },
      {
        jurusan_id: "3233",
        name: "S.1 Sastra Bali",
      },
      {
        jurusan_id: "3234",
        name: "S.1 Bahasa dan Sastra Bali",
      },
      {
        jurusan_id: "3235",
        name: "S.1 Sastra Asia Timur",
      },
      {
        jurusan_id: "3236",
        name: "S.1 BAHASA JEPANG",
      },
      {
        jurusan_id: "3237",
        name: "S.1 Sastra Jepang",
      },
      {
        jurusan_id: "3238",
        name: "S.1 Bahasa dan Sastra Jepang",
      },
      {
        jurusan_id: "3239",
        name: "S.1 Bahasa Cina",
      },
      {
        jurusan_id: "3240",
        name: "S.1 Sastra Cina",
      },
      {
        jurusan_id: "3241",
        name: "S.1 Bahasa dan Sastra Cina",
      },
      {
        jurusan_id: "3242",
        name: "S.1 Bahasa Korea",
      },
      {
        jurusan_id: "3243",
        name: "S.1 Sastra Korea",
      },
      {
        jurusan_id: "3244",
        name: "S.1 Bahasa dan Sastra Korea",
      },
      {
        jurusan_id: "3245",
        name: "S.1 Sastra Asia Barat",
      },
      {
        jurusan_id: "3246",
        name: "S.1 Bahasa Arab",
      },
      {
        jurusan_id: "3247",
        name: "S.1 Sastra Arab",
      },
      {
        jurusan_id: "3248",
        name: "S.1 Bahasa dan Sastra Arab",
      },
      {
        jurusan_id: "3249",
        name: "S.1 Sastra Arab dan Kebudayaan Islam",
      },
      {
        jurusan_id: "3250",
        name: "S.1 Bahasa India",
      },
      {
        jurusan_id: "3251",
        name: "S.1 Sastra India",
      },
      {
        jurusan_id: "3252",
        name: "S.1 Bahasa dan Sastra India",
      },
      {
        jurusan_id: "3253",
        name: "S.1 Sastra Eropa",
      },
      {
        jurusan_id: "3254",
        name: "S.1. Bahasa dan Sastra Eropa",
      },
      {
        jurusan_id: "3255",
        name: "S.1 Sastra Inggris",
      },
      {
        jurusan_id: "3256",
        name: "S.1 Pendidikan Bahasa Inggris",
      },
      {
        jurusan_id: "3257",
        name: "S.1 Bahasa dan Sastra Inggris",
      },
      {
        jurusan_id: "3258",
        name: "S.1 Kesusasteraan Inggris",
      },
      {
        jurusan_id: "3259",
        name: "S.1 Sastra Anglo Saxon",
      },
      {
        jurusan_id: "3260",
        name: "S.1 Sastra Perancis",
      },
      {
        jurusan_id: "3261",
        name: "S.1 Bahasa Perancis",
      },
      {
        jurusan_id: "3262",
        name: "S.1 Bahasa dan Sastra Perancis",
      },
      {
        jurusan_id: "3263",
        name: "S.1 Sastra Belanda",
      },
      {
        jurusan_id: "3264",
        name: "S.1 Bahasa Belanda",
      },
      {
        jurusan_id: "3265",
        name: "S.1 Bahasa dan Sastra Belanda",
      },
      {
        jurusan_id: "3266",
        name: "S.1 Sastra Rusia",
      },
      {
        jurusan_id: "3267",
        name: "S.1 Bahasa Rusia",
      },
      {
        jurusan_id: "3268",
        name: "S.1 Bahasa dan Sastra Rusia",
      },
      {
        jurusan_id: "3269",
        name: "S.1 Sastra Jerman",
      },
      {
        jurusan_id: "3270",
        name: "S.1 Bahasa Jerman",
      },
      {
        jurusan_id: "3271",
        name: "S.1 Bahasa dan Sastra Jerman",
      },
      {
        jurusan_id: "3272",
        name: "S.1 Sastra Roma",
      },
      {
        jurusan_id: "3273",
        name: "S.1 Sastra Slavia",
      },
      {
        jurusan_id: "3274",
        name: "S.1 Bahasa dan Sastra Slavia",
      },
      {
        jurusan_id: "3275",
        name: "S.1 Antropologi",
      },
      {
        jurusan_id: "3276",
        name: "S.1 Antropologi Budaya Purbakala",
      },
      {
        jurusan_id: "3277",
        name: "S.1 Antropologi Budaya Arkeologi",
      },
      {
        jurusan_id: "3278",
        name: "S.1 Budaya Antropologi",
      },
      {
        jurusan_id: "3279",
        name: "S.1 Pubakalan dan Etnologi",
      },
      {
        jurusan_id: "3280",
        name: "S.1 Antropologi Budaya",
      },
      {
        jurusan_id: "3281",
        name: "S.1 Antropologi Sastra",
      },
      {
        jurusan_id: "3282",
        name: "S.1 Antropologi.Budaya Sosiologi",
      },
      {
        jurusan_id: "3283",
        name: "S.1 Antropologi Budaya Paedagogik",
      },
      {
        jurusan_id: "3284",
        name: "S.1 Antropologi Budaya Linguistik",
      },
      {
        jurusan_id: "3285",
        name: "S.1 Budaya Lingusitik Jawa",
      },
      {
        jurusan_id: "3286",
        name: "S.1 Budaya Linguistik Indonesia",
      },
      {
        jurusan_id: "3287",
        name: "S.1 Sastra Lingusitik Inggris",
      },
      {
        jurusan_id: "3288",
        name: "S.1 Sastra Kesusasteraan Syariah",
      },
      {
        jurusan_id: "3289",
        name: "S.1 Sastra Filsafat",
      },
      {
        jurusan_id: "3290",
        name: "S.1 Sastra Indonesialogi",
      },
      {
        jurusan_id: "3291",
        name: "S.1 Sastra Etnomusicologi",
      },
      {
        jurusan_id: "3292",
        name: "S.1 Sastra Musik",
      },
      {
        jurusan_id: "3293",
        name: "S.1 Sastra Seni Rupa",
      },
      {
        jurusan_id: "3294",
        name: "S.1 Sastra Seni Lukis",
      },
      {
        jurusan_id: "3295",
        name: "S.1 Sastra Desain Tekstil",
      },
      {
        jurusan_id: "3296",
        name: "S.1 Sastra Desain Grafis",
      },
      {
        jurusan_id: "3297",
        name: "S.1 Sastra Perpustakaan",
      },
      {
        jurusan_id: "3298",
        name: "S.1 Hukum",
      },
      {
        jurusan_id: "3299",
        name: "S.1 Hukum Adat",
      },
      {
        jurusan_id: "3300",
        name: "S.1 Hukum Perundang-undangan",
      },
      {
        jurusan_id: "3301",
        name: "S.1 Ilmu Hukum",
      },
      {
        jurusan_id: "3302",
        name: "S.1 Tata Hukum",
      },
      {
        jurusan_id: "3303",
        name: "S.1 Hukum Umum",
      },
      {
        jurusan_id: "3304",
        name: "S.1 Hukum Keperdataan",
      },
      {
        jurusan_id: "3305",
        name: "S.1 Hukum Perdata Adat",
      },
      {
        jurusan_id: "3306",
        name: "S.1 Hukum Perdata Internasional",
      },
      {
        jurusan_id: "3307",
        name: "S.1 Hukum Perdata Pidana Islam",
      },
      {
        jurusan_id: "3308",
        name: "S.1 Hukum Perdata Umum",
      },
      {
        jurusan_id: "3309",
        name: "S.1 Studi Hukum Perdata",
      },
      {
        jurusan_id: "3310",
        name: "S.1 Hukum Perdata",
      },
      {
        jurusan_id: "3311",
        name: "S.1 Hukum Perdata BW",
      },
      {
        jurusan_id: "3312",
        name: "S.1 Studi Hukum Pidana",
      },
      {
        jurusan_id: "3313",
        name: "S.1 Hukum Islam",
      },
      {
        jurusan_id: "3314",
        name: "S.1 Hukum Sipil",
      },
      {
        jurusan_id: "3315",
        name: "S.1 Hukum Agrafia",
      },
      {
        jurusan_id: "3316",
        name: "S.1 Hukum Sosial Agraria",
      },
      {
        jurusan_id: "3317",
        name: "S.1 Hukum Dagang",
      },
      {
        jurusan_id: "3318",
        name: "S.1 Hukum Notariat",
      },
      {
        jurusan_id: "3319",
        name: "S.1 Hukum Administrasi",
      },
      {
        jurusan_id: "3320",
        name: "S.1 Hukum Pemda dan Keswatantraan",
      },
      {
        jurusan_id: "3321",
        name: "S.1 Hukum Penerbangan",
      },
      {
        jurusan_id: "3322",
        name: "S.1 Hukum Perburuhan",
      },
      {
        jurusan_id: "3323",
        name: "S.1 Hukum Tata Negara",
      },
      {
        jurusan_id: "3324",
        name: "S.1 Hukum Tata Pemerintahan",
      },
      {
        jurusan_id: "3325",
        name: "S.1 Hukum Kenegaraan",
      },
      {
        jurusan_id: "3327",
        name: "S.1 Hukum Ketatanegaraan",
      },
      {
        jurusan_id: "3328",
        name: "S.1 Hukum International",
      },
      {
        jurusan_id: "3329",
        name: "S.1 Hukum International",
      },
      {
        jurusan_id: "3330",
        name: "S.1 Hukum Laut International",
      },
      {
        jurusan_id: "3331",
        name: "S.1 Hukum Perjanjian Internasional",
      },
      {
        jurusan_id: "3332",
        name: "S.1 Hukum Kemasyarakatan dan Pembangunan",
      },
      {
        jurusan_id: "3333",
        name: "S.1 Hukum Ekonomi",
      },
      {
        jurusan_id: "3334",
        name: "S.1 Hukum Ilmu Kemasyarakatan",
      },
      {
        jurusan_id: "3335",
        name: "S.1 Hukum Kemasyarakatan dan Pembangunan",
      },
      {
        jurusan_id: "3336",
        name: "S.1 Hukum Puspenmas",
      },
      {
        jurusan_id: "3337",
        name: "S.1 Hukum Acara",
      },
      {
        jurusan_id: "3338",
        name: "S.1 Hukum Acara Pidana",
      },
      {
        jurusan_id: "3339",
        name: "S.1 Hukum Peradilan Perdata",
      },
      {
        jurusan_id: "3340",
        name: "S.1 Hukum Praktisi Hukum",
      },
      {
        jurusan_id: "3341",
        name: "S.1 HUKUM PIDANA",
      },
      {
        jurusan_id: "3342",
        name: "S.1 Hukum Kepidanaan",
      },
      {
        jurusan_id: "3343",
        name: "S.1 Hukum Kriminologi",
      },
      {
        jurusan_id: "3344",
        name: "S.1 Administrasi",
      },
      {
        jurusan_id: "3346",
        name: "S.1 Administrasi Negara",
      },
      {
        jurusan_id: "3347",
        name: "S.1 Administrasi Niaga",
      },
      {
        jurusan_id: "3348",
        name: "S.1 Administrasi Pendidikan",
      },
      {
        jurusan_id: "3349",
        name: "S.1 Administrasi Ketatanegaraan",
      },
      {
        jurusan_id: "3350",
        name: "S.1 Administrasi Keuangan",
      },
      {
        jurusan_id: "3351",
        name: "S.1 Administrasi Komunikasi",
      },
      {
        jurusan_id: "3352",
        name: "S.1 Administrasi Public/Jurnalistik",
      },
      {
        jurusan_id: "3353",
        name: "S.1 Administrasi Manajemen",
      },
      {
        jurusan_id: "3354",
        name: "S.1 Administrasi Manajemen Keuangan",
      },
      {
        jurusan_id: "3355",
        name: "S.1 Administrasi Manajemen Produksi",
      },
      {
        jurusan_id: "3356",
        name: "S.1 Administrasi Pemerintahan Umum",
      },
      {
        jurusan_id: "3357",
        name: "S.1 Administrasi Sosiologi",
      },
      {
        jurusan_id: "3358",
        name: "S.1 Psikologi",
      },
      {
        jurusan_id: "3359",
        name: "S.1 Psikologi Anak dan Perkembangan",
      },
      {
        jurusan_id: "3360",
        name: "S.1 Psikologi Pendidikan",
      },
      {
        jurusan_id: "3361",
        name: "S.1 Psikologi Klinis",
      },
      {
        jurusan_id: "3362",
        name: "S.1 Psikologi Botani",
      },
      {
        jurusan_id: "3363",
        name: "S.1 Psikologi Zoologi",
      },
      {
        jurusan_id: "3364",
        name: "S.1 Psikologi Sosial",
      },
      {
        jurusan_id: "3365",
        name: "S.1 Psikologi Sosial",
      },
      {
        jurusan_id: "3366",
        name: "S.1 Psikologi Eksperimen",
      },
      {
        jurusan_id: "3367",
        name: "S.1Teknik Industri",
      },
      {
        jurusan_id: "3368",
        name: "S.1 Psikologi Perusahaan",
      },
      {
        jurusan_id: "3369",
        name: "S.1 Kemasyarakatan",
      },
      {
        jurusan_id: "3370",
        name: "S.1 Administrasi Kesehatan Masyarakat",
      },
      {
        jurusan_id: "3371",
        name: "S.1 Kemasyarakatan Epidemikologi",
      },
      {
        jurusan_id: "3372",
        name: "S.1 Kependudukan dan Statistik",
      },
      {
        jurusan_id: "3373",
        name: "S.1 Kesehatan dan Lingkungan Kerja",
      },
      {
        jurusan_id: "3374",
        name: "S.1 Pendidikan Kesehatan Masyarakat",
      },
      {
        jurusan_id: "3375",
        name: "S.1 Agama",
      },
      {
        jurusan_id: "3376",
        name: "S.1 Agama Islam",
      },
      {
        jurusan_id: "3377",
        name: "S.1 Agama Protestan",
      },
      {
        jurusan_id: "3378",
        name: "S.1 Agama Katholik",
      },
      {
        jurusan_id: "3379",
        name: "S.1 Agama Hindu",
      },
      {
        jurusan_id: "3380",
        name: "S.1 Agama Budha",
      },
      {
        jurusan_id: "3381",
        name: "S.1 Filsafat Agama",
      },
      {
        jurusan_id: "3382",
        name: "S.1 Theologi",
      },
      {
        jurusan_id: "3383",
        name: "S.1 Aqidah dan Filsafat",
      },
      {
        jurusan_id: "3384",
        name: "S.1 Agama Bahasa Arab",
      },
      {
        jurusan_id: "3385",
        name: "S.1 Agama Bahasa dan Sastra Arab",
      },
      {
        jurusan_id: "3386",
        name: "S.1 Agama Bahasa Inggris",
      },
      {
        jurusan_id: "3387",
        name: "S.1 Agama Dakwah",
      },
      {
        jurusan_id: "3388",
        name: "S.1 Agama Filsafat Islam",
      },
      {
        jurusan_id: "3389",
        name: "S.1 Agama Methodologi Pendidikan",
      },
      {
        jurusan_id: "3390",
        name: "S.1 Pendidikan Agama Islam",
      },
      {
        jurusan_id: "3391",
        name: "S.1 Agama Perbandingan Agama",
      },
      {
        jurusan_id: "3392",
        name: "S.1 Agama Qodhlo",
      },
      {
        jurusan_id: "3393",
        name: "S.1 Agama Retorika",
      },
      {
        jurusan_id: "3394",
        name: "S.1 Agama Tadris",
      },
      {
        jurusan_id: "3395",
        name: "S.1 Agama Sejarah dan Budaya Islam",
      },
      {
        jurusan_id: "3396",
        name: "S.1 Agama Sosiologi",
      },
      {
        jurusan_id: "3397",
        name: "S.1 Agama Tablig dan Nasy'ku",
      },
      {
        jurusan_id: "3398",
        name: "S.1 Agama Ushuludin",
      },
      {
        jurusan_id: "3399",
        name: "S.1 Agama Pidana (Jinayat)",
      },
      {
        jurusan_id: "3400",
        name: "S.1 Agama Syariah",
      },
      {
        jurusan_id: "3401",
        name: "S.1 Agama Fiqih",
      },
      {
        jurusan_id: "3402",
        name: "S.1 Penerangan Syariat Islam",
      },
      {
        jurusan_id: "3403",
        name: "S.1 Agama Peradilan Islam",
      },
      {
        jurusan_id: "3404",
        name: "S.1 Agama Islamologi",
      },
      {
        jurusan_id: "3405",
        name: "S.1 Perb. Mashab dan Hukum Syariah",
      },
      {
        jurusan_id: "3406",
        name: "S.1 Agama Perdata Islam",
      },
      {
        jurusan_id: "3407",
        name: "S.1 Agama Peradilan dan Perdata",
      },
      {
        jurusan_id: "3408",
        name: "S.1 Agama Ekonomi Muamalat",
      },
      {
        jurusan_id: "3409",
        name: "S.1 Agama Tafsir dan Hadits",
      },
      {
        jurusan_id: "3410",
        name: "S.1 Agama Adab",
      },
      {
        jurusan_id: "3411",
        name: "S.1 Agama Psikologi",
      },
      {
        jurusan_id: "3412",
        name: "S.1 Agama Pendidikan",
      },
      {
        jurusan_id: "3413",
        name: "S.1 Agama Pendidikan Kemasyarakatan",
      },
      {
        jurusan_id: "3414",
        name: "S.1 Agama Sastra Arab",
      },
      {
        jurusan_id: "3415",
        name: "S.1 Agama Tarbiyah",
      },
      {
        jurusan_id: "3416",
        name: "S.1 Ilmu Pemerintahan",
      },
      {
        jurusan_id: "3417",
        name: "S.1 Sosial Politik",
      },
      {
        jurusan_id: "3418",
        name: "S.1 Sosial Politik Umum",
      },
      {
        jurusan_id: "3419",
        name: "S.1 Sosial Politik Ilmu Politik",
      },
      {
        jurusan_id: "3420",
        name: "S.1 Ilmu Sosial Politik",
      },
      {
        jurusan_id: "3421",
        name: "S.1 Sosial Politik Pemerintahan",
      },
      {
        jurusan_id: "3422",
        name: "S.1 Sosial Politik Ketatanegaraan",
      },
      {
        jurusan_id: "3423",
        name: "S.1 Sosial Politik Tata Negara",
      },
      {
        jurusan_id: "3424",
        name: "S.1 Sosial Politik Administrasi Pemerintahan",
      },
      {
        jurusan_id: "3425",
        name: "S.1 Sosial Politik Sosial Ekonomi",
      },
      {
        jurusan_id: "3426",
        name: "S.1 Sosial Politik Ilmu Pemerintahan",
      },
      {
        jurusan_id: "3427",
        name: "S.1 Sosial Politik Hubungan Internasional",
      },
      {
        jurusan_id: "3428",
        name: "S.1 Sosial Politik Sosiatri",
      },
      {
        jurusan_id: "3429",
        name: "S.1 Sosial Politik Psikologi",
      },
      {
        jurusan_id: "3430",
        name: "S.1 Sosial Politik Sosiologi",
      },
      {
        jurusan_id: "3431",
        name: "S.1 Sosial Politik Filsafat",
      },
      {
        jurusan_id: "3432",
        name: "S.1 Sosial Politik Pengetahuan Sosial",
      },
      {
        jurusan_id: "3433",
        name: "S.1 Sosial Politik Psikologi Sosial",
      },
      {
        jurusan_id: "3434",
        name: "S.1 Sosial Politik Studi Sosial",
      },
      {
        jurusan_id: "3435",
        name: "S.1 Sosial Politik Antropologi Budaya",
      },
      {
        jurusan_id: "3436",
        name: "S.1 Sekolah Pendidikan Kesejahteraan Sosial",
      },
      {
        jurusan_id: "3437",
        name: "S.1 Sosial Politik Kriminologi",
      },
      {
        jurusan_id: "3438",
        name: "S.1 Sosial Politik Antropologi",
      },
      {
        jurusan_id: "3439",
        name: "S.1 Sosial Politik Sejarah Archeologi",
      },
      {
        jurusan_id: "3440",
        name: "S.1 Sosial Politik Administrasi Negara",
      },
      {
        jurusan_id: "3441",
        name: "S.1 Sosial Politik Administrasi Fiskal",
      },
      {
        jurusan_id: "3442",
        name: "S.1 Sosial Politik Administrasi",
      },
      {
        jurusan_id: "3443",
        name: "S.1 Sosial Politik Administrasi Niaga",
      },
      {
        jurusan_id: "3444",
        name: "S.1 Sosial Politik Ketataniagaan",
      },
      {
        jurusan_id: "3445",
        name: "S.1 Sekolah Pendidikan Manajemen Personalia",
      },
      {
        jurusan_id: "3446",
        name: "S.1 Sosial Politik Administrasi Publik",
      },
      {
        jurusan_id: "3447",
        name: "S.1 Sosial Politik Administrasi Pembangunan",
      },
      {
        jurusan_id: "3448",
        name: "S.1 Sosial Politik Administrasi Kepegawaian",
      },
      {
        jurusan_id: "3449",
        name: "S.1 Sosial Politik Hubungan Masyarakat",
      },
      {
        jurusan_id: "3450",
        name: "S.1 Sosial Politik Komunikasi",
      },
      {
        jurusan_id: "3451",
        name: "S.1 Sosial Politik Publistik",
      },
      {
        jurusan_id: "3452",
        name: "S.1 Sosial Politik Komunikasi Massa",
      },
      {
        jurusan_id: "3453",
        name: "S.1 Sosial Politik Jurnalistik",
      },
      {
        jurusan_id: "3454",
        name: "S.1 Sekolah Pendidikan Penerangan/Propaganda",
      },
      {
        jurusan_id: "3455",
        name: "S.1 Sosial Politik Komunikasi Sosial",
      },
      {
        jurusan_id: "3456",
        name: "S.1 Sosial Politik Penerangan",
      },
      {
        jurusan_id: "3457",
        name: "S.1 Sosial Politik Perpustakaan",
      },
      {
        jurusan_id: "3458",
        name: "SJN Kesejahteraan Sosial",
      },
      {
        jurusan_id: "3459",
        name: "S.1 Kesejahteraan Sosial Umum",
      },
      {
        jurusan_id: "3460",
        name: "S.1 Kesejahteraan Sosial Pekerja Sosial",
      },
      {
        jurusan_id: "3461",
        name: "S.1 Komputer",
      },
      {
        jurusan_id: "3462",
        name: "S.1 Komputer Aplikasi",
      },
      {
        jurusan_id: "3463",
        name: "S.1 Komputer Informatika",
      },
      {
        jurusan_id: "3464",
        name: "S.1 Komputer Programmer",
      },
      {
        jurusan_id: "3465",
        name: "S.1 Komputer Teknik",
      },
      {
        jurusan_id: "3466",
        name: "S.1 Komputer Teknik Elektro",
      },
      {
        jurusan_id: "3467",
        name: "S.1 Statistik",
      },
      {
        jurusan_id: "3468",
        name: "S.1 Statistik Matematika",
      },
      {
        jurusan_id: "3469",
        name: "S.1 Komunikasi",
      },
      {
        jurusan_id: "3470",
        name: "S.1 Komunikasi Jurnalistik",
      },
      {
        jurusan_id: "3471",
        name: "S.1 Komunikasi Hubungan Intenasional",
      },
      {
        jurusan_id: "3472",
        name: "S.1 Komunikasi Humas",
      },
      {
        jurusan_id: "3473",
        name: "S.1 Komunikasi Publistik",
      },
      {
        jurusan_id: "3474",
        name: "S.1 Komunikasi",
      },
      {
        jurusan_id: "3475",
        name: "S.1 Komunikasi Massa",
      },
      {
        jurusan_id: "3476",
        name: "S.1 Komunikasi Kesejahteraan Masyarakat",
      },
      {
        jurusan_id: "3477",
        name: "S.1 Komunikasi Ilmu Perpustakaan",
      },
      {
        jurusan_id: "3478",
        name: "S.1 Komunikasi Ilmu Penerngan",
      },
      {
        jurusan_id: "3479",
        name: "S.1 Publisistik",
      },
      {
        jurusan_id: "3480",
        name: "S.1 Publlistik Public Relation",
      },
      {
        jurusan_id: "3481",
        name: "S.1 Publlistik Jurnalistik",
      },
      {
        jurusan_id: "3482",
        name: "S.1 Publlistik Komunikasi Massa",
      },
      {
        jurusan_id: "3483",
        name: "S.1 Publlistik",
      },
      {
        jurusan_id: "3484",
        name: "S.1 Publlistik Sosiologi",
      },
      {
        jurusan_id: "3485",
        name: "S.1 Publlistik Penerangan",
      },
      {
        jurusan_id: "3486",
        name: "S.1 Publlistik Kemasyarakatan",
      },
      {
        jurusan_id: "3487",
        name: "S.1 Publlistik Kehumasan",
      },
      {
        jurusan_id: "3488",
        name: "S.1 Publlistik Komunikasi",
      },
      {
        jurusan_id: "3489",
        name: "S.1 Filsafat",
      },
      {
        jurusan_id: "3490",
        name: "S.1 Filsafat Timur",
      },
      {
        jurusan_id: "3491",
        name: "S.1 Filsafat Barat",
      },
      {
        jurusan_id: "3492",
        name: "S.1 Filsafat Indonesia",
      },
      {
        jurusan_id: "3493",
        name: "S.1 Filsafat Pancasila",
      },
      {
        jurusan_id: "3494",
        name: "S.1 Sejarah Filsafat",
      },
      {
        jurusan_id: "3495",
        name: "S.1 Filsafat Sosiologi",
      },
      {
        jurusan_id: "3496",
        name: "S.1 Filsafat Theologi",
      },
      {
        jurusan_id: "3497",
        name: "S.1 Keuangan",
      },
      {
        jurusan_id: "3498",
        name: "S.1 Administrasi Keuangan",
      },
      {
        jurusan_id: "3499",
        name: "S.1 Keuangan Akutansi",
      },
      {
        jurusan_id: "3500",
        name: "S.1 Keuangan Bea dan Cukai",
      },
      {
        jurusan_id: "3501",
        name: "S.1 Keuangan Kebendaharaan",
      },
      {
        jurusan_id: "3502",
        name: "S.1 Keuangan Kesekretariatan",
      },
      {
        jurusan_id: "3503",
        name: "S.1 Keuangan Negara",
      },
      {
        jurusan_id: "3504",
        name: "S.1 Keuangan Pajak Umum",
      },
      {
        jurusan_id: "3505",
        name: "S.1 Keuangan Theasuri Negara",
      },
      {
        jurusan_id: "3506",
        name: "S.1 Koperasi",
      },
      {
        jurusan_id: "3507",
        name: "S.1 Koperasi Manajemen Pemasaran",
      },
      {
        jurusan_id: "3508",
        name: "S.1 Koperasi Manajemen Pembelanjaan",
      },
      {
        jurusan_id: "3509",
        name: "S.1 Koperasi Manajemen Perbankan",
      },
      {
        jurusan_id: "3510",
        name: "S.1 Biologi",
      },
      {
        jurusan_id: "3511",
        name: "S.1 Biologi Botani",
      },
      {
        jurusan_id: "3512",
        name: "S.1 Biologi Psikologi Tumbuhan",
      },
      {
        jurusan_id: "3513",
        name: "S.1 Biologi Ekologi",
      },
      {
        jurusan_id: "3514",
        name: "S.1 Biologi Genetika",
      },
      {
        jurusan_id: "3515",
        name: "S.1 Biologi Hidro Biologi",
      },
      {
        jurusan_id: "3516",
        name: "S.1 Biologi Mikrobiologi",
      },
      {
        jurusan_id: "3517",
        name: "S.1 Biologi Radiobiologi",
      },
      {
        jurusan_id: "3518",
        name: "S.1 Biologi Toxycologi",
      },
      {
        jurusan_id: "3519",
        name: "S.1 Zoologi",
      },
      {
        jurusan_id: "3520",
        name: "S.1 Geografi",
      },
      {
        jurusan_id: "3521",
        name: "S.1 Geofrafi Alam",
      },
      {
        jurusan_id: "3522",
        name: "S.1 Geofrafi Fisik",
      },
      {
        jurusan_id: "3523",
        name: "S.1 Geofrafi Geomorfologi",
      },
      {
        jurusan_id: "3524",
        name: "S.1 Geofrafi Hidrologi",
      },
      {
        jurusan_id: "3525",
        name: "S.1 Geofrafi Kartografi",
      },
      {
        jurusan_id: "3526",
        name: "S.1 Geofrafi Morfologi",
      },
      {
        jurusan_id: "3527",
        name: "S.1 Geofrafi Sumber Daya",
      },
      {
        jurusan_id: "3528",
        name: "S.1 Geofrafi Tambang/Metalurgi",
      },
      {
        jurusan_id: "3529",
        name: "S.1 Geofrafi Demografi",
      },
      {
        jurusan_id: "3530",
        name: "S.1 Geofrafi Ekonomi",
      },
      {
        jurusan_id: "3531",
        name: "S.1 Geofrafi Manusia",
      },
      {
        jurusan_id: "3532",
        name: "S.1 Geofrafi Kependudukan dan Demografi",
      },
      {
        jurusan_id: "3533",
        name: "S.1 Geofrafi Penginderaan Jauh",
      },
      {
        jurusan_id: "3534",
        name: "S.1 Geofrafi Regional dan Politik",
      },
      {
        jurusan_id: "3535",
        name: "S.1 Geofrafi Sosial",
      },
      {
        jurusan_id: "3536",
        name: "S.1 Kedokteran",
      },
      {
        jurusan_id: "3537",
        name: "S.1 Kedokteran Umum",
      },
      {
        jurusan_id: "3538",
        name: "S.1 Kedokteran Arthodontic",
      },
      {
        jurusan_id: "3539",
        name: "S.1 Kedokteran Bakteriologi/Virolog",
      },
      {
        jurusan_id: "3540",
        name: "S.1 Kedokteranan Diagn/Extroctie",
      },
      {
        jurusan_id: "3541",
        name: "S.1 Kedokteranan Donsevasi",
      },
      {
        jurusan_id: "3542",
        name: "S.1 Kedokteranan Eseodonsi",
      },
      {
        jurusan_id: "3543",
        name: "S.1 Kedokteranan Fadodontie",
      },
      {
        jurusan_id: "3544",
        name: "S.1 Kedokteran Parasitologi",
      },
      {
        jurusan_id: "3545",
        name: "S.1 Kedokteran I AL Dasar Kedokteran",
      },
      {
        jurusan_id: "3546",
        name: "S.1 Kedokteran Dasar",
      },
      {
        jurusan_id: "3547",
        name: "S.1 Kedokteran Dasar Umum",
      },
      {
        jurusan_id: "3548",
        name: "S.1 Kedokteran Kesehatan Masyarakat",
      },
      {
        jurusan_id: "3549",
        name: "S.1 Kedokteran Parmatokanologi",
      },
      {
        jurusan_id: "3550",
        name: "S.1 Kedokteran Farmakogmasi",
      },
      {
        jurusan_id: "3551",
        name: "S.1 Kedokteran Medis",
      },
      {
        jurusan_id: "3552",
        name: "S.1 Kedokteran Klinik",
      },
      {
        jurusan_id: "3553",
        name: "S.1 Kedokteran Prothetik",
      },
      {
        jurusan_id: "3554",
        name: "S.1 Kedokteran Gigi",
      },
      {
        jurusan_id: "3555",
        name: "S.1 Kedokteran Gigi Dasar",
      },
      {
        jurusan_id: "3556",
        name: "S.1 Kedokteran Gigi Kuratif",
      },
      {
        jurusan_id: "3557",
        name: "S.1 Kedokteran Gigi Masyarakat",
      },
      {
        jurusan_id: "3558",
        name: "S.1 Kedokteran Gigi Rehabilitasi",
      },
      {
        jurusan_id: "3559",
        name: "S.1 Kedokteran Hewan",
      },
      {
        jurusan_id: "3560",
        name: "S.1 Kedokteran Hewan Anatomi",
      },
      {
        jurusan_id: "3561",
        name: "S.1 Kedokteran Hewan Biokimia",
      },
      {
        jurusan_id: "3562",
        name: "S.1 Kedokteran Hewan Farmakilogi",
      },
      {
        jurusan_id: "3563",
        name: "S.1 Kedokteran Hewan Fisiologi",
      },
      {
        jurusan_id: "3564",
        name: "S.1 Kedokteranr Hewan Fis Repro dan Keb",
      },
      {
        jurusan_id: "3565",
        name: "S.1 Kedokteranr Hewan Kesmas Bid Vet",
      },
      {
        jurusan_id: "3566",
        name: "S.1 Kedokteran Hewan Parasitologi",
      },
      {
        jurusan_id: "3567",
        name: "S.1 Kedokteran Hewan Mikrobiologi",
      },
      {
        jurusan_id: "3568",
        name: "S.1 Kedokteran Hewan Pathologi",
      },
      {
        jurusan_id: "3569",
        name: "S.1 Kedokteran Hewan Peternakan",
      },
      {
        jurusan_id: "3570",
        name: "S.1 Kedokteran Hewan Veteriner/Klin",
      },
      {
        jurusan_id: "3571",
        name: "S.1 Farmasi",
      },
      {
        jurusan_id: "3572",
        name: "S.1 Farmasi Apoteker",
      },
      {
        jurusan_id: "3573",
        name: "S.1 Farmasi Biologi",
      },
      {
        jurusan_id: "3574",
        name: "S.1 Farmasi Farma Setika",
      },
      {
        jurusan_id: "3575",
        name: "S.1 Farmasi Mikrobiologi",
      },
      {
        jurusan_id: "3576",
        name: "S.1 Farmasi Teknologi Farmasi",
      },
      {
        jurusan_id: "3577",
        name: "S.1 Farmasi Biokimia",
      },
      {
        jurusan_id: "3578",
        name: "S.1 Farmasi Anorganik",
      },
      {
        jurusan_id: "3579",
        name: "S.1 Farmasi Laboratorium",
      },
      {
        jurusan_id: "3580",
        name: "S.1 / A-IV",
      },
      {
        jurusan_id: "3581",
        name: "A-IV Kependidikan",
      },
      {
        jurusan_id: "3582",
        name: "S 1 MATEMATIKA",
      },
      {
        jurusan_id: "3583",
        name: "A-IV Ilmu Pasti dan Alam",
      },
      {
        jurusan_id: "3584",
        name: "A-IV Ilmu Pasti",
      },
      {
        jurusan_id: "3585",
        name: "A-IV Matematika",
      },
      {
        jurusan_id: "3586",
        name: "S 1 Matematika dan IPA",
      },
      {
        jurusan_id: "3587",
        name: "A-IV Ilmu Pengetahuan Alam",
      },
      {
        jurusan_id: "3588",
        name: "A-IV Fisika",
      },
      {
        jurusan_id: "3589",
        name: "A-IV Kimia",
      },
      {
        jurusan_id: "3590",
        name: "A-IV Ilmu Bumi",
      },
      {
        jurusan_id: "3591",
        name: "S- I PLS",
      },
      {
        jurusan_id: "3592",
        name: "A-IV Ilmu Hayat/Biologi",
      },
      {
        jurusan_id: "3593",
        name: "A-IV Statistik",
      },
      {
        jurusan_id: "3594",
        name: "A-IV Teknik",
      },
      {
        jurusan_id: "3595",
        name: "A-IV Teknik",
      },
      {
        jurusan_id: "3596",
        name: "A-IV Teknik Sipil",
      },
      {
        jurusan_id: "3597",
        name: "A-IV Tekni Bangunan",
      },
      {
        jurusan_id: "3598",
        name: "A-IV Teknik Sipil Bangunan Air",
      },
      {
        jurusan_id: "3599",
        name: "A-IV Arsitektur",
      },
      {
        jurusan_id: "3600",
        name: "A-IV Teknik Mesin",
      },
      {
        jurusan_id: "3601",
        name: "A-IV Teknik Mesin Induksi",
      },
      {
        jurusan_id: "3602",
        name: "A-IV Teknik Mesin Produksi",
      },
      {
        jurusan_id: "3603",
        name: "S- PENDOR",
      },
      {
        jurusan_id: "3604",
        name: "A-IV Teknik Mekanik",
      },
      {
        jurusan_id: "3605",
        name: "A-IV Elektro",
      },
      {
        jurusan_id: "3606",
        name: "A-IV Teknik Elektro",
      },
      {
        jurusan_id: "3607",
        name: "A-IV Teknik Elektronika",
      },
      {
        jurusan_id: "3608",
        name: "A-IV Elektro Arus Lemah",
      },
      {
        jurusan_id: "3609",
        name: "A-IV Listrik",
      },
      {
        jurusan_id: "3610",
        name: "A-IV Listrik Arus Kuat",
      },
      {
        jurusan_id: "3611",
        name: "A-IV Listrik Arus Lemah",
      },
      {
        jurusan_id: "3612",
        name: "S-1 ANTROPOLOGI",
      },
      {
        jurusan_id: "3613",
        name: "S-1 MEKANIS",
      },
      {
        jurusan_id: "3614",
        name: "A-IV Administrasi Supervisi Pendidikan",
      },
      {
        jurusan_id: "3615",
        name: "A-IV Administrasi Sekolah",
      },
      {
        jurusan_id: "3616",
        name: "SERJANA PENDIDIKAN",
      },
      {
        jurusan_id: "3617",
        name: "A-IV PBB",
      },
      {
        jurusan_id: "3618",
        name: "ADPEN",
      },
      {
        jurusan_id: "3619",
        name: "S-1 BAHASA INGGRIS",
      },
      {
        jurusan_id: "3620",
        name: "A-IV Civics Hukum",
      },
      {
        jurusan_id: "3621",
        name: "A-IV Hukum PMP",
      },
      {
        jurusan_id: "3622",
        name: "A-IV PKN dan Hukum",
      },
      {
        jurusan_id: "3623",
        name: "A-IV PMP dan Kewarganegaraan",
      },
      {
        jurusan_id: "3624",
        name: "A-IV Tata Negara",
      },
      {
        jurusan_id: "3625",
        name: "A-IV Pendidikan Moral Pancasila",
      },
      {
        jurusan_id: "3626",
        name: "A-IV PSPB",
      },
      {
        jurusan_id: "3627",
        name: "A-IV Sejarah",
      },
      {
        jurusan_id: "3628",
        name: "A-IV Sejarah dan Antropologi",
      },
      {
        jurusan_id: "3629",
        name: "A-IV PKK",
      },
      {
        jurusan_id: "3630",
        name: "A-IV Ketrampilan",
      },
      {
        jurusan_id: "3631",
        name: "A-IV Ketrampilan Jasa",
      },
      {
        jurusan_id: "3632",
        name: "A-IV Ketrampilan Teknik",
      },
      {
        jurusan_id: "3633",
        name: "A-IV Sandratari dan Musik",
      },
      {
        jurusan_id: "3634",
        name: "A-IV Seni Musik",
      },
      {
        jurusan_id: "3635",
        name: "A-IV SENI RUPA",
      },
      {
        jurusan_id: "3636",
        name: "A-IV Seni Tari",
      },
      {
        jurusan_id: "3637",
        name: "A-IV Tata Boga",
      },
      {
        jurusan_id: "3638",
        name: "A-IV Tata Busana",
      },
      {
        jurusan_id: "3639",
        name: "A-IV Tata Graha",
      },
      {
        jurusan_id: "3640",
        name: "A-IV IPS",
      },
      {
        jurusan_id: "3641",
        name: "A-IV Tata Niaga",
      },
      {
        jurusan_id: "3642",
        name: "A-IV Tata Perkantoran",
      },
      {
        jurusan_id: "3643",
        name: "A-IV Tata Perusahaan",
      },
      {
        jurusan_id: "3644",
        name: "A-IV Tata Buku",
      },
      {
        jurusan_id: "3645",
        name: "A-IV Akutansi",
      },
      {
        jurusan_id: "3646",
        name: "A-IV Hitung Dagang",
      },
      {
        jurusan_id: "3647",
        name: "A-IV Ilmu Ekonomi",
      },
      {
        jurusan_id: "3648",
        name: "A-IV Ekonomi Perusahaan",
      },
      {
        jurusan_id: "3649",
        name: "A-IV Ekonomi Koperasi",
      },
      {
        jurusan_id: "3650",
        name: "A-IV Koperasi",
      },
      {
        jurusan_id: "3651",
        name: "A-IV Bisnis Tata Buku",
      },
      {
        jurusan_id: "3652",
        name: "A-IV Bisnis Vokasional",
      },
      {
        jurusan_id: "3653",
        name: "A-IV KESEHATAN DAN REKREASI",
      },
      {
        jurusan_id: "3654",
        name: "A-IV Kesejahteraan Keluarga",
      },
      {
        jurusan_id: "3655",
        name: "A-IV Kesejahteraan Sosial",
      },
      {
        jurusan_id: "3656",
        name: "A-IV Manajemen",
      },
      {
        jurusan_id: "3657",
        name: "A-IV Filsafat",
      },
      {
        jurusan_id: "3658",
        name: "A-IV Filsafat Kebudayaan",
      },
      {
        jurusan_id: "3659",
        name: "A-IV Filsafat Pendidikan",
      },
      {
        jurusan_id: "3660",
        name: "A-IV Filsafat Sosiologi Pend.",
      },
      {
        jurusan_id: "3661",
        name: "S-1 KEDOTERAN",
      },
      {
        jurusan_id: "3662",
        name: "A-IV Sastra Indonesia",
      },
      {
        jurusan_id: "3663",
        name: "A-IV Bahasa Indonesia",
      },
      {
        jurusan_id: "3664",
        name: "A-IV Bahasa dan Sastra",
      },
      {
        jurusan_id: "3665",
        name: "A-IV Bahasa dan Sastra Indonesia",
      },
      {
        jurusan_id: "3666",
        name: "A-IV Bahasa dan Sastra Daerah",
      },
      {
        jurusan_id: "3667",
        name: "A-IV Bahasa dan Sastra Jawa",
      },
      {
        jurusan_id: "3668",
        name: "S I KURTEK",
      },
      {
        jurusan_id: "3669",
        name: "A-IV Bahasa dan Sastra Sunda",
      },
      {
        jurusan_id: "3670",
        name: "A-IV Sastra Arab",
      },
      {
        jurusan_id: "3671",
        name: "BAHASA & SENI",
      },
      {
        jurusan_id: "3672",
        name: "A-IV Bahasa dan Sastra Arab",
      },
      {
        jurusan_id: "3673",
        name: "A-IV Sastra Rusia",
      },
      {
        jurusan_id: "3674",
        name: "A-IV Bahasa Rusia",
      },
      {
        jurusan_id: "3675",
        name: "S-1 PEMASARAN",
      },
      {
        jurusan_id: "3676",
        name: "A-IV Bahasa dan Sastra Inggris",
      },
      {
        jurusan_id: "3677",
        name: "A-IV Bahasa dan Sastra Jepang",
      },
      {
        jurusan_id: "3678",
        name: "S-1 TARBIYAH",
      },
      {
        jurusan_id: "3679",
        name: "S-1 BAHASA DAN SASTRA JERMAN",
      },
      {
        jurusan_id: "3680",
        name: "A-IV Bahasa Jerman",
      },
      {
        jurusan_id: "3681",
        name: "A-IV Bahasa Perancis",
      },
      {
        jurusan_id: "3682",
        name: "A-IV Bidang Kependidikan",
      },
      {
        jurusan_id: "3683",
        name: "A-IV Paedagogik",
      },
      {
        jurusan_id: "3684",
        name: "A-IV Didaktik",
      },
      {
        jurusan_id: "3685",
        name: "A-IV Sejarah Pendidikan",
      },
      {
        jurusan_id: "3686",
        name: "A-IV Bimbingan dan Penyuluhan",
      },
      {
        jurusan_id: "3687",
        name: "A-IV Bimbingan dan Konseling",
      },
      {
        jurusan_id: "3688",
        name: "A-IV Psikologi",
      },
      {
        jurusan_id: "3689",
        name: "A-IV Psikologi Pendidikan",
      },
      {
        jurusan_id: "3690",
        name: "A-IV Psikologi Pendidikan dan BI",
      },
      {
        jurusan_id: "3691",
        name: "A-IV Keguruan dan Ilmu Sosial",
      },
      {
        jurusan_id: "3692",
        name: "A-IV Kurikulum dan Persek.an/Pengaj",
      },
      {
        jurusan_id: "3693",
        name: "A-IV Kurikulum dan Teknik./Pendidikan",
      },
      {
        jurusan_id: "3694",
        name: "A-IV Kurikulum Pendidikan",
      },
      {
        jurusan_id: "3695",
        name: "A-IV Kurikulum Penyuluhan",
      },
      {
        jurusan_id: "3696",
        name: "A-IV Kurikulum Teknik Pendidikan",
      },
      {
        jurusan_id: "3697",
        name: "A-IV Metodologi dan Kurikulum",
      },
      {
        jurusan_id: "3698",
        name: "A-IV Metodologi Pendidikan",
      },
      {
        jurusan_id: "3699",
        name: "A-IV Perencanaan Pendidikan",
      },
      {
        jurusan_id: "3700",
        name: "A-IV Pendidikan Agama Kristen",
      },
      {
        jurusan_id: "3701",
        name: "A-IV Pendidikan Anak",
      },
      {
        jurusan_id: "3702",
        name: "A-IV Pendidikan Dasar",
      },
      {
        jurusan_id: "3703",
        name: "A-IV Pendidikan Dasar Umum",
      },
      {
        jurusan_id: "3704",
        name: "A-IV Olah Raga",
      },
      {
        jurusan_id: "3705",
        name: "A-IV Olah Raga dan Kesehatan",
      },
      {
        jurusan_id: "3706",
        name: "A-IV Pendidikan Bisnis",
      },
      {
        jurusan_id: "3707",
        name: "A-IV Pendidikan Dunia Usaha",
      },
      {
        jurusan_id: "3708",
        name: "A-IV Pendidikan Guru",
      },
      {
        jurusan_id: "3709",
        name: "A-IV Program Guru SPG",
      },
      {
        jurusan_id: "3710",
        name: "A-IV Pendidikan Luar Biasa",
      },
      {
        jurusan_id: "3711",
        name: "A-IV Pendidikan Luar Sekolah",
      },
      {
        jurusan_id: "3712",
        name: "A-IV Pendidikan Masyarakat",
      },
      {
        jurusan_id: "3713",
        name: "A-IV Dik. Dan Pengembangan Sosial",
      },
      {
        jurusan_id: "3714",
        name: "S.1 PGSD",
      },
      {
        jurusan_id: "3761",
        name: "SI STKIP",
      },
      {
        jurusan_id: "3763",
        name: "S.1 Teknik dan Manajemen Industri",
      },
      {
        jurusan_id: "3765",
        name: "S.1 TEKNIK LINGKUNGAN",
      },
      {
        jurusan_id: "3766",
        name: "S-1 PEND. BAHASA",
      },
      {
        jurusan_id: "3771",
        name: "A-IV PLS",
      },
      {
        jurusan_id: "3773",
        name: "D I ILMU PENDIDIKAN",
      },
      {
        jurusan_id: "3776",
        name: "S- I MATEMATIKA",
      },
      {
        jurusan_id: "3777",
        name: "S-1 PAI",
      },
      {
        jurusan_id: "3788",
        name: "S.1 Ilmu Administrasi",
      },
      {
        jurusan_id: "3789",
        name: "S-1 KEPERAWATAN",
      },
      {
        jurusan_id: "3794",
        name: "S I BUDIDAYA PERIKANAN",
      },
      {
        jurusan_id: "3796",
        name: "FKM (FAKULTAS KESEHATAN MASYARAKAT)",
      },
      {
        jurusan_id: "3799",
        name: "S.1 TARBIYAH",
      },
      {
        jurusan_id: "3803",
        name: "S-1 GEOLOGI",
      },
      {
        jurusan_id: "3807",
        name: "S.1 AGRONOMI",
      },
      {
        jurusan_id: "3810",
        name: "S.1 Teknik Elektro",
      },
      {
        jurusan_id: "3826",
        name: "BIOLOGI",
      },
      {
        jurusan_id: "3837",
        name: "SARJANA PERTANIAN",
      },
      {
        jurusan_id: "3851",
        name: "S.1 BUDIDAYA PERTANIAN",
      },
      {
        jurusan_id: "3852",
        name: "S.1 TEKNIK SIPIL",
      },
      {
        jurusan_id: "3856",
        name: "S1.PERTANIAN",
      },
      {
        jurusan_id: "3858",
        name: "S-1 MATEMATIKA",
      },
      {
        jurusan_id: "3859",
        name: "S-1 PSIKOLOGI DAN BIMBINGAN",
      },
      {
        jurusan_id: "3860",
        name: "S-1 PLS",
      },
      {
        jurusan_id: "3863",
        name: "S-1 SOSIAL",
      },
      {
        jurusan_id: "3864",
        name: "Ilmu Administrasi Negara",
      },
      {
        jurusan_id: "3869",
        name: "S.1 Pend. Geografi",
      },
      {
        jurusan_id: "3876",
        name: "S.1 Administrasi perkantoran",
      },
      {
        jurusan_id: "3877",
        name: "S-1 ADMINISTRASI PENDIDIKAN",
      },
      {
        jurusan_id: "3879",
        name: "S-1 ILMU PEMERINTAHAN",
      },
      {
        jurusan_id: "3882",
        name: "S-1 PBB",
      },
      {
        jurusan_id: "3887",
        name: "S.1 Politik",
      },
      {
        jurusan_id: "3890",
        name: "S1. AGRONOMI / BUDIDAYA PERTANIAN",
      },
      {
        jurusan_id: "3893",
        name: "S.1 Perencanaan Pembangunan",
      },
      {
        jurusan_id: "3894",
        name: "S.1 FISIP-AN",
      },
      {
        jurusan_id: "3904",
        name: "S.1 Pertanian Budi Daya Tanaman Pangan",
      },
      {
        jurusan_id: "3910",
        name: "S 1 PENDIDIKAN PSIKOLOGI",
      },
      {
        jurusan_id: "3917",
        name: "S-I PGSD",
      },
      {
        jurusan_id: "3927",
        name: "S-1 PERTANIAN",
      },
      {
        jurusan_id: "3937",
        name: "S. 1 KESEJAHTRAAN SOSIAL",
      },
      {
        jurusan_id: "3941",
        name: "S1 KEGURUAN & PENDIDIKAN",
      },
      {
        jurusan_id: "3942",
        name: "ADM. NEG.",
      },
      {
        jurusan_id: "3943",
        name: "S 1 ILMU SOS DAN ILMU POL",
      },
      {
        jurusan_id: "3945",
        name: "S 1 TEHNIK SIPIL",
      },
      {
        jurusan_id: "3952",
        name: "S.1 Teknik Penyehatan",
      },
      {
        jurusan_id: "3954",
        name: "TEKNIS SIPIL",
      },
      {
        jurusan_id: "3955",
        name: "S1 PLS",
      },
      {
        jurusan_id: "3960",
        name: "S-1 ILMU EKONOMI/TATA NIAGA",
      },
      {
        jurusan_id: "3964",
        name: "S1. ARSITEKTUR",
      },
      {
        jurusan_id: "3967",
        name: "S.1 GEODESI",
      },
      {
        jurusan_id: "3977",
        name: "S-1 EPIDEMILOGI",
      },
      {
        jurusan_id: "3993",
        name: "S.1 PLANOLOGI",
      },
      {
        jurusan_id: "3997",
        name: "S-1 ILMU  PENDIDIKAN AGAMA",
      },
      {
        jurusan_id: "3998",
        name: "S-1 PENDIDIKAN OLAH RAGA",
      },
      {
        jurusan_id: "4003",
        name: "S-1 ADMINISTARSI BISNIS",
      },
      {
        jurusan_id: "4007",
        name: "SARJANA PENDIDIKAN",
      },
      {
        jurusan_id: "4009",
        name: "S-1 AKTA IV",
      },
      {
        jurusan_id: "4010",
        name: "S-1 TATA PRAJA",
      },
      {
        jurusan_id: "4020",
        name: "S- PLS",
      },
      {
        jurusan_id: "4024",
        name: "S-1 TEHNIK GEODESI",
      },
      {
        jurusan_id: "4026",
        name: "S.1 Ilmu Tanah",
      },
      {
        jurusan_id: "4033",
        name: "SERJANA",
      },
      {
        jurusan_id: "4038",
        name: "S 1. PENDIDIKAN AKUNTANSI",
      },
      {
        jurusan_id: "4039",
        name: "S-1 KEPRDATAAN",
      },
      {
        jurusan_id: "4044",
        name: "STAI",
      },
      {
        jurusan_id: "4047",
        name: "S-1 KESEJAHTERAAN SOSIAL",
      },
      {
        jurusan_id: "4058",
        name: "S.1 KEPERDATAAN",
      },
      {
        jurusan_id: "4065",
        name: "S-1 TADRIS BID. IPS",
      },
      {
        jurusan_id: "4072",
        name: "S-1 GEOGRAFI",
      },
      {
        jurusan_id: "4073",
        name: "S 1 KESEJAHTERAAN SOSIAL",
      },
      {
        jurusan_id: "4078",
        name: "S.1 PLS",
      },
      {
        jurusan_id: "4084",
        name: "S-1 PENDIDIKAN BIOLOGI",
      },
      {
        jurusan_id: "4091",
        name: "S-1 PPB",
      },
      {
        jurusan_id: "4092",
        name: "S-1 EKONOMI",
      },
      {
        jurusan_id: "4096",
        name: "S-1 MIPA",
      },
      {
        jurusan_id: "4099",
        name: "S-1 PDU",
      },
      {
        jurusan_id: "4101",
        name: "S-1 TEHNIK BANGUNAN",
      },
      {
        jurusan_id: "4103",
        name: "S-1 AKUTANSI",
      },
      {
        jurusan_id: "4104",
        name: "S-1 KEGURUAN",
      },
      {
        jurusan_id: "4105",
        name: "S1- BAHASA INDONESIA",
      },
      {
        jurusan_id: "4106",
        name: "S-1 KEPELATIHAN",
      },
      {
        jurusan_id: "4113",
        name: "S-1 BAHASA SASTRA",
      },
      {
        jurusan_id: "4116",
        name: "S-1 BAHASA SENI",
      },
      {
        jurusan_id: "4118",
        name: "S-1 ILMU PENDIDIKAN",
      },
      {
        jurusan_id: "4120",
        name: "S-1 PENDIDIKAN PPKN",
      },
      {
        jurusan_id: "4124",
        name: "S-1 KESEHATAN SOSIAL",
      },
      {
        jurusan_id: "4127",
        name: "A-IV TARBIYAH",
      },
      {
        jurusan_id: "4131",
        name: "S-1 SOSIAL DAN POLITIK",
      },
      {
        jurusan_id: "4134",
        name: "S-1 Kedokteran Umum",
      },
      {
        jurusan_id: "4138",
        name: "S 1 PENJASKES DAN OLAHRAGA",
      },
      {
        jurusan_id: "4146",
        name: "S 1 PENDIDIKAN IPS",
      },
      {
        jurusan_id: "4148",
        name: "S-1 ILMU PERTANIAN",
      },
      {
        jurusan_id: "4150",
        name: "S- I MIPA",
      },
      {
        jurusan_id: "4154",
        name: "S-1 BAHASA INDONESIA/ADM PENDIDIKAN",
      },
      {
        jurusan_id: "4159",
        name: "S.1 PPKN",
      },
      {
        jurusan_id: "4161",
        name: "S-1 IPS",
      },
      {
        jurusan_id: "4167",
        name: "S-1 BAHASA INDONESIA DAN DAERAH",
      },
      {
        jurusan_id: "4175",
        name: "D I PERHOTELAN",
      },
      {
        jurusan_id: "4183",
        name: "S-1 Kedokteran Gigi",
      },
      {
        jurusan_id: "4191",
        name: "S-1 PENDIDIKAN ILMU B INGGRIS",
      },
      {
        jurusan_id: "4198",
        name: "S-1 SASTRA INDO",
      },
      {
        jurusan_id: "4203",
        name: "S-1 ILMU PENDIDIKAN B SUNDA",
      },
      {
        jurusan_id: "4211",
        name: "S-1 TEKNIK ELEKTRO",
      },
      {
        jurusan_id: "4218",
        name: "S.1 Teknologi Bangunan",
      },
      {
        jurusan_id: "4223",
        name: "S.I",
      },
      {
        jurusan_id: "4224",
        name: "D I ILMU PENDIDIKAN MATEMATIKA",
      },
      {
        jurusan_id: "4225",
        name: "S-1 ILMU PENDIDIKAN MATEMATIKA",
      },
      {
        jurusan_id: "4230",
        name: "S-1 TEKNIK MESIN",
      },
      {
        jurusan_id: "4238",
        name: "S.1 PENDIDIKAN KIMIA",
      },
      {
        jurusan_id: "4243",
        name: "S-1 ILMU PENDIDIKAN BAHASA DAN SASTRA INDONESIA",
      },
      {
        jurusan_id: "4267",
        name: "S.1 Pendidikan Tata Niaga",
      },
      {
        jurusan_id: "4272",
        name: "S-1 BAHASA DAN SASTRA INDONESIA",
      },
      {
        jurusan_id: "4277",
        name: "S.1 PENDOR",
      },
      {
        jurusan_id: "4290",
        name: "S-1 BP/ PPB",
      },
      {
        jurusan_id: "4291",
        name: "S-1 BAHASA DAN SASTRA SUNDA",
      },
      {
        jurusan_id: "4297",
        name: "S-1  TEKNIK SIPIL PENGAIRAN",
      },
      {
        jurusan_id: "4301",
        name: "S-1 AGRONOMI",
      },
      {
        jurusan_id: "4303",
        name: "S 1 PEND BAHASA",
      },
      {
        jurusan_id: "4304",
        name: "S 1 KAUR TEK PEND",
      },
      {
        jurusan_id: "4307",
        name: "ILMU PENDIDIKAN DAN KEGURUAN",
      },
      {
        jurusan_id: "4314",
        name: "S.1 BAHASA DAN SASTRA INDONESIA.",
      },
      {
        jurusan_id: "4319",
        name: "SARJANA EKONOMI",
      },
      {
        jurusan_id: "4322",
        name: "MANAJEMEN SDM",
      },
      {
        jurusan_id: "4323",
        name: "S. I BAHASASENI`",
      },
      {
        jurusan_id: "4329",
        name: "PENDIDIKAN GEOGRAFI",
      },
      {
        jurusan_id: "4343",
        name: "PENDIDIKAN BAHASA SENI",
      },
      {
        jurusan_id: "4344",
        name: "S-1 PGSD",
      },
      {
        jurusan_id: "4367",
        name: "S-1 PEND BAHASA DAN SENI",
      },
      {
        jurusan_id: "4368",
        name: "S-1 SEKOLAH DASAR",
      },
      {
        jurusan_id: "4377",
        name: "S-1 ILMU ADMINISTRASI NEGARA",
      },
      {
        jurusan_id: "4381",
        name: "S-1 PBS BAHASA ARAB",
      },
      {
        jurusan_id: "4394",
        name: "S 1 PLS",
      },
      {
        jurusan_id: "4401",
        name: "S1- PENJASKES",
      },
      {
        jurusan_id: "4405",
        name: "S-1 PMPKN",
      },
      {
        jurusan_id: "4410",
        name: "S- PENDIKAN AGAMA ISLAM",
      },
      {
        jurusan_id: "4411",
        name: "S-1 PEND OLAH RAGA",
      },
      {
        jurusan_id: "4412",
        name: "S-1 PENDIDIKAN GEOGRAFI",
      },
      {
        jurusan_id: "4430",
        name: "S 1 B. DAERAH",
      },
      {
        jurusan_id: "4433",
        name: "S-1 KESEHATAN SOASIAL",
      },
      {
        jurusan_id: "4437",
        name: "S I BAHASA INGGRIS",
      },
      {
        jurusan_id: "4441",
        name: "S. I BAHASASENI",
      },
      {
        jurusan_id: "4442",
        name: "S I PENDIDIKAN",
      },
      {
        jurusan_id: "4444",
        name: "S I GURU SD",
      },
      {
        jurusan_id: "4445",
        name: "S I AGRONOMI",
      },
      {
        jurusan_id: "4446",
        name: "S I PAI",
      },
      {
        jurusan_id: "4447",
        name: "S I TARBIAH",
      },
      {
        jurusan_id: "4449",
        name: "S-1 ILMU BIOLOGI",
      },
      {
        jurusan_id: "4450",
        name: "S-1 PENDIDIKAN AGAMA ISLAM",
      },
      {
        jurusan_id: "4453",
        name: "S I ILMU PERPUSTAKAAN",
      },
      {
        jurusan_id: "4455",
        name: "S.1 PENDIDIKAN KOPERASI",
      },
      {
        jurusan_id: "4456",
        name: "S-1 PENDIDIKAN KOPERASI",
      },
      {
        jurusan_id: "4458",
        name: "S I PBS",
      },
      {
        jurusan_id: "4459",
        name: "S I BAHASA DAN SENI",
      },
      {
        jurusan_id: "4462",
        name: "S-1 PENDIDIKAN B ARAB",
      },
      {
        jurusan_id: "4463",
        name: "S-1 PENDIDIKAN BAHASA DAN SENI",
      },
      {
        jurusan_id: "4464",
        name: "S-1 PENDIDIKAN IPS",
      },
      {
        jurusan_id: "4467",
        name: "S I HUKUM",
      },
      {
        jurusan_id: "4468",
        name: "S I TATABOGA",
      },
      {
        jurusan_id: "4471",
        name: "S1-AKUNTANSI",
      },
      {
        jurusan_id: "4481",
        name: "S- PENDIDIKAN BAHASA DAN SENI",
      },
      {
        jurusan_id: "4483",
        name: "S 1 STAI",
      },
      {
        jurusan_id: "4484",
        name: "S1 KESENIAN DAN REKREASI",
      },
      {
        jurusan_id: "4486",
        name: "S- I PAI",
      },
      {
        jurusan_id: "4493",
        name: "S- I PENDIDIKAN SEJARAH",
      },
      {
        jurusan_id: "4494",
        name: "S- I BAHASA INGGRIS",
      },
      {
        jurusan_id: "4495",
        name: "S-1 SEJARAH",
      },
      {
        jurusan_id: "4498",
        name: "S- I ADMINISTRASI",
      },
      {
        jurusan_id: "4509",
        name: "S-1 KIMIA",
      },
      {
        jurusan_id: "4513",
        name: "DIII BHS INDONESIA",
      },
      {
        jurusan_id: "4514",
        name: "D III GOEGRAFI",
      },
      {
        jurusan_id: "4521",
        name: "S- I KEPELATIHAN",
      },
      {
        jurusan_id: "4522",
        name: "S- I PENJASKS",
      },
      {
        jurusan_id: "4525",
        name: "S-1 PEND LUAR SEKOLAH",
      },
      {
        jurusan_id: "4526",
        name: "S-1 PKK",
      },
      {
        jurusan_id: "4530",
        name: "S- 1 BAHASA & SASTRA INDONESIADONESIA",
      },
      {
        jurusan_id: "4532",
        name: "S-1 BHS DAN SASTRA INDONESIA",
      },
      {
        jurusan_id: "4533",
        name: "S1 PEND.SENI RUPA DAN KERAJINAN",
      },
      {
        jurusan_id: "4534",
        name: "S-1 SD",
      },
      {
        jurusan_id: "4540",
        name: "S -1 PENDIDIKAN",
      },
      {
        jurusan_id: "4541",
        name: "S -1 TARBIYAH",
      },
      {
        jurusan_id: "4543",
        name: "S-1 ILMU SOSIAL",
      },
      {
        jurusan_id: "4544",
        name: "S1 ILMU SOSIAL",
      },
      {
        jurusan_id: "4552",
        name: "S.1 Teknik Kimia",
      },
      {
        jurusan_id: "4555",
        name: "S-1 TRANSPORTASI DARAT",
      },
      {
        jurusan_id: "4562",
        name: "S-1 TEKNIK BANGUNAN",
      },
      {
        jurusan_id: "4564",
        name: "PENDIDIKAN MANAGEMEN",
      },
      {
        jurusan_id: "4565",
        name: "HAMA DAN PENYAKIT TUMBUHAN",
      },
      {
        jurusan_id: "4568",
        name: "S1 PERDATAAN",
      },
      {
        jurusan_id: "4569",
        name: "S1 FISIP",
      },
      {
        jurusan_id: "4570",
        name: "S1 PAI",
      },
      {
        jurusan_id: "4571",
        name: "S-1 TEKNIK PERTAMBANGAN",
      },
      {
        jurusan_id: "4586",
        name: "S-1 HTN",
      },
      {
        jurusan_id: "4590",
        name: "S-1 B.INDONESIA",
      },
      {
        jurusan_id: "4591",
        name: "S-1 B.INGGRIS",
      },
      {
        jurusan_id: "4594",
        name: "S-1 MIPA KIMIA",
      },
      {
        jurusan_id: "4597",
        name: "S-1 TEKNIK INFORMATIKA",
      },
      {
        jurusan_id: "4599",
        name: "S-1 TEKNIK PLANOLOGI",
      },
      {
        jurusan_id: "4600",
        name: "S.1 Kesehatan Masyarakat",
      },
      {
        jurusan_id: "4601",
        name: "S1 PERIKANAN",
      },
      {
        jurusan_id: "4613",
        name: "SARJANA HUKUM",
      },
      {
        jurusan_id: "4620",
        name: "SARJANA TEKNIK INFORMATIKA",
      },
      {
        jurusan_id: "4621",
        name: "SARJANA SOSIAL",
      },
      {
        jurusan_id: "4626",
        name: "ADMINISTRASI BISNIS",
      },
      {
        jurusan_id: "4632",
        name: "SARJANA ST.PARIWISATA",
      },
      {
        jurusan_id: "4633",
        name: "S.1 SAINS TERAPAN",
      },
      {
        jurusan_id: "4634",
        name: "S.1 Komputer Teknik Informatika",
      },
      {
        jurusan_id: "4635",
        name: "S.1 Ilmu Komunikasi",
      },
      {
        jurusan_id: "4640",
        name: "S1 HUKUM KEPERDATAAN",
      },
      {
        jurusan_id: "4642",
        name: "S.1 DAKWAH ISLAM",
      },
      {
        jurusan_id: "4645",
        name: "S.1 ANALITIK",
      },
      {
        jurusan_id: "4646",
        name: "S1-PENDIDIKAN EKONOMI",
      },
      {
        jurusan_id: "4647",
        name: "S1-PENDIDIKAN FISIKA",
      },
      {
        jurusan_id: "4648",
        name: "S1 PENDIDIKAN PMP DAN KEWARGANEGARAAN",
      },
      {
        jurusan_id: "4649",
        name: "S.1 PENDIDIKAN TATA BOGA",
      },
      {
        jurusan_id: "4650",
        name: "S.1 TADRIS",
      },
      {
        jurusan_id: "4651",
        name: "S1. A-IV BIOLOGI",
      },
      {
        jurusan_id: "4658",
        name: "S-1 Otomotif",
      },
      {
        jurusan_id: "4701",
        name: "SASTRA MESIN JAHIT",
      },
      {
        jurusan_id: "4715",
        name: "S I - REKAM MEDIK",
      },
      {
        jurusan_id: "4716",
        name: "S.1 STATISTIKA",
      },
      {
        jurusan_id: "4720",
        name: "S-1 SISTEM INFORMASI",
      },
      {
        jurusan_id: "4726",
        name: "S1 - Pendidikan Ilmu Pengetahuan Sosial",
      },
      {
        jurusan_id: "4733",
        name: "S-1 MANAJEMEN INFORMATIKA",
      },
      {
        jurusan_id: "4734",
        name: "S-1 HUBUNGAN INTERNASIONAL",
      },
      {
        jurusan_id: "4735",
        name: "PENGEMBANGAN MASYARAKAT ISLAM",
      },
      {
        jurusan_id: "4736",
        name: "S1-KURIKULUM DAN TEKNOLOGI PENDIDIKAN",
      },
      {
        jurusan_id: "4738",
        name: "S1-Manajemen Pembangunan Daerah",
      },
      {
        jurusan_id: "4739",
        name: "S.1 MANAJEMEN DAKWAH",
      },
      {
        jurusan_id: "4740",
        name: "S.1 PENDIDIKAN EKONOMI KOPERASI",
      },
      {
        jurusan_id: "4747",
        name: "S-1 KESEHATAN GIGI",
      },
    ]);
  }
}

module.exports = S1Seeder;
