import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Container,Form,Item} from 'native-base';
import {Heading} from '../../components/Heading'
import {Input} from '../../components/Input'
import {SomeButton} from '../../components/Button'
import {HyperlinkButton} from '../../components/HyperlinkButton'

const RegistrationScreen = props =>  {
	// signUpUser=(email,password,props)=>{
	// 	//  onPress={()=>{
	// 	//   props.navigation.replace('CustomerHome') 
	// 	// }}
		
	// 				try{
	// 						if(this.state.password.length<6)
	// 						{
	// 							alert("Please enter at least 6 characters for the password")
	// 							return
	// 						}
	// 						firebase.auth().createUserWithEmailAndPassword(email,password)
	// 						this.props.navigation.replace('CustomerHome')
							
	// 				}
	// 				catch(error){
	// 						console.log(error.toString())
	// 				}
	// 		}
		

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
				title={'Confirm Register'}
				style={styles.registerbutton}
				onPress={() =>
					{
						props.navigation.replace("Home")
					}
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