import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';


StatusBar.setHidden(true);

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



export default class MyApp extends Component {


    render() {
        const {navigation} = this.props;
        return (
            <NavigationContainer>
                <Stack.Navigator 
                    configureScene={route => {
                        if(route.name === "AUTHENTICATION"){
                            return Navigator.SceneConfigs.FloatFromRight;
                        } else{
                            return Navigator.SceneConfigs.FloatFromLeft ;
                        }
                    }}
                    headerMode='none' initialRouteName="MAIN"
                >
                    <Stack.Screen name="MAIN" component={Main} />
                    <Stack.Screen name="AUTHENTICATION" component={Authentication} />
                    <Stack.Screen name="CHANGEINFO" component={ChangeInfo} />
                    <Stack.Screen name="ORDERHISTORY" component={OrderHistory} />
                </Stack.Navigator>
            </NavigationContainer>


            // <NavigationContainer>
            //     <Stack.Navigator  headerMode='none' initialRouteName="MyDrawer">
            //         {/* <Stack.Screen name="MyDrawer" component={MyDrawer} />
            //         <Stack.Screen name="Shop" component={Shop} /> */}
            //         <Stack.Screen name="Menu" component={Menu} />
            //         <Stack.Screen name="AUTHENTICATION" component={Authentication} />
            //         <Stack.Screen name="CHANGEINFO" component={ChangeInfo} />
            //         <Stack.Screen name="ORDERHISTORY" component={OrderHistory} /> 
            //     </Stack.Navigator>
            // </NavigationContainer>
 



        );
    }
}
