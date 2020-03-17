import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';



export default class ListProduct extends Component {
  // goBack(){
  //   const{navigaton} = this.props;
  //   navigaton.pop();
  // }
  render() {
    const { navigation } = this.props;
    return (
      <View>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Text>Go Back Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PRODUCTDETAIL')}>
            <Text>Go to Detail</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
