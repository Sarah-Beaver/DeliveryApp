import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Button, LogBox, } from 'react-native';
import {HyperlinkButton} from '../../components/HyperlinkButton'
import {Input} from '../../components/Input';
import {Container,Form,Item} from 'native-base';
import {SomeButton} from '../../components/Button'
import * as firebase from 'firebase';
import '@firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';



LogBox.ignoreLogs(['Setting a timer for a long period of time']);

const ChangePasswordScreen = props =>  {

const [proposedEmailName, setProposedEmail] = useState('');
const [proposedOldPassword, setProposedOldPassword] = useState('');
const [proposedNewPassword, setProposedNewPassword] = useState('');


useEffect(() => { 
    console.log("this should only run once")
    try{
      const db = firebase.firestore();
      const currUID=firebase.auth().currentUser.uid;
      
      db.collection("Users").doc(currUID).get().then( (doc) => {
        // console.log(doc);
        if (doc.exists) {
          const mydata= doc.data();
          displayEmailHandler(mydata.email)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
      }).catch(function(error) {
          console.log("Error getting document:", error);
        });
    }
    catch{
      props.navigation.replace('Login')
    }
  },[])

const displayEmailHandler = (enteredText) => {
    setProposedEmail(enteredText);
};
const displayOldPasswordHandler = (enteredText) => {
  setProposedOldPassword(enteredText);
};
const displayNewPasswordHandler = (enteredText) => {
  setProposedNewPassword(enteredText);
};


UpdatePassword=(proposedEmailName,proposedOldPassword,proposedNewPassword,props)=>{

  if(proposedNewPassword.length>=8)
  {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
      proposedEmailName, proposedOldPassword);

    user.reauthenticateWithCredential(cred).then(() => {
      const db = firebase.firestore();
      user.updatePassword(proposedNewPassword).then(() => {
          alert("Password updated");
      }).catch((error) => { 
          alert("Issue with updating password.")
          console.log(error); });
    }).catch((error) => { 
        alert("Issue with updating password.")
        console.log(error); });
  }
  else{
    alert("Password is needs to be at least 8 characters")
  }
}

    return (
        <View style={styles.screen}>

            <Item>
                <Text style={styles.text}>Email: </Text>
                <TextInput style={styles.textInput}
                // placeholder= {profileInfo.displayName} 
                value = {proposedEmailName}
                // value={profileInfo.displayName}
                
                onChangeText= {displayEmailHandler}
                />
            </Item>
            <View style={styles.spacing}></View>
            <Item>
                <Text style={styles.text}>Old Password: </Text>
                <TextInput style={styles.textInput}
                // placeholder= {profileInfo.displayName} 
                value = {proposedOldPassword}
                // value={profileInfo.displayName}
                
                onChangeText= {displayOldPasswordHandler}
                />
            </Item>
            <View style={styles.spacing}></View>
            <Item>
                <Text style={styles.text}>New Password: </Text>
                <TextInput style={styles.textInput}
                // placeholder= {profileInfo.displayName} 
                value = {proposedNewPassword}
                // value={profileInfo.displayName}
                
                onChangeText= {displayNewPasswordHandler}
                />
            </Item>
            <View style={styles.spacing}></View>
            <SomeButton title="Confirm Changes"
            onPress={()=>UpdatePassword(proposedEmailName,proposedOldPassword, proposedNewPassword,props)}
            />

            <HyperlinkButton 
            title={'Profile'} 
            onPress={()=> props.navigation.replace("Profile")}
            />

        </View>
    );
}


const styles = StyleSheet.create({
	screen: {
    flex:1,
    margin:10,
    // padding:10,
    // paddingTop:20,
    flexDirection:'column',
	
  },
 
  spacing:{
    padding:15,
  },
 
  text:{
    fontSize:20,
		fontWeight:'bold',
		// alignSelf:'flex-start',
		// padding:5,
  },
  textInput:{
    fontSize:20,
  },

});
export default ChangePasswordScreen;