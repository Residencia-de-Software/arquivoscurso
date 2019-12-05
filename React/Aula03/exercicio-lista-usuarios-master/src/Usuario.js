import React, { Component } from "react";
import "./App.css";

//Componentes de Classe
export default class CadastroUsuario extends Component {
  constructor() {
    super();
    this.state = { nome: "", pessoas: ["Maria", "Pedro", "Joana"] };
  }

  render() {
    return (
      <>
        <form onSubmit={this.cadastrarUsuario}>
          <input
            type="text"
            placeholder="Nome"
            value={this.state.nome}
            onChange={evento => {
              this.setState({ nome: evento.target.value });
            }}
            id="input"
          />
          <input type="submit" onClick={evento => this.cadastrarUsuario} />
        </form>
        <ul>
          {this.state.pessoas.map(pessoa => (
            <li>{pessoa}</li>
          ))}
        </ul>
      </>
    );
  }

  cadastrarUsuario = evento => {
    evento.preventDefault();
    let entrada = document.getElementById("input");
    this.setState({
      pessoas: [...this.state.pessoas, entrada.value],
      nome: ""
    });
  };
}
