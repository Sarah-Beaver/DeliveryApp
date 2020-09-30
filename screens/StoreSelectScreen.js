import React from 'react';
import {View,Text,Button, StyleSheet} from 'react-native';
import {AppHeading} from '../components/AppHeading'


const StoreSelectScreen = props => {
    return(
        <View >
        {/* <TabIndex/> */}
       <AppHeading props={props} style={styles.heading}></AppHeading>
        <View style={styles.screen}>
           <Text>Some dummy text</Text>
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

export default StoreSelectScreen;