import React, {Component} from 'react';
import {FlatList} from 'react-native';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  render() {
    return (
      <>
        <FlatList data={this.state.list} renderItem={item => {}} />
      </>
    );
  }
}
