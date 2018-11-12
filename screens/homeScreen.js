
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground
} from 'react-native';
import ImageSlider from 'react-native-image-slider'
import background from '../assets/images/assets/send2.jpg';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../assets/components/customButton'
 class HomeScreen extends Component{
    static navigationOptions = {
        header:null
    };

  render() {
    return (
      <ImageBackground source={background} style={{width:"100%", height:"100%"}}>
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Welcome to AniMania
        </Text>
      
        <CustomButton  color="black" textColor={{color:"#00A795"}} textWeight={{fontWeight:"bold"}} onPress={() => this.props.navigation.navigate('Login')}>Login</CustomButton>
        <Text></Text>
        <CustomButton  color="white" border={{borderColor:"black"}}onPress={() => this.props.navigation.navigate('Signup1')} >Sign Up</CustomButton>
     
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#00A795',
    paddingTop: 300,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'left',
    margin: 10,
    color:"black",
    fontFamily:"Cochin",
    fontWeight: 'bold',
    textShadowRadius: 5,
    textShadowColor:'white',
    textShadowOffset:{
        width: 1,
        height: 1
    }
    
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
export default HomeScreen;