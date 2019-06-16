import React, { Component } from 'react';
import { View, Image, TouchableOpacity} from 'react-native';

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from '../src/screens/HomeScreen';
import ShoppingCart from '../src/screens/ShoppingCart';
import LoginScreen from '../src/screens/LoginScreen';
import RegisterScreen from '../src/screens/RegisterScreen';
import OrderHistory from '../src/screens/OrderHistory';
import ProductDetailScreen from '../src/screens/ProductDetailScreen';

class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
    
    
      <View style={{ flexDirection: 'column' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('../src/res/baseline_menu_black_18dp.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({
  const RootActivity_StackNavigator = createStackNavigator({
    //All the screen from the Screen1 will be indexed here
    First: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'SeacretDirect',
        headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
        // headerStyle: {
        //   backgroundColor: '#FF9800',
        // },
        // headerTintColor: '#fff',
      }),
    },
    Second: {
      screen: ProductDetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'ss',
        
      }),
    },
  });
//For React Navigation 3.+
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      title: '로그인',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      // headerStyle: {
      //   backgroundColor: '#FF9800',
      // },
      // headerTintColor: '#fff',
    }),
  },
});

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({

//For React Navigation 3.+
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: RegisterScreen,
    navigationOptions: ({ navigation }) => ({
      title: '회원가입',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      // headerStyle: {
      //   backgroundColor: '#FF9800',
      // },
      // headerTintColor: '#fff',
    }),
  },
});

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({

//For React Navigation 3.+
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: ShoppingCart,
    navigationOptions: ({ navigation }) => ({
      title: '장바구니',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      // headerStyle: {
      //   backgroundColor: '#FF9800',
      // },
      // headerTintColor: '#fff',
    }),
  },
});

const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: OrderHistory,
    navigationOptions: ({ navigation }) => ({
      title: '주문내역',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      // headerStyle: {
      //   backgroundColor: '#FF9800',
      // },
      // headerTintColor: '#fff',
    }),
  },
});





//For React Navigation 2.+ need to use DrawerNavigator instead createDrawerNavigator
//const DrawerNavigatorExample = DrawerNavigator({

//For React Navigation 3.+
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen0: {
    //Title
    screen: RootActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: '제품보기',
    },
  },

  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: '로그인',
    },
  },

  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: '회원가입',
    },
  },

  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: '장바구니',
    },
  },
  Screen4: {
    //Title
    screen: Screen4_StackNavigator,
    navigationOptions: {
      drawerLabel: '주문내역',
    },
  },
});

//For React Navigation 2.+ need to export App only
//export default DrawerNavigatorExample;
//For React Navigation 3.+
export default createAppContainer(DrawerNavigatorExample);
