var fs = require("fs"),
  http = require("http");

http
  .createServer(function (req, res) {
    fs.readFile(__dirname + decodeURI(req.url), function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(8080);
console.log("Server started successfully, do not close this terminal");
