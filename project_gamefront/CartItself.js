import { View, ScrollView, Text , TouchableOpacity ,Image } from 'react-native'; 
import React , {useState , useEffect} from 'react'; 
import styles from './styles/styles'; 
import {  Fontisto,Ionicons, AntDesign , MaterialIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function CartItself() {

 const navigation = useNavigation();
 const [quantity1 , setQuan1] = useState(1)
 const [quantity2 , setQuan2] = useState(1)
 const [quantity3 , setQuan3] = useState(1)
 const [pr1 , setpr1] = useState(95);
 const [pr2 , setpr2] = useState(105);
 const [pr3 , setpr3] = useState(100);
 const [total , setTtotal] = useState(pr1+pr2+pr3); 
 

 const addItone = ()=>{
    setQuan1(quantity1 + 1)
 }
 const addItTwo = ()=>{
  setQuan2(quantity2 + 1)
}
const addItThree = ()=>{
  setQuan3(quantity3 + 1)
}
const deleteOne = ()=>{
  if(quantity1 === 0   ){
    setQuan1(1)
  } else {
    setQuan1(quantity1 - 1)
  } ;
 }
 const deleteTwo = ()=>{
  if(quantity2 === 0   ){
    setQuan2(1)
  } else {
    setQuan2(quantity2 - 1)
  } ;
 }
 const deleteThree = ()=>{
  if(quantity3 === 0   ){
    setQuan3(1)
  } else {
    setQuan3(quantity3 - 1)
  } ;
 }

  useEffect(()=>{
      if(quantity1 === 0   ){
        setQuan1(1)
      } ;
      
      if(quantity2 === 0){
        setQuan2(1)
      }

      if(quantity3 === 0){
        setQuan3(1)
      }


      setTtotal((pr1*quantity1) + (pr2*quantity2) + (pr3*quantity3))
      

  } , [quantity1 , quantity2, quantity3 , pr1, pr2 , pr3])


  return (
    <View style={styles.cartbody}>
      <View style={styles.containtitle}>
       <Text style={styles.cartTitle}>CartItself</Text>
      </View>

      <ScrollView style={{height:'70%'}}>
         <View style={styles.productcontainer}>

            <View style={styles.productone}>
              <View style={styles.containimage}>
                 <Image source={require('../images/controller1prime.png')}/>
              </View>

              <View style={styles.containinfo}>
                 <View >
                   <Text style={styles.infoone}>Dual sense XBOX ONE</Text>
                 </View>

                  <View >
                    <Text style={styles.infotwo}>{pr1} $</Text>
                 </View>

                  <View style={styles.addretrieve}>
                      <TouchableOpacity 
                        onPress={addItone}
                      >
                        <AntDesign name="pluscircle" size={24} color="black" />
                      </TouchableOpacity>
                      <View style={styles.quantity}>
                          <Text style={styles.quantity_child}>
                              {quantity1}
                          </Text>
                      </View>
                      <TouchableOpacity 
                        onPress={deleteOne}
                      >
                        <AntDesign name="minuscircle" size={24} color="black" />
                      </TouchableOpacity>
                 </View>
              </View>

              <TouchableOpacity style={styles.follow}>
                  <MaterialIcons name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>




            <View style={styles.producttwo}>
              <View style={styles.containimage}>
                 <Image source={require('../images/controller2prime.png')}/>
              </View>

              <View style={styles.containinfo}>
                 <View >
                   <Text style={styles.infoone}>Dual sense PS5</Text>
                 </View>

                  <View >
                    <Text style={styles.infotwo}>{pr2} $</Text>
                 </View>

                  <View style={styles.addretrieve}>
                      <TouchableOpacity
                        onPress={addItTwo}
                      >
                        <AntDesign name="pluscircle" size={24} color="black" />
                      </TouchableOpacity>
                      <View style={styles.quantity}>
                          <Text style={styles.quantity_child}>
                               {quantity2}
                          </Text>
                      </View>
                      <TouchableOpacity 
                        onPress={deleteTwo}
                      >
                        <AntDesign name="minuscircle" size={24} color="black" />
                      </TouchableOpacity>
                 </View>
              </View>

              <TouchableOpacity style={styles.follow}>
                  <MaterialIcons name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>




            <View style={styles.producttwo}>
              <View style={styles.containimage}>
                 <Image source={require('../images/controller4prime.png')}/>
              </View>

              <View style={styles.containinfo}>
                 <View >
                   <Text style={styles.infoone}>Dual sense Xbox</Text>
                 </View>

                  <View >
                    <Text style={styles.infotwo}>{pr3} $</Text>
                 </View>

                  <View style={styles.addretrieve}>
                      <TouchableOpacity 
                         onPress={addItThree}
                      >
                        <AntDesign name="pluscircle" size={24} color="black" />
                      </TouchableOpacity>
                      <View style={styles.quantity}>
                          <Text style={styles.quantity_child}>
                               {quantity3}
                          </Text>
                      </View>
                      <TouchableOpacity
                           onPress={deleteThree}
                      >
                        <AntDesign name="minuscircle" size={24} color="black" />
                      </TouchableOpacity>
                 </View>
              </View>

              <TouchableOpacity style={styles.follow}>
                  <MaterialIcons name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>


            
         </View>
      </ScrollView>

      
      <View style={styles.containfoot}>
       <View style={styles.mytot}>
          <Text style={styles.mytot.mytot_child}>
              Total
          </Text>
          <Text style={styles.mytot.mytot_child}>
               {total} $
          </Text>
       </View>

       <View style={styles.checkoutbutpar}>
           <TouchableOpacity style={styles.checkoutbut}
           onPress={()=>{
            navigation.navigate('Payement')
           }}
           >
              <Text style={styles.mytot.mytot_child}>
                 Checkout 
               </Text>
          </TouchableOpacity>
       </View>
    </View>


    </View>
  )
}