import { AppRegistry, StyleSheet, Text, View, Navigator } from 'react-native';
import React from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Head from './app/components/Head';
import Regform from './app/components/Regform';
import 'react-native-gesture-handler';
import Nav from './app/Nav/Navigation';
//import { createStackNavigator, createAppContainer } from 'react-navigation';

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
