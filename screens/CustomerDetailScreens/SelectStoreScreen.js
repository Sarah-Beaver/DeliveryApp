import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import '@firebase/firestore';


import {STORES} from '../../data/placeHolderStores';
import StoreGridTile from '../../components/StoreGridTile';

const SelectStore = props =>  {
	const [listOfStores, setListOfStores] = useState([]);

	const updateListOfStores = (currStore) => {  
		setListOfStores(listOfStores => [...listOfStores, {id:currStore}]);
	};

	useEffect(() =>{
		try {
			const db = firebase.firestore();
			db.collection("Stores").get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
						//console.log("docid:",doc.id);
						updateListOfStores(doc.id);
				});
			});
		}
		catch{
			console.log("Failed to Connect to db");
		}
	},[]);

	console.log(listOfStores)
	const renderGridItem = itemData => {
		//console.log(itemData)
		return(
			<StoreGridTile
				title= {itemData.item.id}
				onSelect={ ()=> 
					{
						props.navigation.navigate("CreateList", {
							storeName: itemData.item.id
						})
					}
				}
			/>
		)
	}
  return (
		<FlatList data={listOfStores} keyExtractor= {(item, index) => item.id }  renderItem={renderGridItem} />
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