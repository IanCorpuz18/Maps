
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
class TripScreen extends Component{
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
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
       <View style={styles.subCategories}>
               <View>
                 <View style={{ height: 100 }}>
                   <Image source={{
             uri: this.state.ExploreItems[0].img}} 
             style={{
                     flex: 1,
                     width: null,
                     height: null,
                     resizeMode: 'stretch'
                   }} />
                   <Text style={{color:'black', fontSize:17, fontWeight:'normal'}}>{this.state.ExploreItems[0].name}</Text>
                </View>
               </View>
       </View>         
     
       <View style={styles.subCategories}>
               <View>
                 <View style={{ height: 100 }}>
                   <Image source={{
             uri: this.state.ExploreItems[1].img}} 
             style={{
                     flex: 1,
                     width: null,
                     height: null,
                     resizeMode: 'stretch'
                   }} />
                   <Text style={{color:'black', fontSize:17, fontWeight:'normal'}}>{this.state.ExploreItems[1].name}</Text>
                 </View>
                </View>
         </View>

         <View style={styles.subCategories}>
               <View>
                 <View style={{ height: 100 }}>
                   <Image source={{
             uri: this.state.ExploreItems[2].img}} 
             style={{
                     flex: 1,
                     width: null,
                     height: null,
                     resizeMode: 'stretch'
                   }} />
                   <Text style={{color:'black', fontSize:17, fontWeight:'normal'}}>{this.state.ExploreItems[2].name}</Text>
                 </View>
                </View>
         </View> 
         <View style={styles.subCategories}>
               <View>
                 <View style={{ height: 100 }}>
                   <Image source={{
             uri: this.state.ExploreItems[3].img}} 
             style={{
                     flex: 1,
                     width: null,
                     height: null,
                     resizeMode: 'stretch'
                   }} />
                   <Text style={{color:'black', fontSize:17, fontWeight:'normal'}}>{this.state.ExploreItems[3].name}</Text>
                 </View>
                </View>
         </View>
         <View style={styles.subCategories}>
               <View>
                 <View style={{ height: 100 }}>
                   <Image source={{
             uri: this.state.ExploreItems[4].img}} 
             style={{
                     flex: 1,
                     width: null,
                     height: null,
                     resizeMode: 'stretch'
                   }} />
                   <Text style={{color:'black', fontSize:17, fontWeight:'normal'}}>{this.state.ExploreItems[4].name}</Text>
                
                 </View>
                
                </View>
         </View>

       </ScrollView>  
       </View>
       <View>
                   <MapView  
                   initialRegion={this.state.focusedLocation}
                   style={styles.map}

                   />
                 </View>
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
