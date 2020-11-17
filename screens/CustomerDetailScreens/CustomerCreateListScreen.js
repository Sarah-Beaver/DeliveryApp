import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList,Button,TouchableOpacity,Modal,Alert, TextInput } from 'react-native';
import * as firebase from 'firebase';
import '@firebase/firestore';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesome } from '@expo/vector-icons';

import ItemGridTile from '../../components/ItemGridTile';




const CustomerCreateList = props =>  {
	const db= firebase.firestore();
	//this is DB list of items, I might rename
	const [listOfItems, setListOfItems] = useState ([]);
	const [storeName, setStoreName]= useState(props.route.params.storeName) // just to reduce verbose code
	// identifies user
	const [email, setEmail] = useState([]);
	// address
	const [address,setAddress]= useState("");
	const [presetAddress, setPreSetAddress] = useState("");
	//For date time
	const [dateTime, setDateTime] = useState("");
	const [dateDisplay, setDateDisplay] = useState("");
	const [viewDateModal, setViewDateModal] = useState(false);
	// total price
	const [totalPrice, setTotalPrice] = useState(0);
	const [itemCount, setItemCount] = useState(0); 
	//cart modal
	const [cartModal, setCartModal] = useState(false);
	
	const updateListOfItems = (curritem) => {
		setListOfItems( listOfItems => [...listOfItems, curritem]);
	};
	//For date time
	const handleConfirm=(date) => {
		setDateTime(date)
		setDateDisplay(date.toLocaleString());
		setViewDateModal(false);
	}

	const onPressCancel=() =>{
		setViewDateModal(false);
	}

	const onPressDateViewButton =() => {
		setViewDateModal(true)
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
			store: storeName,
			address: address,
			datetime: dateTime,
			total: totalPrice,
			count: itemCount,
			list: shoppingList
		}).catch(function(error) {
			console.error("Error adding list publish document: ", error);
		});
		alert('List has been Published!');
		props.navigation.popToTop();
	}

	const handleUpdateCount= (itemData,symbol) => {
		if (symbol === true){
			itemData.item.count +=1;
			setItemCount(itemCount + 1); 
			setTotalPrice(totalPrice + itemData.item.price);
		}
		else{
			if( itemData.item.count > 0){
				itemData.item.count -=1;
				setItemCount(itemCount - 1); 
				setTotalPrice(totalPrice - itemData.item.price);
			}
			else{
				itemData.item.count=0;
				setItemCount(itemCount); 
				setTotalPrice(totalPrice);
			}
		}
	}

	useEffect(() => {
		props.navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={()=>{
					setCartModal(true);
					console.log("Total:", totalPrice, " Item Count:",itemCount)
					console.log("Current List of Items: ");
					for (let i = 0; i < listOfItems.length; i++) {
						if(listOfItems[i].count >0){
							console.log("\t",listOfItems[i].name,":", listOfItems[i].count);
						}
					}
				}}>
					<FontAwesome name="shopping-cart" size={30} color="black" />
					<Text>{itemCount}</Text>
				</TouchableOpacity>
			),
			
		});

	},[ totalPrice, itemCount]);

	useEffect(() => {
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
					setEmail(mydata.email);
					setPreSetAddress(mydata.address);
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
				price= {itemData.item.price.toFixed(2)}
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

	const renderCartList = itemData => {
		if(itemData.item.count <= 0){
			return(
				<View></View>
			)
		}
		else{
			return(
				<View style={{flex:1, flexDirection:"row"}}>
					<Text style= {{flex:6}}>{itemData.item.count}X {itemData.item.name} - ${itemData.item.price.toFixed(2)}</Text>
					<TouchableOpacity style={{flex:1, backgroundColor:'lightblue'}} onPress={()=>handleUpdateCount(itemData,true)}>
						<Text style={styles.textStyle}>+</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{flex:1, backgroundColor:'red'}} onPress={()=>handleUpdateCount(itemData,false)}>
						<Text style={styles.textStyle}>-</Text>
					</TouchableOpacity>
				</View>
			)
		}

	}
	//console.log(props.route.params.storeName)
  return (
	<View>
		
		<View style={{height:80,backgroundColor:'lightblue',justifyContent:"space-evenly",borderWidth:1,borderColor:"black"}}>
			<Text style= {styles.textStyle} >Total Price:${totalPrice.toFixed(2)}</Text>
		</View>
		
		
		<Modal 
			visible= {cartModal} 
			animationType= "fade"
			onRequestClose={ () => setCartModal(false)}
		>
			<View style={{flex:1}}>
				<View style={{flex:1, backgroundColor:"lightblue",borderWidth:1,borderColor:"black"}}>
					<Text style= {styles.textStyle} >Total Price:${totalPrice.toFixed(2)}</Text>
				</View>
				
				<View style= {{flex:3, justifyContent:"space-evenly",borderWidth:1,borderColor:"black"}}>
					<Text style= {styles.textStyle} >Current Selected Time for Delivery:</Text>
					<Text style= {styles.textStyle} >{dateDisplay}</Text>
					<TouchableOpacity
						style={{backgroundColor:'lightblue',borderWidth:1,borderColor:"black",justifyContent:"center"}}
						onPress={onPressDateViewButton}>
						<Text style= {styles.textStyle} >Select a Delivery Date and Time</Text>
					</TouchableOpacity>
				</View>

				<View style= {{flex:3, justifyContent:"space-evenly",borderWidth:1,borderColor:"black"}}>
					<Text style={styles.textStyle}> Entered Delivery Address: </Text>
					<View style={{flexDirection:"row"}}>
						<TextInput
							style={{backgroundColor:'lightblue',textAlign:"center",fontSize:20,flex:4,borderWidth:1,borderColor:"black"}}
							value={address}
							onChangeText={handleChangeAddress}
							placeholder="Enter Your Address!"
						/>
						<TouchableOpacity 
							style={{backgroundColor:'lightblue', flex:1,borderWidth:1,borderColor:"black"}} 
							onPress={()=> setAddress(presetAddress)}
						>
							<Text>Use Profile Address</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style= {{flex:4, justifyContent:"space-evenly",borderWidth:1,borderColor:"black"}}>
					<Text style={styles.textStyle}> Current Items:</Text>
					<FlatList data={listOfItems} keyExtractor={(item,index) => item.id} renderItem={renderCartList} />
				</View>

				<View style={styles.modalEndButtonLayout, {flex: 1, justifyContent: "space-evenly", flexDirection:"row"}}>
					<TouchableOpacity style={{backgroundColor:'lightblue', flex:1,borderWidth:1,borderColor:"black"}} onPress= {handleListPublish}>
							<Text style= {styles.textStyle}>Publish List</Text>
					</TouchableOpacity>
				
					<TouchableOpacity style={{backgroundColor:'red', flex:1,borderWidth:1,borderColor:"black"}} onPress={()=>setCartModal(false)}>
						<Text style= {styles.textStyle}>Cancel</Text>
					</TouchableOpacity>

				</View>
			</View>
		</Modal>

		<DateTimePickerModal
			isVisible={viewDateModal}
			onConfirm={handleConfirm}
			onCancel={onPressCancel}
			mode="datetime"
		/>
		<FlatList data={listOfItems} keyExtractor={(item,index) => item.id} renderItem={renderGridItem} numColumns={2}/>
	</View>
  );
}

const styles = StyleSheet.create({
	textStyle: {
		textAlign:"center",
		fontSize:20
	},
	viewTotalPriceStyle: {
		backgroundColor:'lightblue',
		justifyContent:"space-evenly",
	},
	modalEndButtonLayout: {
		flexDirection: "row",
		justifyContent:'center',
		height:80,
	},
	modalEndButtons: {
		borderRadius:100,
		justifyContent:"space-evenly",
		borderColor:'black',
		borderWidth:10,
	}

});
export default CustomerCreateList;

//numColumns={2} this goes in flatlist element and  will output as two columns need to style

{/* <SomeButton title= "Confirm and Publish List" style={styles.modalEndButtons} onPress={handleListPublish}/>
				<SomeButton title = "Cancel" style={styles.modalEndButtons} onPress={()=>setCartModal(false)}/> */}