//To run this: CD to the relevant folder, ensure that the json source and this are in there. Then run 'node' followed by this file name.

var fs = require("fs");

//Change the file name here
var fileName = "RAWspellsPHB.json";

//Change the array name. This will be the name of the array in the source file.
var arrayName = "spell";

const data = fs.readFileSync(__dirname + "/" + fileName);
let directory = __dirname + "/" + arrayName;
if (!fs.existsSync(__dirname + "/" + arrayName)) {
  const directory = fs.mkdirSync(__dirname + "/" + arrayName);
}
let json = JSON.parse(data.toString());
let array = json[arrayName];
for (object in array) {
  fs.writeFileSync(
    directory + "/" + array[object].name.replace("/", "-") + ".json",
    JSON.stringify(array[object])
  );
}
