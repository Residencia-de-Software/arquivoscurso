import React, {Component} from 'react';
import {View, TextInput, Text, Button, Alert} from 'react-native';
import {cadastrar} from '../service/ProdutosService';

class FormScreen extends Component {
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
        <View>
          <View>
            <Text>Nome do Produto</Text>
          </View>
          <View>
            <TextInput
              value={this.state.produto}
              onChangeText={text => {
                this.setState({produto: text});
              }}
            />
          </View>
        </View>
        <View>
          <View>
            <Text
              value={this.state.preco}
              onChangeText={text => {
                this.setState({preco: text});
              }}>
              Preço do Produto
            </Text>
          </View>
          <View>
            <TextInput />
          </View>
        </View>
        <View>
          <Button
            title="Cadastrar"
            onPress={() => {
              cadastrar(this.state).then(() => {
                Alert.alert(
                  'Lista de Produtos',
                  'Produto Cadastrado com sucesso!',
                  [
                    {
                      text: 'Ok',
                    },
                  ],
                  {cancelable: false},
                );
              });
            }}
          />
        </View>
      </>
    );
  }
}

export default FormScreen;
