import React from 'react';
// import {NavigatorContainer} from '@react-navigations/native'
import {View, StyleSheet, Text} from 'react-native';
import {LoginScreen} from './screens/LoginScreen'
import {RegistrationScreen} from './screens/RegistrationScreen'

export default function App(){
  return <RegistrationScreen></RegistrationScreen>

}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
  },

})