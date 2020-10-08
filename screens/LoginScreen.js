import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Heading} from '../components/Heading'
import {Input} from '../components/Input'
import {SomeButton} from '../components/Button'
import {HyperlinkButton} from '../components/HyperlinkButton'
import {Container, Content, Header, Form,  Item, Button, Label} from 'native-base'


const LoginScreen = props => {
    return(
        <Container style={styles.container}>
          <Form>
            <Heading style={styles.title}> Login</Heading>
            <Item stackedLabel>
              <Text style={styles.text}>Email</Text>
              <Input 
                  style={styles.input} 
                  placeholderTextColor="black" 
                  placeholder={'Type your email'} 
                  keyboardType={'email-address'}
              />
            </Item>
            <Item stackedLabel>
              <Text style={styles.text}>Password</Text>
              <Input 
                  style={styles.input} 
                  placeholderTextColor="black" 
                  placeholder={'Type your password'}
                  secureTextEntry
              />
            </Item>
            <SomeButton title={'Confirm Login'} style={styles.loginbutton} onPress={()=>{
                props.navigation.replace('CustomerHome')
            }}/>
            <HyperlinkButton title={'Register'} style={styles.registerbutton} onPress={()=>{
                props.navigation.replace('Register')
            }}/>
          </Form>
        </Container>

    );
};

const styles=StyleSheet.create({
    container:{
      flex: 1,
      padding:10,
      paddingTop:35,
       
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
      textAlign:'center',
    },
    loginbutton:{
      marginVertical:20,
      width:'90%',
      alignSelf:'center'
     
    
    },
    registerbutton:{
      marginVertical:10,

    }
  
  })

  export default LoginScreen;