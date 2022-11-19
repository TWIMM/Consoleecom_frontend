import {SafeAreaView, View, Text , TouchableOpacity , ScrollView ,Image } from 'react-native'
import React , {useState , useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux';
import { addproduit , getEachProduct} from '../redux/myslices/Eachprothemeslice';
import styles from './styles/styles';
import { AntDesign , Feather , Fontisto} from '@expo/vector-icons';

export default function EachProduct( ) {

    let EachProduct = useSelector(getEachProduct)
    const [gettingProducts , setGettingProducts] = useState(EachProduct)
    useEffect(()=>{
       setGettingProducts(EachProduct);
    }, [EachProduct , gettingProducts])
   
  return (
    <View style={styles.eachProductContainer}>
       <SafeAreaView style={styles.eachprof_child}>       
                
                <View style={styles.eachchild_fchild}>       
                    
                    <TouchableOpacity style={styles.circleone}>
                       <AntDesign name="back" size={30} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circletwo}>
                       <AntDesign name="shoppingcart" size={24} color="black" />
                    </TouchableOpacity>
                      
                </View>
                
                <View style={styles.eProInfo}>       
                    <View style={styles.eProInfo_childs}>       
                    
                        <Text style={styles.eProInfo_childs.child1}>
                            {gettingProducts.product_name}  
                        </Text>
                        <Text style={styles.eProInfo_childs.child2}>
                            {gettingProducts.product_title}  
                        </Text>
                        <Text style={styles.eProInfo_childs.child2}>
                            {gettingProducts.product_price} $ 
                        </Text>
                
                    </View>
                   
                
                </View>
            
        </SafeAreaView>
        <View style={styles.eachpros_child}>       
                
              <View style={styles.description}>            
                    <Text style={styles.description.title}>
                        {gettingProducts.product_name} 
                    </Text>
                    <Text style={styles.eProInfo_childs.child2}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                    
                </View>
                <ScrollView 
                
                 style={styles} 
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
                 >   

                     <View style={styles}>            
                          
                       
                     </View>
                     <View style={styles}>            
                          
                    
                     </View>
                     <View style={styles}>            
                          
                    
                     </View>
                     <View style={styles}>            
                          
                    
                      </View>
                    
                </ScrollView>
            
        </View>
        <View  style={styles.eProInfo.hisS_child}>       
                        
           <Image source={require('../images/controller3.png')}/>  
            
        </View>
    </View>
  ) 
}