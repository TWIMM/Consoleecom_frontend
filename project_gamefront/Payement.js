import { View, Text , TouchableOpacity,SafeAreaView , TextInput  } from 'react-native'
import React from 'react'
import styles from './styles/styles'
import { useNavigation } from '@react-navigation/native';
import HeaderPay from './Headerpay';
import { AntDesign , Feather , Fontisto} from '@expo/vector-icons';


export default function Payement() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.payementcont}>         

        <HeaderPay/>



        <View style={styles.checkoutinfo}>
      
      
          <Text  style={styles.checkoutinfo.theText}>
             Veuillez entrer votre numero Mobile Money  :
          </Text>

          
          <TextInput
            keyboardType='phone-pad'
            placeholder='Entrez votre numéro '
            style={styles.checkoutinfo.inp}
          />
          
          <TouchableOpacity
             style={styles.checkoutinfo.valider}
           >

            <Text
                style={styles.validation}
             >
               Valider payement 
           </Text>

        </TouchableOpacity>

        </View>

        

    </SafeAreaView>
  )
}