const path = require("path");
const fs = require("fs");
const directory = "public/uploads";

const goOnAndDelete = () => {
  fs.readdir(directory, (err, files) => {
    if (err) console.error(err);

    if (files.length === 0) {
      return;
    }

    for (const file of files) {
      const fileDir = path.join("./", file);
      if (fileDir !== "placeholder.js") {
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
      }
    }
  });
};

exports.deleteAllImagesInUploadsFolder = () => {
  //check if folder exists
  fs.access(directory, error => {
    if (error) {
      console.log("Directory does not exist.");
      return;
    } else {
      console.log("Directory exists.");
      goOnAndDelete();
    }
  });
};
