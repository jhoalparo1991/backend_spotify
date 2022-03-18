const { matchedData } = require("express-validator");
const { storageSchema } = require("../models");
const handle_errors = require("../utils/handleErrors");
const fs = require("fs");
const path = require("path");

const PUBLIC_URL = process.env.PUBLIC_URL;
const PATH_FILE = path.join(__dirname, "../public/upload/");

const getFiles = async (req, res) => {
  try {
    const data = await storageSchema.find();
    res.status(200).json({
      ok: true,
      data,
    });
  } catch (error) {
    handle_errors(res, "No se pudo procesar la peticion", 400);
  }
};

const getFile = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    console.log(id);
    const data = await storageSchema.findOne({_id:id});
    res.status(200).json({
      ok: true,
      data,
    });
  } catch (error) {
    handle_errors(res, "No se pudo procesar la peticion para obtener un recurso", 400);
  }
};

const uploadFile = async (req, res) => {
  try {
    const { filename } = req.file;

    const upload = new storageSchema({
      filename,
      url: `${PUBLIC_URL}${filename}`,
    });

    await upload.save((err, data) => {
      if (err)
        return res
          .status(403)
          .json({
            ok: false,
            message: "Ocurrio un error no se pudo subir el archivo",
            code: 403,
          });
      return res.json({
        ok: true,
        data,
        code: 200,
      });
    });
  } catch (err) {
    handle_errors(res, "No se pudo procesar la peticion", 400);
  }
};

const updateItem = async (req, res) => {
  try {
    const { filename } = req.file;
    const { id } = req.params;
    const edit = { filename, url: `${PUBLIC_URL}${filename}` };
    const getstorage = await storageSchema.findById(id);
    if (!getstorage) {
      return res.status(200).send({ message: "No found resource" });
    }
    fs.unlinkSync(`${PATH_FILE}${getstorage.filename}`);

    const result = await storageSchema.findByIdAndUpdate(id, edit, {
      new: true,
    });
    return res.send({ result });
  } catch (error) {
    handle_errors(res, error, 400);
  }
};

const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const getstorage = await storageSchema.findById(id);
    if (!getstorage) {
      return res.status(200).send({ message: "No found resource" });
    }
    const data = await storageSchema.delete({ _id: id });
    return res.status(200).json({
      data,
    });
  } catch (error) {
    handle_errors(res, error, 400);
  }
};

module.exports = {
  getFiles,
  getFile,
  uploadFile,
  deleteItem,
  updateItem,
};
