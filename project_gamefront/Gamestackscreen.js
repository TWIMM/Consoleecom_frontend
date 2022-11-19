import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View } from 'react-native';
import Homepage from './Homepage';
import {NavigationContainer} from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShoppingCart from './Shoppingcart';
import Payement from './Payement';
import EachProduct from './EachProduct';

const Stack = createNativeStackNavigator();



export default function Messengerstackscreen() {
  
  return (
  
  
    <NavigationContainer>
     
    <Stack.Navigator initialRouteName='Homepage'>
      <Stack.Screen
        name='Homepage'
        component={Homepage}
        options={{
          headerTitle: '',
          headerShown:false, 
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name='Eachproduct'
        component={EachProduct}
        options={{
          headerTitle: '',
          headerShown:false, 
          headerShadowVisible: false,
        }}
      />
      


      <Stack.Screen
        name='Shoppingcart'
        component={ShoppingCart}
        options={{
          headerTitle: '',
          headerShown:false, 
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name='Payement'
        component={Payement}
        options={{
          headerTitle: '',
          headerShown:false, 
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator> 
 
 </NavigationContainer> 

  );
}

