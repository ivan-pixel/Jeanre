import React, { useState } from 'react';  
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';  

export default class Homescreen extends React.Component {
  render() {
    return (

    <View style={styles.container}>
        <View style={styles.content}>
            {/* */}

             <View style={styles.dash}>
                    <Text style={styles.title2}>Dashboard</Text>
             </View>   
        
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Check_in')}>
                <Text style={styles.checktxt}>CHECK IN</Text> 
              </TouchableOpacity>

              <TouchableOpacity style={styles.greybtn}>
                <Text style={styles.checktxt}>CHECKLISTS</Text>
              </TouchableOpacity>

              <View style={styles.holder}>
                
                <TouchableOpacity style={styles.btn3}>
                    <Text style={styles.btn3txt}>Incentives</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn4} onPress={() => this.props.navigation.navigate('ABcalls')}>
                    <Text style={styles.btn4txt}>A&B Calls</Text>
                </TouchableOpacity>
      
              </View>

                <TouchableOpacity style={styles.bookbtn} onPress={() => this.props.navigation.navigate('Booking')}>
                  <Text style={styles.booktxt}>BOOK A COLLECTION</Text> 
                </TouchableOpacity>

                <View style={styles.hold2}>

                  <TouchableOpacity style={styles.pendbtn}>
                    <Text style={styles.pendtxt}>Pending</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.collectbtn}>
                    <Text style={styles.collecttxt}>Collected</Text>
                  </TouchableOpacity>

                </View>
        </View>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9',
    width: 360,
    alignSelf: 'center',
  },
  
  content: {
  },

  dash: {
    backgroundColor: '#fff',
    height: 50,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
  },

  title2 : {
    color: '#000',
    alignSelf: 'center',
    marginTop: 14,
    fontSize: 18,
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

  holder: {
    width: 300,
    height:60,
    alignSelf: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#b5b5b5',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    flexDirection: 'row',
    
  },

  btn3: {
    width: 140,
    padding: 13,
    backgroundColor: '#0b7',
    alignItems: 'center',
    alignSelf: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 6,
  },

  btn3txt: {
    color: '#fff',
  },

  btn4: {
    width: 140,
    padding: 13,
    alignSelf: 'center',
    backgroundColor: '#0b7',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: 7,
  },

  btn4txt: {
    alignItems: 'center',
    color: '#fff',
  },

  bookbtn: {
    width: 300,
    padding: 10,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7',
    marginTop: 40,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  booktxt: {
    color: '#fff',
    fontWeight: 'bold',
  },

  hold2: {
    width: 300,
    padding: 10,
    flexDirection: 'row',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    
    alignItems: 'center',
  },

  pendbtn: {
    width: 150,
    padding:10,
    backgroundColor: '#a5a5a5',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 21,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },

  pendtxt: {
    color: '#fff',
    fontWeight: 'bold',
  },

  collectbtn: {
    width: 150,
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 21,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    alignItems: 'center',
  },

  collecttxt: {
    color: '#a5a5a5',
    fontWeight: 'bold',
  }
});
