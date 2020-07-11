// DNS MANAGEMENT 
const secTitles = document.querySelectorAll(".center_heading_medium");
const thematicSections = [];


const formatArticle = articleArray => {
  const articleObj = {};
  const articleTitle = articleArray.find(
    item => item.className === "center_heading_small"
  ).innerText;
  const articleBody = articleArray.find(
    item => item.className === "center_leadin"
  ).innerText;
  const articleLinks = articleArray
    .filter(item => item.className === "dns_center_headline_source")
    .map(link => link.innerText.replace(" km-", ""));
  articleObj.title = articleTitle;
  articleObj.body = articleBody;
  articleObj.links = articleLinks;
  
  return articleObj;
};

const recursion = (destination, startingElement) => {
  const destinationArray = thematicSections[destination].articles;
  const firstElement = startingElement;

  const groupSections = startElement => {
    const nextSibling = startElement.nextElementSibling;
    if (nextSibling.className === "articlebox_big") {
      const articleArray = Array.from(nextSibling.childNodes);
      destinationArray.push(formatArticle(articleArray));
      groupSections(nextSibling);
    }
    return;
  };
  return groupSections(firstElement);
};


secTitles.forEach(title => {
  thematicSections[title.innerText] = { articles: []};
  recursion(title.innerText, title);
});

console.log(thematicSections);




// AUTOMATIC LOGIN
// const login = () => {
//   const userNameInput = document.querySelector("#username");
//   const nextButton = document.querySelector(".btn-primary");
//   userNameInput.value = "scorcan";
//   nextButton.click();
// }
