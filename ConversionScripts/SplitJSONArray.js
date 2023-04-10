const path = require("path");
const fs = require("fs");
const directoryPath = path.join(__dirname, "sources");
fs.readdir(directoryPath, function (err, files) {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  files.forEach(function (file) {
    console.warn("------------------------------------------");
    console.warn("FILE LOADED: " + file);
    console.warn("------------------------------------------");
    var fileName = "/sources/" + file;
    var arrayName = "item";
    const data = fs.readFileSync(__dirname + "/" + fileName);
    let directory = __dirname + "/" + arrayName;
    if (!fs.existsSync(__dirname + "/" + arrayName)) {
      const directory = fs.mkdirSync(__dirname + "/" + arrayName);
    }
    let json = JSON.parse(data.toString());
    let array = json[arrayName];
    for (object in array) {
      fs.writeFileSync(
        directory +
          "/" +
          array[object].name.replace("/", "-").replace(/\"/g, "'") +
          ".json",
        JSON.stringify(array[object])
      );
    }
    console.warn("------------------------------------------");
    console.warn("FILE SPLIT COMPLETED");
    console.warn("------------------------------------------");
  });
});
