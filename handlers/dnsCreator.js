const createDoc = require("./wordCreator");
const createNewsObject = require("./newsObjectCreator");


const createDNS = async () => {
  try {
    const newsObject = await createNewsObject();
    createDoc(newsObject);
  } catch (err) {
    throw err;
  }
};

module.exports = createDNS;


