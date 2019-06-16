import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import DrawerContainer from './containers/DrawerContainer'

// const MainStack = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   ProductDetails: {
//     screen: ProductDetailScreen,
//   },
// }, {
//     initialRouteName: 'Home'
//   }
// );

// const RootStack = createDrawerNavigator(
//   {
//     Main: {
//       screen: MainStack,
//     },
//     SideMenu: {
//       screen: SideMenu,
//     },
//   }
// )



// const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {

  render() {
    return <DrawerContainer />;

  }
}


