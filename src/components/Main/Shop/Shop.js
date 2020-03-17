import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions, StyleSheet} from 'react-native';
// import TabNavigator from 'react-native-tab-navigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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

const Tab = createBottomTabNavigator();

// import HomeView from './Home/HomeView';
// import ProductDetail from './ProductDetail/ProductDetail';
// import ListProduct from './ListProduct/ListProduct';



// function HomeScreen({ navigation }) {
//     return (
//         <Stack.Navigator headerMode='none' initialRouteName="HOME_VIEW">
//             <Stack.Screen name="HOME_VIEW" component={HomeView} />
//             <Stack.Screen name="PRODUCTDETAIL" component={ProductDetail} />
//             <Stack.Screen name="LISTPRODUCT" component={ListProduct} />
//         </Stack.Navigator>
//     );
//   }

  
// function CartScreen({ navigation }) {
//     return (
//         <Stack.Navigator headerMode='none' initialRouteName="HOME_VIEW">
//             <Stack.Screen name="HOME_VIEW" component={HomeView} />
//             <Stack.Screen name="PRODUCTDETAIL" component={ProductDetail} />
//             <Stack.Screen name="LISTPRODUCT" component={ListProduct} />
//         </Stack.Navigator>
//     );
//   }
export default class Shop extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab:"home"
        }
    }
    // openMenu() {
    //     const { open } = this.props;
    //     open();
    // }
    render() {
        const { navigation } = this.props;
        return (
            <View style={{flex:1}}>
                {/* <View style={{height:height / 8}}>
                    <TouchableOpacity onPress={this.openMenu.bind(this)}>
                        <Text>open menu</Text>
                    </TouchableOpacity>
                </View> */}
                <Header navigation={navigation}/>
                {/* <TabNavigator tabBarStyle={{backgroundColor:'#fff'}}>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        selectedTitleStyle={{color:'#34B089'}}
                        renderIcon={() => <Image style={styles.iconStyle} source={homeIcon} />}
                        renderSelectedIcon={() => <Image style={styles.iconStyle} source={homeIconS} />}
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <Home/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="cart"
                        selectedTitleStyle={{color:'#34B089'}}
                        renderIcon={() => <Image style={styles.iconStyle} source={cartIcon} />}
                        renderSelectedIcon={() => <Image style={styles.iconStyle} source={cartIconS} />}
                        badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        <Cart/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="search"
                        selectedTitleStyle={{color:'#34B089'}}
                        renderIcon={() => <Image style={styles.iconStyle} source={searchIcon} />}
                        renderSelectedIcon={() => <Image style={styles.iconStyle} source={searchIconS} />}
                        // badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'search' })}>
                        <Search/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="contact"
                        selectedTitleStyle={{color:'#34B089'}}
                        renderIcon={() => <Image style={styles.iconStyle} source={contactIcons} />}
                        renderSelectedIcon={() => <Image style={styles.iconStyle} source={contactIconS} />}
                        // badgeText="1"
                        onPress={() => this.setState({ selectedTab: 'contact' })}>
                        <Contact/>
                    </TabNavigator.Item>
                </TabNavigator> */}

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
                            focused ? <Image source={cartIconS}
                            style={[{ tintColor: '#34B089', width:25, height:25 }]}
                            />
                            : <Image source={cartIcon}
                                style={[{ tintColor: '#ccc',width:25, height:25 }]}
                            />
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
        width: 20,
        height: 20,
    }
})