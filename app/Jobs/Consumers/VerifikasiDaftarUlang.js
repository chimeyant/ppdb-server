'use strict';
const ProfilSekolah = use("App/Models/ProfilSekolah")
const got = use('got')
const FormData = use("form-data")


/**
 * Sample job consumer class
 *
 * @version 2.0.0
 * @adonis-version 4.0+
 */

class VerifikasiDaftarUlang {

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
        return 'verifikasi-daftar-ulang';
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
        const nomor_register = this.data['nomor_register']
        const nama = this.data['nama']
        const nomor = this.data['nomor']
        const pesan = this.data['status'];
        /**
         * Send Wa
         */

        const profilsekolah = await ProfilSekolah.query().first();
        if (profilsekolah.sms) {
            let form = new FormData()

            form.append('token', profilsekolah.apikey)
            form.append('phone', nomor);
            form.append("message", '*INFORMASI DAFTAR ULANG* ' + profilsekolah.nama + ' . *' + nomor_register + '* Atas Nama ' + nama + ' *' + pesan + "*")

            const whatsapp = await got('http://ruangwa.id/v2/api/send-message.php', {
                method: 'POST',
                body: form,
            })

        }
    }


}

module.exports = VerifikasiDaftarUlang;
