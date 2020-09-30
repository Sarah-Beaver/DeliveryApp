import React from 'react';
import {View,Text, Button, StyleSheet} from 'react-native';
// import {TabNavigation} from '../navigation/TabNavigation'
// import {createAppContainer} from 'react-navigation'
// const TabIndex=createAppContainer(TabNavigation)

import {CustomerHomeScreen} from '../screens/CustomerHomeScreen'
import {ProfileScreen} from '../screens/ProfileScreen'
import {CourierHomeScreen} from '../screens/CourierHomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

const insideAppIndex = props => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Customer's List" component={CustomerHomeScreen} />
      <Tab.Screen name="Courier's View" component={CourierHomeScreen} />
  
    </Tab.Navigator>
           <Text>Dummy Text</Text>

           </NavigationContainer>
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


// ignore this page for now
