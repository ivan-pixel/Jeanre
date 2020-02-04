import React, { useState } from 'react';  
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Dropdown } from 'react-native'; 
//import head2styles from './app/styles/head2styles';

export default class Selfie extends React.Component {
	render() {
		return (

			<View style={styles.container}>
				<View style={styles.header}>
          			<Text style={styles.headertxt}>Check in</Text>
        		</View>

        		<Text style={styles.frametxt}>Position your face <br />    in the frame</Text>

        		<View style={styles.frameborder}></View>

        		<TouchableOpacity style={styles.greybtn}>
        			<Text style={styles.checktxt}>TAKE PHOTO</Text>
        		</TouchableOpacity>

        		<TouchableOpacity style={styles.button}>
        			<Text style={styles.checktxt}>NEXT</Text>
        		</TouchableOpacity>
        	</View>
       	);
  	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9a9a9',
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

  frametxt: {
  	alignSelf: 'center',
  	marginTop: 80,
  	color: '#fff',
  },

  frameborder: {
  	width: 190,
  	height: 250,
  	borderColor: '#0b7', borderWidth: 3,
  	alignSelf: 'center',
  	marginTop: 10,
  },

  button: {
    borderRadius: 2,
    marginTop: 24,
    backgroundColor: '#0b7',
    width: 300,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    },

  checktxt: {
    color: '#fff',
    fontWeight: 'bold',
  },

  greybtn: {
    width: 300,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 2,
    marginTop: 34,
    backgroundColor: '#c1c1c1',
    padding: 10,
  },

  }
);