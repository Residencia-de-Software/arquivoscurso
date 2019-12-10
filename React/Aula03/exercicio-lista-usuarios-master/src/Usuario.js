import React, { Component } from "react";
import "./App.css";

//Componentes de Classe
export default class CadastroUsuario extends Component {
  constructor() {
    super();
    this.state = {
      nome: "",
      telefone: "",
      email: "",
      pessoas: [
        {
          nome: "Maria",
          telefone: "22555555",
          email: "maria@maria.com.br"
        },
        {
          nome: "Pedro",
          telefone: "22555555",
          email: "pedro@pedro.com.br"
        },
        {
          nome: "Joao",
          telefone: "22555555",
          email: "joao@joao.com.br"
        }
      ]
    };
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
          />
          <input
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={evento => {
              this.setState({ email: evento.target.value });
            }}
          />
          <input
            type="tel"
            placeholder="Telefone"
            value={this.state.telefone}
            onChange={evento => {
              this.setState({ telefone: evento.target.value });
            }}
          />
          <input type="submit" />
        </form>
        <table>
          {this.state.pessoas.map((pessoa, index) => (
            <tr>
              <td>{pessoa.nome}</td>
              <td>{pessoa.telefone}</td>
              <td>{pessoa.email}</td>
              <td>
                <button onClick={() => this.removerUsuario(index)}>
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </table>
      </>
    );
  }

  cadastrarUsuario = evento => {
    evento.preventDefault();
    this.setState({
      pessoas: [
        ...this.state.pessoas,
        {
          nome: this.state.nome,
          telefone: this.state.telefone,
          email: this.state.email
        }
      ],
      nome: "",
      telefone: "",
      email: ""
    });
  };

  removerUsuario = index => {
    const pessoas = this.state.pessoas;
    this.setState({
      pessoas: [...pessoas.slice(0, index), ...pessoas.slice(index + 1)]
    });
  };
}
