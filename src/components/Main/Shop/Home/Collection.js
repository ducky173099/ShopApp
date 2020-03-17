import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions} from 'react-native';


import bannerImage from '../../../../media/temp/banner.jpg';

const {width ,height} = Dimensions.get('window');

export default class Collection extends Component {
  render() {
    return (
        <View style={styles.wrapper}>
            <View style={{height: 45, justifyContent: 'center'}}>
                <Text style={styles.textStyle}>SPRING COLLECTION</Text>
            </View>
            <View style={{flex: 4, justifyContent:'flex-end'}}>
                <Image style={styles.imageStyle} source={bannerImage}/>
            </View>
        </View>
    );
  }
}
const imgWidth = width - 40;
const imgHeight = (imgWidth / 933) * 465;


const styles = StyleSheet.create({
    wrapper:{
        // height: height * 0.38,
        width: width -20,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0,height: 6,},
        shadowOpacity: 0.39,
        elevation: 13,
        padding: 10,
        paddingTop: 0,

    },
    imageStyle:{
        height: imgHeight,
        width: imgWidth,

    },
    textStyle:{
        fontSize: 20,
        color: '#AFAFAF',

    }
})