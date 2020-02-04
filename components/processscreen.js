import React, { useState } from 'react';  
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Dropdown } from 'react-native'; 
//import head2styles from './app/styles/head2styles';

export default class Processscreen extends React.Component {
	render() {
		return (

			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headertxt}>Process Collection</Text>
				</View>

				    <View style={styles.bottomheader}>
          			<Text style={styles.bottomheadertxt}>#64654</Text>
        		</View>

        		<Text style={styles.WasteType}>Waste Type</Text>

            
        		<View style={styles.btncontainer}>
        			<Text style={styles.btnLeft}>2</Text>
        			<Text style={styles.btnRight}>2</Text>
        		</View>

        		<View style={styles.btn2}>
        			<Text style={styles.btntxt}>Save</Text>
        		</View>

        		<View style={styles.greybtn}>
        			<Text style={styles.btntxt}>FINALISE COLLECTION</Text>
        		</View>

        		<View style={styles.btn3}>
        			<Text style={styles.btntxt}>Scan waste partner collection note</Text>
        		</View>

        		<TouchableOpacity style={styles.greybtn} onPress={() =>  this.props.navigation.navigate('Signature')}> 
              <Text style={styles.btntxt}>FINALISE BOOKING</Text>
            </TouchableOpacity>

        		<View style={styles.btn3}>
        			<Text style={styles.btntxt}>PROCESS</Text>
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

  WasteType: {
  	fontSize: 18,
  	fontWeight: 'bold',
  	marginLeft: 10,
  	marginTop: 25,
  },

  btncontainer: {
  	width: 320,
  	flexDirection: 'row',
    color: '#fff',
  },

  btnLeft: {
  	width:100,
  	padding: 30,
  	backgroundColor: '#fff',
  	marginTop: 25,
  	marginLeft: 10,
  },

  btnRight: {
  	width:100,
  	padding: 30,
  	backgroundColor: '#fff',
  	marginTop: 25,
  	marginLeft: 10,
  },

   btn2: {
    borderRadius: 2,
    marginTop: 24,
    backgroundColor: '#0b7',
    width: 300,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    },

   btn3: {
    borderRadius: 2,
    marginTop: 24,
    backgroundColor: '#0b7',
    width: 300,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    },

   btn4: {
    borderRadius: 2,
    marginTop: 24,
    backgroundColor: '#0b7',
    width: 300,
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    },

  greybtn: {
    width: 300,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 2,
    marginTop: 24,
    backgroundColor: '#a5a5a5',
    padding: 10,
  },

  btntxt: {
    color: '#fff',
  }

});
