const ProfilSekolah = use("App/Models/ProfilSekolah");
const Axios = use("axios");

class Whatsapp {
  async sendMessage(recieveNumber, content) {
    try {
      const profilsekolah = await ProfilSekolah.query().first();

      const payload = {
        apiKey: profilsekolah.apikey,
        recieveNumber: recieveNumber,
        message: content,
      };

      //send whatsapp
      let {
        data: { code, success, message },
      } = await Axios.post(
        "https://api.senderwa.com/api/v2/send-message",
        payload
      );

      return {
        code: code,
        success: success,
        message,
      };
    } catch (error) {
      return {
        code: 500,
        success: false,
        message: "Opps...,, terjadi kesalahan",
      };
    }
  }

  async sendBulkMessage(datas) {
    try {
      const profilsekolah = await ProfilSekolah.query().first();

      const payload = {
        apiKey: profilsekolah.apikey,
        datas: datas,
      };

      //send bulk message
      let {
        data: { code, success, message },
      } = await Axios.post(
        "https://api.senderwa.com/api/v2/send-bulk-message",
        payload
      );

      return {
        code: code,
        success: success,
        message: message,
      };
    } catch (error) {
      return {
        code: 500,
        success: false,
        message: "Opps..., terjadi kesalahan",
      };
    }
  }
}

module.exports = new Whatsapp();
