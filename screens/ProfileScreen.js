import React from 'react';
import {View,Text,Button, StyleSheet} from 'react-native';

const ProfileScreen = props => {
    return(
        <View style={styles.screen}>
            <Text>The Profile Screen!</Text>
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

export default ProfileScreen;