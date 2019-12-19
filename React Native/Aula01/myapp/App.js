import React, {Component} from 'react';
import Tabela from './components/Tabela';
import Email from './components/Email';
import Nome from './components/Nome';
import Telefone from './components/Telefone';
import Botao from './components/Botao';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      telefone: '',
      pessoas: [
        {
          nome: 'Rodolfo Scarp',
          email: 'rodolfo@rodolfo.com.br',
          telefone: '2422552255',
        },
        {
          nome: 'MadMax',
          email: 'madmax@madmax.com.br',
          telefone: '2422522252',
        },
      ],
    };
  }
  render() {
    return (
      <>
        <Nome
          state={this.state.nome}
          update={text => this.setState({nome: text})}
        />
        <Telefone
          state={this.state.telefone}
          update={text => this.setState({telefone: text})}
        />
        <Email
          state={this.state.email}
          update={text => this.setState({email: text})}
        />
        <Botao click={this.cadastrarUsuario} />
        <Tabela list={this.state.pessoas} delete={this.deletarUsuario} />
      </>
    );
  }

  cadastrarUsuario = () => {
    this.setState({
      pessoas: [
        ...this.state.pessoas,
        {
          nome: this.state.nome,
          email: this.state.email,
          telefone: this.state.telefone,
        },
      ],
    });
  };

  deletarUsuario = deletePessoa => {
    this.setState({
      pessoas: this.state.pessoas.filter(pessoa => deletePessoa !== pessoa),
    });
  };
}
