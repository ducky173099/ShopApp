import React, { Component } from 'react';
import {View, Text} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';


const Stack = createStackNavigator();

export default class Cart extends Component {
  render() {
    return (
      // <NavigationContainer>
        // <Stack.Navigator headerMode='none' initialRouteName="CART_VIEW">
        //     <Stack.Screen name="CART_VIEW" component={CartView} />
        //     <Stack.Screen name="PRODUCTDETAIL" component={ProductDetail} />
        // </Stack.Navigator>
      /* </NavigationContainer> */


      <Stack.Navigator headerMode='none' initialRouteName="CART_VIEW">
        <Stack.Screen name="CART_VIEW" component={CartView} />
        <Stack.Screen name="PRODUCTDETAIL" component={ProductDetail} />
      </Stack.Navigator>

      // <View>
      //   <Text>CARTTTTTTTTTT</Text>
      // </View>
    
    );
  }
}
