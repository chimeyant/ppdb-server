"use strict";

const User = use("App/Models/User");
//const Peserta = use("App/Models/Peserta");
const { validate } = use("Validator");
const Mail = use("Mail");
const Env = use("Env");
const ProfilSekolah = use("App/Models/ProfilSekolah");
const Axios = use("axios");

class UserController {
  async index({ request }) {
    const data = await User.query().orderBy("id", "asc").fetch();

    const datas = [];
    for (let i in data.rows) {
      const rows = data.rows[i];
      const row = {};
      row["id"] = rows.id;
      row["num"] = i++ + 1;
      row["username"] = rows.username;
      row["email"] = rows.email;
      row["authent"] = rows.authent;
      row["status"] = rows.status;
      datas.push(row);
    }

    return datas;
  }
  async login({ request, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }

  async loginMobile({ request, response, auth }) {
    const { email, password } = request.all();

    const token = await auth.attempt(email, password);

    console.log(token);

    if (token) {
      return response.json({
        status: true,
        message: "Proses login berhasil",
        token: token,
      });
    } else {
      return response.json({
        status: false,
        message: "User dan password tidak benar",
        token: null,
      });
    }
  }

  async register({ request, response }) {
    const { username, email, password, nik } = request.all();

    const authent = "peserta";

    try {
      //save to table peserta
      const peserta = new Peserta();
      peserta.nama = username;
      peserta.email = email;
      await peserta.save();

      const user = new User();
      user.username = username;
      user.email = email;
      user.password = password;
      user.authent = authent;
      user.peserta_id = peserta.id;
      user.telepon = telepon;
      await user.save();

      const profilsekolah = await ProfilSekolah.query().first();

      await profilsekolah;

      const msg = {
        apikey: profilsekolah.apikey,
        nomor: telepon,
        pesan:
          "Selamat.., Registrasi akun berhasil. Kata Sandi anda adalah " +
          password,
      };

      await Axios.post("http://api.senderwa.com/api/v2/send-wa", msg);

      return response.json({
        status: true,
        message: "Proses Registrasi Berhasil" + profilsekolah.apikey,
      });
    } catch (error) {
      return error;
    }
  }

  async store({ request, response }) {
    const rules = {
      username: "required",
      email: "required|email|unique:users,email",
      authent: "required",
    };

    const message = {
      "username.required": "Pengguna wajib diisi",
      "email.unique": "Email telah terdaftar",
      "email.required": "Email harus diisi",
      "email.email": "Pengisian email tidak benar",
    };

    const validation = await validate(request.all(), rules, message);

    if (validation.fails()) {
      const message = validation.messages();
      response.json({
        status: false,
        message: message[0].message,
      });

      return true;
    }

    const { username, email, authent, jurusan_id, status } = request.all();

    try {
      const user = new User();
      user.username = username;
      user.email = email;
      user.password = "123456789";
      user.authent = authent;
      user.jurusan_id = jurusan_id;
      user.status = status;
      await user.save();

      return response.status(200).json({
        status: true,
        message: "Proses tambah pengguna berhasil",
      });
    } catch (error) {
      response.status(501).json({
        status: false,
        message: "Opps..terjadi kesalahan ".error,
      });
    }
  }

  async show({ request, response }) {
    const { id } = request.all();
    try {
      const data = await User.query()
        .select("id", "username", "email", "authent", "jurusan_id", "status")
        .where("id", id)
        .first();

      const row = {};
      row["id"] = id;
      row["username"] = data.username;
      row["email"] = data.email;
      row["authent"] = data.authent;
      row["jurusan_id"] = Number(data.jurusan_id);
      row["status"] = data.status;

      return row;
    } catch (error) {
      response.status(500);
    }
  }

  async update({ request, response }) {
    const { id, authent, reset, jurusan_id, status } = request.all();

    try {
      const user = await User.find(id);
      if (reset) {
        user.password = "123456789";
      }
      user.authent = authent;
      user.status = status;
      user.jurusan_id = jurusan_id;
      user.save();

      response.status(200).json({
        status: true,
        message: "Proses ubah data berhasil",
      });
      return;
    } catch (error) {
      response.status(500).json({
        status: false,
        message: "Opps...,terjadi kesalahan",
      });
    }
  }

  async destroy({ params, request, response }) {
    const { id } = params;

    try {
      const user = await User.find(id);
      user.delete();

      response.status(200).json({
        status: true,
        message: "Proses hapus data berhasil...! ",
      });

      return;
    } catch (error) {
      response.json({
        status: false,
        message: "Opps, terjadi kesalahan",
      });
    }
  }

  async userInfo({ request, auth }) {
    const user = await User.findOrFail(auth.user.id);

    const profilsekolah = await ProfilSekolah.query().first();

    const data = {};
    data["id"] = user.id;
    data["username"] = user.username;
    data["email"] = user.email;
    data["authent"] = user.authent;
    data["avatar"] =
      user.avatar == null
        ? Env.get("BASE_URL") + "/api/download/logo/" + profilsekolah.logo
        : Env.get("BASE_URL") + "/api/download/avatar/" + user.avatar;
    data["peserta_id"] = user.peserta_id;

    return data;
  }

  async updateprofil({ request, response, auth }) {
    const { username, avatar } = request.all();

    const rules = {
      username: "required",
      avatar: "required",
    };

    const messages = {
      "username.required": "Nama Lengkap harus diisi",
      "avatar.required": "Foto harus dipilih",
    };

    const Validation = await validate(request.all, rules, messages);

    if (Validation.fails()) {
      const msg = await Validations.messages();

      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    try {
      const au = auth.user;
      const user = await User.find(au.id);
      user.username = username;
      user.avatar = avatar;
      //user.jurusan_id = jurusan_id;

      user.save();

      return response.json({
        status: true,
        message: "Update profil berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...terjadi kesalahan " + error,
      });
    }
  }

  async chngpwd({ request, response, auth }) {
    const { password } = request.all();

    const rules = {
      password: "required",
    };

    const messages = {
      "password.required": "Kata sandi harus diisi",
    };

    const Validations = await validate(request.all(), rules, messages);

    if (Validations.fails()) {
      const msg = await Validations.messages();

      return response.json({
        status: false,
        message: msg[0].message,
      });
    }

    const au = auth.user;

    try {
      const user = await User.findOrFail(au.id);
      user.password = password;
      await user.save();

      return response.json({
        status: true,
        message: "Proses ubah kata sandi berhasil",
      });
    } catch (error) {
      return response.json({
        status: false,
        message: "Opps...terjadi kesalahan " + error,
      });
    }
  }
}

module.exports = UserController;
