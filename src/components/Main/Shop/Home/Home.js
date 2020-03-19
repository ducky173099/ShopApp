import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeView from './HomeView';
import ProductDetail from '../ProductDetail/ProductDetail';
import ListProduct from '../ListProduct/ListProduct';

const Stack = createStackNavigator();

export default class Home extends Component {
  render() {
    const { navigation} = this.props;
    // const { types } = this.props;
    return (
      // <ScrollView style={{flex:1, backgroundColor:'#DBDBDB'}}>
      //       <Collection/>
      //       <Category/>
      //       <TopProduct/>
      // </ScrollView>

      <Stack.Navigator headerMode='none' initialRouteName="HOME_VIEW">
          <Stack.Screen name="HOME_VIEW" component={HomeView} />
          <Stack.Screen name="PRODUCTDETAIL" component={ProductDetail} />
          <Stack.Screen name="LISTPRODUCT" component={ListProduct} />
      </Stack.Navigator>
    );
  }
}
