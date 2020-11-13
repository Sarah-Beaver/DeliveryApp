import React, {useState, useEffect}  from 'react';
import {TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import '@firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';

const CustomerViewLists = props =>  {

  const [lists, setLists]=useState([]);

  const updateLists=(currList,currId)=>{
    setLists(lists=>[...lists,{
      Address:currList.Address,
      Store:currList.Store,
      DateTime:currList.datetime,
      Total:currList.Total,
      id:currId
    }]);
  }

  useEffect(()=>{
    try{
        const db=firebase.firestore();
        const currUID=firebase.auth().currentUser.uid;
     
        db.collection("Users").doc(currUID).collection("Lists").get().then((snapshot)=>{
            snapshot.forEach((doc)=>{
                // console.log(doc.data().datetime.seconds);
                updateLists(doc.data(),doc.id);
            });
        });
       
    }
    catch{
      console.log("Failed to Connect to db");
    }

  },[]);

  console.log(lists);

  // const renderGridItem = itemData => {
	// 	//console.log(itemData)
	// 	return(
	// 		<StoreGridTile
	// 			title= {itemData.item.id}
	// 			// onSelect={ ()=> 
	// 			// 	{
	// 			// 		props.navigation.navigate("CreateList", {
	// 			// 			storeName: itemData.item.id
	// 			// 		})
	// 			// 	}
	// 			// }
	// 		/>
	// 	)
  // }
  
  return (
    <View style={styles.screen}>
      <FlatList
      data={lists}
      renderItem={({ item }) => (
        // <TouchableOpacity >

          <View style={styles.Item}>
          <Text style={styles.textSize}><Text style={styles.titleText}>Store: </Text> {item.Store}</Text>
          <Text style={styles.textSize}><Text style={styles.titleText}>Delivery Address: </Text>{item.Address}</Text>
          <Text style={styles.textSize}><Text style={styles.titleText}>Total: </Text>{item.Total}</Text>
          <Text style={styles.textSize}><Text style={styles.titleText}>Delivery Time: </Text>{new Date(item.DateTime.toDate()).toLocaleString()} </Text>

          </View>
        /* </TouchableOpacity> */
      )}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
	screen: {
		flex:1,
		justifyContent:'center',
    alignItems: 'center',
    // padding:10,
    margin:10,
    
  },
  Item:{
      borderColor:"black",
      // borderRadius:25,
      borderWidth:2,
      padding: 10,
      margin:5,
      fontSize:25,
      backgroundColor:'lightcyan',
      // width:"95%",
  },
  titleText:{
    // fontSize:15,
    fontWeight:'bold',
  },
  textSize:{
    fontSize:15,
  },
});
export default CustomerViewLists;