import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import style from './style';

export default class Telefone extends Component {
  render() {
    return (
      <View style={style.view}>
        <Text>Telefone</Text>
        <TextInput
          autoCompleteType="tel"
          style={style.input}
          placeholder="Digite se telefone"
          value={this.props.state}
          onChangeText={this.props.update}
        />
      </View>
    );
  }
}
