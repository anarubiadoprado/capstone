import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LogInScreen from '../screens/LogInScreen';
import SingUpScreen from '../screens/SingUpScreen';
import ProfileScreen from '../screens/ProfileScreen';

 const AppNavigator = createStackNavigator({
      Home: { screen: HomeScreen },
      LogIn: { screen: LogInScreen },
      SingUp: { screen: SingUpScreen },
      Profile: {screen: ProfileScreen},
    });


export default AppNavigator;