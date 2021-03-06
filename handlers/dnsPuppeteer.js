const { startPuppeteer, login } = require("../utils/puppeteer");
const createNewsObject = require("./newsObjectCreator");
const createWord = require("./wordCreator");
const fetchHtml = require("./fetchHtmlForWebsite");
const { URL_DNS } = require("../config");

let browser;
let page;

const checkIsTheRightDate = async () => {
  const dateSection = await page.$eval("#header_title", el => el.innerText);
  const releaseDay = dateSection
    .split(",")[1]
    .trim()
    .split("/")[0];
  const dayToday = new Date().getDate();
  console.log("is the day correct?", +releaseDay === dayToday);
  return +releaseDay === dayToday;
};

const getPageHtml = async () => {
  await page.waitFor("#dns_content");
  const isDateRight = await checkIsTheRightDate();
  const html = await page.$eval("#dns_content", el => el.innerHTML);
  return { html, isDateRight };
};

const scrapeDns = async () => {
  [browser, page] = await startPuppeteer(true);
  await login(page, URL_DNS);
  // const pageHtml = await getPageHtml();
  const { html, isDateRight } = await getPageHtml();
  await browser.close();
  const jsonObj = await createNewsObject(html);
  console.log("JSON", jsonObj);
  return { jsonObj, isDateRight };
};

exports.saveAsWord = async () => {
  const { jsonObj, isDateRight } = await scrapeDns();
  createWord(jsonObj);
  return { jsonObj, isDateRight };
};

exports.getHtml = async newsIndexes => {
  const { jsonObj } = await scrapeDns();
  const htmlString = await fetchHtml(jsonObj, newsIndexes);
  return htmlString;
};
