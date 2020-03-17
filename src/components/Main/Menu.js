import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import profile from '../../media/temp/profile.png';




export default class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            isLogin: true,
        }
    }
    render() {
        
        const {navigation} = this.props;
        const logoutJSX = (
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => navigation.navigate('AUTHENTICATION')} style={styles.btnStyle}>
                    <Text style={styles.txtText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
        const loginJSX = (
            <View style={styles.loginContainer}>
                <Text style={styles.userName}>Nguyen Duc Ky</Text>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('ORDERHISTORY')} style={styles.btnStyleSignin}>
                        <Text style={styles.txtSigin}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CHANGEINFO')} style={styles.btnStyleSignin}>
                        <Text style={styles.txtSigin}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStyleSignin}>
                        <Text style={styles.txtSigin}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
                <View/>
            </View>
        );

        const mainJSX = this.state.isLogin ? loginJSX : logoutJSX

        return (
            <View style={styles.container}>
                {/* <TouchableOpacity onPress={() => navigation.navigate('AUTHENTICATION')}>
                    <Text>go to authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('CHANGEINFO')}>
                    <Text>go to change info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ORDERHISTORY')}>
                    <Text>go to orderHistory</Text>
                </TouchableOpacity> */}
                <Image style={styles.imgFrofile} source={profile}/>
            
                {mainJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#34B089',
        borderRightWidth:2,
        borderRightColor: '#fff',
        alignItems:'center',

    },
    imgFrofile:{
        width: 120,
        height: 120,
        borderRadius: 100,
        marginBottom: 30,
        marginTop:30,

    },
    btnStyle:{
        backgroundColor: '#FFF',
        height: 50,
        width:250,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
        marginBottom:15,
    },
    txtText:{
        color:'#34B089',

    },
    btnStyleSignin:{
        backgroundColor: '#FFF',
        height: 50,
        width:250,
        justifyContent:'center',
        borderRadius: 10,
        marginBottom:15,
        paddingLeft:10
    },
    txtSigin:{
        color:'#34B089',
        justifyContent:'flex-start',
        alignContent:'flex-start',
    },
    loginContainer:{
        flex: 1, 
        justifyContent:'space-between', 
        alignItems:'center',
    },
    userName:{
        color:'#fff', 
        fontSize: 20
    }
})