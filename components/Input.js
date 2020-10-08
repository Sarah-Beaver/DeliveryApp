import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';


export function Input({children,style,...props}){
  return <TextInput {...props}  style={[styles.input,style]}/>

}

const styles=StyleSheet.create({
  input:{
    backgroundColor:'lightgray',
    borderColor:'slategray',
    width:'100%',
    borderRadius:10,
    padding:10,
    borderWidth:1,
  },

})