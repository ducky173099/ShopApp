import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

export default class HomeView extends Component {
    constructor(props){
      super(props);
      this.state={
          types:[],
          topProducts:[],
          cartArray: [],

      }
  }

  componentDidMount(){
      fetch('http://192.168.1.4:81/APIShopApp/')
      .then(res => res.json())
      .then(resJson => {
        const { type, product } = resJson;
        this.setState({ 
          types: type,
          topProducts: product,
          
        });
      });
  }


  render() {
    const { navigation } =  this.props;
    const { types,topProducts } = this.state;

    return (
      <ScrollView  style={{flex:1, backgroundColor:'#DBDBDB'}}>
          <Collection/>
          <Category navigation={navigation} types={types}/>
          <TopProduct navigation={navigation} topProducts={topProducts}/>
      </ScrollView>

    );
  }
}