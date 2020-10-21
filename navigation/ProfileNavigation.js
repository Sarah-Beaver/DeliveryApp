import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';

const ProfileStack = createStackNavigator();

const ProfileNavigation = props => {
	return(
		<ProfileStack.Navigator>
			<ProfileStack.Screen
				name="Profile"
				component={ProfileScreen}
				options={
					{
						title: "Your Profile",
					}
				}
			/>
		</ProfileStack.Navigator>
	)
}

export default ProfileNavigation;