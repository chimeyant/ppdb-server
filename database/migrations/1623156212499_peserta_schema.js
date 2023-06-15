'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PesertaSchema extends Schema {
  up() {
    this.create('pesertas', (table) => {
      table.increments()

      /**
       * Area Pilihan Kompetensi Keahlian
       */
      table.string('jalur_pendaftaran');
      table.string('nomor_register');
      table.date('tanggal_register');
      table.string('nomor_register_provinsi').nullable()
      table.bigInteger('jurusan_id_1').nullable();
      table.bigInteger('jurusan_id_2').nullable();

      /**
       * Area Data Asal Sekolah
       */
      table.string('daerah_asal').defaultTo('DALAM PROVINSI');
      table.bigInteger('ref_sekolah_id').nullable()
      table.string('nama_sekolah_asal').nullable()
      table.string('npsn').nullable()

      /**
       * Area Data Identitas Pribadi
       */
      table.string('nama');
      table.string('jenis_kelamin', 1).defaultTo('P')
      table.string('tempat_lahir').nullable()
      table.date('tanggal_lahir').nullable()
      table.string('agama').nullable();
      table.string('nisn');
      table.integer('tahun_lulus')
      table.string('jenis_lulusan')
      table.string('foto')

      /**
       * Data Kependudukan Peserta
       */
      table.string('nik').nullable()
      table.string('nokk').nullable();
      table.string('dok_kartu_keluarga').nullable();
      table.string('dok_akte_lahir').nullable()
      table.string('dok_domisili').nullable();

      /**
       * Data Alamat Peserta 
       */
      table.bigInteger('province_id').nullable()
      table.bigInteger('regency_id').nullable()
      table.bigInteger('district_id').nullable()
      table.bigInteger('village_id').nullable()
      table.string('rt').nullable()
      table.string('rw').nullable()
      table.string('alamat', 255).nullable()
      table.string('kode_pos').nullable()
      table.string('telpon_rumah').nullable();
      table.string('nomor_hp').nullable()
      table.integer('jarak_kesekolah').defaultTo(0)

      /**
       * Data Orang Tua Peserta
       */
      table.string('nama_ayah').nullable()
      table.string('nama_ibu').nullable()
      table.bigInteger('pekerjaan_id').nullable()

      /**
       * Area Nilai Semester 1
       */
      table.decimal('smt_1_pai', 5, 2).defaultTo(0)
      table.decimal('smt_1_pkn', 5, 2).defaultTo(0)
      table.decimal('smt_1_bindo', 5, 2).defaultTo(0)
      table.decimal('smt_1_bing', 5, 2).defaultTo(0)
      table.decimal('smt_1_mtk', 5, 2).defaultTo(0)
      table.decimal('smt_1_ipa', 5, 2).defaultTo(0)
      table.decimal('smt_1_ips', 5, 2).defaultTo(0)
      table.decimal('smt_1_nr', 5, 2).defaultTo(0)
      table.string('smt_1_dokumen').nullable()

      /**
       * Area Nilai Semester 2
       */
      table.decimal('smt_2_pai', 5, 2).defaultTo(0)
      table.decimal('smt_2_pkn', 5, 2).defaultTo(0)
      table.decimal('smt_2_bindo', 5, 2).defaultTo(0)
      table.decimal('smt_2_bing', 5, 2).defaultTo(0)
      table.decimal('smt_2_mtk', 5, 2).defaultTo(0)
      table.decimal('smt_2_ipa', 5, 2).defaultTo(0)
      table.decimal('smt_2_ips', 5, 2).defaultTo(0)
      table.decimal('smt_2_nr', 5, 2).defaultTo(0)
      table.string('smt_2_dokumen').nullable()

      /**
       * Area Nilai Semester 3
       */
      table.decimal('smt_3_pai', 5, 2).defaultTo(0)
      table.decimal('smt_3_pkn', 5, 2).defaultTo(0)
      table.decimal('smt_3_bindo', 5, 2).defaultTo(0)
      table.decimal('smt_3_bing', 5, 2).defaultTo(0)
      table.decimal('smt_3_mtk', 5, 2).defaultTo(0)
      table.decimal('smt_3_ipa', 5, 2).defaultTo(0)
      table.decimal('smt_3_ips', 5, 2).defaultTo(0)
      table.decimal('smt_3_nr', 5, 2).defaultTo(0)
      table.string('smt_3_dokumen').nullable()

      /**
      * Area Nilai Semester 4
      */
      table.decimal('smt_4_pai', 5, 2).defaultTo(0)
      table.decimal('smt_4_pkn', 5, 2).defaultTo(0)
      table.decimal('smt_4_bindo', 5, 2).defaultTo(0)
      table.decimal('smt_4_bing', 5, 2).defaultTo(0)
      table.decimal('smt_4_mtk', 5, 2).defaultTo(0)
      table.decimal('smt_4_ipa', 5, 2).defaultTo(0)
      table.decimal('smt_4_ips', 5, 2).defaultTo(0)
      table.decimal('smt_4_nr', 5, 2).defaultTo(0)
      table.string('smt_4_dokumen').nullable()

      /**
       * Area Nilai Semester 1
       */
      table.decimal('smt_5_pai', 5, 2).defaultTo(0)
      table.decimal('smt_5_pkn', 5, 2).defaultTo(0)
      table.decimal('smt_5_bindo', 5, 2).defaultTo(0)
      table.decimal('smt_5_bing', 5, 2).defaultTo(0)
      table.decimal('smt_5_mtk', 5, 2).defaultTo(0)
      table.decimal('smt_5_ipa', 5, 2).defaultTo(0)
      table.decimal('smt_5_ips', 5, 2).defaultTo(0)
      table.decimal('smt_5_nr', 5, 2).defaultTo(0)
      table.string('smt_5_dokumen').nullable()

      /**
       * Dokumen SKL
       */
      table.string('dok_skl').nullable()



      /**
       * Area Data Prestasi
       */
      table.boolean('prestasi_status').defaultTo(false);
      table.bigInteger('param_prestasi_id').nullable();
      table.string('prestasi_penyelenggara').nullable();
      table.string('prestasi_nama').nullable()
      table.decimal('prestasi_skor', 5, 2).defaultTo(0)
      table.string('prestasi_dokumen').nullable()

      /**
       * Area Data Afirmasi
       */
      table.boolean('afirmasi_status').defaultTo(0)
      table.string('afirmasi_jenis_bantuan').nullable()
      table.string('afirmasi_nama').nullable()
      table.string('afirmasi_nomor').nullable()
      table.string('afirmasi_dokumen').nullable()

      /**
       * Surat Keterangan Dokter Atau Seterangan Tidak Buta Warna
       */
      table.boolean('butawarna_status').defaultTo(0);
      table.integer('tinggi_badan').defaultTo(0);
      table.string('dok_surat_keterangan_sehat').nullable()
      table.string('dok_surat_keterangan_buta_warna').nullable()
      table.string('dok_skck').nullable();

      /**
       * Areea Status Pernyataan
       */
      table.boolean('pernyataan_status').defaultTo(false)
      table.string('pernyataan_dokumen').nullable()

      /**
       * Area Nilai Rata Rata 5 Semester
       */
      table.decimal('nr_pai', 5, 2).defaultTo(0)
      table.decimal('nr_pkn', 5, 2).defaultTo(0)
      table.decimal('nr_bindo', 5, 2).defaultTo(0)
      table.decimal('nr_bing', 5, 2).defaultTo(0)
      table.decimal('nr_mtk', 5, 2).defaultTo(0)
      table.decimal('nr_ipa', 5, 2).defaultTo(0)
      table.decimal('nr_ips', 5, 2).defaultTo(0)

      /**
       * Total Nilai
       */
      table.decimal('nilai_rapor', 5, 2).defaultTo(0)
      table.decimal('nilai_teori', 5, 2).defaultTo(0)
      table.decimal('nilai_wawancara', 5, 2).defaultTo(0)
      table.string('keterangan_hasil_wawancara').nullable()




      /**
       * Area Order Person
       */
      table.boolean('order_person_status').defaultTo(false)
      table.string('order_person_name').nullable()
      table.date('order_person_date').nullable()

      /**
       * Area Data Verifikasi status dalam 1: Dalam Proses, 2: Berkas Belum Lengkap, 3: Berkas Ditolak 4: Berkasi Diterima,
       */
      table.string('verifikasi_status').nullable();
      table.date('verifikasi_tanggal').nullable()
      table.string('verifikasi_keterangan').nullable()
      table.bigInteger('verifikasi_user_id').nullable()

      /**
       * Area Cabut Berkas 1: Pengajuan , 2 Diproses , 3: Berkas Dicabut
       */
      table.string('cabut_berkas_status').nullable()
      table.date('cabut_berkas_tanggal_pengajuan').nullable()
      table.string('cabut_berkas_alasan').nullable()
      table.date('cabut_berkas_tanggal_pengambilan').nullable()
      table.bigInteger('cabut_berkas_user_id').nullable();

      /**
       * Area Status Ujian
       */
      table.boolean('ujian_status').defaultTo(false);

      /**
       * Area Data Kelulusan Peserta
       */
      table.boolean('kelulusan_pil_1_status').defaultTo(false)
      table.date('kelulusan_pil_1_tanggal').nullable()
      table.bigInteger('kelulusan_pil_1_user_id').nullable()
      table.boolean('kelulusan_pil_2_status').defaultTo(false)
      table.date('kelulusan_pil_2_tanggal').nullable()
      table.bigInteger('kelulusan_pil_2_user_id').nullable()

      /**
       * Area Daftar Ulang
       * 1 : Belum Daftar Ulang
       * 2 : Sudah Daftar Ulang
       * 
       * 1: Berkas Asli Tidak Sesuai
       * 2: Berkas Asli Diterima
       */
      table.string('daftar_ulang_status').nullable()
      table.date('daftar_ulang_tanggal').nullable()
      table.string('daftar_ulang_verifikasi_status').nullable()
      table.bigInteger('daftar_ulang_verifikasi_user_id').nullable();

      table.timestamps()
    })
  }

  down() {
    this.drop('pesertas')
  }
}

module.exports = PesertaSchema
