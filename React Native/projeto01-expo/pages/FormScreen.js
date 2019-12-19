import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

export default class Form extends Component {
  static navigationOptions = {
    title: "Nova Tarefa"
  };
  render() {
    return (
      <>
        <View style={{padding:15}}>
          <View>
            <Text>Tarefas</Text>
          </View>
          <View>
            <TextInput></TextInput>
          </View>
        </View>
        <View style={{padding:15}}>
          <View>
            <Text>Descrição</Text>
          </View>
          <View>
            <TextInput multiline></TextInput>
          </View>
        </View>
      </>
    );
  }
}
