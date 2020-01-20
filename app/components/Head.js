import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Head extends React.Component {
  render() {
    return (
      <View style={styles.head}>  
        <Text>Pandae</Text>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    width: 320,
    height: 40,
    padding: 70,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  }
});
