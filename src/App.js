import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {LoginScreen} from './screens/LoginScreen'

export default function App(){
  return <LoginScreen></LoginScreen>

}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },

})