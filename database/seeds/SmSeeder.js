"use strict";

/*
|--------------------------------------------------------------------------
| SmSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Jurusan = use("App/Models/Jurusan");

class SmSeeder {
  async run() {
    await Jurusan.createMany([
      {
        jurusan_id: "1109",
        name: "S.M Ekonomi Studi Pembangunan",
      },
      {
        jurusan_id: "1110",
        name: "S.M Ekonomi Pembangunan",
      },
      {
        jurusan_id: "1111",
        name: "S.M Ekonomi Pertanian",
      },
      {
        jurusan_id: "1112",
        name: "S.M Ekonomi Internasional",
      },
      {
        jurusan_id: "1113",
        name: "S.M Ekonomi Sosial",
      },
      {
        jurusan_id: "1114",
        name: "S.M Ekonomi Regional",
      },
      {
        jurusan_id: "1115",
        name: "S.M Ekonomi dan Studi Pembangunan",
      },
      {
        jurusan_id: "1116",
        name: "S.M Ekonomi Umum",
      },
      {
        jurusan_id: "1117",
        name: "S.M Ekonomi Industri",
      },
      {
        jurusan_id: "1118",
        name: "S.M Ekonomi Studi Pembangunan",
      },
      {
        jurusan_id: "1119",
        name: "S.M Ekonomi Agraria",
      },
      {
        jurusan_id: "1120",
        name: "S.M Ekonomi Koperasi",
      },
      {
        jurusan_id: "1121",
        name: "S.M Ekonomi Demografi",
      },
      {
        jurusan_id: "1122",
        name: "S.M Ekonomi Pertanahan Agraria",
      },
      {
        jurusan_id: "1123",
        name: "S.M Ekonomi Sumber Daya Alam",
      },
      {
        jurusan_id: "1124",
        name: "S.M Ekonomi Kebendaharaan",
      },
      {
        jurusan_id: "1125",
        name: "S.M Ekonomi Perdagangan Luar Negeri",
      },
      {
        jurusan_id: "1126",
        name: "S.M Ekonomi Ketataniagaan",
      },
      {
        jurusan_id: "1127",
        name: "S.M Ekonomi Pemerintahan",
      },
      {
        jurusan_id: "1128",
        name: "S.M Ekonomi Statistik",
      },
      {
        jurusan_id: "1129",
        name: "S.M Ekonomi Studi Perbandingan Ekonomi",
      },
      {
        jurusan_id: "1130",
        name: "S.M Ekonomi Transportasi",
      },
      {
        jurusan_id: "1131",
        name: "S.M Ekonomi Perumahan",
      },
      {
        jurusan_id: "1132",
        name: "S.M Ekonomi Kesehatan",
      },
      {
        jurusan_id: "1133",
        name: "S.M Ekonomi Akutansi",
      },
      {
        jurusan_id: "1134",
        name: "S.M Ekonomi Inti",
      },
      {
        jurusan_id: "1135",
        name: "S.M Ekonomi Moneter",
      },
      {
        jurusan_id: "1136",
        name: "S.M Ekonomi Keuangan dan Perbankan",
      },
      {
        jurusan_id: "1137",
        name: "S.M Ekonomi Keuangan",
      },
      {
        jurusan_id: "1138",
        name: "S.M Ekonomi Keuangan Negara",
      },
      {
        jurusan_id: "1139",
        name: "S.M Ekonomi Manajemen Akutansi",
      },
      {
        jurusan_id: "1140",
        name: "S.M Ekonomi Manajemen Keuangan",
      },
      {
        jurusan_id: "1141",
        name: "S.M Ekonomi Manajemen Keuangan dan Perbankan",
      },
      {
        jurusan_id: "1142",
        name: "S.M Ekonomi Makro",
      },
      {
        jurusan_id: "1143",
        name: "S.M Ekonomi Manajemen",
      },
      {
        jurusan_id: "1144",
        name: "S.M Ekonomi Manajemen",
      },
      {
        jurusan_id: "1145",
        name: "S.M Ekonomi Manajemen Pemasaran",
      },
      {
        jurusan_id: "1146",
        name: "S.M Ekonomi Manajemen Personalia",
      },
      {
        jurusan_id: "1147",
        name: "S.M Ekonomi Ketatalaksanaan Perusahaan",
      },
      {
        jurusan_id: "1148",
        name: "S.M Ekonomi Ketatalaksanaan",
      },
      {
        jurusan_id: "1149",
        name: "S.M Ekonomi Perusahaan",
      },
      {
        jurusan_id: "1150",
        name: "S.M Farmasi",
      },
      {
        jurusan_id: "1151",
        name: "S.M Farmasi Apoteker",
      },
      {
        jurusan_id: "1152",
        name: "S.M Farmasi Biologi Farmasi",
      },
      {
        jurusan_id: "1153",
        name: "S.M Farmasi Farma Setika",
      },
      {
        jurusan_id: "1154",
        name: "S.M Farmasi Mikrobiologi",
      },
      {
        jurusan_id: "1155",
        name: "S.M Farmasi Biokimia",
      },
      {
        jurusan_id: "1156",
        name: "S.M Farmasi Anorganik",
      },
      {
        jurusan_id: "1157",
        name: "S.M Farmasi Laboratorium",
      },
      {
        jurusan_id: "1158",
        name: "S.M Pertanian",
      },
      {
        jurusan_id: "1159",
        name: "S.M Biologi Perairan/Perikanan",
      },
      {
        jurusan_id: "1160",
        name: "S.M Pertanian Bercocok Tanam",
      },
      {
        jurusan_id: "1161",
        name: "S.M Pertanian Usaha Tani",
      },
      {
        jurusan_id: "1162",
        name: "S.M Pertanian Pembangunan Pertanian",
      },
      {
        jurusan_id: "1163",
        name: "S.M Pertanian Penyuluhan Pertanian",
      },
      {
        jurusan_id: "1164",
        name: "S.M Pengolahan hasil Pertanian",
      },
      {
        jurusan_id: "1165",
        name: "S.M Pertanian Ilmu Tanaman Setahun",
      },
      {
        jurusan_id: "1166",
        name: "S.M Pertanian Keahlian Agraria",
      },
      {
        jurusan_id: "1167",
        name: "S.M Pertanian Ilmu Sosial Ekonomi Pertanian",
      },
      {
        jurusan_id: "1168",
        name: "S.M. Pertanian. Sosiologi Produksi Tanaman",
      },
      {
        jurusan_id: "1169",
        name: "S.M Pertanian Teknologi Pertanian",
      },
      {
        jurusan_id: "1170",
        name: "S.M Pertanian Teknologi Pangan",
      },
      {
        jurusan_id: "1171",
        name: "S.M Pertanian Teknik Tanaman Keras",
      },
      {
        jurusan_id: "1172",
        name: "S.M Pertanian Teknik Tanaman Muda",
      },
      {
        jurusan_id: "1173",
        name: "S.M Pertanian Teknologi Serat",
      },
      {
        jurusan_id: "1174",
        name: "S.M Pertanian Teknik Pengolahan",
      },
      {
        jurusan_id: "1175",
        name: "S.M. Pertanian Teknis Industri Pertanian",
      },
      {
        jurusan_id: "1176",
        name: "S.M Pertanian Produksi Pertanian",
      },
      {
        jurusan_id: "1177",
        name: "S.M. Pertanian Tenik Tanaman Industri",
      },
      {
        jurusan_id: "1178",
        name: "S.M. Pertanian. Mekanisasi Pertanian",
      },
      {
        jurusan_id: "1179",
        name: "S.M Pertanian Alat-alat Pertanian",
      },
      {
        jurusan_id: "1180",
        name: "S.M Pertanian Teknologi Benih",
      },
      {
        jurusan_id: "1181",
        name: "S.M Pertanian Statistik",
      },
      {
        jurusan_id: "1182",
        name: "S.M Pertanian Statistik Pertanian",
      },
      {
        jurusan_id: "1183",
        name: "S.M Pertanian Sosial Pedesaan",
      },
      {
        jurusan_id: "1184",
        name: "S.M Pertanian Bidang Keahlian Statistik",
      },
      {
        jurusan_id: "1185",
        name: "S.M Pertanian Sosial Ekonomi",
      },
      {
        jurusan_id: "1186",
        name: "S.M Pertanian Ekonomi Pembangunan",
      },
      {
        jurusan_id: "1187",
        name: "S.M Pertanian Agronomi",
      },
      {
        jurusan_id: "1188",
        name: "S.M Pertanian Agrobisnis",
      },
      {
        jurusan_id: "1189",
        name: "S.M. Pertanian Agronomi Pemulihan Tanah",
      },
      {
        jurusan_id: "1190",
        name: "S.M Pertanian Agronomi Hortikultura",
      },
      {
        jurusan_id: "1191",
        name: "S.M. Pertanian Agronomi Tanaman Keras",
      },
      {
        jurusan_id: "1192",
        name: "S.M Pertanian Agroklimatologi",
      },
      {
        jurusan_id: "1193",
        name: "S.M Pertanian Agroekonomi",
      },
      {
        jurusan_id: "1194",
        name: "S.M Pertanian Agronomi Produksi Tanaman",
      },
      {
        jurusan_id: "1195",
        name: "S.M Pertanian Agronomi Tanah",
      },
      {
        jurusan_id: "1196",
        name: "S.M Pertanian Budidaya Pekebunan",
      },
      {
        jurusan_id: "1197",
        name: "S.M Pertanian Budidaya Tanaman Keras",
      },
      {
        jurusan_id: "1198",
        name: "S.M. Pertanian. Tanaman Pangan dan Gizi",
      },
      {
        jurusan_id: "1199",
        name: "S.M Pertanian Bercocok Tanam Perkebunan",
      },
      {
        jurusan_id: "1200",
        name: "S.M Pertanian Pengawetan Tanah",
      },
      {
        jurusan_id: "1201",
        name: "S.M Pertanian. Ilmu Kesuburan Tanah",
      },
      {
        jurusan_id: "1202",
        name: "S.M Pertanian Pengawetan dan Retamal.",
      },
      {
        jurusan_id: "1203",
        name: "S.M Pertanian Penyuluhan Tanah",
      },
      {
        jurusan_id: "1204",
        name: "S.M Pertanian Pengolahan Tanah",
      },
      {
        jurusan_id: "1205",
        name: "S.M Pertanian Perkebunan",
      },
      {
        jurusan_id: "1206",
        name: "S.M Pertanian Kehutanan",
      },
      {
        jurusan_id: "1207",
        name: "S.M Pertanian Perikanan",
      },
      {
        jurusan_id: "1208",
        name: "S.M Pertanian Peternakan",
      },
      {
        jurusan_id: "1209",
        name: "S.M Pertanian Teknologi Hasil Hewan",
      },
      {
        jurusan_id: "1210",
        name: "S.M Pertanian Pengolahan Hasil Hewan",
      },
      {
        jurusan_id: "1211",
        name: "S.M Pertanian Pengolahan Hasil Ternak",
      },
      {
        jurusan_id: "1212",
        name: "S.M Pertanian Produksi Peternakan",
      },
      {
        jurusan_id: "1213",
        name: "S.M Pertanian Tanaman Pangan",
      },
      {
        jurusan_id: "1214",
        name: "S.M Pertanian Tanah dan Pemupukan",
      },
      {
        jurusan_id: "1215",
        name: "S.M. Pertanian. Pengolahan Tanah dan Tata Air",
      },
      {
        jurusan_id: "1216",
        name: "S.M Pertanian Klasifikasi Tanah",
      },
      {
        jurusan_id: "1217",
        name: "S.M Pertanian Mikrobiologi Tanah",
      },
      {
        jurusan_id: "1218",
        name: "S.M. Pertanian. Produksi dan Pengolahan Tanaman",
      },
      {
        jurusan_id: "1219",
        name: "S.M. Pertanian Gizi Masyarakat dan Sumd. Keluarga",
      },
      {
        jurusan_id: "1220",
        name: "S.M Pertanian Gizi Pertanian",
      },
      {
        jurusan_id: "1221",
        name: "S.M Pertanian. Sumber Daya Alam dan Lingkungan",
      },
      {
        jurusan_id: "1222",
        name: "S.M Pertanian. Pemanfaatan Sumber Daya",
      },
      {
        jurusan_id: "1223",
        name: "S.M Pertanian. Perusahaan Pertanian",
      },
      {
        jurusan_id: "1224",
        name: "S.M Pertanian Perniagaan Tani",
      },
      {
        jurusan_id: "1225",
        name: "S.M Pertanian. Pembangunan Pedesaan",
      },
      {
        jurusan_id: "1226",
        name: "S.M Pertanian Ekonomi Sumber Daya",
      },
      {
        jurusan_id: "1227",
        name: "SM Perkebunan",
      },
      {
        jurusan_id: "1228",
        name: "S.M Perkebunan Ekonomi Perkebunan",
      },
      {
        jurusan_id: "1229",
        name: "S.M Perkebunan Budidaya Perkebunan",
      },
      {
        jurusan_id: "1230",
        name: "S.M Pertamanan",
      },
      {
        jurusan_id: "1231",
        name: "S.M Kehutanan",
      },
      {
        jurusan_id: "1232",
        name: "S.M Kehutanan Manajemen Hutan",
      },
      {
        jurusan_id: "1233",
        name: "S.M. Kehutanan Manajemen Hasil Hutan",
      },
      {
        jurusan_id: "1234",
        name: "S.M Kehutanan Budidaya Hutan",
      },
      {
        jurusan_id: "1235",
        name: "S.M Peternakan",
      },
      {
        jurusan_id: "1236",
        name: "S.M Produk Ternak",
      },
      {
        jurusan_id: "1237",
        name: "S.M Peternakan Ternak Unggas",
      },
      {
        jurusan_id: "1238",
        name: "S.M Peternakan Ternak Perah",
      },
      {
        jurusan_id: "1239",
        name: "S.M Peternakan Ternak Potong",
      },
      {
        jurusan_id: "1240",
        name: "S.M. Peternakan Nutrisi Makanan Ternak",
      },
      {
        jurusan_id: "1241",
        name: "S.M Peternakan Makanan Ternak",
      },
      {
        jurusan_id: "1242",
        name: "S.M Peternakan Ahli Usaha Kultura",
      },
      {
        jurusan_id: "1243",
        name: "S.M Peternakan Pemeliharaan Ternak",
      },
      {
        jurusan_id: "1244",
        name: "S.M Peternakan Budidaya Peternakan",
      },
      {
        jurusan_id: "1245",
        name: "S.M Peternakan Perikanan",
      },
      {
        jurusan_id: "1246",
        name: "S.M. Peternakan Sosial Ekonomi Peternakan",
      },
      {
        jurusan_id: "1247",
        name: "S.M. Peternakan Pemulihan Ternak",
      },
      {
        jurusan_id: "1248",
        name: "S.M Peternakan Ilmu Ternak",
      },
      {
        jurusan_id: "1249",
        name: "S.M Peternakan Produksi Ternak Unggas",
      },
      {
        jurusan_id: "1250",
        name: "S.M Perikanan",
      },
      {
        jurusan_id: "1251",
        name: "S.M Perikanan Budidaya Perairan",
      },
      {
        jurusan_id: "1252",
        name: "S.M Perikanan Budidaya Perikanan",
      },
      {
        jurusan_id: "1253",
        name: "S.M Perikanan Keahlian Aquakultur",
      },
      {
        jurusan_id: "1254",
        name: "S.M Perikanan Penangkapan Ikan",
      },
      {
        jurusan_id: "1255",
        name: "S.M Perikanan Majanemen dan Kultur Perairan",
      },
      {
        jurusan_id: "1256",
        name: "S.M Perikanan Manajemen Sumber Daya Perikanan",
      },
      {
        jurusan_id: "1257",
        name: "S.M Perikanan Manajemen Penangkapan Ikan",
      },
      {
        jurusan_id: "1258",
        name: "S.M Pengolahan Hasil Perikanan",
      },
      {
        jurusan_id: "1259",
        name: "S.M Perikanan Pengolahan Hasil Hutan",
      },
      {
        jurusan_id: "1260",
        name: "S.M Perikanan Pengolahan Hasil Perairan",
      },
      {
        jurusan_id: "1261",
        name: "S.M Perikanan Sosial Ekonomi Perikanan",
      },
      {
        jurusan_id: "1262",
        name: "S.M Perikanan Sosial Ekonomi Perairan",
      },
      {
        jurusan_id: "1263",
        name: "S.M Perikanan Tata Niaga",
      },
      {
        jurusan_id: "1264",
        name: "S.M Perikanan Perikanan Laut",
      },
      {
        jurusan_id: "1265",
        name: "S.M Perikanan Biologi Perikanan",
      },
      {
        jurusan_id: "1266",
        name: "S.M Perikanan Tata Produksi Perikanan",
      },
      {
        jurusan_id: "1267",
        name: "S.M Tata Laksana Hasil Laut",
      },
      {
        jurusan_id: "1268",
        name: "S.M Perikanan Ekonomi Perikanan",
      },
      {
        jurusan_id: "1269",
        name: "S.M MIPA Fisika",
      },
      {
        jurusan_id: "1270",
        name: "S.M MIPA Fisika",
      },
      {
        jurusan_id: "1271",
        name: "S.M MIPA Fisika Teknik",
      },
      {
        jurusan_id: "1272",
        name: "S.M MIPA Ilmu Pasti dan Alam",
      },
      {
        jurusan_id: "1273",
        name: "S.M MIPA Kimia",
      },
      {
        jurusan_id: "1274",
        name: "S.M MIPA Kimia Geologi",
      },
      {
        jurusan_id: "1275",
        name: "S.M MIPA Kimia",
      },
      {
        jurusan_id: "1276",
        name: "S.M MIPA Kimia Analitik",
      },
      {
        jurusan_id: "1277",
        name: "S.M MIPA Kimia Umum",
      },
      {
        jurusan_id: "1278",
        name: "S.M MIPA Kimia Murnis",
      },
      {
        jurusan_id: "1279",
        name: "S.M MIPA Kimia Analis",
      },
      {
        jurusan_id: "1280",
        name: "S.M MIPA Teknik Kimia",
      },
      {
        jurusan_id: "1281",
        name: "S.M MIPA Kimia Anorganik",
      },
      {
        jurusan_id: "1282",
        name: "S.M MIPA Kimia dan Fisika",
      },
      {
        jurusan_id: "1283",
        name: "S.M. MIPA Kimia Geofisika dan Agrometeorologi",
      },
      {
        jurusan_id: "1284",
        name: "S.M MIPA Kimia Biokimia",
      },
      {
        jurusan_id: "1285",
        name: "S.M MIPA Kimia Apoteker",
      },
      {
        jurusan_id: "1286",
        name: "S.M MIPA Kimia Farmasi",
      },
      {
        jurusan_id: "1287",
        name: "S.M MIPA Kimia Geofisika",
      },
      {
        jurusan_id: "1288",
        name: "S.M. MIPA Kimia Agrometeorologi",
      },
      {
        jurusan_id: "1289",
        name: "S.M MIPA Geofisika",
      },
      {
        jurusan_id: "1290",
        name: "S.M MIPA Geofisika Analitik",
      },
      {
        jurusan_id: "1291",
        name: "S.M MIPA Geofisika Astronomi",
      },
      {
        jurusan_id: "1292",
        name: "S.M MIPA Geofisika Statistika",
      },
      {
        jurusan_id: "1293",
        name: "S.M MIPA Geofisika Statistika",
      },
      {
        jurusan_id: "1294",
        name: "S.M MIPA Geofisika Eksakta",
      },
      {
        jurusan_id: "1295",
        name: "S.M MIPA Geofisika Matematika",
      },
      {
        jurusan_id: "1296",
        name: "S.M MIPA Geofisika Biologi",
      },
      {
        jurusan_id: "1297",
        name: "S.M MIPA Geofisika Geografi",
      },
      {
        jurusan_id: "1298",
        name: "S.M. MIPA Geofisika Kependudukan",
      },
      {
        jurusan_id: "1299",
        name: "S.M MIPA Geografi Kependudukan",
      },
      {
        jurusan_id: "1300",
        name: "S.M Teknik Sipil",
      },
      {
        jurusan_id: "1301",
        name: "S.M Teknik Sipil Teknik Bangunan",
      },
      {
        jurusan_id: "1302",
        name: "S.M Tekniks Sipil Tekanan Aliran Sungai",
      },
      {
        jurusan_id: "1303",
        name: "S.M Teknik Sipil Pengairan",
      },
      {
        jurusan_id: "1304",
        name: "S.M Teknik SipilL Perencanaan",
      },
      {
        jurusan_id: "1305",
        name: "S.M Teknik Sipil Industri dan Konstruksi",
      },
      {
        jurusan_id: "1306",
        name: "S.M Teknik Sipil Arsitektur",
      },
      {
        jurusan_id: "1307",
        name: "S.M Teknik SipilL Seni Rupa",
      },
      {
        jurusan_id: "1308",
        name: "S.M Teknik Sipil Konstruksi",
      },
      {
        jurusan_id: "1309",
        name: "S.M Teknik SipilL Grafika",
      },
      {
        jurusan_id: "1310",
        name: "S.M Teknik Sipil Hidrografi",
      },
      {
        jurusan_id: "1311",
        name: "S.M Teknik Sipil Transmigrasi",
      },
      {
        jurusan_id: "1312",
        name: "S.M Teknik Sipil Mekanik Tanah",
      },
      {
        jurusan_id: "1313",
        name: "S.M Teknik Sipil Mesin Konstruksi",
      },
      {
        jurusan_id: "1314",
        name: "S.M Teknik Sipil Industri Kapal",
      },
      {
        jurusan_id: "1315",
        name: "S.M Teknik Sipil Geodensi",
      },
      {
        jurusan_id: "1316",
        name: "S.M Teknik SipilL Planologi",
      },
      {
        jurusan_id: "1317",
        name: "S.M Teknik Sipil Teknik Perkapalan",
      },
      {
        jurusan_id: "1318",
        name: "S.M Teknik Sipil Bangunan Kapal",
      },
      {
        jurusan_id: "1319",
        name: "S.M Teknik Sipil Teknik Regional",
      },
      {
        jurusan_id: "1320",
        name: "S.M Teknik Sipil Reg. Planning",
      },
      {
        jurusan_id: "1321",
        name: "S.M Teknik Sipil Perhubungan",
      },
      {
        jurusan_id: "1322",
        name: "S.M Teknik Sipil Lingkungan",
      },
      {
        jurusan_id: "1323",
        name: "S.M Teknik Sipil Teknik Penyehatan",
      },
      {
        jurusan_id: "1324",
        name: "S.M Teknik SipilL Reaktor",
      },
      {
        jurusan_id: "1325",
        name: "S.M Teknologi Mineral",
      },
      {
        jurusan_id: "1326",
        name: "S.M Teknologi Mineral Geologi",
      },
      {
        jurusan_id: "1327",
        name: "S.M Teknologi Mineral Geofisik",
      },
      {
        jurusan_id: "1328",
        name: "S.M Teknologi Mineral",
      },
      {
        jurusan_id: "1329",
        name: "S.M Teknologi Mineral Pertambangan",
      },
      {
        jurusan_id: "1330",
        name: "S.M Teknik Tambang Metalurgi",
      },
      {
        jurusan_id: "1331",
        name: "S.M. Teknologi Mineral Tambang Umum",
      },
      {
        jurusan_id: "1332",
        name: "S.M. Teknologi Tambang Eksplorasi",
      },
      {
        jurusan_id: "1333",
        name: "S.M. Teknologi Mineral Perminyakan",
      },
      {
        jurusan_id: "1334",
        name: "S.M. Teknologi Mesin Perminyakan",
      },
      {
        jurusan_id: "1335",
        name: "S.M. Teknologi Mineral Teknik Geografi",
      },
      {
        jurusan_id: "1336",
        name: "S.M. Teknologi Mineral Geografi",
      },
      {
        jurusan_id: "1337",
        name: "S.M. Teknologi Mineral Paleontology",
      },
      {
        jurusan_id: "1338",
        name: "S.M Teknologi Industri",
      },
      {
        jurusan_id: "1339",
        name: "S.M. Teknologi Industri Kontruksi Kapal Terbang",
      },
      {
        jurusan_id: "1340",
        name: "S.M. Teknik Industri Teknologi Kimia",
      },
      {
        jurusan_id: "1341",
        name: "S.M. Teknik Industri Kimia",
      },
      {
        jurusan_id: "1342",
        name: "S.M. Teknologi Industri Kimia Organik",
      },
      {
        jurusan_id: "1343",
        name: "S.M. Teknik Industri Kimia Anorganik",
      },
      {
        jurusan_id: "1344",
        name: "S.M. Teknik Industri Kimia Umum",
      },
      {
        jurusan_id: "1345",
        name: "S.M. Teknologi Industri Chemical Enginer",
      },
      {
        jurusan_id: "1346",
        name: "S.M. Teknik Industri Farmasi",
      },
      {
        jurusan_id: "1347",
        name: "S.M. Teknik Industri Biokimia",
      },
      {
        jurusan_id: "1348",
        name: "S.M. Teknologi Industri Laboratorium",
      },
      {
        jurusan_id: "1349",
        name: "S.M. Teknologi Industri Kimia Industri",
      },
      {
        jurusan_id: "1350",
        name: "S.M. Teknologi Industri Kimia Murni",
      },
      {
        jurusan_id: "1351",
        name: "S.M. Teknologi Industri Kimia Tekstil",
      },
      {
        jurusan_id: "1352",
        name: "S.M. Teknik Industri Fisika",
      },
      {
        jurusan_id: "1353",
        name: "S.M. Teknologi Industri Fisika Teknik",
      },
      {
        jurusan_id: "1354",
        name: "S.M. Teknik Industri Produksi Machin Engin",
      },
      {
        jurusan_id: "1355",
        name: "S.M. Teknologi Industri Mekanik",
      },
      {
        jurusan_id: "1356",
        name: "S.M. Teknik Industri Telekomunikasi",
      },
      {
        jurusan_id: "1357",
        name: "S.M. Industri Eletronika Sistem Pengaturan",
      },
      {
        jurusan_id: "1358",
        name: "S.M Teknik Sipil Elektronika Arus Lemah",
      },
      {
        jurusan_id: "1359",
        name: "S.M. Teknik Industri Elektronika Arus Lemah",
      },
      {
        jurusan_id: "1360",
        name: "S.M. Teknologi Industri Elekto Arus Lemah",
      },
      {
        jurusan_id: "1361",
        name: "S.M. Teknologi Industri Teknik Elektronika",
      },
      {
        jurusan_id: "1362",
        name: "S.M. Teknologi Industri Elektonika",
      },
      {
        jurusan_id: "1363",
        name: "S.M. Teknik Industri Elektronika/Komunikasi",
      },
      {
        jurusan_id: "1364",
        name: "S.M. Teknik Industri Tenaga Listrik",
      },
      {
        jurusan_id: "1365",
        name: "S.M. Teknik Industri Pembangkit dan Distribusi",
      },
      {
        jurusan_id: "1366",
        name: "S.M. Teknik Industri Listrik",
      },
      {
        jurusan_id: "1367",
        name: "S.M. Teknologi Industri Listrik Arus Lemah",
      },
      {
        jurusan_id: "1368",
        name: "S.M. Teknologi Industri Listrik Arus Kuat",
      },
      {
        jurusan_id: "1369",
        name: "S.M. Teknologi Industri Kabinet TNG.List",
      },
      {
        jurusan_id: "1370",
        name: "S.M. Teknologi Industri Mesin Umum",
      },
      {
        jurusan_id: "1371",
        name: "S.M. Teknik Industri Elemen Mesin",
      },
      {
        jurusan_id: "1372",
        name: "S.M. Teknologi Industri Elemen Sist.TNG",
      },
      {
        jurusan_id: "1373",
        name: "S.M Teknologi Industri Mesin Produksi",
      },
      {
        jurusan_id: "1374",
        name: "S.M. Teknik Industri Mesin Listrik",
      },
      {
        jurusan_id: "1375",
        name: "S.M. Teknik Industri Mesin Konstruksi",
      },
      {
        jurusan_id: "1376",
        name: "S.M. Teknik Industri Mesin Penerbangan",
      },
      {
        jurusan_id: "1377",
        name: "S.M. Teknologi Industri Otomotif",
      },
      {
        jurusan_id: "1378",
        name: "S.M. Teknologi Industri Metalurgi",
      },
      {
        jurusan_id: "1379",
        name: "S.M. Tenknik Nuklir/Tenaga Reaktor",
      },
      {
        jurusan_id: "1380",
        name: "S.M. Teknik Industri Teknik Komputer",
      },
      {
        jurusan_id: "1381",
        name: "S.M. Teknologi Industri Sains & Teknologi",
      },
      {
        jurusan_id: "1382",
        name: "S.M. Teknologi Industri Informatika",
      },
      {
        jurusan_id: "1383",
        name: "S.M. Teknologi Industri Komunikasi Komputer",
      },
      {
        jurusan_id: "1384",
        name: "S.M. Teknologi Industri Radio & Televisi",
      },
      {
        jurusan_id: "1385",
        name: "S.M. Teknik Industri Mesin Listrik",
      },
      {
        jurusan_id: "1386",
        name: "S.M. Teknik Telekomunikasi dan Elektronika",
      },
      {
        jurusan_id: "1387",
        name: "S.M. Teknologi Industri Telekomunikasi",
      },
      {
        jurusan_id: "1388",
        name: "S.M. Teknologi Industri Radio Bisik",
      },
      {
        jurusan_id: "1389",
        name: "S.M. Teknologi Industri Instrumen",
      },
      {
        jurusan_id: "1390",
        name: "S.M. Teknologi & Manajemen Industri",
      },
      {
        jurusan_id: "1391",
        name: "S.M. Teknologi Industri Sumber Daya",
      },
      {
        jurusan_id: "1392",
        name: "S.M. Teknologi Industri Teknologi Makanan",
      },
      {
        jurusan_id: "1393",
        name: "S.M. Teknologi Industri Matematika",
      },
      {
        jurusan_id: "1394",
        name: "S.M. Teknik Industri Gas dan Petrokimia",
      },
      {
        jurusan_id: "1395",
        name: "S.M. Teknologi Industri Teknik Energi",
      },
      {
        jurusan_id: "1396",
        name: "S.M Teknologi Kelautan",
      },
      {
        jurusan_id: "1397",
        name: "S.M. Teknik Kelautan Elekronika dan Komunikasi",
      },
      {
        jurusan_id: "1398",
        name: "S.M. Teknologi Kelautan Enginering",
      },
      {
        jurusan_id: "1399",
        name: "S.M. Teknik Kelautan Naval/Elektronika",
      },
      {
        jurusan_id: "1400",
        name: "S.M. Teknologi Kelautan Elektronika",
      },
      {
        jurusan_id: "1401",
        name: "S.M. Teknologi Kelautan Radar/Suara",
      },
      {
        jurusan_id: "1402",
        name: "S.M. Teknologi Kelautan Telekomunikasi",
      },
      {
        jurusan_id: "1403",
        name: "S.M. Teknologi Kelautan Oceanologi",
      },
      {
        jurusan_id: "1404",
        name: "S.M Pendidikan",
      },
      {
        jurusan_id: "1405",
        name: "S.M Pendidikan MIPA",
      },
      {
        jurusan_id: "1406",
        name: "S.M. Pendidikan MIPA Ilmu Pasti Alam",
      },
      {
        jurusan_id: "1407",
        name: "S.M. Pendidikan MIPA Ilmu Pasti",
      },
      {
        jurusan_id: "1408",
        name: "S.M Pendidikan MIPA Matematika",
      },
      {
        jurusan_id: "1409",
        name: "S.M. Pendidikan MIPA Matematika dan IPA",
      },
      {
        jurusan_id: "1410",
        name: "S.M Pendidikan MIPA IPA",
      },
      {
        jurusan_id: "1411",
        name: "S.M Pendidikan MIPA Fisika",
      },
      {
        jurusan_id: "1412",
        name: "S.M Pendidikan MIPA Kimia",
      },
      {
        jurusan_id: "1413",
        name: "S.M Pendidikan MIPA Ilmu Bumi",
      },
      {
        jurusan_id: "1414",
        name: "S.M Pendidikan MIPA Biologi",
      },
      {
        jurusan_id: "1415",
        name: "S.M. Pendidikan MIPA Hayat/Biologi",
      },
      {
        jurusan_id: "1416",
        name: "S.M Pendidikan MIPA Statistik",
      },
      {
        jurusan_id: "1417",
        name: "S.M Pendidikan Teknik",
      },
      {
        jurusan_id: "1418",
        name: "S.M Pendidikan Teknik",
      },
      {
        jurusan_id: "1419",
        name: "S.M Pendidikan Teknik Sipil",
      },
      {
        jurusan_id: "1420",
        name: "S.M. Pendidikan Teknologi Pembangunan",
      },
      {
        jurusan_id: "1421",
        name: "S.M. Pendidikan Teknologi Sipil Bangunan Air",
      },
      {
        jurusan_id: "1422",
        name: "S.M. Pendidikan Teknik Arsitektur",
      },
      {
        jurusan_id: "1423",
        name: "S.M Pendidikan Teknik Mesin",
      },
      {
        jurusan_id: "1424",
        name: "S.M. Pendidikan Teknik Mesin Industri",
      },
      {
        jurusan_id: "1425",
        name: "S.M. Pendidikan Teknik Mesin Produksi",
      },
      {
        jurusan_id: "1426",
        name: "S.M. Pendidikan Teknik Otomotif",
      },
      {
        jurusan_id: "1427",
        name: "S.M Pendidikan Teknik Mekanik",
      },
      {
        jurusan_id: "1428",
        name: "S.M Pendidikan Teknik Elektro",
      },
      {
        jurusan_id: "1429",
        name: "S.M. Pendidikan Teknik Elektronika",
      },
      {
        jurusan_id: "1430",
        name: "S.M. Pendidikan Teknik Elektronika",
      },
      {
        jurusan_id: "1431",
        name: "S.M. Pendidikan Teknik Elektro Arus Lemah",
      },
      {
        jurusan_id: "1432",
        name: "S.M Pendidikan Teknik Listrik",
      },
      {
        jurusan_id: "1433",
        name: "S.M. Pendidikan Teknik Listrik Arus Kuat",
      },
      {
        jurusan_id: "1434",
        name: "S.M Pendidikan Teknik Listrik Arus Lemah",
      },
      {
        jurusan_id: "1435",
        name: "S.M Pendidikan IPS",
      },
      {
        jurusan_id: "1436",
        name: "S.M Pendidikan IPS Administrasi Pendidikan",
      },
      {
        jurusan_id: "1437",
        name: "S.M. Pendidikan IPS Administrasi Supervisi Pendidikan",
      },
      {
        jurusan_id: "1438",
        name: "S.M Pendidikan Sekolah",
      },
      {
        jurusan_id: "1439",
        name: "S.M Pendidikan IPS Administrasi Keterampilan",
      },
      {
        jurusan_id: "1440",
        name: "S.M Pendidikan IPS Administrasi Keterampilan",
      },
      {
        jurusan_id: "1441",
        name: "S.M Pendidikan IPS Administrasi Perkantoran",
      },
      {
        jurusan_id: "1442",
        name: "S.M Pendidikan IPS Administrasi Perusahaan",
      },
      {
        jurusan_id: "1443",
        name: "S.M. Pendidikan IPS Civis Hukum",
      },
      {
        jurusan_id: "1444",
        name: "S.M Pendidikan IPS Hukum PMP",
      },
      {
        jurusan_id: "1445",
        name: "S.M Pendidikan IPS PKN dan Hukum",
      },
      {
        jurusan_id: "1446",
        name: "S.M. Pendidikan PMP dan Kewarganegaraan",
      },
      {
        jurusan_id: "1447",
        name: "S.M Pendidikan IPS Tata Negara",
      },
      {
        jurusan_id: "1448",
        name: "S.M. Pendidikan Pendidikan Moral Pancasila",
      },
      {
        jurusan_id: "1449",
        name: "S.M Pendidikan IPS PSPB",
      },
      {
        jurusan_id: "1450",
        name: "S.M Pendidikan IPS Sejaran",
      },
      {
        jurusan_id: "1451",
        name: "S.M. Pendidikan IPS Sejarah dan Antopologi",
      },
      {
        jurusan_id: "1452",
        name: "S.M Pendidikan IPS PKK",
      },
      {
        jurusan_id: "1453",
        name: "S.M Pendidikan IPS Keterampilan",
      },
      {
        jurusan_id: "1454",
        name: "S.M. Pendidikan IPS Ketrampilan Jasa",
      },
      {
        jurusan_id: "1455",
        name: "D.III Pendidikan Bahasa/Seni",
      },
      {
        jurusan_id: "1456",
        name: "S.M Pendidikan IPS Sandratari dan Musik",
      },
      {
        jurusan_id: "1457",
        name: "S.M Pendidikan IPS Seni Musik",
      },
      {
        jurusan_id: "1458",
        name: "S.M Pendidikan IPS Seni Rupa dan Kerajinan",
      },
      {
        jurusan_id: "1459",
        name: "S.M Pendidikan IPS Seni Tari",
      },
      {
        jurusan_id: "1460",
        name: "S.M Pendidikan IPS Tata Boga",
      },
      {
        jurusan_id: "1461",
        name: "S.M Pendidikan IPS Tata Busana",
      },
      {
        jurusan_id: "1462",
        name: "S.M Pendidikan IPS Tata Graha",
      },
      {
        jurusan_id: "1463",
        name: "S.M Pendidikan IPS",
      },
      {
        jurusan_id: "1464",
        name: "S.M Pendidikan IPS Tata Niaga",
      },
      {
        jurusan_id: "1465",
        name: "S.M. Pendidikan IPS Tata Perkantoran",
      },
      {
        jurusan_id: "1466",
        name: "S.M. Pendidikan IPS Tata Perusahaan",
      },
      {
        jurusan_id: "1467",
        name: "S.M Pendidikan IPS Tata Buku",
      },
      {
        jurusan_id: "1468",
        name: "S.M Pendidikan IPS Akutansi",
      },
      {
        jurusan_id: "1469",
        name: "S.M. Pendidikan IPS Hitung Dagang",
      },
      {
        jurusan_id: "1470",
        name: "S.M. Pendidikan IPS Imu Ekonomi",
      },
      {
        jurusan_id: "1471",
        name: "S.M Pendidikan IPS Ekonomi Perusahaan",
      },
      {
        jurusan_id: "1472",
        name: "S.M Pendidikan IPS Ekonomi Koperasi",
      },
      {
        jurusan_id: "1473",
        name: "S.M Pendidikan IPS Koperasi",
      },
      {
        jurusan_id: "1474",
        name: "S.M. Pendidikan IPS Bisnis Tata Buku",
      },
      {
        jurusan_id: "1475",
        name: "S.M. Pendidikan IPS Bisnis Vokasional",
      },
      {
        jurusan_id: "1476",
        name: "S.M Pendidikan IPS Kesehatan dan Rekreasi",
      },
      {
        jurusan_id: "1477",
        name: "S.M. Pendidikan Kesejahteraan Keluarga",
      },
      {
        jurusan_id: "1478",
        name: "S.M. Pendidikan Kesejahteraan Sosial",
      },
      {
        jurusan_id: "1479",
        name: "S.M Pendidikan IPS Manajemen",
      },
      {
        jurusan_id: "1480",
        name: "S.M Pendidikan IPS Filsafat",
      },
      {
        jurusan_id: "1481",
        name: "S.M. Pendidikan Filsafat Kebudayaan",
      },
      {
        jurusan_id: "1482",
        name: "S.M. Pendidikan Filsafat Pendidikan",
      },
      {
        jurusan_id: "1483",
        name: "S.M. Pendidikan Filsafat Sosiologi Pendidikan",
      },
      {
        jurusan_id: "1484",
        name: "S.M Pendidikan Bahasa",
      },
      {
        jurusan_id: "1485",
        name: "S.M Pendidikan Sastra Indonesia",
      },
      {
        jurusan_id: "1486",
        name: "S.M Pendidikan Bahasa Indonesia",
      },
      {
        jurusan_id: "1487",
        name: "S.M Pendidikan Bahasa dan Sastra",
      },
      {
        jurusan_id: "1488",
        name: "S.M. Pendidikan Bahasa dan Sastra Indonesia",
      },
      {
        jurusan_id: "1489",
        name: "S.M. Pendidikan Bahasa dan Sastra Daerah",
      },
      {
        jurusan_id: "1490",
        name: "S.M. Pendidikan Bahasa dan Sastra Jawa",
      },
      {
        jurusan_id: "1491",
        name: "S.M Pendidikan Bahasa Jawa",
      },
      {
        jurusan_id: "1492",
        name: "S.M Pendidikan Bahasa dan Sastra Sunda",
      },
      {
        jurusan_id: "1493",
        name: "S.M Pendidikan Sastra Arab",
      },
      {
        jurusan_id: "1494",
        name: "S.M Pendidikan Bahasa Arab",
      },
      {
        jurusan_id: "1495",
        name: "S.M. Pendidikan Bahasa dan Sastra Arab",
      },
      {
        jurusan_id: "1496",
        name: "S.M. Pendidikan Bahasa dan Sastra Rusia",
      },
      {
        jurusan_id: "1497",
        name: "S.M Pendidikan Bahasa Rusia",
      },
      {
        jurusan_id: "1498",
        name: "S.M. Pendidikan Bahasa dan Sastra Asing",
      },
      {
        jurusan_id: "1499",
        name: "S.M. Pendidikan Bahasa dan Sastra Inggris",
      },
      {
        jurusan_id: "1500",
        name: "S.M. Pendidikan Bahasa dan Sastra Jepang",
      },
      {
        jurusan_id: "1501",
        name: "S.M Pendidikan Bahasa Jepang",
      },
      {
        jurusan_id: "1502",
        name: "S.M Pendiikan Bahasa dan Sastra Jerman",
      },
      {
        jurusan_id: "1503",
        name: "S.M Pendidikan Bahasa Jerman",
      },
      {
        jurusan_id: "1504",
        name: "S.M Pendidikan Bahasa Perancis",
      },
      {
        jurusan_id: "1505",
        name: "S.M Ilmu Pendidikan",
      },
      {
        jurusan_id: "1506",
        name: "S.M Pendidikan Pendidikan Paedagogik",
      },
      {
        jurusan_id: "1507",
        name: "S.M Ilmu Pendidikan Didaktik",
      },
      {
        jurusan_id: "1508",
        name: "S.M Ilmu Pendidikan Sejarah Pendidikan",
      },
      {
        jurusan_id: "1509",
        name: "S.M Pendidikan Bimbingan dan Penyuluhan",
      },
      {
        jurusan_id: "1510",
        name: "S.M Pendidikan Bimbingan dan Konseling",
      },
      {
        jurusan_id: "1511",
        name: "S.M Ilmu Pendidikan Psikologi",
      },
      {
        jurusan_id: "1512",
        name: "S.M Pendidikan Psikologi Pendidikan",
      },
      {
        jurusan_id: "1513",
        name: "S.M Psikologi Pendidikan dan Bimbingan",
      },
      {
        jurusan_id: "1514",
        name: "S.M Pendidikan Keguruan dan Pendidikan Sosial",
      },
      {
        jurusan_id: "1515",
        name: "S.M Pendidikan Kurikulum dan Pengajaran",
      },
      {
        jurusan_id: "1516",
        name: "S.M Ilmu Pendidikan Kurikulum dan Teknologi Pendidikan",
      },
      {
        jurusan_id: "1517",
        name: "S.M Pendidikan Kurikulum Pendidikan",
      },
      {
        jurusan_id: "1518",
        name: "S.M Pendidikan Kurikulum dan Penyuluhan",
      },
      {
        jurusan_id: "1519",
        name: "S.M Ilmu Pendidikan Kurikulum Teknik Pendidikan",
      },
      {
        jurusan_id: "1520",
        name: "S.M Pendidikan Metodologi dan Kurikulum",
      },
      {
        jurusan_id: "1521",
        name: "S.M Pendidikan Metodologi Pendidikan",
      },
      {
        jurusan_id: "1522",
        name: "S.M Pendidikan Pengajaran dan Kurikulum",
      },
      {
        jurusan_id: "1523",
        name: "S.M Pendidikan Perencanaan Pendidikan",
      },
      {
        jurusan_id: "1524",
        name: "S.M Ilmu Pendidikan Agama Kristen",
      },
      {
        jurusan_id: "1525",
        name: "S.M Pendidikan Pendidikan Anak",
      },
      {
        jurusan_id: "1526",
        name: "S.M Ilmu Pendidikan Dasar",
      },
      {
        jurusan_id: "1527",
        name: "S.M Ilmu Pendidikan Dasar Umum",
      },
      {
        jurusan_id: "1528",
        name: "S.M Ilmu Pendidikan Olah Raga",
      },
      {
        jurusan_id: "1529",
        name: "S.M Pendidikan Olah Raga dan Kesehatan",
      },
      {
        jurusan_id: "1530",
        name: "S.M Pendidikan Bisnis",
      },
      {
        jurusan_id: "1531",
        name: "S.M Pendidikan Dunia Usaha",
      },
      {
        jurusan_id: "1532",
        name: "S.M Ilmu Pendidikan Guru",
      },
      {
        jurusan_id: "1533",
        name: "PGAN",
      },
      {
        jurusan_id: "1534",
        name: "S.M Pendidikan Luar Biasa",
      },
      {
        jurusan_id: "1535",
        name: "S.M Pendidikan Luar Sekolah",
      },
      {
        jurusan_id: "1536",
        name: "S.M Ilmu Pendidikan Masyarakat",
      },
      {
        jurusan_id: "1537",
        name: "S.M Ilmu Pendidikan Pengembangan Sosial",
      },
      {
        jurusan_id: "1538",
        name: "S.M Seni",
      },
      {
        jurusan_id: "1539",
        name: "S.M Seni Rupa dan Desain",
      },
      {
        jurusan_id: "1540",
        name: "S.M Seni Murni",
      },
      {
        jurusan_id: "1541",
        name: "S.M Seni Grafis",
      },
      {
        jurusan_id: "1542",
        name: "S.M Seni Rupa",
      },
      {
        jurusan_id: "1543",
        name: "S.M Seni Grafik",
      },
      {
        jurusan_id: "1544",
        name: "S.M Seni Lukis",
      },
      {
        jurusan_id: "1545",
        name: "S.M Seni Seniman",
      },
      {
        jurusan_id: "1546",
        name: "S.M Seni Illustrasi",
      },
      {
        jurusan_id: "1547",
        name: "S.M Seni Kriya",
      },
      {
        jurusan_id: "1548",
        name: "S.M Seni Patung",
      },
      {
        jurusan_id: "1549",
        name: "S.M Seni Keramik",
      },
      {
        jurusan_id: "1550",
        name: "S.M Seni Kriya Logam",
      },
      {
        jurusan_id: "1551",
        name: "S.M Seni Kriya Kayu",
      },
      {
        jurusan_id: "1552",
        name: "S.M Seni Desain Komunikasi",
      },
      {
        jurusan_id: "1553",
        name: "S.M Seni Desain Tekstil",
      },
      {
        jurusan_id: "1554",
        name: "S.M Seni Reklame",
      },
      {
        jurusan_id: "1555",
        name: "S.M Seni Dekorasi",
      },
      {
        jurusan_id: "1556",
        name: "S.M Seni Desain Produk",
      },
      {
        jurusan_id: "1557",
        name: "S.M Seni Desain Interior",
      },
      {
        jurusan_id: "1558",
        name: "S.M Seni Desain Kriya",
      },
      {
        jurusan_id: "1559",
        name: "S.M Seni Produksi",
      },
      {
        jurusan_id: "1560",
        name: "S.M Seni Tari",
      },
      {
        jurusan_id: "1561",
        name: "S.M Seni Tari Jawa",
      },
      {
        jurusan_id: "1562",
        name: "S.M Seni Desain Komposisi Tari",
      },
      {
        jurusan_id: "1563",
        name: "S.M Seni Sastra Tari",
      },
      {
        jurusan_id: "1564",
        name: "S.M Seni Teori dan Komposisi Tari",
      },
      {
        jurusan_id: "1565",
        name: "S.M Seni Tari Bali",
      },
      {
        jurusan_id: "1566",
        name: "S.M Seni Koreologi",
      },
      {
        jurusan_id: "1567",
        name: "S.M Seni Tari Nusantara",
      },
      {
        jurusan_id: "1568",
        name: "S.M Seni Karawitan",
      },
      {
        jurusan_id: "1569",
        name: "S.M Seni Musik",
      },
      {
        jurusan_id: "1570",
        name: "S.M Seni Musik Sekolah",
      },
      {
        jurusan_id: "1571",
        name: "S.M Seni Sastra Musik",
      },
      {
        jurusan_id: "1572",
        name: "S.M. Seni Teori Komposisi Musik",
      },
      {
        jurusan_id: "1573",
        name: "S.M Seni Teater",
      },
      {
        jurusan_id: "1574",
        name: "S.M Seni Cinematografi",
      },
      {
        jurusan_id: "1575",
        name: "S.M Seni Pedalangan",
      },
      {
        jurusan_id: "1576",
        name: "S.M Seni Diamlurgi",
      },
      {
        jurusan_id: "1577",
        name: "S.M Seni Komposisi",
      },
      {
        jurusan_id: "1578",
        name: "S.M Seni Camera",
      },
      {
        jurusan_id: "1579",
        name: "S.M Sastra Indonesia",
      },
      {
        jurusan_id: "1580",
        name: "S.M. Sastra Bahasa Indonesia",
      },
      {
        jurusan_id: "1581",
        name: "S.M. Sastra dan Sejarah Indonesia",
      },
      {
        jurusan_id: "1582",
        name: "S.M. Sastra Filsafat Bahasa dan Sastra Indonesia",
      },
      {
        jurusan_id: "1583",
        name: "S.M Sastra Bahasa dan Sastra Indonesia",
      },
      {
        jurusan_id: "1584",
        name: "S.M Sastra Nusantara",
      },
      {
        jurusan_id: "1585",
        name: "S.M Sastra Bahasa Sansekerta",
      },
      {
        jurusan_id: "1586",
        name: "S.M Sastra Daerah",
      },
      {
        jurusan_id: "1587",
        name: "S.M Bahasa Jawa",
      },
      {
        jurusan_id: "1588",
        name: "S.M Sastra Jawa",
      },
      {
        jurusan_id: "1589",
        name: "S.M Bahasa Sastra Jawa",
      },
      {
        jurusan_id: "1590",
        name: "S.M Sastra Daerah Budaya Jawa",
      },
      {
        jurusan_id: "1591",
        name: "S.M Sastra Daerah Jawa Kuno",
      },
      {
        jurusan_id: "1592",
        name: "S.M Bahasa Sunda",
      },
      {
        jurusan_id: "1593",
        name: "S.M Sastra Sunda",
      },
      {
        jurusan_id: "1594",
        name: "S.M Bahasa dan Sastra Sunda",
      },
      {
        jurusan_id: "1595",
        name: "S.M Bahasa Bali",
      },
      {
        jurusan_id: "1596",
        name: "S.M Sastra Bali",
      },
      {
        jurusan_id: "1597",
        name: "S.M Bahasa dan Sastra Bali",
      },
      {
        jurusan_id: "1598",
        name: "S.M Sastra Asia Timur",
      },
      {
        jurusan_id: "1599",
        name: "S.M Sastra Bahasa Jepang",
      },
      {
        jurusan_id: "1600",
        name: "S.M Sastra Jepang",
      },
      {
        jurusan_id: "1601",
        name: "S.M Bahasa dan Sastra Jepang",
      },
      {
        jurusan_id: "1602",
        name: "S.M Bahasa Cina",
      },
      {
        jurusan_id: "1603",
        name: "S.M Sastra Cina",
      },
      {
        jurusan_id: "1604",
        name: "S.M Bahasa dan Sastra Cina",
      },
      {
        jurusan_id: "1605",
        name: "S.M Bahasa Korea",
      },
      {
        jurusan_id: "1606",
        name: "S.M Sastra Korea",
      },
      {
        jurusan_id: "1607",
        name: "S.M Bahasa dan Sastra Korea",
      },
      {
        jurusan_id: "1608",
        name: "S.M Sastra Asia Barat",
      },
      {
        jurusan_id: "1609",
        name: "S.M Bahasa Arab",
      },
      {
        jurusan_id: "1610",
        name: "S.M Sastra Arab",
      },
      {
        jurusan_id: "1611",
        name: "S.M Bahasa dan Sastra Arab",
      },
      {
        jurusan_id: "1612",
        name: "S.M Sastra Arab dan Budaya Islam",
      },
      {
        jurusan_id: "1613",
        name: "S.M Bahasa India",
      },
      {
        jurusan_id: "1614",
        name: "S.M Sastra India",
      },
      {
        jurusan_id: "1615",
        name: "S.M Bahasa dan Sastra India",
      },
      {
        jurusan_id: "1616",
        name: "S.M Sastra Eropa",
      },
      {
        jurusan_id: "1617",
        name: "S.M Bahasa Eropa",
      },
      {
        jurusan_id: "1618",
        name: "S.M Sastra Eropa",
      },
      {
        jurusan_id: "1619",
        name: "S.M Bahasa Inggris",
      },
      {
        jurusan_id: "1620",
        name: "S.M Sastra Inggris",
      },
      {
        jurusan_id: "1621",
        name: "S.M Bahasa dan Sastra Indonesi",
      },
      {
        jurusan_id: "1622",
        name: "S.M Sastra Eropa Anggo Saxon",
      },
      {
        jurusan_id: "1623",
        name: "S.M Bahasa Perancis",
      },
      {
        jurusan_id: "1624",
        name: "S.M Sastra Perancis",
      },
      {
        jurusan_id: "1625",
        name: "S.M Bahasa dan Sastra Perancis",
      },
      {
        jurusan_id: "1626",
        name: "S.M Bahasa Belanda",
      },
      {
        jurusan_id: "1627",
        name: "S.M Sastra Belanda",
      },
      {
        jurusan_id: "1628",
        name: "S.M Bahasa dan Sastra Belanda",
      },
      {
        jurusan_id: "1629",
        name: "S.M Bahasa Rusia",
      },
      {
        jurusan_id: "1630",
        name: "S.M Sastra Rusia",
      },
      {
        jurusan_id: "1631",
        name: "S.M Bahasa dan Sastra Rusia",
      },
      {
        jurusan_id: "1632",
        name: "S.M Bahasa Jerman",
      },
      {
        jurusan_id: "1633",
        name: "S.M Sastra Jerman",
      },
      {
        jurusan_id: "1634",
        name: "S.M Bahasa dan Sastra Jerman",
      },
      {
        jurusan_id: "1635",
        name: "S.M Bahasa Roma",
      },
      {
        jurusan_id: "1636",
        name: "S.M Sastra Slavia",
      },
      {
        jurusan_id: "1637",
        name: "S.M Bahasa dan Sastra Slavia",
      },
      {
        jurusan_id: "1638",
        name: "S.M Sastra Sejarah Antropologi Budaya",
      },
      {
        jurusan_id: "1639",
        name: "S.M Sastra Purbakala",
      },
      {
        jurusan_id: "1640",
        name: "S.M Sastra Arkeologi",
      },
      {
        jurusan_id: "1641",
        name: "S.M Sastra Antropologi",
      },
      {
        jurusan_id: "1642",
        name: "S.M Sastra Sejarah",
      },
      {
        jurusan_id: "1643",
        name: "S.M Sastra Purbakala dan Etnologi",
      },
      {
        jurusan_id: "1644",
        name: "S.M Sastra Sejarah dan Budaya",
      },
      {
        jurusan_id: "1645",
        name: "S.M Sastra Sejarah dan Antropologi",
      },
      {
        jurusan_id: "1646",
        name: "S.M Sastra Antropologi Budaya",
      },
      {
        jurusan_id: "1647",
        name: "S.M Sastra Antropologi Sosial",
      },
      {
        jurusan_id: "1648",
        name: "S.M Sastra Sosiologi",
      },
      {
        jurusan_id: "1649",
        name: "S.M Sastra Paedagogik",
      },
      {
        jurusan_id: "1650",
        name: "S.M Sastra Linguistik",
      },
      {
        jurusan_id: "1651",
        name: "S.M Sastra Linguistik Jawa",
      },
      {
        jurusan_id: "1652",
        name: "S.M Sastra Linguistik Indonesia",
      },
      {
        jurusan_id: "1653",
        name: "S.M Sastra Lain-lain",
      },
      {
        jurusan_id: "1654",
        name: "S.M Sastra Lingusitik Inggris",
      },
      {
        jurusan_id: "1655",
        name: "S.M Sastra Sesusasteraan Syariah",
      },
      {
        jurusan_id: "1656",
        name: "S.M Sastra dan Filsafat",
      },
      {
        jurusan_id: "1657",
        name: "S.M Sastra Indonesianologi",
      },
      {
        jurusan_id: "1658",
        name: "S.M Sastra Etnomusicologi",
      },
      {
        jurusan_id: "1659",
        name: "S.M Sastra Musik",
      },
      {
        jurusan_id: "1660",
        name: "S.M Sastra Seni Rupa",
      },
      {
        jurusan_id: "1661",
        name: "S.M Sastra Seni Lukis",
      },
      {
        jurusan_id: "1662",
        name: "S.M Sastra Desain Tekstil",
      },
      {
        jurusan_id: "1663",
        name: "S.M Sastra Desain Grafis",
      },
      {
        jurusan_id: "1664",
        name: "S.M Sastra Perpustakaan",
      },
      {
        jurusan_id: "1665",
        name: "S.M Hukum",
      },
      {
        jurusan_id: "1666",
        name: "S.M Hukum Kenegaraan",
      },
      {
        jurusan_id: "1667",
        name: "S.M Hukum Adat",
      },
      {
        jurusan_id: "1668",
        name: "S.M Hukum Perundang-undangan",
      },
      {
        jurusan_id: "1669",
        name: "S.M Hukum Ilmu Hukum",
      },
      {
        jurusan_id: "1670",
        name: "S.M Hukum Tata Hukum",
      },
      {
        jurusan_id: "1671",
        name: "S.M Hukum Umum",
      },
      {
        jurusan_id: "1672",
        name: "S.M Hukum Keperdataan",
      },
      {
        jurusan_id: "1673",
        name: "S.M Hukum Perdata Adat",
      },
      {
        jurusan_id: "1674",
        name: "S.M Hukum Perdata Internasional",
      },
      {
        jurusan_id: "1675",
        name: "S.M Hukum Perdata Pidana",
      },
      {
        jurusan_id: "1676",
        name: "S.M Hukum Perdata Umum",
      },
      {
        jurusan_id: "1677",
        name: "S.M Hukum Studi Hukum Perdata",
      },
      {
        jurusan_id: "1678",
        name: "S.M Hukum Hukum Perdata",
      },
      {
        jurusan_id: "1679",
        name: "S.M Hukum Perdata BW",
      },
      {
        jurusan_id: "1680",
        name: "S.M Hukum Studi Hukum PI dan A",
      },
      {
        jurusan_id: "1681",
        name: "S.M Hukum Islam",
      },
      {
        jurusan_id: "1682",
        name: "S.M Hukum Hukum Sipil",
      },
      {
        jurusan_id: "1683",
        name: "S.M Hukum Agraria",
      },
      {
        jurusan_id: "1684",
        name: "S.M Hukum Sosial Agraria",
      },
      {
        jurusan_id: "1685",
        name: "S.M Hukum Dagang",
      },
      {
        jurusan_id: "1686",
        name: "S.M Hukum Notariat",
      },
      {
        jurusan_id: "1687",
        name: "S.M Hukum Administrasi",
      },
      {
        jurusan_id: "1688",
        name: "S.M Hukum Pemda dan Keswatantraan",
      },
      {
        jurusan_id: "1689",
        name: "S.M Hukum Penerbangan",
      },
      {
        jurusan_id: "1690",
        name: "S.M Hukum Perburuhan",
      },
      {
        jurusan_id: "1691",
        name: "S.M Hukum Tata Negara",
      },
      {
        jurusan_id: "1692",
        name: "S.M Hukum Tata Pemerintahan",
      },
      {
        jurusan_id: "1693",
        name: "S.M Hukum Kenegaraan",
      },
      {
        jurusan_id: "1694",
        name: "S.M Hukum Tata Negara",
      },
      {
        jurusan_id: "1695",
        name: "S.M Hukum Ketatanegaraan",
      },
      {
        jurusan_id: "1696",
        name: "S.M Hukum Internasional",
      },
      {
        jurusan_id: "1697",
        name: "S.M Hukum Laut Internasional",
      },
      {
        jurusan_id: "1698",
        name: "S.M Hukum Perjanjian Internasional",
      },
      {
        jurusan_id: "1699",
        name: "S.M Hukum Kemasyarakatan dan Pembangunan",
      },
      {
        jurusan_id: "1700",
        name: "S.M Hukum Ekonomi",
      },
      {
        jurusan_id: "1701",
        name: "S.M Hukum Ilmu Kemasyarakatan",
      },
      {
        jurusan_id: "1702",
        name: "S.M Hukum Masyarakat dan Pembangunan",
      },
      {
        jurusan_id: "1703",
        name: "S.M Hukum Puspenmas",
      },
      {
        jurusan_id: "1704",
        name: "S.M Hukum Acara",
      },
      {
        jurusan_id: "1705",
        name: "S.M Hukum Acara Pidana",
      },
      {
        jurusan_id: "1706",
        name: "S.M Hukum Peradilan Perdata",
      },
      {
        jurusan_id: "1707",
        name: "S.M Hukum Praktisi Hukum",
      },
      {
        jurusan_id: "1708",
        name: "S.M Hukum Pidana",
      },
      {
        jurusan_id: "1709",
        name: "S.M Hukum Kepidanaan",
      },
      {
        jurusan_id: "1710",
        name: "S.M Hukum Kriminologi",
      },
      {
        jurusan_id: "1711",
        name: "S.M Administrasi",
      },
      {
        jurusan_id: "1712",
        name: "S.M Administrasi Negara",
      },
      {
        jurusan_id: "1713",
        name: "S.M Administrasi Niaga",
      },
      {
        jurusan_id: "1714",
        name: "S.M Administrasi Pendidikan",
      },
      {
        jurusan_id: "1715",
        name: "S.M Administrasi Ketatanegaraan",
      },
      {
        jurusan_id: "1716",
        name: "S.M Administrasi Keuangan",
      },
      {
        jurusan_id: "1717",
        name: "S.M Administrasi Komunikasi",
      },
      {
        jurusan_id: "1718",
        name: "S.M Administrasi Publisis/Jurnalistik",
      },
      {
        jurusan_id: "1719",
        name: "S.M Administrasi Manajemen",
      },
      {
        jurusan_id: "1720",
        name: "S.M Administrasi Manajemen Keuangan",
      },
      {
        jurusan_id: "1721",
        name: "S.M Administrasi Manajemen Produksi",
      },
      {
        jurusan_id: "1722",
        name: "S.M Administrasi Pemerintahan Umum",
      },
      {
        jurusan_id: "1723",
        name: "S.M Administrasi Sosiologi",
      },
      {
        jurusan_id: "1724",
        name: "S.M Psikologi",
      },
      {
        jurusan_id: "1725",
        name: "S.M Psikologi Anak dan Perkembangan",
      },
      {
        jurusan_id: "1726",
        name: "S.M Psikologi Pendidikan",
      },
      {
        jurusan_id: "1727",
        name: "S.M Psikologi Klinis",
      },
      {
        jurusan_id: "1728",
        name: "S.M Psikologi Botani",
      },
      {
        jurusan_id: "1729",
        name: "S.M Psikologi Zoologi",
      },
      {
        jurusan_id: "1730",
        name: "S.M Psikologi Sosial",
      },
      {
        jurusan_id: "1731",
        name: "S.M Psikologi Eksperimen",
      },
      {
        jurusan_id: "1732",
        name: "S.M Psikologi Industri dan Organisasi",
      },
      {
        jurusan_id: "1733",
        name: "S.M Psikologi Perusahaan",
      },
      {
        jurusan_id: "1734",
        name: "S.M Psikologi Industri",
      },
      {
        jurusan_id: "1735",
        name: "S.M Kemasyarakatan",
      },
      {
        jurusan_id: "1736",
        name: "S.M Administrasi Kesehatan Masyarakat",
      },
      {
        jurusan_id: "1737",
        name: "S.M Kesehatan Epidemiologi",
      },
      {
        jurusan_id: "1738",
        name: "S.M Kependudukan dan Statistik",
      },
      {
        jurusan_id: "1739",
        name: "S.M Kesehatan dan Lingkungan Kerja",
      },
      {
        jurusan_id: "1740",
        name: "S.M Pendidikan Kesehatan Masyarakat",
      },
      {
        jurusan_id: "1741",
        name: "S.M Agama Ushuluddin",
      },
      {
        jurusan_id: "1742",
        name: "S.M Ushuluddin Aqodah dan Filsafat",
      },
      {
        jurusan_id: "1743",
        name: "S.M Ushuluddin Dakwah",
      },
      {
        jurusan_id: "1744",
        name: "S.M Ushuluddin Filsafat",
      },
      {
        jurusan_id: "1745",
        name: "S.M Ushuluddin Ilmu Agama",
      },
      {
        jurusan_id: "1746",
        name: "S.M Ushuluddin Pendidikan",
      },
      {
        jurusan_id: "1747",
        name: "S.M Ushuluddin Perbandingan Agama",
      },
      {
        jurusan_id: "1748",
        name: "S.M Ushuluddin Tauhid",
      },
      {
        jurusan_id: "1749",
        name: "S.M Agama Ushuluddin",
      },
      {
        jurusan_id: "1750",
        name: "S.M Agama Arab",
      },
      {
        jurusan_id: "1751",
        name: "S.M Agama Adab Dakwah",
      },
      {
        jurusan_id: "1752",
        name: "S.M Agama Adab Sastra Arab",
      },
      {
        jurusan_id: "1753",
        name: "S.M Agama Adab Sejarah dan Kebudayaan Islam",
      },
      {
        jurusan_id: "1754",
        name: "S.M Tarbiyah",
      },
      {
        jurusan_id: "1755",
        name: "S.M Agama Tarbiyah Bahasa Arab",
      },
      {
        jurusan_id: "1756",
        name: "S.M Agama Tarbiyah Bahasa Indonesia",
      },
      {
        jurusan_id: "1757",
        name: "S.M Agama Tarbiyah Bahasa Inggris",
      },
      {
        jurusan_id: "1758",
        name: "S.M Tarbiyah Bimbingan Penyuluhan",
      },
      {
        jurusan_id: "1759",
        name: "S.M Agama Tarbiyah Dakwah",
      },
      {
        jurusan_id: "1760",
        name: "S.M Agama Tarbiyah Ilmu Agama",
      },
      {
        jurusan_id: "1761",
        name: "S.M Agama Ketatanegaraan/Niaga",
      },
      {
        jurusan_id: "1762",
        name: "S.M Tarbiyah Paedogogik",
      },
      {
        jurusan_id: "1763",
        name: "S.M Tarbiyah Pendidikan",
      },
      {
        jurusan_id: "1764",
        name: "S.M Tarbiyah Pendidikan Kemasyarakatan",
      },
      {
        jurusan_id: "1765",
        name: "S.M Tarbiyah Tadris",
      },
      {
        jurusan_id: "1766",
        name: "S.M Tarbiyah - Tarbiyah",
      },
      {
        jurusan_id: "1767",
        name: "S.M Agama Syariah",
      },
      {
        jurusan_id: "1768",
        name: "S.M Syariah Ekonomi (Muamalat)",
      },
      {
        jurusan_id: "1769",
        name: "S.M Syariah Filsafat",
      },
      {
        jurusan_id: "1770",
        name: "S.M Syariah Hukum Islam",
      },
      {
        jurusan_id: "1771",
        name: "S.M Syariah Pendidikan",
      },
      {
        jurusan_id: "1772",
        name: "S.M Syariah Pengadilan Agama",
      },
      {
        jurusan_id: "1773",
        name: "S.M Syariah Perbandingan Agama",
      },
      {
        jurusan_id: "1774",
        name: "S.M Syariah Perdata",
      },
      {
        jurusan_id: "1775",
        name: "S.M Syariah PI dan A (Jinayat)",
      },
      {
        jurusan_id: "1776",
        name: "S.M Syariah Qodhlo",
      },
      {
        jurusan_id: "1777",
        name: "S.M Syariah Sejarah",
      },
      {
        jurusan_id: "1778",
        name: "S.M Syariah Sosial",
      },
      {
        jurusan_id: "1779",
        name: "S.M Syariah",
      },
      {
        jurusan_id: "1780",
        name: "S.M Syariah Tafsif dan Hadist",
      },
      {
        jurusan_id: "1781",
        name: "S.M Agama Syariah Hukum Agama",
      },
      {
        jurusan_id: "1782",
        name: "S.M Agama Dakwah",
      },
      {
        jurusan_id: "1783",
        name: "S.M Agama Dakwah",
      },
      {
        jurusan_id: "1784",
        name: "S.M Agama Dakwah Jurnalistik",
      },
      {
        jurusan_id: "1785",
        name: "S.M Agama Dakwah Publistik",
      },
      {
        jurusan_id: "1786",
        name: "S.M Agama Dakwah Retorika",
      },
      {
        jurusan_id: "1787",
        name: "S.M Hindu Dharma",
      },
      {
        jurusan_id: "1788",
        name: "S.M Budha",
      },
      {
        jurusan_id: "1789",
        name: "S.M Seminari",
      },
      {
        jurusan_id: "1790",
        name: "S.M Seminari Alkitab",
      },
      {
        jurusan_id: "1791",
        name: "S.M Theologi",
      },
      {
        jurusan_id: "1792",
        name: "S.M Theologi Filsafat",
      },
      {
        jurusan_id: "1793",
        name: "S.M Theologi Kataketik",
      },
      {
        jurusan_id: "1794",
        name: "S.M Theologi Agama Katholik",
      },
      {
        jurusan_id: "1795",
        name: "S.M Theologi Agama Protestan",
      },
      {
        jurusan_id: "1796",
        name: "S.M Theologi Agama dan Theologi",
      },
      {
        jurusan_id: "1797",
        name: "S.M Theologi Filsafat Theologi",
      },
      {
        jurusan_id: "1798",
        name: "S.M Theologi Penerangan Agama Kristen",
      },
      {
        jurusan_id: "1799",
        name: "S.M Ilmu Pemerintahan",
      },
      {
        jurusan_id: "1800",
        name: "S.M Ilmu Pemerintahan",
      },
      {
        jurusan_id: "1801",
        name: "S.M UPN Veteran",
      },
      {
        jurusan_id: "1802",
        name: "S.M UPN Geologi",
      },
      {
        jurusan_id: "1803",
        name: "S.M UPN Perminyakan",
      },
      {
        jurusan_id: "1804",
        name: "S.M UPN Tambang Umum",
      },
      {
        jurusan_id: "1805",
        name: "S.M Sosial Politik",
      },
      {
        jurusan_id: "1806",
        name: "S.M Sosial Politik Umum",
      },
      {
        jurusan_id: "1807",
        name: "S.M Sosial Politik Ilmu Politik",
      },
      {
        jurusan_id: "1808",
        name: "S.M Sosial Politik Ilmu Sosial Politik",
      },
      {
        jurusan_id: "1809",
        name: "S.M Sosial Politik Pemerintahan",
      },
      {
        jurusan_id: "1810",
        name: "S.M Sosial Politik Ketatanegaraan",
      },
      {
        jurusan_id: "1811",
        name: "S.M Sosial Politik Tata Negara",
      },
      {
        jurusan_id: "1812",
        name: "S.M Sosial Politik Administrasi Pemerintahan",
      },
      {
        jurusan_id: "1813",
        name: "S.M Sosial Politik Sosial Ekonomi",
      },
      {
        jurusan_id: "1814",
        name: "S.M Sosial Politik Ilmu Pemerintahan",
      },
      {
        jurusan_id: "1815",
        name: "S.M Sosial Politik Hubungan Internasional",
      },
      {
        jurusan_id: "1816",
        name: "S.M Sosial PolitikK Sosiatri",
      },
      {
        jurusan_id: "1817",
        name: "S.M Sosial Politik Psikologi",
      },
      {
        jurusan_id: "1818",
        name: "S.M Sosial Politik Sosiologi",
      },
      {
        jurusan_id: "1819",
        name: "S.M Sosial Politik Filsafat",
      },
      {
        jurusan_id: "1820",
        name: "S.M Sosial Politik Pengetahuan Sosial",
      },
      {
        jurusan_id: "1821",
        name: "S.M Sosial Politik Psikologi Sosial",
      },
      {
        jurusan_id: "1822",
        name: "S.M Sosial Politik Studi Sosiatri",
      },
      {
        jurusan_id: "1823",
        name: "S.M Sosial Politik Antropologi Budaya",
      },
      {
        jurusan_id: "1824",
        name: "S.M Sosial Politik Kesejahteraan Sosial",
      },
      {
        jurusan_id: "1825",
        name: "S.M Sosial Politik Kriminologi",
      },
      {
        jurusan_id: "1826",
        name: "S.M Sosial Politik Antropologi",
      },
      {
        jurusan_id: "1827",
        name: "S.M. Sosial Politik Sejarah dan Arkeologi",
      },
      {
        jurusan_id: "1828",
        name: "S.M Sosial Politik Administrasi Negara",
      },
      {
        jurusan_id: "1829",
        name: "S.M Sosial Politik Administrasi Fiskal",
      },
      {
        jurusan_id: "1830",
        name: "S.M Sosial Politik Administrasi",
      },
      {
        jurusan_id: "1831",
        name: "S.M Sosial Politik Administrasi Niaga",
      },
      {
        jurusan_id: "1832",
        name: "S.M Sosial Politik Ketataniagaan",
      },
      {
        jurusan_id: "1833",
        name: "S.M Sosial Politik Manajemen Personalia",
      },
      {
        jurusan_id: "1834",
        name: "S.M Sosial Politik Publik Administrasi",
      },
      {
        jurusan_id: "1835",
        name: "S.M Sosial Politik Administrasi Pembangunan",
      },
      {
        jurusan_id: "1836",
        name: "S.M Sosial Politik Administrasi Kepegawaian",
      },
      {
        jurusan_id: "1837",
        name: "S.M Sosial Politik Hubungan Masyarakat",
      },
      {
        jurusan_id: "1838",
        name: "S.M Sosial Politik Komunikasi",
      },
      {
        jurusan_id: "1839",
        name: "S.M Sosial Politik Publistik",
      },
      {
        jurusan_id: "1840",
        name: "S.M Sosial Politik Komunikasi Massa",
      },
      {
        jurusan_id: "1841",
        name: "S.M Sosial Politik Jurnalistik",
      },
      {
        jurusan_id: "1842",
        name: "S.M Sosial Politik Penrangan/Propaganda",
      },
      {
        jurusan_id: "1843",
        name: "S.M Sosial Politik Komunikasi Sosial",
      },
      {
        jurusan_id: "1844",
        name: "S.M Sosial Politik Penerangan",
      },
      {
        jurusan_id: "1845",
        name: "S.M Sosial Politik Perpustakaan",
      },
      {
        jurusan_id: "1846",
        name: "S.M Kesejahteraan Sosial",
      },
      {
        jurusan_id: "1847",
        name: "S.M Kesejahteraan Sosial Umum",
      },
      {
        jurusan_id: "1848",
        name: "S.M Kesejahteraan Sosial Pekerja Sosial",
      },
      {
        jurusan_id: "1849",
        name: "S.M Komputer",
      },
      {
        jurusan_id: "1850",
        name: "S.M Komputer Aplikasi",
      },
      {
        jurusan_id: "1851",
        name: "S.M Komputer Informatika",
      },
      {
        jurusan_id: "1852",
        name: "S.M Komputer Programmer",
      },
      {
        jurusan_id: "1853",
        name: "S.M Komputer Teknik",
      },
      {
        jurusan_id: "1854",
        name: "S.M Komputer Teknik Elektronika",
      },
      {
        jurusan_id: "1855",
        name: "S.M Statistik",
      },
      {
        jurusan_id: "1856",
        name: "S.M Statistik",
      },
      {
        jurusan_id: "1857",
        name: "S.M Statistik Matematika",
      },
      {
        jurusan_id: "1858",
        name: "S.M Komunikasi",
      },
      {
        jurusan_id: "1859",
        name: "S.M Komunikasi Jurnalistik",
      },
      {
        jurusan_id: "1860",
        name: "S.M Komunikasi Hubungan Internasional",
      },
      {
        jurusan_id: "1861",
        name: "S.M Komunikasi Hubungan Masyarakat",
      },
      {
        jurusan_id: "1862",
        name: "S.M Komunikasi Publistik",
      },
      {
        jurusan_id: "1863",
        name: "S.M Komunikasi",
      },
      {
        jurusan_id: "1864",
        name: "S.M Komunikasi Massa",
      },
      {
        jurusan_id: "1865",
        name: "S.M Komunikasi Kesehatan Masyarakat",
      },
      {
        jurusan_id: "1866",
        name: "S.M. Komunikasi Ilmu Perpustakaan",
      },
      {
        jurusan_id: "1867",
        name: "S.M. Komunikasi Ilmu Penerangan",
      },
      {
        jurusan_id: "1868",
        name: "S.m Publisistik",
      },
      {
        jurusan_id: "1869",
        name: "S.M Publistik Purel.",
      },
      {
        jurusan_id: "1870",
        name: "S.M Publistik Jurnalistik",
      },
      {
        jurusan_id: "1871",
        name: "S.M. Publistik Komunikasi Massa",
      },
      {
        jurusan_id: "1872",
        name: "S.M Publistik",
      },
      {
        jurusan_id: "1873",
        name: "S.M Publistik Sosiologi",
      },
      {
        jurusan_id: "1874",
        name: "S.M Publistik Penerangan",
      },
      {
        jurusan_id: "1875",
        name: "S.M. Publistik Kemasyarakatan",
      },
      {
        jurusan_id: "1876",
        name: "S.M Publistik Kehumasan",
      },
      {
        jurusan_id: "1877",
        name: "S.M Publistik Komunikasi",
      },
      {
        jurusan_id: "1878",
        name: "S.m Filsafat",
      },
      {
        jurusan_id: "1879",
        name: "S.M Filsafat Timur",
      },
      {
        jurusan_id: "1880",
        name: "S.M Filsafat Barat",
      },
      {
        jurusan_id: "1881",
        name: "S.M Filsafat Indonesia",
      },
      {
        jurusan_id: "1882",
        name: "S.M Filsafat Pancasila",
      },
      {
        jurusan_id: "1883",
        name: "S.M Filsafat Sejarah Filsafat",
      },
      {
        jurusan_id: "1884",
        name: "S.M Filsafat Sosiologi",
      },
      {
        jurusan_id: "1885",
        name: "S.M Filsafat Theologi",
      },
      {
        jurusan_id: "1886",
        name: "S.M Keuangan",
      },
      {
        jurusan_id: "1887",
        name: "S.M Keuangan Administrasi Keuangan",
      },
      {
        jurusan_id: "1888",
        name: "S.M Keuangan Akutansi",
      },
      {
        jurusan_id: "1889",
        name: "S.M Keuangan Bea dan Cukai",
      },
      {
        jurusan_id: "1890",
        name: "S.M Keuangan Kebendaharaan",
      },
      {
        jurusan_id: "1891",
        name: "S.M Keuangan Kesekretariatan",
      },
      {
        jurusan_id: "1892",
        name: "S.M Keuangan Negara",
      },
      {
        jurusan_id: "1893",
        name: "S.M Keuangan Pajak Umum",
      },
      {
        jurusan_id: "1894",
        name: "S.M Keuangan Theasuri Negara",
      },
      {
        jurusan_id: "1895",
        name: "S.M Koperasi",
      },
      {
        jurusan_id: "1896",
        name: "S.M Koperasi Manajemen Pemasaran",
      },
      {
        jurusan_id: "1897",
        name: "S.M. Koperasi Manajemen Pembelanjaan",
      },
      {
        jurusan_id: "1898",
        name: "S.M Koperasi Manajemen Perbankan",
      },
      {
        jurusan_id: "1899",
        name: "S.M Biologi",
      },
      {
        jurusan_id: "1900",
        name: "S.M Biologi Botani",
      },
      {
        jurusan_id: "1901",
        name: "S.M. Biologi Psikologi Tumbuhan",
      },
      {
        jurusan_id: "1902",
        name: "S.M Biologi Ekologi",
      },
      {
        jurusan_id: "1903",
        name: "S.M Biologi Genetika",
      },
      {
        jurusan_id: "1904",
        name: "S.M Biologi Hidro Biologi",
      },
      {
        jurusan_id: "1905",
        name: "S.M Biologi Mikrobiologi",
      },
      {
        jurusan_id: "1906",
        name: "S.M Biologi Radiobiologi",
      },
      {
        jurusan_id: "1907",
        name: "S.M Biologi Toxycologi",
      },
      {
        jurusan_id: "1908",
        name: "S.M Biologi Zoologi",
      },
      {
        jurusan_id: "1909",
        name: "S.M Geografi",
      },
      {
        jurusan_id: "1910",
        name: "S.M Geografi Alam",
      },
      {
        jurusan_id: "1911",
        name: "S.M Geografi Fisika",
      },
      {
        jurusan_id: "1912",
        name: "S.M Geografi Geomorfologi",
      },
      {
        jurusan_id: "1913",
        name: "S.M Geografi Hidrologi",
      },
      {
        jurusan_id: "1914",
        name: "S.M Geografi Kartografi",
      },
      {
        jurusan_id: "1915",
        name: "S.M Geografi Morfologi",
      },
      {
        jurusan_id: "1916",
        name: "S.M Geografi Sumber Daya",
      },
      {
        jurusan_id: "1917",
        name: "S.M. Geografi Tambang/Metalurgi",
      },
      {
        jurusan_id: "1918",
        name: "S.M Geografi Demografi",
      },
      {
        jurusan_id: "1919",
        name: "S.M Geografi Ekonomi",
      },
      {
        jurusan_id: "1920",
        name: "S.M Geografi Manusia",
      },
      {
        jurusan_id: "1921",
        name: "S.M. Geografi Penduduk dan Demografi",
      },
      {
        jurusan_id: "1922",
        name: "S.M. Geografi Penginderaan Jauh",
      },
      {
        jurusan_id: "1923",
        name: "S.M. Geografi Regional dan Politik",
      },
      {
        jurusan_id: "1924",
        name: "S.M Geografi Sosial",
      },
      {
        jurusan_id: "1925",
        name: "Bakaloreat",
      },
      {
        jurusan_id: "1926",
        name: "Akademi",
      },
      {
        jurusan_id: "1927",
        name: "AKADEMIK PENILIK KESEHATAN",
      },
      {
        jurusan_id: "1928",
        name: "Akademi Analisis Medis",
      },
      {
        jurusan_id: "1929",
        name: "Akademi Analisis Kesehatan",
      },
      {
        jurusan_id: "1930",
        name: "Akademi Anestei",
      },
      {
        jurusan_id: "1931",
        name: "Akademi Elektromedis",
      },
      {
        jurusan_id: "1932",
        name: "Akademi Teknik Elektro Medik",
      },
      {
        jurusan_id: "1933",
        name: "Akademi Farmasi",
      },
      {
        jurusan_id: "1934",
        name: "Akademi Farmasi Apoteker",
      },
      {
        jurusan_id: "1935",
        name: "Akademi Ilmu Gizi",
      },
      {
        jurusan_id: "1936",
        name: "Akademi Kimia Analis",
      },
      {
        jurusan_id: "1937",
        name: "Akademi Kimia Analis Kimia Analis",
      },
      {
        jurusan_id: "1938",
        name: "Akademi Kimia Analis Kimia",
      },
      {
        jurusan_id: "1939",
        name: "Akademi Kimia Analis Kimia Analiti",
      },
      {
        jurusan_id: "1940",
        name: "Akademi Nutrisionis",
      },
      {
        jurusan_id: "1941",
        name: "Akademi Physioterapi",
      },
      {
        jurusan_id: "1942",
        name: "Akademi Perawat Anak",
      },
      {
        jurusan_id: "1943",
        name: "Akademi Perawat Gigi",
      },
      {
        jurusan_id: "1944",
        name: "Akademi Penata Rontgen",
      },
      {
        jurusan_id: "1945",
        name: "Akademi Teknik Rontgen",
      },
      {
        jurusan_id: "1946",
        name: "Akademi Perawat",
      },
      {
        jurusan_id: "1947",
        name: "Akademi Perawat Guru Bidan",
      },
      {
        jurusan_id: "1948",
        name: "Akademi Keperawatan",
      },
      {
        jurusan_id: "1949",
        name: "Akademi Perawat Umum",
      },
      {
        jurusan_id: "1950",
        name: "Akademi Perawat Guru Perawat",
      },
      {
        jurusan_id: "1951",
        name: "Akademi Kebidanan",
      },
      {
        jurusan_id: "1952",
        name: "Akademi Ilmu Hukum",
      },
      {
        jurusan_id: "1953",
        name: "Akademi Hukum Militer",
      },
      {
        jurusan_id: "1954",
        name: "Akademi Ilmu Pemasyarakatan",
      },
      {
        jurusan_id: "1955",
        name: "Akademi Imigrasi",
      },
      {
        jurusan_id: "1956",
        name: "Akademi Kehakiman",
      },
      {
        jurusan_id: "1957",
        name: "Akademi Ilmu Sosial ILMU SOSIAL",
      },
      {
        jurusan_id: "1958",
        name: "Akademi Pendidikan Kesejahteraan Sosial",
      },
      {
        jurusan_id: "1959",
        name: "Akademi Kesejahteraan Sosial",
      },
      {
        jurusan_id: "1960",
        name: "Akademi Pendidikan Pekerjaan Sosial",
      },
      {
        jurusan_id: "1961",
        name: "Akademi Pendidikan Pekerjaan Sosial",
      },
      {
        jurusan_id: "1962",
        name: "Akademi Ilmu Ekonomi",
      },
      {
        jurusan_id: "1963",
        name: "Akademi Akutansi Dalam Ilmu Ekonomi",
      },
      {
        jurusan_id: "1964",
        name: "Akademi Akutansi",
      },
      {
        jurusan_id: "1965",
        name: "Akademi Akutansi & Manajemen",
      },
      {
        jurusan_id: "1966",
        name: "Akademi Akutansi dan Majanemen Akuntan",
      },
      {
        jurusan_id: "1967",
        name: "Akademi Ajun Akuntan",
      },
      {
        jurusan_id: "1968",
        name: "Akademi Pimpinan Perusahaan",
      },
      {
        jurusan_id: "1969",
        name: "Akademi Pimpinan Perusahaan & Manajemen",
      },
      {
        jurusan_id: "1970",
        name: "Akademi Kepemimpinan Niaga",
      },
      {
        jurusan_id: "1971",
        name: "Akademi Kepemimpinan Niaga Keuangan",
      },
      {
        jurusan_id: "1972",
        name: "Akademi Kepemimpinan Niaga Administrasi Negara",
      },
      {
        jurusan_id: "1973",
        name: "Akademi Kepemimpinan Niaga Keuangan dan Perbankan",
      },
      {
        jurusan_id: "1974",
        name: "Akademi Kepemimpinan Tata Niaga",
      },
      {
        jurusan_id: "1975",
        name: "Akademi Administrasi Pembangun Administrasi Negara",
      },
      {
        jurusan_id: "1976",
        name: "Akademi Administrasi Pembangunan",
      },
      {
        jurusan_id: "1977",
        name: "Akademi Administrasi & Keuangan .",
      },
      {
        jurusan_id: "1978",
        name: "Akademi Ilmu  Keuangan",
      },
      {
        jurusan_id: "1979",
        name: "Akademi Ilmu Keuangan Bisnis Manajemen",
      },
      {
        jurusan_id: "1980",
        name: "Akademi Ilmu",
      },
      {
        jurusan_id: "1981",
        name: "Akademi Ilmu Keuangan dan Perbankan",
      },
      {
        jurusan_id: "1982",
        name: "Akademi Administrasi Niaga",
      },
      {
        jurusan_id: "1983",
        name: "Akademi Administrasi Niaga Administrasi",
      },
      {
        jurusan_id: "1984",
        name: "Akademi Administrasi Niaga & Keuangan",
      },
      {
        jurusan_id: "1985",
        name: "Akademi Administrasi Niaga & Administrasi Negara",
      },
      {
        jurusan_id: "1986",
        name: "Akademi Administrasi Niaga Administrasi Perusahaan",
      },
      {
        jurusan_id: "1987",
        name: "Akademi Administrasi Niaga Akunting",
      },
      {
        jurusan_id: "1988",
        name: "Akademi Administrasi Niaga Kepegawaian",
      },
      {
        jurusan_id: "1990",
        name: "Akademi Administrasi Niaga Keuangan",
      },
      {
        jurusan_id: "1991",
        name: "Akademi Administrasi Niaga Keuangan dan Perbangkan",
      },
      {
        jurusan_id: "1992",
        name: "Akademi Administrasi Niaga Manaj. Umum",
      },
      {
        jurusan_id: "1993",
        name: "Akademi Administrasi Manaj.Kantor",
      },
      {
        jurusan_id: "1994",
        name: "Akademi Administrasi Niaga Statistik",
      },
      {
        jurusan_id: "1995",
        name: "Akademi Administrasi Niaga Umum",
      },
      {
        jurusan_id: "1996",
        name: "Akademi Administrasi Niaga Akutansi",
      },
      {
        jurusan_id: "1997",
        name: "Akademi Administrasi Niaga Perbankan",
      },
      {
        jurusan_id: "1998",
        name: "Akademi Administrasi Negara",
      },
      {
        jurusan_id: "1999",
        name: "Akademi Administrasi Akutansi Negara",
      },
      {
        jurusan_id: "2000",
        name: "Akademi Administrasi Negara Kesekretariatan",
      },
      {
        jurusan_id: "2001",
        name: "Akademi Administrasi Negara",
      },
      {
        jurusan_id: "2002",
        name: "Akademi Administrasi Niaga Negara",
      },
      {
        jurusan_id: "2003",
        name: "Akademi Administrasi Negara Sosial",
      },
      {
        jurusan_id: "2004",
        name: "Akademi Administrasi Negara Umum",
      },
      {
        jurusan_id: "2005",
        name: "Akademi Keuangan",
      },
      {
        jurusan_id: "2006",
        name: "Akademi Keuangan Akutansi",
      },
      {
        jurusan_id: "2007",
        name: "Akademi Keuangan Perbankan",
      },
      {
        jurusan_id: "2008",
        name: "Akademi Keu. Akutansi/Perbankan",
      },
      {
        jurusan_id: "2009",
        name: "Akademi Keuangan & Perbankan",
      },
      {
        jurusan_id: "2010",
        name: "Akademi Theasuri Negara",
      },
      {
        jurusan_id: "2011",
        name: "Akademi Perbankan",
      },
      {
        jurusan_id: "2012",
        name: "Akademi Bank Ketatalaksanaan Perbankan",
      },
      {
        jurusan_id: "2013",
        name: "Akademi Pajak & Pabean",
      },
      {
        jurusan_id: "2014",
        name: "Akademi Manajemen",
      },
      {
        jurusan_id: "2015",
        name: "Akademi Manajemen Perbendaharaan",
      },
      {
        jurusan_id: "2016",
        name: "Akademi Manajemen Keuangan",
      },
      {
        jurusan_id: "2017",
        name: "Akademi Akutansi dan Perbankan Keuangan",
      },
      {
        jurusan_id: "2018",
        name: "Akademi Akutansi & Perbankan",
      },
      {
        jurusan_id: "2019",
        name: "Akademi Asuransi & Perbankan",
      },
      {
        jurusan_id: "2020",
        name: "Akademi Bank & Uang",
      },
      {
        jurusan_id: "2021",
        name: "Akademi Bank & Uang Akutansi",
      },
      {
        jurusan_id: "2022",
        name: "Akademi Ekonomi Keuangan dan Perbankan",
      },
      {
        jurusan_id: "2023",
        name: "Akademi Bank dan Uang Keuangan dan Perbankan",
      },
      {
        jurusan_id: "2024",
        name: "Akademi Bank & Uang Manaj.",
      },
      {
        jurusan_id: "2025",
        name: "Akademi Keuangan & Pajak",
      },
      {
        jurusan_id: "2026",
        name: "Akademi Keu. dan Pajak Kebendaharaan",
      },
      {
        jurusan_id: "2027",
        name: "Akademi Keuangan dan Pajak Akutansi Pajak",
      },
      {
        jurusan_id: "2028",
        name: "Akademi Keuangan & Pajak Keuangan",
      },
      {
        jurusan_id: "2029",
        name: "Akademi Keuangan dan Pajak Perbendaharaan Umum",
      },
      {
        jurusan_id: "2030",
        name: "Akademi Perpajakan dan Keuangan",
      },
      {
        jurusan_id: "2031",
        name: "Akademi Keuangan & Pajak Umum",
      },
      {
        jurusan_id: "2032",
        name: "Akademi Perniagaan dan Perindustrian",
      },
      {
        jurusan_id: "2033",
        name: "Akademi PAAP",
      },
      {
        jurusan_id: "2034",
        name: "Akademi PAAP Administrasi Keuangan",
      },
      {
        jurusan_id: "2035",
        name: "Akademi PAAP Administrasi Pemasaran",
      },
      {
        jurusan_id: "2036",
        name: "Akademi PAAP Administrasi Perusahaan",
      },
      {
        jurusan_id: "2037",
        name: "Akademi PAAP Administrasi Sekretariat",
      },
      {
        jurusan_id: "2038",
        name: "Akademi PAAP Akutansi",
      },
      {
        jurusan_id: "2039",
        name: "Akademi PAAP Akutansi dan Perbankan",
      },
      {
        jurusan_id: "2040",
        name: "Akademi PAAP Ekonomi",
      },
      {
        jurusan_id: "2041",
        name: "Akademi PAAP Kepegawaian",
      },
      {
        jurusan_id: "2042",
        name: "Akademi PAAP Kesekretariatan",
      },
      {
        jurusan_id: "2043",
        name: "Akademi PAAP Keuangan",
      },
      {
        jurusan_id: "2044",
        name: "Akademi PAAP Keuangan & Pajak",
      },
      {
        jurusan_id: "2045",
        name: "Akademi PAAP Koperasi",
      },
      {
        jurusan_id: "2046",
        name: "Akademi PAAP Marketing",
      },
      {
        jurusan_id: "2047",
        name: "Akademi PAAP Manajemen & Bank",
      },
      {
        jurusan_id: "2048",
        name: "Akademi PAAP Pemasaran",
      },
      {
        jurusan_id: "2049",
        name: "Akademi PAAP Perusahaan",
      },
      {
        jurusan_id: "2050",
        name: "Akademi PAAP Sekretaris",
      },
      {
        jurusan_id: "2051",
        name: "Akademi PAAP Sipil",
      },
      {
        jurusan_id: "2052",
        name: "Akademi PAAP Tata Rias",
      },
      {
        jurusan_id: "2053",
        name: "Akademi Pemerintahan",
      },
      {
        jurusan_id: "2054",
        name: "Akademi Agraria",
      },
      {
        jurusan_id: "2055",
        name: "Akademi AGRARIA Land Use",
      },
      {
        jurusan_id: "2056",
        name: "Akademi Agraria Hak-Hak Tanah (PHT)",
      },
      {
        jurusan_id: "2057",
        name: "Akademi Agraria Pendaftaran Tanah",
      },
      {
        jurusan_id: "2058",
        name: "Akademi Tata  AGRARIA",
      },
      {
        jurusan_id: "2059",
        name: "Akademi Agraria Tata Guna Tanah",
      },
      {
        jurusan_id: "2060",
        name: "Akademi Pertambangan",
      },
      {
        jurusan_id: "2061",
        name: "Akademi Pembangunan Masyarakat Desa",
      },
      {
        jurusan_id: "2062",
        name: "Akademi Geologi dan Pertambangan Geologi",
      },
      {
        jurusan_id: "2063",
        name: "Akademi Geologi dan Pertambangan Fhotogra",
      },
      {
        jurusan_id: "2064",
        name: "Akademi Pertambangan Geologi Soft Rock",
      },
      {
        jurusan_id: "2065",
        name: "Akademi Geologi dan Pertambangan  Metalurgi",
      },
      {
        jurusan_id: "2066",
        name: "Akademi Geologi Pertambangan",
      },
      {
        jurusan_id: "2067",
        name: "Akademi Geologi dan Pertambangan",
      },
      {
        jurusan_id: "2068",
        name: "Akademi Geologi dan Pertambangan Tambang Eksplor",
      },
      {
        jurusan_id: "2069",
        name: "Akademi Geologi dan Pertambangan Tambang Umum",
      },
      {
        jurusan_id: "2070",
        name: "Akademi Minyak & Gas Bumi",
      },
      {
        jurusan_id: "2071",
        name: "Akademi Perminyakan",
      },
      {
        jurusan_id: "2072",
        name: "Akademi Perminyakan Prod. Supervisi",
      },
      {
        jurusan_id: "2073",
        name: "Akademi Kesra",
      },
      {
        jurusan_id: "2074",
        name: "Akademi Ilmu Rumah Tangga",
      },
      {
        jurusan_id: "2075",
        name: "Akademi Ilmu Rumga SAN&G&Tekstil",
      },
      {
        jurusan_id: "2076",
        name: "Akademi Kesejahteraan Kelurga",
      },
      {
        jurusan_id: "2077",
        name: "Akademi Kesejahgeraan Keluarga Tata Busana",
      },
      {
        jurusan_id: "2078",
        name: "Akademi Kesejahgeraan Keluarga Tata Boga",
      },
      {
        jurusan_id: "2079",
        name: "Akademi Dinas Pertanian",
      },
      {
        jurusan_id: "2080",
        name: "Akademi Perindustrian",
      },
      {
        jurusan_id: "2081",
        name: "Akademi Perindustrian Kimia Industri",
      },
      {
        jurusan_id: "2082",
        name: "Akademi Perindustrian Maintenance",
      },
      {
        jurusan_id: "2083",
        name: "Akademi Perindustrian Manajemen Industri",
      },
      {
        jurusan_id: "2084",
        name: "Akademi Perindustrian Teknik Industri",
      },
      {
        jurusan_id: "2085",
        name: "Akademi Perindustrian Teknik Kimia",
      },
      {
        jurusan_id: "2086",
        name: "Akademi Kimia Industri",
      },
      {
        jurusan_id: "2087",
        name: "Akademi Teknologi Kulit",
      },
      {
        jurusan_id: "2088",
        name: "Akademi Teknologi Kulit Bahan Jadi",
      },
      {
        jurusan_id: "2089",
        name: "Akademi Tekno.& Desain Kulit .",
      },
      {
        jurusan_id: "2090",
        name: "Akademi Tekno.Kulit Kimia Industri",
      },
      {
        jurusan_id: "2091",
        name: "Akademi Tekno.Indust.Manaj.Indust.",
      },
      {
        jurusan_id: "2092",
        name: "Akademi Teknologi Industri Mesin",
      },
      {
        jurusan_id: "2093",
        name: "Akademi Tekn.Indust.Monografi Indust",
      },
      {
        jurusan_id: "2094",
        name: "Akademi Tekn.Indust.Tek & Manaj.",
      },
      {
        jurusan_id: "2095",
        name: "Akademi Tekno. Indust.Tek.Indust.",
      },
      {
        jurusan_id: "2096",
        name: "Akademi Teknik Industri Teknik Kimia Analis",
      },
      {
        jurusan_id: "2097",
        name: "Akademi Teknologi Industri",
      },
      {
        jurusan_id: "2098",
        name: "Akademi Instrumentasi Nasional",
      },
      {
        jurusan_id: "2099",
        name: "Akademi Instumentasi Nasional GE",
      },
      {
        jurusan_id: "2100",
        name: "Akademi Instrumen Nasional Elektro",
      },
      {
        jurusan_id: "2101",
        name: "Akademi Instrumen Nasional Instrumen",
      },
      {
        jurusan_id: "2102",
        name: "Akademi Instrumen Nasional Instumen Elektro",
      },
      {
        jurusan_id: "2103",
        name: "Akademi Industri Nasional Instrumen Mekanika Logam",
      },
      {
        jurusan_id: "2104",
        name: "Akademi Instrumentasi Nasional Logam",
      },
      {
        jurusan_id: "2105",
        name: "Akademi Industri Logam",
      },
      {
        jurusan_id: "2106",
        name: "Akademi Industri Logam Manajemen Industri",
      },
      {
        jurusan_id: "2107",
        name: "Akademi Industri Logam Metalurgi",
      },
      {
        jurusan_id: "2108",
        name: "Akademi Industri Logam Teknik Industri",
      },
      {
        jurusan_id: "2109",
        name: "Akademi Industri & Niaga",
      },
      {
        jurusan_id: "2110",
        name: "Akademi Tekstil",
      },
      {
        jurusan_id: "2111",
        name: "Akademi Tekstil Pimpinan Perusahaan",
      },
      {
        jurusan_id: "2112",
        name: "Akademi Tekstil Kimia",
      },
      {
        jurusan_id: "2113",
        name: "Akademi Teknologi Tekstil",
      },
      {
        jurusan_id: "2114",
        name: "Akademi Manajemen Industri",
      },
      {
        jurusan_id: "2115",
        name: "Akademi Dinas Ilmu Perdagangan",
      },
      {
        jurusan_id: "2116",
        name: "Akademi Din. Ilmu Perdagangan Internasional",
      },
      {
        jurusan_id: "2117",
        name: "Akademi Perdagangan",
      },
      {
        jurusan_id: "2118",
        name: "Akademi Perhubungan",
      },
      {
        jurusan_id: "2119",
        name: "Ahli Mesin Kapal A",
      },
      {
        jurusan_id: "2120",
        name: "Akademi Angkutan Udara Niaga",
      },
      {
        jurusan_id: "2121",
        name: "Akademi Ilmu Pelayaran",
      },
      {
        jurusan_id: "2122",
        name: "Akademi Kereta Api",
      },
      {
        jurusan_id: "2123",
        name: "Akademi Lalu Lintas Jalan",
      },
      {
        jurusan_id: "2124",
        name: "Akademi Kemaritiman",
      },
      {
        jurusan_id: "2125",
        name: "Akademi Kemaritiman Nautika",
      },
      {
        jurusan_id: "2126",
        name: "Akademi Maritim Ahli Mesin Kapal",
      },
      {
        jurusan_id: "2127",
        name: "Akademi Kemaritiman Tata Laksana",
      },
      {
        jurusan_id: "2128",
        name: "Akademi Maritim Teknik Bangunan KAP",
      },
      {
        jurusan_id: "2129",
        name: "Akademi Maritim Teknik Mesin Umum",
      },
      {
        jurusan_id: "2130",
        name: "Akademi Meteorologi",
      },
      {
        jurusan_id: "2131",
        name: "Akademi Meteorologi Geofisika",
      },
      {
        jurusan_id: "2132",
        name: "Akademi Meteorologi Umum",
      },
      {
        jurusan_id: "2133",
        name: "Akademi Pelayaran Niaga",
      },
      {
        jurusan_id: "2134",
        name: "Akademi Pelayaran Niaga Nautika",
      },
      {
        jurusan_id: "2135",
        name: "Akademi Pelayaran Niaga Teknika",
      },
      {
        jurusan_id: "2136",
        name: "Akademi TT Laksana Pelayaran Niaga",
      },
      {
        jurusan_id: "2137",
        name: "Akademi Jurnalistik",
      },
      {
        jurusan_id: "2138",
        name: "Akademi Komunikasi Massa",
      },
      {
        jurusan_id: "2139",
        name: "Akademi Komunikasi Massa I Perpustakaan",
      },
      {
        jurusan_id: "2140",
        name: "Akademi Komunikasi Masa Ilmu Komunikasi",
      },
      {
        jurusan_id: "2141",
        name: "Akademi Komunikasi Masa Jurnalis",
      },
      {
        jurusan_id: "2142",
        name: "Akademi Komunikasi Massa Kehumasan",
      },
      {
        jurusan_id: "2143",
        name: "Akademi Komunikasi Massa Propaganda",
      },
      {
        jurusan_id: "2144",
        name: "Akademi Komunikasi Massa Public Relation",
      },
      {
        jurusan_id: "2145",
        name: "Akademi Komunikasi Masa Publisis TIK",
      },
      {
        jurusan_id: "2146",
        name: "Akademi Komunikasi Massa Penerangan",
      },
      {
        jurusan_id: "2147",
        name: "Akademi Penerangan",
      },
      {
        jurusan_id: "2148",
        name: "Akademi Penerangan Film",
      },
      {
        jurusan_id: "2149",
        name: "Akademi Penerangan Grafika",
      },
      {
        jurusan_id: "2150",
        name: "Akademi Penerangan I Penerangan",
      },
      {
        jurusan_id: "2151",
        name: "Akademi Pendidikan Press Kewartawanan",
      },
      {
        jurusan_id: "2152",
        name: "Akademi Penerangan Radio",
      },
      {
        jurusan_id: "2153",
        name: "Akademi Wartawan",
      },
      {
        jurusan_id: "2154",
        name: "Akademi PARPOSTEL",
      },
      {
        jurusan_id: "2155",
        name: "Akademi Pariwisata",
      },
      {
        jurusan_id: "2156",
        name: "Akademi Pariwisata Kepariwisataan",
      },
      {
        jurusan_id: "2157",
        name: "Akademi Pariwisata Hotel dan Katering",
      },
      {
        jurusan_id: "2158",
        name: "Akademi Pariwisata Perhotelan",
      },
      {
        jurusan_id: "2159",
        name: "Akademi Pariwisata Bina Wisata",
      },
      {
        jurusan_id: "2160",
        name: "Akademi Perhotelan",
      },
      {
        jurusan_id: "2161",
        name: "Akademi Perhotelan Tata Griya",
      },
      {
        jurusan_id: "2162",
        name: "Akademi Perhotelan Katering",
      },
      {
        jurusan_id: "2163",
        name: "Akademi Perhotelan Hotel",
      },
      {
        jurusan_id: "2164",
        name: "Akademi Pos & Telekomunikasi",
      },
      {
        jurusan_id: "2165",
        name: "Akademi Pos dan Telekomunikasi Pos",
      },
      {
        jurusan_id: "2166",
        name: "Akademi Pos dan Telekomunikasi Adm. Telekomunikasi",
      },
      {
        jurusan_id: "2167",
        name: "Akademi Pos dan Telekomunikasi Teknik Telekomuinikasi",
      },
      {
        jurusan_id: "2168",
        name: "Akademi Koperasi",
      },
      {
        jurusan_id: "2169",
        name: "Akademi Koperasi Manajemen",
      },
      {
        jurusan_id: "2170",
        name: "Akademi Manajemen Koperasi",
      },
      {
        jurusan_id: "2171",
        name: "Akademi Teknik Pekerjaan Umum",
      },
      {
        jurusan_id: "2172",
        name: "Akademi Teknologi",
      },
      {
        jurusan_id: "2173",
        name: "Akademi Teknologi Arsitektur",
      },
      {
        jurusan_id: "2174",
        name: "Akademi Teknologi Bangunan",
      },
      {
        jurusan_id: "2175",
        name: "Akademi Teknologi Elekto",
      },
      {
        jurusan_id: "2176",
        name: "Akademi Teknologi Elektronika",
      },
      {
        jurusan_id: "2177",
        name: "Akademi Teknologi Fisika",
      },
      {
        jurusan_id: "2178",
        name: "Akademi Teknologi Geodesi",
      },
      {
        jurusan_id: "2179",
        name: "Akademi Teknologi Geografi",
      },
      {
        jurusan_id: "2180",
        name: "Akademi Teknologi Kimia",
      },
      {
        jurusan_id: "2181",
        name: "Akademi Teknologi Industri  Industri Kimia",
      },
      {
        jurusan_id: "2182",
        name: "Akademi Teknologi Listrik Arus Lemah",
      },
      {
        jurusan_id: "2183",
        name: "Akademi Teknologi Listrik",
      },
      {
        jurusan_id: "2184",
        name: "Akademi Teknologi Listrik Arus Kuat",
      },
      {
        jurusan_id: "2185",
        name: "Akademi Teknologi Mesin",
      },
      {
        jurusan_id: "2186",
        name: "Akademi Teknologi Pertanian",
      },
      {
        jurusan_id: "2187",
        name: "Akademi Teknologi Geologi",
      },
      {
        jurusan_id: "2188",
        name: "Akademi Teknologi Pertambangan",
      },
      {
        jurusan_id: "2189",
        name: "Akademi Teknologi Metalurgi",
      },
      {
        jurusan_id: "2190",
        name: "Akademi Teknologi Sipil",
      },
      {
        jurusan_id: "2191",
        name: "Akademi Teknologi Pertanian",
      },
      {
        jurusan_id: "2192",
        name: "Akademi Teknologi Grafika",
      },
      {
        jurusan_id: "2193",
        name: "Akademi Teknologi Grafika Lay Out",
      },
      {
        jurusan_id: "2194",
        name: "Akademi Perkapalan",
      },
      {
        jurusan_id: "2195",
        name: "Akademi Teknik Perkapalan",
      },
      {
        jurusan_id: "2196",
        name: "Akademi Teknik Perkapalan Komputer",
      },
      {
        jurusan_id: "2197",
        name: "Akademi Teknik Perkapalan Mesin Kapal",
      },
      {
        jurusan_id: "2198",
        name: "Akademi Teknik Perkapalan Teknik Bang. Kapal",
      },
      {
        jurusan_id: "2199",
        name: "Akademi Komputer Aplikasi",
      },
      {
        jurusan_id: "2200",
        name: "Akademi Komputer Analis",
      },
      {
        jurusan_id: "2201",
        name: "Akademi Komputer",
      },
      {
        jurusan_id: "2202",
        name: "Akademi Komputer Programmer",
      },
      {
        jurusan_id: "2203",
        name: "Akademi Manajemen Informatika dan Komputer",
      },
      {
        jurusan_id: "2204",
        name: "Akademi Seni",
      },
      {
        jurusan_id: "2205",
        name: "Akademi Cinematografi",
      },
      {
        jurusan_id: "2206",
        name: "Akademi Cinematografi Camera",
      },
      {
        jurusan_id: "2207",
        name: "Akademi Cinematografi Drama",
      },
      {
        jurusan_id: "2208",
        name: "Akademi Cinematografi Kameraman",
      },
      {
        jurusan_id: "2209",
        name: "Akademi Cinematografi Make Up",
      },
      {
        jurusan_id: "2210",
        name: "Akademi Cinema Penyutradaraan Film",
      },
      {
        jurusan_id: "2211",
        name: "Akademi Seni Drama & Film",
      },
      {
        jurusan_id: "2212",
        name: "Akademi Seni Drama dan Film Drama",
      },
      {
        jurusan_id: "2213",
        name: "Akademi Seni Karawitan",
      },
      {
        jurusan_id: "2214",
        name: "Akademi Seni Karawitan Ahli Musik Tradisional",
      },
      {
        jurusan_id: "2215",
        name: "Akademi Seni Karawitan Seni Dalang",
      },
      {
        jurusan_id: "2216",
        name: "Akademi Seni Karawitan Seni Tari",
      },
      {
        jurusan_id: "2217",
        name: "Akademi Seni Karawitan Vokal",
      },
      {
        jurusan_id: "2218",
        name: "Akademi Seni Karawitan Musik",
      },
      {
        jurusan_id: "2219",
        name: "Akademi Seni Karawitan",
      },
      {
        jurusan_id: "2220",
        name: "Akademi Seni Karawitan Tari",
      },
      {
        jurusan_id: "2221",
        name: "Akademi Seni Karawitan Theater",
      },
      {
        jurusan_id: "2222",
        name: "Akademi Seni Rupa",
      },
      {
        jurusan_id: "2223",
        name: "Akademi Seni Rupa Dekorasi",
      },
      {
        jurusan_id: "2224",
        name: "Akademi Seni Rupa Design",
      },
      {
        jurusan_id: "2225",
        name: "Akademi Seni Rupa Ilustrasi",
      },
      {
        jurusan_id: "2226",
        name: "Akademi Seni Rupa Grafika",
      },
      {
        jurusan_id: "2227",
        name: "Akademi Seni Rupa Vokasional",
      },
      {
        jurusan_id: "2228",
        name: "Akademi Seni Rupa Seni Lukis",
      },
      {
        jurusan_id: "2229",
        name: "Akademi Seni Rupa Seni Musik",
      },
      {
        jurusan_id: "2230",
        name: "Akademi Seni Rupa Dekora dan Reklame",
      },
      {
        jurusan_id: "2231",
        name: "Akademi Seni Rupa Ilmu Grafis",
      },
      {
        jurusan_id: "2232",
        name: "Akademi Seni Rupa Seni Kriya",
      },
      {
        jurusan_id: "2233",
        name: "Akademi Seni Rupa Tari Jawa",
      },
      {
        jurusan_id: "2234",
        name: "Akademi Seni Rupa Umum",
      },
      {
        jurusan_id: "2235",
        name: "Akademi Seni Rupa Ukir",
      },
      {
        jurusan_id: "2236",
        name: "Akademi Seni Rupa Seni Patung",
      },
      {
        jurusan_id: "2237",
        name: "Akademi Seni Rupa Seni Karawitan",
      },
      {
        jurusan_id: "2238",
        name: "Akademi Seni Tari Karawitan",
      },
      {
        jurusan_id: "2239",
        name: "Akademi Seni Tari Karawitan Bali",
      },
      {
        jurusan_id: "2240",
        name: "Akademi Seni Tari Jawa",
      },
      {
        jurusan_id: "2241",
        name: "Akademi Seni Tari Umum",
      },
      {
        jurusan_id: "2242",
        name: "Akademi Seni Tari Komposisi Tari",
      },
      {
        jurusan_id: "2243",
        name: "Akademi Seni Tari Pedalangan",
      },
      {
        jurusan_id: "2244",
        name: "Akademi Seni Tari Seni Karawitan Jawa",
      },
      {
        jurusan_id: "2245",
        name: "Akademi Seni Tari Bali",
      },
      {
        jurusan_id: "2246",
        name: "Akademi Seni Tari Tari Minangkabau",
      },
      {
        jurusan_id: "2247",
        name: "Akademi Seni Tari Tari Nasional",
      },
      {
        jurusan_id: "2248",
        name: "Akademi Seni Tari Sunda",
      },
      {
        jurusan_id: "2249",
        name: "Akademi Seni Tari",
      },
      {
        jurusan_id: "2250",
        name: "Akademi Seni Tari Theater",
      },
      {
        jurusan_id: "2251",
        name: "Akademi Theater",
      },
      {
        jurusan_id: "2252",
        name: "Akademi Theater Penyutradaraan",
      },
      {
        jurusan_id: "2253",
        name: "Akademi Pendidikan Kebudayaan",
      },
      {
        jurusan_id: "2254",
        name: "Akademi Bahasa Asing",
      },
      {
        jurusan_id: "2255",
        name: "Akademi Bahasa Spanyol",
      },
      {
        jurusan_id: "2256",
        name: "Akademi Bahasa Asing Sastra dan Bahasa Inggris",
      },
      {
        jurusan_id: "2257",
        name: "Akademi Bahasa Asing & Bahasa Arab",
      },
      {
        jurusan_id: "2258",
        name: "Akademi Bahasa Belanda",
      },
      {
        jurusan_id: "2259",
        name: "Akademi Bahasa Cina",
      },
      {
        jurusan_id: "2260",
        name: "Akademi Bahasa Inggris",
      },
      {
        jurusan_id: "2261",
        name: "Akademi Bahasa Jepang",
      },
      {
        jurusan_id: "2262",
        name: "Akademi Bahasa Jerman",
      },
      {
        jurusan_id: "2263",
        name: "Akademi Bahasa Perancis",
      },
      {
        jurusan_id: "2264",
        name: "Akademi Bahasa Rusia",
      },
      {
        jurusan_id: "2265",
        name: "Akademi Pendidikan Kemasyarakatan",
      },
      {
        jurusan_id: "2266",
        name: "Akademi Pendidikan Jasmani",
      },
      {
        jurusan_id: "2267",
        name: "Akademi Perpustakaan",
      },
      {
        jurusan_id: "2268",
        name: "Akademi Sastra Arab",
      },
      {
        jurusan_id: "2269",
        name: "Akademi Sastra Arab Tarbiyah",
      },
      {
        jurusan_id: "2270",
        name: "Akademi Sekretaris",
      },
      {
        jurusan_id: "2271",
        name: "Akademi Ilmu Sekretaris dan Manajemen",
      },
      {
        jurusan_id: "2272",
        name: "Akademi Ilmu Sekret dan Informatika",
      },
      {
        jurusan_id: "2273",
        name: "Akademi Ilmu Sekretaris dan Manajemen",
      },
      {
        jurusan_id: "2274",
        name: "Akademi Sekret dan Manaj. TT Perkan",
      },
      {
        jurusan_id: "2275",
        name: "Akademi Sekretaris dan Manajemen Administrasi",
      },
      {
        jurusan_id: "2276",
        name: "Akademi Sekretaris dan Manajemen Akutansi",
      },
      {
        jurusan_id: "2277",
        name: "Akademi Sekretaris dan Manajemen Kesekretariatan",
      },
      {
        jurusan_id: "2278",
        name: "Akademi Sekretaris dan Manajemen Perkantoran",
      },
      {
        jurusan_id: "2279",
        name: "Akademi Perburuhan",
      },
      {
        jurusan_id: "2280",
        name: "Akademi Gula Negara",
      },
      {
        jurusan_id: "2281",
        name: "Akademi Ilmu Kepegawaian",
      },
      {
        jurusan_id: "2282",
        name: "Akademi Ilmu Administrasi",
      },
      {
        jurusan_id: "2283",
        name: "Akademi Ilmu Administrasi Negara",
      },
      {
        jurusan_id: "2284",
        name: "Akademi Ilmu Adm Kesekretariatan",
      },
      {
        jurusan_id: "2285",
        name: "Akademi Ilmu Administrasi Niaga",
      },
      {
        jurusan_id: "2286",
        name: "Akademi Ilmu Manajemen",
      },
      {
        jurusan_id: "2287",
        name: "Akademi Ilmu Manaj. Office Manaj.",
      },
      {
        jurusan_id: "2288",
        name: "Akademi Ilmu Manajemen Pemerintahan",
      },
      {
        jurusan_id: "2289",
        name: "Akademi Dinas Luar Negeri",
      },
      {
        jurusan_id: "2290",
        name: "Akademi Perkantoran",
      },
      {
        jurusan_id: "2291",
        name: "Akademi Hidrografi",
      },
      {
        jurusan_id: "2292",
        name: "Akademi Elektronika AL",
      },
      {
        jurusan_id: "2293",
        name: "Akademi Industri Militer",
      },
      {
        jurusan_id: "2294",
        name: "Akademi Sandi Negara",
      },
      {
        jurusan_id: "2295",
        name: "Akademi Kata Ketik",
      },
      {
        jurusan_id: "2296",
        name: "Akademi Statistik Industri dan Komputasi",
      },
      {
        jurusan_id: "2297",
        name: "Akademi Statistik",
      },
      {
        jurusan_id: "2298",
        name: "ATPN Ketatalaksanaan Niaga",
      },
      {
        jurusan_id: "2299",
        name: "A P P Adminsitrasi Keuangan",
      },
      {
        jurusan_id: "2300",
        name: "A P P Administrasi Niaga",
      },
      {
        jurusan_id: "2301",
        name: "A P P Akutansi",
      },
      {
        jurusan_id: "2302",
        name: "A P P B isnis Administrasi",
      },
      {
        jurusan_id: "2303",
        name: "A P P Ekonomi Manajemen",
      },
      {
        jurusan_id: "2304",
        name: "A P P Ekonomi Perusahaan",
      },
      {
        jurusan_id: "2305",
        name: "A P P Finansial Manajemen",
      },
      {
        jurusan_id: "2306",
        name: "A P P Ilmu Manajemen",
      },
      {
        jurusan_id: "2307",
        name: "A P P Industri",
      },
      {
        jurusan_id: "2308",
        name: "A P P Industri Manajemen",
      },
      {
        jurusan_id: "2309",
        name: "A P P Kepemimpinan Administrasi Niaga",
      },
      {
        jurusan_id: "2310",
        name: "A P P Keuangan",
      },
      {
        jurusan_id: "2311",
        name: "A P P Marketing",
      },
      {
        jurusan_id: "2312",
        name: "A P P Marketing Manajemen",
      },
      {
        jurusan_id: "2313",
        name: "A P P Personal Manajemen",
      },
      {
        jurusan_id: "2314",
        name: "A P P Produktion Manajement",
      },
      {
        jurusan_id: "2315",
        name: "A P P Tata Niaga",
      },
      {
        jurusan_id: "2316",
        name: "A P P Teknik Perusahaan",
      },
      {
        jurusan_id: "2317",
        name: "A P P Umum",
      },
      {
        jurusan_id: "2318",
        name: "APMD Administrasi Pembangunan",
      },
      {
        jurusan_id: "2319",
        name: "APMD Ilmu Sosial",
      },
      {
        jurusan_id: "2320",
        name: "APMD Pembangunan Masyarakat Desa",
      },
      {
        jurusan_id: "2321",
        name: "APMD Sosial",
      },
      {
        jurusan_id: "2322",
        name: "APMD Sosiatri",
      },
      {
        jurusan_id: "2323",
        name: "APMD Studi Pembangunan Desa",
      },
      {
        jurusan_id: "2324",
        name: "A P D N",
      },
      {
        jurusan_id: "2325",
        name: "ADM NEGARA",
      },
      {
        jurusan_id: "2326",
        name: "A I P Pelayaran Niaga",
      },
      {
        jurusan_id: "2327",
        name: "A I P Teknik Mesin",
      },
      {
        jurusan_id: "2328",
        name: "ATPU",
      },
      {
        jurusan_id: "2329",
        name: "ATPU Arsitektur",
      },
      {
        jurusan_id: "2330",
        name: "ATPU Bangunan Gedung",
      },
      {
        jurusan_id: "2331",
        name: "ATPU Geodesi",
      },
      {
        jurusan_id: "2332",
        name: "ATPU Hidroteknik",
      },
      {
        jurusan_id: "2333",
        name: "ATPU Konstruksi Bangunan",
      },
      {
        jurusan_id: "2334",
        name: "ATPU Mesin",
      },
      {
        jurusan_id: "2335",
        name: "ATPU Pembangunan Kota",
      },
      {
        jurusan_id: "2336",
        name: "ATPU Pengairan",
      },
      {
        jurusan_id: "2337",
        name: "ATPU Persungaian",
      },
      {
        jurusan_id: "2338",
        name: "ATPU Sipil",
      },
      {
        jurusan_id: "2339",
        name: "ATPU Gedung",
      },
      {
        jurusan_id: "2340",
        name: "ATPU Sipil Kering",
      },
      {
        jurusan_id: "2341",
        name: "ATPU Teknik Penyehatan",
      },
      {
        jurusan_id: "2342",
        name: "ATPU Topografi",
      },
      {
        jurusan_id: "2343",
        name: "ATPU Sipil Basah",
      },
      {
        jurusan_id: "2344",
        name: "Politeknik Mekanik",
      },
      {
        jurusan_id: "2345",
        name: "AMIK Manajemen Informatika",
      },
      {
        jurusan_id: "2346",
        name: "Pendidikan Ahli Teknik",
      },
      {
        jurusan_id: "2347",
        name: "Pendidikan Ahli Teknik Elektro",
      },
      {
        jurusan_id: "2348",
        name: "Pendidikan Ahli Teknik Sipil",
      },
      {
        jurusan_id: "2349",
        name: "Pendidikan Ahli Teknik Arsitek",
      },
      {
        jurusan_id: "2350",
        name: "Pendidikan Ahli Teknik Arsitektur",
      },
      {
        jurusan_id: "2351",
        name: "Pendidikan Ahli Teknik Fisika",
      },
      {
        jurusan_id: "2352",
        name: "Pendidikan Ahli Teknik Geodesi",
      },
      {
        jurusan_id: "2353",
        name: "Pendidikan Ahli Teknik Hidro Teknik",
      },
      {
        jurusan_id: "2354",
        name: "Pendidikan Ahli Teknik Kimia",
      },
      {
        jurusan_id: "2355",
        name: "Pendidikan Ahli Teknik Informatika",
      },
      {
        jurusan_id: "2356",
        name: "Pendidikan Ahli Teknik Listrik",
      },
      {
        jurusan_id: "2357",
        name: "Pendidikan Ahli Teknik Mesin",
      },
      {
        jurusan_id: "2358",
        name: "Pendidikan Ahli Teknik Komputer",
      },
      {
        jurusan_id: "2359",
        name: "AKABRI",
      },
      {
        jurusan_id: "2360",
        name: "AKABRI Darat",
      },
      {
        jurusan_id: "2361",
        name: "AKABRI Kepolisian",
      },
      {
        jurusan_id: "2362",
        name: "AKABRI Laut",
      },
      {
        jurusan_id: "2363",
        name: "AKABRI Udara",
      },
      {
        jurusan_id: "3779",
        name: "TEKNIK PENYEHATAN",
      },
      {
        jurusan_id: "3896",
        name: "SARJANA MUDA",
      },
      {
        jurusan_id: "3936",
        name: "S.M SOSPOL",
      },
      {
        jurusan_id: "4000",
        name: "D.II PENDIDIKAN SENI TARI",
      },
      {
        jurusan_id: "4090",
        name: "SER MUDA",
      },
      {
        jurusan_id: "4246",
        name: "SM PENDIDIKAN AGAMA ISLAM",
      },
      {
        jurusan_id: "4559",
        name: "AKM",
      },
      {
        jurusan_id: "4576",
        name: "ATPU Teknik Lingkungan",
      },
      {
        jurusan_id: "4584",
        name: "Akademi Maritim Ketatalaksanaan Pel. Niaga",
      },
      {
        jurusan_id: "4598",
        name: "ADMINISTRASI LOGISTIK",
      },
    ]);
  }
}

module.exports = SmSeeder;
