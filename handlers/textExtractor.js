const { createWorker, setLogging } = require("tesseract.js");

const worker = createWorker({
  logger: m => console.log(m)
});
setLogging(true);

exports.extractTextFromImage = async (imagePath, language) => {
  try {
    await worker.load();
    await worker.loadLanguage(language);
    await worker.initialize(language);

    const result = await worker.recognize(imagePath);
    const { text } = result.data;

    await worker.terminate();
    return text;
  } catch (err) {
    throw err;
  }
};
