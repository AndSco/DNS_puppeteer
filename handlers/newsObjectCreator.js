const cheerio = require("cheerio");
const createUrl = require("./linkManager");
const dates = require("./dateManagement");
const { replaceHtmlEntites } = require("./htmlSymbols");


const createNewsObject = async pageHtml => {
  const $ = await cheerio.load(pageHtml, {
    xml: {
      normalizeWhitespace: true
    }
  });

  const secTitles = await $(".center_heading_medium");
  const thematicSections = [];

  const dnsObject = {
    date: dates.formattedDate
  };

  const recursion = (destination, startingElement) => {
    const destinationArray = thematicSections[destination].articles;
    const firstElement = startingElement;

    const groupSections = async startElement => {
      const nextSibling = await $(startElement).next();
      if ($(nextSibling).attr("class") === "articlebox_big") {
        const articleObj = {};
        let linksArray = [];
        const articleTitle = replaceHtmlEntites(
          $(nextSibling)
            .find(".center_heading_small")
            .text()
        );
        const articleBody = replaceHtmlEntites(
          $(nextSibling)
            .find(".center_leadin")
            .text()
        );

        const articleLinks = $(nextSibling)
          .find(".dns_center_headline_source")
          .each((index, elem) => {
            const allLink = replaceHtmlEntites($(elem).text());
            const indexToCut = allLink.indexOf("-MT:");
            const restOfLink = allLink.slice(indexToCut + 4);
            const hyperLinkText = $(elem)
              .find("b")
              .first()
              .text()
              .replace("km-", "")
              .replace("-MT", "")
              .replace(":", "");

            const linkObj = {};
            linkObj.text = `${hyperLinkText}: ${restOfLink}`;
            linkObj.sourceNewspaper = hyperLinkText;
            linkObj.hyperLinkUrl = createUrl(hyperLinkText);
            linkObj.restOfLink = restOfLink;

            linksArray.push(linkObj);
          });

        articleObj.title = articleTitle;
        articleObj.body = articleBody;
        articleObj.links = linksArray;

        destinationArray.push(articleObj);
        groupSections(nextSibling);
      }
      return;
    };
    return groupSections(firstElement);
  };

  await secTitles.each((index, elem) => {
    const title = $(elem)
      .children()
      .first()
      .text();
    thematicSections[title] = { articles: [] };
    recursion(title, elem);
  });

  dnsObject.content = thematicSections;
  console.log("OBJECT", dnsObject);
  return dnsObject;
};


module.exports = createNewsObject;

