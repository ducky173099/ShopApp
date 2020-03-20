import React, { Component } from 'react';
import {View, Text} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';


const Stack = createStackNavigator();

export default class Cart extends Component {

  render() {
    const { navigation } = this.props;
    const { cartArray } = this.props;
    const {topProducts} = this.props;

    return (
      // <NavigationContainer>
        // <Stack.Navigator headerMode='none' initialRouteName="CART_VIEW">
        //     <Stack.Screen name="CART_VIEW" component={CartView} />
        //     <Stack.Screen name="PRODUCTDETAIL" component={ProductDetail} />
        // </Stack.Navigator>
      /* </NavigationContainer> */


      <Stack.Navigator headerMode='none' initialRouteName="CART_VIEW">
        <Stack.Screen name="CART_VIEW" component={() => <CartView cartArray={cartArray} navigation={navigation} topProducts={topProducts}/>} />
        <Stack.Screen name="PRODUCTDETAIL" component={ProductDetail} />
      </Stack.Navigator>

    
    );
  }
}
