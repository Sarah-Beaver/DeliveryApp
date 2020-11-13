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

const ChangeEmailScreen = props =>  {

    const [proposedEmailName, setProposedEmail] = useState('');
    const [proposedPassword, setProposedPassword] = useState('');
    
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
    const displayPasswordHandler = (enteredText) => {
        setProposedPassword(enteredText);
    };
    
   

    UpdateEmail=(proposedEmailName,proposedPassword,props)=>{

        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(
            user.email, proposedPassword);

        user.reauthenticateWithCredential(cred).then(() => {
    
        const db = firebase.firestore();
        const currUID=user.uid;
        user.updateEmail(proposedEmailName).then(() => {
            db.collection("Users").doc(currUID).update({
                email:proposedEmailName
            }).then(()=>{
                alert("Email has been updated")
                prop.navigation.replace('Profile')
            }).catch((error)=> {
                console.log(error);
            });
        }).catch((error) => { 
            alert("Issue with updating email. Please verify valid email.")
            console.log(error); });

        }).catch((error) => { 
            alert("Issue with updating email. Please verify valid email.")
            console.log(error); });
    }
        return (
            <View style={styles.screen}>
                {/* <Form> */}
                {/* <Item style={styles.title}>
                    <Text style={styles.titleText}> </Text>
       
                </Item> */}
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
                    <Text style={styles.text}>Password: </Text>
                    <TextInput style={styles.textInput}
                    // placeholder= {profileInfo.displayName} 
                    value = {proposedPassword}
                    // value={profileInfo.displayName}
                    secureTextEntry
                    onChangeText= {displayPasswordHandler}
                    />
                </Item>
                <View style={styles.spacing}></View>
                <SomeButton title="Confirm Changes"
          onPress={()=>UpdateEmail(proposedEmailName,proposedPassword, props)}
        />

            {/* </Form> */}
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
export default ChangeEmailScreen;