import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


export default class CartView extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Text>ccccccccc</Text>
                <TouchableOpacity onPress={() => navigation.navigate('PRODUCTDETAIL')}>
                    <Text>Go to Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
