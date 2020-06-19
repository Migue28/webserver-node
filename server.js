const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'))

/* app.get("/", function (req, res) {
  const salida = {
    nombre: "Eddy",
    edad: 23,
    url: req.url,
  };
  res.send(salida)
});

app.get("/user", function (req, res) {
    res.send('Hola User')
  }); */

app.listen(3000, ()=> {console.log(`Escuchando puerto 3000`);});
