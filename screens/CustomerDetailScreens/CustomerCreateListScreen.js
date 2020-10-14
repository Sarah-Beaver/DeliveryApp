import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomerCreateList = props =>  {
	console.log(props.route.params.itemId)
  return (
    <View style={styles.screen}>
      <Text>CustomerCreateList!</Text>
			<Text>{props.route.params.itemId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
	screen: {
		flex:1,
		justifyContent:'center',
		alignItems: 'center',
	}
});
export default CustomerCreateList;