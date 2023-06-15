"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProfilSekolahSchema extends Schema {
  up() {
    this.create("profil_sekolahs", (table) => {
      table.increments();
      table.string("npsn");
      table.string("nama");
      table.string("program_keahlian").nullable();
      table.bigInteger("province_id").nullable();
      table.bigInteger("regency_id").nullable();
      table.bigInteger("district_id").nullable();
      table.bigInteger("village_id").nullable();
      table.string("alamat", 255).nullable();
      table.string("telpon").nullable();
      table.string("email").nullable();
      table.string("website").nullable();
      table.string("facebook").nullable();
      table.string("twitter").nullable();
      table.string("instagram").nullable();
      table.string("logo").nullable();
      table.string("kepalasekolah").nullable();
      table.string("nip").nullable();
      table.string("esign").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("profil_sekolahs");
  }
}

module.exports = ProfilSekolahSchema;
