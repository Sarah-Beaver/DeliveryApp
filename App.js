import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeliveryNavigation from './navigation/DeliveryNavigation';
import * as firebase from 'firebase'

const firebaseconfig={
  apiKey: "AIzaSyCF2EpqWCAWCo0dvcsYwUfOn7APsspjsvk",
  authDomain: "delivery-boyz-bbe21.firebaseapp.com",
  databaseURL: "https://delivery-boyz-bbe21.firebaseio.com",
  projectId: "delivery-boyz-bbe21",
  storageBucket: "delivery-boyz-bbe21.appspot.com",

};
firebase.initializeApp(firebaseconfig);

export default function App() {
  return (
    <DeliveryNavigation/>
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
