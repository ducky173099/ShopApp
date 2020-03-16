import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {View, Text, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

StatusBar.setHidden(true);

const Stack = createStackNavigator();



export default class MyApp extends Component {
    // configureScene(route, routeStack){
    //     if(route.name === 'AUTHENTICATION') {
    //       return Navigator.SceneConfigs.FloatFromRight
    //     }
    //     return Navigator.SceneConfigs.FloatFromLeft 
    // }
    render() {
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
            // <View>
            //     <Text>sgsdfsdfds</Text>
            // </View>
        );
    }
}
