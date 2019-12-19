/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, TextInput, View, Button, AsyncStorage, Alert} from 'react-native';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {tarefa: '', descricao: ''};
  }
  static navigationOptions = {
    title: 'Nova Tarefa',
  };
  render() {
    return (
      <>
        <View style={{padding: 15}}>
          <View>
            <Text>Tarefas</Text>
          </View>
          <View>
            <TextInput
              value={this.state.tarefa}
              onChangeText={text => this.setState({tarefa: text})}
            />
          </View>
        </View>
        <View style={{padding: 15}}>
          <View>
            <Text>Descrição</Text>
          </View>
          <View>
            <TextInput
              multiline
              value={this.state.descricao}
              onChangeText={text => this.setState({descricao: text})}
            />
          </View>
        </View>
        <View style={{padding: 15}}>
          <Button title="Cadastrar" onPress={this.cadastrar} />
        </View>
        <View style={{padding: 15}}>
          <Button title="Limpar" onPress={this.limpar} />
        </View>
      </>
    );
  }
  limpar = () => AsyncStorage.clear();
  cadastrar = () => {
    const novaTarefa = {
      tarefa: this.state.tarefa,
      descricao: this.state.descricao,
      executado: false,
    };
    AsyncStorage.getItem('tarefas').then(valueList => {
      if (valueList) {
        var list = JSON.parse(valueList);
      } else {
        var list = [];
      }
      list.push(novaTarefa);
      console.log({Lista: list});
      AsyncStorage.setItem('tarefas', JSON.stringify(list)).then(() => {
        this.setState({descricao: '', tarefa: ''});
        Alert.alert('Agenda de tarefas', 'Tarefa Cadastrada com Sucesso', [
          {text: 'Ok'},
        ]);
      });
    });
  };
}
