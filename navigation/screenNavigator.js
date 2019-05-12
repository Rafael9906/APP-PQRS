
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ConsultScreen from '../screens/ConsultScreen';
import LoginScreen from '../screens/LoginScreen';
 
 
const StackNaviApp = StackNavigator({
    ConsultScreen: { screen: ConsultScreen},
    LoginScreen: { screen: LoginScreen},
   });
export default StackNaviApp;