import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet, Button} from 'react-native';

export default class Tabela extends Component {
  render() {
    return (
      <>
        <View style={style.row}>
          <View style={style.col}>
            <Text style={style.title}>Nome</Text>
          </View>
          <View style={style.col}>
            <Text style={style.title}>Email</Text>
          </View>
          <View style={style.col}>
            <Text style={style.title}>Telefone</Text>
          </View>
          <View style={style.col}>
            <Text style={style.title}>Opções</Text>
          </View>
        </View>
        <FlatList
          data={this.props.list}
          renderItem={({item}) => (
            <View style={style.row}>
              <View style={style.col}>
                <Text>{item.nome}</Text>
              </View>
              <View style={style.col}>
                <Text>{item.email}</Text>
              </View>
              <View style={style.col}>
                <Text>{item.telefone}</Text>
              </View>
              <View style={style.col}>
                <Button
                  title="Remover"
                  color="#ff5c5c"
                  onPress={() => this.props.delete(item)}
                />
              </View>
            </View>
          )}
        />
      </>
    );
  }
}

const style = StyleSheet.create({
  row: {flexDirection: 'row'},
  col: {
    flexDirection: 'column',
    flex: 1,
    borderColor: '#000000',
    borderWidth: 1,
  },
  title: {color: '#221454', fontWeight: 'bold', backgroundColor: '#dddddd'},
});
