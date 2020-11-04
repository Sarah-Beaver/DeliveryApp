import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList,Button,TouchableOpacity,Modal,Alert } from 'react-native';
import * as firebase from 'firebase';
import '@firebase/firestore';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesome } from '@expo/vector-icons';

import ItemGridTile from '../../components/ItemGridTile';

const CustomerCreateList = props =>  {
	//this is DB list of items, I might rename
	const [listOfItems, setListOfItems] = useState ([]);
	//For date time
	const [dateDisplay, setDateDisplay] = useState("");
	const [viewModal, setViewModal] = useState(false);
	// total price
	const [totalPrice, setTotalPrice] = useState(0);
	const [itemCount, setItemCount] = useState(0); 

	const updateListOfItems = (curritem) => {
		setListOfItems( listOfItems => [...listOfItems, curritem]);
	};

	// const updateUserList = (curritem) => {
	// 	setUserList( userList => [ ...userListm, curritem]);
	// };

	//For date time
	const handleConfirm=(date) => {
		setDateDisplay(date.toUTCString());
		setViewModal(false);
	}

	const onPressCancel=() =>{
		setViewModal(false);
	}

	const onPressDateViewButton =() => {
		setViewModal(true)
	}

	const updateList = (currPrice) => {
		setTotalPrice(totalPrice + currPrice);
		setItemCount(itemCount + 1); 
	}
	
	useEffect(() => {
		props.navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={()=>{
					console.log("Total:", totalPrice, " Item Count:",itemCount)
					console.log("Current List of Items: ");
					for (let i = 0; i < listOfItems.length; i++) {
						if(listOfItems[i].count >0){
							console.log("\t",listOfItems[i].name,":", listOfItems[i].count);
						}
					}
				}}>
					<FontAwesome name="shopping-cart" size={30} color="black" />
				</TouchableOpacity>
			),
			
		});

	},[ totalPrice, itemCount]);

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
						price: mydata.Price,
						count: 0,
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
						itemData.item.count +=1;
						// setTotalPrice(totalPrice + itemData.item.price);
						// setItemCount(itemCount + 1); 
						updateList(itemData.item.price);
						console.log("count of ", itemData.item.name,":",itemData.item.count);
					}
				}
			/>
		)
	}
	//console.log(props.route.params.storeName)
  return (
    <View style={styles.screen}>
			<Text>Total Price:{totalPrice}</Text>
			<Text>Current Selected Time for Delivery:</Text>
			<Text>{dateDisplay}</Text>
			<Button title="Select a Delivery Date and time" onPress={onPressDateViewButton}/>
			<DateTimePickerModal
				isVisible={viewModal}
				onConfirm={handleConfirm}
				onCancel={onPressCancel}
				mode="datetime"
			/>
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