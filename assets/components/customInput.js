import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CustomInput = props =>   {
  
   
        return (
            <View style={{flexDirection:'column', width:"80%",alignSelf:"center"}}>
             <TextInput {...props} underlineColorAndroid="white"  style={[{color:"white"}, !props.valid && props.touched ? style.invalid : null]}
            
             />
            </View>
        ) 
    }

    const style = StyleSheet.create({
        invalid: {
            color:"red",
            borderColor: "red",
            backgroundColor:"white"
        }
    })



export default CustomInput;