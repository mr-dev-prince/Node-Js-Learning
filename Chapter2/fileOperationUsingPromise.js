const fspromise = require("fs").promises;
const path = require("path");

const file = async () => {
  try {
    const data = await fspromise.readFile(
      path.join(__dirname, "starter.txt"),
      "utf-8"
    );
    console.log(data);

    // writeFile
    await fspromise.writeFile(
      path.join(__dirname, "writefile.txt"),
      "This file is written by the code at line 10"
    );

    // appendFile

    await fspromise.appendFile(
      path.join(__dirname, "writefile.txt"),
      "\n\nthis text is appended by the code written at line no. 20"
    );

    // rename

    await fspromise.rename(
      path.join(__dirname, "writefile.txt"),
      "renamed.txt"
    );

    // unlink = deletes the file / there exist a file named delete.txt
    await fspromise.unlink(path.join(__dirname, "delete.txt"));

    console.log("operations complete");
  } catch (err) {
    console.error(err);
  }
};

file();
