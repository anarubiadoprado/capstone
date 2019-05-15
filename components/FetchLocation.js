import React from 'react';
import { Button } from 'react-native';

const fetchLocation = props => {
 	return(
 	    <View styles=
 		<Button title="Get Location" onPress={props.onGetLocation}/>
 	);
};

export default fetchLocation;




 /*
 render
 getUserLocationHandler = () => {
      navigator.geolocation.getCurrentPosition( position => {
          console.log(position);
        }, err => console.log(err));
      }

      registerUser = () => {
      console.log('Sing Up');
      return(
      <View style={styles.container}>

                <View style={styles.buttonLogin}>
                <FetchLocation onGetLocation={this.getUserLocationHandler} />
                </View>
                <View style={styles.buttonRegister}>
                <Register registerLink={this.registerUser} />
                </View>
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


        buttonLogin: {
          flex: 2,
          justifyContent: 'flex-end',
          padding: '1em';
          },

         buttonRegister: {
         flex: 2,
         justifyContent: 'flex-end',
         padding: '1em';
         marginBottom: '1em';
         },
        });
      }*/

