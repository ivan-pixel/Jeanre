import React, { useState } from 'react';  
import { Picker, StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native';

export default class ABcallscreen extends React.Component {
	render() {
		return (

			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headertxt}>Checklist</Text>
				</View>
				
        <View style={styles.bottomheader}>
          <Text style={styles.bottomheadertxt}>A&B Calls</Text>
        </View>

        <View style={styles.selectList}>
          <Text>Scania Alrode</Text>
          <Picker>

          </Picker>
        </View>

        <View style={styles.selectList2}>
          <Text>Adient</Text>
          <Picker></Picker>
        </View>

        <View style={styles.selectList2}>
          <Text>Angel Shack</Text>
          <Picker></Picker>
        </View>

        <View style={styles.callerLogBox}>
          <View style={styles.logbox1}>
            <Text style={styles.logDetails}>A - Call | 22 Nov</Text>
            <Text style={styles.logDetails}>A - Call | 22 Nov</Text>
          </View>

          <View style={styles.logbox2}>
            <TouchableOpacity style={styles.grnbtns}>
              <Text style={styles.grnbtntxt}>Done</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.grnbtns}>
              <Text style={styles.grnbtntxt}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>LOG A CALL</Text>
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
  	padding: 18,
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

  selectList: {
    width: 320,
    alignSelf: 'center',
    marginTop: 40,
    padding: 19,
    backgroundColor: '#fff',
  },

  selectList2: {
    width: 320,
    alignSelf: 'center',
    marginTop: 22,
    padding: 19,
    backgroundColor: '#fff',
  },

  callerLogBox: {
    width: 320,
    alignSelf: 'center',
    marginTop: 8,
    backgroundColor: '#fff',
    padding: 18,
    flexDirection: 'row',
  },

  logbox1: {
    width: 160,
    alignSelf: 'left',
    padding: 15,
  },

  logDetails: {
    alignSelf: 'left',
    marginTop: 18,
  },

  logbox2: {
    width: 160,
    alignSelf: 'right',
    padding: 15,
  },

  grnbtns: {
    width: 100,
    padding: 3,
    borderColor: '#0b7', borderWidth: 3,
    alignSelf: 'right',
    marginTop: 10,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  },

  grnbtntxt: {
    color: '#0b8',
    alignSelf: 'center',
  },

  btn: {
    width: 320,
    backgroundColor: '#0b8',
    padding: 18,
    alignSelf: 'center',
    marginTop: 40,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  },

  btntxt: {
    color: '#fff',
    alignSelf: 'center',
    fontWeight: 'bold',
  }

  });