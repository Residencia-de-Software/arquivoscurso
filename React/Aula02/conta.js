class Conta {
  constructor(saldo) {
    this.banco;
    this.agencia;
    this.conta;
    this.saldo = saldo | 0;
  }

  imprimirSaldo() {
    console.log(`Seu saldo é: ${this.saldo}`);
  }

  depositar(deposito) {
    this.saldo += deposito;
    this.imprimirSaldo();
  }

  sacar(saque) {
    if (saque > this.saldo) {
      console.log(`Tá de brincadeira comigo?`);
      this.imprimirSaldo();
      return;
    }
    this.saldo -= saque;
    this.imprimirSaldo();
  }

  transferir(destinatario, valor) {
    if (this.saldo < valor) {
      console.log("Ah tá bom bonitão! Vai transferir sim.");
      this.imprimirSaldo();
    } else {
      this.saldo -= valor;
      destinatario.depositar(valor);
    }
  }
}

class ContaPessoaFisica extends Conta {
  constructor(saldo) {
    super(saldo);
    this.nome;
    this.cpf;
  }

  imprimirSaldo() {
    console.log(`Seu saldo é: ${this.saldo} seu burgues safado!`);
  }
}

class ContaPessoaJuridica extends Conta {
  constructor(saldo) {
    super(saldo);
    this.razaoSocial;
    this.cnpj;
  }

  imprimirSaldo() {
    console.log(`Seu saldo é: ${this.saldo} sua empresa capitalista!`);
  }
}

const minhaConta = new ContaPessoaFisica(1000);
const suaConta = new ContaPessoaJuridica();

minhaConta.imprimirSaldo();
minhaConta.depositar(100);
minhaConta.sacar(500);
minhaConta.transferir(suaConta, 700);
