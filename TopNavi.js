

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
import ProfileScreen from './screens/contentScreens/ProfileScreen';
import TripScreen from './screens/contentScreens/TripScreen';
export const Topnavi = createMaterialTopTabNavigator({
    Explore : {
        screen:ExploreScreen,
    navigationOptions: {
        tabBarLabel: 'Explore',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-search" color={tintColor} size={30} />
        )
    }
    },
    Saved : {
        screen:SavedScreen,
        navigationOptions: {
            tabBarLabel: 'Saved',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-heart-outline" color={tintColor} size={30} />
            )
        }
    },Trips : {
        screen: TripScreen,
        navigationOptions: {
            tabBarLabel: 'Trips',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-plane" color={tintColor} size={30} />
            )
        }
    },
    Inbox : {
        screen: InboxScreen,
        navigationOptions: {
            tabBarLabel: 'Inbox',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-chatbubbles" color={tintColor} size={30} />
            )
        }
    },
    Profile : {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-contact-outline" color={tintColor} size={30} />
            )
        }
    }
  
  
  },{
   swipeEnabled:false,
    initialRouteName:'Explore',
    tabBarPosition:'bottom',
    tabBarOptions:{
        style: {
            backgroundColor:'white',
            height:60,
            borderTopColor:"gray",
            borderTopWidth:.5
            
        },
        labelStyle:{
            fontSize:9
        },
        showIcon: true,
        activeTintColor: "black",
        inactiveTintColor: "grey"

    }

  });

