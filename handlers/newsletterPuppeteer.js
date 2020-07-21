const { URL_NLETTER } = require("../config");
const { startPuppeteer, login } = require("../utils/puppeteer");

let browser;
let page;

const getIframe = async () => {
  const iFrameHandle = await page.$("body > div.popContainer > iframe");
  const frame = await iFrameHandle.contentFrame();
  return frame;
};


const startCreatingNews = async () => {
  try {
    await page.waitFor("#toolbar > ul > li:nth-child(1)");
    const taskManagerBtn = await page.$("#toolbar > ul > li:nth-child(1)");
    await taskManagerBtn.click();

    await page.waitFor(
      "#toolbar > ul > li:nth-child(1) > ul > li:nth-child(2) > a"
    );
    const createBtn = await page.$(
      "#toolbar > ul > li:nth-child(1) > ul > li:nth-child(2) > a"
    );
    await createBtn.click();
  } catch(err) {
    throw err;
  }
}

const enterNewsTitle = async title => {
  try {
    await page.waitFor("#item_title");
    await page.type("#item_title", title, { delay: 100 });
    const continueButton = await page.$(".actionButton");
    await continueButton.click();
  } catch(err) {
    throw(err)
  }
}


const enterNewsDetails = async (link, teaser) => {
  try {
    await page.waitFor(
      "div.cntLeft.child1 > div.lgCompare > div:nth-child(2) > a"
    );
    const editButton = await page.$(
      "div.cntLeft.child1 > div.lgCompare > div:nth-child(2) > a"
    );
    await editButton.click();

    let frame = await getIframe();
    await frame.waitForSelector("#item_location");
    await frame.type("#item_location", link, { delay: 100 });
    await frame.type("textarea", teaser);
    const updateButton = await frame.$(".actionButton.pinkBT");
    await updateButton.click();
  } catch(err) {
    throw(err);
  }
}

const addPicture = async imagePath => {
  try {
    await page.waitFor(2000);
    await page.waitFor(
      "body > div > div > div > div > div > div.content2cols.clearfix.item-max > div > div.cntLeft.child1 > div:nth-child(7) > div > div.relDocs_pic > a"
    );
    const addPicButton = await page.$(
      "body > div > div > div > div > div > div.content2cols.clearfix.item-max > div > div.cntLeft.child1 > div:nth-child(7) > div > div.relDocs_pic > a"
    );
    await addPicButton.click();

    frame = await getIframe();
    await frame.waitFor("#new_file");
    const inputUploadHandle = await frame.$("#new_file");
    await inputUploadHandle.uploadFile(`./${imagePath}`);
    const savePicBtn = await frame.$("body > div > a");
    await savePicBtn.click();
  } catch(err) {
    throw(err);
  }
}

const addNewsSection = async section => {
  try {
    await page.waitFor(1500);
    await page.waitFor(
      "body > div > div > div > div > div > div.content2cols.clearfix.item-max > div > div.cntRight.child2 > div:nth-child(6) > a"
    );
    const addSectionBtn = await page.$(
      "body > div > div > div > div > div > div.content2cols.clearfix.item-max > div > div.cntRight.child2 > div:nth-child(6) > a"
    );
    await addSectionBtn.click("");
    frame = await getIframe();
    await frame.waitFor("#ui-id-1");
    const accordion = await frame.$("#ui-id-1");
    await accordion.click();

    await page.waitFor(1500);
    await frame.waitFor("#li-2990");
    const list = await frame.$("#li-2990 > ul");
    const possibleChoices = await list.$$("li");
    let rightChoice;

    for (let i = 0; i < possibleChoices.length; i++) {
      const current = possibleChoices[i];
      const sectionName = await frame.evaluate(
        current => current.innerText,
        current
      );
      if (sectionName.trim().toLowerCase() === section.toLowerCase()) {
        console.log("MATCH FOUND!");
        rightChoice = await current.$("span");
        break;
      }
    }

    await rightChoice.click();

    const proceedButton = await frame.$(
      "body > div.popPadding > div:nth-child(2) > div.FL > a"
    );
    await proceedButton.click();
  } catch(err) {
    throw(err);
  }
}


const validateNews = async () => {
  try {
    await page.waitFor(
      "body > div > div > div > div > div > div.content2cols.clearfix.item-max > div > div.cntRight.child2 > div:nth-child(1) > div > div.boxShadow > div > div.step.step2 > div.status > a"
    );

    const askValdationBtn = await page.$(
      "body > div > div > div > div > div > div.content2cols.clearfix.item-max > div > div.cntRight.child2 > div:nth-child(1) > div > div.boxShadow > div > div.step.step2 > div.status > a"
    );
    await askValdationBtn.click();

    await page.waitFor(".actionButton.FN");
    const publishLocally = await page.$(".actionButton.FN");
    await publishLocally.click();

    await page.waitFor(
      "body > div > div > div > div > div > div.content2cols.clearfix.item-max > div > div.cntRight.child2 > div:nth-child(6) > div > div > ul > li > span.links > a:nth-child(2)"
    );
    const validate = await page.$(
      "body > div > div > div > div > div > div.content2cols.clearfix.item-max > div > div.cntRight.child2 > div:nth-child(6) > div > div > ul > li > span.links > a:nth-child(2)"
    );
    await validate.click();
  } catch(err) {
    throw(err);
  }
}


const goBackToTaskpane = async () => {
  try {
    await page.waitFor("#headNav > a:nth-child(1)");
    const backButton = await page.$("#headNav > a:nth-child(1)");
    await backButton.click();
  } catch(err) {
    throw(err);
  }
}


const uploadNewsItem = async newsItem => {
  try {
    const { title, link, teaser, imagePath, section } = newsItem;
    console.log("now uploading", newsItem);

    await startCreatingNews();
    await enterNewsTitle(title);
    await enterNewsDetails(link, teaser);
    await addPicture(imagePath);
    await addNewsSection(section);
    await validateNews();
    await goBackToTaskpane();

  } catch(err) {
      console.error(err);
  }
}



const main = async newsItems => {
  try {
    const headlessOption = process.env.NODE_ENV === "production" ? true : false;
    [browser, page] = await startPuppeteer(headlessOption);
    await login(page, URL_NLETTER);

    for (const news of newsItems) {
      await uploadNewsItem(news);
    }
    
    await browser.close();
  } catch (err) {
    console.error(err);
  }
};

module.exports = main;

