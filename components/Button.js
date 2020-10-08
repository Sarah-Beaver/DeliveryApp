import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';


export function SomeButton({title,style,onPress}){
  return (
    <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
        <Text style={[styles.text]}>{title}</Text>

    </TouchableOpacity>
  )

}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'lightblue',
        borderRadius:10,
        padding:5,
        // width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'black',
        borderWidth:1,
    },
    text:{
        fontSize:20,
        color:'black',
   
    },

})