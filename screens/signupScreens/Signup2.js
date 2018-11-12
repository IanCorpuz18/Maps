
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Switch,
  ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import background from '../../assets/images/assets/ez2.jpg'
import CustomInput from '../../assets/components/customInput';
import { Header, Left, Right } from 'native-base';
import CustomIcon from '../../assets/components/CustomIcon';
class Signup2 extends Component{
    static navigationOptions = {
        header:null
    };
    state = {
        switch: false
      };
  
      toggleSwitch = () => this.setState(state => ({
          switch: !state.switch
      }));
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
           And, your Email?
          </Text>
         
          <Text>  </Text>
          <Text style={{marginLeft:"10%", color:"white"}}>Email</Text>
        <CustomInput/>
          <Text>  </Text>
          <View style={{flexDirection:"row"}}>
        <Text style={{marginLeft:"10%", color:"white"}}>I'd like to receive  marketing and policy</Text>
        <Switch onValueChange={this.toggleSwitch} value={this.state.switch} style={{marginLeft:'5%'}} />
        </View>
        <Text style={{marginLeft:"10%", color:"white"}}>communications from Ting and its</Text>
        <Text style={{marginLeft:"10%", color:"white"}}>partners.</Text>
   
          <CustomIcon name="ios-arrow-dropright" size={30} onPress={() => this.props.navigation.navigate('Signup3')}/>
        </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
    //   alignItems: 'center',
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
export default Signup2;