import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { t } from 'tcomb-form-native';
import SingUp from './components/SingUp';


class SingUpScreen extends Component {

     static navigationOptions = {
            title: 'SingUp Page'
        };


     handleSingUp = () => {
        const value = this.singUpForm.getValue(); // use that ref to get the form value
        console.log('value: ', value);
    }


    render(){
        return(
                <View style= {styles.container}>
                    <SingUp />
                </View>
                <View style= {styles.submit>
                <Button
                title="Sing Up"
                onPress = {this.handleSingUp}
                />
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
      border: 'black' 2,
    },
  });

export default SingUpScreen;