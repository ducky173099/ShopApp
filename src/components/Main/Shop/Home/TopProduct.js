import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';



const {width} = Dimensions.get('window');

export default class TopProduct extends Component {
  render() {
    return (
      <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>TOP PRODUCT</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.productContainer}>
                    <Image style={styles.productImage} source={sp1}/>
                    <Text style={styles.productName}>name sp</Text>
                    <Text style={styles.productPrice}>300$</Text>
                </View>
                <View style={styles.productContainer}>
                    <Image style={styles.productImage} source={sp2}/>
                    <Text style={styles.productName}>name sp</Text>
                    <Text style={styles.productPrice}>250$</Text>
                </View>
                <View style={styles.productContainer}>
                    <Image style={styles.productImage} source={sp3}/>
                    <Text style={styles.productName}>name sp</Text>
                    <Text style={styles.productPrice}>250$</Text>
                </View>
                <View style={styles.productContainer}>
                    <Image style={styles.productImage} source={sp4}/>
                    <Text style={styles.productName}>name sp</Text>
                    <Text style={styles.productPrice}>250$</Text>
                </View>
            </View>
      </View>
    );
  }
}


const productWidth = (width - 60) / 2;
const productHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFF',
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0,height: 6,},
        shadowOpacity: 0.39,
        elevation: 13,
        marginTop: 0,

    },
    titleContainer:{
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,

    },
    title:{
        color:'#D3D3CF',
        fontSize: 20,

    },
    body:{
        flexDirection:'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'


    },
    productContainer:{
        width: productWidth,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 8,},
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 24,
        paddingBottom: 15,
        marginBottom:10,


    },
    productImage:{
        width: productWidth,
        height: productHeight,

    },
    productName:{
        paddingLeft: 10,
        fontSize: 18,
        color:'#D3D3CF',
        fontWeight: '500',


    },
    productPrice:{
  paddingLeft: 10,
        fontSize: 18,
        color:'#662F90',
        fontWeight: '500',
    }
})