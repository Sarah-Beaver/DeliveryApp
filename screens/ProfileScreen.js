import React from 'react';
import {View,Text,Button, StyleSheet} from 'react-native';
import {AppHeading} from '../components/AppHeading'


const ProfileScreen = props => {
    return(

        <View>
            <AppHeading props={props} style={styles.heading}></AppHeading>
           
            <View style={styles.screen}>
             
            <Text>The Profile Screen!</Text>
            <Button title= 'Sign out' onPress= { () => {
                props.navigation.popToTop()
            }}/>
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

export default ProfileScreen;