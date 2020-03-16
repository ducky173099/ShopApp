import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


export default class Menu extends Component {
  render() {
        const {navigation} = this.props;
        return (
            <View style={{flex:1, backgroundColor:'red'}}>
                <TouchableOpacity onPress={() => navigation.navigate('AUTHENTICATION')}>
                    <Text>go to authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CHANGEINFO')}>
                    <Text>go to change info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ORDERHISTORY')}>
                    <Text>go to orderHistory</Text>
                </TouchableOpacity>
            </View>
        );
    }
}