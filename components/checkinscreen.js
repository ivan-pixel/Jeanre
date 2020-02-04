import React, { useState } from 'react';  
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button } from 'react-native'; 

export default class Checkinscreen extends React.Component {
	render() {
		return (

			<View style={styles.container}>
				<View style={styles.header}>
          <Text style={styles.headertxt}>Check in</Text>
        </View>

        <View style={styles.bottomheader}>
          <Text style={styles.bottomheadertxt}>TEAM Members</Text>
        </View>

        <View style={styles.teambrs}>
          
          <View style={styles.teamboxL}>
            <Text style={styles.Names}>Name Surname</Text>
            <Text style={styles.Datetxt}>DATE</Text>
            <Text style={styles.Timetxt}>TIME</Text>
          </View>

            <View style={styles.teamboxR}>
              <Text style={styles.Cirframe} onPress={() => this.props.navigation.navigate('CheckPIN')} />
            </View>
        </View>

        <View style={styles.teambrs}>
          
          <View style={styles.teamboxL}>
            <Text style={styles.Names}>Name Surname</Text>
            <Text style={styles.Datetxt}>DATE</Text>
            <Text style={styles.Timetxt}>TIME</Text>
          </View>

            <View style={styles.teamboxR}>
              <Text style={styles.Cirframe} onPress={() => this.props.navigation.navigate('CheckPIN')} />
            </View>
        </View>

        <View style={styles.teambrs}>
          
          <View style={styles.teamboxL}>
            <Text style={styles.Names}>Name Surname</Text>
            <Text style={styles.Datetxt}>DATE</Text>
            <Text style={styles.Timetxt}>TIME</Text>
          </View>

            <View style={styles.teamboxR}>
              <Text style={styles.Cirframe} onPress={() => this.props.navigation.navigate('CheckPIN')} />
            </View>
        </View>

        <View style={styles.teambrs}>
          
          <View style={styles.teamboxL}>
            <Text style={styles.Names}>Name Surname</Text>
            <Text style={styles.Datetxt}>DATE</Text>
            <Text style={styles.Timetxt}>TIME</Text>
          </View>

            <View style={styles.teamboxR}>
              <Text style={styles.Cirframe} onPress={() => this.props.navigation.navigate('CheckPIN')} />
            </View>
        </View>
      
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    width: 360,
    alignSelf: 'center',
  },

  header: {
    backgroundColor: '#0b8',
    padding: 21,
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
    padding:15,
  },

  teambrs: {
    width: 310,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderBottomRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    marginTop: 40,
    padding: 22,
    flexDirection: 'row',
  },

  teamboxL: {
    width: 155,
    alignSelf: 'center',
  },

  teamboxR: {
    width: 155,
    alignSelf: 'center',
    alignItems: 'right',
  },

  Names: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 18,
  },

  Datetxt: {
    color: 'grey',
    paddingBottom: 7,
  },

  Timetxt: {
    color: 'green',
  },

  Cirframe: {
    width: 50,
    height: 50,
    borderColor: 'green', borderWidth: 1,
    borderRadius: 100/2,
    marginLeft: 21,
  }

  }
);