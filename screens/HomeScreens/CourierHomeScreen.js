import React, {useState} from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import HomeScreenPaneButton from '../../components/HomeScreenPaneButton';

const CourierHomeScreen= props => {
	//console.log(props)
	return (
		<View style={styles.container}>
				<HomeScreenPaneButton style={styles.imagebutton}
					label= {"View Current Jobs"}
					image= {require('../../images/CourierViewCurrentJobs.jpg')}
					onSelect={() => 
						{
						console.log("Selected the view jobs pane")
						props.navigation.push("ViewJobs")
						}
					}
				/>
			<HomeScreenPaneButton style={styles.imagebutton}
				label= {"Select new Job"}
				image= {require('../../images/CourierSelectNewJob.jpg')}
				onSelect={() => 
					{
						console.log("Selected the Select Job pane")
						props.navigation.push("SelectJob")
					}
				}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// paddingVertical: 20,
		flex: 1,
		backgroundColor: 'white',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: "100%",
	},
	imagebutton:{
		padding: 50,
		margin: 50,

	}
});

export default CourierHomeScreen;