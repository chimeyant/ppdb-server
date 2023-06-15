"use strict";
const ProfilSekolah = use("App/Models/ProfilSekolah");
const Peserta = use("App/Models/Peserta");
const got = use("got");
const FormData = use("form-data");
const Axios = use("axios");

/**
 * Sample job consumer class
 *
 * @version 2.0.0
 * @adonis-version 4.0+
 */

class SendPengumuman {
  /**
   * Concurrency for processing this job
   * @return {Int} Num of jobs processed at time
   */
  static get concurrency() {
    return 1;
  }

  /**
   * UUID for this job class
   * Make sure consumer and producer are in sync
   * @return {String}
   */
  static get type() {
    return "send-pengumuman";
  }

  /**
   * Inject custom payload into the job class
   * @param  {Object} data
   *
   * DO NOT MODIFY!
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Inject the kue ctx to the consumer, you can use it to
   * pause(), shutdown() or remove() handler actions.
   * See kue's doc for more details
   * @param  {Object} data
   *
   * DO NOT MODIFY!
   */
  setContext(ctx) {
    this.ctx = ctx;
  }

  /**
   * Handle the sending of email data
   * You can drop the async keyword if it is synchronous
   */
  async handle() {
    // Execute your task here...
    const id = this.data["id"];
    const pesan = this.data["pesan"];

    try {
      const profilsekolah = await ProfilSekolah.query().first();

      const peserta = await Peserta.find(id);

      if (profilsekolah.sms) {
        //wa baru
        const msg = {
          apikey: profilsekolah.apikey,
          nomor: peserta.nomor_hp,
          pesan:
            "*INFORMASI PPDB 2022/2023* " +
            profilsekolah.nama +
            " . *" +
            peserta.nomor_register +
            "* Atas Nama " +
            peserta.nama +
            " *" +
            pesan +
            "* " +
            profilsekolah.url +
            "/login" +
            " *TETAP DIRUMAH AJA*",
        };

        await Axios.post("http://api.senderwa.com/api/v2/send-wa", msg);

        await Peserta.query()
          .where("id", peserta.id)
          .update({ status_pesan: true });
      }
    } catch (error) {}
  }
}

module.exports = SendPengumuman;
