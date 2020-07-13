const axios = require("axios");
const cheerio = require("cheerio");
const newsletterPuppeteer = require("./newsletterPuppeteer");


exports.createNews = async (req, res, next) => {
  const { data } = await axios.get("https://ec.europa.eu/malta/news_en");
  const {index, section} = req.query;
  const $ = await cheerio.load(data, {
    xml: {
      normalizeWhitespace: true
    }
  });
  const newsContainer = $(".view-content");
  const newsBatches = $(newsContainer).children();
  const selectedNews = $(newsBatches[index]);
  // console.log("the selected news", $(newsBatches[index]));
  const newsObj = {};
  const title = $(selectedNews)
    .find(".reps_ne_title")
    .find(".field-name-title-field")
    .find("a")
    .text();
  const link = $(selectedNews)
    .find(".reps_ne_title")
    .find(".field-name-title-field")
    .find("a")
    .attr("href");
  const teaser = $(selectedNews)
    .find(".reps_ne_body")
    .find("p")
    .text();

  newsObj.title = title;
  newsObj.link = `https://ec.europa.eu${link}`;
  newsObj.teaser = teaser;
  newsObj.section = section;

  res.status(200).json(newsObj);
};


exports.uploadNews = async (req, res, next) => {
  try {
    const {newsItems} = req.body;
    await newsletterPuppeteer(newsItems);
    res.json("News uploaded!");
  } catch(err) {
    return next(err);
  }
}


