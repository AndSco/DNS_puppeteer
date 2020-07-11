const functionToPerform = `const editButtons = document.querySelectorAll(".isPopup");
const myButton = editButtons[2];
const lightBlueButtons = document.querySelectorAll(".lightblueBT");
const associationButton = lightBlueButtons[2];

const accessIframe = () => {
  const iFrame = document.querySelector("iframe");
  const innerDoc = iFrame.contentDocument || iFrame.contentWindow.document;
  return innerDoc;
};

const enterNewsDetails = (news) => {
  myButton.click();
  setTimeout(() => {
    const innerDoc = accessIframe();
    const submitButton = innerDoc.querySelector(".actionButton");
    const linkInput = innerDoc.querySelector('input[name="item_location"]');
    const teaserInput = innerDoc.querySelector("textarea");
    // const submitButton = innerDoc.querySelector(".actionButton");
    // console.log(titleInput);
    linkInput.value = news.link;
    teaserInput.value = news.teaser;
    submitButton.click();
  }, 3000);
};

const addNewsletterSection = (news) => {
  associationButton.click();
  setTimeout(() => {
    const innerDoc = accessIframe();
    const submitButton = innerDoc.querySelector(".pinkBT");
    const maltaRow = innerDoc.querySelector("#li-2990");
    const possibleChoices = Array.from(maltaRow.querySelectorAll("li"));
    const myChoice = possibleChoices.find(
      choice =>
        choice.innerText.trim().toLowerCase() ===
        news.section.toLowerCase()
    );
    // console.log(myChoice);
    const buttonChoice = myChoice.querySelector("span");
    buttonChoice.click();
    submitButton.click();
  }, 3000);
};
`

export default functionToPerform;