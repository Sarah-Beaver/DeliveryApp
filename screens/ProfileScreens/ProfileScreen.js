import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {HyperlinkButton} from '../../components/HyperlinkButton'
import * as firebase from 'firebase';

const ProfileScreen = props =>  {

  signOut=(props)=>{
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
	}
});
export default ProfileScreen;