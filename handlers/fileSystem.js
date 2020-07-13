const path = require("path");
const fs = require("fs");
const directory = "public/uploads";

exports.deleteAllImagesInUploadsFolder = (req, res, next) => {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;

    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err;
      });
    }
  });
}