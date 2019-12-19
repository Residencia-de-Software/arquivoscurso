import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/pages/HomeScreen';
import ListScreen from './src/pages/ListScreen';
import FormScreen from './src/pages/FormScreen';

const AppNavigation = createStackNavigator({
  Home: {screen: HomeScreen},
  List: {screen: ListScreen},
  Form: {screen: FormScreen},
});

const AppContainer = createAppContainer(AppNavigation);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
