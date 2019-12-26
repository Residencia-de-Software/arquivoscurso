import React, {Component} from 'react';
import {Text, TextInput, Button} from 'react-native';
import {cadastrarProduto} from '../services/ServicesProdutos';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produto: '',
      preco: '',
    };
  }

  render() {
    return (
      <>
        <Text>Produto</Text>
        <TextInput
          value={this.state.produto}
          onChangeText={text => {
            this.setState({produto: text});
          }}
        />
        <Text>Valor</Text>
        <TextInput
          value={this.state.preco}
          onChangeText={text => {
            this.setState({preco: text});
          }}
        />
        <Button
          title="Cadastrar"
          onPress={() => cadastrarProduto(this.state)}
        />
      </>
    );
  }
}
