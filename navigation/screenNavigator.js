
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ConsultScreen from '../screens/Consult/ConsultScreen';
import LoginScreen from '../screens//Login/LoginScreen';
 
 
const StackNaviApp = StackNavigator({
    ConsultScreen: { screen: ConsultScreen},
    LoginScreen: { screen: LoginScreen},
   });
export default StackNaviApp;
