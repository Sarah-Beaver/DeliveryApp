import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Heading} from '../components/Heading'
import {Input} from '../components/Input'
import {SomeButton} from '../components/Button'

const RegistrationScreen = props =>{
    return(
        <View style={styles.container}>
            <Heading style={styles.title}> Register</Heading>
            <Input 
                style={styles.input} 
                placeholderTextColor="black" 
                placeholder={'Email'} 
                keyboardType={'email-address'}
            />
            <Input 
                style={styles.input} 
                placeholderTextColor="black" 
               placeholder={'Password'}
                secureTextEntry/> 
            <SomeButton title={'Confirm Register'} style={styles.registerbutton} onPress={()=>{
                props.navigation.replace('CustomerHome')
            }}/>
            <SomeButton title={'Login'} style={styles.loginbutton} onPress={()=>{
                props.navigation.replace('Login')
            }}/>
        </View>
    );
} ;

const styles=StyleSheet.create({
    container:{
      flex: 1,
      alignItems:'center',
      padding:20,
      paddingTop:100,
       
    },
    input:{
      marginVertical:10, 
      
    },
    title:{
      marginBottom: 20,
    },
    loginbutton:{
      marginVertical:10,
    },
    registerbutton:{
      marginVertical:30
    }
  
  })

export default RegistrationScreen;