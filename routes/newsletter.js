const express = require("express");
const router = express.Router();
const {createNews, uploadNews} = require("../handlers/newsletter");

router.get("/createJsonNews", createNews);
router.post("/uploadNews", uploadNews)


module.exports = router;