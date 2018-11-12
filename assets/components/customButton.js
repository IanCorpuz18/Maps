import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
const CustomButton = props => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.button,{backgroundColor: props.color},props.border]}> 
            <Text style={[{color:"black"},props.textColor, props.textWeight]}>{props.children}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
      padding: 10,
      margin: 5,
      borderRadius: 20,
      borderWidth: 2,
      borderColor:"white",
      alignItems: 'center',
      width:"90%",
      alignSelf:"center"
    }
})

export default CustomButton;