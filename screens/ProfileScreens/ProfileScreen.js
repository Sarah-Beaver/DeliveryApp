import React, {useState} from 'react';
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
  const [profileInfo, setProfileInfo] = useState({
    uid:"",
    displayName: "",
    email: "",
    password:"",
    address:"",
    phone:"",
  });

// componentDidMount() {
  try{
    const db = firebase.firestore();
    const currUID = firebase.auth().currentUser.uid;
    
    db.collection("Users").doc(currUID).get().then( (doc) => {
      // console.log(doc);
      if (doc.exists) {
        const mydata= doc.data();
        setProfileInfo({
          uid: mydata.uid,
          email: mydata.email,
          displayName: mydata.displayName,
          password:mydata.password,
          phone:mydata.phone,
          address:mydata.address,
        })
        // displayNameHandler(mydata.displayName)
        // displayPhoneHandler(mydata.phone)
        // displayAddressHandler(mydata.address)
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

// }
  
  const [proposedDisplayName, setProposedDisplayName] = useState(profileInfo.displayName);
  const [proposedPhone, setProposedPhone] = useState(profileInfo.phone);
  const [proposedAddressName, setProposedAddress] = useState(profileInfo.address);

  const displayNameHandler = (enteredText) => {
		setProposedDisplayName(enteredText);
  };
  
  const displayPhoneHandler = (enteredText) => {
		setProposedPhone(enteredText);
  };
  
  const displayAddressHandler = (enteredText) => {
		setProposedAddress(enteredText);
  };

  MakeChanges=(proposedAddressName,proposedDisplayName,proposedPhone, props)=>{
    // console.log(proposedAddressName)
    // console.log(proposedDisplayName)
    // console.log(proposedPhone)
    console.log("Test")
    const db = firebase.firestore();
    const currUID = firebase.auth().currentUser.uid;
 
      if(proposedAddressName)
      {
        db.collection("Users").doc(currUID).update({
          address:proposedAddressName
        }).then(() => {
          console.log('Profile Successfully Edited!');
        }).catch((error) => {
          console.log('Error updating the document:', error);
        })    
      }

      if(proposedDisplayName)
      {
        db.collection("Users").doc(currUID).update({
          displayName:proposedDisplayName
        }).then(() => {
          console.log('Profile Successfully Edited!');
        }).catch((error) => {
          console.log('Error updating the document:', error);
        })    
      }

      if(proposedPhone)
      {
        db.collection("Users").doc(currUID).update({
          phone:proposedPhone
        }).then(() => {
          console.log('Profile Successfully Edited!');
        }).catch((error) => {
          console.log('Error updating the document:', error);
        })    
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
    <Container style={styles.screen}>
      <Item style={styles.title}>
        <Text style={styles.titleText}>Hello </Text>
        <TextInput style={styles.titleText}
        placeholder= {profileInfo.displayName} 
        value = {proposedDisplayName}
        // value={profileInfo.displayName}
        
        onChangeText= {displayNameHandler}
        />
      </Item>
    <Form>
        {/* <Text>Email: {profileInfo.email}</Text> */}
        <View style={styles.profileField}>
          <Item fixedLabel style={styles.labelInputCombo}>
            <Text style={styles.text}>Email:</Text>
            <TextInput style={styles.textInput}
              // placeholder= {profileInfo.email}
              value = {profileInfo.email}
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
            <Text style={styles.text}>Phone:</Text>
            <TextInput style={styles.textInput}
              placeholder= {profileInfo.phone}
              value = {proposedPhone}
              // value={profileInfo.phone}
              onChangeText= {displayPhoneHandler}
            />
          </Item>
          <View style={styles.spacing}></View>
          <Item fixedLabel style={styles.labelInputCombo}>
            <Text style={styles.text}>Address:</Text>
            <TextInput style={styles.textInput}
              placeholder= {profileInfo.address}
              value = {proposedAddressName}
              // value={profileInfo.address}
              onChangeText= {displayAddressHandler}
            />
          </Item>
        
        </View>
        <SomeButton title="Confirm Changes"
          onPress={()=>MakeChanges(proposedAddressName,proposedDisplayName,proposedPhone, props)}
        />
    </Form>
      <HyperlinkButton 
				title={'Signout'}
				style={styles.loginbutton} 
				onPress={()=>signOut()}
			/>
       
    </Container>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
	screen: {
    flex:1,
    // // margin:10,
    padding:10,
    paddingTop:20,
	
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
  labelInputCombo:{
    
  },
  text:{
    fontSize:20,
		fontWeight:'bold',
		// alignSelf:'flex-start',
		// padding:5,
  },
  textInput:{
    fontSize:20,
  }
});
export default ProfileScreen;