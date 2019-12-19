import React, { Component } from "react";
import { Text, FlatList, View, CheckBox, Button } from "react-native";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { list: props.navigation.getParam("state") };
  }

  static navigationOptions = {
    title: "Tarefas"
  };

  render() {
    return (
      <FlatList
        data={this.state.list}
        renderItem={({ item }) => (
          <ListItem />
        )}
      />
    );
  }
}

class ListItem extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <View style={{ flex: 1 }}>
          <CheckBox checked={this.state.list.executado} />
        </View>
        <View style={{ flex: 4 }}>
          <View>
            <Text style={{ fontWeight: "bold" }}>
              {this.state.list.tarefa}
            </Text>
          </View>
          <View>
            <Text>{this.props.list.descricao}</Text>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <Button
            title="Remover"
            color="#f00"
            onPress={() => {
              this.deletar(this.list.dados);
            }}
          />
        </View>
      </View>
    );
  }

  deletar = itemDelete => {
    this.setState({
      tarefas: this.state.list.filter(item => {
        return item !== itemDelete;
      })
    });
  };
}
