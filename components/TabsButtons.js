import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';


export function TabsButton({title,style,onPress}){
  return (
    <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
        <Text style={[styles.text]}>{title}</Text>

    </TouchableOpacity>
  )

}

const styles=StyleSheet.create({
    container:{
        // backgroundColor:'lightblue',
        // borderRadius:10,
        padding:5,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        // borderColor:'black',
        // borderBottomWidth:2,
        // borderLeftWidth:2,
        // borderBottomColor:'black'
    },
    text:{
        fontSize:18,
        color:'black',
        fontWeight:'bold',
        color:'black',
   
    },

})