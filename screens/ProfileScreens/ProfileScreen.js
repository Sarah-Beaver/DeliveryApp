import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, LogBox, } from 'react-native';
import {HyperlinkButton} from '../../components/HyperlinkButton'
import {Input} from '../../components/Input';
import {Container,Form,Item} from 'native-base';
import {SomeButton} from '../../components/Button'
import * as firebase from 'firebase';
import '@firebase/firestore';


LogBox.ignoreLogs(['Setting a timer for a long period of time']);

const ProfileScreen = props =>  {
  const [profileInfo, setProfileInfo] = useState({
    uid:"",
    displayName: "",
    email: "",
  });
  const [proposedDisplayName, setProposedDisplayName] = useState("");
  const displayNameHandler = (enteredText) => {
		setProposedDisplayName(enteredText);
  };
  

  const db = firebase.firestore();

  const currUID = firebase.auth().currentUser.uid;
  const docRef= db.collection("Users").doc(currUID)
  docRef.get().then( (doc) => {
    if (doc.exists) {
      const mydata= doc.data();
      setProfileInfo({
        uid: mydata.uid,
        email: mydata.email,
        displayName: mydata.displayName,
      })
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }).catch(function(error) {
      console.log("Error getting document:", error);
    });



  const signOut=(props)=>{
    try{
        firebase.auth().signOut();
        props.navigation.replace('Login')
				
    }
    catch(error){
      console.log(error.toString())
    }
  }

  return (
    <View style={styles.screen}>
      <Text>ProfileScreen!</Text>
      <Text>Email: {profileInfo.email}</Text>
      <View style={styles.profileField}>
        <Text>Display Name:</Text>
        <TextInput
          placeholder= {profileInfo.displayName}
          value = {proposedDisplayName}
          onChangeText= {displayNameHandler}
        />
      </View>
      <SomeButton title="Confirm Changes"/>
      <HyperlinkButton 
				title={'Signout'}
				style={styles.loginbutton} 
				onPress={()=>signOut()}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
	screen: {
		flex:1,
		justifyContent:'center',
		alignItems: 'center',
  },
  profileField: {
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
export default ProfileScreen;