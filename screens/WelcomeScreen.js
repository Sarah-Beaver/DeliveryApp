import React from 'react';
import {View,Text,Button, StyleSheet} from 'react-native';
import {SomeButton} from '../components/Button'
import {Heading} from '../components/Heading'

const WelcomeScreen= props => {
    return(
        <View style={styles.screen}>
            <Heading style={styles.heading}>Welcome to Delivery Boyz!</Heading>
            <SomeButton title={'Login'} style={styles.registerbutton} onPress={()=>{
                props.navigation.navigate({routeName: 'Login'})
            }}/>
            <SomeButton title={'Register'} style={styles.loginbutton} onPress={()=>{
                props.navigation.navigate({routeName: 'Register'})
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:20,
    },
    heading:{
        fontSize:25,
        fontWeight:'bold',
        color:'orchid',
        marginVertical:25,
        borderColor:'darkred',
        padding:8,
        borderWidth:1,
        backgroundColor:'azure',
        borderRadius:25,
    },
    registerbutton:{
        marginVertical:10,
    },
    loginbutton:{
        marginVertical:10,
    }
});

export default WelcomeScreen;