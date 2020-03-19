import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, Dimensions, FlatList,TouchableOpacity} from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';
// import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';



const {width} = Dimensions.get('window');
const url = 'http://192.168.0.102:81/APIShopApp/images/product/';

export default class TopProduct extends Component {
    constructor(props){
        super(props);
        // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // this.state={
        //     dataSource: ds.cloneWithRows(topProducts),
        // }
    }
  render() {
    const {navigation} = this.props;
    
    const { topProducts } = this.props;

    return (
      <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>TOP PRODUCT</Text>
            </View>
            <FlatList 
                contentContainerStyle={styles.body}
                data={topProducts}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate('PRODUCTDETAIL',
                        {
                            id: item.id, 
                            name: item.name, 
                            price: item.price,
                            color: item.color,
                            material: item.material,
                            description: item.description,
                            images: item.images
                        })} 
                        style={styles.productContainer}>
                        <Image style={styles.productImage} source={{uri: url+`${item.images[0]}`}}/>
                        <Text style={styles.productName}>{item.name.toUpperCase()}</Text>
                        <Text style={styles.productPrice}>{item.price + '$'}</Text>
                    </TouchableOpacity>
                }
                keyExtractor={(item) => item.id +""}
            />
      </View>
    );
  }
}



{/* <TouchableOpacity style={styles.productContainer}>
<Image style={styles.productImage} source={sp2}/>
<Text style={styles.productName}>name sp</Text>
<Text style={styles.productPrice}>250$</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.productContainer}>
<Image style={styles.productImage} source={sp3}/>
<Text style={styles.productName}>name sp</Text>
<Text style={styles.productPrice}>250$</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.productContainer}>
<Image style={styles.productImage} source={sp4}/>
<Text style={styles.productName}>name sp</Text>
<Text style={styles.productPrice}>250$</Text>
</TouchableOpacity> */}

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
        fontSize: 16,
        color:'#D3D3CF',
        fontWeight: '500',
        marginTop:5


    },
    productPrice:{
  paddingLeft: 10,
        fontSize: 18,
        color:'#662F90',
        fontWeight: '500',
    }
})