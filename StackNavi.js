
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/homeScreen'
import LoginScreen from './screens/loginScreen'
import Signup1 from './screens/signupScreens/Signup1'
import Signup2 from './screens/signupScreens/Signup2'
import Signup3 from './screens/signupScreens/Signup3'
import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'; 
import ExploreScreen from './screens/contentScreens/ExploreScreen'
import InboxScreen from './screens/contentScreens/InboxScreen'
import SavedScreen from './screens/contentScreens/SavedScreen'
import { Topnavi } from './TopNavi'

export const StackNavi = createStackNavigator({
    
    Front : HomeScreen,
    Login : LoginScreen,
    Signup1 : Signup1,
    Signup2: Signup2,
    Signup3: Signup3,
    Expi: Topnavi



},{
    initialRouteName:'Front',
     navigationOptions :{
        header:null
    }
});

