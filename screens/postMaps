import React, {Component} from 'react';
import { Text,
        View,
        StyleSheet} from 'react-native';




import MapView from 'react-native-maps';

class postOnMap extends Component {
//eventually set up a gps location

    _initialRegion = () => {
            latitude = 47.684234499999995,
            longitude = -122.3353602,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
            }

render() {
    return(
        <View style={styles.container}>
            <MapView
             style={styles.map}
              initialRegion = {this._initialRegion}
            >
                <MapView.Marker
                    coordinates= {{
                        latitude = 47.684234499999995,
                        longitude = -122.3353602,
                    }}>

                </MapView.Marker>
            </MapView>


        </View>
        );
    }
}

const styles= StyleSheet.create({
                container: {
                  flex: 1,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center'

                },
                map: {

                },


});
export default postOnMap;






