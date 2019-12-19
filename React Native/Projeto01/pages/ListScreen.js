/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  FlatList,
  View,
  CheckBox,
  Button,
  AsyncStorage,
} from 'react-native';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [],
    };
  }

  static navigationOptions = {
    title: 'Tarefas',
  };

  componentDidMount() {
    AsyncStorage.getItem('tarefas').then(value => {
      if (value) {
        this.setState({
          tarefas: JSON.parse(value),
        });
      } else {
        this.setState({tarefas: []});
      }
    });
  }

  render() {
    return (
      <>
        <FlatList
          data={this.state.tarefas}
          renderItem={({item}) => (
            <ListItem
              tarefa={item}
              deletarItem={this.deletar}
              statusTarefa={this.modificarStatus}
            />
          )}
        />
      </>
    );
  }

  deletar = tarefaDelete => {
    const novaLista = this.state.tarefas.filter(tarefa => {
      return tarefa !== tarefaDelete;
    });
    console.log({tarefas: novaLista});
    AsyncStorage.setItem('tarefas', JSON.stringify(novaLista));
    this.setState({tarefas: novaLista});
  };

  modificarStatus = tarefaModificar => {
    console.log({porrdatarefa: tarefaModificar});
    this.setState({
      tarefas: this.state.tarefas.map(tarefa => {
        if (tarefaModificar === tarefa) {
          return {
            ...tarefaModificar,
            executado: !tarefaModificar.executado,
          };
        }
      }),
    });
    console.log(JSON.stringify(this.state));
  };
}

class ListItem extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
        <View style={{flex: 1}}>
          <CheckBox
            checked={this.props.tarefa.executado}
            onValueChange={() => this.props.statusTarefa(this.props.tarefa)}
          />
        </View>
        <View style={{flex: 4}}>
          <View>
            <Text style={{fontWeight: 'bold'}}>{this.props.tarefa.tarefa}</Text>
          </View>
          <View>
            <Text>{this.props.tarefa.descricao}</Text>
          </View>
        </View>
        <View style={{flex: 2}}>
          <Button
            title="Remover"
            color="#f00"
            onPress={() => {
              this.props.deletarItem(this.props.tarefa);
            }}
          />
        </View>
      </View>
    );
  }
}
