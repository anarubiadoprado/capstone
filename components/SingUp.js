import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button
    } from 'react-native';

import t from 'tcomb-form-native';


class SingUpForm extends Component {

    /* handleSingUp = () => {
            //return value = this.SingUpForm.getValue().then() => {
              onPress={() => { this.props.navigation.navigate('LogIn')};
            // use that ref to get the form value
            console.log('value: ', value);
        };*/

    render() {
        return(

        <View style={styles.singup}>
         <Text style={styles.formtitle}> Sing Up </Text>

          <TextInput style={styles.textinput} placeholder='First Name'
             underlineColor={'trasparent'} />
          <TextInput style={styles.textinput} placeholder='Last Name'
                          underlineColor={'trasparent'} />
          <TextInput style={styles.textinput} placeholder='email'
                           underlineColor={'trasparent'} />

          <TextInput style={styles.textinput} placeholder='password'
           secureTextEntry={true} underlineColor={'trasparent'} />

           <TouchableOpacity style={styles.button}
               onPress ={() => this.props.navigation.navigate('LogIn')} >
           <Text style= {styles.btntext}>Sing Up</Text>
           </TouchableOpacity>
           </View>
        )
    }


}


const styles = StyleSheet.create({
    singup: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    },
    formtitle: {
    flexDirection: 'row',
    fontFamily: 'American Typewriter',
    color: '#566CAD',

    },
    textinput: {
    borderWidth: 2,
    flexDirection: 'column',
    },
    button: {
    flexDirection: 'column',
    backgroundColor: '#566CAD',
    paddingTop: 3,
    },
    btntext: {
    color: '#FFFFFF',
    fontFamily: 'American Typewriter',

    },


});
export default SingUpForm;