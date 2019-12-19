"use strict";
module.exports = function(app) {
  var ProdutoController = require("../controllers/ProdutoController");
  var controller = new ProdutoController();

  app.route("/listar").get((req, res) => {
    controller.listarProdutos().then(produto => res.json(produto));
  });

  app.route("/cadastrar").post((req, res) => {
    let produto = req.body;
    res.json(controller.addProduto(produto));
  });
};
