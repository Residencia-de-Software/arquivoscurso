import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';

export default class Form extends Component {
  render() {
    return (
      <>
        <Text>Produto</Text>
        <TextInput />
        <Text>Valor</Text>
        <TextInput />
      </>
    );
  }
}
