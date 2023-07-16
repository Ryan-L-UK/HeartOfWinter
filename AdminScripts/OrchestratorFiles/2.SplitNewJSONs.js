const path = require("path");
const fs = require("fs");

// Function to compare and delete files
function compareAndDeleteFiles(newFilesDirectory, masterListDirectory) {
  fs.readdir(newFilesDirectory, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    files.forEach(function (file) {
      if (file === ".DS_Store") {
        console.log("Skipping .DS_Store file:", file);
        return;
      }

      const newFilePath = path.join(newFilesDirectory, file);
      const masterListFilePath = path.join(masterListDirectory, file);

      if (fs.existsSync(masterListFilePath)) {
        fs.unlinkSync(newFilePath);
        console.log(`Deleted file: ${newFilePath}`);
      }
    });

    console.log(
      `File comparison for ${path.basename(newFilesDirectory)} completed.`
    );
  });
}

// File 1: Split JSON Array
const directoryPath = path.join(__dirname, "../sources");
const outputDirectory = path.join(__dirname, "../Outputs");

fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  files.forEach(function (file) {
    // Exclude .DS_Store files
    if (file === ".DS_Store") {
      console.log("Skipping .DS_Store file:", file);
      return;
    }

    console.warn("------------------------------------------");
    console.warn("FILE LOADED: " + file);
    console.warn("------------------------------------------");

    var fileName = "../sources/" + file;
    const data = fs.readFileSync(__dirname + "/" + fileName);
    let json = JSON.parse(data.toString());

    const validKeys = ["monster", "item", "spell"];

    Object.keys(json).forEach(function (key) {
      if (validKeys.includes(key)) {
        console.warn("Array Name:", key);

        let directory = outputDirectory + "/" + key.toLowerCase();
        if (!fs.existsSync(directory)) {
          fs.mkdirSync(directory);
        }

        let array = json[key];
        for (let i = 0; i < array.length; i++) {
          let object = array[i];
          fs.writeFileSync(
            directory +
              "/" +
              object.name.replace("/", "-").replace(/\"/g, "'") +
              ".json",
            JSON.stringify(object)
          );
        }
      }
    });

    console.warn("------------------------------------------");
    console.warn("FILE SPLIT COMPLETED");
    console.warn("------------------------------------------");
  });

  const monsterNewFilesDirectory = path.join(__dirname, "../Outputs/monster"),
    monsterMasterListDirectory = path.join(
      __dirname,
      "../../Sources/Creatures"
    ),
    spellNewFilesDirectory = path.join(__dirname, "../Outputs/spell"),
    spellMasterListDirectory = path.join(__dirname, "../../Sources/Spells"),
    itemNewFilesDirectory = path.join(__dirname, "../Outputs/item"),
    itemMasterListDirectory = path.join(__dirname, "../../Sources/MagicItems");

  compareAndDeleteFiles(monsterNewFilesDirectory, monsterMasterListDirectory);
  compareAndDeleteFiles(spellNewFilesDirectory, spellMasterListDirectory);
  compareAndDeleteFiles(itemNewFilesDirectory, itemMasterListDirectory);
});
