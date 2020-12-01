const puppeteer = require("puppeteer");

exports.startPuppeteer = async (HEADLESS = false) => {
  const browser = await puppeteer.launch({
    headless: HEADLESS,
    args: ["--no-sandbox"]
  });
  const page = await browser.newPage();
  return [browser, page];
};

exports.login = async (page, url, ecasUsername, ecasPassword) => {
  try {
    await page.goto(url);
    await page.waitFor("#username");
    await page.waitFor(1000);
    await page.type("#username", ecasUsername, { delay: 100 });
    const nextButton = await page.$("input.btn.btn-primary.btn-block");
    await nextButton.click();

    await page.waitForNavigation({ waitUntil: "domcontentloaded" });
    await page.waitFor("#password");
    await page.waitFor(1000);
    await page.type("#password", ecasPassword, { delay: 100 });
    const loginBtn = await page.$("#loginForm > div > input");
    await loginBtn.click();
  } catch (err) {
    console.error(err);
  }
};

exports.waitNavigation = async page => {
  await page.waitForNavigation({ waitUntil: "domcontentloaded" });
};
