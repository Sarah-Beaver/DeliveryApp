import React from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import {STORES} from '../../data/placeHolderStores';
import StoreGridTile from '../../components/StoreGridTile';

const SelectStore = props =>  {
	const renderGridItem = itemData => {
		//console.log(itemData)
		return(
			<StoreGridTile
				title= {itemData.item.id}
				onSelect={ ()=> 
					{
						props.navigation.navigate("CreateList", {
							itemId: itemData.item.id
						})
					}
				}
			/>
		)
	}
  return (
		<FlatList keyExtractor= {(item, index) => item.id } data={STORES} renderItem={renderGridItem}/>
  );
}

const styles = StyleSheet.create({
	screen: {
		flex:1,
		justifyContent:'center',
		alignItems: 'center',
	}
});
export default SelectStore;