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

           <TouchableOpacity style={styles.button}>
           <Text style= {styles.btntext}>Sing Up</Text>
           </TouchableOpacity>
           </View>


        )
    }


}


const styles = StyleSheet.creare({
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
/*const singUpForm = t.struct({
        fullname: t.String,
        email: t.String,
        username: t.String,
        zipcode: t.maybe(t.Number),
        password: t.String
    });*/

export default singUpForm;