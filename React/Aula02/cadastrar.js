let placa;
let cor;
let modelo;
let ano;

class Veiculo {
  constructor() {
    this.placa;
    this.cor;
    this.modelo;
    this.ano;
  }

  andrar(direcao) {
    if (direcao == "Frente") {
      console.log("Ir para Frente!");
    } else {
      console.log("Ir para Trás!");
    }
  }

  freiar() {
    console.log("Carro parou!");
  }
}

class Moto extends Veiculo {
  constructor() {
    this.eixo;
  }
}

let moto = new Moto();
