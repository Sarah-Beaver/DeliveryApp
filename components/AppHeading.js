import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TabsButton} from './TabsButtons'

export function AppHeading({children,style,props,currentpage}){
    return(
        <View style={[styles.screen,style]}>

            <TabsButton style={styles.tabs} title='Profile' onPress={ () => {
                props.navigation.navigate({routeName: 'Profile'});
            }}/>
            <TabsButton style={styles.tabs} title="Customer's Lists" onPress={ () => {
                props.navigation.navigate({routeName: 'StoreSelect'});
            }}/>
            <TabsButton style={styles.tabs} title='Courier View' onPress={ ()=> {
                props.navigation.navigate({routeName: 'CourierHome'});
            }}/>
            

        </View>
    );
}

const styles=StyleSheet.create({
  screen:{
    alignItems:'flex-start',
    // backgroundColor:'lightblue',
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    
    // borderColor:'black',
    // borderTopWidth:1,
    // borderBottomWidth:1,
    height:50,
    
 
  },
 
  tabs:{
    width:'34%',
    padding:10,
    height:'100%',
    borderBottomWidth:2,
    borderLeftWidth:2,
    // borderTopWidth:2,
    // borderRadius:0,
    // borderRightWidth:2,
    // borderLeftWidth:2,
    fontSize:15,

  },
  currentTab:{
    backgroundColor:'lightblue',
    borderBottomColor:'pink',
  },
})