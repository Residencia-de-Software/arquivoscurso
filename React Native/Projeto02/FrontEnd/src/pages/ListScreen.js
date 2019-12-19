import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {listar} from '../service/ProdutosService';

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    listar().then(res => {
      this.setState({list: res.data});
    });
  }

  render() {
    return (
      <>
        <View>
          <FlatList
            data={this.state.list}
            renderItem={({item}) => <Text>{item.produto}</Text>}
          />
        </View>
      </>
    );
  }
}

export default ListScreen;
