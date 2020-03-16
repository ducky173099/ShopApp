import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Dimensions, Image, TextInput, StyleSheet} from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const {height} = Dimensions.get('window');

export default class Header extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
            <View style={styles.row1}>
                <TouchableOpacity onPress={this.props.onOpen}>
                    <Image style={styles.iconStyle} source={icMenu}/>
                </TouchableOpacity>
                <Text style={styles.title}>Wearing a Dress</Text>
                <Image style={styles.iconStyle} source={icLogo}/>
            </View>
            <TextInput 
                style={styles.textinput}
                placeholder='what do you want to buy?'
            />
 
      </View>
    );
  }
}

const styles = StyleSheet.create({
    wrapper:{
        height:height / 8,
        backgroundColor:'#34B089',
        padding: 10,
        justifyContent: 'space-around'
    },
    row1:{ 
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center',
    }, 
    textinput:{
        height: height/22 , 
        backgroundColor:'white',
        paddingLeft: 10,
        paddingVertical: 0,
        marginTop: 15,
    },
    iconStyle:{
        width: 25,
        height: 25,
    },
    title:{
        color: '#fff',
        fontSize: 18,
        
    }
})