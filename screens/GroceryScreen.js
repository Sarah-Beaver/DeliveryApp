import React from 'react';
import {View,Text,Button, StyleSheet} from 'react-native';

const GroceryScreen = props => {
    return(
        <View style={styles.screen}>
            <Button title='Profile' onPress={ () => {
                props.navigation.navigate({routeName: 'Profile'});
            }}/>
            <Text>The Grocery Screen!</Text>
            <Button title=" View Cart" onPress={ () => {
                props.navigation.navigate({routeName: 'Cart'});
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

export default GroceryScreen;