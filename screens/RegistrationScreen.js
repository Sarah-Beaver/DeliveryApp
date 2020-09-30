import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Heading} from '../components/Heading'
import {Input} from '../components/Input'
import {SomeButton} from '../components/Button'
import {HyperlinkButton} from '../components/HyperlinkButton'

const RegistrationScreen = props =>{
    return(
        <View style={styles.container}>
            <Heading style={styles.title}> Register</Heading>
            <Text style={styles.text}>Email</Text>
            <Input 
                style={styles.input} 
                placeholderTextColor="black" 
                placeholder={'Type your email'} 
                keyboardType={'email-address'}
            />
            <Text style={styles.text}>Password</Text>
            <Input 
                style={styles.input} 
                placeholderTextColor="black" 
                placeholder={'Type your password'}
                secureTextEntry
            />
            <SomeButton title={'Confirm Register'} style={styles.registerbutton} onPress={()=>{
                props.navigation.replace('CustomerHome')
            }}/>
            <HyperlinkButton title={'Login'} style={styles.loginbutton} onPress={()=>{
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
    paddingTop:50,
     
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'flex-start',
    padding:5,
  },
    input:{
      marginBottom:10, 
      
    },
    title:{
      marginBottom: 20,
    },
    loginbutton:{
      marginVertical:10,

    },
    registerbutton:{
      marginVertical:20
    }
  
  })

export default RegistrationScreen;