const express = require("express");
const router = express.Router();
const { ACCESS_PWORD } = require("../config");
const { deleteAllImagesInUploadsFolder } = require("../handlers/fileSystem");

router.post("/login", (req, res, next) => {
  try {
    const { password } = req.body;
    deleteAllImagesInUploadsFolder();
    res.status(200).json(password === ACCESS_PWORD);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
