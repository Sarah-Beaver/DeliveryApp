import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const ItemGridTile= props => {
	return (
		<TouchableOpacity
			style={styles.gridItem}
			onPress={props.onSelect}
		>
			<View style={styles.container}>
				<Text>{props.title}</Text>
				<Text>{props.price}</Text>
			</View>
		</TouchableOpacity>
	); 
}

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 15,
		height : 150,
	},
	container: {
		flex: 1,
		borderRadius: 10,
		elevation:10,
		padding: 10,
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
	}
});

export default ItemGridTile;
