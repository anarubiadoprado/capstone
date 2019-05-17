import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';


const Form = t.form.Form;


const logInForm = t.struct({
        username: t.String,
        password: t.Password,
        rememberMe: t.Boolean        // a boolean

    });
class LogInScreen extends Component {
    static navigationOptions = {
        title: 'LogIn Page'
    };

    render() {

        return(
          <View style= {styles.container}>
             <Form
                ref="form"
                type={logInForm}
               />

             <Button
                style= {styles.button}
                title="Log In"
                onPress={() => this.props.navigation.navigate('Profile')}
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
    },
    button: {
     backgroundColor: '#906FB3',
     padding: 25,
     borderRadius: 2,
    },
  });


export default LogInScreen;