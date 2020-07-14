const {startPuppeteer, login} = require("../utils/puppeteer");
const createNewsObject = require("./newsObjectCreator");
const createWord = require("./wordCreator");
const fetchHtml = require("./fetchHtmlForWebsite");
const { URL_DNS } = require("../config");


let browser;
let page;


const getPageHtml = async () => {
  await page.waitFor("#dns_content");
  const html = await page.$eval("#dns_content", el => el.innerHTML);
  return html;
}


const scrapeDns = async () => {
  [browser, page] = await startPuppeteer(true);
  await login(page, URL_DNS);
  const pageHtml = await getPageHtml();
  await browser.close();
  const jsonObj = await createNewsObject(pageHtml);
  console.log("JSON", jsonObj);
  return jsonObj;
}


exports.saveAsWord = async () => {
  const jsonObj = await scrapeDns();
  createWord(jsonObj);
  return jsonObj;
}


exports.getHtml = async (newsIndexes) => {
  const jsonObj = await scrapeDns();
  const htmlString = await fetchHtml(jsonObj, newsIndexes);
  return htmlString;
}


