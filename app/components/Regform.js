import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Regform extends React.Component {
  render() {
  	return (
    	<View style={styles.regform}>
        	<Text style={styles.header}>Sign In</Text>

        	<TextInput style={styles.textinput} placeholder="Email" secureTextEntry={true} underlineColorAndroid={'transparent'} />
    	
    		<TextInput style={styles.textinput} placeholder="Password" underlineColorAndroid={'transparent'} />

    		<TouchableOpacity style={styles.button}>
    			<Text style={styles.btntext}>SIGN IN</Text>
    		</TouchableOpacity>	
    	</View>
  	);
  }
}

const styles = StyleSheet.create({
  regform: {
      alignSelf: 'center',
  },
  header: {
  	  fontSize: 24,
  	  color: '#fff',
  	  paddingBottom: 10,
  	  marginBottom: 10,
  	  borderBottomColor: '#199187',
  	  borderBottomWidth: 1,
  	  borderBottomRadius: 5,
  	  marginBottomShadow: 5,
  },
  textinput: {
  	alignSelf: 'stretch',
  	height: 40,
  	marginBottom: 10,
  	paddingLeft: 30,
  	color: '#000',
  	borderBottomColor: '#f8f8f8',
  	borderBottomWidth: 1,
  	backgroundColor: '#fff',
  },
  button: {
  	alignSelf: 'stretch',
  	alignItems: 'center',
  	padding: 20,
  	backgroundColor: '#0F7',
  	marginTop: 5,
  },
  btntext: {
  	color: '#fff',
  }
});
