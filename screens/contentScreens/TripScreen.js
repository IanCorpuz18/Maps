
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

import PickLocation from '../../assets/components/PickLocation';
class TripScreen extends Component {

  static navigationOptions = {
    header: null
  }
state= {
  location :{
    value: null,
    valid: false

  }
}
locatioPicked = location => {
  this.setState(prevState => {
    controls:{
      ...prevState.controls,
      location:{
        value: location,
        valid:true
      }
    }
  })
}
  render() {

    return (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={{ fontSize: 40, color: '#2f4f4f', marginBottom: 15, fontWeight: 'bold' }}> TRIP </Text>

        <View >
          <View style={styles.placeholder}>

          </View>
          <Text></Text>
          <Button title="pick Image" />
        </View>
        <PickLocation onLocationPick={this.locatioPicked}/>
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

export default TripScreen;

