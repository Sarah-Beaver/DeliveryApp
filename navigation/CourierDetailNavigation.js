import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';

import CourierCurrViewJobScreen from '../screens/CourierDetailScreens/CourierCurrViewJobsScreen';
import CourierSelectJobScreen from '../screens/CourierDetailScreens/CourierSelectJobScreen';
import CourierHomeScreen from '../screens/HomeScreens/CourierHomeScreen';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';

import { AntDesign } from '@expo/vector-icons';

const CourierStack = createStackNavigator();

const CourierDetailNavigation= props =>  {
	return (
		<CourierStack.Navigator 
			initialRouteName="Home"
			screenOptions={
				{
					headerRight: () => 
						(
							<TouchableOpacity 
								onPress={() => 
									{
										props.navigation.navigate("Profile");
									}
								}
							>
								<AntDesign name="user" size={24} color="black" />
							</TouchableOpacity>
						)
				}
			}
		>
			<CourierStack.Screen
				name="Home"
				component={CourierHomeScreen}
				options={
					{
						title: "Jobs"
					}
				}
			/>
			<CourierStack.Screen
				name="Profile"
				component={ProfileScreen}
			/>
			<CourierStack.Screen
				name="SelectJob"
				component={CourierSelectJobScreen}
			/>
			<CourierStack.Screen
				name="ViewJobs"
				component={CourierCurrViewJobScreen}
			/>
		</CourierStack.Navigator>
	)

}

export default CourierDetailNavigation