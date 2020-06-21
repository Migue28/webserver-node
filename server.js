const express = require("express");
const app = express();
const hbs = require("hbs");
require('./hbs/helpers')

app.use(express.static(__dirname + "/public"));

// Express HBS engine
hbs.registerPartials(__dirname + "/views/parciales");
app.set("view engine", "hbs");

app.get("/", function (req, res) {
  res.render("home.hbs", {
    name: "Eddy",
    year: new Date().getFullYear(),
  });
});

app.get("/about", function (req, res) {
  res.render("about.hbs", {
    year: new Date().getFullYear(),
  });
});

app.listen(3000, () => {
  console.log(`Escuchando puerto 3000`);
});
