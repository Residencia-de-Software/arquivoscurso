import React, {Component} from 'react';
import {View, TextInput, Text} from 'react-native';
import style from './style';

export default class Email extends Component {
  render() {
    return (
      <View style={style.view}>
        <Text>E-mail</Text>
        <TextInput
          autoCompleteType="email"
          placeholder="Digite se email"
          style={style.input}
          value={this.props.state}
          onChangeText={this.props.update}
        />
      </View>
    );
  }
}
