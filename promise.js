const { readFile } = require("fs");

const getPath = (pathFile) => {
  return new Promise((resolve, reject) => {
    readFile(pathFile, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else resolve(data);
    });
  });
};

getPath("./data/paraleer.txt")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
