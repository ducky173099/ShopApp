import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';



import backList from '../../../../media/appIcon/backList.png';
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';


export default class ListProduct extends Component {
  // goBack(){
  //   const{navigaton} = this.props;
  //   navigaton.pop();
  // }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
          {/* <TouchableOpacity onPress={() => navigation.pop()}>
            <Text>Go Back Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('PRODUCTDETAIL')}>
            <Text>Go to Detail</Text>
          </TouchableOpacity> */}
          <ScrollView style={styles.wrapper}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <Image style={styles.imgList} source={backList}/>
              </TouchableOpacity>
              <Text style={styles.titleList}>Party Adress</Text>
              <View style={styles.imgList}/>
            </View>
            <View style={styles.productContainer}>
              {/* <TouchableOpacity> */}
                <Image style={styles.productImage} source={sp1}/>
              {/* </TouchableOpacity> */}
              <View style={styles.productInfo}>
                <Text style={styles.txtName}>Lace Sleeve Si</Text>
                <Text style={styles.txtPrice}>200$</Text>
                <Text style={styles.txtMaterial}>Material silk</Text>
                <View style={styles.lastRowinfo}>
                  <Text style={styles.txtColor}>Colo RoyalBlue</Text>
                  <View style={styles.colorProduct}/>
                  <TouchableOpacity>
                      <Text style={styles.txtShowdetail}>SHOW DETAIL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.productContainer}>
              <Image style={styles.productImage} source={sp2}/>
              <View style={styles.productInfo}>
                <Text style={styles.txtName}>Lace Sleeve Si</Text>
                <Text style={styles.txtPrice}>200$</Text>
                <Text style={styles.txtMaterial}>Material silk</Text>
                <View style={styles.lastRowinfo}>
                  <Text style={styles.txtColor}>Colo RoyalBlue</Text>
                  <View style={styles.colorProduct}/>
                  <TouchableOpacity>
                      <Text style={styles.txtShowdetail}>SHOW DETAIL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.productContainer}>
              <Image style={styles.productImage} source={sp3}/>
              <View style={styles.productInfo}>
                <Text style={styles.txtName}>Lace Sleeve Si</Text>
                <Text style={styles.txtPrice}>200$</Text>
                <Text style={styles.txtMaterial}>Material silk</Text>
                <View style={styles.lastRowinfo}>
                  <Text style={styles.txtColor}>Colo RoyalBlue</Text>
                  <View style={styles.colorProduct}/>
                  <TouchableOpacity>
                      <Text style={styles.txtShowdetail}>SHOW DETAIL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.productContainer}>
              <Image style={styles.productImage} source={sp4}/>
              <View style={styles.productInfo}>
                <Text style={styles.txtName}>Lace Sleeve Si</Text>
                <Text style={styles.txtPrice}>200$</Text>
                <Text style={styles.txtMaterial}>Material silk</Text>
                <View style={styles.lastRowinfo}>
                  <Text style={styles.txtColor}>Colo RoyalBlue</Text>
                  <View style={styles.colorProduct}/>
                  <TouchableOpacity>
                      <Text style={styles.txtShowdetail}>SHOW DETAIL</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#DBDBDB',
    flex:1,


  }, header:{
    height: 50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:5,
    paddingHorizontal:0,


  },
  wrapper:{
    backgroundColor:'#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0,height: 6,},
    shadowOpacity: 0.39,
    elevation: 13,
    margin:10,
    paddingHorizontal:10,


  },
  imgList:{
    width:30,
    height:30,
  },
  titleList:{
    fontSize:20,
    color:'#B10D65',
  },
  productContainer:{
    flexDirection:'row',
    padding:10,
    borderTopColor:'#F0F0F0',
    borderTopWidth:1,
    paddingVertical:15,
    
    

  },
  productImage:{
    width:90,
    height: (90 * 452) / 361
  },
  lastRowinfo:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:'stretch',
    alignItems:'center',

  },
  productInfo:{
    justifyContent:'space-between',
    marginLeft: 15,
    flex:1,
    
  },
  txtName:{
    color:'#BCBCBC',
    fontSize:20,
    fontWeight:'400'
  },
  txtPrice:{
    fontSize:15,
    color:'#B10D65',
  },
  txtMaterial:{

  },
  txtColor:{

  },
  txtShowdetail:{
    color:'#B10D65',
    fontSize:13 ,

  },
  colorProduct:{
    borderRadius:50,
    backgroundColor:'pink',
    height:15,
    width:15,
  }
})