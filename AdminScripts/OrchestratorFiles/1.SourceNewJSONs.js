const path = require("path");
const fs = require("fs");

function copyFilesToSources() {
  // Copy items.json file
  const sourceItemsFile =
    "/Users/ryan/5etools-mirror-1.github.io/data/items.json";
  const destinationItemsFile = path.join(__dirname, "../sources/items.json");
  fs.copyFile(sourceItemsFile, destinationItemsFile, (error) => {
    if (error) {
      console.error(`Error while copying items.json: ${error}`);
    } else {
      console.log(
        "Successfully copied file 'items.json' to sources directory."
      );
    }
  });

  // Copy spells files
  const sourceSpellsFolder =
    "/Users/ryan/5etools-mirror-1.github.io/data/spells";
  const destinationSpellsFolder = path.join(__dirname, "../sources");

  fs.readdir(sourceSpellsFolder, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    files.forEach(function (file) {
      if (
        file === "index.json" ||
        file === "foundry.json" ||
        file.startsWith("fluff-") ||
        file.startsWith("spells-ua-")
      ) {
        return; // Ignore files that match the exclusion criteria
      }

      const sourceFilePath = path.join(sourceSpellsFolder, file);
      const destinationFilePath = path.join(destinationSpellsFolder, file);

      fs.copyFile(sourceFilePath, destinationFilePath, (error) => {
        if (error) {
          console.error(`Error while copying file '${file}': ${error}`);
        } else {
          console.log(
            `Successfully copied file '${file}' to sources directory.`
          );
        }
      });
    });
  });

  // Copy bestiary files
  const sourceBestiaryFolder =
    "/Users/ryan/5etools-mirror-1.github.io/data/bestiary";
  const destinationBestiaryFolder = path.join(__dirname, "../sources");

  fs.readdir(sourceBestiaryFolder, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }

    files.forEach(function (file) {
      if (
        file === "index.json" ||
        file === "foundry.json" ||
        file === "legendarygroups.json" ||
        file === "traits.json" ||
        file.startsWith("fluff-") ||
        file.startsWith("bestiary-ua-")
      ) {
        return; // Ignore files that match the exclusion criteria
      }

      const sourceFilePath = path.join(sourceBestiaryFolder, file);
      const destinationFilePath = path.join(destinationBestiaryFolder, file);

      fs.copyFile(sourceFilePath, destinationFilePath, (error) => {
        if (error) {
          console.error(`Error while copying file '${file}': ${error}`);
        } else {
          console.log(
            `Successfully copied file '${file}' to sources directory.`
          );
        }
      });
    });
  });
}

// Call the function to initiate the file copying
copyFilesToSources();
