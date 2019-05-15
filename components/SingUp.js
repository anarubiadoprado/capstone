import React, { Component } from 'react';
import { StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Button
    } from 'react-native';

import t from 'tcomb-form-native';


class SingUpForm extends Component {

     handleSingUp = () => {
            const value = this.SingUpForm.getValue(); // use that ref to get the form value
            console.log('value: ', value);
        };

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
               onPress = {this.handleSingUp}>
           <Text style= {styles.btntext}>Sing Up</Text>
           </TouchableOpacity>
           </View>


        )
    }


}


const styles = StyleSheet.create({
    singup: {

    },
    formtitle: {

    },
    textinput: {
    },
    button: {
    },
    btntext: {
    }


});
export default SingUpForm;