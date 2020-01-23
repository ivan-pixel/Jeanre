import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Homescreen from './app/components/Homescreen';
import SigninScreen from './app/components/Signinscreen';

export default class App extends React.Component {
  render() {
    return 

      <AppContainer />;
      <Head />;

     
  }
}

const AppNavigator = createStackNavigator({

  SignIn: {
    screen: SignInscreen
  },

  Home: {
    screen: Homescreen
  }
},{
      initialRouteName: "SignInScreen"
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
