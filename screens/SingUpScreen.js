import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { t } from 'tcomb-form-native';
import SingUpForm from '../components/SingUp';


class SingUpScreen extends Component {

     static navigationOptions = {
            title: 'SingUp Page'
        };




    render(){
        return(
                <View style= {styles.container}>
                <SingUpForm />
                </View>
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

export default SingUpScreen;