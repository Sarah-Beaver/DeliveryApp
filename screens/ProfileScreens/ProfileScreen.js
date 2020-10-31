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

const ProfileScreen = props =>  {


const [proposedDisplayName, setProposedDisplayName] = useState('');
const [proposedPhone, setProposedPhone] = useState('');
const [proposedAddressName, setProposedAddress] = useState('');
const [proposedEmailName, setProposedEmail] = useState('');

// componentDidMount() {
  useEffect(() => { 
    console.log("this should only run once")
    try{
      const db = firebase.firestore();

      const currUID=firebase.auth().currentUser.uid;
      
      db.collection("Users").doc(currUID).get().then( (doc) => {
        // console.log(doc);
        if (doc.exists) {
          const mydata= doc.data();
    
          displayNameHandler(mydata.displayName)
          displayPhoneHandler(mydata.phone)
          displayAddressHandler(mydata.address)
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

  const displayNameHandler = (enteredText) => {
		setProposedDisplayName(enteredText);
  };

  const displayEmailHandler = (enteredText) => {
		setProposedEmail(enteredText);
  };

  const displayPhoneHandler = (enteredText) => {
		setProposedPhone(enteredText);
  };
  
  const displayAddressHandler = (enteredText) => {
		setProposedAddress(enteredText);
  };

  MakeChanges=(proposedAddressName,proposedDisplayName,proposedPhone, proposedEmailName,props)=>{
    try{  
      // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      // if (reg.test(proposedEmailName) === false) {
      //   alert("Email is Not Correct");
      // }
      // else {
        const db = firebase.firestore();
        const currUID = firebase.auth().currentUser.uid;
        // firebase.auth.currentUser.updateEmail(proposedEmailName).then(() => {
        //   console.log("Email updated!");
        // }).catch((error) => { console.log(error); });
        db.collection("Users").doc(currUID).update({
          address:proposedAddressName,
          displayName:proposedDisplayName,
          phone:proposedPhone,
          // email:proposedEmailName
        }).then(() => {
          alert('Profile Successfully Edited!');
        }).catch((error) => {
          console.log('Error updating the document:', error);
        }) 
      // }
  }
  catch{

  }  
     
    }

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
    // <ScrollView>
    <View style={styles.screen}>
      <Item style={styles.title}>
        <Text style={styles.titleText}>Hello </Text>
        <TextInput style={styles.titleText}
        // placeholder= {profileInfo.displayName} 
        value = {proposedDisplayName}
        // value={profileInfo.displayName}
        
        onChangeText= {displayNameHandler}
        />
      </Item>
    {/* <Form> */}
        {/* <Text>Email: {profileInfo.email}</Text> */}
        <View style={styles.profileField}>
          <Item fixedLabel style={styles.labelInputCombo}>
            <Text style={styles.text}>Email: </Text>
            <TextInput style={styles.textInput}
              // placeholder= {profileInfo.email}
              value = {proposedEmailName}
              // value={profileInfo.email}
              // onChangeText= {displayPhoneHandler}
            />
          </Item>
          <View style={styles.spacing}></View>
          {/* <Item fixedLabel style={styles.labelInputCombo}>
            <Text style={styles.text}>Display Name:</Text>
            <TextInput
              // placeholder= {profileInfo.displayName}
              // value = {proposedDisplayName}
              value={profileInfo.displayName}
              onChangeText= {displayNameHandler}
            />
          </Item> */}
          <Item fixedLabel style={styles.labelInputCombo}>
            <Text style={styles.text}>Phone: </Text>
            <TextInput style={styles.textInput}
              // placeholder= {profileInfo.phone}
              value = {proposedPhone}
              // value={profileInfo.phone}
              onChangeText= {displayPhoneHandler}
            />
          </Item>
          <View style={styles.spacing}></View>
          <Item fixedLabel style={styles.labelInputCombo}>
            <Text style={styles.text}>Address: </Text>
            <TextInput style={styles.textInput}
              // placeholder= {profileInfo.address}
              value = {proposedAddressName}
              // value={profileInfo.address}
              onChangeText= {displayAddressHandler}
            />
          </Item>
          </View>
       {/* <br/> */}
        <SomeButton title="Confirm Changes"
          onPress={()=>MakeChanges(proposedAddressName,proposedDisplayName,proposedPhone,proposedEmailName,props)}
        />
        
      <View style={styles.ButtonCombo}>
        <SomeButton style={styles.secureUpdate}
          title="Update Email"
          onPress={()=> props.navigation.replace("UpdateEmail")}/>
         
         <SomeButton style={styles.secureUpdate}
          title="Update Password"
          onPress={()=> props.navigation.replace("UpdatePassword")}/>
      </View>
    {/* </Form> */}
    <View>
      <HyperlinkButton style={styles.signout}
				title={'Signout'}
				style={styles.loginbutton} 
				onPress={()=>signOut(props)}
			/>
      </View>
       
    </View>
    // </ScrollView>
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
  profileField: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems:'flex-start',
    // margin:10,
    // padding:10,
    marginBottom:20,
    paddingVertical:20,
  },
  spacing:{
    padding:15,
  },
  title:{

		marginBottom: 20,
    textAlign:'center',
    justifyContent:'center',
		alignItems: 'center',
  },
  titleText:{
    fontSize:30,
    fontWeight:'bold',
  },
  ButtonCombo:{
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // padding:10,
    // margin:10,
    // alignItems: 'center',
    // justifyContent: 'center',
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
  secureUpdate:{

    // width:"49%",
    height:40,
    marginTop:10,
    // margin:10,
    padding:10,
  },
  signout:{
    
    margin:10,
    padding:10,
  }
});
export default ProfileScreen;