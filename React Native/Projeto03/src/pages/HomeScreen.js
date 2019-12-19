import React, {Component} from 'react';
import {Button} from 'react-native';

export default class Home extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <Button title="Exibir" onPress={() => navigate('List')} />
        <Button title="Cadastrar" onPress={() => navigate('Form')} />
      </>
    );
  }
}
