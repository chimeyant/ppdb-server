"use strict";

/**
 * Sample job consumer class
 *
 * @version 2.0.0
 * @adonis-version 4.0+
 *
 */
const ProfilSekolah = use("App/Models/ProfilSekolah");
const Peserta = use("App/Models/Peserta");
const got = use("got");
const FormData = use("form-data");
const Wa = use("App/Models/Wa");
const Axios = use("axios");

class SendWa {
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
    return "send-wa";
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
    const profilsekolah = await ProfilSekolah.query().first();

    const wa = await Wa.query()
      .where("status", false)
      .orderBy("id", "asc")
      .first();

    /**
     * Send Wa
     */
    if (wa) {
      if (profilsekolah.sms) {
        try {
          //wa yang baru
          if (wa.jenis_informasi == "informasi-umum") {
            const msg = {
              apikey: profilsekolah.apikey,
              nomor: wa.nomor,
              pesan:
                "*INFORMASI PPDB 2022/2023*  " +
                profilsekolah.nama +
                " . *" +
                wa.nomor_register +
                "* Atas Nama " +
                wa.name +
                " " +
                wa.pesan,
            };

            await Axios.post("http://api.senderwa.com/api/v2/send-wa", msg);

            const was = await Wa.find(wa.id);
            was.status = true;
            await was.save();

            job.on("init", () => Queue.remove(job));
          }

          if (wa.jenis_informasi == "informasi-daftar-ulang") {
            const msg = {
              apikey: profilsekolah.apikey,
              nomor: wa.nomor,
              pesan:
                "*INFORMASI DAFTAR ULANG 2022/2023* " +
                profilsekolah.nama +
                " . *" +
                wa.nomor_register +
                "* Atas Nama " +
                wa.name +
                " " +
                wa.pesan,
            };

            await Axios.post("http://api.senderwa.com/api/v2/send-wa", msg);

            const was = await Wa.find(wa.id);
            was.status = true;
            await was.save();

            job.on("init", () => Queue.remove(job));
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      return 0;
    }
  }
}

module.exports = SendWa;
