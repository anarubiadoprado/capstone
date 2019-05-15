import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LogInScreen from './screens/LogInScreen';
import SingUpScreen from './screens/SingUpScreen';
import AppNavigator from './components/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);


class App extends Component {
  render() {
  return (
            <AppContainer />

          );
    }
}

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default App;







