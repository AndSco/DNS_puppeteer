const express = require("express");
const router = express.Router();
const { extractTextFromImage } = require("../handlers/textExtractor");

router.post("/", async (req, res, next) => {
  try {
    const {filePath, language} = req.body;
    const extraxtedText = await extractTextFromImage(filePath, language);
    res.status(200).json(extraxtedText);
  } catch (err) {
      return next(err);
  }
})

module.exports = router;
