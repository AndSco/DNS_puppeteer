const util = require("util");

const createHtml = async (newsObj, indexes) => {
  console.log("selected indexes", indexes)
  let htmlString = "";
  const { content } = newsObj;

  let allArticles = [];

  for (let section in content) {
    const sectionArticles = newsObj.content[section].articles;
    allArticles.push(...sectionArticles);
  }

  allArticles = allArticles.filter((_, index) => indexes.indexOf(index) !== -1);

  allArticles.forEach((article) => {
    console.log(util.inspect(article, false, null, true));
    const {section, title, body, links} = article;
    
    const heading = `
      <h3>${section}</h3>
      <p></p>`;
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
  })


  // for (let section in content) {
  //   const heading = `
  //     <h3>${section}</h3>
  //     <p></p>`;
  //   htmlString += heading;
  //   const sectionArticles = newsObj.content[section].articles;
  //   sectionArticles.map(art => {
  //     const titleBody = `
  //       <p><b>${art.title}</b></p>
  //       <p>${art.body}</p>`;
  //     htmlString += titleBody;
  //     const articleLinks = art.links;
  //     // console.log(articleLinks);
  //     articleLinks.map((link, index) => {
  //       const linkString = `
  //         <p><i>
  //           <a href="${link.hyperLinkUrl}">${link.sourceNewspaper}</a>: ${link.restOfLink}
  //         </i></p>`;
  //       htmlString += linkString;
  //       if (index === articleLinks.length - 1) {
  //         htmlString += "<p></p>";
  //       }
  //     });
  //   });
  // }
  return htmlString;
};

module.exports = createHtml;

// const createHtml = async (newsObj) => {
//   let htmlString = "";
//   const {content} = newsObj;
  
//   for (let section in content) {
//     const heading = `
//       <h3>${section}</h3>
//       <p></p>`;
//     htmlString += heading;
//     const sectionArticles = newsObj.content[section].articles;
//     sectionArticles.map(art => {
//       const titleBody = `
//         <p><b>${art.title}</b></p>
//         <p>${art.body}</p>`;
//       htmlString += titleBody;
//       const articleLinks = art.links;
//       // console.log(articleLinks);
//       articleLinks.map((link, index) => {
//         const linkString = `
//           <p><i>
//             <a href="${link.hyperLinkUrl}">${link.sourceNewspaper}</a>: ${link.restOfLink}
//           </i></p>`;
//         htmlString += linkString;  
//         if (index === articleLinks.length - 1) {
//           htmlString += "<p></p>";
//         }
//       })
//     });
//   }
//   return htmlString;
// }

// module.exports = createHtml;