import React from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';

const CustomerHomeScreen = props => {
    return(
        <View style={styles.screen}>

            <Button title='Profile' onPress={ () => {
                props.navigation.navigate({routeName: 'Profile'});
            }}/>
            <Text>The Home Screen!</Text>
            <Button title=" Select Store" onPress={ () => {
                props.navigation.navigate({routeName: 'StoreSelect'});
            }}/>
            <Button title='Go to Courier View' onPress={ ()=> {
                props.navigation.navigate({routeName: 'CourierHome'});
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

export default CustomerHomeScreen;