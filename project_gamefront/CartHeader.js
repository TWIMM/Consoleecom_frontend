import { View,Text , TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles/styles'
import { AntDesign , Feather , Fontisto} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CartHeader() {
   const navigation = useNavigation();
  return (
    <View style={styles.headercont}>

      <TouchableOpacity 
        onPress={()=>{
          navigation.navigate('Homepage')
        }}
      >
        <AntDesign name="back" size={30} color="black" />
      </TouchableOpacity>

      <View style={styles.containcircle}> 

         <View style={styles.circone}> 
           <View style={styles.cirone_fchild}>
         
           </View>
         </View>

         <View style={styles.intercircleone}>

         </View>

         <View style={styles.circone}> 
           <View style={styles.cirone_fchild}>
         
           </View>
         </View>

          <View style={styles.intercircleone}>

          </View>

         <View style={styles.circone}> 
           <View style={styles.cirone_fchild}>
         
           </View>
         </View>

      </View>

      <View>
        <Text style={styles.itemnumb}>
           3 Items
        </Text>
      </View>

      

    </View>
  )
}