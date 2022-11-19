import { SafeAreaView,View, Text } from 'react-native'; 
import React from 'react';
import CartHeader from './CartHeader';
import CartItself from './CartItself';


export default function ShoppingCart() {
  return (
    <SafeAreaView>
          <CartHeader/>
          <CartItself/>
          
    </SafeAreaView>
  )
}