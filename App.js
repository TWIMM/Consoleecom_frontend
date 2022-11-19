import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './redux/store';
const Stack = createNativeStackNavigator();
import Gamestackscreen from './project_gamefront/Gamestackscreen'

export default function App() {
  return (
  
    <Provider store={store}>
        <Gamestackscreen/>
    </Provider>
  );
}

