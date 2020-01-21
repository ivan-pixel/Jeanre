import { AppRegistry, StyleSheet, Text, View, Navigator } from 'react-native';
import React from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Head from './app/components/Head';
import Regform from './app/components/Regform';
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  MainScreen: {
  screen: MainScreen,
  navigationOptions: {
  headerShown: false,
    },
  },
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen,
  CollectionScreen: CollectionScreen,
  ChecklistScreen: ChecklistScreen,
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Head />
          <Regform />
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    paddingLeft: 0,
    paddingRight: 0,      
  },
});
