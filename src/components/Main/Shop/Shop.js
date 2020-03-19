import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, ImageBackground} from 'react-native';
// import TabNavigator from 'react-native-tab-navigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Avatar, Badge, withBadge } from 'react-native-elements';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import Cart from './Cart/Cart';
import Search from './Search/Search';
import Header from './Header';

import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import searchIconS from '../../../media/appIcon/search.png';
import searchIcon from '../../../media/appIcon/search0.png';
import contactIconS from '../../../media/appIcon/contact.png';
import contactIcons from '../../../media/appIcon/contact0.png';

import global from '../../global';
import CartView from './Cart/CartView';

const Tab = createBottomTabNavigator();


export default class Shop extends Component {
    constructor(props){
        super(props);
        this.state={
            // types:[],
            // topProducts:[],
            cartArray: [],
  
        };
        global.addProductToShop = this.addProductToShop.bind(this);
    }
  
    componentDidMount(){
        fetch('http://192.168.0.102:81/APIShopApp/')
        .then(res => res.json())
        .then(resJson => {
          const { type, product } = resJson;
          this.setState({ 
            types: type,
            topProducts: product,
  
          });
        });
    }

    addProductToShop(product){
        this.setState({cartArray: this.state.cartArray.concat(product) });
    }
  
    
    render() {
        const { navigation } = this.props;
        const { cartArray } = this.state;

        // const cartArray = global.addProductToCart;
        
        // const { types } = this.state;

        console.log("do dai shop " + cartArray.length)

        const badgeCountJSX = (
            <View style={styles.badgeCount}>
                <Text style={styles.countProduct}>{cartArray.length}</Text>
            </View>
        );

        const mainBadgeCountJSX = this.state.cartArray.length > 0 ? badgeCountJSX : null;
        return (
            <View style={{flex:1}}>
                {/* <View style={{height:height / 8}}>
                    <TouchableOpacity onPress={this.openMenu.bind(this)}>
                        <Text>open menu</Text>
                    </TouchableOpacity>
                </View> */}
                <Header navigation={navigation}/>

                <Tab.Navigator 
                    initialRouteName="Home"
                    tabBarOptions={{activeTintColor: '#34B089',}}>
                    <Tab.Screen name="Home" component={Home}
                        options={{
                        tabBarLabel: 'Home',
                        selectedTitleStyle:{color:'#34B089'},
                        tabBarIcon: ({ focused, color, size }) => (
                            focused ? <Image source={homeIconS}
                            style={[{ tintColor: '#34B089', width:25, height:25 }]}
                            />
                            : <Image source={homeIcon}
                                style={[{ tintColor: '#ccc',width:25, height:25 }]}
                            />
                        ),
                        }}
                    />
                    <Tab.Screen name="Cart" component={Cart} 
                        options={{
                        tabBarLabel: 'Cart',
                        tabBarIcon: ({ focused, color, size }) => (
                            focused ? <ImageBackground source={cartIconS}
                            style={[{ tintColor: '#34B089', width:25, height:25 }]}
                            >{mainBadgeCountJSX}</ImageBackground>
                            : <ImageBackground source={cartIcon}
                                style={[{ tintColor: '#ccc',width:25, height:25 }]}
                            >{mainBadgeCountJSX}</ImageBackground>
                        ),
                        }}
                    />
                    <Tab.Screen name="Search" component={Search} 
                        options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ focused, color, size }) => (
                            focused ? <Image source={searchIconS}
                            style={[{ tintColor: '#34B089', width:25, height:25 }]}
                            />
                            : <Image source={searchIcon}
                                style={[{ tintColor: '#ccc',width:25, height:25 }]}
                            />
                        ),
                        }}
                    />
                    <Tab.Screen name="Contact" component={Contact} 
                        options={{
                        tabBarLabel: 'Contact',
                        tabBarIcon: ({ focused, color, size }) => (
                            focused ? <Image source={contactIconS}
                            style={[{ tintColor: '#34B089', width:25, height:25 }]}
                            />
                            : <Image source={contactIcons}
                                style={[{ tintColor: '#ccc',width:25, height:25 }]}
                            />
                        ),
                        }}
                    />
                </Tab.Navigator>




            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width: 22,
        height: 22,
        
    },
    badgeCount:{
        flex:1,
        width:16,
        height:16,
        position:'absolute', 
        backgroundColor:'red', 
        left:17, 
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
    },
    countProduct:{
        color:'#fff',
        fontSize:9,
    }
})