const fs = require("fs");
const path = require("path");

//Change Directory Name Accordingly

const folderPath = path.join(__dirname, "CreatureIcons");

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const fileNameWithoutExtension = path.parse(file).name;
    const updatedFileName = insertSpacesInFileName(fileNameWithoutExtension);
    const updatedFilePath = path.join(
      folderPath,
      updatedFileName + path.extname(file)
    );

    fs.rename(filePath, updatedFilePath, (err) => {
      if (err) {
        console.error("Error renaming file:", file, err);
      } else {
        console.log(
          "File renamed:",
          file,
          "->",
          updatedFileName + path.extname(file)
        );
      }
    });
  });
});

function insertSpacesInFileName(fileName) {
  let updatedFileName = fileName[0];

  for (let i = 1; i < fileName.length; i++) {
    if (fileName[i] === fileName[i].toUpperCase()) {
      updatedFileName += " ";
    }

    updatedFileName += fileName[i];
  }

  return updatedFileName;
}
