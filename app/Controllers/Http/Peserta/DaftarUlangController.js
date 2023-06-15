'use strict'
const Peserta = use("App/Models/Peserta")
var dateFormat = require('dateformat')



class DaftarUlangController {
    async confirm({ request, response, auth }) {
        const { daftar_ulang_dokumen, koperasi_status, koperasi_dokumen } = request.all()

        const user = await auth.user;

        const jmlpeserta = await Peserta.query().where('kelulusan_pil_1_status', true).where('id', user.peserta_id).orWhere('kelulusan_pil_2_status', true).where('id', user.peserta_id).getCount();



        if (Number(jmlpeserta) < 1) {
            return response.json({
                status: false,
                message: "Opps..., maaf anda belum di terima di sekolah kami"
            })
        }

        try {
            //update dokumen 
            const date = new Date();
            const currdate = dateFormat(date.getTime(), 'yyyy-mm-dd');
            const peserta = await Peserta.find(user.peserta_id)
            peserta.daftar_ulang_status = true;
            peserta.daftar_ulang_tanggal = currdate
            peserta.daftar_ulang_dokumen = daftar_ulang_dokumen
            peserta.koperasi_status = koperasi_status
            peserta.koperasi_dokumen = koperasi_dokumen
            await peserta.save()

            return response.json({
                status: true,
                message: "Proses upload persayaratan daftar ulang berhasil"
            })

        } catch (error) {
            return response.json({
                status: false,
                message: "Opps..., terjadi kesalahan " + error
            })
        }




    }
}

module.exports = DaftarUlangController
