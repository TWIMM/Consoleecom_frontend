import { View,SafeAreaView,TouchableOpacity, Text,Image, ScrollView } from 'react-native'
import React , {useState, useEffect} from 'react'
import ControlerGame from './ControlerGame';
import styles from './styles/styles'
import { Entypo ,AntDesign, Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {useSelector, useDispatch} from 'react-redux';
import { first,second , third, fourth, getThemeState} from '../redux/myslices/ColorState';
import Footer from './Footer';
import { useNavigation } from '@react-navigation/native';


export default function Homepage() {
  const copyThemeState = useSelector(getThemeState);
  const [colorState , setColorState] = useState(copyThemeState); 
  const navigation  = useNavigation(); 


  const dispatch = useDispatch(); 

  const first_one = ()=>{
    dispatch(first()); 
  }

  const second_one = ()=>{
    dispatch(second()); 
  }


  const third_one = ()=>{
    dispatch(third()); 
  }


  const fourth_one = ()=>{
    dispatch(fourth()); 
  }

  useEffect(()=>{

      setColorState(copyThemeState); 

  } , [copyThemeState, colorState])


  return (
    <SafeAreaView  style={styles.container}>
      
      <View style={styles.firstchild}>

         <View style={styles.firstchild_childone} >
          

            <View style={styles.title}>
                 <Text style={styles.title_childone}>
                       Featured
                 </Text>
                 <Text style={styles.title_childtwo}>
                       Products
                 </Text>
            </View>
         </View>

         <View style={styles.intermediateone}>
           <View style={styles.intermediateone_childone}>

              <View style={{
                 
                  width:'20%',
                  display:'flex', 
                  justifyContent:'center',
                  alignItems:'center', 
                  height:'100%',
                  backgroundColor:colorState[0], 
                  marginTop:'auto', 
                  marginBottom:'auto',
                  borderRadius:'8%',
              
              }}>
                 <TouchableOpacity
                    onPress={first_one}
                 >
                   <Ionicons name="ios-options-outline" size={24} color={colorState[4]} />
                 </TouchableOpacity>
              </View>


              <View 
              style={{
                 
                width:'20%',
                display:'flex', 
                justifyContent:'center',
                alignItems:'center', 
                height:'100%',
                backgroundColor:colorState[1],
                marginTop:'auto', 
                marginBottom:'auto',
                borderRadius:'8%',
            
            }}>
                <TouchableOpacity
                   onPress={second_one} 
                >
                 <Ionicons name="game-controller-outline" size={24}  color={colorState[5]} />
                </TouchableOpacity>
              </View>


              <View 
               style={{
                 
                width:'20%',
                display:'flex', 
                justifyContent:'center',
                alignItems:'center', 
                height:'100%',
                backgroundColor:colorState[2],
                marginTop:'auto', 
                marginBottom:'auto',
                borderRadius:'8%',
            
            }}>
                 <TouchableOpacity
                   onPress={third_one}
                 >
                    <MaterialCommunityIcons name="nintendo-game-boy" size={24} color={colorState[6]}/>
                 </TouchableOpacity>
              </View>


              <View  
              style={{ 
              width:'20%',
              display:'flex', 
              justifyContent:'center',
              alignItems:'center', 
              height:'100%',
              backgroundColor:colorState[3],
              marginTop:'auto', 
              marginBottom:'auto',
              borderRadius:'8%',
              }}>
                <TouchableOpacity
                  onPress={fourth_one}
                >
                  <Entypo name="mouse" size={24} color={colorState[7]} />
                </TouchableOpacity>
              </View>
           </View>
         </View>

         <ControlerGame/>


         <View style={styles.firstchild_childtwo}>
            <View style={styles.circletwo} >
              <TouchableOpacity
                onPress={()=>{navigation.navigate('Shoppingcart')}}
              >
                 <AntDesign name="shoppingcart" size={24} color="black" />
              </TouchableOpacity>  
            </View>
         </View>

      </View>

      <View style={styles.secondchild}>
         <View >
           <Footer/>
         </View>
      </View>

    

    </SafeAreaView>
  )
}