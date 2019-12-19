var bodyParser = require("body-parser");
var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Content-Type", "application/json");
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

var routesProdutos = require("./api/routes/ProdutosRoutes"); //importing route
routesProdutos(app); //register the route

app.listen(port, () => {
  console.log("Eventos RESTful API server npm run start on: " + port);
});
