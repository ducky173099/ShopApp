import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Collection from './Collection';
// import Category from './Category';
// import TopProduct from './TopProduct';

import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

const Stack = createStackNavigator();

export default class Home extends Component {
  render() {
    return (
      // <ScrollView style={{flex:1, backgroundColor:'#DBDBDB'}}>
      //       <Collection/>
      //       <Category/>
      //       <TopProduct/>
      // </ScrollView>

      // <NavigationContainer>
          <Stack.Navigator headerMode='none' initialRouteName="HOME_VIEW">
              <Stack.Screen name="HOME_VIEW" component={HomeView} />
              <Stack.Screen name="PRODUCTDETAIL" component={ProductDetail} />
              <Stack.Screen name="LISTPRODUCT" component={ListProduct} />
          </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}
