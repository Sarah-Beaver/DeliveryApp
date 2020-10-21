import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container,Form,Item} from 'native-base';
import {Heading} from '../../components/Heading'
import {Input} from '../../components/Input'
import {SomeButton} from '../../components/Button'
import {HyperlinkButton} from '../../components/HyperlinkButton'
import * as firebase from 'firebase';
// import { useScreens } from 'react-native-screens';
// import firestore from '@react-native-firebase/firestore';

const RegistrationScreen = props =>  {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const emailInputHandler = (enteredEmail)=> {
		setEmail(enteredEmail);
		//console.log("Current Email: ", email);
		//console.log("Current Password: ", password)
	}

	const passwordInputHandler = (enteredPassword) => {
		setPassword(enteredPassword)
		//console.log("Current Email: ", email);
		//console.log("Current Password: ", password)
	}
	
	signUpUser=(email,password,props)=>{
		try{

			if(password.length<8){
				alert("Please enter at least 8 characters for the password")
				return
			}
			firebase.auth().createUserWithEmailAndPassword(email,password).then(function (user){
					// console.log(user.user.uid)
					const userprof = {
						uid: user.user.uid,
						email: email,
						displayName: email
					}
					firebase.firestore().collection('Users').doc(user.user.uid).set(userprof)
					props.navigation.replace('Home')
				}).catch(error=>{
				alert("Error with email and password combination. Email could be inavalid or already in use.")
			});
			
		}
		catch(error){
			console.log(error.toString())
		}
	}
		

  return (
		<Container style={styles.container}>
		<Form>
			<Heading style={styles.title}> Register</Heading>
			<Item stackedLabel>
				<Text style={styles.text}>Email</Text>
				<Input 
						style={styles.input} 
						placeholderTextColor="black" 
						placeholder={'Type your email'} 
						keyboardType={'email-address'}
						onChangeText={emailInputHandler}
				/>
			</Item>
			<Item stackedLabel>
				<Text style={styles.text}>Password</Text>
				<Input 
						style={styles.input} 
						placeholderTextColor="black" 
						placeholder={'Type your password'}
						secureTextEntry
						onChangeText={passwordInputHandler}	
				/>
			</Item>
			<SomeButton 
				title={'Confirm Register'}
				style={styles.registerbutton}
				onPress={()=>
					signUpUser(email,password,props)
				}
			/>
			<HyperlinkButton 
				title={'Login'}
				style={styles.loginbutton} 
				onPress={()=>
					{
						props.navigation.replace('Login')
					}
				}
			/>
		</Form>
	</Container>
  );
}

// confirm register
// onPress={()=>this.signUpUser(this.state.email,this.state.password)}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    padding:20,
    paddingTop:35,
     
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'flex-start',
    padding:5,
  },
    input:{
      marginBottom:10, 
      
    },
    title:{
      marginBottom: 20,
      textAlign:'center',
    },
    loginbutton:{
      marginVertical:10,

    },
    registerbutton:{
      marginVertical:20,
      width:'90%',
      alignSelf:'center'
    }
  
  })
export default RegistrationScreen;