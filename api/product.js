const express = require("express");
const router = express.Router();
const multer = require("multer");

const UploadController = require("../app/controller/UploadController");
// setup multer for file upload
const storage = multer.diskStorage({
  destination: "./tmp",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router.post("/api/uploads", upload.single("myFile"), (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  UploadController.createPlaylist(req, res, next);
  console.log(req.file.originalname + " file successfully uploaded !!");
  res.sendStatus(200);
});

router.get("/api/uploads", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  UploadController.APIMusic(req, res, next);
  res.sendStatus(200);
});

module.exports = router;
