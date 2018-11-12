import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import  { saved_list } from '../../../contentImages';

class SavedItems extends Component {
    state = {
        
        SavedItems: saved_list
    };

  render() {
    return (
      <View style={{backgroundColor:'white' }}>
         <Text style={{ fontSize: 30, color: '#808080', marginBottom:15, fontWeight:'normal' }}> Stockholm </Text>
      
        <View >
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <View style={styles.subCategories}>
                <View>
                  <View style={{ height: 100 }}>
                    <Image source={{
              uri: this.state.SavedItems[0].img}} 
              style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
               
                    <Text style={{color:'black', fontSize:17, fontWeight:'normal'}}>{this.state.SavedItems[0].name}</Text>
                 </View>
                </View>
        </View>         
      
        <View style={styles.subCategories}>
                <View>
                  <View style={{ height: 100 }}>
                    <Image source={{
              uri: this.state.SavedItems[1].img}} 
              style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                    <Text style={{color:'black', fontSize:17, fontWeight:'normal'}}>{this.state.SavedItems[1].name}</Text>
                  </View>
                 </View>
          </View>

          <View style={styles.subCategories}>
                <View>
                  <View style={{ height: 100 }}>
                    <Image source={{
              uri: this.state.SavedItems[2].img}} 
              style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                    <Text style={{color:'black', fontSize:17, fontWeight:'normal'}}>{this.state.SavedItems[2].name}</Text>
                  </View>
                 </View>
          </View> 
          <View style={styles.subCategories}>
                <View>
                  <View style={{ height: 100 }}>
                    <Image source={{
              uri: this.state.SavedItems[3].img}} 
              style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                    <Text style={{color:'black', fontSize:17, fontWeight:'normal'}}>{this.state.SavedItems[3].name}</Text>
                  </View>
                 </View>
          </View>
          <View style={styles.subCategories}>
                <View>
                  <View style={{ height: 100 }}>
                    <Image source={{
              uri: this.state.SavedItems[4].img}} 
              style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: 'stretch'
                    }} />
                    <Text style={{color:'black', fontSize:17, fontWeight:'normal'}}>{this.state.SavedItems[4].name}</Text>
                  </View>
                 </View>
          </View>

        </ScrollView>  
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
  }

})


export default SavedItems;