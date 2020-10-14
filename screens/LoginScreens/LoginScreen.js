import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container,Form,Item} from 'native-base';
import {Heading} from '../../components/Heading'
import {Input} from '../../components/Input'
import {SomeButton} from '../../components/Button'
import {HyperlinkButton} from '../../components/HyperlinkButton'

const LoginScreen = props =>  {

	// LoginUser=(email,password,props)=>{
	// 	//  onPress={()=>{
	// 	//   props.navigation.replace('CustomerHome') 
	// 	// }}
		
	// 				try{
	// 						firebase.auth().signInWithEmailAndPassword(email,password).then(function (user){
	// 							console.log(user)
	// 						})
		
	// 						// alert(firebase.auth().signInWithEmailAndPassword(email,password))
	// 						this.props.navigation.replace('CustomerHome')
							
	// 				}
	// 				catch(error){
	// 						console.log(error.toString())
	// 				}
	// 		}
		

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
					/>
				</Item>
				<Item stackedLabel>
					<Text style={styles.text}>Password</Text>
					<Input 
						style={styles.input} 
						placeholderTextColor="black" 
						placeholder={'Type your password'}
						secureTextEntry			
					/>
        </Item>
				<SomeButton
					title={'Confirm Login'} 
					style={styles.loginbutton} 
          onPress={()=>props.navigation.replace("Home")}
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