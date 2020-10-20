import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container,Form,Item} from 'native-base';
import {Heading} from '../../components/Heading'
import {Input} from '../../components/Input'
import {SomeButton} from '../../components/Button'
import {HyperlinkButton} from '../../components/HyperlinkButton'
import * as firebase from 'firebase';

const LoginScreen = props =>  {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const emailInputHandler = (enteredEmail)=> {
		setEmail(enteredEmail);
		console.log("Current Email: ", email);
		console.log("Current Password: ", password)
	}

	const passwordInputHandler = (enteredPassword) => {
		setPassword(enteredPassword)
		console.log("Current Email: ", email);
		console.log("Current Password: ", password)
	}
	
	
	LoginUser=(email,password,props)=>{
		try{
				firebase.auth().signInWithEmailAndPassword(email,password).then(function (user){
					console.log(user);
					let welcomestring= "Welcome " + email + "!";
					alert(welcomestring);
					props.navigation.replace('Home'); //as far as I can tell it needs to go in here for it to work
				}).catch(error => {
					alert('Invalid email and password combination');
				})
				
		}
		catch(error){
				console.log(error.toString())
		}
	}
		

  return (
		<Container style={styles.container}>
			<Form>
				<Heading style={styles.title}>Login</Heading>
				<Item stackedLabel>
					<Text style={styles.title}>Email</Text>
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
					title={'Confirm Login'} 
					style={styles.loginbutton} 
          onPress={()=>LoginUser(email,password,props)}
        />
				<HyperlinkButton 
					title={'Register'} 
					style={styles.registerbutton} 
					onPress={()=> props.navigation.replace("Register")}
        />
			</Form>
		</Container>
  );
}

//confirm login
// onPress={()=>this.LoginUser(this.state.email,this.state.password)}

const styles=StyleSheet.create({
	container:{
		flex: 1,
		padding:10,
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
		marginVertical:20,
		width:'90%',
		alignSelf:'center'
	 
	
	},
	registerbutton:{
		marginVertical:10,

	}

})

export default LoginScreen;

//onPress={()=>props.navigation.replace("Home")}