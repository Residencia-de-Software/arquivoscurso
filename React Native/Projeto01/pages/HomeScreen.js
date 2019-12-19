import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Agenda de Tarefas',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={style.screen}>
        <View style={style.line}>
          <Button onPress={() => navigate('List')} title="Listar Tarefas" />
        </View>
        <View style={style.line}>
          <Button onPress={() => navigate('Form')} title="Nova Tarefa" />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  screen: {flexDirection: 'column', justifyContent: 'center', flex: 1},
  line: {padding: 15},
});
