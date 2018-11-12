
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
import Trips from './trips';
class TripScreen extends Component{
  pickLocation = event =>  {
    const coords = event.nativeEvent.coordinate;
    this.setState(prevState => {
      return{
        focusedLocation: {
        ...prevState.focusedLocation,
        latitude: coords.latitude,
        longitude: coords.longitude
      }};
    })
  };
    static navigationOptions = {
        header:null}

        state = {
            ExploreItems: explores,
            focusedLocation: {
              latitude: 37.7900352,
              longitude: -122.4013726,
              latitudeDelta: 0.0122,
              longitudeDelta: 
              Dimensions.get("window").width /
               Dimensions.get("window").height * 0.0122,

            }
            
        }
  render() {
    return (
        <View style={{backgroundColor:'white' }}>
        <Text style={{ fontSize: 40, color: '#2f4f4f', marginBottom:15, fontWeight:'bold' }}> TRIP </Text>
     
       <View >
     <Trips/>
       </View>
       <View>
                   <MapView  
                   onPress={this.pickLocation}
                   initialRegion={this.state.focusedLocation}
                   region={this.state.focusedLocation}
                   style={styles.map}

                   />
                 </View>
                 
                 <Button title="locate me"/>
       </View>
    );
  }
}
const styles = StyleSheet.create({
    subCategories: {
       height: 120,
       width: 140,
       backgroundColor: "transparent",
       margin: 10,
       borderWidth: 1,
       borderColor: "#d3d3d3",
       borderRadius: 5
     },
     map:{
       width:"100%",
       height:250
     }
   });

export default TripScreen;

