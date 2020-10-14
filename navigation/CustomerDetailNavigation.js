import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';

import CustomerCreateListScreen from '../screens/CustomerDetailScreens/CustomerCreateListScreen';
import CustomerViewListsScreen from '../screens/CustomerDetailScreens/CustomerViewListsScreen';
import SelectStoreScreen from '../screens/CustomerDetailScreens/SelectStoreScreen';
import CustomerHomeScreen from '../screens/HomeScreens/CustomerHomeScreen';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';

import { AntDesign } from '@expo/vector-icons';

const CustomerStack = createStackNavigator();

const CustomerDetailNavigation = props =>  {
	return (
		<CustomerStack.Navigator 
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
			<CustomerStack.Screen
				name="CreateList"
				component={CustomerCreateListScreen}
				options={
					{
						title: "Make a new List"
					}
				}
			/>
			<CustomerStack.Screen
				name="Home"
				component={CustomerHomeScreen}
				options={
					{
						title: "Your Lists"
					}
				}
			/>
			<CustomerStack.Screen
				name="Profile"
				component={ProfileScreen}
				options={
					{
						title: "Your Profile"
					}
				}
			/>
			<CustomerStack.Screen
				name="SelectStore"
				component={SelectStoreScreen}
				options={
					{
						title: "Choose a Store:"
					}
				}
			/>
			<CustomerStack.Screen
				name="ViewLists"
				component={CustomerViewListsScreen}
				options={
					{
						title: "Your Current Grocery Lists"
					}
				}
			/>
		</CustomerStack.Navigator>
	)

}
export default CustomerDetailNavigation