import React, { useState } from 'react';  
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Dropdown, TextInput } from 'react-native'; 
//import head2styles from './app/styles/head2styles';

export default class Bookingscreen extends React.Component {
	render() {
		return (

			<View style={styles.container}>
				<View style={styles.header}>
          <Text style={styles.headertxt}>Book A Collection</Text>
        </View>
        
        <View style={styles.bottomheader}>
          <Text style={styles.bottomheadertxt}>Volvo Nelspruit</Text>
        </View>

        <View style={styles.waste}>
          <Text style={styles.wastetxt}>Waste Stream</Text>
        </View>
        
        <View style={styles.selcon}>
          <Text style={styles.sel1}>Bags</Text>
          <Text style={styles.sel2}>Quantity</Text>
        </View>

        <Text style={styles.comments}>Comments</Text>
        
        <View style={styles.commentcon}>
          <TextInput style={styles.textinput} placeholder="Add Comments" underlineColorAndroid={'transparent'} />
        </View>

        <View style={styles.streambtn}>
          <Text style={styles.streambtntxt}>Add Stream</Text>
        </View>

        <TouchableOpacity style={styles.streambtn} onPress={() =>  this.props.navigation.navigate('Process')}> 
          <Text style={styles.streambtntxt}>FINALISE BOOKING</Text>
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
  	padding: 30,
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

  waste: {
    alignSelf: 'left',
    padding: 10,
    marginTop: 20,
  },

  wastetxt: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0b7',
  },

  dropd: {
    alignSelf: 'center',
    height: 25,
    marginTop: 5,
  },

  selcon: {
    width: 300,
    flexDirection: 'row',
    marginTop: 21,
    alignSelf: 'center',
  },

  sel1: {
    width: 100,
    padding: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 6,
  },

  sel2: {
    width: 100,
    padding: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 22,
  },

  comments: {
    marginTop: 22,
    marginLeft: 22,
  },

  commentcon: {
    width: 320,
    alignSelf: 'center',
    marginTop: 22,
    backgroundColor: '#fff',
    padding: 22,
  },

  streambtn: {
    width: 320,
    alignSelf: 'center',
    marginTop: 22,
    backgroundColor: '#0b8',
    padding: 22,
  },

  streambtntxt: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },

  textinput: {
    alignSelf: 'left',
    marginBottom: 40,
  }

 }
);