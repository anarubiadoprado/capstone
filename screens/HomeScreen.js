import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, LocationButton } from 'react-native';


class HomeScreen extends Component {
       static navigationOptions = {
            title: 'Welcome to GirlsOut'
        };


  render() {
  return (
        <View style= {styles.container}>
        <Button
          style= {styles.button}
          title="Sing Up"
          onPress={() => this.props.navigation.navigate('SingUp')}
        />
        <Button
            style= {styles.button}
            title="Login In"
            onPress={() => this.props.navigation.navigate('LogIn')}
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


export default HomeScreen;



