import React, { Component } from 'react';
import {View, Text} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import SearchView from './SearchView';
import ProductDetail from '../ProductDetail/ProductDetail';


const Stack = createStackNavigator();

export default class Search extends Component {
  render() {
    return (

      <Stack.Navigator headerMode='none' initialRouteName="SEARCH_VIEW">
        <Stack.Screen name="SEARCH_VIEW" component={SearchView} />
        <Stack.Screen name="PRODUCTDETAIL" component={ProductDetail} />
      </Stack.Navigator>

    
    );
  }
}
