import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

export default class Tabela extends Component {
  render() {
    return (
      <>
        <Table striped bordered hover>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Remover</th>
          </tr>
          {this.props.pessoas.map((pessoa, index) => (
            <tr>
              <td>{pessoa.nome}</td>
              <td>{pessoa.telefone}</td>
              <td>{pessoa.email}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => this.props.removerPessoa(index)}
                >
                  Remover
                </Button>
              </td>
            </tr>
          ))}
        </Table>
      </>
    );
  }
}
