import React, { Component } from "react";
import { Button, View, StyleSheet } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: [
        {
          tarefa: "Comprar Pão",
          descricao: "Ir a padaria comprar pão",
          executado: false
        },
        {
          tarefa: "Comprar Café",
          descricao: "Ir a padaria comprar café",
          executado: false
        }
      ]
    };
  }

  static navigationOptions = {
    title: "Agenda de Tarefas"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.screen}>
        <View style={style.line}>
          <Button
            onPress={() =>
              navigate("List", {
                state: this.state.tarefas,
                atualizar: this.atualizar
              })
            }
            title="Listar Tarefas"
          />
        </View>
        <View style={style.line}>
          <Button
            onPress={() => navigate("Form", this.state)}
            title="Nova Tarefa"
          />
        </View>
      </View>
    );
  }

  atualizar = tarefaDelete => {
    console.log({ tarefadeletar: tarefaDelete });
    console.log({ tarefasInicio: this.state.tarefas });
    this.setState({
      tarefas: this.state.tarefas.filter(tarefa => {
        return tarefa !== tarefaDelete;
      })
    });
    console.log({
      tarefasFinal: this.state.tarefas
    });
  };
}

const style = StyleSheet.create({
  screen: { flexDirection: "column", justifyContent: "center", flex: 1 },
  line: { padding: 15 }
});
