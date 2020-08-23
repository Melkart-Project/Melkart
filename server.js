//Install express server
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist"));
app.listen(process.env.PORT || 8080);

//app.get("*", function (req, res) {
// res.sendFile(`./Melkart/src/index.html`);
//});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});

// Start the app by listening on the default Heroku port
console.log("console listening");
