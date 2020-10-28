import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import HomeScreenPaneButton from '../../components/HomeScreenPaneButton';

const CustomerHomeScreen = props=> {

	return (
		<View style={styles.container}>
				<HomeScreenPaneButton 
					label= {"View Lists"}
					image= {require('../../images/CustomerViewLists.jpg')}
					onSelect={() => 
						{
							console.log("Selected the view lists pane");
							props.navigation.push("ViewLists")
						}
					}
				/>
			<HomeScreenPaneButton
				label= {"Create New List"}
				image= {require('../../images/CustomerCreateList.jpg')}
				onSelect={() => 
					{
						console.log("Selected the create list pane");
						props.navigation.push("ListDestination")
					}
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 20,
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: "100%",
	},

});

export default CustomerHomeScreen;