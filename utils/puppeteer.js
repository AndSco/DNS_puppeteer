const puppeteer = require("puppeteer");
const { USERNAME, PASSWORD } = require("../config");



exports.startPuppeteer = async (HEADLESS = false) => {
  const browser = await puppeteer.launch({ headless: HEADLESS });
  const page = await browser.newPage();
  return [browser, page];
}

exports.login = async (page, url) => {
  try {
    await page.goto(url);
    await page.waitFor("#username");
    await page.waitFor(1000);
    await page.type("#username", USERNAME, {delay: 100});
    const nextButton = await page.$(
      "input.btn.btn-primary.btn-block"
    );
    await nextButton.click();

    await page.waitForNavigation({ waitUntil: "domcontentloaded" });
    await page.waitFor("#password");
    await page.waitFor(1000);
    await page.type("#password", PASSWORD, { delay: 100 });
    const loginBtn = await page.$("#loginForm > div > input");
    await loginBtn.click();
  } catch(err) {
    console.error(err);
  }
}


exports.waitNavigation = async page => {
  await page.waitForNavigation({ waitUntil: "domcontentloaded" });
};