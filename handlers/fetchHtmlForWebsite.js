const util = require("util");

const createHtml = async (newsObj, indexes) => {
  console.log("selected indexes", indexes);
  let htmlString = "";
  const { content } = newsObj;

  let allArticles = [];

  for (let section in content) {
    const sectionArticles = newsObj.content[section].articles;
    allArticles.push(...sectionArticles);
  }

  allArticles = allArticles.filter((_, index) => indexes.indexOf(index) !== -1);

  allArticles.forEach(article => {
    console.log(util.inspect(article, false, null, true));
    const { section, title, body, links } = article;

    const heading = `<h3>${section}</h3>`;
    htmlString += heading;

    const titleBody = `
        <p><b>${title}</b></p>
        <p>${body}</p>`;
    htmlString += titleBody;

    links.map((link, index) => {
      const linkString = `
        <p><i>
          <a href="${link.hyperLinkUrl}">${link.sourceNewspaper}</a>: ${link.restOfLink}
        </i></p>`;
      htmlString += linkString;
      if (index === links.length - 1) {
        htmlString += "<p></p>";
      }
    });
  });

  return htmlString;
};

module.exports = createHtml;
