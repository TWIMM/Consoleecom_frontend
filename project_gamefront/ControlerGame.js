import { View, Text , ScrollView, TouchableOpacity , Image } from 'react-native';
import React , {useState, useEffect} from 'react';
import styles from './styles/styles';
import FakeList from './Fakelist'; 
import { useNavigation } from '@react-navigation/native';
import {useSelector , useDispatch} from 'react-redux';
import { addproduit , getEachProduct} from '../redux/myslices/Eachprothemeslice';


export default function ControlerGame() {
   const [myproducts , setMyProducts] = useState(FakeList); 
   const navigation = useNavigation();
   let EachProduct = useSelector(getEachProduct)
   const dispatch = useDispatch(); 

   const addproduitToStore1 = ()=>{
      navigation.navigate('Eachproduct')
      dispatch(addproduit(myproducts[1])); 
      console.log('...Done');
   }

   useEffect(()=> {

       // console.log(myproducts[0].product_name);

   } , [myproducts])
   


  return (
  
       
       <ScrollView 
         style={styles.intermediatetwo}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
          >
           <View style={styles.justapply}>  

            <TouchableOpacity style={styles.intermediatetwo_childone}
              onPress={addproduitToStore1}
            >    
             <View >       
                
                <Image style={styles.test2} source={require('../images/controller3.png')}/>
            
             </View>
             <View style={styles.intermediatetwo_childtwo}>    
                
                <Text style={styles.productinfo_chilone}>
                   {myproducts[1].product_title}
                </Text>
                <Text style={styles.productinfo_chiltwo}>
                   {myproducts[1].product_name}
                </Text>
            
             </View>
                
             
            </TouchableOpacity>







            <TouchableOpacity style={styles.intermediatetwo_childone}>    
             <View >    
                
                <Image style={styles.test2} source={require('../images/controller2.png')}/>
            
             </View>
             <View style={styles.intermediatetwo_childtwo}>    
                
                <Text style={styles.productinfo_chilone}>
                   Dual Sense 
                </Text>
                <Text style={styles.productinfo_chiltwo}>
                   Official PS4 controler
                </Text>
            
             </View>
                
             
            </TouchableOpacity>






            <TouchableOpacity style={styles.intermediatetwo_childone}>    
             <View >    
                
                <Image style={styles.test2} source={require('../images/controller1.png')}/>
            
             </View>
             <View style={styles.intermediatetwo_childtwo}>    
                
                <Text style={styles.productinfo_chilone}>
                   Dual Sense 
                </Text>
                <Text style={styles.productinfo_chiltwo}>
                  Official XBOX controler
                </Text>
            
             </View>
                
             
            </TouchableOpacity>


           
           
           
            <TouchableOpacity style={styles.intermediatetwo_childone}>    
             <View >    
                
                <Image style={styles.test2} source={require('../images/controller4.png')}/>
            
             </View>
             <View style={styles.intermediatetwo_childtwo}>    
                
                <Text style={styles.productinfo_chilone}>
                   Dual Sense 
                </Text>
                <Text style={styles.productinfo_chiltwo}>
                  Official XBOX controler
                </Text>
            
             </View>
                
             
            </TouchableOpacity>


           </View>

          
           
         </ScrollView>


  )
}