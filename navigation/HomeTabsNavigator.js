import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CourierDetailNavigation from '../navigation/CourierDetailNavigation';
import CustomerDetailNavigation from '../navigation/CustomerDetailNavigation';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const HomeTabs = createBottomTabNavigator();

//we put icons in the default options for readability

const HomeTabsNavigator = props =>  {
	return (
		<HomeTabs.Navigator
			screenOptions={ ({route}) =>
				(
					{
						tabBarIcon: () => {
							if (route.name === "CourierHome"){
								return <MaterialCommunityIcons name="truck-delivery" size={24} color="black" />
							}
							else{
								return <Octicons name="checklist" size={24} color="black" />
							}
						},
					}
				)
			}
		>
			<HomeTabs.Screen 
				name="CourierHome"
				component={CourierDetailNavigation}
				options= {
					{
						tabBarLabel: "Run Lists",
					}
				}
			/>
			<HomeTabs.Screen
				name="CustomerHome"
				component={CustomerDetailNavigation}
				options= {
					{
						tabBarLabel: "Make Lists",
					}
				}
			/>
		</HomeTabs.Navigator>
	)
}

export default HomeTabsNavigator;