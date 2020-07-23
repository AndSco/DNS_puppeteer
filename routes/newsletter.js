const express = require("express");
const router = express.Router();
const { createNews, uploadNews } = require("../handlers/newsletter");
const multer = require("multer");
const path = require("path");

router.get("/createJsonNews", createNews);
router.post("/uploadNews", uploadNews);

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage }).single("imageFile");

router.post("/uploadImage", async (req, res, next) => {
  await upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return next(err);
    } else if (err) {
      return next(err);
    }
    console.log("req.file", req.file);
    const { path } = req.file;
    res.status(200).json(path);
  });
});

module.exports = router;
