import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

const HomeScreenPaneButton = props => {
	return(
		<TouchableOpacity
			style={styles.tileShape}
			onPress={props.onSelect}
		>
			<View style= {styles.tileContent}>
				<ImageBackground
					source={props.image}
					style={styles.bgImage}
				>
						<Text style={styles.tileLabel}>{props.label}</Text>
				</ImageBackground>
			</View>
		</TouchableOpacity>
	);

}

const styles= StyleSheet.create({
	tileShape: {
		flexDirection: 'row',
		height:'45%',
		width:'90%',
		backgroundColor: 'black',
		borderWidth: 3,
		borderColor:'black',
		padding: 10,
		marginTop: 10,
		marginHorizontal:10,
	},
	tileContent:{
		width:"100%",
		justifyContent:"flex-end"
	},
	tileLabel:{
		color: "white",
		backgroundColor: 'rgba(0,0,0,0.7)',
		textAlign: "center",
	},
	bgImage:{
		width: '100%',
		height: '100%',
	},
});

export default HomeScreenPaneButton;