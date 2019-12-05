import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chave: "Valor"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.chave}</h1>
      </div>
    );
  }
}

export class ListagemUsuario extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pessoas: ["joão", "maria"]
    };
  }

  render() {
    return (
      <ul>
        {this.state.pessoas.map(nome => (
          <li>{nome}</li>
        ))}
      </ul>
    );
  }
}

export default App;
