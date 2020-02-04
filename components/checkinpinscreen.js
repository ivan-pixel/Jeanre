import React, { useState } from 'react';  
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Dropdown } from 'react-native'; 
//import head2styles from './app/styles/head2styles';

export default class Checkinpinscreen extends React.Component {
	render() {
		return (

			<View style={styles.container}>
		    <View style={styles.header}>
          <Text style={styles.headertxt}>Check in - PIN</Text>
        </View>

        <View style={styles.bottomheader}>
          <Text style={styles.bottomheadertxt}>Employee Name</Text>
        </View>

        <View style={styles.circle}></View>

        <View style={styles.pincontainer}>
          <Text style={styles.txtpin}>Enter Pin</Text>
        </View>

        <View style={styles.pincontainer}>   
          <Text style={styles.digits}></Text>
          <Text style={styles.digits}></Text>
          <Text style={styles.digits}></Text>
          <Text style={styles.digits}></Text>
        </View>

        <TouchableOpacity style={styles.btn} onPress={() =>  this.props.navigation.navigate('Selfiescreen')}>
          <Text style={styles.btntxt}>Next</Text>
        </TouchableOpacity>   
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
    padding: 22,
    color: '#fff',
    alignSelf: 'stretched',
  },

  headertxt : {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 18,
  },

  bottomheader: {
    alignSelf: 'stretched',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: '#fff',
  },

  bottomheadertxt: {
    alignSelf: 'center',
    color: 'b5b5b5',
    fontSize: 16,
    padding:10,
  },

  circle: {
    width: 75,
    height: 75,
    borderColor: '#0b8', borderWidth: 3,
    borderRadius: 100/2,
    alignSelf: 'center',
    marginTop: 19,
  },

  txtpin: {
    alignSelf: 'left',
    marginLeft: 0,
    fontSize: 19,
    marginTop: 25,
    fontWeight: 'bold',
  },

  pincontainer: {
    width: 320,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  digits: {
    width: 70,
    alignSelf: 'center',
    borderColor: '#0b8', borderWidth: 1,
    height: 60,
    justifyContent: 'space-between',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    marginTop: 10,
  },

  btn: {
    width: 320,
    backgroundColor: '#0b8',
    alignSelf: 'center',
    marginTop: 50,
    padding: 20,
  },

  btntxt: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
  }

   }
);