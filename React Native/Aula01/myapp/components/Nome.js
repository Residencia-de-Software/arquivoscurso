import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import style from './style';

export default class Nome extends Component {
  render() {
    return (
      <View style={style.view}>
        <Text>Nome</Text>
        <TextInput
          style={style.input}
          placeholder="Digite se nome"
          value={this.props.state}
          onChangeText={this.props.update}
        />
      </View>
    );
  }
}
