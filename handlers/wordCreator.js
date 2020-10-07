const officegen = require("officegen");
const fs = require("fs");

const createWordDoc = configObject => {
  // Create an empty Word object:
  let docx = officegen("docx");

  // Officegen calling this function after finishing to generate the docx document:
  docx.on("finalize", function(written) {
    console.log("Finish to create a Microsoft Word document.");
  });

  // Officegen calling this function to report errors:
  docx.on("error", function(err) {
    console.log(err);
  });

  // Create a new paragraph:
  let pObj = docx.createP({ align: "justify" });

  pObj.addText(`Daily News Summary - ${configObject.date}`, { bold: true });

  pObj = docx.createP();

  for (let section in configObject.content) {
    pObj.addText(section, { bold: true, font_size: 14 });
    pObj = docx.createP();
    const sectionArticles = configObject.content[section].articles;
    sectionArticles.forEach(article => {
      pObj.addText(article.title.trim(), { bold: true });
      pObj = docx.createP(); //{align: "justify"}
      pObj.addText(article.body);
      pObj.addLineBreak();
      const articleLinks = article.links;
      articleLinks.forEach(link => {
        pObj.addLineBreak();
        pObj.addLineBreak();
        pObj.addText(`${link.sourceNewspaper}:`, {
          link: link.hyperLinkUrl,
          color: link.hyperLinkUrl === "" ? "black" : "3C46E7",
          italic: true
        });
        pObj.addText(link.restOfLink, { italic: true });
      });
      pObj.addLineBreak();
      pObj = docx.createP();
    });
  }

  // Let's generate the Word document into a file:
  let out = fs.createWriteStream(`public/output/DNS.docx`);

  out.on("error", function(err) {
    console.log(err);
  });

  // Async call to generate the output file:
  docx.generate(out);
};

module.exports = createWordDoc;
