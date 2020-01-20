import { AppRegistry, StyleSheet, Text, View, Navigator } from 'react-native';
import React from 'react';

export default class Nav extends Component {
	render() {
		return (
			<Navigator initialRoute = {{ id: 'Page1'}}
			renderScene = {this.navigatorRenderScene } />
		);
	}

	navigatorRenderScene(route, navigator) {
		switch (route.id) {
			case 'Page1':
				return ( <Page1 navigator = {navigator} /> )
		}
	}
}

class Page1 extends Component {
	render() {
		return (
			<Text>- This </Text>
		);
	}
}

AppRegistry.registerComponent('MyfirstApp', () => MyfirstApp);