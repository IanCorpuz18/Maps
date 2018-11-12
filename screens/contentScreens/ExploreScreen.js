
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image
} from 'react-native';
import { explores } from '../../contentImages';
import ExploreItems from './exploreContent/ExploreItems';
import DataItems from './exploreContent/DataItems';
import SavedItems from './exploreContent/SavedItems';
class ExploreScreen extends Component{
   
  render() {
    return (
        <ScrollView>
       <ExploreItems/>
       <DataItems/>
        <SavedItems/>
       </ScrollView>
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
     }
   });

export default ExploreScreen;