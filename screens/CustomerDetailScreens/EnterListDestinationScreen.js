import React, {useState,useEffect} from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { onChange } from 'react-native-reanimated';

const EnterListDestination = props =>  {
	const [destinationAddress, setDestinationAddress] = useState("");
	const [destinationDateTime, setDestinationDateTime] = useState("");
	
	const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

	const onChange = (currDate) => {
		setDate(currDate)
	}

	const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
	const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };


	return(
		<View>
			<View>
				<Text>Enter Address to Deliver to:</Text>
			</View>
			<View>
				<Button title=" Enter Date of Delivey" onPress={showDatepicker}/>
			</View>
			<View>
				<Button title = "Enter Time of Delivery" onPress={showTimepicker}/>
			</View>
			{show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
			<Button 
				title="Confirm"
				onPress={() => props.navigation.push("SelectStore")}
				/>
		</View>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex:1,
		justifyContent:'center',
		alignItems: 'center',
	}
});
export default EnterListDestination;

