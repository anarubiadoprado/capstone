import React, {Component} from 'react';
import { Button, Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';




class Profile extends Component{
static navigationOptions = {
            title: 'Your Profile'
        };

    profileName = () => {
     this.state('profileName' = 'Ana');
    };

    _makeAPost = () => {
        this.props.navigation.navigate('MakeAPost');
        };



render() {

return(
    <View style={styles.container}>
    <Button style={styles.addButton} onPress = {this._makeAPost} />
    <Image style={styles.avatar source={{}} />
    <Text style= {styles.register}>Welcome back, (this.profileName) </Text>
    <Text style={styles.alertsTitle}>Alerts you have created: </Text>

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
    avatar: {

    },
    bodyContainer: {

    },
    register: {
    },
    alertsContainer: {
    },
    alertsTitle: {
    },
  });

export default Profile;