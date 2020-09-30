import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import CartScreen from '../screens/CartScreen';
import CourierHomeScreen from '../screens/CourierHomeScreen';
import CustomerHomeScreen from '../screens/CustomerHomeScreen';
import JobDetailScreen from '../screens/JobDetailScreen';
import JobSelectScreen from '../screens/JobSelectScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import StoreSelectScreen from '../screens/StoreSelectScreen';
import GroceryScreen from '../screens/GroceryScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import insideAppIndex from '../screens/insideAppIndex';
// instead of doing key:val, we can make val an object if needed

const DeliveryNavigator = createStackNavigator({
    Welcome: WelcomeScreen,
    Cart: CartScreen,
    CourierHome: CourierHomeScreen,
    CustomerHome: CustomerHomeScreen,
    Grocery: GroceryScreen,
    JobDetail: JobDetailScreen,
    JobSelect: JobSelectScreen,
    Login: LoginScreen,
    Profile: ProfileScreen,
    Register: RegistrationScreen,
    StoreSelect: StoreSelectScreen,
    insideApp: insideAppIndex,
});

export default createAppContainer(DeliveryNavigator);