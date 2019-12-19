import React, { Component } from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./pages/HomeScreen";
import FormScreen from "./pages/FormScreen";
import ListScreen from "./pages/ListScreen";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Form: { screen: FormScreen },
    List: { screen: ListScreen }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#008"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
