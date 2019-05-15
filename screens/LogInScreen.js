import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';


const Form = t.form.Form;

const logInForm = t.struct({
        username: t.String,
        password: t.String
    });

class LogInScreen extends Component {
    static navigationOptions = {
        title: 'LogIn Page'
    };


    handleSubmit = () => {
        const value = this.logInForm.getValue(); // use that ref to get the form value
        console.log('value: ', value);
    }

    render() {
        return(
          <View style= {styles.container}>
             <Form
                ref="form"
                type={logInForm}
               />

             <Button
                title="Log In"
                onPress={this.handleSubmit}
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
    }
  });


export default LogInScreen;