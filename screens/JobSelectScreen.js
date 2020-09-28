import React from 'react';
import {View,Text,Button, StyleSheet} from 'react-native';

const JobSelectScreen = props => {
    return(
        <View style={styles.screen}>
            <Button title='Profile' onPress={ () => {
                props.navigation.navigate({routeName: 'Profile'});
            }}/>
            <Text>The Job Select Screen!</Text>
            <Button title=" Select Job" onPress={ () => {
                props.navigation.navigate({routeName: 'JobDetail'});
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

export default JobSelectScreen;