const express = require("express");
const router = express.Router();
const dates = require("../handlers/dateManagement");
const { saveAsWord, getHtml } = require("../handlers/dnsPuppeteer");

router.get("/download", (req, res, next) => {
  try {
    res.download(
      `public/output/DNS.docx`,
      `Daily News Summary - ${dates.formattedDate}.docx`
    );
  } catch (err) {
    return next(err);
  }
});

router.post("/dnsPuppeteerWord", async (req, res, next) => {
  try {
    const { jsonObj: newsObject, isDateRight } = await saveAsWord();
    res.status(200).json({ newsObject, isDateRight });
  } catch (err) {
    return next(err);
  }
});

router.post("/dnsPuppeteerHtml", async (req, res, next) => {
  try {
    const { newsIndexes } = req.body;
    const createdHtml = await getHtml(newsIndexes);
    res.status(200).json(createdHtml);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
