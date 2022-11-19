import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo ,AntDesign, Ionicons, FontAwesome, FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons';
import styles from './styles/styles'

export default function Footer() {
  return (
    <View style={styles.footer}>
       <View style={styles.footer_child}>
         <TouchableOpacity style={styles.eachchild1}>
            <View style={styles.divL}>
               <Entypo name="home" size={24} color="white" />
            </View>
            <View style={styles.divR}>
               <Text style={styles.footer_test}>Home</Text>
            </View>
         </TouchableOpacity>



         <TouchableOpacity style={styles.eachchild}>
            <FontAwesome name="user" size={24} color="black" />
         </TouchableOpacity>

         <TouchableOpacity style={styles.eachchild}>
           <Ionicons name="settings" size={24} color="black" />
         </TouchableOpacity>

         <TouchableOpacity style={styles.eachchild}>
            <FontAwesome5 name="file-archive" size={24} color="black" />
         </TouchableOpacity>
       </View>
    </View>
  )
}