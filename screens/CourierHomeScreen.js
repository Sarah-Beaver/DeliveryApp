import React from 'react';
import {View,Text, Button, StyleSheet} from 'react-native';
import {AppHeading} from '../components/AppHeading'

const CourierHomeScreen = props => {
    return(
        <View>
            <AppHeading props={props} style={styles.heading}></AppHeading>
           
            <View style={styles.screen}>
             

             </View>
        </View>
        
    );
};

const styles = StyleSheet.create({
    screen: {
       
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CourierHomeScreen;