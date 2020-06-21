const express = require("express");
const app = express();
const hbs = require("hbs");

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

app.get("/user", function (req, res) {
  res.send("Hola User");
});

app.listen(3000, () => {
  console.log(`Escuchando puerto 3000`);
});
