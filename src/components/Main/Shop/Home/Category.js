import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ImageBackground} from 'react-native';
import Swiper from 'react-native-swiper';



import littleIcon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyicon from '../../../../media/temp/party.jpg';

const {width ,height} = Dimensions.get('window');

export default class Category extends Component {
  render() {
    return (
        <View style={styles.wrapper}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.textStyle}>LIST OF CATEGORIES</Text>
            </View>
            <View style={{flex: 4, justifyContent:'flex-end'}}>
                <Swiper>
                    <ImageBackground style={styles.imageStyle} source={littleIcon}>
                        <Text style={styles.cateTitle}>Little Dress</Text>
                    </ImageBackground>
                    <ImageBackground style={styles.imageStyle} source={maxiIcon}>
                        <Text style={styles.cateTitle}>Maxi Dress</Text>
                    </ImageBackground>
                    <ImageBackground style={styles.imageStyle} source={partyicon}>
                        <Text style={styles.cateTitle}>Party Dress</Text>
                    </ImageBackground>
                </Swiper>
            </View>
        </View>
    );
  }
}
const imgWidth = width - 40;
const imgHeight = (imgWidth / 933) * 465;


const styles = StyleSheet.create({
    wrapper:{
        height: height * 0.36,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0,height: 6,},
        shadowOpacity: 0.39,
        elevation: 13,
        padding: 10,
        paddingTop: 0,
        marginTop: 0,
        justifyContent:'space-between'

    },
    imageStyle:{
        height: imgHeight,
        width: imgWidth,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize: 20,
        color: '#AFAFAF',

    },
    cateTitle:{
        fontSize: 20,
        color:'#9A9A9A'
    }
})