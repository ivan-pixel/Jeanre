import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

export default class Signinscreen extends React.Component {
  render() {
  	return (

    <View style={styles.container}> 
    	<View style={styles.regform}>
        	<Text style={styles.header}>Sign In</Text>

        <View style={styles.formwidth}>
        		<TextInput style={styles.textinput} placeholder="Email" secureTextEntry={true} underlineColorAndroid={'transparent'} />
    	
    			 <TextInput style={styles.textinput} placeholder="Password" underlineColorAndroid={'transparent'} />

    			 <TouchableOpacity style={styles.button} onPress={() =>  this.props.navigation.navigate('Home')}>
    			   <Text style={styles.btntext}>Sign In</Text>
    			 </TouchableOpacity>

    			 <Text style={styles.forgotpass}>Forgot Password?</Text>	
    		</View>
    	</View>
    </View>
    
  	);
  }
}

const styles = StyleSheet.create({
  regform: {
      alignSelf: 'stretch',
      marginTop: 50,
  },

  formwidth: {
  	width: 320,
  	alignSelf: 'center',
  },
  header: {
  	  alignSelf: 'center',
  	  fontSize: 30,
  	  color: '#000',
  	  paddingBottom: 25,
  	  marginBottom: 25,
  },
  textinput: {
  	alignSelf: 'stretch',
  	height: 40,
  	marginBottom: 10,
  	paddingLeft: 22,
  	color: '#000',
  	borderBottomColor: '#f8f8f8',
  	borderBottomWidth: 1,
  	backgroundColor: '#fff',
  },
  button: {
  	alignSelf: 'stretch',
  	alignItems: 'center',
  	padding: 10,
  	backgroundColor: '#0b7',
  	marginTop: 5,
  },
  btntext: {
  	color: '#fff',
  	fontWeight: 'bold',
  },
  forgotpass: {
  	color: '#000',
  	alignSelf: 'center',
  	fontSize: 16,
  	marginTop:30,
  }
});
