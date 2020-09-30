import React from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';
import {AppHeading} from '../components/AppHeading'



const CustomerHomeScreen = props => {
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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop:15,
        padding:10,
    },
    heading:{
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        // alignContent:'center',
        // padding:10,
    }
});

export default CustomerHomeScreen;