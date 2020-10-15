import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';

import HomeTabsNavigator from '../navigation/HomeTabsNavigator';

import WelcomeScreen from '../screens/LoginScreens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreens/LoginScreen';
import RegistrationScreen from '../screens/LoginScreens/RegistrationScreen';


const LoginStack = createStackNavigator();

const LoginStackNavigator = props =>  {
	return (
		<LoginStack.Navigator initialRouteName="Welcome">
			<LoginStack.Screen
				name="Home"
				component={HomeTabsNavigator}
				options={
					{
						headerShown: false,
					}
				}
			/>
			<LoginStack.Screen 
				name="Login" 
				component={LoginScreen}
			/>
			<LoginStack.Screen
				name="Register"
				component={RegistrationScreen}
			/>
			<LoginStack.Screen 
				name="Welcome" 
				component={WelcomeScreen}
				options={
					{
						title: ""
					}
				}
			/>
		</LoginStack.Navigator>
	);
}
export default LoginStackNavigator;