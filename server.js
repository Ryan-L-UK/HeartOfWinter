var fs = require("fs"),
  http = require("http");
const express = require("express");
const app = express();
const port = 8080;

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
  readDirectory("\\" + req.path.replace("/folders/", ""), res);
});

app.use("/Pages", express.static("Pages"));
app.use("/Sources", express.static("Sources"));
app.use("/Library", express.static("Library"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function readDirectory(folder, res) {
  console.log(folder);
  fs.readdir(__dirname + folder, (err, data) => {
    res.send(data);
  });
}
