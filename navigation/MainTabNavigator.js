import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import RegisterScreen from '../screens/Register/RegisterScreen';
// import ConsultScreen from '../screens/Consult/ConsultScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import Colors from '../constants/Colors';

const RegisterStack = createStackNavigator({
  Register: RegisterScreen,
});

RegisterStack.navigationOptions = {
  tabBarLabel: 'Registrar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
  tabBarOptions:{
    // activeTintColor: '#f7c744', // active icon color
    //   nactiveTintColor: '#rgb(32, 53, 70)',  // inactive icon color
    //other properties
    style: {
      backgroundColor: 'rgb(32, 53, 70)',//color you want to change
      
    }
},
};

// const ConsultStack = createStackNavigator({
//   Consult: ConsultScreen,
// });

// ConsultStack.navigationOptions = {
//   tabBarLabel: 'Consultar',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
//     />
//   ),
// };

const LoginStack = createStackNavigator({
  Login: LoginScreen,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Cuenta',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
  tabBarOptions:{
  style: {
    backgroundColor: 'rgb(32, 53, 70)',//color you want to change
  }
},
};

export default createBottomTabNavigator({
  RegisterStack,
  // ConsultStack,
  LoginStack,
});
