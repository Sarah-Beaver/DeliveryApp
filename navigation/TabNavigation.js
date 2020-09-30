import React from 'react';
import {createMaterialTopTabNavigator} from 'react-native'
import {ProfileScreen} from '../screens/ProfileScreen'
import {CustomerHomeScreen} from '../screens/CustomerHomeScreen'
import {CourierHomeScreen} from '../screens/CourierHomeScreen'

const TabNavigation = createMaterialTopTabNavigator({
    Profile:ProfileScreen,
    Customer:CustomerHomeScreen,
    Courier:CourierHomeScreen

})

export default TabNavigation