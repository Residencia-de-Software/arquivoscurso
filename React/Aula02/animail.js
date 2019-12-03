class animal {
  constructor() {
    this.patas;
    this.alimentacao;
  }

  andar() {
    console.log("O animal andou");
  }
}

class Cachorro extends animal {
  constructor() {
    super();
    this.pulga;
  }

  latir() {
    console.log("O cachorro latiu!");
  }

  andar() {
    console.log("O Cachorro andou!");
  }
}

class Gato extends animal {
  constructor() {
    super();
    this.bolaDePelo;
  }

  miar() {
    console.log("O gato miou!");
  }
}

class Lagarto extends animal {
  constructor() {
    super();
    this.lingua;
  }

  comerMosca() {
    console.log("O lagarto comeu um mosca!");
  }
}

class Dromedario extends animal {
  constructor() {
    super();
    this.corcova;
  }

  fazerCoisasDeDromedario() {
    console.log("O Dromedario fez suas coisas!");
  }
}

const listaCachorros = [];
const listaAnimais = [];
const listaGatos = [];

let cachorrao = new Cachorro();
let gatao = new Gato();

listaAnimais.push(cachorrao, gatao);

listaAnimais.forEach(animal => {
  if (animal instanceof Cachorro) {
    listaCachorros.push(animal);
  } else if (animal instanceof Gato) {
    listaGatos.push(animal);
  }
});

cachorrao.latir();
gatao.miar();
cachorrao.andar();
gatao.andar();
