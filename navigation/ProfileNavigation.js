import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import ChangeEmailScreen from '../screens/ProfileScreens/ChangeEmailScreen';
import ChangePasswordScreen from '../screens/ProfileScreens/ChangePasswordScreen';

const ProfileStack = createStackNavigator();

const ProfileNavigation = props => {
	return(
		<ProfileStack.Navigator
		initialRouteName="Profile"
		>

			<ProfileStack.Screen
				name="Profile"
				component={ProfileScreen}
				options={
					{
						title: "Your Profile",
					}
				}
			/>
			<ProfileStack.Screen
				name="UpdateEmail"
				component={ChangeEmailScreen}
				options={
					{
						title: "Update your email",
					}
				}
			/>
				<ProfileStack.Screen
				name="UpdatePassword"
				component={ChangePasswordScreen}
				options={
					{
						title: "Update your password",
					}
				}
			/>
		</ProfileStack.Navigator>
	)
}

export default ProfileNavigation;