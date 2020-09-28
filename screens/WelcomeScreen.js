import React from 'react';
import {View,Text,Button, StyleSheet} from 'react-native';
import {SomeButton} from '../components/Button'

const WelcomeScreen= props => {
    return(
        <View style={styles.screen}>
            <Text>The Welcome to our App!</Text>
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
        alignItems: 'center'
    }
});

export default WelcomeScreen;