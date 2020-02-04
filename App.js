import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dropdown } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Homescreen from './components/homescreen';
import Signinscreen from './components/signinscreen';
import Bookingscreen from './components/bookingscreen';
import Processscreen from './components/processscreen';
import Signaturescreen from './components/signaturescreen';
import Checkinscreen from './components/checkinscreen';
import Checkinpinscreen from './components/checkinpinscreen';
import Selfie from './components/selfie';
import ABcallscreen from './components/a&bcallscreen';
//import PickerExample from './components/picker';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

const AppNavigator = createStackNavigator({

  SignIn: {
    screen: Signinscreen
  },

  Home: {
    screen: Homescreen
  },
  Booking: {
    screen: Bookingscreen
  },

  Process: {
    screen: Processscreen
  },

  Signature: {
    screen: Signaturescreen
  },

  Check_in: {
    screen: Checkinscreen
  },

  CheckPIN: {
    screen: Checkinpinscreen
  },

  Selfiescreen: {
    screen: Selfie
  },

  ABcalls: {
    screen: ABcallscreen
  }

},{
      initialRouteName: 'SignIn'
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5e5e5e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
