// import React, { Component } from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';
// export default class CartView extends Component {
//     render() {
//         const { navigation } = this.props;
//         return (
//             <View>
//                 <Text>cart</Text>
//                 <TouchableOpacity onPress={() => navigation.navigate('PRODUCTDETAIL')}>
//                     <Text>Go to Detail</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity, ScrollView, 
    Dimensions, StyleSheet, Image , FlatList
} from 'react-native';

import global from '../../../global';
import ProductDetail from '../ProductDetail/ProductDetail';

import sp1 from '../../.././../media/temp/sp1.jpeg';

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  
export default class CartView extends Component {
    // gotoDetail() {
    //     const { navigator } = this.props;
    //     navigator.push({ name: 'PRODUCT_DETAIL' });
    // }

    // constructor(props){
    //     super(props);
    //     this.state={
    //         types:[],
    //         topProducts:[],
    //         cartArray: [],
  
    //     };
    //     global.addProductToCart = this.addProductToCartView.bind(this);
    // }
  
    // componentDidMount(){
    //     fetch('http://192.168.1.4:81/APIShopApp/')
    //     .then(res => res.json())
    //     .then(resJson => {
    //       const { type, product } = resJson;
    //       this.setState({ 
    //         types: type,
    //         topProducts: product,
  
    //       });
    //     });
    // }
    
    // addProductToCartView(product){
    //     this.setState({cartArray: this.state.cartArray.concat(product) });
    // }




    render() {
        const {navigation} = this.props;
        // const { cartArray } = this.state;
        const {cartArray} = this.props;
        const {topProducts} = this.props;

        

        console.log("CartViewwww " + cartArray)

        const { main, checkoutButton, checkoutTitle, wrapper,
            productStyle, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct, 
            txtShowDetail, showDetailContainer } = styles;
        return (
            <View style={wrapper}>

                <FlatList
                    data={cartArray}
                    renderItem={({item}) => (
                        <View style={productStyle}>
                            <Image source={sp1} style={productImage} />
                            <View style={[mainRight]}>
                                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                    <Text style={txtName}></Text>
                                    <TouchableOpacity onPress={() => console.log("add cart " )}>
                                        <Text style={{ fontFamily: 'Avenir', color: '#969696' }}>X</Text>
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={txtPrice}>{100}$</Text>
                                </View>
                                <View style={productController}>
                                    <View style={numberOfProduct}>
                                        <TouchableOpacity>
                                            <Text>+</Text>
                                        </TouchableOpacity>
                                        <Text>{3}</Text>
                                        <TouchableOpacity>
                                            <Text>-</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <TouchableOpacity onPress={() => navigation.navigate('PRODUCTDETAIL')} style={showDetailContainer}>
                                        <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                    
                />
                <TouchableOpacity style={checkoutButton}>
                    <Text style={checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    productStyle: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

