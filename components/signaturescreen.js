import React, { useState } from 'react';  
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Dropdown } from 'react-native'; 
//import head2styles from './app/styles/head2styles';

export default class Signaturescreen extends React.Component {
	render() {
		return (

            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headertxt}>Add Signature</Text>
                </View>

                <View style={styles.bottomheader}>
                    <Text style={styles.bottomheadertxt}>#64654</Text>
                </View>

                <Text style={styles.maintxt}>Required Signatures</Text>

                <View style={styles.box}>
                    <Text style={styles.boxtxt}>Sorters</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.boxtxt}>Waste Partner</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.boxtxt}>Customer</Text>
                </View>

                <View style={styles.box}>
                    <Text style={styles.boxtxt}>Security</Text>
                </View>

                <View style={styles.savebtn}>
                    <Text style={styles.savebtntxt}>SAVE</Text>
                </View>

            </View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    width: 360,
    alignSelf: 'center',
  },

  header: {
    backgroundColor: '#0b8',
    padding: 25,
    color: '#fff',
    alignSelf: 'stretched',
  },

  headertxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
  },

  bottomheader: {
    alignSelf: 'stretched',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    backgroundColor: '#fff',
  },

  bottomheadertxt: {
    alignSelf: 'center',
    color: 'b5b5b5',
    fontSize: 16,
    padding:10,
  },

  box: {
    alignSelf: 'center',
    backgroundColor: '#fff',
    width: 300,
    padding: 22,
    marginTop: 30,
  },

  boxtxt: {
    alignSelf: 'left',
    marginLeft: 7,
  },

  savebtn: {
    width: 300,
    alignSelf: 'center',
    backgroundColor: '#0b8',
    padding: 21,
    marginTop: 22,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  savebtntxt: {
    alignSelf: 'center',
    color: '#fff',
  },

  maintxt: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#000',
    marginTop: 30,
  }
});