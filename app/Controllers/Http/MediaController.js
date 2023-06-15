"use strict";
const Env = use("Env");
const Helpers = use("Helpers");
const Drive = use("Drive");
const { validate } = use("Validator");

const fs = require("fs");

const chunk_inpt = "file";
const chunk_maxs = 1;
const chunk_size = 1;
const chunk_trgt = Helpers.appRoot() + "/uploads/";

process.setMaxListeners(Infinity);

class MediaController {
  async images({ params, request, response }) {
    const name = params.name;
    return response.download(Helpers.publicPath("images/") + name);
  }
  async download({ params, request, response }) {
    const name = params.name;
    const dir = params.dir;

    return response.download(Helpers.publicPath("uploads/" + dir + "/") + name);
  }
  async store({ request, response }) {
    const { doctype } = request.all();
    const file = request.file(chunk_inpt);

    if (file.size > 20000000) {
      return response.status(500).json("File maksimal untuk diupload 2Mb");
    }

    const name = `${new Date().getTime()}.${file.extname}`;

    const tempName =
      "temp-" + request.input("uuid") + request.input("chunkNumb") + ".temp";

    const trgt = Helpers.publicPath("/uploads/" + doctype + "/");
    const tmpt = Helpers.tmpPath("/uploads/");

    try {
      await file.move(tmpt, { name: tempName });

      var destFileStream;

      if (request.input("chunkNumb") < request.input("chunkMaxs")) {
        return response.status(200).json({
          success: true,
        });
      } else if (request.input("chunkNumb") == request.input("chunkMaxs")) {
        fs.writeFileSync(trgt + name, "");

        let i = 1;
        while (i <= request.input("chunkMaxs")) {
          const chunkName =
            tmpt + "temp-" + request.input("uuid") + i + ".temp";

          fs.appendFileSync(trgt + name, fs.readFileSync(chunkName));
          fs.unlinkSync(chunkName);
          i++;
        }
      }
      return response.json({
        status: true,
        name: name,
        slug: name,
        size: file.size,
        type: file.type,
        mime: file.subtype,
        path: Env.get("BASE_URL") + "/api/download/" + doctype + "/" + name,
        //path: "https://api.smkn4-kabtangerang.sch.id/api/download/" + name,
      });
    } catch (error) {
      return response.status(500).json({
        status: false,
        message: "Opps terjadi kesalahan " + error,
      });
    }
  }
}

module.exports = MediaController;
