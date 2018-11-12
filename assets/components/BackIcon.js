import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const CustomIcon = props => (
  <TouchableOpacity onPress={props.onPress}>
     <View style={styles.Icon}>
           <Icon name="ios-arrow-back" color="white" size={45} />
           </View>
           </TouchableOpacity>
);

const styles = StyleSheet.create({
    Icon: {
   marginLeft:300
    }
})

export default CustomIcon;