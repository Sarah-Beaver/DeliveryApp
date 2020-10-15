import 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';

import LoginStackNavigator from './navigation/LoginStackNavigator';
import * as firebase from 'firebase';


enableScreens(); //optimizes screen naviation

const firebaseconfig={
  apiKey: "AIzaSyCF2EpqWCAWCo0dvcsYwUfOn7APsspjsvk",
  authDomain: "delivery-boyz-bbe21.firebaseapp.com",
  databaseURL: "https://delivery-boyz-bbe21.firebaseio.com",
  projectId: "delivery-boyz-bbe21",
  storageBucket: "delivery-boyz-bbe21.appspot.com",

};
firebase.initializeApp(firebaseconfig);

export default function App() {
  console.log("hi")
  return (
    <NavigationContainer>
      <LoginStackNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
