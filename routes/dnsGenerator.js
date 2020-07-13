const express = require("express");
const router = express.Router();
const dates = require("../handlers/dateManagement");
const {saveAsWord, getHtml} = require("../handlers/dnsPuppeteer");



router.get("/download", (req, res, next) => {
  try {
    res.download(`public/output/DNS.docx`, `Daily News Summary - ${dates.formattedDate}.docx`);
  } catch (err) {
    return next(err);
  }
});



router.post("/dnsPuppeteerWord", async (req, res, next) => {
  try {
    const newsObject = await saveAsWord();
    res.status(200).json(newsObject);
  } catch(err) {
    return next(err);
  }
})


router.post("/dnsPuppeteerHtml", async (req, res, next) => {
  try {
    const createdHtml = await getHtml();
    res.status(200).json(createdHtml);
  } catch(err) {
    return next(err);
  }
})

module.exports = router;
