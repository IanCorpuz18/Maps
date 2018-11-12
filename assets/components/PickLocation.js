
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
import MapView from 'react-native-maps';
import { explores } from '../../contentImages';
class PickLocation extends Component {
    pickLocation = event => {
        const coords = event.nativeEvent.coordinate;
        this.map.animateToRegion({
            ...this.state.focusedLocation,
            latitude: coords.latitude,
            longitude: coords.longitude
        });
        this.setState(prevState => {
            return {
                focusedLocation: {
                    ...prevState.focusedLocation,
                    latitude: coords.latitude,
                    longitude: coords.longitude
                },
                locationChosen: true
            };
        })
    };
    getLocation = () => {
        navigator.geolocation.getCurrentPosition(
            pos => {
                const coordsEvent = {
                    nativeEvent: {
                        coordinate: {
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude,
                        }
                    }
                };
                this.pickLocation(coordsEvent);
            },
            err => {
                console.log(err);
                alert("Fetching the Position failed, please pick manually!");
            }
        )
    }

    state = {

        location: {
            value: null,
            valid: false
        },
        focusedLocation: {
            latitude: 14.564079,
            longitude: 121.022141,
            latitudeDelta: 0.0122,
            longitudeDelta:
                Dimensions.get("window").width /
                Dimensions.get("window").height * 0.0122,

        },
        locationChosen: false

    }

    render() {
        let marker = null;
        if (this.state.locationChosen) {
            marker = <MapView.Marker coordinate={this.state.focusedLocation} pinColor="#FFFF00" />
        }
        return (

            <View>
                <View>
                    <MapView
                        onPress={this.pickLocation}
                        initialRegion={this.state.focusedLocation}

                        style={styles.map}
                        ref={ref => this.map = ref}
                    >
                        {marker}
                    </MapView>
                </View>

                <Button title="locate Mervs" onPress={this.getLocation} />
            </View>
        )
    }

}

const styles = StyleSheet.create({

    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#d3d3d3',
        width: '80%',
        height: 150,
        alignSelf: 'center',

    },
    map: {
        width: "100%",
        height: 250
    }
});


export default PickLocation;