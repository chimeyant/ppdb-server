'use strict'

/*
|--------------------------------------------------------------------------
| RefSekolahSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const RefSekolah = use("App/Models/RefSekolah")

class RefSekolahSeeder {
  async run() {
    await RefSekolah.createMany([
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0001",
        "npsn": "20603149",
        "name": "SMP NEGERI 1 LEGOK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0002",
        "npsn": "20616497",
        "name": "SMP NEGERI TERBUKA 1 LEGOK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0003",
        "npsn": "20613764",
        "name": "SMP NEGERI 2 LEGOK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0004",
        "npsn": "20603141",
        "name": "SMP NEGERI 1 CISAUK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0005",
        "npsn": "20603173",
        "name": "SMP NEGERI 2 CISAUK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0006",
        "npsn": "20613951",
        "name": "SMP NEGERI 3 CISAUK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0007",
        "npsn": "20603151",
        "name": "SMP NEGERI 1 PAGEDANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0010",
        "npsn": "20603597",
        "name": "SMP ALFA SANAH CISAUK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0011",
        "npsn": "20615003",
        "name": "SMP AL BARKAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0012",
        "npsn": "20613617",
        "name": "SMP DIRGHANTARA LEGOK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0013",
        "npsn": "20603583",
        "name": "SMP PGRI 184 LEGOK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0014",
        "npsn": "20603231",
        "name": "SMP YUPPENTEK 1 LEGOK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0015",
        "npsn": "20603207",
        "name": "SMP PGRI 393 PALASARI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0017",
        "npsn": "20603550",
        "name": "SMP MANDIRI MALANGNENGAH PAGEDANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0018",
        "npsn": "20603549",
        "name": "SMP ISLAM MANBAUL'ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0019",
        "npsn": "20603535",
        "name": "SMP ISLAM NURUL FALAH PAGEDANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0020",
        "npsn": "20613556",
        "name": "SMP MUTIARA INSANI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0021",
        "npsn": "20603143",
        "name": "SMP NEGERI 1 CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0022",
        "npsn": "20614887",
        "name": "SMP NEGERI TERBUKA 1 CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0023",
        "npsn": "20613504",
        "name": "SMP NEGERI 1 KELAPA DUA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0024",
        "npsn": "20613871",
        "name": "SMP NEGERI 2 CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0025",
        "npsn": "20613787",
        "name": "SMP NEGERI 2 KELAPA DUA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0026",
        "npsn": "20603624",
        "name": "SMP DASANA INDAH LEGOK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0027",
        "npsn": "20603631",
        "name": "SMP BINONG PERMAI CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0028",
        "npsn": "20613645",
        "name": "SMP ISLAMIC VILLAGE CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0029",
        "npsn": "20603582",
        "name": "SMP MUTIARA KASIH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0030",
        "npsn": "20603214",
        "name": "SMP PGRI 246 CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0031",
        "npsn": "20603208",
        "name": "SMP PGRI 396 KELAPA DUA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0032",
        "npsn": "20603211",
        "name": "SMP PGRI 394 BOJONG NANGKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0033",
        "npsn": "20613615",
        "name": "SMP MUHAMMADIYAH BOJONGNANGKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0034",
        "npsn": "20603198",
        "name": "SMP PRAMITA CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0035",
        "npsn": "20603229",
        "name": "SMP SUMPAH PEMUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0036",
        "npsn": "20603232",
        "name": "SMP YUSTIA PURI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0037",
        "npsn": "20603640",
        "name": "SMP AS SALAM CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0038",
        "npsn": "20603238",
        "name": "SMP SUNAN BONANG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0039",
        "npsn": "20603242",
        "name": "SMP TARAKANITA GADING SERPONG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0040",
        "npsn": "20603531",
        "name": "SMP KRISTEN PENABUR GADING SERPONG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0041",
        "npsn": "20613815",
        "name": "SMP PLUS ISLAMIC VILLAGE"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0042",
        "npsn": "20613973",
        "name": "SMP KRISTEN TUNAS BANGSA CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0043",
        "npsn": "20613784",
        "name": "SMP ATISA DIPAMKARA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0044",
        "npsn": "20614895",
        "name": "SMP ISLAM AL - ASMANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0045",
        "npsn": "20613862",
        "name": "SMP PLUS DAARUL JANNAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0046",
        "npsn": "20614412",
        "name": "SMP AL FITYAN KELAPA DUA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0047",
        "npsn": "20613780",
        "name": "SMP DIAN AL FITRAH CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0048",
        "npsn": "20614978",
        "name": "SMP SURYA BANGSA CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0049",
        "npsn": "20614239",
        "name": "SMP NURUL FITRI CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0050",
        "npsn": "20614386",
        "name": "SMP NUSA JAYA TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0054",
        "npsn": "20603186",
        "name": "SMP NEGERI 1 CIKUPA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0055",
        "npsn": "20613564",
        "name": "SMP NEGERI 2 CIKUPA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0056",
        "npsn": "20613582",
        "name": "SMP NEGERI 3 CIKUPA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0057",
        "npsn": "20603140",
        "name": "SMP NEGERI 1 PANONGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0058",
        "npsn": "20603212",
        "name": "SMP PGRI 174 CIKUPA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0059",
        "npsn": "20603209",
        "name": "SMP PGRI 428 PEUSAR PANONGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0060",
        "npsn": "20603191",
        "name": "SMP PGRI 397 RANCA IYUH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0061",
        "npsn": "20615073",
        "name": "SMP NURUL HIDAYAH CIKUPA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0062",
        "npsn": "20603579",
        "name": "SMP MUHAMMADIYAH 48 CIKUPA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0063",
        "npsn": "20603245",
        "name": "SMP TPM CIKUPA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0064",
        "npsn": "20603221",
        "name": "SMP WIPAMA CIKUPA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0065",
        "npsn": "20613461",
        "name": "SMP TARAKANITA CITRA RAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0066",
        "npsn": "20663551",
        "name": "SMP MANDIRI SERDANG KULON PANONGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0067",
        "npsn": "20603633",
        "name": "SMP ISLAM AL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0068",
        "npsn": "20603641",
        "name": "SMP BAHAGIA PANONGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0069",
        "npsn": "20603544",
        "name": "SMP ISLAM AL - KHOIRAT"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0070",
        "npsn": "20603239",
        "name": "SMP SUNAN KALIJAGA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0071",
        "npsn": "20603525",
        "name": "SMP CITRA ISLAMI ISLAMIC VILLAGE"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0072",
        "npsn": "20613449",
        "name": "SMP PRIMA BAKTI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0073",
        "npsn": "20614359",
        "name": "SMP AL MUHAJIRIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0074",
        "npsn": "20613972",
        "name": "SMP AL FATIH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0075",
        "npsn": "20615988",
        "name": "SMP PELITA NUSA CIKUPA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0076",
        "npsn": "20614721",
        "name": "SMP ISLAM ASH SHIBGOH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0077",
        "npsn": "20614260",
        "name": "SMP DARUSSALAM PANONGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0078",
        "npsn": "20603249",
        "name": "SMP NEGERI 1 BALARAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0079",
        "npsn": "69758263",
        "name": "SMP NEGERI TERBUKA MANDIRI YP31 BALARAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0080",
        "npsn": "69758260",
        "name": "SMP NEGERI TERBUKA 1 MANDIRI BALARAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0081",
        "npsn": "20603131",
        "name": "SMP NEGERI 2 BALARAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0082",
        "npsn": "20603156",
        "name": "SMP NEGERI 3 BALARAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0083",
        "npsn": "20603156",
        "name": "SMP NEGERI TERBUKA 3 BALARAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0084",
        "npsn": "20603177",
        "name": "SMP NEGERI 1 SUKAMULYA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0085",
        "npsn": "20603147",
        "name": "SMP NEGERI 1 KRESEK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0086",
        "npsn": "20613507",
        "name": "SMP NEGERI 1 GUNUNGKALER"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0087",
        "npsn": "20603148",
        "name": "SMP NEGERI 1 KRONJO"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0088",
        "npsn": "20616535",
        "name": "SMP NEGERI TERBUKA 1 KRONJO"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0089",
        "npsn": "20614347",
        "name": "SMP NEGERI 1 MEKAR BARU"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0090",
        "npsn": "20603210",
        "name": "SMP PGRI BALARAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0091",
        "npsn": "20603188",
        "name": "SMP PGRI KALIASIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0092",
        "npsn": "20206161",
        "name": "SMP ISLAM AL AWWAABIIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0093",
        "npsn": "20603540",
        "name": "SMP ISLAM AL FALAH KRESEK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0094",
        "npsn": "20603569",
        "name": "SMP NURUL AMIN KRONJO"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0095",
        "npsn": "20603571",
        "name": "SMP MATHLA'UL HUDA KRESEK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0096",
        "npsn": "20603235",
        "name": "SMP TUNAS HARAPAN MEKAR BARU"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0097",
        "npsn": "20603534",
        "name": "SMP MAHARDHIKA KRESEK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0098",
        "npsn": "20613502",
        "name": "SMP ISLAM AT - THOYYIBAH ASSAKINAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0099",
        "npsn": "20613586",
        "name": "SMP MUTIARA BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0100",
        "npsn": "20613670",
        "name": "SMP ISLAM AN NABILAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0101",
        "npsn": "20616544",
        "name": "SMP PGRI RANCAGEDE"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0102",
        "npsn": "20615745",
        "name": "SMP ISLAM AL KHAIRAAT"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0103",
        "npsn": "20614226",
        "name": "SMP NEGERI 2 MEKARBARU"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0104",
        "npsn": "20613612",
        "name": "SMP NEGERI 2 GUNUNG KALER"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0105",
        "npsn": "20614270",
        "name": "SMP ISLAM AL MILLAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0106",
        "npsn": "20613857",
        "name": "SMP ANNUR KRONJO"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0107",
        "npsn": "20616351",
        "name": "SMP NUSANTARA KRONJO"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0112",
        "npsn": "20603130",
        "name": "SMP NEGERI 1 TIGARAKSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0113",
        "npsn": "20614263",
        "name": "SMP NEGERI TERBUKA 1 TIGARAKSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0114",
        "npsn": "20603155",
        "name": "SMP NEGERI 2 TIGARAKSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0115",
        "npsn": "20613554",
        "name": "SMP NEGERI 3 TIGARAKSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0116",
        "npsn": "20613622",
        "name": "SMP NEGERI 4 TIGARAKSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0117",
        "npsn": "20603144",
        "name": "SMP NEGERI 1 JAMBE"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0118",
        "npsn": "20603529",
        "name": "SMP KORPRI 1 TIGARAKSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0119",
        "npsn": "20613827",
        "name": "SMP ISLAM AL MUBAROK TIGARAKSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0120",
        "npsn": "20614418",
        "name": "SMP ISLAM AL-HUSNA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0121",
        "npsn": "20603560",
        "name": "SMP PEMBANGUNAN 1 TIGARAKSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0122",
        "npsn": "20603568",
        "name": "SMP NURUL FALAH TIGARAKSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0123",
        "npsn": "20603202",
        "name": "SMP PGRI 392 JALUPANG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0124",
        "npsn": "20613512",
        "name": "SMP PGRI 34 TIGARAKSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0125",
        "npsn": "20603200",
        "name": "SMP PUSTEK MITRA TIGARAKSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0126",
        "npsn": "20614348",
        "name": "SMPS FIORETTI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0127",
        "npsn": "20613830",
        "name": "SMP RUHUL JADID"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0128",
        "npsn": "20613688",
        "name": "SMP ISLAM MATHLAUL ANWAR TIGARAKSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0129",
        "npsn": "20603615",
        "name": "SMP AL FALAH JAMBE"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0130",
        "npsn": "20603215",
        "name": "SMP PGRI DARU"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0131",
        "npsn": "20603561",
        "name": "SMP PEMBANGUNAN 2 JAMBE"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0132",
        "npsn": "20603142",
        "name": "SMP NEGERI 1 CISOKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0133",
        "npsn": "20614508",
        "name": "SMP NEGERI TERBUKA 1 CISOKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0134",
        "npsn": "20603133",
        "name": "SMP NEGERI 1 SOLEAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0135",
        "npsn": "20603174",
        "name": "SMP NEGERI 2 SOLEAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0136",
        "npsn": "20613597",
        "name": "SMP NEGERI 2 CISOKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0137",
        "npsn": "20613503",
        "name": "SMP NEGERI 1 JAYANTI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0138",
        "npsn": "20613583",
        "name": "SMP NEGERI 2 JAYANTI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0139",
        "npsn": "20614081",
        "name": "SMP NEGERI 5 SOLEAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0140",
        "npsn": "20603618",
        "name": "SMP DAAN MOGOT CISOKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0141",
        "npsn": "20603625",
        "name": "SMP DHARMA BHAKTI CISOKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0142",
        "npsn": "20603632",
        "name": "SMP AL HASANAH JAYANTI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0143",
        "npsn": "20603622",
        "name": "SMP DARUL ISHLAH JAYANTI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0144",
        "npsn": "20603524",
        "name": "SMP ISLAM SIROJUL ATHFAL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0145",
        "npsn": "20603627",
        "name": "SMP DIAN PERTIWI CISOKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0146",
        "npsn": "20615195",
        "name": "SMP GUNA BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0147",
        "npsn": "20603213",
        "name": "SMP PGRI CISOKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0148",
        "npsn": "20616255",
        "name": "SMP CITRA MADINAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0149",
        "npsn": "20613496",
        "name": "SMP ISLAM AL - MA'MUR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0150",
        "npsn": "20603541",
        "name": "SMP ISLAM AL - AWWABIIN KUBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0151",
        "npsn": "20615163",
        "name": "SMP AS SALAM JAYANTI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0152",
        "npsn": "20615987",
        "name": "SMP ISLAM AL SULAIMANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0153",
        "npsn": "20614595",
        "name": "SMP ANNIDA AL ISLAMI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0154",
        "npsn": "20614597",
        "name": "SMP AL ISTIGFAR JAYANTI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0155",
        "npsn": "20615946",
        "name": "SMP ISLAM DAARUL FIKRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0156",
        "npsn": "20614880",
        "name": "SMP INSAN MA'ARIF"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0161",
        "npsn": "20603150",
        "name": "SMP NEGERI 1 MAUK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0162",
        "npsn": "20614365",
        "name": "SMP NEGERI TERBUKA 1 MAUK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0163",
        "npsn": "20603134",
        "name": "SMP NEGERI 2 MAUK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0164",
        "npsn": "20616542",
        "name": "SMP NEGERI TERBUKA 2 MAUK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0165",
        "npsn": "20603145",
        "name": "SMP NEGERI 1 KEMIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0166",
        "npsn": "20603127",
        "name": "SMP NEGERI 1 RAJEG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0167",
        "npsn": "20615547",
        "name": "SMP NEGERI TERBUKA 1 RAJEG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0168",
        "npsn": "20613508",
        "name": "SMP NEGERI 2 RAJEG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0169",
        "npsn": "20613513",
        "name": "SMP NEGERI 1 SUKADIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0170",
        "npsn": "20614495",
        "name": "SMP NEGERI 3 KEMIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0171",
        "npsn": "20603547",
        "name": "SMP DAAR EL - ARQAM MAUK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0172",
        "npsn": "20603572",
        "name": "SMP MATHLA'UL ANWAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0173",
        "npsn": "20603620",
        "name": "SMP DAARUL MUQIMIEN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0174",
        "npsn": "20603216",
        "name": "SMP RIYADLUL MUKHLISHIEN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0175",
        "npsn": "20603227",
        "name": "SMP YASPIH RAJEG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0176",
        "npsn": "20603189",
        "name": "SMP PGRI MAUK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0177",
        "npsn": "20603548",
        "name": "SMP ISLAM DAARUT TAUFIQ"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0178",
        "npsn": "20603616",
        "name": "SMP AL - FURQON"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0179",
        "npsn": "20613856",
        "name": "SMP PERMATA KEMIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0180",
        "npsn": "20614935",
        "name": "SMP IBNU SINA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0181",
        "npsn": "20615098",
        "name": "SMP HARAPAN BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0182",
        "npsn": "20614047",
        "name": "SMP ISLAM ILHAMI KEMIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0183",
        "npsn": "20614370",
        "name": "SMP ISLAM AN NUR SUKADIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0184",
        "npsn": "20614138",
        "name": "SMP ISLAM AN NUR KEMIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0185",
        "npsn": "20615164",
        "name": "SMP ISLAM DARUL MU'MIN RAJEG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0186",
        "npsn": "20614494",
        "name": "SMP NEGERI 2 KEMERI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0187",
        "npsn": "20615177",
        "name": "SMP HANJUANG MAUK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0188",
        "npsn": "20613665",
        "name": "SMP PGRI RAJEG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0189",
        "npsn": "20614879",
        "name": "SMP AVICENA RAJEG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0190",
        "npsn": "20614883",
        "name": "SMP ISLAM MANDIRI SUKADIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0191",
        "npsn": "20603152",
        "name": "SMP NEGERI 1 PAKUHAJI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0192",
        "npsn": "20603135",
        "name": "SMP NEGERI 2 PAKUHAJI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0193",
        "npsn": "20613847",
        "name": "SMP NEGERI 3 PAKUHAJI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0194",
        "npsn": "20603128",
        "name": "SMP NEGERI 1 SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0195",
        "npsn": "20614737",
        "name": "SMP NEGERI TERBUKA 1 SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0196",
        "npsn": "69758261",
        "name": "SMP NEGERI TERBUKA 1 MANDIRI SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0197",
        "npsn": "20603154",
        "name": "SMP NEGERI 2 SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0198",
        "npsn": "20613980",
        "name": "SMP NEGERI 1 SEPATAN TIMUR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0199",
        "npsn": "20603565",
        "name": "SMP PERINTIS SUKAWALI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0200",
        "npsn": "20613616",
        "name": "SMP IT AL GINA PAKUHAJI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0201",
        "npsn": "20603573",
        "name": "SMP MKGR SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0202",
        "npsn": "20603564",
        "name": "SMP PERINTIS I SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0203",
        "npsn": "20603193",
        "name": "SMP PGRI SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0204",
        "npsn": "20603644",
        "name": "SMP BINA PUTRA SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0205",
        "npsn": "20603593",
        "name": "SMP 1 CEMERLANG SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0206",
        "npsn": "20603635",
        "name": "SMP AL - MULTAZAM SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0207",
        "npsn": "20613614",
        "name": "SMP PRIMA NUSANTARA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0208",
        "npsn": "20613925",
        "name": "SMP ISLAM AL MUJANNAH PAKUHAJI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0209",
        "npsn": "20613855",
        "name": "SMP MAESTRO"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0211",
        "npsn": "20613778",
        "name": "SMP NEGERI 1 TELUKNAGA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0212",
        "npsn": "20613778",
        "name": "SMP NEGERI TERBUKA 1 TELUKNAGA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0213",
        "npsn": "20613844",
        "name": "SMP NEGERI 2 TELUKNAGA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0214",
        "npsn": "20613918",
        "name": "SMP NEGERI 3 TELUKNAGA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0215",
        "npsn": "20603146",
        "name": "SMP NEGERI 1 KOSAMBI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0216",
        "npsn": "20616498",
        "name": "SMP NEGERI TERBUKA 1 KOSAMBI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0217",
        "npsn": "20613587",
        "name": "SMP NEGERI 2 KOSAMBI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0218",
        "npsn": "20603614",
        "name": "SMP AL JUMHURIAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0219",
        "npsn": "20603192",
        "name": "SMP PGRI RAWA RENGAS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0220",
        "npsn": "20603195",
        "name": "SMP PGRI 242 TELUKNAGA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0221",
        "npsn": "20603237",
        "name": "SMP STRADA BHAKTI MULIA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0222",
        "npsn": "20603643",
        "name": "SMP BETHEL KOSAMBI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0223",
        "npsn": "20603536",
        "name": "SMP ISLAM MATHLA'UL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0224",
        "npsn": "20603537",
        "name": "SMP GAPURA KASIH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0225",
        "npsn": "20603247",
        "name": "SMP TUNAS AGUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0226",
        "npsn": "20603248",
        "name": "SMP TUNAS BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0227",
        "npsn": "20603554",
        "name": "SMP NURUL HIDAYAH TELUKNAGA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0228",
        "npsn": "20613887",
        "name": "SMP ISLAM AL HIKMA TELUKNAGA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0229",
        "npsn": "20613984",
        "name": "SMP PGRI KOSAMBI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0230",
        "npsn": "20615022",
        "name": "SMP 2 CEMERLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0231",
        "npsn": "20614001",
        "name": "SMP AL - HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0232",
        "npsn": "20613967",
        "name": "SMP PGRI PANTURA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0233",
        "npsn": "20614714",
        "name": "SMP AL FIKRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0234",
        "npsn": "20613960",
        "name": "SMP YADIKA 10 KOSAMBI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0235",
        "npsn": "20603139",
        "name": "SMP NEGERI 1 PASARKEMIS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0236",
        "npsn": "20603137",
        "name": "SMP NEGERI 2 PASARKEMIS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0237",
        "npsn": "20603175",
        "name": "SMP NEGERI 1 SINDANG JAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0238",
        "npsn": "20613668",
        "name": "SMP NEGERI 3 PASARKEMIS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0239",
        "npsn": "20613842",
        "name": "SMP NEGERI 4 PASARKEMIS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0241",
        "npsn": "20603596",
        "name": "SMP AL IJTIHAD 2 KUTABUMI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0242",
        "npsn": "20603552",
        "name": "SMP MARIA MEDIATRIX"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0243",
        "npsn": "20603187",
        "name": "SMP PGRI 229 PASARKEMIS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0244",
        "npsn": "20603205",
        "name": "SMP PGRI 338 SINDANGSONO"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0245",
        "npsn": "20603243",
        "name": "SMP TARSISIUS VIRETA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0246",
        "npsn": "20603619",
        "name": "SMP DAARUL MUJTAHIDIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0247",
        "npsn": "20603532",
        "name": "SMP KUSUMA BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0248",
        "npsn": "20615884",
        "name": "SMP YASMI PASARKEMIS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0249",
        "npsn": "20614534",
        "name": "SMP MUHAMMADIYAH PASARKEMIS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0250",
        "npsn": "20614154",
        "name": "SMP ISLAM AL - AMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0251",
        "npsn": "20613672",
        "name": "SMP ISLAM RAUDLATUL FIKRAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0252",
        "npsn": "20613854",
        "name": "SMP ISLAM IQRO"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0253",
        "npsn": "20613669",
        "name": "SMP ISLAM AL-BAROKAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0254",
        "npsn": "20614070",
        "name": "SMP IT INSAN MADANI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0255",
        "npsn": "20613853",
        "name": "SMP PERMATA INSANI ISLAMIC SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0256",
        "npsn": "20614516",
        "name": "SMP TUNAS HARAPAN PASARKEMIS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0257",
        "npsn": "20613664",
        "name": "SMP AL FALAHIYAH BADAK ANOM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0258",
        "npsn": "20613906",
        "name": "SMP 'JOY' PASARKEMIS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0259",
        "npsn": "20603151",
        "name": "SMP NEGERI 1 TERBUKA PAGEDANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0260",
        "npsn": "20615182",
        "name": "SMP NEGERI 2 PAGEDANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0261",
        "npsn": "20615017",
        "name": "SMP ISLAM AL-FALAH LEGOK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0262",
        "npsn": "20616042",
        "name": "SMP PASUNDAN TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0263",
        "npsn": "69787357",
        "name": "SMP ISLAM YAMISI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0264",
        "npsn": "20614344",
        "name": "SMP AL BADAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0265",
        "npsn": "20616060",
        "name": "SMP ISLAM AR RUSLAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0266",
        "npsn": "20615120",
        "name": "SMP ANISA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0267",
        "npsn": "20615166",
        "name": "SMP ISLAM TERPADU DARUSSALAM KRESEK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0268",
        "npsn": "20614537",
        "name": "SMP IT DAAR ET THOHIRIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0269",
        "npsn": "20615473",
        "name": "SMP NURUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0270",
        "npsn": "20614535",
        "name": "SMP AR RIYADH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0271",
        "npsn": "20616009",
        "name": "SMP TEKNOLOGI PILAR BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0272",
        "npsn": "20614235",
        "name": "SMP AL-IKHLAS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0273",
        "npsn": "20615189",
        "name": "SMP AS-SAFARWADI SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0274",
        "npsn": "20614713",
        "name": "SMP VILLA TAMAN BANDARA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0275",
        "npsn": "20613843",
        "name": "SMP NEGERI 5 PASARKEMIS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0276",
        "npsn": "20615883",
        "name": "SMP UMUM NABILA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0277",
        "npsn": "20615954",
        "name": "SMP ISLAM TERPADU LATANSA CENDEKIA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0278",
        "npsn": "20615192",
        "name": "SMP KASIH BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0279",
        "npsn": "20615083",
        "name": "SMP PAHOA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0280",
        "npsn": "20616230",
        "name": "SMP CITA KARSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0281",
        "npsn": "20615490",
        "name": "SMP AL AZIZIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0282",
        "npsn": "20616347",
        "name": "SMP DEWI KUNTI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0283",
        "npsn": "20615927",
        "name": "SMP NEGERI 3 SOLEAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0284",
        "npsn": "20615565",
        "name": "SMP ISLAM SIRRUL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0285",
        "npsn": "20615199",
        "name": "SMP DAAR EL QOLAM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0286",
        "npsn": "20616338",
        "name": "SMP IT RIYADUL BASORIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0287",
        "npsn": "20615525",
        "name": "SMP ISLAM AYATRA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0288",
        "npsn": "20615162",
        "name": "SMP ISLAM HARAPAN UMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0289",
        "npsn": "20615520",
        "name": "SMP ISLAM AL-MANSYURIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0291",
        "npsn": "20616339",
        "name": "SMP AVERUS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0292",
        "npsn": "20616437",
        "name": "SMP NUSANTARA GLOBAL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0293",
        "npsn": "20615685",
        "name": "SMP PUTRA NEGARA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0294",
        "npsn": "20616376",
        "name": "SMP MENARA TIRZA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0295",
        "npsn": "20615168",
        "name": "SMP ISTAFAD ISLAMIC SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0296",
        "npsn": "20616343",
        "name": "SMP PENABUR ILMU"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0297",
        "npsn": "20622284",
        "name": "SMP STELLA MARIS SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0298",
        "npsn": "20623123",
        "name": "SMP DARUL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0299",
        "npsn": "20622823",
        "name": "MTS NEGERI 1 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0300",
        "npsn": "60729829",
        "name": "MTS DAARUL FATTAAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0301",
        "npsn": "60729868",
        "name": "MTS DARUL HADITS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0302",
        "npsn": "60729831",
        "name": "MTS DARUL AMAL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0303",
        "npsn": "60729835",
        "name": "MTS JABAL RACHMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0304",
        "npsn": "60729845",
        "name": "MTS NURUL FALAH CADAS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0305",
        "npsn": "60729847",
        "name": "MTS WUJUHUL KHAIR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0306",
        "npsn": "60729875",
        "name": "MTS NURUL IMAN RAJAWALI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0307",
        "npsn": "60729833",
        "name": "MTS DAARUL ARCHAM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0308",
        "npsn": "60729837",
        "name": "MTS NURUL IMAN KPBARU"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0309",
        "npsn": "60729839",
        "name": "MTS TASYWIQUTH THULAB"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0310",
        "npsn": "60729832",
        "name": "MTS DAARUSSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0311",
        "npsn": "60729813",
        "name": "MTS AL ISTIQOMAH PASARKEMIS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0312",
        "npsn": "60729812",
        "name": "MTS MATHLAUL ANWAR SINDANGSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0313",
        "npsn": "60727326",
        "name": "MTS NURUL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0314",
        "npsn": "20622820",
        "name": "MTS NURUL FALAH KUTABUMI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0315",
        "npsn": "60729814",
        "name": "MTS AL MUAWANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0316",
        "npsn": "20622821",
        "name": "MTS HUDATUL UMAM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0317",
        "npsn": "60729871",
        "name": "MTS MATHLAUL ANWAR SUKADIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0318",
        "npsn": "60729870",
        "name": "MTS DAARUL MUQIMIEN MAUK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0319",
        "npsn": "60729873",
        "name": "MTS DAARUL ABROR KEMIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0320",
        "npsn": "20622778",
        "name": "MTS RAUDHATUT TULLAB"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0321",
        "npsn": "60729827",
        "name": "MTS RAUDLATUL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0322",
        "npsn": "60729828",
        "name": "MTS NURUL QUDDUS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0323",
        "npsn": "60729869",
        "name": "MTS AL ASYARIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0324",
        "npsn": "60727328",
        "name": "MTS DAARUL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0325",
        "npsn": "69725827",
        "name": "MTS SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0326",
        "npsn": "20622824",
        "name": "MTS AL HIKMAH SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0327",
        "npsn": "60729844",
        "name": "MTS AL MANSYURIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0328",
        "npsn": "60729846",
        "name": "MTS NURUL FALAH MEKARJAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0329",
        "npsn": "60729838",
        "name": "MTS NURUL FALAH SARAKAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0330",
        "npsn": "60729843",
        "name": "MTS AL ISTIQOMAH SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0331",
        "npsn": "60729848",
        "name": "MTS DAARUL MUTTAQIEN CADAS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0332",
        "npsn": "60729836",
        "name": "MTS NURUL FALAH TANJAKAN MEKAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0333",
        "npsn": "20603849",
        "name": "MTS AL AZHARIYAH (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0334",
        "npsn": "60729834",
        "name": "MTS AL FALAHIYYAH SUKATANI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0335",
        "npsn": "60729840",
        "name": "MTS AL FALAHIYAH SUKAMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0336",
        "npsn": "60729872",
        "name": "MTS AL FALAHIYAH KEMIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0338",
        "npsn": "60729830",
        "name": "MTS AL MABRUR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0339",
        "npsn": "20622833",
        "name": "MTS NEGERI 2 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0340",
        "npsn": "20622834",
        "name": "MTS DAARUL HIKAM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0341",
        "npsn": "20622771",
        "name": "MTS MASYARIQUL ANWAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0342",
        "npsn": "69895224",
        "name": "MTS RAUDLATUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0343",
        "npsn": "20622740",
        "name": "MTS ARROHMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0344",
        "npsn": "20622825",
        "name": "MTS DHARMA BHAKTI ADY"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0345",
        "npsn": "20622742",
        "name": "MTS DARUL FALAHIYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0346",
        "npsn": "20622762",
        "name": "MTS AL ISLAHIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0347",
        "npsn": "60729809",
        "name": "MTS MIFTAHUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0348",
        "npsn": "20622768",
        "name": "MTS DAAR EL QOLAM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0349",
        "npsn": "20622769",
        "name": "MTS DARUL ISHLAH JAYANTI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0350",
        "npsn": "20622835",
        "name": "MTS MIFTAHUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0351",
        "npsn": "20622741",
        "name": "MTS SYEKH MUBAROK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0352",
        "npsn": "60729807",
        "name": "MTS DAAR EL ROHMAH CISOKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0353",
        "npsn": "20622770",
        "name": "MTS AL AMIN JAYANTI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0354",
        "npsn": "20622763",
        "name": "MTS AZ-ZUHRIYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0355",
        "npsn": "20622836",
        "name": "MTS NURUL MUTTAQIEN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0356",
        "npsn": "20622774",
        "name": "MTS SUBULUS SALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0357",
        "npsn": "20622838",
        "name": "MTS AL HUSNA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0358",
        "npsn": "20622772",
        "name": "MTS DARUL AHSAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0359",
        "npsn": "20622766",
        "name": "MTS DAARUL MUBTADIIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0360",
        "npsn": "20622764",
        "name": "MTS AL HAMIDIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0361",
        "npsn": "20622837",
        "name": "MTS AL IKHLAS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0362",
        "npsn": "20622826",
        "name": "MTS AL ISHLAAHUL UMMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0363",
        "npsn": "20622746",
        "name": "MTS MATHLAUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0364",
        "npsn": "20622743",
        "name": "MTS NURUL JANNAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0365",
        "npsn": "20622744",
        "name": "MTS DARUSSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0366",
        "npsn": "20622745",
        "name": "MTS ASMAUL HUSNA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0367",
        "npsn": "20622747",
        "name": "MTS FATHURROBBANIY"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0369",
        "npsn": "20622810",
        "name": "MTS NEGERI 3 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0370",
        "npsn": "20622734",
        "name": "MTS NURUL ISLAM CISAUK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0371",
        "npsn": "20622809",
        "name": "MTS NEGERI 5 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0372",
        "npsn": "20622737",
        "name": "MTS AL BAROKAH HS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0373",
        "npsn": "20622731",
        "name": "MTS NURUL IBAD TALAGASARI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0374",
        "npsn": "60729810",
        "name": "MTS DAARUL ABROR CIKUPA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0375",
        "npsn": "20622832",
        "name": "MTS NEGERI 6 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0376",
        "npsn": "20622752",
        "name": "MTS DAAR EL GUSTI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0377",
        "npsn": "20622750",
        "name": "MTS AL-LAYYINAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0378",
        "npsn": "20622800",
        "name": "MTS DUAUL FUQORO"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0379",
        "npsn": "20622728",
        "name": "MTS AZZAHRO TORIQOTUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0380",
        "npsn": "20622818",
        "name": "MTS MIFTAHUL ANWAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0381",
        "npsn": "20622776",
        "name": "MTS AL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0382",
        "npsn": "20622801",
        "name": "MTS NURUL YAQIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0383",
        "npsn": "20622749",
        "name": "MTS AL HUSNA YPIHN CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0384",
        "npsn": "20622751",
        "name": "MTS AL HIKMAH CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0385",
        "npsn": "20622727",
        "name": "MTS NURUL ILMI CIKUPA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0386",
        "npsn": "20622729",
        "name": "MTS AL MAMUNIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0387",
        "npsn": "20622748",
        "name": "MTS AL MUAWANAH CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0388",
        "npsn": "20622754",
        "name": "MTS AL BARKAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0389",
        "npsn": "20622753",
        "name": "MTS AL HUSNA KADU"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0390",
        "npsn": "20622777",
        "name": "MTS HASANUSSHOLIHAT PAKULONAN BARAT"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0391",
        "npsn": "20622726",
        "name": "MTS AL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0392",
        "npsn": "20622730",
        "name": "MTS MIFTAHUL JANNAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0393",
        "npsn": "20622817",
        "name": "MTS FATHUL IBAAD MEKARBAKTI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0394",
        "npsn": "20622802",
        "name": "MTS IBNU ROSYAD"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0395",
        "npsn": "20622735",
        "name": "MTS RUHUL BAYAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0396",
        "npsn": "20622804",
        "name": "MTS AL AMAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0397",
        "npsn": "20622819",
        "name": "MTS RIYADUL MUTAALIMIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0398",
        "npsn": "20622803",
        "name": "MTS ANWARUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0399",
        "npsn": "20622828",
        "name": "MTS NEGERI 4 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0400",
        "npsn": "20622784",
        "name": "MTS NURUL FALAH TALOK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0401",
        "npsn": "20622782",
        "name": "MTS ISLAMIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0402",
        "npsn": "60729822",
        "name": "MTS AL KHAIRIYAH SOLOKAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0403",
        "npsn": "20622829",
        "name": "MTS NUR EL IHSAN AL FALAHIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0404",
        "npsn": "20622793",
        "name": "MTS AL FALAHIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0405",
        "npsn": "20622785",
        "name": "MTS AL ITTIHAD TALOK (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0406",
        "npsn": "60729818",
        "name": "MTS PERINTIS FUTUHIYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0407",
        "npsn": "20622794",
        "name": "MTS AL ITTIHAD BLUKBUK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0408",
        "npsn": "20622790",
        "name": "MTS NURUL IHSAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0409",
        "npsn": "20622805",
        "name": "MTS AL IHSAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0410",
        "npsn": "20622807",
        "name": "MTS BABURROHIM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0411",
        "npsn": "20622789",
        "name": "MTS AL HIKMAH PENDAWA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0412",
        "npsn": "20622760",
        "name": "MTS DARUL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0413",
        "npsn": "60729823",
        "name": "MTS NURUL HUDA KEDUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0414",
        "npsn": "20622787",
        "name": "MTS AL KHAIRIYAH KANDANGGEDE"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0415",
        "npsn": "20622795",
        "name": "MTS NURUL HIDAYAH KRONJO"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0416",
        "npsn": "60729816",
        "name": "MTS NURUL HAQ BALARAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0417",
        "npsn": "20622780",
        "name": "MTS MANBA'UL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0418",
        "npsn": "20622788",
        "name": "MTS SUBULUSSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0419",
        "npsn": "20622806",
        "name": "MTS AL JAUHARATUN NAQIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0420",
        "npsn": "69822451",
        "name": "MTS IBNU MASKI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0421",
        "npsn": "20622781",
        "name": "MTS AL FALAHIYAH KEMUNING"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0422",
        "npsn": "20622783",
        "name": "MTS EL SYARIEF"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0423",
        "npsn": "60729817",
        "name": "MTS AL MUNAWAROH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0424",
        "npsn": "60729821",
        "name": "MTS DARUL FALAH AL AROBI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0425",
        "npsn": "20622786",
        "name": "MTS AL KHAERIYAH TALOK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0426",
        "npsn": "60729819",
        "name": "MTS DAARUL AMIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0427",
        "npsn": "60729820",
        "name": "MTS AL AMIN KRESEK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0428",
        "npsn": "20622722",
        "name": "MTS NURUL ADZIM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0429",
        "npsn": "20622798",
        "name": "MTS NURUNNISA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0430",
        "npsn": "60729824",
        "name": "MTS JAMIYATUL QURRO"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0431",
        "npsn": "20622808",
        "name": "MTS ASHHABUL MAIMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0432",
        "npsn": "60729825",
        "name": "MTS NURUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0433",
        "npsn": "20622830",
        "name": "MTS AN NUR BUNAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0434",
        "npsn": "20622796",
        "name": "MTS AL HALIMIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0440",
        "npsn": "60729856",
        "name": "MTS BABUSSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0441",
        "npsn": "60729864",
        "name": "MTS NURUSSA'ADAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0442",
        "npsn": "60729798",
        "name": "MTS NURUL ISLAM RAWA KIDANG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0443",
        "npsn": "60729860",
        "name": "MTS NURUL AKBAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0444",
        "npsn": "60729863",
        "name": "MTS AL ASYIROTUL KHAERIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0445",
        "npsn": "60729865",
        "name": "MTS AL MANAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0446",
        "npsn": "60729861",
        "name": "MTS SIROJUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0447",
        "npsn": "60729855",
        "name": "MTS AL MARWAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0448",
        "npsn": "60729854",
        "name": "MTS AL HASANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0449",
        "npsn": "60729850",
        "name": "MTS DAARUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0450",
        "npsn": "60729857",
        "name": "MTS HIDAYATURROHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0451",
        "npsn": "60729852",
        "name": "MTS DAARUL FAIZ (TIDAK IKUT UJIAN)"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0452",
        "npsn": "60729606",
        "name": "MTS NURUL FALAH KOSAMBI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0453",
        "npsn": "60729858",
        "name": "MTS NURUL ATHFAL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0454",
        "npsn": "60729853",
        "name": "MTS DARUL MU'MININ"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0455",
        "npsn": "60729859",
        "name": "MTS MANBA'UL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0456",
        "npsn": "20622815",
        "name": "MTS NURUL HUDA MALANGNENGAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0457",
        "npsn": "20622813",
        "name": "MTS RAUDLATUL IRFAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0458",
        "npsn": "20622812",
        "name": "MTS NURUL FALAH CIHUNI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0459",
        "npsn": "20622814",
        "name": "MTS DAARUL MUTTAQIEN PAGEDANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0460",
        "npsn": "20622811",
        "name": "MTS NURUL HUDA KP KANDANG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0496",
        "npsn": "60729849",
        "name": "MTS MINHAJUL ABROR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0497",
        "npsn": "20622827",
        "name": "MTS KARYA BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0498",
        "npsn": "20622723",
        "name": "MTS ASSANUSIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0499",
        "npsn": "20622773",
        "name": "MTS HIDAYATUL UMMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0500",
        "npsn": "60729862",
        "name": "MTS TERPADU DZUNNURAINI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0501",
        "npsn": "20614432",
        "name": "MTS DAARUN NADWAH (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0505",
        "npsn": "60729841",
        "name": "MTS AL ITTIHADUL MUBAROK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0506",
        "npsn": "60729826",
        "name": "MTS ASSALIMIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0507",
        "npsn": "20622797",
        "name": "MTS NURUL HUDA WAL ITTIHAD"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0508",
        "npsn": "20622831",
        "name": "MTS AL BAROKAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0509",
        "npsn": "60729851",
        "name": "MTS DAARUL MUJAHIDIN (TIDAK IKUT UJIAN)"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0510",
        "npsn": "20614470",
        "name": "MTS TUNAS BANGSA (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0511",
        "npsn": "60729654",
        "name": "MTS YAPINUR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0512",
        "npsn": "60729811",
        "name": "MTS NURUL ISLAM AL HASANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0513",
        "npsn": "60729867",
        "name": "MTS ASSAFIIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0514",
        "npsn": "20622756",
        "name": "MTS DAAR EL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0515",
        "npsn": "20622757",
        "name": "MTS NURUL HUDA CURUG WETAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0546",
        "npsn": "20622765",
        "name": "MTS JAMBE"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0548",
        "npsn": "60729842",
        "name": "MTS AL MUSTAFIYAH RAJEG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0549",
        "npsn": "60729874",
        "name": "MTS JANNATUL AMAL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0550",
        "npsn": "20622822",
        "name": "MTS BANI IHSAN RAJEG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0551",
        "npsn": "60729815",
        "name": "MTS AL FIRDAUS GELAM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0552",
        "npsn": "20622816",
        "name": "MTS AL FALAHIYAH PANONGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0553",
        "npsn": "20622724",
        "name": "MTS AL ISTIQOMAH CIKUPA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0554",
        "npsn": "20622758",
        "name": "MTS MIFTAHUL KHAER CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0555",
        "npsn": "60729866",
        "name": "MTS RAUDLATUL IRFAN HASANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0556",
        "npsn": "60729808",
        "name": "MTS BAHRUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0557",
        "npsn": "20622738",
        "name": "MTS AL HASIMIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0558",
        "npsn": "20622761",
        "name": "MTS YABIKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0559",
        "npsn": "20622775",
        "name": "MTS AVICENNA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0560",
        "npsn": "20622719",
        "name": "MTS AL FIKR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0561",
        "npsn": "20622779",
        "name": "MTS SATU ATAP RIYADLUL JANNAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0562",
        "npsn": "20622791",
        "name": "MTS NURUL HUDA PAGENJAHAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0563",
        "npsn": "20622799",
        "name": "MTS NURUL ANSHOR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0565",
        "npsn": "60729655",
        "name": "MTS SATU ATAP DARUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0566",
        "npsn": "60727327",
        "name": "MTS MIFTAHUN NAJAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0567",
        "npsn": "60729656",
        "name": "MTS SA BALARAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0568",
        "npsn": "60729657",
        "name": "MTS NAHDLATUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0569",
        "npsn": "20622792",
        "name": "MTS AL AMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0570",
        "npsn": "20622718",
        "name": "MTS ESA NUSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0571",
        "npsn": "20622725",
        "name": "MTS SA AR ROSYIDIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0572",
        "npsn": "20622733",
        "name": "MTS NURUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0573",
        "npsn": "20622739",
        "name": "MTS SA AL HUSNA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0574",
        "npsn": "20616409",
        "name": "SMP ISLAM BAITUS SAADAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0575",
        "npsn": "69765049",
        "name": "SMP LENTERA HARAPAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0576",
        "npsn": "20616035",
        "name": "SMP NURUL ISLAM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0577",
        "npsn": "20616425",
        "name": "SMP ISLAM TERPADU ALIA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0578",
        "npsn": "20616227",
        "name": "SMP CITRA BERKAT"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0579",
        "npsn": "20623250",
        "name": "SMP PEMBANGUNAN BERSAMA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0580",
        "npsn": "20622278",
        "name": "SMP CITRA BANGSA PERSADA (NON AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0581",
        "npsn": "69756296",
        "name": "SMP NEGERI 2 SUKAMULYA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0582",
        "npsn": "20622137",
        "name": "SMP PERJUANGAN BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0583",
        "npsn": "20623121",
        "name": "SMP GEMA ISLAMI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0584",
        "npsn": "20616335",
        "name": "SMP INSAN ROBBANI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0585",
        "npsn": "20623122",
        "name": "SMP NURUL IMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0586",
        "npsn": "20615986",
        "name": "SMP ISLAM AL-MI'RAJ"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0587",
        "npsn": "20616359",
        "name": "SMP AL-HASANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0588",
        "npsn": "20616360",
        "name": "SMP AL HASYIMIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0589",
        "npsn": "20616406",
        "name": "SMP AR-RAJIH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0590",
        "npsn": "20622275",
        "name": "SMP PLUS MUTIARA BANGSA KEMIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0591",
        "npsn": "20616175",
        "name": "SMP PLUS BINA INSAN KAMIL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0592",
        "npsn": "20615569",
        "name": "SMP AL-HIDAYAH SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0593",
        "npsn": "20616162",
        "name": "SMP ADITYA KARYA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0594",
        "npsn": "20616393",
        "name": "SMP ISLAM TERPADU BUNAYYA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0595",
        "npsn": "20616476",
        "name": "SMP INSAN MANDIRI CARINGIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0596",
        "npsn": "20615570",
        "name": "SMP PLUS BANI USMAN MANUNGGAL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0597",
        "npsn": "20616344",
        "name": "SMP BANI ADNA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0598",
        "npsn": "60728440",
        "name": "SMP HJ. SARINAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0599",
        "npsn": "20622281",
        "name": "SMP ISLAM BANI TAMIM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0600",
        "npsn": "69757158",
        "name": "SMP PLUS PERMATA SARI 1"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0601",
        "npsn": "69787353",
        "name": "SMP DAARUL MUTTAQIEN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0602",
        "npsn": "20616348",
        "name": "SMP SEMERU"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0603",
        "npsn": "20616435",
        "name": "SMP INSAN CITA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0604",
        "npsn": "69764512",
        "name": "SMP YANIDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0605",
        "npsn": "69765092",
        "name": "SMP ISLAM JAMIYATUL QURO"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0606",
        "npsn": "20622182",
        "name": "SMP CISAUK RAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0607",
        "npsn": "69787360",
        "name": "SMP TUNAS HARAPAN MEKAR BARU"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0608",
        "npsn": "60726346",
        "name": "SMP TUNAS MULIA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0609",
        "npsn": "69955996",
        "name": "MTS AL MADANI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0610",
        "npsn": "60728760",
        "name": "MTS LA TAHZAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0611",
        "npsn": "20622732",
        "name": "MTS NURUL HUDA SAMPORA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0612",
        "npsn": "20622720",
        "name": "MTS ASHHABUL YAMIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0613",
        "npsn": "20622721",
        "name": "MTS AL MAGHFIROH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "14",
        "kode_sek": "0614",
        "npsn": "69725614",
        "name": "MTS MATHLAUL FAJRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0615",
        "npsn": "69760732",
        "name": "SMP DIAN BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0616",
        "npsn": "20616363",
        "name": "SMP BODHISATTA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0617",
        "npsn": "69831529",
        "name": "SMP EL-MARZUKIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "15",
        "kode_sek": "0618",
        "npsn": "69816282",
        "name": "MTS NURUL HUDA BABAKAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0619",
        "npsn": "69955997",
        "name": "MTS RAUDLATUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0620",
        "npsn": "69816283",
        "name": "MTS NURUL AMIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0621",
        "npsn": "20622276",
        "name": "SMP AL-FALAHIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0622",
        "npsn": "60728444",
        "name": "SMP PLUS AS-SA'ADAH 2"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0623",
        "npsn": "20622282",
        "name": "SMP NEGERI 6 SOLEAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0624",
        "npsn": "20623120",
        "name": "SMP NEGERI 7 SOLEAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0625",
        "npsn": "69761842",
        "name": "SMP MIFTAHUSSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0626",
        "npsn": "69788720",
        "name": "SMP HIKMATUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0627",
        "npsn": "20623237",
        "name": "SMP YAPISDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0628",
        "npsn": "69757156",
        "name": "SMP ISLAM TERPADU NUR ANTIKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0629",
        "npsn": "69755236",
        "name": "SMP JAKARTA NANYANG SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0630",
        "npsn": "69858824",
        "name": "SMP AL FATTAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0631",
        "npsn": "60728441",
        "name": "SMP IT DAARUL MUKHTARIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0632",
        "npsn": "69765090",
        "name": "SMP BINA MANDIRI RAJEG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0633",
        "npsn": "20622280",
        "name": "SMP BHAKTI PERTIWI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0634",
        "npsn": "69830524",
        "name": "SMP LABSCHOOL TANGERANG RAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0635",
        "npsn": "69858809",
        "name": "SMP ISLAM BILINGUAL NIHAAYATUZZEIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0636",
        "npsn": "69858486",
        "name": "SMP SUARI TERANG SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0637",
        "npsn": "69757157",
        "name": "SMP BUDI MULIA KEMIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0638",
        "npsn": "20622277",
        "name": "SMP NEGERI 3 MEKARBARU"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0639",
        "npsn": "60728439",
        "name": "SMP ISLAM NURUS SYURO"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0640",
        "npsn": "20622279",
        "name": "SMP LENTERA HARAPAN PH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0641",
        "npsn": "69858831",
        "name": "SMP NEGERI 3 SEPATAN TIMUR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0642",
        "npsn": "69888401",
        "name": "SMP EKA DHARMA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0643",
        "npsn": "69888417",
        "name": "SMP SYAFANA ISLAMIC SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0644",
        "npsn": "60728442",
        "name": "SMP GRACIA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0645",
        "npsn": "69764516",
        "name": "SMP SMART SYAHIDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0646",
        "npsn": "69883631",
        "name": "SMP ISLAM NURUL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0647",
        "npsn": "69842624",
        "name": "SMP NEGERI 4 SOLEAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0648",
        "npsn": "69899772",
        "name": "SMP AL-ISHLAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0649",
        "npsn": "69859385",
        "name": "SMP IT MADINATUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0650",
        "npsn": "69765091",
        "name": "SMP IT AL-HUSEIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0651",
        "npsn": "69894052",
        "name": "SMP HARADIKSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0652",
        "npsn": "69859750",
        "name": "SMP PUTRA RIFARA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0653",
        "npsn": "69831517",
        "name": "SMP BHAKTI ANANDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0654",
        "npsn": "69889042",
        "name": "SMP IT NURUL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0655",
        "npsn": "69774720",
        "name": "SMP NEGERI 3 KRESEK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0656",
        "npsn": "69831975",
        "name": "SMP DAARUT TASBIH AR RAFI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0657",
        "npsn": "69894148",
        "name": "SMP QUEEN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0658",
        "npsn": "69859395",
        "name": "SMP ISLAM AL-UMM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0659",
        "npsn": "69765093",
        "name": "SMP INSAN KAMIL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0660",
        "npsn": "69888552",
        "name": "SMP NEGERI 4 CIKUPA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0661",
        "npsn": "69896003",
        "name": "SMP PELITA HARAPAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0662",
        "npsn": "69838902",
        "name": "SMP ISLAM INFORMATIKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0663",
        "npsn": "69897023",
        "name": "SMP 2 DAAR EL QOLAM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0664",
        "npsn": "69815394",
        "name": "SMP ISLAM HARAPAN IBU SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0665",
        "npsn": "69986437",
        "name": "SMP GENIUS"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0666",
        "npsn": "69889096",
        "name": "SMP NEGERI 2 SEPATAN TIMUR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0667",
        "npsn": "69929462",
        "name": "SMP AL-AMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0668",
        "npsn": "69883642",
        "name": "SMP ISLAM AR-RAHMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "0669",
        "npsn": "69915648",
        "name": "SMP TK CHARISMA GLOBAL SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0670",
        "npsn": "69859652",
        "name": "SMP CITRA NUSANTARA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0671",
        "npsn": "69949728",
        "name": "SMP WAHANA HARAPAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "05",
        "kode_sek": "0672",
        "npsn": "69938655",
        "name": "SMP ISLAM LADUNI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0673",
        "npsn": "69878998",
        "name": "SMP ARRAHMAN SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "0674",
        "npsn": "69893250",
        "name": "SMP AL-KARIM"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0675",
        "npsn": "69894051",
        "name": "SMP GARUDA TEKNOLOGI PANTURA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0676",
        "npsn": "69895490",
        "name": "SMP PLUS ANAK BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0677",
        "npsn": "69929467",
        "name": "SMP YAPSI AL-AMIR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0678",
        "npsn": "69929471",
        "name": "SMP HARAPAN AL A'LA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0679",
        "npsn": "69941511",
        "name": "MTS SOLEAR"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0680",
        "npsn": "69902841",
        "name": "SMP IT CORDOVA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0681",
        "npsn": "69945741",
        "name": "SMP AL-BAYYINAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0682",
        "npsn": "69880778",
        "name": "SMP NURUL IMAN ASHOPI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "0683",
        "npsn": "69894049",
        "name": "SMP ANTARIKSA GLOBAL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0684",
        "npsn": "69888830",
        "name": "SMP NEGERI 3 PAGEDANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0685",
        "npsn": "69929466",
        "name": "SMP BINA POTENSI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "10",
        "kode_sek": "0686",
        "npsn": "69927004",
        "name": "SMP MITRA PERMATA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0687",
        "npsn": "69950815",
        "name": "SMP KRISTEN IPEKA BSD"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "16",
        "kode_sek": "0688",
        "npsn": "69955998",
        "name": "MTS AN-NAHDIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0689",
        "npsn": "69894147",
        "name": "SMP NEGERI 2 PANONGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0690",
        "npsn": "69923656",
        "name": "SMP ISLAM DARUQUTNI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0691",
        "npsn": "69954822",
        "name": "SMP IT AL-AMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0692",
        "npsn": "69929474",
        "name": "SMP QURAN INSAN PRATAMA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0693",
        "npsn": "69893251",
        "name": "SMP AR RISALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0694",
        "npsn": "69899148",
        "name": "SMP BINA MANDIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0695",
        "npsn": "69953400",
        "name": "SMP MIFTAHUL JANNAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0696",
        "npsn": "69933859",
        "name": "SMP INSAN MADANI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0697",
        "npsn": "69899155",
        "name": "SMP ISLAM NURUL QOLBU"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "0698",
        "npsn": "69938372",
        "name": "SMP AL-AZHAR SYIFA BUDI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "0699",
        "npsn": "69929713",
        "name": "SMPS AL MAIDAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "0700",
        "npsn": "69893252",
        "name": "SMPS ISLAM AL HUSEN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0701",
        "npsn": "69976857",
        "name": "SMP ISLAM YABSI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0702",
        "npsn": "69966082",
        "name": "SMPS JFK SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "60",
        "kode_sek": "0703",
        "npsn": "69972722",
        "name": "SMPS SAM SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "60",
        "kode_sek": "0704",
        "npsn": "69967909",
        "name": "SMPIT AL ITQON"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "13",
        "kode_sek": "0705",
        "npsn": "69977984",
        "name": "MTS AL-BISRIYYIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "12",
        "kode_sek": "0706",
        "npsn": "69977985",
        "name": "MTS AL ITTIHAD"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "11",
        "kode_sek": "0707",
        "npsn": "69977987",
        "name": "MTS AL MUHTADIIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0708",
        "npsn": "69933864",
        "name": "SMPS YARSI MEDIKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0709",
        "npsn": "69955385",
        "name": "SMP ISLAM NURUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0710",
        "npsn": "69945663",
        "name": "SMPS KIRANA TALENTA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "0711",
        "npsn": "69971533",
        "name": "SMP ISLAM CENDEKIA MULIA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0712",
        "npsn": "69955383",
        "name": "SMPI AN NOFAL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "01",
        "kode_sek": "0713",
        "npsn": "69949710",
        "name": "SMP IT AL-MURTAJA HARAPAN BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "59",
        "kode_sek": "0714",
        "npsn": "69982812",
        "name": "SMPTK QUIVER CENTER ACADEMY"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "60",
        "kode_sek": "0715",
        "npsn": "69970425",
        "name": "SMP TAHFIZH QURAN RYDHA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "60",
        "kode_sek": "0716",
        "npsn": "69954819",
        "name": "SMP GARUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "60",
        "kode_sek": "0717",
        "npsn": "69973064",
        "name": "SMPS BHINNEKA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "60",
        "kode_sek": "0718",
        "npsn": "69977397",
        "name": "SMP ISLAM ASHHABUL MAIMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "66",
        "kode_sek": "0719",
        "npsn": "69955216",
        "name": "SMPS ISLAM AL-AZHAR SUKAWALI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "1001",
        "npsn": "69966297",
        "name": "SMPIT AT-TAQWA GARUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "77",
        "kode_sek": "1002",
        "npsn": "69977986",
        "name": "MTS NURUL INAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "1003",
        "npsn": "69966265",
        "name": "SMPN 3 CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "09",
        "kode_sek": "1004",
        "npsn": "69971477",
        "name": "SMP BINA MANDIRI TELUKNAGA"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "1005",
        "npsn": "69970250",
        "name": "SMP HAROKATUL YAMANIE"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "1006",
        "npsn": "69966880",
        "name": "SMPN 3 SEPATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "03",
        "kode_sek": "1007",
        "npsn": "69977398",
        "name": "SMP GITA BANGSA SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "02",
        "kode_sek": "1008",
        "npsn": "69992303",
        "name": "SMP HARVEST CHRISTIAN SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "04",
        "kode_sek": "1009",
        "npsn": "69966264",
        "name": "SMPN 2 KRESEK"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "08",
        "kode_sek": "1010",
        "npsn": "69979813",
        "name": "SMP DARUL MUIN"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "07",
        "kode_sek": "1011",
        "npsn": "69980937",
        "name": "SMP AL-USWAH"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "06",
        "kode_sek": "1012",
        "npsn": "69972234",
        "name": "SMP ISLAM MADINATUL ILMI"
      },
      {
        "province_id": "36",
        "regency_id": "3603",
        "kode_prov": "30",
        "kode_rayon": "08",
        "kode_sr": "66",
        "kode_sek": "1013",
        "npsn": "69995066",
        "name": "MTS AL-HAFIZH RAJEG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0001",
        "npsn": "20605149",
        "name": "SMP NEGERI 1 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0002",
        "npsn": "20605175",
        "name": "SMP NEGERI 2 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0003",
        "npsn": "20605164",
        "name": "SMP NEGERI 3 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0004",
        "npsn": "20605166",
        "name": "SMP NEGERI 4 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0005",
        "npsn": "20614064",
        "name": "SMP NEGERI 5 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0006",
        "npsn": "20605150",
        "name": "SMP NEGERI 6 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0007",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 6 SERANG (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0008",
        "npsn": "20605224",
        "name": "SMP NEGERI 7 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0009",
        "npsn": "20605224",
        "name": "SMP NEGERI TERBUKA 7 SERANG (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0010",
        "npsn": "20605154",
        "name": "SMP NEGERI 8 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0011",
        "npsn": "20605141",
        "name": "SMP NEGERI 9 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0012",
        "npsn": "20605171",
        "name": "SMP NEGERI 10 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0013",
        "npsn": "20605226",
        "name": "SMP NEGERI 11 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0014",
        "npsn": "20605176",
        "name": "SMP NEGERI 12 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0015",
        "npsn": "20605167",
        "name": "SMP NEGERI 13 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0016",
        "npsn": "20614710",
        "name": "SMP NEGERI TERBUKA 13 SERANG (TIDAK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0017",
        "npsn": "20605168",
        "name": "SMP NEGERI 14 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0018",
        "npsn": "20605169",
        "name": "SMP NEGERI 15 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0019",
        "npsn": "20605144",
        "name": "SMP NEGERI 16 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0020",
        "npsn": "20614026",
        "name": "SMP NEGERI 17 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0021",
        "npsn": "20605177",
        "name": "SMP NEGERI 18 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0022",
        "npsn": "20605165",
        "name": "SMP NEGERI 19 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0023",
        "npsn": "20605074",
        "name": "SMP PGRI 1 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0024",
        "npsn": "20605075",
        "name": "SMP PGRI 2 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0025",
        "npsn": "20605070",
        "name": "SMP MUHAMMADIYAH SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0026",
        "npsn": "20615914",
        "name": "SMP AL - KHAERIYAH SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0027",
        "npsn": "20605190",
        "name": "SMP YP-17.1 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0028",
        "npsn": "20605191",
        "name": "SMP YP-17 2 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0029",
        "npsn": "20605049",
        "name": "SMP IHSANIYAH SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0030",
        "npsn": "20605050",
        "name": "SMP INFORMATIKA SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0031",
        "npsn": "20605187",
        "name": "SMP YASMU SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0032",
        "npsn": "20605052",
        "name": "SMP ISLAM AL - AZHAR 11 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0033",
        "npsn": "20605079",
        "name": "SMP MARDI YUANA SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0034",
        "npsn": "20615931",
        "name": "SMP ISLAM PLUS AL - MUNAWAROH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0035",
        "npsn": "20605068",
        "name": "SMP DAARUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0036",
        "npsn": "20615930",
        "name": "SMP ISLAM TERPADU AL - IZZAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0037",
        "npsn": "20605087",
        "name": "SMP KHAIRUL HUDA SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0038",
        "npsn": "20614021",
        "name": "SMP NUUR EL - BANTANY SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0039",
        "npsn": "20614025",
        "name": "SMP PENABUR"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0040",
        "npsn": "20615928",
        "name": "SMP ISLAM DAARUL YAQIIN CIPOCOK JAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0041",
        "npsn": "20605192",
        "name": "SMP PLUS NURUL MA'ARIF"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0042",
        "npsn": "20614016",
        "name": "SMP INSAN MADANI SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0043",
        "npsn": "20614028",
        "name": "SMP IT AL - GHIFARI SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0044",
        "npsn": "20605184",
        "name": "SMP SHOHIBUL BAROKAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0045",
        "npsn": "20605202",
        "name": "SMP PGRI WALANTAKA"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0046",
        "npsn": "20605083",
        "name": "SMP IT LA ROYBA"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0047",
        "npsn": "20614018",
        "name": "SMP AL - KHAERIYAH PENGAMPELAN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0048",
        "npsn": "20614020",
        "name": "SMP NEGERI 20 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0049",
        "npsn": "20614019",
        "name": "SMP NEGERI 22 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0050",
        "npsn": "20616052",
        "name": "SMP NEGERI SATU ATAP SAYAR"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0051",
        "npsn": "20614161",
        "name": "SMP AL ALAWIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0052",
        "npsn": "20615929",
        "name": "SMP DARUL MUQOMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0053",
        "npsn": "20615916",
        "name": "SMP ISLAMIYAH GUPPI"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0054",
        "npsn": "20614976",
        "name": "SMP PGRI CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0055",
        "npsn": "20614022",
        "name": "SMP NEGERI SATU ATAP GELAM"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0056",
        "npsn": "20615568",
        "name": "SMP NEGERI 23 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0057",
        "npsn": "20623069",
        "name": "MTS NEGERI 1 KOTA SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0058",
        "npsn": "69881731",
        "name": "MTS DAARUL MASYUROH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0059",
        "npsn": "20623077",
        "name": "MTS AL BATTANI SEPANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0060",
        "npsn": "20605421",
        "name": "MTS NURUL AMAL"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0061",
        "npsn": "69881732",
        "name": "MTS SA HIDAYATUL ATHFAL"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0062",
        "npsn": "20614107",
        "name": "MTS HIDAYATUT THOLIBIN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0063",
        "npsn": "69756679",
        "name": "MTS BANI ADUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0064",
        "npsn": "20623073",
        "name": "MTS AL AZIZ"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0065",
        "npsn": "20623076",
        "name": "MTS PERSIS KEBAHARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0066",
        "npsn": "20623070",
        "name": "MTS DAAR AL ILMI SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0067",
        "npsn": "20623075",
        "name": "MTS NURUL ISLAM SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0068",
        "npsn": "20623067",
        "name": "MTS MASARRATUL MUTAALLIMIN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0069",
        "npsn": "69895232",
        "name": "MTS KHOIRUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0070",
        "npsn": "20623068",
        "name": "MTS AL KHAERIYAH BADAMUSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0071",
        "npsn": "20623071",
        "name": "MTS FAHMIL QURAN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0072",
        "npsn": "20605500",
        "name": "MTS DAAR EL ISTIQOMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0073",
        "npsn": "20623059",
        "name": "MTS AL ISTAM"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0074",
        "npsn": "69881730",
        "name": "MTS IHSANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0075",
        "npsn": "20623072",
        "name": "MTS AT TAQWA"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0076",
        "npsn": "20623074",
        "name": "MTS ARRASYADIYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0077",
        "npsn": "20623058",
        "name": "MTS AL FATHANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0078",
        "npsn": "20605716",
        "name": "MTS AL ISLAM TEGAL DUREN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0079",
        "npsn": "20623061",
        "name": "MTS JAUHAROTUSSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0080",
        "npsn": "20623060",
        "name": "MTS DARUL IRFAN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0081",
        "npsn": "20605738",
        "name": "MTS AL MUBAROK SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0082",
        "npsn": "20623063",
        "name": "MTS NEGERI 2 KOTA SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0083",
        "npsn": "69895235",
        "name": "MTS AL RAHMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0084",
        "npsn": "20623066",
        "name": "MTS AL FALAH KEBON JATI"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0085",
        "npsn": "20623065",
        "name": "MTS AL KAUTSAR KARANG KITRI"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0086",
        "npsn": "20623078",
        "name": "MTS AL KHAERIYAH PIPITAN WALANTAKA"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0087",
        "npsn": "20623080",
        "name": "MTS AL KHAERIYAH PABUARAN WALANTAKA"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0088",
        "npsn": "20623081",
        "name": "MTS AL KHAERIYAH KALODRAN WALANTAKA"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0089",
        "npsn": "69895233",
        "name": "MTS INSAN AZKIA"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0090",
        "npsn": "69881734",
        "name": "MTS AL HIDAYAH NUFUS SIMANGU"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0091",
        "npsn": "69881733",
        "name": "MTS DARURRAHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0092",
        "npsn": "20623079",
        "name": "MTS MATHLAUL ANWAR BENGKALOK"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0093",
        "npsn": "20614034",
        "name": "SMP NEGERI 21 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0094",
        "npsn": "20615957",
        "name": "SMP NEGERI 26 KOTA SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0095",
        "npsn": "20615740",
        "name": "SMP NEGERI SATU ATAP CURUG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0096",
        "npsn": "20615920",
        "name": "SMP RIYADUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0097",
        "npsn": "20615918",
        "name": "SMP NURURROHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0098",
        "npsn": "20615157",
        "name": "SMP NURUL IHSAN PANGGUNGJATI"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0099",
        "npsn": "20615917",
        "name": "SMP MABDAIL FALAH CURUG (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0100",
        "npsn": "69757138",
        "name": "MTS AL ULYA AL MUBAROK"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0101",
        "npsn": "20623064",
        "name": "MTS MAMBAUL HIKAM"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0102",
        "npsn": "69822456",
        "name": "MTS ARDANIAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0103",
        "npsn": "69895234",
        "name": "MTS MATHLAUL ANWAR CIGOONG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0104",
        "npsn": "20615932",
        "name": "SMP NEGERI 24 KOTA SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0105",
        "npsn": "20615915",
        "name": "SMP ISLAM DARUSSALAM PIPITAN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0106",
        "npsn": "20615919",
        "name": "SMP RACHMATOELLAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0107",
        "npsn": "20615933",
        "name": "SMP NEGERI 25 KOTA SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0108",
        "npsn": "20622206",
        "name": "SMP ISLAM AL-WUTSQO SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0109",
        "npsn": "20616381",
        "name": "SMP ARDANIAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0110",
        "npsn": "20616610",
        "name": "SMP PERADABAN SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0111",
        "npsn": "60725043",
        "name": "SMP IT HIDAYATUT THALIBIN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0112",
        "npsn": "20622285",
        "name": "MTS ARRAHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0113",
        "npsn": "20622222",
        "name": "SMP IT NURUDZ DZIKRI"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0114",
        "npsn": "20622180",
        "name": "SMP DARUNAJAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0115",
        "npsn": "78300125",
        "name": "SMP TERBUKA 24 KOTA SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0116",
        "npsn": "69788434",
        "name": "MTS AL-DZIKRI"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0117",
        "npsn": "69788435",
        "name": "MTS AL IHSAN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0118",
        "npsn": "69788436",
        "name": "MTS MIFTAHUL JANNAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0119",
        "npsn": "69816298",
        "name": "MTS MADARIJUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0120",
        "npsn": "69757459",
        "name": "MTS ARRAHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0121",
        "npsn": "69753583",
        "name": "SMP ISLAM PARISKIAN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0122",
        "npsn": "69787035",
        "name": "SMP ISLAM TIRTAYASA"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0123",
        "npsn": "69816300",
        "name": "MTS JARIYATUL ISLAMIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0124",
        "npsn": "69881729",
        "name": "MTS NURUL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0125",
        "npsn": "69895236",
        "name": "MTS AT THAHIRIYAH CIROGOL"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "02",
        "kode_sek": "0126",
        "npsn": "69881364",
        "name": "SMP IHSAN CERDAS MANDIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0127",
        "npsn": "69816299",
        "name": "MTS NURUL IKHLAS"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0128",
        "npsn": "69895747",
        "name": "MTS AL-AZIZIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0129",
        "npsn": "69881729",
        "name": "MTS NURUL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "04",
        "kode_sek": "0130",
        "npsn": "69895746",
        "name": "MTS FADILATUL ILMI"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0131",
        "npsn": "69941515",
        "name": "MTS ATTAUHIDIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0132",
        "npsn": "69941516",
        "name": "MTS AL-ABQARY"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0133",
        "npsn": "69941514",
        "name": "MTS AN-NASR"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0134",
        "npsn": "69918549",
        "name": "SMP ISLAM TERPADU SIDRATUL MUNTAHA"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "35",
        "kode_sek": "0135",
        "npsn": "69925991",
        "name": "SMP TK ROYAL PATH ACADEMY"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0136",
        "npsn": "69942503",
        "name": "SMP IT WIDYA CENDEKIA"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0137",
        "npsn": "69960804",
        "name": "SMP IT AFTA MULTIMEDIA"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0138",
        "npsn": "69969416",
        "name": "SMP IT INSANTAMA"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0139",
        "npsn": "69963503",
        "name": "MTS ATTAUFIQIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0140",
        "npsn": "69952670",
        "name": "SMP IT BAIT ET-TAUHIED"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0141",
        "npsn": "69944834",
        "name": "SMP YAN BANTEN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "03",
        "kode_sek": "0142",
        "npsn": "69963502",
        "name": "MTS ANNAHL"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "01",
        "kode_sek": "0143",
        "npsn": "69959970",
        "name": "SMPIT AZKIA WIJAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "06",
        "kode_sek": "1001",
        "npsn": "69977953",
        "name": "MTS SABILURRAHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "11",
        "kode_sek": "1002",
        "npsn": "69977954",
        "name": "MTS AL-HUDA KELANGGARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3673",
        "kode_prov": "30",
        "kode_rayon": "01",
        "kode_sr": "",
        "kode_sek": "1003",
        "npsn": "69994700",
        "name": "MTS DARUL ARQAM MUHAMMADIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0001",
        "npsn": "20601891",
        "name": "SMP NEGERI 1 RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0002",
        "npsn": "20601854",
        "name": "SMP NEGERI 7 RANGKASBITUNG (TUTUP)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0003",
        "npsn": "20601853",
        "name": "SMP NEGERI 1 KALANGANYAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0005",
        "npsn": "20601802",
        "name": "SMP NEGERI 1 CIBADAK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0007",
        "npsn": "20613490",
        "name": "SMP MARDI YUANA RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0008",
        "npsn": "20601857",
        "name": "SMP NEGERI 4 RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0009",
        "npsn": "20601855",
        "name": "SMP NEGERI 6 RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0010",
        "npsn": "20601852",
        "name": "SMP NEGERI 7 RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0011",
        "npsn": "20601902",
        "name": "SMP NEGERI 2 CIBADAK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0012",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 2 CIBADAK (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0013",
        "npsn": "20601860",
        "name": "SMP NEGERI 3 RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0014",
        "npsn": "20601856",
        "name": "SMP NEGERI 5 RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0015",
        "npsn": "69758272",
        "name": "SMP NEGERI TERBUKA 5 RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0016",
        "npsn": "20601909",
        "name": "SMP NEGERI 2 MAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0017",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 2 MAJA (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0018",
        "npsn": "20601889",
        "name": "SMP NEGERI 1 SAJIRA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0020",
        "npsn": "20601906",
        "name": "SMP NEGERI 2 SAJIRA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0021",
        "npsn": "20601895",
        "name": "SMP NEGERI 1 MAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0023",
        "npsn": "20601897",
        "name": "SMP NEGERI 1 CURUGBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0024",
        "npsn": "20601897",
        "name": "SMP NEGERI TERBUKA 1 CURUGBITUNG (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0025",
        "npsn": "20601808",
        "name": "SMP AL - BAYAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0026",
        "npsn": "20601907",
        "name": "SMP NEGERI 2 RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0027",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 2 RANGKASBITUNG (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0028",
        "npsn": "20601859",
        "name": "SMP NEGERI 3 SAJIRA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0029",
        "npsn": "20601862",
        "name": "SMP NEGERI 3 MAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0030",
        "npsn": "20607851",
        "name": "SMP NEGERI 4 SAJIRA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0031",
        "npsn": "20601898",
        "name": "SMP NEGERI 1 CIPANAS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0032",
        "npsn": "20601912",
        "name": "SMP NEGERI 2 CIPANAS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0033",
        "npsn": "20601893",
        "name": "SMP NEGERI 1 MUNCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0034",
        "npsn": "69758267",
        "name": "SMP NEGERI TERBUKA 1 MUNCANG (TIDAK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0035",
        "npsn": "20607880",
        "name": "SMP NEGERI 1 SOBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0036",
        "npsn": "20607853",
        "name": "SMP LA TANSA LEBAKGEDONG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0037",
        "npsn": "20607817",
        "name": "SMP NURUL MADAANY CIPANAS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0038",
        "npsn": "20601905",
        "name": "SMP NEGERI 2 SOBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0039",
        "npsn": "20607882",
        "name": "SMP NEGERI 1 LEBAKGEDONG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0040",
        "npsn": "20613482",
        "name": "SMP AL FARHAN CIPANAS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0041",
        "npsn": "20601882",
        "name": "SMP NEGERI 3 CIBEBER"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0042",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 3 CIBEBER (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0043",
        "npsn": "20607885",
        "name": "SMP NEGERI 3 CIPANAS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0044",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 1 CIPANAS (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0046",
        "npsn": "20601899",
        "name": "SMP NEGERI 1 CIMARGA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0048",
        "npsn": "20601913",
        "name": "SMP NEGERI 2 CIMARGA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0049",
        "npsn": "20601864",
        "name": "SMP NEGERI 3 CIMARGA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0050",
        "npsn": "20607985",
        "name": "SMP NEGERI 1 LEUWIDAMAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0051",
        "npsn": "20601910",
        "name": "SMP NEGERI 2 LEUWIDAMAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0052",
        "npsn": "69758270",
        "name": "SMP NEGERI TERBUKA 2 LEUWIDAMAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0053",
        "npsn": "20613635",
        "name": "SMP NEGERI 1 BOJONGMANIK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0055",
        "npsn": "20601901",
        "name": "SMP NEGERI 1 CIRINTEN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0056",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 1 CIRINTEN (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0057",
        "npsn": "20601863",
        "name": "SMP NEGERI 3 LEUWIDAMAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0058",
        "npsn": "20613476",
        "name": "SMP AL - HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0059",
        "npsn": "20607818",
        "name": "SMP TERPADU BANI RUSYDI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0060",
        "npsn": "20613922",
        "name": "SMP NEGERI 4 LEUWIDAMAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0061",
        "npsn": "20601886",
        "name": "SMP NEGERI 1 WARUNGGUNUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0062",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 1 WARUNGGUNUNG (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0063",
        "npsn": "20601903",
        "name": "SMP NEGERI 2 WARUNGGUNUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0064",
        "npsn": "20601782",
        "name": "SMP NEGERI 1 CIKULUR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0065",
        "npsn": "20601915",
        "name": "SMP NEGERI 2 CIKULUR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0066",
        "npsn": "20601849",
        "name": "SMP NEGERI 1 CILELES"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0068",
        "npsn": "20607881",
        "name": "SMP NEGERI 2 CILELES"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0069",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 2 CILELES (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0070",
        "npsn": "20601807",
        "name": "SMP BANTEN RAYA CIKULUR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0071",
        "npsn": "20607861",
        "name": "SMP PGRI CILELES"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0072",
        "npsn": "20601805",
        "name": "SMP PLUS MATHLA'UL ANWAR CIBUAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0073",
        "npsn": "20601858",
        "name": "SMP NEGERI 3 WARUNGGUNUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0074",
        "npsn": "20607860",
        "name": "SMP NEGERI 4 WARUNGGUNUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0075",
        "npsn": "20601896",
        "name": "SMP NEGERI 1 GUNUNGKENCANA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0077",
        "npsn": "20601911",
        "name": "SMP NEGERI 2 GUNUNGKENCANA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0078",
        "npsn": "20601804",
        "name": "SMP NEGERI 1 BANJARSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0079",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 1 BANJARSARI (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0080",
        "npsn": "20601884",
        "name": "SMP NEGERI 2 BANJARSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0081",
        "npsn": "69758269",
        "name": "SMP NEGERI TERBUKA 2 BANJARSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0082",
        "npsn": "20601883",
        "name": "SMP NEGERI 3 BANJARSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0083",
        "npsn": "20601894",
        "name": "SMP NEGERI 1 MALINGPING"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0084",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 1 MALINGPING (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0085",
        "npsn": "20601887",
        "name": "SMP NEGERI 1 WANASALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0086",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 1 MANDIRI MALINGPING (TDK AKTIF"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0087",
        "npsn": "20601904",
        "name": "SMP NEGERI 2 WANASALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0088",
        "npsn": "20601801",
        "name": "SMP NEGERI 1 CIJAKU"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0090",
        "npsn": "20601908",
        "name": "SMP NEGERI 1 CIHARA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0091",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 1 CIHARA (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0092",
        "npsn": "20613483",
        "name": "SMP DAARUL FIKRI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0093",
        "npsn": "20607816",
        "name": "SMP BERDIKARI CIJAKU"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0094",
        "npsn": "20607813",
        "name": "SMP NEGERI 2 MALINGPING"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0095",
        "npsn": "78300124",
        "name": "SMP NEGERI TERBUKA 2 WANASALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0096",
        "npsn": "20607883",
        "name": "SMP NEGERI SATU ATAP 3 CIJAKU"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0098",
        "npsn": "20601892",
        "name": "SMP NEGERI 1 PANGGARANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0099",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 1 PANGGARANGAN (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0100",
        "npsn": "20601861",
        "name": "SMP NEGERI 2 PANGGARANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0101",
        "npsn": "20601861",
        "name": "SMP NEGERI TERBUKA 2 PANGGARANGAN (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0102",
        "npsn": "20601803",
        "name": "SMP NEGERI 1 BAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0103",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 1 BAYAH (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0104",
        "npsn": "20601917",
        "name": "SMP NEGERI 1 CILOGRANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0106",
        "npsn": "20601914",
        "name": "SMP NEGERI 2 CILOGRANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0107",
        "npsn": "20601885",
        "name": "SMP NEGERI 1 CIBEBER"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0109",
        "npsn": "20601916",
        "name": "SMP NEGERI 2 CIBEBER"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0111",
        "npsn": "20601806",
        "name": "SMP PGRI BAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0112",
        "npsn": "20601900",
        "name": "SMP NEGERI 2 BAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0114",
        "npsn": "20607884",
        "name": "SMP NEGERI 4 CIBEBER"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0115",
        "npsn": "20607865",
        "name": "SMP NEGERI 5 CIBEBER"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0116",
        "npsn": "20613446",
        "name": "SMP NEGERI 5 BAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0118",
        "npsn": "20622691",
        "name": "MTS NEGERI 1 LEBAK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0119",
        "npsn": "20622704",
        "name": "MTS DAAR EL AZHAR RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0120",
        "npsn": "20602172",
        "name": "MTS DARUN NAIM RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0121",
        "npsn": "20622696",
        "name": "MTS AL MIZAN RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0122",
        "npsn": "20622701",
        "name": "MTS FATHUROBBANI RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0123",
        "npsn": "20622695",
        "name": "MTS AL FALAH CITERAS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0124",
        "npsn": "69895728",
        "name": "MTS DARUL QOORIIN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0125",
        "npsn": "20622702",
        "name": "MTS WASILATUL FALAH RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0126",
        "npsn": "69886239",
        "name": "MTS AL HIDAYAH RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0127",
        "npsn": "20622708",
        "name": "MTS PEMBANGUNAN CISONGGOM SAJIRA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0128",
        "npsn": "20622674",
        "name": "MTS AL IDRUS RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0129",
        "npsn": "20622639",
        "name": "MTS NURUL FALAH PASIRMALANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0130",
        "npsn": "20622703",
        "name": "MTS DARUL ULUM RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0131",
        "npsn": "20622707",
        "name": "MTS AL INGGA SAJIRA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0132",
        "npsn": "20622677",
        "name": "MTS AL RIYADUL JANNAH MAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0133",
        "npsn": "20622668",
        "name": "MTS AL AMIN CURUGBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0134",
        "npsn": "69895222",
        "name": "MTS MIFTAHUL ICHSAN WARUNGGUNUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0135",
        "npsn": "69895737",
        "name": "MTS HIDAYAH ISLAMIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0136",
        "npsn": "20602081",
        "name": "MTS ARRIBATHIYAH CURUG PANJANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0137",
        "npsn": "69927808",
        "name": "MTS AL HIDAYAH BANI KARIM CIPANAS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0138",
        "npsn": "20622697",
        "name": "MTS PONDOK MODERN AL HIDAYAH LEBAK PICUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0139",
        "npsn": "20622666",
        "name": "MTS BUSTANUL KHAIR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0140",
        "npsn": "20602166",
        "name": "MTS MANARUL HIDAYAH LEBAK ASIH CURUGBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0141",
        "npsn": "20613679",
        "name": "MTS AL MUBASYIRIN SAJIRA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0142",
        "npsn": "69788426",
        "name": "MTS DAARUL MUTTAQIN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0143",
        "npsn": "20622667",
        "name": "MTS MIFTAHUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0144",
        "npsn": "20602086",
        "name": "MTS AL MUAWANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0145",
        "npsn": "20622678",
        "name": "MTS AL AL A"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0146",
        "npsn": "20622699",
        "name": "MTS NURUL HASANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0147",
        "npsn": "69895216",
        "name": "MTS TAFRIIJUL AHKAM CIKIRAY"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0148",
        "npsn": "69857755",
        "name": "MTS BANI FADIL"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0149",
        "npsn": "20622640",
        "name": "MTS AZ ZUMAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0150",
        "npsn": "20622690",
        "name": "MTS NEGERI 4 LEBAK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0151",
        "npsn": "20622712",
        "name": "MTS MATHLAUL ANWAR CIPARASI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0152",
        "npsn": "69895627",
        "name": "MTS QOTHROTUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0153",
        "npsn": "20622665",
        "name": "MTS DARUSSADAH CIMARGA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0154",
        "npsn": "20602167",
        "name": "MTS MANAHIJUSSADAT"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0155",
        "npsn": "20622627",
        "name": "MTS MATHLAUL ANWAR BAROS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0156",
        "npsn": "69895208",
        "name": "MTS AL HIDAYAH WANTI LEUWIDAMAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0157",
        "npsn": "20622629",
        "name": "MTS AL HIKMAH CIPEUCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0158",
        "npsn": "20622630",
        "name": "MTS AL KHOIRIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0159",
        "npsn": "20622628",
        "name": "MTS SULTAN HASANUDIN PAL OPAT"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0160",
        "npsn": "69895213",
        "name": "MTS MAULANA YUSUF MUNCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0161",
        "npsn": "69895209",
        "name": "MTS AL MUHAJIRIN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0162",
        "npsn": "20622631",
        "name": "MTS ANWARUL ULUM GUNUNG ANTEN CIMARGA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0163",
        "npsn": "20622634",
        "name": "MTS RIYADUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0164",
        "npsn": "20622664",
        "name": "MTS AL MADANI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0165",
        "npsn": "20622636",
        "name": "MTS NEGERI 2 LEBAK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0166",
        "npsn": "20622641",
        "name": "MTS MATHLAUL ANWAR CIKOTOK CIBEBER"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0167",
        "npsn": "20622660",
        "name": "MTS AL FATAH CIJENGKOL"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0168",
        "npsn": "20622659",
        "name": "MTS MIFTAHUL IHSAN CILOGRANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0169",
        "npsn": "20622662",
        "name": "MTS AL FALAH CIBEBER"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0170",
        "npsn": "20622647",
        "name": "MTS DAARUL ULUM CIHARA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0171",
        "npsn": "20622682",
        "name": "MTS DAARUL ULUM PAGELARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0172",
        "npsn": "69883462",
        "name": "MTS NURUL HIDAYAH KERTA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0173",
        "npsn": "20622716",
        "name": "MTS MATHLAUL ANWAR BINUANGEUN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0174",
        "npsn": "69883463",
        "name": "MTS DAAR EL-KUTUB BAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0175",
        "npsn": "20622687",
        "name": "MTS MATHLAUL ANWAR CISIIH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0176",
        "npsn": "69883466",
        "name": "MTS NURUL HIDAYAH LEBAK JAHA MALINGPING"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0177",
        "npsn": "69895200",
        "name": "MTS TERPADU YAPISA CIBARENO"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0178",
        "npsn": "20622684",
        "name": "MTS DAAR EL KARIM PAGELARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0179",
        "npsn": "69883464",
        "name": "MTS NURUL HIDAYAH CIKARET"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0180",
        "npsn": "20622713",
        "name": "MTS MATHLAUL ANWAR CIKEUSIK DESA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0181",
        "npsn": "20622661",
        "name": "MTS MIFTAHUL IHSAN 2 PASIRBUNGUR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0182",
        "npsn": "69895196",
        "name": "MTS MAULANA YUSUF CIHAMBALI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0183",
        "npsn": "20622642",
        "name": "MTS ASY SYAHADATAIN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0184",
        "npsn": "20622635",
        "name": "MTS NEGERI 3 LEBAK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0185",
        "npsn": "69895724",
        "name": "MTS WASILATUL FALAH PASINDANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0186",
        "npsn": "69895198",
        "name": "MTS MATHLAUL ANWAR CIGEMBOR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0187",
        "npsn": "69881714",
        "name": "MTS MATHLAUL ANWAR CANGKEUTEUK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0188",
        "npsn": "69881713",
        "name": "MTS GUPPI CILELES"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0189",
        "npsn": "20622670",
        "name": "MTS MATHLAUL ANWAR GUNUNGKENCANA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0190",
        "npsn": "69886237",
        "name": "MTS MATHLAUL ANWAR BATUJAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0191",
        "npsn": "69881719",
        "name": "MTS NURUL ISLAM CIRINTEN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0192",
        "npsn": "20622650",
        "name": "MTS MATHLAUL ANWAR SUKAMAJU"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0193",
        "npsn": "69895950",
        "name": "MTS MATHLAUL ANWAR CIKEUSIK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0194",
        "npsn": "20622648",
        "name": "MTS AL ISLAH KADU GEDE"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0195",
        "npsn": "69895199",
        "name": "MTS RIYADHUL MUTAALIMIN FATAHILLAH CILELES"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0196",
        "npsn": "20607814",
        "name": "SMP NEGERI 3 CIBADAK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0197",
        "npsn": "20607802",
        "name": "SMP TERPADU AL - QUDWAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0198",
        "npsn": "20613920",
        "name": "SMP IT AD - DA'WAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0199",
        "npsn": "20613475",
        "name": "SMP NEGERI 2 CURUGBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0200",
        "npsn": "20607933",
        "name": "SMP NEGERI 3 MUNCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0201",
        "npsn": "20607998",
        "name": "SMP NEGERI SATU ATAP 2 MUNCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0202",
        "npsn": "20613435",
        "name": "SMP NEGERI SATU ATAP 3 SOBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0203",
        "npsn": "20613436",
        "name": "SMP NEGERI SATU ATAP 2 LEBAK GEDONG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0204",
        "npsn": "20613537",
        "name": "SMP MATHLA UL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0205",
        "npsn": "20607871",
        "name": "SMP NEGERI 4 CIMARGA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0206",
        "npsn": "20607994",
        "name": "SMP NEGERI 2 CIRINTEN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0209",
        "npsn": "20613445",
        "name": "SMP NEGERI SATU ATAP 2 CIJAKU"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0210",
        "npsn": "20607934",
        "name": "SMP NEGERI SATU ATAP 3 BAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0211",
        "npsn": "20607815",
        "name": "SMP NEGERI SATU ATAP 4 BAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0212",
        "npsn": "20607974",
        "name": "SMP NEGERI SATU ATAP 3 CILOGRANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0213",
        "npsn": "20613432",
        "name": "SMP NEGERI SATU ATAP 3 PANGGARANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0214",
        "npsn": "20613433",
        "name": "SMP NEGERI SATU ATAP 4 PANGGARANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0215",
        "npsn": "20607987",
        "name": "SMP NEGERI 5 PANGGARANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0216",
        "npsn": "20613748",
        "name": "MTS AL HADITS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0217",
        "npsn": "20622654",
        "name": "MTS NURUL ARFAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0218",
        "npsn": "69955995",
        "name": "MTS NUR EL DZULAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0219",
        "npsn": "20613741",
        "name": "MTS QUTHROTUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0220",
        "npsn": "20614327",
        "name": "MTS ASSUKIYAH (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0222",
        "npsn": "20622671",
        "name": "MTS NURUL AKHYAR CITEUREUP"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0223",
        "npsn": "69895731",
        "name": "MTS NUR INSAN GUNUNGKENDENG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0224",
        "npsn": "20622643",
        "name": "MTS AL MUNAWWAROH CICARUCUB"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0225",
        "npsn": "20622715",
        "name": "MTS AL MUJAHIDIN KATAPANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0226",
        "npsn": "20607976",
        "name": "SMP NEGERI SATU ATAP 4 MUNCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0228",
        "npsn": "20607879",
        "name": "SMP TERPADU AL - KHOBAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0229",
        "npsn": "20613763",
        "name": "SMP NEGERI SATU ATAP 3 MALINGPING"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0230",
        "npsn": "20613489",
        "name": "SMP NEGERI SATU ATAP 4 BANJARSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0231",
        "npsn": "20607899",
        "name": "SMP NEGERI SATU ATAP 3 WANASALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0232",
        "npsn": "20607997",
        "name": "SMP NEGERI SATU ATAP 4 WANASALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0233",
        "npsn": "20613774",
        "name": "SMP NEGERI SATU ATAP 5 CILOGRANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0234",
        "npsn": "20607887",
        "name": "SMP NEGERI SATU ATAP 6 CIBEBER"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0235",
        "npsn": "20613732",
        "name": "MTS NURUL ATHFAL"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0236",
        "npsn": "20615903",
        "name": "MTS KHUSNUL HOTIMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0237",
        "npsn": "20622655",
        "name": "MTS MANBAUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0238",
        "npsn": "20622675",
        "name": "MTS BANI IDRIS PASIR KUPA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0239",
        "npsn": "20622652",
        "name": "MTS AL AULAD"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0240",
        "npsn": "69955992",
        "name": "MTS DARUTHOHIRIN WARUNGGUNUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0241",
        "npsn": "20622688",
        "name": "MTS AL ITTIHAD 1 CIMANGPANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0242",
        "npsn": "69881720",
        "name": "MTS AL ITTIHAD 2 JAYASARI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0243",
        "npsn": "69886422",
        "name": "MTS SIROJUL MUNIR CILOGRANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0244",
        "npsn": "20622649",
        "name": "MTS NURUL HIDAYAH MALANG NENGAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0245",
        "npsn": "69886238",
        "name": "MTS NAWARUL ULUM CIRINTEN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0246",
        "npsn": "20607858",
        "name": "SMP NEGERI SATU ATAP 3 CURUG BITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0247",
        "npsn": "20607852",
        "name": "SMP NEGERI SATU ATAP 5 SAJIRA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0248",
        "npsn": "20613717",
        "name": "SMP NEGERI SATU ATAP 7 CIBEBER"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0249",
        "npsn": "20613443",
        "name": "SMP NEGERI SATU ATAP 3 CILELES"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0250",
        "npsn": "20613437",
        "name": "SMP TERPADU MULIA HATI INSANI WARUNGGUNUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0251",
        "npsn": "20613930",
        "name": "SMP NEGERI SATU ATAP 4 CILOGRANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0252",
        "npsn": "20607975",
        "name": "SMP NEGERI SATU ATAP 6 PANGGARANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0253",
        "npsn": "20607996",
        "name": "SMP NEGERI SATU ATAP 7 PANGGARANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0254",
        "npsn": "20614530",
        "name": "SMP NEGERI 6 MAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0255",
        "npsn": "20614844",
        "name": "SMP NEGERI SATU ATAP 4 MAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0256",
        "npsn": "20614531",
        "name": "SMP NEGERI 4 CURUGBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0257",
        "npsn": "20613924",
        "name": "SMP PLUS MABDAIL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0258",
        "npsn": "20614526",
        "name": "SMP NEGERI 6 GUNUNGKENCANA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0259",
        "npsn": "20614884",
        "name": "SMP NEGERI 3 CIGEMBLONG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0260",
        "npsn": "20613707",
        "name": "MTS ADZ DZIKRI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0261",
        "npsn": "20614152",
        "name": "SMP NEGERI SATU ATAP 5 MAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0262",
        "npsn": "20614209",
        "name": "SMP NEGERI SATU ATAP 6 SAJIRA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0263",
        "npsn": "20614987",
        "name": "SMP NEGERI SATU ATAP 4 CIPANAS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0264",
        "npsn": "20613915",
        "name": "SMP NEGERI SATU ATAP 2 BOJONGMANIK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0265",
        "npsn": "20614614",
        "name": "SMP NEGERI SATU ATAP 3 CIRINTEN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0266",
        "npsn": "20613914",
        "name": "SMP NEGERI SATU ATAP 5 CIMARGA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0267",
        "npsn": "20614635",
        "name": "SMP NEGERI SATU ATAP 6 CIMARGA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0268",
        "npsn": "20613892",
        "name": "SMP NEGERI SATU ATAP 3 CIKULUR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0269",
        "npsn": "20614529",
        "name": "SMP NEGERI 5 CILELES"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0270",
        "npsn": "20613909",
        "name": "SMP NEGERI SATU ATAP 4 CILELES"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0271",
        "npsn": "20614532",
        "name": "SMP NEGERI 3 CIHARA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0272",
        "npsn": "20614702",
        "name": "SMP NEGERI 4 GUNUNGKENCANA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0273",
        "npsn": "20615010",
        "name": "SMP NEGERI 5 BANJARSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0274",
        "npsn": "20614877",
        "name": "SMP NEGERI SATU ATAP 2 CIHARA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0275",
        "npsn": "20614610",
        "name": "SMP NEGERI SATU ATAP 2 CIGEMBLONG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0276",
        "npsn": "20614590",
        "name": "SMP NEGERI SATU ATAP 3 GUNUNGKENCANA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0277",
        "npsn": "20613935",
        "name": "SMP NEGERI SATU ATAP 4 CIJAKU"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0278",
        "npsn": "20614709",
        "name": "SMP NEGERI SATU ATAP 4 MALINGPING"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0279",
        "npsn": "20613893",
        "name": "SMP NEGERI SATU ATAP 5 MALINGPING"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0280",
        "npsn": "20613911",
        "name": "SMP NEGERI SATU ATAP 5 GUNUNGKENCANA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0281",
        "npsn": "20614724",
        "name": "SMP TERPADU DAAR EL-ISHLAH MALINGPING"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0282",
        "npsn": "20614723",
        "name": "SMP ISLAM JAM'IYYATUL MUBTADI CIBAYAWAK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0283",
        "npsn": "20614525",
        "name": "SMP NEGERI 6 CILOGRANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0284",
        "npsn": "20614633",
        "name": "SMP NEGERI SATU ATAP 6 BAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0285",
        "npsn": "20614638",
        "name": "SMP NEGERI SATU ATAP 7 BAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0286",
        "npsn": "20614637",
        "name": "SMP NEGERI SATU ATAP 8 BAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0287",
        "npsn": "20614838",
        "name": "SMP NEGERI SATU ATAP 8 CIBEBER"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0288",
        "npsn": "20614634",
        "name": "SMP NEGERI SATU ATAP 9 CIBEBER"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0289",
        "npsn": "20614875",
        "name": "SMP NEGERI SATU ATAP 10 CIBEBER"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0290",
        "npsn": "20614873",
        "name": "SMP NEGERI SATU ATAP 11 CIBEBER"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0291",
        "npsn": "20614031",
        "name": "SMP NEGERI SATU ATAP 8 PANGGARANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0292",
        "npsn": "20614636",
        "name": "SMP NEGERI SATU ATAP 9 PANGGARANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0293",
        "npsn": "",
        "name": "MTS ARRAHMAN (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0294",
        "npsn": "69895197",
        "name": "MTS DARUL HIKAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0295",
        "npsn": "",
        "name": "MTS MALNU MUNCANG (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0296",
        "npsn": "20616112",
        "name": "MTS DARUSALAM (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0297",
        "npsn": "20622658",
        "name": "MTS AL AMIN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0298",
        "npsn": "69881715",
        "name": "MTS AL HIDAYAH CIBUGANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0299",
        "npsn": "20614927",
        "name": "MTS ANWARUZHULAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0300",
        "npsn": "69895725",
        "name": "MTS IRSYADUL MUBTADIN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0301",
        "npsn": "20613864",
        "name": "SMP AL - MIZAN LITAHFIDZIL QUR'AN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0302",
        "npsn": "20614527",
        "name": "SMP NEGERI SATU ATAP 1 CIGEMBLONG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0303",
        "npsn": "20622706",
        "name": "MTS ATTHUMAANINAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0304",
        "npsn": "69895729",
        "name": "MTS NURUL FAIZIN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0305",
        "npsn": "69886236",
        "name": "MTS DAARUL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0306",
        "npsn": "20622679",
        "name": "MTS NURUL AMAL CIDADAP"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0307",
        "npsn": "20622700",
        "name": "MTS DARUSY SYIFA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0308",
        "npsn": "20622685",
        "name": "MTS NURUL HIDAYAH CITEUREUP RAHONG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0309",
        "npsn": "20615907",
        "name": "SMP NEGERI SATU ATAP 4 CIHARA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0310",
        "npsn": "20615821",
        "name": "SMP NEGERI SATU ATAP 5 CIHARA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0311",
        "npsn": "20615527",
        "name": "SMP NEGERI SATU ATAP 2 KALANGANYAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0314",
        "npsn": "20615739",
        "name": "SMP NEGERI SATU ATAP 4 CIGEMBLONG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0315",
        "npsn": "20614030",
        "name": "SMP NEGERI SATU ATAP  5 CIPANAS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0316",
        "npsn": "20615524",
        "name": "SMP NEGERISATU ATAP 4 SOBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0317",
        "npsn": "20228021",
        "name": "SMP AL KAUTSAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0318",
        "npsn": "20613928",
        "name": "SMP DAARU AT-TAUFIKIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0319",
        "npsn": "20614528",
        "name": "SMP NEGERI 4 CIKULUR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0320",
        "npsn": "20615836",
        "name": "SMP NEGERI SATU ATAP 5 CIKULUR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0321",
        "npsn": "20615891",
        "name": "SMP NEGERI SATU ATAP 6 BANJARSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0322",
        "npsn": "20615889",
        "name": "SMP NEGERI SATU ATAP 7 BANJARSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0324",
        "npsn": "20615188",
        "name": "SMP TERPADU AN-NIDZOM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0325",
        "npsn": "69886424",
        "name": "MTS MAULANA YUSUF PAGELARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0326",
        "npsn": "69883467",
        "name": "MTS NURUL HIDAYAH KANDANGPALON"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0327",
        "npsn": "20622680",
        "name": "MTS MATHLAUL ANWAR BOLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0328",
        "npsn": "69895220",
        "name": "MTS NURUL HIDAYAH SUKATANI WANASALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0329",
        "npsn": "20614320",
        "name": "MTS DARUTHOHIRIN (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0330",
        "npsn": "20613739",
        "name": "MTS NURUL FIKRI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0331",
        "npsn": "69895214",
        "name": "MTS DARUSSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0333",
        "npsn": "69895730",
        "name": "MTS ASSUKIYA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0334",
        "npsn": "69895195",
        "name": "MTS ARRAHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0335",
        "npsn": "69895734",
        "name": "MTS MALNU"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0336",
        "npsn": "69895201",
        "name": "MTS NURUL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0337",
        "npsn": "69895223",
        "name": "MTS JAMIATUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0338",
        "npsn": "20622676",
        "name": "MTS AR RIZKAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0339",
        "npsn": "",
        "name": "MTS ASH SHOFIYAH (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0340",
        "npsn": "69895738",
        "name": "MTS DAARUL MUAWWANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0341",
        "npsn": "69886423",
        "name": "MTS AL HIDAYAH CIKOMARA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0342",
        "npsn": "20622710",
        "name": "MTS AL HIDAYAH CIBERIH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0344",
        "npsn": "20616438",
        "name": "SMP NEGERI 5 SOBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0345",
        "npsn": "20616254",
        "name": "SMP NEGERI 7 SATAP SAJIRA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0346",
        "npsn": "20616356",
        "name": "SMP NEGERI 3 KALANGANYAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0347",
        "npsn": "20616474",
        "name": "SMP IT MATHLAUL ANWAR MALINGPING"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0348",
        "npsn": "20616491",
        "name": "SMP BINA BAKTI CIMARGA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0349",
        "npsn": "69895726",
        "name": "MTS KHOTROTUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0350",
        "npsn": "69881709",
        "name": "MTS DAARUL FIKRI CITEPUSEUN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0351",
        "npsn": "69881710",
        "name": "MTS RIYADHUS SOLIHIN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0352",
        "npsn": "20616452",
        "name": "MTS AL HALIMIYAH CIMUNCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0353",
        "npsn": "20622645",
        "name": "MTS MA GUNUNG LANGKAP"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0354",
        "npsn": "69857752",
        "name": "MTS MIFTAHUL QULUB"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0355",
        "npsn": "20616475",
        "name": "MTS AL MIFTAHUDIN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0356",
        "npsn": "20622711",
        "name": "MTS AL HASANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0357",
        "npsn": "20616090",
        "name": "MTS ASSOBURIYAH BANI SURYA (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0358",
        "npsn": "20622672",
        "name": "MTS JAMIATUL MUTAALIMIN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0359",
        "npsn": "20616147",
        "name": "SMP DELTA CIPANAS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0360",
        "npsn": "20622663",
        "name": "MTS NURUL ISLAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0361",
        "npsn": "20622717",
        "name": "MTS AN NURHANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0362",
        "npsn": "69895735",
        "name": "MTS AL INSYIRAAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0363",
        "npsn": "20622638",
        "name": "MTS AL AMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0364",
        "npsn": "69895628",
        "name": "MTS BANI TAHAL"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0365",
        "npsn": "69895219",
        "name": "MTS IBNU MAJAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0366",
        "npsn": "20622681",
        "name": "MTS MATHLAUL ANWAR SUKAMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0367",
        "npsn": "20622637",
        "name": "MTS AL AMIN KAMPUNG SAWAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0368",
        "npsn": "20622686",
        "name": "MTS PUTRA MANDIRI CIMANDIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0369",
        "npsn": "20616296",
        "name": "SMP NEGERI 6 SATAP CIHARA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0370",
        "npsn": "20622217",
        "name": "SMP AL ISCHAKIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0371",
        "npsn": "20616301",
        "name": "SMP AL AZKIYA MUNCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0372",
        "npsn": "20616328",
        "name": "SMP NEGERI SATAP 7 CIHARA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0373",
        "npsn": "20616289",
        "name": "SMP NEGERI 5 LEUWIDAMAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0374",
        "npsn": "20616357",
        "name": "SMP NEGERI 4 CIBADAK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0375",
        "npsn": "20622714",
        "name": "MTS NURUL HIDAYAH CIWALANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0376",
        "npsn": "69895221",
        "name": "MTS MATHLAUL ANWAR CISARAP"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0377",
        "npsn": "69895194",
        "name": "MTS MALNU RANCABILUK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0378",
        "npsn": "69881716",
        "name": "MTS AL MUAWANAH CILELES"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0379",
        "npsn": "69927806",
        "name": "MTS MATHLAUL AWAR CIKARANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0380",
        "npsn": "69881711",
        "name": "MTS AL IHSAN CIATEUL"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0381",
        "npsn": "20622294",
        "name": "SMP AL MUNIB"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0382",
        "npsn": "69895202",
        "name": "MTS AL-HIJAZ BELAHAJI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0383",
        "npsn": "69895210",
        "name": "MTS DARUL MUHSININ"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0384",
        "npsn": "20607973",
        "name": "MTS RIYADUSSAADAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0385",
        "npsn": "69895211",
        "name": "MTS AL AM WIWITAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0386",
        "npsn": "69895625",
        "name": "MTS AL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0387",
        "npsn": "69895739",
        "name": "MTS ELKARIM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0388",
        "npsn": "20622692",
        "name": "MTS HIDAYATUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0389",
        "npsn": "20616342",
        "name": "MTS BANI WASILATUR RAHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0390",
        "npsn": "20616412",
        "name": "MTS NURWIDIA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0391",
        "npsn": "20622653",
        "name": "MTS AL FALAH CIKULUR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0392",
        "npsn": "69857746",
        "name": "MTS AL HIDAYAH CIBADAK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0393",
        "npsn": "69895732",
        "name": "MTS SULLAMUL FUTUHAT"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0394",
        "npsn": "69895626",
        "name": "MTS AMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0395",
        "npsn": "20622219",
        "name": "MTS AL ITTIHADIYAH AL MUKAROMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0396",
        "npsn": "20622694",
        "name": "MTS DARUTTASIHAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0397",
        "npsn": "69883469",
        "name": "MTS DAARUZ ZUHAN WANASALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0398",
        "npsn": "20622644",
        "name": "MTS NURUL HIDAYAH CILIPUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0399",
        "npsn": "20622646",
        "name": "MTS NURUL HIDAYAH LEBAK PEUNDEUY"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0400",
        "npsn": "69883468",
        "name": "MTS ANWARUL MASALIK PASIR RANJI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0402",
        "npsn": "69758110",
        "name": "SMP NEGERI 5 CIBADAK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0403",
        "npsn": "69758954",
        "name": "SMP NEGERI 9 RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0404",
        "npsn": "69757940",
        "name": "SMP NEGERI 8 RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0405",
        "npsn": "20616248",
        "name": "SMP NEGERI SATAP 5 MUNCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0406",
        "npsn": "20616369",
        "name": "SMP NEGERI 6 SATAP MUNCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0407",
        "npsn": "69757906",
        "name": "SMP NEGERI SATAP 7 MUNCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "0408",
        "npsn": "69755910",
        "name": "SMP NEGERI SATAP 3 LEBAKGEDONG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0409",
        "npsn": "20616365",
        "name": "SMP NEGERI 3 BOJONGMANIK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0410",
        "npsn": "69758995",
        "name": "SMP NEGERI 4 CIRINTEN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0411",
        "npsn": "69758937",
        "name": "SMP NEGERI SATAP 6 CIKULUR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0412",
        "npsn": "69756109",
        "name": "SMP NEGERI SATAP 6 CILELES"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "05",
        "kode_sek": "0413",
        "npsn": "69775725",
        "name": "SMP AL GHAITSA WARUNGGUNUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0414",
        "npsn": "69758519",
        "name": "SMP NEGERI 5 WANASALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "06",
        "kode_sek": "0415",
        "npsn": "69756108",
        "name": "SMP NEGERI 8 SATAP BANJARSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "0416",
        "npsn": "69758352",
        "name": "SMP NEGERI SATAP 9 BAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0417",
        "npsn": "69886421",
        "name": "MTS AZZUMAR KUBANG HAUR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0418",
        "npsn": "69857747",
        "name": "MTS AL KANAWIAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0419",
        "npsn": "69857749",
        "name": "MTS SALAFIAH AL MARJA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0420",
        "npsn": "69857748",
        "name": "MTS ASSALAMIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0421",
        "npsn": "69955987",
        "name": "MTS ANNAZWA CIAPUS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0422",
        "npsn": "69883356",
        "name": "MTS DAARUL ULUM CIDAHU"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0423",
        "npsn": "69883465",
        "name": "MTS CENDIKIA CILOGRANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0424",
        "npsn": "69886426",
        "name": "MTS IT BANI ZUHUD WANASALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0425",
        "npsn": "69895215",
        "name": "MTS TARBIYATUL BONGBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0426",
        "npsn": "69788427",
        "name": "MTS S DARUSSALAM 2"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0427",
        "npsn": "69895629",
        "name": "MTS KARYA MULYA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0428",
        "npsn": "69895727",
        "name": "MTS DARUL KIROM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0429",
        "npsn": "69755911",
        "name": "SMP NEGERI 7 SATAP MAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0430",
        "npsn": "69788429",
        "name": "MTS SAJIRA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0431",
        "npsn": "69857750",
        "name": "MTS AL ISHLAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0432",
        "npsn": "69788431",
        "name": "MTS DARUL IBTIDA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0433",
        "npsn": "69881718",
        "name": "MTS TERPADU SABILILLAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0434",
        "npsn": "69788430",
        "name": "MTS MIFTAHUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0435",
        "npsn": "69857751",
        "name": "MTS ROFIATUL FIKRI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0436",
        "npsn": "69881717",
        "name": "MTS AL MU AWANAH CITEKAK CIBODAS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0437",
        "npsn": "69886232",
        "name": "MTS AL-BURHAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0438",
        "npsn": "69886233",
        "name": "MTS ALFIN MUBAROK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0439",
        "npsn": "69886425",
        "name": "MTS FATHUL BARIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0440",
        "npsn": "69758111",
        "name": "SMP NEGERI 4 KALANGANYAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0441",
        "npsn": "69788428",
        "name": "MTS AL-HIDAYAH CISEEL"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0442",
        "npsn": "69895212",
        "name": "MTS SUDURUL IRSYAD"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0443",
        "npsn": "69895204",
        "name": "MTS AL-IKHRAM CIMARGA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0444",
        "npsn": "69895205",
        "name": "MTS RAUDHATUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0445",
        "npsn": "69895203",
        "name": "MTS AL-HIDAYAH WANTI 2"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0446",
        "npsn": "69895218",
        "name": "MTS RAUDHATUL AULAD"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0447",
        "npsn": "69895733",
        "name": "MTS AL-MIFTAH CINAGROG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0448",
        "npsn": "69888348",
        "name": "MTS MIFTAHUL HUDA CIPANAS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0449",
        "npsn": "69895217",
        "name": "MTS WASILATUL MAKIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0450",
        "npsn": "69895207",
        "name": "MTS HIDAYATUL MUTAQIN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0451",
        "npsn": "69955993",
        "name": "MTS KAFFAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0453",
        "npsn": "69945378",
        "name": "SMP NEGERI SATAP 7 CIMARGA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0454",
        "npsn": "69945162",
        "name": "SMP NEGERI 6 LEUWIDAMAR"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "02",
        "kode_sek": "0455",
        "npsn": "69945212",
        "name": "SMP NEGERI 5 SATU ATAP CURUGBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0456",
        "npsn": "69955988",
        "name": "MTS NURUL FALLAH PADASUKA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "11",
        "kode_sek": "0457",
        "npsn": "69955989",
        "name": "MTS AL - HIJAIYAH CILELES"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "04",
        "kode_sek": "0458",
        "npsn": "69945288",
        "name": "SMP NEGERI 5 CIRINTEN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0459",
        "npsn": "69941505",
        "name": "MTS DARUL MUSTAFA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0460",
        "npsn": "69895206",
        "name": "MTS ANNISA BANIHAWA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "0461",
        "npsn": "69955994",
        "name": "MTS DARUL AHSAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0462",
        "npsn": "69955991",
        "name": "MTS AN-NAZWA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0463",
        "npsn": "69895740",
        "name": "MTS DIEN ELHAYAT"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0464",
        "npsn": "69895736",
        "name": "MTS ISLAMIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0465",
        "npsn": "69941509",
        "name": "MTS NURUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0466",
        "npsn": "20622651",
        "name": "MTS AL-HUDA MUNCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0467",
        "npsn": "69941507",
        "name": "MTS AR ROYHAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0468",
        "npsn": "69941508",
        "name": "MTS ASH SHAFWAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "08",
        "kode_sek": "0469",
        "npsn": "69941506",
        "name": "MTS AL-ANWARIYAH AL-IDRUS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0470",
        "npsn": "69955992",
        "name": "MTS DARUTHOHIRIN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0471",
        "npsn": "69941510",
        "name": "MTS MATHLA'UL ANWAR SUKABAKTI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0472",
        "npsn": "69955988",
        "name": "MTS NURUL FALAH PADA SUKA KERTA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0473",
        "npsn": "69955989",
        "name": "MTS HIJAIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0474",
        "npsn": "69941504",
        "name": "MTS NURUL HIKMAH CIJAKU"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "10",
        "kode_sek": "0475",
        "npsn": "69941503",
        "name": "MTS RIADZOTUL HIKMAH CIBEDUG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0476",
        "npsn": "69945982",
        "name": "SMP LA TAHZAN RANGKASBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0477",
        "npsn": "69965618",
        "name": "SMP NEGERI 6 MALINGPING"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "0478",
        "npsn": "69965620",
        "name": "SMP NEGERI 8 MAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0479",
        "npsn": "69963498",
        "name": "MTS DAAR EL HAQ"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0480",
        "npsn": "69963497",
        "name": "MTS HIDAYATUL ULA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0481",
        "npsn": "69963496",
        "name": "MTS DARUL JALAL"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0482",
        "npsn": "69963499",
        "name": "MTS WAHDATUL UMMAH SAWARNA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0483",
        "npsn": "69963500",
        "name": "MTS RAUDOTUL FATAH WANASALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0484",
        "npsn": "69955990",
        "name": "MTS AL HIKAM BANI SALIM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0485",
        "npsn": "69963495",
        "name": "MTS MIFTAHUL FALAH CIKADU"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0486",
        "npsn": "69963494",
        "name": "MTS AL-HUSAINI CIMARGA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "20",
        "kode_sek": "0487",
        "npsn": "69977916",
        "name": "MTS RIYYADHUL MUTTAQIEN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0488",
        "npsn": "69977923",
        "name": "MTS BINA INSANI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0489",
        "npsn": "69977924",
        "name": "MTS AL-FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0490",
        "npsn": "69941503",
        "name": "MTSS RIADZOTUL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0491",
        "npsn": "69977921",
        "name": "MTS DAARUL `ULUM CIPARAHU"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0492",
        "npsn": "69977915",
        "name": "MTS DAARUL ULUM BARUNAI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0493",
        "npsn": "69977918",
        "name": "MTS MATHLAUL ANWAR PASIR TAPOS"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "50",
        "kode_sek": "0494",
        "npsn": "69977913",
        "name": "MTS AL-FURQON CITOREK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "20",
        "kode_sek": "0495",
        "npsn": "69977914",
        "name": "MTS TANWIRUL KUTUB BAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "80",
        "kode_sek": "1001",
        "npsn": "69987061",
        "name": "MTS DAARUL IHYA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "1002",
        "npsn": "69977907",
        "name": "MTS AL-WASHLIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "1003",
        "npsn": "69977920",
        "name": "MTS DAARUL `ULUM PANYAUNGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "1004",
        "npsn": "69989632",
        "name": "SMPN 9 BANJARSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "03",
        "kode_sek": "1005",
        "npsn": "69989633",
        "name": "SMPN 4 LEBAKGEDONG"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "07",
        "kode_sek": "1006",
        "npsn": "69988822",
        "name": "SMP TERPADU NURUL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "01",
        "kode_sek": "1007",
        "npsn": "69986340",
        "name": "SMP TERPADU AL-ISHLAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "",
        "kode_sek": "1008",
        "npsn": "69977922",
        "name": "MTS AL-BAYAN"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "30",
        "kode_sek": "1009",
        "npsn": "69977917",
        "name": "MTS NURUL FALAH KERTA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "",
        "kode_sek": "1010",
        "npsn": "69977925",
        "name": "MTS AL-FATWA"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "55",
        "kode_sek": "1011",
        "npsn": "69988267",
        "name": "MTSN 5 LEBAK"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "",
        "kode_sek": "1012",
        "npsn": "69984104",
        "name": "SMP ISLAM TERPADU AL MUJAHID"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "",
        "kode_sek": "1013",
        "npsn": "69986512",
        "name": "SMPS RIYADUL FATONAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "75",
        "kode_sek": "1014",
        "npsn": "69989679",
        "name": "SMP PLUS SWASTA DARUSSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "09",
        "kode_sek": "1015",
        "npsn": "69995371",
        "name": "MTS MIFTAHUL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3602",
        "kode_prov": "30",
        "kode_rayon": "07",
        "kode_sr": "35",
        "kode_sek": "1016",
        "npsn": "69994822",
        "name": "MTS AL - FADHILAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0001",
        "npsn": "20600526",
        "name": "SMP NEGERI 1 PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0002",
        "npsn": "20600548",
        "name": "SMP NEGERI 1 MAJASARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0003",
        "npsn": "66666667",
        "name": "SMP NEGERI TERBUKA 2 PANDEGLANG (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0004",
        "npsn": "20600538",
        "name": "SMP NEGERI 2 PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0006",
        "npsn": "20600536",
        "name": "SMP NEGERI 3 PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0007",
        "npsn": "20600535",
        "name": "SMP NEGERI 4 PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0008",
        "npsn": "20600534",
        "name": "SMP NEGERI 5 PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0009",
        "npsn": "20600552",
        "name": "SMP NEGERI 1 KARANG TANJUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0010",
        "npsn": "20600552",
        "name": "SMP NEGERI TERBUKA 1 KARANG TANJUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0011",
        "npsn": "20600531",
        "name": "SMP NEGERI 2 KARANG TANJUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0012",
        "npsn": "20600585",
        "name": "SMP NEGERI 1 CADASARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0013",
        "npsn": "20600591",
        "name": "SMP YANMU KARANG TANJUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0015",
        "npsn": "20600587",
        "name": "SMP NEGERI 1 BANJAR PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0016",
        "npsn": "66666668",
        "name": "SMP NEGERI TERBUKA 1 BANJAR PANDEGLANG (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0017",
        "npsn": "20600553",
        "name": "SMP NEGERI 1 KADUHEJO"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0020",
        "npsn": "20600530",
        "name": "SMP NEGERI 1 MANDALAWANGI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0021",
        "npsn": "69758250",
        "name": "SMP NEGERI TERBUKA 1 MANDALAWANGI (TIDAK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0022",
        "npsn": "20600554",
        "name": "SMP DAAR  EL FALAAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0023",
        "npsn": "20600578",
        "name": "SMP NEGERI 1 CIPEUCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0024",
        "npsn": "69758249",
        "name": "SMP NEGERI TERBUKA 1 CIPEUCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0025",
        "npsn": "20600579",
        "name": "SMP NEGERI 1 CIMANUK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0026",
        "npsn": "66666669",
        "name": "SMP NEGERI TERBUKA 1 CIMANUK (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0027",
        "npsn": "20600515",
        "name": "SMP NEGERI 2 CIPEUCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0028",
        "npsn": "20600541",
        "name": "SMP NEGERI 3 MANDALAWANGI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0029",
        "npsn": "20600533",
        "name": "SMP NEGERI 2 MANDALAWANGI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0030",
        "npsn": "20600516",
        "name": "SMP NEGERI 2 CIMANUK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0031",
        "npsn": "20600592",
        "name": "SMPS RIYADLUL MUBTADIIN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0032",
        "npsn": "20607625",
        "name": "SMP NEGERI 1 MEKARJAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0034",
        "npsn": "20600522",
        "name": "SMP NEGERI 1 SAKETI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0035",
        "npsn": "69758254",
        "name": "SMP NEGERI TERBUKA 1 SAKETI (TIDAK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0036",
        "npsn": "20600544",
        "name": "SMP NEGERI 2 SAKETI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0037",
        "npsn": "20600586",
        "name": "SMP NEGERI 1 BOJONG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0038",
        "npsn": "20600586",
        "name": "SMP NEGERI TERBUKA 1 BOJONG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0039",
        "npsn": "20600523",
        "name": "SMP NEGERI 1 PICUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0040",
        "npsn": "2060023",
        "name": "SMP NEGERI TERBUKA 1 PICUNG (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0041",
        "npsn": "20600528",
        "name": "SMP NEGERI 1 MUNJUL"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0042",
        "npsn": "66666670",
        "name": "SMP NEGERI TERBUKA 1 MUNJUL (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0043",
        "npsn": "20600549",
        "name": "SMP NEGERI 2 MUNJUL"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0044",
        "npsn": "20600581",
        "name": "SMP NEGERI 1 CIKEUSIK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0045",
        "npsn": "66666671",
        "name": "SMP NEGERI TERBUKA 1 CIKEUSIK (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0046",
        "npsn": "20600518",
        "name": "SMP NEGERI 2 CIKEUSIK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0048",
        "npsn": "20600556",
        "name": "SMP YYS BANI HALIM"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0049",
        "npsn": "20607630",
        "name": "SMP NEGERI 2 BOJONG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0050",
        "npsn": "20600545",
        "name": "SMP NEGERI 2 PICUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0051",
        "npsn": "20600539",
        "name": "SMP NEGERI 3 MUNJUL"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0052",
        "npsn": "20600524",
        "name": "SMP NEGERI 1 PATIA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0053",
        "npsn": "20607650",
        "name": "SMP ISLAM DAARUSSALAM CIKEUSIK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0054",
        "npsn": "20607627",
        "name": "SMP NEGERI 1 SINDANGRESMI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0055",
        "npsn": "20607634",
        "name": "SMP NEGERI 2 SINDANGRESMI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0057",
        "npsn": "20600557",
        "name": "SMP BABUSSALAM CIKEUSIK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0058",
        "npsn": "20600577",
        "name": "SMP NEGERI 1 CISATA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0059",
        "npsn": "20600529",
        "name": "SMP NEGERI 1 MENES"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0060",
        "npsn": "20600529",
        "name": "SMP NEGERI TERBUKA 1 MENES (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0061",
        "npsn": "20600550",
        "name": "SMP NEGERI 2 MENES"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0062",
        "npsn": "20600550",
        "name": "SMP NEGERI TERBUKA 2 MENES (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0063",
        "npsn": "20600540",
        "name": "SMP NEGERI 1 PULOSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0064",
        "npsn": "20600576",
        "name": "SMP NEGERI 1 JIPUT"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0065",
        "npsn": "66666672",
        "name": "SMP NEGERI TERBUKA 1 JIPUT (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0066",
        "npsn": "20600574",
        "name": "SMP MUHAMMADIYAH MENES"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0067",
        "npsn": "20600551",
        "name": "SMP NEGERI 1 LABUAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0068",
        "npsn": "20600551",
        "name": "SMP NEGERI TERBUKA 1 LABUAN (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0069",
        "npsn": "20600532",
        "name": "SMP NEGERI 2 LABUAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0070",
        "npsn": "20600532",
        "name": "SMP NEGERI TERBUKA 2 LABUAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0073",
        "npsn": "20600582",
        "name": "SMP NEGERI 1 CIKEDAL"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0074",
        "npsn": "20600582",
        "name": "SMP NEGERI TERBUKA 1 CIKEDAL (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0075",
        "npsn": "20600527",
        "name": "SMP NEGERI 1 PAGELARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0076",
        "npsn": "69758252",
        "name": "SMP NEGERI TERBUKA 1 PAGELARAN (TIDAK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0077",
        "npsn": "20600590",
        "name": "SMP YPP LABUAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0078",
        "npsn": "20607623",
        "name": "SMP NEGERI 1 CARITA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0079",
        "npsn": "20600558",
        "name": "SMP IKPI  LABUAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0080",
        "npsn": "20607633",
        "name": "SMP NEGERI 2 CIKEDAL"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0081",
        "npsn": "20607648",
        "name": "SMP ISLAM AL - MUSYARAFAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0082",
        "npsn": "69758245",
        "name": "SMP NEGERI TERBUKA 1 CARITA (TIDAK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0083",
        "npsn": "20600514",
        "name": "SMP NEGERI 2 JIPUT"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0084",
        "npsn": "20600525",
        "name": "SMP NEGERI 1 PANIMBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0085",
        "npsn": "69758253",
        "name": "SMP NEGERI TERBUKA 1 PANIMBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0086",
        "npsn": "20600547",
        "name": "SMP NEGERI 1 SOBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0087",
        "npsn": "20600547",
        "name": "SMP NEGERI TERBUKA 2 PANIMBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0088",
        "npsn": "20600583",
        "name": "SMP NEGERI 1 CIGEULIS"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0089",
        "npsn": "20600583",
        "name": "SMP NEGERI TERBUKA 1 CIGEULIS"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0090",
        "npsn": "20600519",
        "name": "SMP NEGERI 2 CIGEULIS"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0091",
        "npsn": "20600584",
        "name": "SMP NEGERI 1 CIBALIUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0092",
        "npsn": "69758246",
        "name": "SMP NEGERI TERBUKA 1 CIBALIUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0093",
        "npsn": "20600520",
        "name": "SMP NEGERI 2 CIBALIUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0094",
        "npsn": "20600580",
        "name": "SMP NEGERI 1 CIMANGGU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0095",
        "npsn": "20600580",
        "name": "SMP NEGERI TERBUKA 1 CIMANGGU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0096",
        "npsn": "20600517",
        "name": "SMP NEGERI 2 CIMANGGU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0097",
        "npsn": "20600521",
        "name": "SMP NEGERI 1 SUMUR"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0098",
        "npsn": "20600521",
        "name": "SMP NEGERI TERBUKA 1 SUMUR"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0099",
        "npsn": "20600543",
        "name": "SMP NEGERI 2 SUMUR"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0100",
        "npsn": "20600589",
        "name": "SMP YPP SOBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0101",
        "npsn": "20600588",
        "name": "SMP NEGERI 1 ANGSANA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0102",
        "npsn": "69758243",
        "name": "SMP NEGERI TERBUKA 1 ANGSANA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0103",
        "npsn": "20600573",
        "name": "SMP DARMA CAHYA PURNAMA PANIMBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0104",
        "npsn": "20600575",
        "name": "SMP MUSLIMIN  (TDK AKTIF"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0105",
        "npsn": "20600537",
        "name": "SMP NEGERI 2 SOBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0107",
        "npsn": "20607624",
        "name": "SMP NEGERI 1 CIBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0108",
        "npsn": "20607628",
        "name": "SMP NEGERI 1 SUKARESMI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0109",
        "npsn": "69758256",
        "name": "SMP NEGERI TERBUKA 2 CIBALIUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0112",
        "npsn": "69788409",
        "name": "MTS NEGERI 1 PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0113",
        "npsn": "20600855",
        "name": "MTS NURUL HIDAYAH CILAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0114",
        "npsn": "20600783",
        "name": "MTS AL MUHIBIN WAAS CADASARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0115",
        "npsn": "20600884",
        "name": "MTS DAAR EL MAARIF CADASARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0116",
        "npsn": "20600886",
        "name": "MTS CIKONDANG PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0117",
        "npsn": "20600786",
        "name": "MTS AL ISHLAH KARANG ANYAR"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0118",
        "npsn": "69883340",
        "name": "MTS DARUL MUQIMIN GOROBOG BANJAR"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0119",
        "npsn": "20607903",
        "name": "MTS TMI DAAR EL HIJRAH WAL BANNA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0120",
        "npsn": "69822479",
        "name": "MTS NURUL DZULAM BALAPUNAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0121",
        "npsn": "69881705",
        "name": "MTS AS SUQIYA KEBON AWI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0122",
        "npsn": "20600793",
        "name": "MTS AL BARKAH KAMELANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0123",
        "npsn": "69883341",
        "name": "MTS AS SUWITAMIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0124",
        "npsn": "69788410",
        "name": "MTS GUPPI SODONG SAKETI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0125",
        "npsn": "20600780",
        "name": "MTS AL IHSAN JAJAWAI KADOMAS"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0127",
        "npsn": "20600852",
        "name": "MTS MATHLAUL HUDA BENGKUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0128",
        "npsn": "20622595",
        "name": "MTS MADRASAH ISLAM INDONESIA CIDANGIANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0129",
        "npsn": "20622597",
        "name": "MTS DARUL HUDA PUSAT"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0130",
        "npsn": "69881699",
        "name": "MTS NURUL FALAH KAUNGCAANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0131",
        "npsn": "20607619",
        "name": "MTS MUTAALIMIN CIGUDANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0132",
        "npsn": "69853266",
        "name": "MTS AL BINA BANGUN CADASARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0133",
        "npsn": "69822437",
        "name": "MTS AL HIDAYAH KADULAWANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0134",
        "npsn": "20600895",
        "name": "MTS AR ROHMAN PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0135",
        "npsn": "69822450",
        "name": "MTS PON PES TURUS PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0136",
        "npsn": "20600872",
        "name": "MTS PEND ISLAM INDONESIA SALINGGARA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0137",
        "npsn": "20600880",
        "name": "MTS DARUL IMAN KADUPANDAK BANJAR"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0138",
        "npsn": "69853267",
        "name": "MTS DARUSSAADAH CIKADUEUN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0139",
        "npsn": "20622581",
        "name": "MTS AL HIKMAH CIPEUCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0140",
        "npsn": "20600866",
        "name": "MTS MII SYEKH MANSHUR KALAHANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0141",
        "npsn": "69853265",
        "name": "MTS MATHLAUL ANWAR CIKALIUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0142",
        "npsn": "20600853",
        "name": "MTS MATHLAUL ANWAR LANGENSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0143",
        "npsn": "69822434",
        "name": "MTS MIFTAHUL AFKAR SINDANGHAYU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0144",
        "npsn": "69881703",
        "name": "MTS CIBARANI CISATA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0145",
        "npsn": "69822438",
        "name": "MTS AL IHYA KADURONYOK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0146",
        "npsn": "20600891",
        "name": "MTS AT TAQWA KADU MERAK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0147",
        "npsn": "69881707",
        "name": "MTS YPIH KEBONPINANG SAKETI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0148",
        "npsn": "69822431",
        "name": "MTS MUHAMMADIYAH KUBANGKONDANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0149",
        "npsn": "69822432",
        "name": "MTS AL FALAH KARANG TANJUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0150",
        "npsn": "20600885",
        "name": "MTS DAAR EL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0151",
        "npsn": "69822435",
        "name": "MTS DARUSSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0152",
        "npsn": "20622612",
        "name": "MTS MURSYDATUL JANNAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0153",
        "npsn": "20600913",
        "name": "MTS MALNU KADUKAUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0154",
        "npsn": "69822441",
        "name": "MTS MATHLABUL HUDA KORONCONG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0155",
        "npsn": "20600784",
        "name": "MTS AL MADINA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0156",
        "npsn": "69881704",
        "name": "MTS AL FALAH CIEKEK PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0157",
        "npsn": "20607614",
        "name": "MTS DARUL HIKMAH PAGADUNGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0158",
        "npsn": "20607620",
        "name": "MTS RINA HASANAH MAJAU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0159",
        "npsn": "20622591",
        "name": "MTS NEGERI 2 PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0160",
        "npsn": "20622624",
        "name": "MTS AL MUTTAQIN SIDAMUKTI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0161",
        "npsn": "20622615",
        "name": "MTS YIU PASIRGADUNG PATIA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0162",
        "npsn": "20622616",
        "name": "MTS MA TURUS PATIA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0163",
        "npsn": "20622617",
        "name": "MTS MUHAMMADIYAH BURALUK PATIA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0164",
        "npsn": "20622593",
        "name": "MTS MASYARIQUL ANWAR CARINGIN LABUAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0165",
        "npsn": "20622592",
        "name": "MTS ANNIZHOMIYYAH JAHA LABUAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0166",
        "npsn": "69822439",
        "name": "MTS RIYADHUL ATHFAL PAGELARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0167",
        "npsn": "20622578",
        "name": "MTS MALNU TEGALLEGA CIKEDAL"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0168",
        "npsn": "20622610",
        "name": "MTS MALNU KUBANG PAGELARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0169",
        "npsn": "20622577",
        "name": "MTS AS SYAFA CIBUSUNG CIKEDAL"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0170",
        "npsn": "20622602",
        "name": "MTS ANWARUL HIDAYAH CIPUTRI MENES"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0171",
        "npsn": "20622603",
        "name": "MTS AHLUSUNAH WALJMAAH MENES"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0172",
        "npsn": "20622604",
        "name": "MTS MALNU PUSAT MENES"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0173",
        "npsn": "20622605",
        "name": "MTS MALNU PUTRA KANANGA MENES"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0174",
        "npsn": "20622606",
        "name": "MTS MALNU PUTRI KANANGA MENES"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0175",
        "npsn": "20622599",
        "name": "MTS MATHLAUL ANWAR KANANGA MENES PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0176",
        "npsn": "20622621",
        "name": "MTS AL BADRIYAH KARYAWANGI PULOSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0177",
        "npsn": "20600875",
        "name": "MTS MATHLAUL ANWAR PUSAT MENES"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0178",
        "npsn": "20622601",
        "name": "MTS NURUL AMAL PUSAT MENES"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0179",
        "npsn": "20622594",
        "name": "MTS MATHLABUL FALAH LABUAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0180",
        "npsn": "20622614",
        "name": "MTS ANWARUL HIDAYAH (YAHIDA) PATIA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0181",
        "npsn": "69881706",
        "name": "MTS MATHLAUL ANWAR BAKUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0182",
        "npsn": "20622607",
        "name": "MTS BANI HAMDAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0183",
        "npsn": "20622576",
        "name": "MTS NEGERI 5 PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0184",
        "npsn": "20600901",
        "name": "MTS MATHLAUL ANWAR BOJONG SIKULAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0185",
        "npsn": "20622585",
        "name": "MTS MII PAMATANG SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0186",
        "npsn": "20622586",
        "name": "MTS MASYARIQUL ANWAR SUKACAI JIPUT"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0187",
        "npsn": "20622583",
        "name": "MTS MASYARIKUL ANWAR BANYURESMI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0188",
        "npsn": "20600838",
        "name": "MTS NURUL ARIFIN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0189",
        "npsn": "20622582",
        "name": "MTS DARUL IRFAN TENJOLAHANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0190",
        "npsn": "20622587",
        "name": "MTS NURUL HIKMAH KADUDAHU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0191",
        "npsn": "20622588",
        "name": "MTS MANBAUSHOLIHIN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0192",
        "npsn": "20622574",
        "name": "MTS SINDANGLAUT"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0193",
        "npsn": "20622575",
        "name": "MTS NEGERI 3 PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0194",
        "npsn": "20600900",
        "name": "MTS MATHLAUL ANWAR SUMUR"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0195",
        "npsn": "20600856",
        "name": "MTS NURUL HIDAYAH CIBADAK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0196",
        "npsn": "69883351",
        "name": "MTS AL JAMIATUSSUBBAN CITEUREUP"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0197",
        "npsn": "20600862",
        "name": "MTS YSAB CIGEULIS"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0198",
        "npsn": "69788411",
        "name": "MTS HIDAYATUL MUBTADIIEN SOBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0199",
        "npsn": "20600869",
        "name": "MTS SALAFIYAH DARUL BAYAN GEMBONG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0200",
        "npsn": "20600883",
        "name": "MTS DARUL BAYAN PANIMBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0201",
        "npsn": "69883352",
        "name": "MTS SULAMUL FALAH PAOJAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0202",
        "npsn": "20600916",
        "name": "MTS ANWARUL ABIDIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0203",
        "npsn": "69883354",
        "name": "MTS AL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0204",
        "npsn": "20600779",
        "name": "MTS ASY SYIFA CIKADU INDAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0205",
        "npsn": "20622570",
        "name": "MTS NEGERI 4 PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0206",
        "npsn": "69822436",
        "name": "MTS MUHAMMADIYAH BOJONGMANIK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0207",
        "npsn": "69881708",
        "name": "MTS MATHLAUL ANWAR PASIR DURUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0208",
        "npsn": "20600840",
        "name": "MTS NURUL AMAL CIMOYAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0209",
        "npsn": "20600903",
        "name": "MTS MATHLAUL ANWAR CIBAGOLO"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0210",
        "npsn": "69881697",
        "name": "MTS MATHLAUL ANWAR BOJONG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0211",
        "npsn": "20600870",
        "name": "MTS RIYADHUL MUBTADIIN PASIR JAMBU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0212",
        "npsn": "69883353",
        "name": "MTS MATHLAUL ANWAR NAMBO"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0213",
        "npsn": "20607617",
        "name": "MTS MATHLAUL ANWAR KOLELET"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0214",
        "npsn": "20607616",
        "name": "MTS LI-ULIL ALBAB PICUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "12",
        "kode_sek": "0215",
        "npsn": "20622579",
        "name": "MTS NEGERI 6 PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "12",
        "kode_sek": "0216",
        "npsn": "20607615",
        "name": "MTS MATHLAUL ANWAR HUNIBERA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0217",
        "npsn": "20607904",
        "name": "SMP YASDU CADASARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0218",
        "npsn": "20615171",
        "name": "SMP NEGERI 2 MEKARJAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0219",
        "npsn": "20607639",
        "name": "SMP NEGERI 3 SAKETI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0220",
        "npsn": "20607641",
        "name": "SMP NEGERI 2 PULOSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0221",
        "npsn": "20615160",
        "name": "SMP NEGERI 3 JIPUT"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0222",
        "npsn": "20607629",
        "name": "SMP NEGERI 2 ANGSANA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0223",
        "npsn": "20622611",
        "name": "MTS ZAINABIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0224",
        "npsn": "20622608",
        "name": "MTS NURUL ISTIQOMAH MENES"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0225",
        "npsn": "20607612",
        "name": "MTS AL HALIM"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0226",
        "npsn": "69822442",
        "name": "MTS AR RUJIMAH KORONCONG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0227",
        "npsn": "69883342",
        "name": "MTS TERPADU DAARUL ISTIKMAL"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0228",
        "npsn": "69895190",
        "name": "MTS SABILU EL MUHTADIN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0229",
        "npsn": "69788412",
        "name": "MTS NURUL FATA MARAPAT"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0230",
        "npsn": "69822443",
        "name": "MTS MIFTAHUL HIDAYAH CIMANIS"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0231",
        "npsn": "69822444",
        "name": "MTS RAUDHATUL IMAN CISEUKEUT"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0232",
        "npsn": "20607618",
        "name": "MTS DARUL MUZARIIN AL ISLAMIYAH KARANG BOLONG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0233",
        "npsn": "20614607",
        "name": "MTS MATHLAUL ANWAR DAHU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0234",
        "npsn": "20607640",
        "name": "SMP NEGERI 3 SUMUR"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0235",
        "npsn": "20607644",
        "name": "SMP NEGERI 2 MAJASARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0236",
        "npsn": "20622609",
        "name": "MTS TANWIRUL QULUB"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0237",
        "npsn": "20622589",
        "name": "MTS NURURROHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0238",
        "npsn": "20615045",
        "name": "SMP NEGERI 3 CIKEUSIK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0239",
        "npsn": "20614602",
        "name": "SMP NEGERI 3 PULOSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0240",
        "npsn": "20622622",
        "name": "MTS SUKARAJA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0241",
        "npsn": "20613441",
        "name": "SMP NEGERI 2 PANIMBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0242",
        "npsn": "20607642",
        "name": "SMP NEGERI 3 SOBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0243",
        "npsn": "20607635",
        "name": "SMP NEGERI 2 SUKARESMI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0244",
        "npsn": "20607631",
        "name": "SMP NEGERI 2 CARITA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0245",
        "npsn": "20607636",
        "name": "SMP NEGERI 3 CIBALIUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0246",
        "npsn": "20615170",
        "name": "SMP NEGERI 2 CIBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0247",
        "npsn": "20615055",
        "name": "SMP NEGERI 3 SUKARESMI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0248",
        "npsn": "20615561",
        "name": "SMP NEGERI 4 SOBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0249",
        "npsn": "20615046",
        "name": "SMP NEGERI 3 KARANGTANJUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0250",
        "npsn": "20614751",
        "name": "SMP NEGERI 4 SAKETI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0251",
        "npsn": "20615042",
        "name": "SMP NEGERI 1 KORONCONG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0252",
        "npsn": "20615043",
        "name": "SMP NEGERI 2 BANJAR"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0253",
        "npsn": "69788413",
        "name": "MTS MA SINDANGRESMI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0254",
        "npsn": "20615044",
        "name": "SMP NEGERI 3 MEKARJAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0255",
        "npsn": "20615041",
        "name": "SMP NEGERI 2 KADUHEJO"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0256",
        "npsn": "20614639",
        "name": "SMP NEGERI 4 MANDALAWANGI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0257",
        "npsn": "20615039",
        "name": "SMP NEGERI 5 MANDALAWANGI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0258",
        "npsn": "20614998",
        "name": "SMP NEGERI 5 SAKETI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0259",
        "npsn": "20607931",
        "name": "SMP AS - SHOF"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0260",
        "npsn": "20614197",
        "name": "SMP NEGERI 4 MUNJUL"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0261",
        "npsn": "20615037",
        "name": "SMP NEGERI 4 CIKEUSIK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0262",
        "npsn": "20615057",
        "name": "SMP NEGERI 5 CIKEUSIK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0263",
        "npsn": "20614592",
        "name": "SMP NEGERI 2 CISATA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0264",
        "npsn": "20615053",
        "name": "SMP NEGERI 2 PAGELARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0265",
        "npsn": "69788414",
        "name": "MTS PANACARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0266",
        "npsn": "20607622",
        "name": "SMP NEGERI 3 PANIMBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0267",
        "npsn": "20615034",
        "name": "SMP NEGERI 3 CIGEULIS"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0268",
        "npsn": "20615038",
        "name": "SMP NEGERI 3 CIBITUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0269",
        "npsn": "20615036",
        "name": "SMP NEGERI 3 CIMANGGU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0270",
        "npsn": "20615040",
        "name": "SMP NEGERI 4 CIMANGGU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0271",
        "npsn": "20615033",
        "name": "SMP NEGERI 3 LABUAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0272",
        "npsn": "20615054",
        "name": "SMP NEGERI 3 CARITA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0273",
        "npsn": "20607930",
        "name": "MTS AL GIFARI BANTANI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0274",
        "npsn": "69788416",
        "name": "MTS PEUNTAS"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0275",
        "npsn": "20607967",
        "name": "MTS AL IKHLAS PASEKON"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0276",
        "npsn": "69853268",
        "name": "MTS IBAD AR RAHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0277",
        "npsn": "20615047",
        "name": "SMP NEGERI 3 BANJAR"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0278",
        "npsn": "20615078",
        "name": "SMP NEGERI 3 CIMANUK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0279",
        "npsn": "20614997",
        "name": "SMP NEGERI 3 CIPEUCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0280",
        "npsn": "20615050",
        "name": "SMP NEGERI 3 PICUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0281",
        "npsn": "20615051",
        "name": "SMP NEGERI 2 PATIA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0282",
        "npsn": "20615048",
        "name": "SMP NEGERI 3 CISATA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0283",
        "npsn": "20615049",
        "name": "SMP NEGERI 3 PAGELARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0284",
        "npsn": "20615052",
        "name": "SMP NEGERI 4 PANIMBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0285",
        "npsn": "20615056",
        "name": "SMP NEGERI 4 SUKARESMI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0286",
        "npsn": "20615065",
        "name": "SMP BAHARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0287",
        "npsn": "20607649",
        "name": "SMP DAAR UL AMIN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0288",
        "npsn": "20614840",
        "name": "SMP NEGERI 5 CIMANGGU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0289",
        "npsn": "20614841",
        "name": "SMP NEGERI 6 CIMANGGU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0290",
        "npsn": "20614842",
        "name": "SMP NEGERI 7 CIMANGGU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0291",
        "npsn": "69822478",
        "name": "MTS MIFTAHUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0292",
        "npsn": "20622598",
        "name": "MTS MANBAUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0293",
        "npsn": "20622618",
        "name": "MTS YAHIDA BABAKANKEUSIK"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0294",
        "npsn": "69822445",
        "name": "MTS AL MUHIBBIIN CIMANGGU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0295",
        "npsn": "20616063",
        "name": "MTS BINA IHSANI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0296",
        "npsn": "69816305",
        "name": "MTS RIYADLUT THOLIBIN LINGSUH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0297",
        "npsn": "20622623",
        "name": "MTS AL MUMTAZ"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0298",
        "npsn": "69788417",
        "name": "MTS MIFTAHUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "12",
        "kode_sek": "0299",
        "npsn": "69883349",
        "name": "MTS KESUR"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0300",
        "npsn": "69816304",
        "name": "MTS FA BANI HAMIM"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0301",
        "npsn": "20616252",
        "name": "SMP ISLAM TERPADU TAAJUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0302",
        "npsn": "20622613",
        "name": "MTS RAAUDLATUL MUTAQIN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0303",
        "npsn": "20622571",
        "name": "MTS FASTABIQUL KHOIROT"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0304",
        "npsn": "69883350",
        "name": "MTS DAARUL AMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "12",
        "kode_sek": "0305",
        "npsn": "20622580",
        "name": "MTS AN NAHL"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0306",
        "npsn": "20622573",
        "name": "MTS SABIILUL MUHTADIEN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0307",
        "npsn": "20616115",
        "name": "MTS ANWARUL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0308",
        "npsn": "20622596",
        "name": "MTS TERPADU DARUL HUDA CIKONENG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0309",
        "npsn": "69881702",
        "name": "MTS AN NAHDLAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0310",
        "npsn": "20612310",
        "name": "MTS DAAR EL MUMININ"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0311",
        "npsn": "69883461",
        "name": "MTS SATU ATAP RIYADLUT THOLIBIN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0312",
        "npsn": "20612312",
        "name": "MTS NURUL HIDAYAH SUGAL"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0313",
        "npsn": "69883347",
        "name": "MTS NURHIDAYATULLOH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0314",
        "npsn": "69883343",
        "name": "MTS BABUL ULUM SADANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0315",
        "npsn": "60726787",
        "name": "SMP IT ALBAROKAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0317",
        "npsn": "60726802",
        "name": "SMP DARUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "05",
        "kode_sek": "0318",
        "npsn": "60726800",
        "name": "SMP ISLAM AL-QONAAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0319",
        "npsn": "20616508",
        "name": "MTS DARUL ULUM AL MUNTASHIR"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0320",
        "npsn": "69883355",
        "name": "MTS MATHLAUL ANWAR PERDANA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0321",
        "npsn": "69822447",
        "name": "MTS MUAWANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0322",
        "npsn": "69822446",
        "name": "MTS DARUL AFKAR"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0323",
        "npsn": "69883344",
        "name": "MTS MIFTAHUSSAADAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0324",
        "npsn": "20616324",
        "name": "MTS SULAMUL IRFAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0325",
        "npsn": "20617325",
        "name": "MTS HIKMAH ILMU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0326",
        "npsn": "69788516",
        "name": "MTS MAARIF NU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0327",
        "npsn": "69788569",
        "name": "SMP NEGERI 4 CIGEULIS"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0328",
        "npsn": "69787000",
        "name": "SMP NEGERI 4 PICUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0329",
        "npsn": "60726784",
        "name": "SMP SUBIS"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0330",
        "npsn": "69788041",
        "name": "SMP  IT NURUL YAQIN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0331",
        "npsn": "69788529",
        "name": "SMP IT BABUNAJAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "0332",
        "npsn": "69788570",
        "name": "SMP IT WIDYA NUSANTARA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0333",
        "npsn": "69788311",
        "name": "MTS BPIP PASIR ANGIN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0334",
        "npsn": "69788310",
        "name": "MTS DAAR EL MUMININ CIHASEUM"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0335",
        "npsn": "69788419",
        "name": "MTS AL KHAERIYYAH SIDDIQ"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0336",
        "npsn": "69853269",
        "name": "MTS TUNAS WANGI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0337",
        "npsn": "69788424",
        "name": "MTS TARBIYATUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0338",
        "npsn": "20622572",
        "name": "MTS ABDI BINA INSANI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0339",
        "npsn": "20622620",
        "name": "MTS RIYADUL AWAMIL"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0340",
        "npsn": "69881700",
        "name": "MTS AL ITTIHAD"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0341",
        "npsn": "69822448",
        "name": "MTS DARUL ILMI CIKALONG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0342",
        "npsn": "69788423",
        "name": "MTS DARUL AZQIYA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0343",
        "npsn": "69822424",
        "name": "MTS CURUGLANGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0344",
        "npsn": "69788421",
        "name": "MTS MA GEREDUG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0345",
        "npsn": "69822449",
        "name": "MTS DAARUL FIKRI BOJONG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "12",
        "kode_sek": "0346",
        "npsn": "69788420",
        "name": "MTS AL MUMIN LEUWIMUJA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "12",
        "kode_sek": "0347",
        "npsn": "69788418",
        "name": "MTS NURUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "12",
        "kode_sek": "0348",
        "npsn": "69895189",
        "name": "MTS CIKADONGDONG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "12",
        "kode_sek": "0349",
        "npsn": "69941494",
        "name": "MTS LEUWIBALANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0350",
        "npsn": "69788549",
        "name": "SMP MATHLAUL ANWAR GLOBAL SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0351",
        "npsn": "60728540",
        "name": "SMP ISLAM TERPADU RIYADHUSSHOLIHIIN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0352",
        "npsn": "69864716",
        "name": "SMP NEGERI 2 CADASARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0353",
        "npsn": "69817197",
        "name": "SMP ISLAM AL-IQRO"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0354",
        "npsn": "69727420",
        "name": "SMP NEGERI 4 CIPEUCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0356",
        "npsn": "69882363",
        "name": "MTS AL-HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0357",
        "npsn": "69882365",
        "name": "MTS AL-HIDAYAH BATURANJANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0358",
        "npsn": "69881043",
        "name": "SMP MALNU PUSAT MENES"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0359",
        "npsn": "69788422",
        "name": "MTS MIFTAHUL HUDA TAGELAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0360",
        "npsn": "69883345",
        "name": "MTS AL-FALAH MAHENDRA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0361",
        "npsn": "69883346",
        "name": "MTS DARUL IBTIDA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0362",
        "npsn": "69883348",
        "name": "MTS DAAR EL FIKRI CIMANDAHAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0363",
        "npsn": "69881698",
        "name": "MTS NURUL IKHLAS GUNUNG CANGRI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0364",
        "npsn": "69895192",
        "name": "MTS MARDHATILLAH AL MUMTAZAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0365",
        "npsn": "69895188",
        "name": "MTS SALAFIYYAH DARUL BAYAN CISUDANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0366",
        "npsn": "69882361",
        "name": "MTS JARIAH AL ISLAMIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0367",
        "npsn": "69882364",
        "name": "MTS DARUL HUDA NEMBOL"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0368",
        "npsn": "69882362",
        "name": "MTS AL MANSHUR SUKAMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0369",
        "npsn": "69853270",
        "name": "MTS DARUL HIKAM KABAYAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0370",
        "npsn": "69895191",
        "name": "MTS ROUDHOTUL FALAKH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0371",
        "npsn": "69899193",
        "name": "SMP NEGERI 2 KORONCONG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0372",
        "npsn": "69921486",
        "name": "SMP AL MIZAN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0373",
        "npsn": "69921487",
        "name": "SMP IT IRSYADUL IBAD"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0374",
        "npsn": "69941502",
        "name": "MTS NURUL LAZIM"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0375",
        "npsn": "69941495",
        "name": "MTS NAZZATHUL INSANI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "10",
        "kode_sek": "0376",
        "npsn": "69941493",
        "name": "MTS AMARULLAH GUNUNG BATU"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0377",
        "npsn": "69895193",
        "name": "MTS AN-NAJIYAH PICUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "11",
        "kode_sek": "0378",
        "npsn": "69941499",
        "name": "MTS HIDAYATUL KHOIROT"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "08",
        "kode_sek": "0379",
        "npsn": "69941496",
        "name": "MTS ABDI UMMAT"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0380",
        "npsn": "69941498",
        "name": "MTS DARUL ULUM PANDEGLANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "09",
        "kode_sek": "0381",
        "npsn": "69941500",
        "name": "MTS NURUL ILMI BANGKUYUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "12",
        "kode_sek": "0382",
        "npsn": "69941494",
        "name": "MTS BAITUL UMMAH LEUWIBALANG"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0383",
        "npsn": "69941501",
        "name": "MTS AN-NURIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0384",
        "npsn": "69941497",
        "name": "MTS ATTOYYIBAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0385",
        "npsn": "69958495",
        "name": "SMP ISLAM RIYADHUSSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "03",
        "kode_sek": "0386",
        "npsn": "69965658",
        "name": "SMP ISLAM TERPADU AS SALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "0387",
        "npsn": "69958572",
        "name": "SMP RIYADLUL MUBTADIIN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0388",
        "npsn": "69964372",
        "name": "SMP IT MATHLAUN NAWAKARTIKA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "04",
        "kode_sek": "0389",
        "npsn": "69923949",
        "name": "SMP IT YANUBA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0390",
        "npsn": "69955985",
        "name": "MTSS AT-TAUBAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "07",
        "kode_sek": "0391",
        "npsn": "69977904",
        "name": "MTS DAARURROHMAN RANCAJAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "50",
        "kode_sek": "0392",
        "npsn": "69977903",
        "name": "MTS DAAR RUHAMA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "50",
        "kode_sek": "0393",
        "npsn": "69977902",
        "name": "MTS TAHFIDZ DR-NQ"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "0394",
        "npsn": "69969829",
        "name": "SMP IT BANI ROSYIDIN"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "59",
        "kode_sek": "0395",
        "npsn": "69970583",
        "name": "SMP IT AS-SYIFA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "59",
        "kode_sek": "0396",
        "npsn": "69973830",
        "name": "SMPN 3 KADUHEJO"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "1001",
        "npsn": "69955986",
        "name": "MTSS KUN KARIMA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "01",
        "kode_sek": "1002",
        "npsn": "69982288",
        "name": "SMPS BAHTRA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "91",
        "kode_sek": "1003",
        "npsn": "69993458",
        "name": "MTSS AN-NADWAH"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "02",
        "kode_sek": "1004",
        "npsn": "69991770",
        "name": "SMPS MANBAEL-HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "06",
        "kode_sek": "1005",
        "npsn": "69993759",
        "name": "MTSS MIFTAHUL ULUM MEKARJAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "25",
        "kode_sek": "1006",
        "npsn": "69977905",
        "name": "MTS AL-ISHLAH KANANGA"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "60",
        "kode_sek": "1007",
        "npsn": "69983952",
        "name": "MTSS FATHUL ADZMI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "",
        "kode_sek": "1008",
        "npsn": "69993461",
        "name": "MTS BAITUL AZHAR"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "",
        "kode_sek": "1009",
        "npsn": "69993330",
        "name": "MTSS MASYARIQUL ANWAR BABADSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3601",
        "kode_prov": "30",
        "kode_rayon": "06",
        "kode_sr": "35",
        "kode_sek": "1010",
        "npsn": "69995317",
        "name": "MTSS AL-INAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0001",
        "npsn": "20605209",
        "name": "SMP NEGERI 1 KRAMATWATU"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0002",
        "npsn": "20605146",
        "name": "SMP NEGERI 2 KRAMATWATU"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0003",
        "npsn": "20605162",
        "name": "SMP NEGERI 3 KRAMATWATU"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0004",
        "npsn": "20605198",
        "name": "SMP PGRI KRAMATWATU"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0005",
        "npsn": "20605155",
        "name": "SMP NEGERI 1 WARINGINKURUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0006",
        "npsn": "20605178",
        "name": "SMP NEGERI 2 WARINGINKURUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0007",
        "npsn": "20605062",
        "name": "SMP AL IRSYAD WARINGINKURUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0008",
        "npsn": "20605217",
        "name": "SMP NEGERI 1 BOJONEGARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0009",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 1 BOJONEGARA (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0010",
        "npsn": "20605148",
        "name": "SMP NEGERI 2 BOJONEGARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0011",
        "npsn": "20605077",
        "name": "SMP PGRI BOJONEGARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0012",
        "npsn": "20614054",
        "name": "SMP KH. JA'FAR BOJONEGARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0013",
        "npsn": "20605203",
        "name": "SMP NEGERI 1 ANYAR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0014",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 1 ANYAR (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0015",
        "npsn": "20605156",
        "name": "SMP NEGERI 2 ANYAR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0016",
        "npsn": "20605186",
        "name": "SMP TERPADU SINDANG KARYA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0017",
        "npsn": "20614042",
        "name": "SMP NU KRAMATWATU"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0018",
        "npsn": "20613834",
        "name": "SMP IT AL MASYKAR BINA INSANI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0019",
        "npsn": "20614137",
        "name": "SMP NEGERI SATU ATAP KADUKANCAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0020",
        "npsn": "20605210",
        "name": "SMP NEGERI 1 MANCAK"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0021",
        "npsn": "20605158",
        "name": "SMP NEGERI 2 MANCAK"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0022",
        "npsn": "20605137",
        "name": "SMP NEGERI 1 PULO AMPEL"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0023",
        "npsn": "20605086",
        "name": "SMP KH. WASYID PULO AMPEL"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0024",
        "npsn": "20605225",
        "name": "SMP NEGERI 1 CIRUAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0025",
        "npsn": "20605142",
        "name": "SMP NEGERI 2 CIRUAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0026",
        "npsn": "20605170",
        "name": "SMP NEGERI 3 CIRUAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0027",
        "npsn": "20605182",
        "name": "SMP PGRI CIRUAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0028",
        "npsn": "20605088",
        "name": "SMP KHAS PUTRA BANGSA CIRUAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0029",
        "npsn": "20614133",
        "name": "SMP NAHDATUL ULAMA CIRUAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0030",
        "npsn": "20605227",
        "name": "SMP NEGERI 1 PONTANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0031",
        "npsn": "20605174",
        "name": "SMP NEGERI 2 PONTANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0032",
        "npsn": "20605069",
        "name": "SMP MUHAMMADIYAH PONTANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0033",
        "npsn": "20614167",
        "name": "SMP NEGERI SATU ATAP SUKANEGARA 3"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0034",
        "npsn": "20605152",
        "name": "SMP NEGERI 1 TIRTAYASA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0035",
        "npsn": "20613993",
        "name": "SMP NEGERI SATU ATAP PULO TUNDA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0036",
        "npsn": "20605071",
        "name": "SMP MUHAMMADIYAH TIRTAYASA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0037",
        "npsn": "20605151",
        "name": "SMP NEGERI 1 TANARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0038",
        "npsn": "20614237",
        "name": "SMP NEGERI SATU ATAP KARANGKOBONG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0039",
        "npsn": "20605208",
        "name": "SMP NEGERI 1 KRAGILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0040",
        "npsn": "20605145",
        "name": "SMP NEGERI 2 KRAGILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0041",
        "npsn": "20605161",
        "name": "SMP NEGERI 3 KRAGILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0042",
        "npsn": "20605197",
        "name": "SMP PGRI KRAGILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0043",
        "npsn": "20605078",
        "name": "SMP MUHAMMADIYAH KRAGILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0044",
        "npsn": "20605056",
        "name": "SMP AL - MADANI UNDAR - ANDIR KRAGILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0045",
        "npsn": "20605189",
        "name": "SMP YBB PGRI KRAGILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0046",
        "npsn": "20614156",
        "name": "SMP IT MIFTAHUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0047",
        "npsn": "20605211",
        "name": "SMP NEGERI 1 PABUARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0048",
        "npsn": "69727882",
        "name": "SMP NEGERI TERBUKA 1 PABUARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0049",
        "npsn": "20605159",
        "name": "SMP NEGERI 2 PABUARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0050",
        "npsn": "20605223",
        "name": "SMP NEGERI 1 CIOMAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0051",
        "npsn": "69728244",
        "name": "SMP NEGERI TERBUKA 1 CIOMAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0052",
        "npsn": "20605140",
        "name": "SMP NEGERI 2 CIOMAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0053",
        "npsn": "20605212",
        "name": "SMP NEGERI 1 PADARINCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0054",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 1 PADARINCANG (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0055",
        "npsn": "20605160",
        "name": "SMP NEGERI 2 PADARINCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0056",
        "npsn": "20605199",
        "name": "SMP PGRI PADARINCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0057",
        "npsn": "20614395",
        "name": "SMP TERPADU BISMILLAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0058",
        "npsn": "20614157",
        "name": "SMP NEGERI SATU ATAP KEPUH 2"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0059",
        "npsn": "20614144",
        "name": "SMP NEGERI SATU ATAP BARENGKOK"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0060",
        "npsn": "20605204",
        "name": "SMP NEGERI 1 BAROS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0061",
        "npsn": "20605157",
        "name": "SMP NEGERI 2 BAROS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0062",
        "npsn": "20605055",
        "name": "SMP ATTAUFIQIYYAH BAROS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0063",
        "npsn": "20605185",
        "name": "SMP TERPADU BANI NUR BAROS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0064",
        "npsn": "20605221",
        "name": "SMP NEGERI 1 CINANGKA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0065",
        "npsn": "20614349",
        "name": "SMP NEGERI TERBUKA 1 CINANGKA (TIDAK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0066",
        "npsn": "20605139",
        "name": "SMP NEGERI 2 CINANGKA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0067",
        "npsn": "20605081",
        "name": "SMP ISLAM  NURUL FIKRI BOARDING SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0068",
        "npsn": "20614264",
        "name": "SMP IT SAFINATUNNAJAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0069",
        "npsn": "20615202",
        "name": "SMP NEGERI 1 GUNUNGSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0070",
        "npsn": "20615960",
        "name": "SMP NEGERI 3 SATU ATAP GUNUNGSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0071",
        "npsn": "20605219",
        "name": "SMP NEGERI 1 CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0072",
        "npsn": "20614155",
        "name": "SMP NEGERI 3 BAROS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0073",
        "npsn": "20605147",
        "name": "SMP NEGERI 2 CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0074",
        "npsn": "20605179",
        "name": "SMP NEGERI 3 CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0075",
        "npsn": "20605063",
        "name": "SMP AL IRSYAD CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0076",
        "npsn": "20613983",
        "name": "SMP PGRI CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0077",
        "npsn": "20605188",
        "name": "SMP YASPIRA CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0078",
        "npsn": "20615476",
        "name": "SMP YASSHOFI CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0079",
        "npsn": "20614212",
        "name": "SMP ISLAM EL MIZAN CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0080",
        "npsn": "20605218",
        "name": "SMP NEGERI 1 CARENANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0081",
        "npsn": "20614071",
        "name": "SMP NEGERI TERBUKA 1 CARENANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0082",
        "npsn": "20614160",
        "name": "SMP PGRI 1 CARENANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0083",
        "npsn": "20605067",
        "name": "SMP ISLAM TERPADU DAARUL AHIBBAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0084",
        "npsn": "20605066",
        "name": "SMP ISLAM ANNIDA CARENANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0085",
        "npsn": "20622318",
        "name": "SMP TERPADU IMAM SYAFI'IYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0086",
        "npsn": "20605205",
        "name": "SMP NEGERI 1 BINUANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0087",
        "npsn": "20605076",
        "name": "SMP PGRI BINUANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0088",
        "npsn": "20605060",
        "name": "SMP AL MUKHTARIAH RENGED BINUANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0089",
        "npsn": "20615736",
        "name": "SMP NUSANTARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0090",
        "npsn": "20605206",
        "name": "SMP NEGERI 1 KIBIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0091",
        "npsn": "20605195",
        "name": "SMP PGRI KIBIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0092",
        "npsn": "20605051",
        "name": "SMP INSAN MULYA KIBIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0093",
        "npsn": "20605207",
        "name": "SMP NEGERI 1 KOPO"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0094",
        "npsn": "20614044",
        "name": "SMP ISLAM AL JADID"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0095",
        "npsn": "20605196",
        "name": "SMP PGRI KOPO"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0096",
        "npsn": "20605047",
        "name": "SMP DAAR EL SYIFA KOPO"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0097",
        "npsn": "20605216",
        "name": "SMP NEGERI 1 JAWILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0098",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 1 JAWILAN (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0099",
        "npsn": "20605143",
        "name": "SMP NEGERI 2 JAWILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0100",
        "npsn": "20605194",
        "name": "SMP PGRI JAWILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0101",
        "npsn": "20605061",
        "name": "SMP AL WAHDAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0102",
        "npsn": "20615231",
        "name": "SMP NU JAWILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0103",
        "npsn": "20605214",
        "name": "SMP NEGERI 1 PETIR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0104",
        "npsn": "20605173",
        "name": "SMP NEGERI 2 PETIR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0105",
        "npsn": "20605072",
        "name": "SMP NUR EL FALAH KUBANG PETIR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0106",
        "npsn": "20605054",
        "name": "SMP ISLAM AL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0107",
        "npsn": "20605084",
        "name": "SMP KARYA FAJAR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0108",
        "npsn": "20614076",
        "name": "SMP NURUL ISLAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0109",
        "npsn": "20605220",
        "name": "SMP NEGERI 1 CIKEUSAL"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0110",
        "npsn": "20605138",
        "name": "SMP NEGERI 2 CIKEUSAL"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0111",
        "npsn": "20605180",
        "name": "SMP NEGERI 3 CIKEUSAL"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0112",
        "npsn": "20605065",
        "name": "SMP AL KHAERIYAH 2 CIKEUSAL"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0113",
        "npsn": "20605193",
        "name": "SMP PLUS ASSA'ADAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0114",
        "npsn": "20614043",
        "name": "SMP AT - TAKWA CIKEUSAL"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0115",
        "npsn": "20605213",
        "name": "SMP NEGERI 1 PAMARAYAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0116",
        "npsn": "20605172",
        "name": "SMP NEGERI 2 PAMARAYAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0117",
        "npsn": "20615733",
        "name": "SMP PAJAR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0118",
        "npsn": "20614068",
        "name": "SMP NEGERI 1 BANDUNG SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0119",
        "npsn": "20605048",
        "name": "SMP DIAN NUSANTARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0120",
        "npsn": "20614142",
        "name": "SMP PLUS SALSABILA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0121",
        "npsn": "20605153",
        "name": "SMP NEGERI 1 TUNJUNG TEJA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0122",
        "npsn": "20605200",
        "name": "SMP PGRI PAMARAYAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0123",
        "npsn": "20605201",
        "name": "SMP PGRI TUNJUNG TEJA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0124",
        "npsn": "20614136",
        "name": "SMP NEGERI SATU ATAP CATANG 2"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0125",
        "npsn": "20615537",
        "name": "SMP NEGERI SATU ATAP KALI KERANJANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0126",
        "npsn": "69727886",
        "name": "SMP NEGERI SATU ATAP BULAKAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0127",
        "npsn": "20614213",
        "name": "SMP IT KI RAGIL"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0128",
        "npsn": "20614244",
        "name": "SMP NEGERI 4 KRAGILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0129",
        "npsn": "69727878",
        "name": "SMP NEGERI SATU ATAP LONTAR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0130",
        "npsn": "20614991",
        "name": "SMP NEGERI SATU ATAP TENJO AYU 2"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0131",
        "npsn": "20615072",
        "name": "SMP NEGERI SATU ATAP CIDAHU"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0132",
        "npsn": "20614078",
        "name": "SMP PLUS INSAN CENDIKIA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0133",
        "npsn": "20616062",
        "name": "SMP ISLAM DAARUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0134",
        "npsn": "69727462",
        "name": "SMP NEGERI SATU ATAP PASIR MENTENG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0135",
        "npsn": "20616043",
        "name": "SMP NEGERI 3 CINANGKA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0136",
        "npsn": "20614393",
        "name": "SMP NEGERI SATU ATAP PABUARAN 4"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0137",
        "npsn": "20614392",
        "name": "SMP NEGERI SATU ATAP GARUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0138",
        "npsn": "20615940",
        "name": "SMP NEGERI SATU ATAP CITERAS 2"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0139",
        "npsn": "20623156",
        "name": "SMP ISLAM TERPADU BINA INSAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0140",
        "npsn": "20614165",
        "name": "SMP PRESTASI CIKANDE PERMAI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0141",
        "npsn": "20614055",
        "name": "SMP CITRA NUSANTARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0142",
        "npsn": "20615989",
        "name": "SMP DARUL KHALIFAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0143",
        "npsn": "20614988",
        "name": "SMP NEGERI SATU ATAP WIRANA PASIR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0144",
        "npsn": "20615013",
        "name": "SMP NEGERI SATU ATAP CIPINANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0145",
        "npsn": "20615522",
        "name": "SMP NEGERI SATU ATAP 4 KRAMATWATU"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0146",
        "npsn": "20614143",
        "name": "SMP NEGERI SATU ATAP 5 KRAMATWATU"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0147",
        "npsn": "20615535",
        "name": "SMP ISLAM HIDAYATUL UMAM"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0148",
        "npsn": "20615734",
        "name": "SMP IT RAUDHATUL MU'AWANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0149",
        "npsn": "20615975",
        "name": "SMP NEGERI SATU ATAP 3 CIOMAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0150",
        "npsn": "20615747",
        "name": "SMP ISLAM TERPADU BAYT AL-QUR'AN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0151",
        "npsn": "20615942",
        "name": "SMP NEGERI 2 KOPO"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0152",
        "npsn": "20614886",
        "name": "SMP MITRA PERSADA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0153",
        "npsn": "20614989",
        "name": "SMP NEGERI 2 BANDUNG SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0154",
        "npsn": "20615943",
        "name": "SMP NEGERI SATU ATAP 2 TUNJUNG TEJA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0155",
        "npsn": "20616235",
        "name": "SMP NEGERI 3 PONTANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0156",
        "npsn": "69765040",
        "name": "SMP NURUL FALAH TANARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0157",
        "npsn": "20615743",
        "name": "SMP NEGERI 2 GUNUNGSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0158",
        "npsn": "20615865",
        "name": "SMP IT AR-RAUDHAH ALBANTANI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0159",
        "npsn": "20616008",
        "name": "SMP NURUL MUHTADIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0160",
        "npsn": "20605163",
        "name": "SMP NEGERI 3 PAMARAYAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0161",
        "npsn": "20615749",
        "name": "SMP NEGERI 2 TUNJUNG TEJA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0162",
        "npsn": "20616323",
        "name": "SMP BINA MANDIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0163",
        "npsn": "20616322",
        "name": "SMP NEGERI 3 MANCAK"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0164",
        "npsn": "20622314",
        "name": "SMP ISLAM DARUTTAUFIQ"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0165",
        "npsn": "20616337",
        "name": "SMP IT AL-MA'ARIF KRAMATWATU"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0166",
        "npsn": "20622317",
        "name": "SMP IT AL-HIDAYAH MANCAK"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0167",
        "npsn": "20616166",
        "name": "SMP IT AL-HIDAYAH KRAGILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0168",
        "npsn": "20616287",
        "name": "SMP NEGERI 4 CINANGKA SATAP"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0169",
        "npsn": "20622324",
        "name": "SMP NEGERI 4 CIOMAS SATAP"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0170",
        "npsn": "20622320",
        "name": "SMP NEGERI 5 PADARINCANG SATAP"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0171",
        "npsn": "20616163",
        "name": "SMP BINAUL HUSNA CARENANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0172",
        "npsn": "20616325",
        "name": "SMP NEGERI 2 SATU ATAP CARENANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0173",
        "npsn": "20623098",
        "name": "SMP NEGERI 3 PADARINCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0174",
        "npsn": "20622319",
        "name": "SMP NEGERI 4 PADARINCANG SATAP"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0175",
        "npsn": "60728491",
        "name": "SMP NEGERI 3 PETIR SATAP"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0183",
        "npsn": "20622876",
        "name": "MTS NEGERI 1 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0184",
        "npsn": "69941513",
        "name": "MTS AL KHAIRIYAH KEPANDEAN CIRUAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0185",
        "npsn": "69725805",
        "name": "MTS NUR ET TAQWA CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0186",
        "npsn": "20622858",
        "name": "MTS ROUDHOTUL HIKMAH SUKATANI CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0187",
        "npsn": "69725825",
        "name": "MTS DAAR EL KHOIROT BAKUNG CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0188",
        "npsn": "20622887",
        "name": "MTS AL KHAERIYAH TAMBAK KIBIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0189",
        "npsn": "20622919",
        "name": "MTS AL KHAERIYAH PONTANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0190",
        "npsn": "69725417",
        "name": "MTS AL KHAERIYAH KELAPIAN PONTANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0191",
        "npsn": "20622920",
        "name": "MTS AL KHAERIYAH PULO KENCANA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0192",
        "npsn": "20622940",
        "name": "MTS ASHHABUL MAIMANAH SUSUKAN TIRTAYASA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0193",
        "npsn": "20622918",
        "name": "MTS ASHHABUL MAIMANAH CIKOBAK PONTANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0194",
        "npsn": "20622939",
        "name": "MTS SULTHAN AGUNG TIRTAYASA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0195",
        "npsn": "20622929",
        "name": "MTS AL ITTIHAD PADELEMAN TANARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0197",
        "npsn": "20622941",
        "name": "MTS AL HIKMAH SUJUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0198",
        "npsn": "20622937",
        "name": "MTS ASHHABUL MAIMANAH SIDAYU TIRTAYASA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0199",
        "npsn": "20622854",
        "name": "MTS RAUDATUL ATHFAL ASTANA CARENANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0200",
        "npsn": "20622852",
        "name": "MTS ASHHABUL MAIMANAH RAGAS PURWADADI CARENANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0201",
        "npsn": "20622856",
        "name": "MTS DARUL HIKMAH BOLANG CARENANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0202",
        "npsn": "20622847",
        "name": "MTS DARUL HIKMAH CAKUNG BINUANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0203",
        "npsn": "60730149",
        "name": "MTS DAAR EL QURRO RENGED BINUANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0204",
        "npsn": "20622850",
        "name": "MTS AL KHAERIYAH JATI BINUANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0205",
        "npsn": "20622855",
        "name": "MTS MANBA'USSALAM CARENANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0206",
        "npsn": "20622853",
        "name": "MTS AL KHAERIYAH BENDUNG MALANG CARENANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0207",
        "npsn": "20622857",
        "name": "MTS ATTOYIBIYAH BADAK CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0208",
        "npsn": "20622933",
        "name": "MTS MATHLAUL FALAH LEMPUYANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0209",
        "npsn": "69895951",
        "name": "MTS AN NAWAWI TANARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0210",
        "npsn": "69881726",
        "name": "MTS SYEKH BAJANG TENJO AYU TANARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0211",
        "npsn": "20622932",
        "name": "MTS BANI KARIM PEGADUNGAN TANARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0219",
        "npsn": "69895741",
        "name": "MTS AL MAARIF SONGGOM JAYA CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0220",
        "npsn": "20622930",
        "name": "MTS MATHLAUL FALAH SIREMEN TANARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0221",
        "npsn": "20622942",
        "name": "MTS NURUL BAHRI LONTAR TIRTAYASA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0222",
        "npsn": "20622860",
        "name": "MTS NURUL FATAH CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0224",
        "npsn": "20622921",
        "name": "MTS AL KHAERIYAH PANECEKAN PONTANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0225",
        "npsn": "20622877",
        "name": "MTS ASSALAM CIRUAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0228",
        "npsn": "20622859",
        "name": "MTS KULNI BAUWAN CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0229",
        "npsn": "20622928",
        "name": "MTS AN NAWAWI TERPADU TANARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0230",
        "npsn": "69725416",
        "name": "MTS DARUL FALAH KIBIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0231",
        "npsn": "69895742",
        "name": "MTS MIFTAHUSSAADAH ASSAMUNIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0232",
        "npsn": "20622922",
        "name": "MTS AL KHAIRIYAH BAYONGBONG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0233",
        "npsn": "69725806",
        "name": "MTS ROUDOTUSSALAM SONGGOM JAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0234",
        "npsn": "69725420",
        "name": "MTS AL HAFIZH AL BANTANI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0236",
        "npsn": "69725622",
        "name": "MTS AL KHAIRIYAH SUKANEGARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0237",
        "npsn": "20622849",
        "name": "MTS RIYADHUL HUDA ASSIDIQI JATI BINUANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0238",
        "npsn": "20622904",
        "name": "MTS NEGERI 2 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0239",
        "npsn": "20622905",
        "name": "MTS PERSIS GUNUNG BUNTUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0240",
        "npsn": "20622909",
        "name": "MTS BARUGBUG CIOMAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0241",
        "npsn": "20622902",
        "name": "MTS NURUL FALAH CIASEUM"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0242",
        "npsn": "20622901",
        "name": "MTS MATHLAUL HUDA PABATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0243",
        "npsn": "20614309",
        "name": "MTS AL HAMIDIYAH KADU KACAPI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0244",
        "npsn": "20622846",
        "name": "MTS RAUDATUL MUTAALLIMIN SIDADUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0246",
        "npsn": "69895226",
        "name": "MTS BUSTANUL MUTAALLIMIN CURUG AGUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0247",
        "npsn": "20622903",
        "name": "MTS DARUNNAJAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0248",
        "npsn": "20622907",
        "name": "MTS NURUL HIDAYAH CIBAWANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0249",
        "npsn": "20622906",
        "name": "MTS AL KHAERIYAH RANCARANJI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0250",
        "npsn": "20605453",
        "name": "MTS NURUL HUDA BAROS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0251",
        "npsn": "20605428",
        "name": "MTS MATHLAUL ANWAR CITASUK"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0252",
        "npsn": "20622874",
        "name": "MTS ISLAMIYAH CIOMAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0253",
        "npsn": "20622875",
        "name": "MTS AL HIDAYAH CILONGKRANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0255",
        "npsn": "20622908",
        "name": "MTS DARUL IRFAN BUGEL"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0256",
        "npsn": "20605462",
        "name": "MTS AL MAARIF RANCALUTUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0257",
        "npsn": "20622840",
        "name": "MTS NEGERI 4 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0258",
        "npsn": "20622893",
        "name": "MTS AL KHAERIYAH PAMEKSER"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0259",
        "npsn": "20622841",
        "name": "MTS RAUDLATUL ULUM JAHA ANYAR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0260",
        "npsn": "20622843",
        "name": "MTS AL KHAERIYAH BANJARSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0261",
        "npsn": "20622844",
        "name": "MTS RAUDATUL ULUM ANYER"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0262",
        "npsn": "20622898",
        "name": "MTS AL KHAERIYAH ASEM MANCAK"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0263",
        "npsn": "20622842",
        "name": "MTS AL KHAERIYAH TAMBANG AYAM"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0264",
        "npsn": "20622866",
        "name": "MTS AL KHAIRIYAH KAMASAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0265",
        "npsn": "20622865",
        "name": "MTS AL KHAIRIYAH SINDANGLAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0266",
        "npsn": "20622871",
        "name": "MTS AL KHAERIYAH KARANG SURAGA CINANGKA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0267",
        "npsn": "60730148",
        "name": "MTS AL KHAERIYAH BULAKAN CINANGKA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0268",
        "npsn": "20622872",
        "name": "MTS AL KHAERIYAH PASAURAN CINANGKA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0269",
        "npsn": "20622869",
        "name": "MTS MATHLAUL ANWAR SADATANI CINANGKA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0270",
        "npsn": "20622867",
        "name": "MTS MATHLAUL ANWAR KEPUH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0271",
        "npsn": "20622868",
        "name": "MTS ISLAMIYAH KUBANG KAREES CINANGKA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0272",
        "npsn": "20622895",
        "name": "MTS AL KHAERIYAH MACUTE MANCAK"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0273",
        "npsn": "60730316",
        "name": "MTS DARUL ULUM MANCAK"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0274",
        "npsn": "20622870",
        "name": "MTS AL KHAERIYAH CIKOLELET"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0275",
        "npsn": "20614183",
        "name": "MTS RAUDLATUL ULUM PASIRWARU (TIDAK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0276",
        "npsn": "60730317",
        "name": "MTS ASSAADAH CIRUNTEN ANYER"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0277",
        "npsn": "20622925",
        "name": "MTS NEGERI 5 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0278",
        "npsn": "69886432",
        "name": "MTS AL KHAERIYAH PENGORENG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0279",
        "npsn": "20622927",
        "name": "MTS JAUHAROTUNAQIYAH BUAH GEDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0280",
        "npsn": "69886427",
        "name": "MTS AL KHAERIYAH MARGAGIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0281",
        "npsn": "69881722",
        "name": "MTS AL KHAERIYAH LEMBANGSARI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0282",
        "npsn": "69919247",
        "name": "MTS MIFTAHUL HAYAT WARINGINKURUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0283",
        "npsn": "20622892",
        "name": "MTS JAUHAROTUNAQIYAH WANASABA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0284",
        "npsn": "69881723",
        "name": "MTS JAUHAROTUNAQIYAH TANJUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0285",
        "npsn": "20622851",
        "name": "MTS AL KHAIRIYAH PAKUNCEN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0286",
        "npsn": "20622862",
        "name": "MTS NEGERI 3 SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0287",
        "npsn": "20605482",
        "name": "MTS ASSAADAH PASIR MANGGU (TIDAK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0288",
        "npsn": "60729675",
        "name": "MTS NURUL KHOIR PAMARAYAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0289",
        "npsn": "60729668",
        "name": "MTS NUR EL FALAH KUBANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0290",
        "npsn": "20622839",
        "name": "MTS NURUL FALAH SABRANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0291",
        "npsn": "20622946",
        "name": "MTS NURUL FALAH BOJONG PANDAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0292",
        "npsn": "20622916",
        "name": "MTS NURUL FALAH PASANGGRAHAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0293",
        "npsn": "20622914",
        "name": "MTS DAAR ET TAQWA CIGODEG PETIR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0294",
        "npsn": "20622912",
        "name": "MTS MANBAUL FALAH CIREUNDEU"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0295",
        "npsn": "20622911",
        "name": "MTS NURUL FALAH CIGODEG PETIR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0296",
        "npsn": "20622917",
        "name": "MTS NURUL FALAH REGO PADASUKA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0297",
        "npsn": "20622944",
        "name": "MTS NURUL FALAH SUKASARI PETIR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0298",
        "npsn": "20622943",
        "name": "MTS NURUL FALAH TUNJUNG KETUG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0299",
        "npsn": "20622913",
        "name": "MTS SHOLATIYAH KEPANDEAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0300",
        "npsn": "20622945",
        "name": "MTS YPPI AL HUSEN TUNJUNG TEJA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0301",
        "npsn": "20622845",
        "name": "MTS NUR EL KHOIR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0302",
        "npsn": "20622864",
        "name": "MTS NURUL AL AMI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0303",
        "npsn": "60729676",
        "name": "MTS MAB DAIL FALAH SANGIANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0316",
        "npsn": "20622896",
        "name": "MTS RAUDLATUL ULUM PASIRGADUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0317",
        "npsn": "20622948",
        "name": "MTS NURUL MUHTADIN TIGAMAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0318",
        "npsn": "20614110",
        "name": "MTS MIFTAHUN NAJAH LAMONGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0319",
        "npsn": "20622891",
        "name": "MTS BANY TSAMIN KEBAROSAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0320",
        "npsn": "20622848",
        "name": "MTS AL HIDAYAH BINUANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0321",
        "npsn": "20622861",
        "name": "MTS YAUMIN CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0322",
        "npsn": "20622923",
        "name": "MTS DOWA AL ISLAMI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0323",
        "npsn": "20622924",
        "name": "MTS ASHABUL MAIMANAH LEBAK KEPUH PONTANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0324",
        "npsn": "20622863",
        "name": "MTS AL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0325",
        "npsn": "20622890",
        "name": "MTS NURRUSSAMAWATI WAL ARDHI INDASA NUSUSIYYATI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0326",
        "npsn": "60729688",
        "name": "MTS MATHLAUL ANWAR KOPO SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0328",
        "npsn": "69886428",
        "name": "MTS MATHLAB EL AWAM KOPER CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0329",
        "npsn": "60729687",
        "name": "MTS NURUL FALAH ABDUL AZIZ"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0331",
        "npsn": "20622947",
        "name": "MTS AR RIDHO WARINGIN KURUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0332",
        "npsn": "60729669",
        "name": "MTS JAMIATUL IKHWAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0333",
        "npsn": "20622885",
        "name": "MTS ASSALAMIYAH JAWILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0334",
        "npsn": "20622882",
        "name": "MTS IKHLAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0335",
        "npsn": "20622888",
        "name": "MTS DARUL FALAH KOPO"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0336",
        "npsn": "20622889",
        "name": "MTS DARUN NIAM KOPO"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0337",
        "npsn": "60729684",
        "name": "MTS DARUSSALAM NYOMPOK"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0338",
        "npsn": "60729685",
        "name": "MTS AL AMIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0339",
        "npsn": "20622880",
        "name": "MTS KHAIRUL MUFIED JUNTI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0340",
        "npsn": "60729678",
        "name": "MTS MISBAAHUSSUDUR BANDUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0341",
        "npsn": "60729686",
        "name": "MTS MIFTAHUL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0342",
        "npsn": "60729682",
        "name": "MTS NURIL ROHMAT AMCANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0343",
        "npsn": "60729806",
        "name": "MTS AL FURQON KRAGILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0344",
        "npsn": "60729691",
        "name": "MTS AL KHAERIYAH PALEMBANGAN KRAGILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0345",
        "npsn": "60729692",
        "name": "MTS AL HIDAYAH KRAGILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0346",
        "npsn": "60729690",
        "name": "MTS AL MUKHLISIN SUKAJADI KRAGILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0347",
        "npsn": "20622883",
        "name": "MTS AL KHAERIYAH KAREO JAWILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0348",
        "npsn": "20622884",
        "name": "MTS BANI NAWAWIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0349",
        "npsn": "",
        "name": "MTS DARUL HUDA (TDK AKTIF)"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0350",
        "npsn": "60729671",
        "name": "MTS DARUSSOLIHIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0351",
        "npsn": "60729672",
        "name": "MTS NURUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0352",
        "npsn": "60729679",
        "name": "MTS AL ASYARI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0353",
        "npsn": "69932039",
        "name": "MTS SA RIYADL ASH SHOLIHIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0354",
        "npsn": "60729670",
        "name": "MTS NURUL IKHLAS BAITURRAHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0355",
        "npsn": "69881725",
        "name": "MTS AL ITTIHAD PULO PANJANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0356",
        "npsn": "20622926",
        "name": "MTS AL KHAIRIYAH BANYUWANGI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0357",
        "npsn": "69932040",
        "name": "MTS DAARUNADWAH KRAMATWATU"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0359",
        "npsn": "20622899",
        "name": "MTS NURUL IKHWAN KEPUH PABUARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0361",
        "npsn": "20622897",
        "name": "MTS DAARUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0362",
        "npsn": "20622879",
        "name": "MTS DARUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0363",
        "npsn": "60729673",
        "name": "MTS DARUL AMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0364",
        "npsn": "60729674",
        "name": "MTS AL ZAMHARIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0365",
        "npsn": "69886429",
        "name": "MTS HIKMATUL IMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0366",
        "npsn": "60729680",
        "name": "MTS AL WAHDAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0367",
        "npsn": "60729697",
        "name": "MTS DAAR ELRAHMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0368",
        "npsn": "60729689",
        "name": "MTS DAAR EL FIQH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0369",
        "npsn": "69895228",
        "name": "MTS AL JAUHAROTUNNAQIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0370",
        "npsn": "20622899",
        "name": "MTS NURUL IKHWAN (TIDAK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0371",
        "npsn": "20622873",
        "name": "MTS KHAIRUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0372",
        "npsn": "20615956",
        "name": "MTS AL MAHDI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0373",
        "npsn": "69822452",
        "name": "MTS AL IA'NATU THALIBIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0374",
        "npsn": "69895743",
        "name": "MTS AL KHAERIYAH CIKELE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0376",
        "npsn": "60729681",
        "name": "MTS AL IHSAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0377",
        "npsn": "20622878",
        "name": "MTS AL HIKMAH CIMIUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0378",
        "npsn": "69886433",
        "name": "MTS AL HIKMAH SUKAMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0379",
        "npsn": "20622934",
        "name": "MTS BANI SOLEH TANARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0380",
        "npsn": "20622915",
        "name": "MTS NURUL IMAN BANI SULTON"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0381",
        "npsn": "60729683",
        "name": "MTS DAAR EL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0382",
        "npsn": "60729677",
        "name": "MTS YAPIDAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0383",
        "npsn": "69881727",
        "name": "MTS HIDAYATUL HIKMAH PECARIKAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0384",
        "npsn": "20616521",
        "name": "MTS SA RIADLUS SHALIHIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0385",
        "npsn": "20622910",
        "name": "MTS NURUL ABROR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0386",
        "npsn": "69726411",
        "name": "MTS NURUL HIDAYAH PANYAIRAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0387",
        "npsn": "69726413",
        "name": "MTS AL HAYAT PADAHARAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0388",
        "npsn": "69725418",
        "name": "MTS SA KAUTSAR BANI MURSYID"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0389",
        "npsn": "60730271",
        "name": "MTS MINHAJUL ABIDIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0390",
        "npsn": "20622886",
        "name": "MTS DAAR AL KHOIR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0391",
        "npsn": "69725807",
        "name": "MTS SA BANI MAMUN ASSALAMI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0392",
        "npsn": "69932041",
        "name": "MTS TARBIYATUL AKHLAK"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0393",
        "npsn": "60729695",
        "name": "MTS NURUL FALAH GOSALI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0394",
        "npsn": "60729693",
        "name": "MTS BUSTANUL AULAD KOPO"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0395",
        "npsn": "69766963",
        "name": "SMP ISLAM FAJRUL KARIM"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0396",
        "npsn": "69767786",
        "name": "SMP 45 CIKANDE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0397",
        "npsn": "20622315",
        "name": "SMP NURUL IKHSAN KIBIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0398",
        "npsn": "69727463",
        "name": "SMP IT AT-TOOBA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0399",
        "npsn": "69786874",
        "name": "SMP DAARUNNAJAH JAWILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0400",
        "npsn": "69767787",
        "name": "SMP IT NURUL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0401",
        "npsn": "69766964",
        "name": "SMP NURUL FALAH TUNJUNG TEJA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0402",
        "npsn": "69822678",
        "name": "SMP IT LA TAHZAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "07",
        "kode_sek": "0403",
        "npsn": "69886240",
        "name": "MTS AL KHAERIYAH SIRONGGE"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0404",
        "npsn": "69822453",
        "name": "MTS AL JAMIYAH LEBAK CIOMAS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0405",
        "npsn": "69822455",
        "name": "MTS SIROJUL AFIDAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0406",
        "npsn": "69886434",
        "name": "MTS MATHLAUL ANWAR SAMPANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0407",
        "npsn": "69849764",
        "name": "SMP NURUL ILMI DARUNNAJAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0408",
        "npsn": "69788186",
        "name": "SMP AL-HUSNA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0409",
        "npsn": "69849667",
        "name": "SMP DAARUL IKHWAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0410",
        "npsn": "69849766",
        "name": "SMP IT DZIL KIROM"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "05",
        "kode_sek": "0411",
        "npsn": "69859766",
        "name": "SMP AL ISCHAKIYAH PEMBANGUNAN TERPADU"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0412",
        "npsn": "69859704",
        "name": "SMP ASSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "04",
        "kode_sek": "0413",
        "npsn": "69857932",
        "name": "SMP KRAMAT JATI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0414",
        "npsn": "69881721",
        "name": "MTS NURUL BASMALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "0415",
        "npsn": "69881724",
        "name": "MTS AL FAUZAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0416",
        "npsn": "69895227",
        "name": "MTS AS SYAFI'IYAH GEMBOR"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0417",
        "npsn": "69895225",
        "name": "MTS AL HAMRA KAIBON"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "0418",
        "npsn": "69895744",
        "name": "MTS TERPADU YANISBA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0419",
        "npsn": "69896407",
        "name": "SMP AL-AFANDIYAH KRAGILAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "0420",
        "npsn": "69849681",
        "name": "SMP INFORMASI TEKNOLOGI ISTANA MULIA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0421",
        "npsn": "69859769",
        "name": "SMP ISLAM TERPADU IBADURRAHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0422",
        "npsn": "69889141",
        "name": "SMP IT AL-MUTAFAKKIRIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0423",
        "npsn": "69854908",
        "name": "SMP ISLAM TERPADU INSAN MERDESA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0424",
        "npsn": "69946869",
        "name": "SMP ISLAM TERPADU AL IZZAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0425",
        "npsn": "69932042",
        "name": "MTS DARUL MA RIFAT"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "0426",
        "npsn": "69941512",
        "name": "MTS AL AQSHO PEGADINGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "02",
        "kode_sek": "0427",
        "npsn": "69887370",
        "name": "SMP IT AL-BAYAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0428",
        "npsn": "69962295",
        "name": "SMP IT INSAN CITA SERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0429",
        "npsn": "69956669",
        "name": "SMP ISLAM DAARUL FIRDAUS"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0430",
        "npsn": "69969803",
        "name": "SMP ISLAM AN NADZIR BOARDING SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0431",
        "npsn": "69929537",
        "name": "SMP IT KARYA MANDIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0432",
        "npsn": "69961668",
        "name": "SMP NEGERI 4 CIKEUSAL"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0433",
        "npsn": "69956000",
        "name": "MTS MIFTAHUL FALAH TUNJUNG TEJA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0434",
        "npsn": "69963501",
        "name": "MTS AS-SYAHIRIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0435",
        "npsn": "69955999",
        "name": "MTS AL- FAUZAN KADUGENEP"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0437",
        "npsn": "69969835",
        "name": "SMP BAITUL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0438",
        "npsn": "69975054",
        "name": "SMP DAAR EL HASANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0439",
        "npsn": "69974160",
        "name": "SMP ISLAM BIRRU L WAALIDAIN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "0440",
        "npsn": "69977968",
        "name": "MTS BANI USMAN ALBUAETY"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0441",
        "npsn": "69956670",
        "name": "SMP JAMIATUL IKHWAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "01",
        "kode_sek": "0442",
        "npsn": "69982729",
        "name": "SMP IT GLOBAL 2 BANDUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "1001",
        "npsn": "69977970",
        "name": "MTS SHIDIQ AL-FARIZY"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "10",
        "kode_sek": "1002",
        "npsn": "69977971",
        "name": "MTS ASHHABUL MAIMANAH KARANGKOBONG"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "1003",
        "npsn": "69995565",
        "name": "MTS AL-QORNIS PAMARAYAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "1004",
        "npsn": "69992345",
        "name": "MTS ANNUR AL-LAILI"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "08",
        "kode_sek": "1005",
        "npsn": "69992304",
        "name": "MTS NURUL FALAH KEMUNING"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "09",
        "kode_sek": "1006",
        "npsn": "69977969",
        "name": "MTS BANI SALIMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "1007",
        "npsn": "69995538",
        "name": "MTS RAKSA NEGARA"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "03",
        "kode_sek": "1008",
        "npsn": "69988769",
        "name": "SMP IT FATHUSSIBYAN"
      },
      {
        "province_id": "36",
        "regency_id": "3604",
        "kode_prov": "30",
        "kode_rayon": "05",
        "kode_sr": "06",
        "kode_sek": "1009",
        "npsn": "69994492",
        "name": "MTS ANNUR AL-LAILI"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0001",
        "npsn": "20603126",
        "name": "SMP NEGERI 5 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0002",
        "npsn": "20603138",
        "name": "SMP NEGERI 12 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0003",
        "npsn": "20603539",
        "name": "SMP ISLAM AL - AZHAR 3"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0004",
        "npsn": "20614195",
        "name": "SMP KRISTEN PENABUR BINTARO JAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0005",
        "npsn": "20603637",
        "name": "SMP AN NAJIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0006",
        "npsn": "20603617",
        "name": "SMP CENDERAWASIH II"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0007",
        "npsn": "20603562",
        "name": "SMP PEMBANGUNAN JAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0008",
        "npsn": "20603204",
        "name": "SMP PGRI 336 PONDOK BETUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0009",
        "npsn": "20603206",
        "name": "SMP PGRI 371 PONDOK AREN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0010",
        "npsn": "20603225",
        "name": "SMP YAPIA PONDOK AREN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0011",
        "npsn": "20603233",
        "name": "SMP UTAMA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0012",
        "npsn": "20603223",
        "name": "SMP YADIKA 6"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0013",
        "npsn": "20616113",
        "name": "SMP GLOBAL JAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0014",
        "npsn": "20603527",
        "name": "SMP KATOLIK RICCI II"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0015",
        "npsn": "20603528",
        "name": "SMP KEBANGSAAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0016",
        "npsn": "20613628",
        "name": "SMP AN - NISAA'"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0017",
        "npsn": "20614206",
        "name": "SMP IT AL QUR'ANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0018",
        "npsn": "20613594",
        "name": "SMP ISLAM PLUS BAITUL MAAL"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0019",
        "npsn": "20614708",
        "name": "SMP CITRA INDONESIA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0020",
        "npsn": "20603563",
        "name": "SMP PARIGI PONDOK AREN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0021",
        "npsn": "20603172",
        "name": "SMP NEGERI 6 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0022",
        "npsn": "20613509",
        "name": "SMP NEGERI 14 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0023",
        "npsn": "20603645",
        "name": "SMP DWI PUTRA CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0024",
        "npsn": "20603559",
        "name": "SMP PARAMARTA CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0025",
        "npsn": "20603385",
        "name": "SMP PGRI 2 CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0026",
        "npsn": "20603201",
        "name": "SMP PGRI JOMBANG - CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0027",
        "npsn": "20614367",
        "name": "SMP IT AL - MATIIN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0028",
        "npsn": "20603244",
        "name": "SMP TIRTA BUARAN CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0029",
        "npsn": "20603557",
        "name": "SMP NUSA INDAH CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0030",
        "npsn": "20603636",
        "name": "SMP AL MUBARAK PONDOK AREN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0031",
        "npsn": "20603630",
        "name": "SMP BUDI BHAKTI"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0032",
        "npsn": "20603621",
        "name": "SMP DAHLIA PONDOK AREN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0033",
        "npsn": "20613829",
        "name": "SMP ISLAM TERPADU AULIYA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0034",
        "npsn": "20603220",
        "name": "SMP WIJAYA KUSUMA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0035",
        "npsn": "20614414",
        "name": "SMP TUNAS BANGSA TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0036",
        "npsn": "",
        "name": "SMP BINA TUNAS BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0037",
        "npsn": "20613558",
        "name": "SMP PLUS AL ISLAMIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0039",
        "npsn": "20603538",
        "name": "SMP ISLAM AL FAJAR"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0040",
        "npsn": "69947687",
        "name": "SMP NURUL IKHLAS PAMULANG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0041",
        "npsn": "20614916",
        "name": "SMP AS SALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0042",
        "npsn": "20603125",
        "name": "SMP NEGERI 2 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0043",
        "npsn": "20603132",
        "name": "SMP NEGERI 3 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0044",
        "npsn": "20603178",
        "name": "SMP NEGERI 10 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0045",
        "npsn": "20603180",
        "name": "SMP NEGERI 13 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0046",
        "npsn": "20603634",
        "name": "SMP ISLAM AL KHASYI'UN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0047",
        "npsn": "20603545",
        "name": "SMP ISLAM AL - SYUKRO"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0048",
        "npsn": "20603523",
        "name": "SMP ISLAM RUHAMA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0049",
        "npsn": "20603526",
        "name": "SMP ISLAMIYAH CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0050",
        "npsn": "20603574",
        "name": "SMP MOH. HUSNI THAMRIN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0051",
        "npsn": "20603576",
        "name": "SMP MUHAMMADIYAH 17"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0052",
        "npsn": "20603566",
        "name": "SMP PGRI 1 CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0053",
        "npsn": "20603623",
        "name": "SMP DARUSSALAM CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0054",
        "npsn": "20603199",
        "name": "SMP PUSPITA BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0055",
        "npsn": "20603224",
        "name": "SMP YAPIA CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0056",
        "npsn": "20613479",
        "name": "SMP YMJ CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0057",
        "npsn": "20603533",
        "name": "SMP MABAD REMPOA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0058",
        "npsn": "20613613",
        "name": "SMP CENDIKIA MADANI"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0059",
        "npsn": "20603629",
        "name": "SMP DUA MEI CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0060",
        "npsn": "20614474",
        "name": "SMP BINTANG KEJORA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0061",
        "npsn": "20603626",
        "name": "SMP DHARMA KARYA UT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0062",
        "npsn": "20613598",
        "name": "SMP ISLAM AL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0063",
        "npsn": "20614314",
        "name": "SMP PUTRA PERTIWI"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0064",
        "npsn": "20613959",
        "name": "SMP PLUS NUSANTARA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0065",
        "npsn": "20603153",
        "name": "SMP NEGERI 4 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0066",
        "npsn": "20603136",
        "name": "SMP NEGERI 9 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0067",
        "npsn": "20613593",
        "name": "SMP NEGERI 17 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0068",
        "npsn": "20603558",
        "name": "SMP PAMULANG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0069",
        "npsn": "20603639",
        "name": "SMP ARRAISIYAH PAMULANG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0070",
        "npsn": "20603628",
        "name": "SMP DJOJOREDJO"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0071",
        "npsn": "20603522",
        "name": "SMP ISLAM RAUDLATUL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0072",
        "npsn": "20616017",
        "name": "SMP TERPADU TAMADUN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0073",
        "npsn": "20614515",
        "name": "SMP MUHAMMADIYAH PARAKAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0074",
        "npsn": "20613802",
        "name": "SMP KHARISMA BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0075",
        "npsn": "20603595",
        "name": "SMP AL BADAR"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0076",
        "npsn": "20603594",
        "name": "SMP 1926"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0077",
        "npsn": "20603638",
        "name": "SMP KATOLIK ANUGERAH ABADI"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0078",
        "npsn": "20603642",
        "name": "SMP BAKTI PRIMA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0079",
        "npsn": "20603570",
        "name": "SMP MATER DEI"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0080",
        "npsn": "20603577",
        "name": "SMP MUHAMMADIYAH 22 PAMULANG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0081",
        "npsn": "20603578",
        "name": "SMP MUHAMMADIYAH 44"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0082",
        "npsn": "20603218",
        "name": "SMP SERUNI PUTIH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0083",
        "npsn": "20603219",
        "name": "SMP WASKITO 4 PAMULANG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0084",
        "npsn": "20613467",
        "name": "SMP PELITA BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0085",
        "npsn": "20613845",
        "name": "SMP KRISTEN ORA ET LABORA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0086",
        "npsn": "20613620",
        "name": "SMP TARUNA MANDIRI"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0087",
        "npsn": "20614346",
        "name": "SMP AL ZAHRA INDONESIA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0088",
        "npsn": "20603129",
        "name": "SMP NEGERI 1 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0089",
        "npsn": "20603129",
        "name": "SMP NEGERI TERBUKA 1 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0090",
        "npsn": "20613591",
        "name": "SMP NEGERI 7 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0091",
        "npsn": "20613517",
        "name": "SMP NEGERI 8 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0092",
        "npsn": "20603194",
        "name": "SMP PGRI SERPONG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0093",
        "npsn": "20603236",
        "name": "SMP STELLA MARIS"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0094",
        "npsn": "20603530",
        "name": "SMP KRISTEN ORA ET LABORA SERPONG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0095",
        "npsn": "20613808",
        "name": "SMP SAINT JOHN'S"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0096",
        "npsn": "20603217",
        "name": "SMP SANTA URSULA BSD"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0097",
        "npsn": "20613926",
        "name": "SMP MUTIARA CENDEKIA SERPONG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0098",
        "npsn": "20603598",
        "name": "SMP AL AMANAH SERPONG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0099",
        "npsn": "20603580",
        "name": "SMP MUHAMMADIYAH SERPONG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0100",
        "npsn": "20614065",
        "name": "SMP IT JIHADUL MUKHLISHIN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0101",
        "npsn": "20614493",
        "name": "SMP ANDERSON SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0102",
        "npsn": "20613557",
        "name": "SMP IT INSAN HARAPAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0103",
        "npsn": "20603226",
        "name": "SMP YAPIPA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0104",
        "npsn": "",
        "name": "SMP BINA ISLAH (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0105",
        "npsn": "20613943",
        "name": "SMP INTEGRAL AL FIRDAUS"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0107",
        "npsn": "20603176",
        "name": "SMP NEGERI 11 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0108",
        "npsn": "20603179",
        "name": "SMP NEGERI 15 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0109",
        "npsn": "20613609",
        "name": "SMP NEGERI 16 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0110",
        "npsn": "20603190",
        "name": "SMP PGRI PAKULONAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0111",
        "npsn": "20603584",
        "name": "SMP ERA INFORMATIKA SERPONG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0112",
        "npsn": "20613927",
        "name": "SMP SANTA LAURENSIA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0113",
        "npsn": "20613817",
        "name": "SMP EFATA SERPONG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0114",
        "npsn": "20613514",
        "name": "SMP INOVASI"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0115",
        "npsn": "20603521",
        "name": "SMP FALATEHAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0116",
        "npsn": "20614934",
        "name": "SMP AL HASANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0117",
        "npsn": "20614575",
        "name": "SMP ATHALIA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0118",
        "npsn": "20614994",
        "name": "SMP AL KHAIRIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0121",
        "npsn": "20613596",
        "name": "SMP CANDLE TREE"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0122",
        "npsn": "20603228",
        "name": "SMP YASPITA SERPONG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0123",
        "npsn": "20603546",
        "name": "SMP ISLAM CIKAL HARAPAN BSD"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0124",
        "npsn": "20613832",
        "name": "SMP PLUS BLM"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0125",
        "npsn": "20603542",
        "name": "SMP AL AZHAR BSD"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0126",
        "npsn": "20613765",
        "name": "SMP STRADA BHAKTI NUSA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0127",
        "npsn": "20614919",
        "name": "SMP BINA NUSANTARA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0128",
        "npsn": "20613963",
        "name": "SMP AL-FATH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0129",
        "npsn": "20615006",
        "name": "SMP ISLAM MADINATUL 'ILMI"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0130",
        "npsn": "20614833",
        "name": "SMP ADZKIA ISLAMIC SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0131",
        "npsn": "20623249",
        "name": "SMP ANNUR"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0132",
        "npsn": "20614199",
        "name": "SMP ISLAM INSAN MULIA SERPONG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0133",
        "npsn": "20615985",
        "name": "SMP SINARMAS WORLD ACADEMY"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0134",
        "npsn": "20615059",
        "name": "SMP TUNAS INDONESIA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0135",
        "npsn": "20615060",
        "name": "SMP PUSTEK SERPONG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0136",
        "npsn": "20616298",
        "name": "SMP BUDI MULIA DUA BINTARO"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0137",
        "npsn": "60728984",
        "name": "SMP AMELIA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0138",
        "npsn": "20615910",
        "name": "SMP MENARA HARAPAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0140",
        "npsn": "20623141",
        "name": "SMP JAYA PLUS MONTESSORI"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0141",
        "npsn": "30409932",
        "name": "SMP SINAR CENDEKIA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0142",
        "npsn": "20623239",
        "name": "SMP INSAN RABBANY"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0267",
        "npsn": "20623031",
        "name": "MTS NEGERI 1 KOTA TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0268",
        "npsn": "20623034",
        "name": "MTS DAARUL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0269",
        "npsn": "20623024",
        "name": "MTS ISLAMIYAH CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0270",
        "npsn": "20623027",
        "name": "MTS MIFTAHUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0271",
        "npsn": "20623019",
        "name": "MTS BAITIS SALMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0272",
        "npsn": "20623045",
        "name": "MTS JAMIYYAH ISLAMIYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0273",
        "npsn": "20623048",
        "name": "MTS AL SAADAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0274",
        "npsn": "20623023",
        "name": "MTS SOEBONO MANTOFANI"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0275",
        "npsn": "20623037",
        "name": "MTS AL MURSYIDIYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0276",
        "npsn": "20623033",
        "name": "MTS SAADATUL MAHABBAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0277",
        "npsn": "20623025",
        "name": "MTS MUHAMMADIYAH 1 CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0278",
        "npsn": "20623029",
        "name": "MTS JAMIYYATUL KHAIR"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0279",
        "npsn": "20623028",
        "name": "MTS YASPINA CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0280",
        "npsn": "20623026",
        "name": "MTS AL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0281",
        "npsn": "20623030",
        "name": "MTS SUNANUL HUSNA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0282",
        "npsn": "20623041",
        "name": "MTS NURUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0283",
        "npsn": "20623046",
        "name": "MTS AL IKHWANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0284",
        "npsn": "20623049",
        "name": "MTS DARUSSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0285",
        "npsn": "20623043",
        "name": "MTS AL AMANAH AL GONTORY"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0286",
        "npsn": "69726759",
        "name": "MTS UMMUL QURA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0287",
        "npsn": "20623020",
        "name": "MTS AL KAUTSAR"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0288",
        "npsn": "20623044",
        "name": "MTS NURUL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0289",
        "npsn": "20623047",
        "name": "MTS UNWAANUNNAJAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0290",
        "npsn": "20623021",
        "name": "MTS AT THOYYIBIN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0291",
        "npsn": "20623022",
        "name": "MTS MADINATUNNAJAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0292",
        "npsn": "20623042",
        "name": "MTS AL MUKRIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0293",
        "npsn": "20623035",
        "name": "MTS KHAZANAH KEBAJIKAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0294",
        "npsn": "20623032",
        "name": "MTS AL IHSAN PAMULANG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0295",
        "npsn": "20623062",
        "name": "MTS NURUL FALAH PONDOK RANJI"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0296",
        "npsn": "20623040",
        "name": "MTS ISHLAHUDDINIYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0297",
        "npsn": "20623038",
        "name": "MTS YASISKA KEDAUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0298",
        "npsn": "20623056",
        "name": "MTS PEMBANGUNAN NURUL ISLAM"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0299",
        "npsn": "20623055",
        "name": "MTS AN NASHIHIN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0300",
        "npsn": "20623057",
        "name": "MTS MANBAUL ULUM ASSHSIDDIQIYAH III"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0301",
        "npsn": "20623053",
        "name": "MTS SERPONG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0302",
        "npsn": "20623054",
        "name": "MTS AR RAHMANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0303",
        "npsn": "20623051",
        "name": "MTS NUR AS SHOLIHAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0304",
        "npsn": "20623050",
        "name": "MTS NURUL FALAH CIATER"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0305",
        "npsn": "20623052",
        "name": "MTS NURUL FALAH LENGKONG GUDANG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0306",
        "npsn": "20603543",
        "name": "SMP ISLAM AL-FALAAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0307",
        "npsn": "20615061",
        "name": "SMP TARUNA BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0308",
        "npsn": "20603581",
        "name": "SMP MUSLIM ASIA AFRIKA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0309",
        "npsn": "20614591",
        "name": "SMP SABILUNA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0310",
        "npsn": "20615062",
        "name": "SMP ISLAM AT TAQWA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0311",
        "npsn": "20615058",
        "name": "SMP AL HASANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0312",
        "npsn": "20616367",
        "name": "SMP ISLAM AS SA'ADAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0313",
        "npsn": "20616428",
        "name": "SMP BINTEK"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0314",
        "npsn": "20615020",
        "name": "SMP KRISTEN SOLIDEO"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0315",
        "npsn": "20615528",
        "name": "SMP MENTARI INTERCULTURAL SCHOOL BINTARO"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0316",
        "npsn": "20615896",
        "name": "SMP ERENOS"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0317",
        "npsn": "20623039",
        "name": "MTS MIFTAH ASSAADAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0318",
        "npsn": "60730312",
        "name": "MTS NURUL FALAH PONDOK PUCUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0319",
        "npsn": "69768242",
        "name": "SMP ISLAM AMALINA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0320",
        "npsn": "20623243",
        "name": "SMP IT CORDOVA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0321",
        "npsn": "69752355",
        "name": "SMP MUTIARA HARAPAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0322",
        "npsn": "69912339",
        "name": "SMP HIGHSCOPE INDONESIA BINTARO"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0323",
        "npsn": "20623248",
        "name": "SMP HARAPAN BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0324",
        "npsn": "30409933",
        "name": "SMP ISLAM AL AZHAR 25 PAMULANG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0325",
        "npsn": "69764530",
        "name": "SMP IT CAHAYA ISLAM"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0326",
        "npsn": "20616505",
        "name": "SMP SOPHOS INDONESIA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0327",
        "npsn": "69888407",
        "name": "SMP DEUTSCHE SCHULE JAKARTA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0328",
        "npsn": "69774776",
        "name": "SMP ISLAM TERPADU AULADY"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0329",
        "npsn": "69754031",
        "name": "SMP INSAN CENDEKIA MADANI"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0330",
        "npsn": "69806454",
        "name": "SMP EHIPASSIKO SCHOOL BSD"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0331",
        "npsn": "69726356",
        "name": "MTS MATHLAUL ANWAR"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0332",
        "npsn": "69775669",
        "name": "SMP BAHRUL MAGHFIROH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0333",
        "npsn": "69733776",
        "name": "SMP TARA SALVIA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0334",
        "npsn": "60726804",
        "name": "SMP NEGERI 18 KOTA TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0335",
        "npsn": "69760701",
        "name": "SMP ISLAM AL MUJAHIDIN PAMULANG"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0336",
        "npsn": "69761906",
        "name": "SMP AL-MADINAH ISLAMIC CENTER KKMB"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0337",
        "npsn": "60725776",
        "name": "SMP NEGERI 19 KOTA TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0338",
        "npsn": "69734371",
        "name": "SMP NEGERI 20 KOTA TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0339",
        "npsn": "69726357",
        "name": "MTS AL ADZKAR"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0341",
        "npsn": "69921932",
        "name": "SMP AL-FATH BSD"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0342",
        "npsn": "69820650",
        "name": "SMP NEGERI 21 TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0343",
        "npsn": "69893608",
        "name": "SMP TECHNOSA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0344",
        "npsn": "69774937",
        "name": "SMP LAB SCHOOL MADINAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0345",
        "npsn": "69859768",
        "name": "SMP ISLAM PLUS DAARUS SALAAM PONDOK AREN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0346",
        "npsn": "69892435",
        "name": "SMP AL BARKAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0347",
        "npsn": "69806441",
        "name": "SMP ISLAM TERPADU INSAN MADANI 8"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0348",
        "npsn": "69877829",
        "name": "SMP JAKARTA MULTICULTURAL SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0349",
        "npsn": "69774774",
        "name": "SMP ISLAM AL-KAUTSAR"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0350",
        "npsn": "69911048",
        "name": "SMP BAKTI NUSANTARA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0351",
        "npsn": "69896631",
        "name": "SMP BRITISH SCHOOL JAKARTA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0352",
        "npsn": "69893743",
        "name": "SMP JAGAT ARSY"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "07",
        "kode_sek": "0353",
        "npsn": "69941517",
        "name": "MTS RAHMANIA ISLAMIC SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0354",
        "npsn": "69900266",
        "name": "SMP GLOBAL ISLAMIC SCHOOL 2"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0355",
        "npsn": "69953986",
        "name": "SMP CITA MULIA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "03",
        "kode_sek": "0356",
        "npsn": "69900336",
        "name": "SMP INFORMATIKA CIPUTAT"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0357",
        "npsn": "69952451",
        "name": "SMP AL HAUDH ISLAMIC SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0358",
        "npsn": "69957228",
        "name": "SMP BINA INSAN NUSANTARA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0359",
        "npsn": "69960043",
        "name": "SMP ISLAM FARADISA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0360",
        "npsn": "69958474",
        "name": "SMP MUMTAZA ISLAMIC SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0361",
        "npsn": "69956999",
        "name": "SMP OLAHRAGA PEMBANGUNAN JAYA RAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "04",
        "kode_sek": "0362",
        "npsn": "69953477",
        "name": "SMP ISLAM TERPADU ASH SHIDDIQIYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0363",
        "npsn": "69954687",
        "name": "SMP ISLAM TERPADU AL-IZZAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0364",
        "npsn": "69980939",
        "name": "SMP CIKAL"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0365",
        "npsn": "69957469",
        "name": "SMP ABDI SISWA BINTARO"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "0366",
        "npsn": "69952219",
        "name": "SMP IPTEK TANGSEL"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "06",
        "kode_sek": "0367",
        "npsn": "69953397",
        "name": "SMP NEGERI 22 KOTA TANGERANG SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "0368",
        "npsn": "69980374",
        "name": "SMP ISLAM BAHRUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "01",
        "kode_sek": "0369",
        "npsn": "69972088",
        "name": "SMP SEKOLAH ALAM BINTARO"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "1001",
        "npsn": "69981896",
        "name": "SMPIT AL-LAUZAH"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "1002",
        "npsn": "69976770",
        "name": "SMP MILLENNIA WORLD SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "1003",
        "npsn": "69977989",
        "name": "MTS AL HANIF"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "05",
        "kode_sek": "1004",
        "npsn": "69984570",
        "name": "SMP FRANCIS SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3674",
        "kode_prov": "30",
        "kode_rayon": "04",
        "kode_sr": "02",
        "kode_sek": "1005",
        "npsn": "69985320",
        "name": "SMP BETHESDA INDONESIA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0001",
        "npsn": "20607513",
        "name": "SMP NEGERI 1 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0002",
        "npsn": "20606759",
        "name": "SMP NEGERI 2 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0003",
        "npsn": "20606754",
        "name": "SMP NEGERI 5 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0004",
        "npsn": "20606752",
        "name": "SMP NEGERI 7 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0005",
        "npsn": "20606752",
        "name": "SMP NEGERI TERBUKA 7 TANGERANG (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0006",
        "npsn": "20606748",
        "name": "SMP NEGERI 15 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0007",
        "npsn": "20606750",
        "name": "SMP NEGERI 17 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0008",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 17 TANGERANG (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0009",
        "npsn": "20606886",
        "name": "SMP AL BARKAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0010",
        "npsn": "20606870",
        "name": "SMP AL HUSNA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0011",
        "npsn": "20606869",
        "name": "SMP AL IJTIHAD 1 KOTA TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0012",
        "npsn": "20606868",
        "name": "SMP AL - MUHAJIRIN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0013",
        "npsn": "20606863",
        "name": "SMP AR RAHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0014",
        "npsn": "20606871",
        "name": "SMP AY - YUSUFIAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0015",
        "npsn": "20606872",
        "name": "SMP BABUSSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0016",
        "npsn": "20606879",
        "name": "SMP BKKK  TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0017",
        "npsn": "20606802",
        "name": "SMP DHARMA PUTRA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0018",
        "npsn": "20606719",
        "name": "SMP DHARMA WIDYA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0019",
        "npsn": "20606717",
        "name": "SMP EFATA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0020",
        "npsn": "20606722",
        "name": "SMP AL AYANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0021",
        "npsn": "20606723",
        "name": "SMP ISTIMEWA TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0022",
        "npsn": "20606687",
        "name": "SMP KRISTEN KANAAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0023",
        "npsn": "20606767",
        "name": "SMP PGRI BATU CEPER"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0024",
        "npsn": "20606765",
        "name": "SMP PGRI SELAPAJANG JAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0025",
        "npsn": "20606797",
        "name": "SMP SANTA PATRICIA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0026",
        "npsn": "20606796",
        "name": "SMP SETIA BHAKTI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0027",
        "npsn": "20606795",
        "name": "SMP STRADA SANTA MARIA 1"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0028",
        "npsn": "20606794",
        "name": "SMP STRADA SANTA MARIA 2"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0029",
        "npsn": "20606792",
        "name": "SMP SYEKH YUSUF"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0030",
        "npsn": "20606757",
        "name": "SMP NEGERI 21 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0031",
        "npsn": "20606708",
        "name": "SMP ISLAM TERPADU BIRRUL WALIDAIN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0032",
        "npsn": "20606714",
        "name": "SMP GARUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0033",
        "npsn": "20606862",
        "name": "SMP ARIYA METTA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0034",
        "npsn": "20606733",
        "name": "SMP ISLAM AL - HASYIMIYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0035",
        "npsn": "",
        "name": "SMP BINA BANGSA TANGERANG (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0036",
        "npsn": "20606755",
        "name": "SMP NEGERI 4 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0037",
        "npsn": "20606738",
        "name": "SMP NEGERI 13 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0038",
        "npsn": "20606737",
        "name": "SMP NEGERI 14 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0039",
        "npsn": "20606749",
        "name": "SMP NEGERI 16 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0040",
        "npsn": "20606741",
        "name": "SMP NEGERI 10 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0041",
        "npsn": "20606761",
        "name": "SMP NEGERI 18 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0042",
        "npsn": "20606867",
        "name": "SMP AL MUSTOFA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0043",
        "npsn": "20606732",
        "name": "SMP ISLAM AL WASATIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0044",
        "npsn": "20606880",
        "name": "SMP BINA INSANI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0045",
        "npsn": "20606712",
        "name": "SMP HARAPAN BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0046",
        "npsn": "20606692",
        "name": "SMP MARKUS"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0047",
        "npsn": "20606704",
        "name": "SMP MUHAMMADIYAH 1"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0048",
        "npsn": "20606701",
        "name": "SMP MUHAMMADIYAH 4"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0049",
        "npsn": "20606801",
        "name": "SMP PANCA KARYA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0050",
        "npsn": "20606685",
        "name": "SMP KRISTEN PENABUR"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0051",
        "npsn": "20606773",
        "name": "SMP PGRI 1 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0052",
        "npsn": "20606763",
        "name": "SMP WASKITA MADYA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0053",
        "npsn": "20606747",
        "name": "SMP YASIR"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0054",
        "npsn": "20606746",
        "name": "SMP YP KARYA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0055",
        "npsn": "20606743",
        "name": "SMP YUPPENTEK 2"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0056",
        "npsn": "20606883",
        "name": "SMP BANGUN NUSANTARA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0057",
        "npsn": "20606695",
        "name": "SMP NUSA PLUS"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0058",
        "npsn": "20606860",
        "name": "SMP ASSALAM CIPONDOH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0059",
        "npsn": "20606778",
        "name": "SMP PORIS INDAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0060",
        "npsn": "20606861",
        "name": "SMP AS - SHOLIHIN (TIDAK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0061",
        "npsn": "20606710",
        "name": "SMP PLUS IBADURRAHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0062",
        "npsn": "20606694",
        "name": "SMP MERPATI TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0063",
        "npsn": "20606727",
        "name": "SMP ISLAM TERPADU ASY - SYUKRIYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0064",
        "npsn": "20606728",
        "name": "SMP ISLAM DARUL HASAN TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0065",
        "npsn": "20606709",
        "name": "SMP KORPRI TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0066",
        "npsn": "20606884",
        "name": "SMP ISLAM BAITURROHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0067",
        "npsn": "20606697",
        "name": "SMP NURUL HIKMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0068",
        "npsn": "20606776",
        "name": "SMP PLUS AL - FUAD"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0069",
        "npsn": "20606681",
        "name": "SMP MARIA IMMACULATA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0070",
        "npsn": "20606699",
        "name": "SMP MUTIARA BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0071",
        "npsn": "20607767",
        "name": "SMP DEWI SARTIKA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0072",
        "npsn": "20606753",
        "name": "SMP NEGERI 6 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0073",
        "npsn": "20606751",
        "name": "SMP NEGERI 8 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0074",
        "npsn": "20606751",
        "name": "SMP NEGERI TERBUKA 8 TANGERANG (TIDAK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0075",
        "npsn": "20606736",
        "name": "SMP NEGERI 9 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0076",
        "npsn": "20606739",
        "name": "SMP NEGERI 12 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0077",
        "npsn": "20606760",
        "name": "SMP NEGERI 19 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0078",
        "npsn": "20606729",
        "name": "SMP ISLAM BAIDHAUL AHKAM"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0079",
        "npsn": "20606882",
        "name": "SMP BHAKTI PERTIWI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0080",
        "npsn": "20606876",
        "name": "SMP CITRA KASIH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0081",
        "npsn": "20606875",
        "name": "SMP DAAN MOGOT"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0082",
        "npsn": "20606874",
        "name": "SMP DARUL HIKAM"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0083",
        "npsn": "20606734",
        "name": "SMP DHARMA SISWA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0084",
        "npsn": "20606715",
        "name": "SMP GANDASARI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0085",
        "npsn": "20606720",
        "name": "SMP ISLAM ABAABIYL"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0086",
        "npsn": "20606791",
        "name": "SMP ISLAM TIARA AKSARA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0087",
        "npsn": "20606724",
        "name": "SMP ISLAMIC CENTRE"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0088",
        "npsn": "20606686",
        "name": "SMP KRISTEN MAWAR SARON"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0089",
        "npsn": "20606683",
        "name": "SMP MANDIRI JATI UWUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0090",
        "npsn": "20606700",
        "name": "SMP MUHAMMADIYAH 5"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0091",
        "npsn": "20606680",
        "name": "SMP NUSA PUTRA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0092",
        "npsn": "20606735",
        "name": "SMP NUSANTARA 1 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0093",
        "npsn": "20606769",
        "name": "SMP PGRI  JATIUWUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0094",
        "npsn": "20606768",
        "name": "SMP PGRI 400 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0095",
        "npsn": "20606800",
        "name": "SMP PRIBADI 1"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0096",
        "npsn": "20606799",
        "name": "SMP PUSPITA TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0097",
        "npsn": "20606798",
        "name": "SMP RAUDHAH BARMAWIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0098",
        "npsn": "20606793",
        "name": "SMP STRADA SLAMET RIYADI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0099",
        "npsn": "20606790",
        "name": "SMP TRISULA BHAKTI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0100",
        "npsn": "20606775",
        "name": "SMP PERGURUAN BUDDHI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0101",
        "npsn": "20606718",
        "name": "SMP DIAN HARAPAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0102",
        "npsn": "20606744",
        "name": "SMP YUNIKE ANDREAS (TIDAK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0103",
        "npsn": "20606758",
        "name": "SMP NEGERI 20 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0104",
        "npsn": "20606766",
        "name": "SMP PGRI PERIUK TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0105",
        "npsn": "20606713",
        "name": "SMP GUNUNG JATI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0106",
        "npsn": "20606764",
        "name": "SMP VOCTECH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0107",
        "npsn": "20613873",
        "name": "SMP NEGERI TERBUKA 12 TANGERANG (TIDAK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0109",
        "npsn": "20606756",
        "name": "SMP NEGERI 3 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0110",
        "npsn": "",
        "name": "SMP NEGERI TERBUKA 3 TANGERANG (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0111",
        "npsn": "20606740",
        "name": "SMP NEGERI 11 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0112",
        "npsn": "20606779",
        "name": "SMP MITRA BINTARO"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0113",
        "npsn": "20606684",
        "name": "SMP MAKARYA LARANGAN SELATAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0114",
        "npsn": "20606774",
        "name": "SMP PGRI 1 KARANG TENGAH CILEDUG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0115",
        "npsn": "20606772",
        "name": "SMP PGRI 2 CILEDUG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0116",
        "npsn": "20606770",
        "name": "SMP PGRI 3 LARANGAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0117",
        "npsn": "20606771",
        "name": "SMP PGRI 2 PINANG TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0118",
        "npsn": "20606707",
        "name": "SMP JAMIYATU ASSYAFIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0119",
        "npsn": "20606762",
        "name": "SMP YADIKA 3"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0120",
        "npsn": "20606745",
        "name": "SMP YPPUI CILEDUG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0121",
        "npsn": "20606742",
        "name": "SMP YUPPENTEK 3 CILEDUG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0122",
        "npsn": "20606703",
        "name": "SMP MUHAMMADIYAH 2 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0123",
        "npsn": "20606702",
        "name": "SMP MUHAMMADIYAH 3 CILEDUG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0124",
        "npsn": "20606705",
        "name": "SMP MOJOPAHIT"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0125",
        "npsn": "20606693",
        "name": "SMP MAZRO'ATUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0126",
        "npsn": "20606682",
        "name": "SMP MANGGALA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0127",
        "npsn": "20606688",
        "name": "SMP KOSGORO CILEDUG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0128",
        "npsn": "20606689",
        "name": "SMP KI HAJAR DEWANTORO"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0129",
        "npsn": "20606706",
        "name": "SMP ISLAM KAFAH UNGGUL"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0130",
        "npsn": "20606691",
        "name": "SMP KARYA AGUNG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0131",
        "npsn": "20606716",
        "name": "SMP FATAHILLAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0132",
        "npsn": "20606859",
        "name": "SMP DHARMA BHAKTI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0133",
        "npsn": "20606877",
        "name": "SMP BUDI MULIA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0134",
        "npsn": "20606878",
        "name": "SMP BUDI LUHUR"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0135",
        "npsn": "20606730",
        "name": "SMP ISLAM ASYSYAKIRIN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0136",
        "npsn": "",
        "name": "SMP AMP KREO CILEDUG (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0137",
        "npsn": "20606885",
        "name": "SMP ISLAM AL - HASANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0138",
        "npsn": "20606690",
        "name": "SMP KATOLIK SANG TIMUR"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0139",
        "npsn": "69876116",
        "name": "SMP ISLAM NUR INSAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0140",
        "npsn": "20606864",
        "name": "SMP AN NURMANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0141",
        "npsn": "20606711",
        "name": "SMP HARAPAN JAYA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0142",
        "npsn": "20606725",
        "name": "SMP ISLAM YAPPIDA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0143",
        "npsn": "20606881",
        "name": "SMP BINA INSAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0144",
        "npsn": "20606731",
        "name": "SMP ISLAM AR - RAHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0145",
        "npsn": "20606721",
        "name": "SMP ISLAM AL - ASHAR (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0146",
        "npsn": "20606696",
        "name": "SMP NURUL IMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0147",
        "npsn": "20607509",
        "name": "SMP ISLAM AL - ISTIQOMAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0148",
        "npsn": "20622979",
        "name": "MTS NEGERI 1 KOTA TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0149",
        "npsn": "69883359",
        "name": "MTS NURUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0150",
        "npsn": "69883358",
        "name": "MTS MATHLAUL ANWAR"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0151",
        "npsn": "20622980",
        "name": "MTS AL HUSNA TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0152",
        "npsn": "69886437",
        "name": "MTS AT TASYRI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0153",
        "npsn": "69886438",
        "name": "MTS AS SALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0154",
        "npsn": "69887075",
        "name": "MTS DARUL AMAL"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0155",
        "npsn": "69757137",
        "name": "MTS DAARUL IRFAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0156",
        "npsn": "20622969",
        "name": "MTS DARUL HIKMAH KARAWACI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0157",
        "npsn": "20622970",
        "name": "MTS MIFTAHUSSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0158",
        "npsn": "20622966",
        "name": "MTS AL ISHLAHAT"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0159",
        "npsn": "69895745",
        "name": "MTS AL HIDAYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0160",
        "npsn": "69883360",
        "name": "MTS AL HUSNA GEMBOR"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0161",
        "npsn": "69881701",
        "name": "MTS BUARAN TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0162",
        "npsn": "69886441",
        "name": "MTS YAPMI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0163",
        "npsn": "20622967",
        "name": "MTS DAARUSSAADAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0164",
        "npsn": "69752239",
        "name": "MTS AL KAMIL"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0165",
        "npsn": "20622955",
        "name": "MTS NEGERI 2 KOTA TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0166",
        "npsn": "20622952",
        "name": "MTS AL ISLAMIYAH CILEDUG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0167",
        "npsn": "20622973",
        "name": "MTS MANBA'UL KHAIR"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0168",
        "npsn": "20622977",
        "name": "MTS AL MANSHURIYAH CIPETE"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0169",
        "npsn": "20622957",
        "name": "MTS DAARUL HIKMAH CIPONDOH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0170",
        "npsn": "20622958",
        "name": "MTS AT TAHIYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0171",
        "npsn": "69886435",
        "name": "MTS DAARUS SAADAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0172",
        "npsn": "20622959",
        "name": "MTS AL MANSHURIYAH PORIS PLAWAD INDAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0173",
        "npsn": "20622976",
        "name": "MTS DAARUL MUQORROBIN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0174",
        "npsn": "20622963",
        "name": "MTS TALIM AL MUBTADI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0175",
        "npsn": "20622953",
        "name": "MTS NURUL YAQIIN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0176",
        "npsn": "20622978",
        "name": "MTS AL MUBAROK"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0177",
        "npsn": "20622975",
        "name": "MTS NURUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0178",
        "npsn": "20622962",
        "name": "MTS DARUL MAARIF"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0179",
        "npsn": "69883357",
        "name": "MTS MIFTAHUSSAADAH CIPONDOH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0180",
        "npsn": "69752238",
        "name": "MTS ASY SYUKRIYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0181",
        "npsn": "20622964",
        "name": "MTS AL FITROH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0182",
        "npsn": "20622972",
        "name": "MTS AL MAMUR"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0183",
        "npsn": "20622971",
        "name": "MTS AL MUNAWWAROH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0184",
        "npsn": "69728645",
        "name": "MTS DARUL FALAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0185",
        "npsn": "69883361",
        "name": "MTS MIFTAHUSSALAM TANAH TINGGI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0186",
        "npsn": "20622968",
        "name": "MTS DARUL KHOSYIIN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "07",
        "kode_sek": "0187",
        "npsn": "20622951",
        "name": "MTS NEGERI 3 KOTA TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "07",
        "kode_sek": "0188",
        "npsn": "20606967",
        "name": "MTS ATTAQWA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "07",
        "kode_sek": "0189",
        "npsn": "69886439",
        "name": "MTS DARUL ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "07",
        "kode_sek": "0190",
        "npsn": "20622949",
        "name": "MTS AL MUIN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "07",
        "kode_sek": "0191",
        "npsn": "69728643",
        "name": "MTS NURUL KHAIRAT"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "07",
        "kode_sek": "0192",
        "npsn": "20622974",
        "name": "MTS AR RAHMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "07",
        "kode_sek": "0193",
        "npsn": "20622950",
        "name": "MTS MANBAUL ULUM ASSHIDDIQIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0194",
        "npsn": "20606726",
        "name": "SMP ISLAM YAPMI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0195",
        "npsn": "20606866",
        "name": "SMP AMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0196",
        "npsn": "20607768",
        "name": "SMP FELLYCIA TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0197",
        "npsn": "20607782",
        "name": "SMP ISLAM MIFTAHUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0198",
        "npsn": "20607508",
        "name": "SMP AL - IKHLAS CIPADU TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0199",
        "npsn": "20614523",
        "name": "SMP DAARUL QUR'AN INTERNASIONAL"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0200",
        "npsn": "20607917",
        "name": "SMP ISLAM TERPADU 'IZZUDDIN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "07",
        "kode_sek": "0201",
        "npsn": "69728642",
        "name": "MTS DARUSSALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0202",
        "npsn": "20622960",
        "name": "MTS JABAL NUR"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0203",
        "npsn": "20607915",
        "name": "SMP AR-ROHMAN PLUS"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0204",
        "npsn": "20613486",
        "name": "SMP MAHBUBY (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0205",
        "npsn": "20607783",
        "name": "SMP MANBAUL 'ULUM"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0206",
        "npsn": "20607766",
        "name": "SMP BONAVITA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0207",
        "npsn": "20607507",
        "name": "SMP AL FITROH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0208",
        "npsn": "20607769",
        "name": "SMP GEMILANG MODERNLAND"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0209",
        "npsn": "20613923",
        "name": "SMP PLUS AL MAHBUBIAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0210",
        "npsn": "20607918",
        "name": "SMP JAYA MANGGALA SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0211",
        "npsn": "20607919",
        "name": "SMP NEGERI 22 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0212",
        "npsn": "20613695",
        "name": "SMP YUPPENTEK 4"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0213",
        "npsn": "20614140",
        "name": "SMP PUTRA BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0214",
        "npsn": "20614748",
        "name": "SMP TERPADU PP DAARUL AMANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0215",
        "npsn": "20614402",
        "name": "SMP TUNAS CENDEKIA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0216",
        "npsn": "20614580",
        "name": "SMP ISLAM UMMUL RODHIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0217",
        "npsn": "20607920",
        "name": "SMP NEGERI 23 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0218",
        "npsn": "20607921",
        "name": "SMP NEGERI 24 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0219",
        "npsn": "20613694",
        "name": "SMP CITRA BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0221",
        "npsn": "20613696",
        "name": "SMP ISLAM AZ ZAMIR"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0222",
        "npsn": "20622961",
        "name": "MTS JAMIATUS SHOLIHIN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0223",
        "npsn": "69886436",
        "name": "MTS HIDAYATUL MUBTADIAT"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0224",
        "npsn": "20606922",
        "name": "MTS KHAIRUL FALAH (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0225",
        "npsn": "69734222",
        "name": "MTS TERPADU AL ISTIQOMAH (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0226",
        "npsn": "20614404",
        "name": "SMP PRINCE'S"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0227",
        "npsn": "",
        "name": "SMP AL ISTIQOMAH (TDK IKUT UN)"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0228",
        "npsn": "20614408",
        "name": "SMP MUTIARA BANGSA 2"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0229",
        "npsn": "20616155",
        "name": "SMP BENDA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0230",
        "npsn": "20616294",
        "name": "SMP CENDEKIA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0231",
        "npsn": "20614358",
        "name": "SMP ISLAM TERPADU ASSA'ADAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0232",
        "npsn": "20614546",
        "name": "SMP ISLAM TERPADU SMARTVILLA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0233",
        "npsn": "20622965",
        "name": "MTS AL MAGHFIROH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0234",
        "npsn": "20615096",
        "name": "SMP ISLAM TERPADU AN NUQTHAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0235",
        "npsn": "20614411",
        "name": "SMP IT INDRA BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0236",
        "npsn": "20615867",
        "name": "SMP AT THAHIRIN 2"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0237",
        "npsn": "20623147",
        "name": "SMP ANAK TERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0238",
        "npsn": "20622954",
        "name": "MTS AMANATUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0239",
        "npsn": "20623148",
        "name": "SMP ISLAM TERPADU GRANADA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0240",
        "npsn": "69787352",
        "name": "SMP KRISTEN GRACIA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0241",
        "npsn": "69773567",
        "name": "SMP MAWAR SARON TAMAN ROYAL"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0242",
        "npsn": "69786267",
        "name": "SMP KUMNAMU"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0243",
        "npsn": "69799887",
        "name": "SMP PENERUS BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0244",
        "npsn": "69883362",
        "name": "MTS AL KARMANIYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0245",
        "npsn": "69752240",
        "name": "MTS NURUL IMAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0246",
        "npsn": "69822404",
        "name": "SMP ISLAM AL MABRUROH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0247",
        "npsn": "20623149",
        "name": "SMP EXCELLENT 1"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0248",
        "npsn": "69761730",
        "name": "SMP AN NISINIYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "0249",
        "npsn": "69892278",
        "name": "SMP HARAPAN BANGSA PERIUK"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "05",
        "kode_sek": "0250",
        "npsn": "69895230",
        "name": "MTS AL-BAROKAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "07",
        "kode_sek": "0251",
        "npsn": "69886440",
        "name": "MTS AL IRFAN NUSANTARA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0252",
        "npsn": "69895229",
        "name": "MTS KHOIRUL HUDA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0253",
        "npsn": "69787003",
        "name": "SMP IT TUNAS HARAPAN ILAHI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0254",
        "npsn": "69895710",
        "name": "SMP PILAR BANGSA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0255",
        "npsn": "69947040",
        "name": "SMP DHUHAA ISLAMIC SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0256",
        "npsn": "69956001",
        "name": "MTS CORDOVA"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0257",
        "npsn": "69921995",
        "name": "SMP TUNAS METROPOLITAN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0258",
        "npsn": "69936259",
        "name": "SMP IT PERMATA HATI INSANI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0259",
        "npsn": "69956709",
        "name": "SMP AL-BAYYINAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "0260",
        "npsn": "69900923",
        "name": "SMP BENTENG BETAWI"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0261",
        "npsn": "69968836",
        "name": "SMP DARUS SALAM"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0262",
        "npsn": "69956336",
        "name": "SMP NATIONAL GLOBAL SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0263",
        "npsn": "69929412",
        "name": "SMP ISLAM PLUS AL MADINAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "0264",
        "npsn": "69969004",
        "name": "SMP AMORE PRIME SCHOOL"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "0265",
        "npsn": "69970756",
        "name": "SMP IT ISLAMICITY"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "35",
        "kode_sek": "0266",
        "npsn": "69977978",
        "name": "MTS AL-AZHAAR UMMU SUWANAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "35",
        "kode_sek": "0267",
        "npsn": "69977977",
        "name": "MTS ARYADILLAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "0268",
        "npsn": "69984924",
        "name": "MTS AZIZIYYAH"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "06",
        "kode_sek": "1001",
        "npsn": "69984929",
        "name": "MTS IHYA ULUMIDDIN"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "1002",
        "npsn": "69967748",
        "name": "SMP NEGERI 25 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "1003",
        "npsn": "69967749",
        "name": "SMP NEGERI 26 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "1004",
        "npsn": "69967750",
        "name": "SMP NEGERI 27 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "04",
        "kode_sek": "1005",
        "npsn": "69967751",
        "name": "SMP NEGERI 28 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "1006",
        "npsn": "69967752",
        "name": "SMP NEGERI 29 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "01",
        "kode_sek": "1007",
        "npsn": "69967754",
        "name": "SMP NEGERI 30 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "03",
        "kode_sek": "1008",
        "npsn": "69967755",
        "name": "SMP NEGERI 31 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "02",
        "kode_sek": "1009",
        "npsn": "69967756",
        "name": "SMP NEGERI 32 TANGERANG"
      },
      {
        "province_id": "36",
        "regency_id": "3671",
        "kode_prov": "30",
        "kode_rayon": "02",
        "kode_sr": "15",
        "kode_sek": "1010",
        "npsn": "69984926",
        "name": "MTS NURUL IMAN AL BARKAH"
      }
    ])
  }
}

module.exports = RefSekolahSeeder
