import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Regform from './app/components/Regform';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Regform />
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
    paddingLeft: 0,
    paddingRight: 0,      
  },
});
