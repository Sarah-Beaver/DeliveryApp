import React from 'react';
import {View,Text,Button, StyleSheet} from 'react-native';

const StoreSelectScreen = props => {
    return(
        <View style={styles.screen}>
            <Button title='Profile' onPress={ () => {
                props.navigation.navigate({routeName: 'Profile'});
            }}/>
            <Text>The Store Select Screen!</Text>
            <Button title=" Select Store" onPress={ () => {
                props.navigation.navigate({routeName: 'Grocery'});
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

export default StoreSelectScreen;