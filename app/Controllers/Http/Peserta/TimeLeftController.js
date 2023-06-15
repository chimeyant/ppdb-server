'use strict'
const JadwalUjianAbsen = use('App/Models/JadwalUjianAbsen')

class TimeLeftController {
    async getTimeLeft({ request, response, auth }) {
        const { jadwal_ujian_id } = request.all()

        const user = await auth.user

        const jadwalujianabsen = await JadwalUjianAbsen.query().select('time_left').where('jadwal_ujian_id', jadwal_ujian_id).where('peserta_id', user.peserta_id).first()


        return jadwalujianabsen

    }

    async setTimeLeft({ request, response, auth }) {
        const { jadwal_ujian_id, timeleft } = request.all()

        const user = await auth.user

        try {
            //waktu sekarang
            const jadwalujianabsen = await JadwalUjianAbsen.query().select('id', 'time_left').where('jadwal_ujian_id', jadwal_ujian_id).where('peserta_id', user.peserta_id).first()

            let currtimeleft = Number(jadwalujianabsen.time_left) == 0 ? 0 : Number(jadwalujianabsen.time_left) - 1;

            const jua = await JadwalUjianAbsen.find(jadwalujianabsen.id);
            jua.time_left = currtimeleft
            await jua.save();

            return currtimeleft

        } catch (error) {
            return timeleft;
        }
    }


}

module.exports = TimeLeftController
