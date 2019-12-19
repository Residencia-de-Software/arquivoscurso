import React, {Component} from 'react';
import {Button, View} from 'react-native';
import style from './style';

export default class Botao extends Component {
  render() {
    return (
      <View style={style.view}>
        <Button title="cadastrar" onPress={this.props.click} />
      </View>
    );
  }
}
