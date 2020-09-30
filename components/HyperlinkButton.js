import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';


export function HyperlinkButton({title,style,onPress}){
  return (
    <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
        <Text style={[styles.text]}>{title}</Text>

    </TouchableOpacity>
  )

}

const styles=StyleSheet.create({
    container:{
        padding:5,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:20,
        color:'royalblue'
   
    },

})