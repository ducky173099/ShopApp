// import React, { Component } from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';

// export default class ProductDetail extends Component {
//   // goBack(){
//   //   const{navigaton} = this.props;
//   //   navigaton.pop();
//   // }
//   render() {
//     const { navigation } = this.props;
//     return (
//       <View>
//           <TouchableOpacity onPress={() => navigation.pop()}>
//             <Text>Go Back Home</Text>
//           </TouchableOpacity>
//       </View>
//     );
//   }
// }

import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity
} from 'react-native';

import global from '../../../global';

import img1 from '../../../../media/temp/sp5.jpeg';
import img2 from '../../../../media/temp/sp4.jpeg';

const back = require('../../../../media/appIcon/back.png');
const cart = require('../../../../media/appIcon/cartfull.png');


const url = 'http://192.168.0.102:81/APIShopApp/images/product/';
export default class ProductDetail extends Component {
    
    // goBack() {
    //     const { navigator } = this.props;
    //     navigator.pop();
    // }

    addThisProductToCart(){
        const {product} = this.props;
        global.addProductToCart(product);
        global.addProductToShop(product);
    }

    render() {
        const { navigation } = this.props;
        const { route } = this.props;

        // console.log("navigationnnn : " , navigation.getParam('productName'));
        const {
            wrapper, cardStyle, header,
            footer, backStyle,
            imageContainer, cartStyle, textBlack,
            textSmoke, textHighlight, textMain, titleContainer,
            descContainer, productImageStyle, descStyle, txtMaterial, txtColor
        } = styles;
        return (
            
            <ScrollView style={wrapper}>
                <View style={cardStyle}>
                    <View style={header}>
                        <TouchableOpacity onPress={() => navigation.pop()}>
                            <Image style={backStyle} source={back} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.addThisProductToCart.bind(this)}>
                            <Image style={cartStyle} source={cart} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={imageContainer}>
                        <ScrollView style={{ flexDirection: 'row', height: swiperHeight }} horizontal >
                            <Image source={{uri: url+`${route.params.images[0]}`}} style={productImageStyle} />
                            <Image source={{uri: url+`${route.params.images[1]}`}} style={productImageStyle} />
                        </ScrollView>
                    </View>
             
                    <View style={footer}>
                        <View style={titleContainer}>
                            <Text style={textMain}>
                                <Text style={textBlack}>{route.params.name.toUpperCase()}</Text>
                                <Text style={textHighlight}> /</Text>
                                <Text style={textSmoke}>{route.params.price}$</Text>
                            </Text>
                        </View>
                        <View style={descContainer}>
                            <Text style={descStyle}>{route.params.description}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                                <Text style={txtMaterial}>Material {route.params.material}</Text>
                                <View style={{ flexDirection: 'row' }} >    
                                    <Text style={txtColor}>Color {route.params.color}</Text>
                                    <View style={{ height: 15, width: 15, backgroundColor: route.params.color.toLowerCase(), borderRadius: 15, marginLeft: 10, borderWidth: 1, borderColor: '#C21C70',marginTop: 3 }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const { width } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
        
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical:10,
    },
    cartStyle: {
        width: 25,
        height: 25
    },
    backStyle: {
        width: 25,
        height: 25
    },
    productStyle: {
        width: width / 2,
        height: width / 2
    },
    footer: {
        flex: 6
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,

    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#9A9A9A'
    },
    textHighlight: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginHorizontal: 20,
        paddingBottom: 5
    },
    descContainer: {
        margin: 10,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    descStyle: {
        color: '#AFAFAF'
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    }
});