const express = require("express");
const router = express.Router();
const multer = require("multer");

const UploadController = require("../app/controller/UploadController");
// setup multer for file upload
const storage = multer.diskStorage({
  destination: "./build",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
router.post("/api/uploads", upload.single("myFile"), (req, res, next) => {
  UploadController.createPlaylist(req, res, next);
  console.log(req.file.originalname + " file successfully uploaded !!");
  res.sendStatus(200);
});

router.get("/api/uploads", (req, res, next) => {
  UploadController.APIMusic(req, res, next);
});

module.exports = router;
