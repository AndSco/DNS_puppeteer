const express = require("express");
const router = express.Router();
const { ACCESS_PWORD } = require("../config");

router.post("/login", (req, res, next) => {
  try {
    const { password } = req.body;
    res.status(200).json(password === ACCESS_PWORD);
  } catch(err) {
    return next(err);
  }
});

module.exports = router;