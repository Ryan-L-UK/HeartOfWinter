var fs = require("fs"),
  http = require("http");
const express = require("express");
const app = express();
const port = 8080;

app.use("/Pages", express.static(__dirname + "/Pages"));
app.use("/Sources", express.static(__dirname + "/Sources"));
app.use("/Foundry", express.static(__dirname + "/Foundry"));
app.get("/", (req, res) => {
  fs.readFile(__dirname + "/Index.html", (err, data) => {
    if (err) {
      console.log("Failed to load file");
      res.writeHead(404);
      res.end(JSON.stringify(err));
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
});

app.get("/folders/*", (req, res) => {
  console.log(req.path);
  readDirectory("/" + req.path.replace("/folders/", ""), res);
});

app.get("/sources/:sourceType", (req, res) => {
  let filePath = "/Sources/" + req.params.sourceType;
  fs.readdir(__dirname + filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
    } else {
      const jsonFiles = data.filter((name) => name.includes(".json"));
      let promises = [];
      for (var file in jsonFiles) {
        promises.push(readFile(filePath, jsonFiles[file]));
      }

      Promise.all(promises).then((values) => {
        let output = [];
        for (let index in values) {
          let value = values[index];
          output.push(JSON.parse(value));
        }
        res.send(output);
      });
    }
  });
});

app.listen(port, () =>
  console.log("Server started successfully, do not close this terminal")
);

function readDirectory(folder, res) {
  console.log(folder);
  fs.readdir(__dirname + folder, (err, data) => {
    res.send(data);
  });
}

function readFile(filePath, file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(__dirname + filePath + "/" + file, function (err, data) {
      if (err) reject(err);
      else resolve(data);
    });
  });
}
