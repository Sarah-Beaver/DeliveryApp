import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import * as firebase from 'firebase';
import '@firebase/firestore';

import ItemGridTile from '../../components/ItemGridTile';

const CustomerCreateList = props =>  {
	const [listOfItems, setListOfItems] = useState ([]);

	const updateListOfItems = (curritem) => {
		setListOfItems( listOfItems => [...listOfItems, curritem]);
	};

	useEffect(() => {
		const storeName= props.route.params.storeName; // just to reduce verbose code
		try {
			const db = firebase.firestore();
			db.collection("Stores").doc(storeName).collection("Items").get().then ((querySnapshot) => {
				querySnapshot.forEach((doc)=> {
					//console.log("Item id:",doc.id,"Item data: ",doc.data());
					const mydata= doc.data();
					let currItemObj= {
						id: doc.id,
						name: mydata.Name,
						price: mydata.Price
					};
					updateListOfItems(currItemObj);
				});
			});
		}
		catch{
			console.log("Failed to Connect to db");
		}
	},[]);

	const renderGridItem = itemData => {
		return(
			<ItemGridTile
				title= {itemData.item.name}
				price= {itemData.item.price}
				onSelect= { () => 
					{
						console.log("Item Selected")
					}
				}
			/>
		)
	}
	//console.log(props.route.params.storeName)
  return (
    <View style={styles.screen}>
			<FlatList data={listOfItems} keyExtractor={(item,index) => item.id} renderItem={renderGridItem} />
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

//numColumns={2} this goes in flatlist element and  will output as two columns need to style