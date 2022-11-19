import { View, Text , TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import styles from './styles/styles'
import CartHeader from './CartHeader';
import { AntDesign , Feather , MaterialIcons, Fontisto} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function HeaderPay() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.payementcont}>         

        <View style={styles.headercont}>

            <TouchableOpacity 
              onPress={()=>{
                navigation.navigate('Shoppingcart')
              }}
            >
              <AntDesign name="back" size={30} color="black" />
            </TouchableOpacity>

            <View style={styles.containcircle}> 

              <View style={styles.circonechecked}> 
                <View style={styles.cirone_fchild}>
              
                </View>
              </View>

              <View style={styles.intercircleonechecked}>

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


    </SafeAreaView>
  )
}