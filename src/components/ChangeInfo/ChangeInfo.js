import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


export default class Authentication extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex:1, backgroundColor:'blue'}}>
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Text>go to Main</Text>
            </TouchableOpacity>
          <Text>ky ChangeInfo</Text>
      </View>
    );
  }
}
