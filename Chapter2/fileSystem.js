const fspromises = require("fs").promises;
const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "starter.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// exit on uncaught errors

process.on("uncaughtExeption", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});

// writing a file

fs.writeFile(
  path.join(__dirname, "writefile.txt"),
  "nice to meet you",
  (err) => {
    if (err) throw err;
    console.log("write complete");
  }
);

// appending in a file

fs.appendFile(
  path.join(__dirname, "writefile.txt"),
  "\n\nYou are amazing",
  (err) => {
    if (err) throw err;
    console.log("append complete");
  }
);

// appendfile also create the file if the filename passed is not already there

fs.appendFile(
  path.join(__dirname, "test.txt"),
  "hey!, this file is created by appendfile",
  (err) => {
    if (err) throw err;
    console.log("file created");
  }
);

//renaming a file

fs.rename(path.join(__dirname, "test.txt"), "renamed.txt", (err) => {
  if (err) throw err;
  console.log("file renamed");
});
