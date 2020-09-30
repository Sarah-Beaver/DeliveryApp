import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {SomeButton} from './Button'

export function AppHeading({children,style,props}){
    return(
        <View style={[styles.screen,style]}>

            <SomeButton style={styles.tabs} title='Profile' onPress={ () => {
                props.navigation.navigate({routeName: 'Profile'});
            }}/>
            <SomeButton style={styles.tabs} title="Customer's Lists" onPress={ () => {
                props.navigation.navigate({routeName: 'StoreSelect'});
            }}/>
            <SomeButton style={styles.tabs} title='Courier View' onPress={ ()=> {
                props.navigation.navigate({routeName: 'CourierHome'});
            }}/>
            

        </View>
    );
}

const styles=StyleSheet.create({
  screen:{
    alignItems:'flex-start',
    backgroundColor:'lightblue',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    
    borderColor:'black',
    borderTopWidth:1,
    borderBottomWidth:1,
    height:75,
    
 
  },
 
  tabs:{
      width:'34%',
      padding:10,
    height:'100%',
    borderRadius:0,
    borderRightWidth:2,
    borderLeftWidth:2,
    
    

  }
})