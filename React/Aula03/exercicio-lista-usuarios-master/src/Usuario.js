import React, { Component } from "react";
import { Button, Form, Container } from "react-bootstrap";
import Tabela from "./components/Tabela";
import Input from "./components/Input";

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
        <Container>
          <Form onSubmit={this.cadastrarUsuario}>
            <Input
              titulo="Nome"
              tipo="text"
              valor={this.state.nome}
              alterarCampo={evento => {
                this.setState({ nome: evento.target.value });
              }}
            />
            <Input
              titulo="E-mail"
              tipo="email"
              valor={this.state.email}
              alterarCampo={evento => {
                this.setState({ email: evento.target.value });
              }}
            />
            <Input
              titulo="Telefone"
              tipo="tel"
              valor={this.state.telefone}
              alterarCampo={evento => {
                this.setState({ telefone: evento.target.value });
              }}
            />
            <Button type="submit" variant="primary">
              Cadastrar
            </Button>
          </Form>
          <Tabela
            pessoas={this.state.pessoas}
            removerPessoa={this.removerUsuario}
          />
        </Container>
      </>
    );
  }

  cadastrarUsuario = evento => {
    evento.preventDefault();
    console.log(this.state.pessoas);
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
