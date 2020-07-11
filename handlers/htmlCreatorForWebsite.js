const createNewsObject = require("./newsObjectCreator");

const createHtml = async () => {
  const newsObj = await createNewsObject();
  console.log("news obj for html", newsObj);
  let htmlString = "";
  const {content} = newsObj;
  
  for (let section in content) {
    const heading = `
      <h3>${section}</h3>
      <p></p>`;
    htmlString += heading;
    const sectionArticles = newsObj.content[section].articles;
    sectionArticles.map(art => {
      const titleBody = `
        <p><b>${art.title}</b></p>
        <p>${art.body}</p>`;
      htmlString += titleBody;
      const articleLinks = art.links;
      // console.log(articleLinks);
      articleLinks.map((link, index) => {
        const linkString = `
          <p><i>
            <a href="${link.hyperLinkUrl}">${link.sourceNewspaper}</a>: ${link.restOfLink}
          </i></p>`;
        htmlString += linkString;  
        if (index === articleLinks.length - 1) {
          htmlString += "<p></p>";
        }
      })
    });
  }
  return htmlString;
}

module.exports = createHtml;