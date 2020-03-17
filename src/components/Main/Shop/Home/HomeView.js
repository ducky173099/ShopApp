import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class HomeView extends Component {
  render() {
    const { navigation } =  this.props;
    return (
      <ScrollView style={{flex:1, backgroundColor:'#DBDBDB'}}>
            <Collection/>
            <Category navigation={navigation}/>
            <TopProduct navigation={navigation}/>
      </ScrollView>
    );
  }
}
