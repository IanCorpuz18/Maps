
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomInput from '../../assets/components/customInput';
import { Header, Left, Right } from 'native-base';
import CustomIcon from '../../assets/components/CustomIcon';
import background from '../../assets/images/assets/wow.jpg'
class Signup1 extends Component{
    static navigationOptions = {
        header:null
    };
  render() {
    return (
      <ImageBackground source={background} style={{width:"100%",height:"100%"}}>
      <Header style={{ backgroundColor:"transparent"}}>
            <Left style={{ marginLeft: "-40%" }}>
                <Icon  name='ios-arrow-back' size={30} color={"white"}  style={{ paddingRight: 50 }}
                    onPress={() => this.props.navigation.goBack()} />
            </Left>
        </Header> 
      <View style={styles.container}>
        <Text style={styles.welcome}>
          What is your name?
        </Text>
       
        <Text>  </Text>
        <Text style={{marginLeft:"10%", color:"white"}}>First Name</Text>
      <CustomInput/>
        <Text>  </Text>
      <Text style={{marginLeft:"10%", color:"white"}}>Last Name</Text>
      <CustomInput/>
        <CustomIcon name="ios-arrow-dropright" size={30} onPress={() => this.props.navigation.navigate('Signup2')}/>
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
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    marginLeft: "10%",
    color:"white",
    textAlign:"left"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Signup1;