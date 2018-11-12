import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const CustomIcon = props => (
  <TouchableOpacity onPress={props.onPress} >
     <View style={styles.Icon} >
           <Icon style={[{color:"white"}, !props.disabled ? styles.disabled : null]} name="ios-arrow-dropright-circle"  size={45} />
           </View>
           </TouchableOpacity>
);

const styles = StyleSheet.create({
    Icon: {
   marginLeft:300


    },
    disabled:{

        color:"gray",

    }
})

export default CustomIcon;