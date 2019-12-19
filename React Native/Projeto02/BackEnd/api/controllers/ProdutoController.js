class ProdutoController {
  constructor() {
    this._produtos = [
      {produto:"Notebook",preco: "1500"},
      {produto:"Televisão",preco: "1200"},
      {produto: "Chocolate",preco: "5"}
    ];
  }

  async listarProdutos() {
    return this._produtos;
  }

  async addProduto(produto) {
    this._produtos.push(produto);
  }
}

module.exports = ProdutoController;
