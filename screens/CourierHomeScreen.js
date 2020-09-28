import React from 'react';
import {View,Text, Button, StyleSheet} from 'react-native';

const CourierHomeScreen = props => {
    return(
        <View style={styles.screen}>
            <Button title='Profile' onPress={ () => {
                props.navigation.navigate({routeName: 'Profile'});
            }}/>
            <Text>The Home Screen!</Text>
            <Button title=" Select Job" onPress={ () => {
                props.navigation.navigate({routeName: 'JobSelect'});
            }}/>
            <Button title='Go to Customer View' onPress={ ()=> {
                props.navigation.navigate({routeName: 'CustomerHome'});
            }}/>
            <Button title= 'Sign out' onPress= { () => {
                props.navigation.popToTop()
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

export default CourierHomeScreen;