import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList,Button,TouchableOpacity,Modal,Alert, TextInput } from 'react-native';
import * as firebase from 'firebase';
import '@firebase/firestore';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesome } from '@expo/vector-icons';

import ItemGridTile from '../../components/ItemGridTile';
import { add } from 'react-native-reanimated';


const CustomerCreateList = props =>  {
	const db= firebase.firestore();
	//this is DB list of items, I might rename
	const [listOfItems, setListOfItems] = useState ([]);
	// identifies user
	const [email, setEmail] = useState([]);
	// address
	const [address,setAddress]= useState("");
	//For date time
	const [dateDisplay, setDateDisplay] = useState("");
	const [viewModal, setViewModal] = useState(false);
	// total price
	const [totalPrice, setTotalPrice] = useState(0);
	const [itemCount, setItemCount] = useState(0); 

	const updateListOfItems = (curritem) => {
		setListOfItems( listOfItems => [...listOfItems, curritem]);
	};
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

	const handleChangeAddress = enteredText => {
		setAddress(enteredText);
	}

	const handleListPublish = () => {
		const currUID= firebase.auth().currentUser.uid;
		let shoppingList = [];
		console.log("Current User:", email);
		console.log("Selected Date:", dateDisplay);
		console.log("Total:",totalPrice,"Item Count:", itemCount);
		console.log("Current List of Items: ");
		for( let i=0; i<listOfItems.length; i++){
			if(listOfItems[i].count > 0){
				console.log("\t", listOfItems[i].name, ":", listOfItems[i].count);
				shoppingList= [...shoppingList,listOfItems[i]];
			}
		}
		console.log(shoppingList);
		db.collection("Users").doc(currUID).collection("Lists").add({
			user: email,
			address: address,
			datetime: dateDisplay,
			total: totalPrice,
			count: itemCount,
			list: shoppingList
		}).catch(function(error) {
			console.error("Error adding list publish document: ", error);
		});

		props.navigation.popToTop();
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
		const currUID= firebase.auth().currentUser.uid;
		try {
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
			console.log("Failed to Connect to db when fetching items");
		}
		try{
			db.collection("Users").doc(currUID).get().then((doc)=> {
				if (doc.exists) {
					const mydata= doc.data();
					setEmail(mydata.email)
					console.log("check if user email is stored", email);
				}else{
					console.log("No such document!");
				}
			}).catch(function(error) {
				console.log("Error getting document", error);
			});
		}
		catch{
			console.log("Error getting Document:", error);
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
			<Text>Entered Deliver Address: </Text>
			<TextInput
				value={address}
				onChangeText={handleChangeAddress}
				placeholder="Enter Your Address!"
			/>
			<Button title="Confirm and Publish List" onPress={handleListPublish}/>
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