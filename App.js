import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home'
import Detail from './screens/Details'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default function App() {
  return (
    <AppContainer></AppContainer>
  );
}

const appstacknavigator=createStackNavigator({
  Home:{screen:Home,navigationOptions:{headershown:false}},
  Detail:{screen:Detail,navigationOptions:{headershown:false}},
},{
  initialRouteName:"Home"
})

const AppContainer=createAppContainer(appstacknavigator)