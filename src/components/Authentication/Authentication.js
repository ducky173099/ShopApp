import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, TextInput} from 'react-native';


import icBack from '../../media/appIcon/back_white.png';
import icLogo from '../../media/appIcon/ic_logo.png';


const {height} = Dimensions.get('window');
export default class Authentication extends Component {
  constructor(props){
    super(props);
    this.state={
      isSignIN:true
    }
  }

  SignIn(){
    this.setState({isSignIN:true})
  };
  SignUp(){
    this.setState({isSignIN:false})
  };


  render() {
    const {navigation} = this.props;


    const signInJSX = (
      <View>
        <TextInput style={styles.inputStyle} placeholder="Email"/>
        <TextInput style={styles.inputStyle} placeholder="Email"/>
        <TouchableOpacity style={styles.bigButton}>
          <Text style={styles.txtBigButton}>SIGN IN NOW</Text>
        </TouchableOpacity>
      </View>
    
    );

    const signupJSX = (
      <View>
        <TextInput style={styles.inputStyle} placeholder="Enter Your Name"/>
        <TextInput style={styles.inputStyle} placeholder="Enter Your Email"/>
        <TextInput style={styles.inputStyle} placeholder="Enter Your Password"/>
        <TextInput style={styles.inputStyle} placeholder="Re-enter Your Password"/>
        <TouchableOpacity style={styles.bigButton}>
          <Text style={styles.txtBigButton}>SIGN UP NOW</Text>
        </TouchableOpacity>
      </View>
    );

    const mainJSX = this.state.isSignIN ? signInJSX : signupJSX;

    return (
      <View style={styles.container}>
        <View style={styles.row1}>
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Image style={styles.iconStyle} source={icBack}/>
            </TouchableOpacity>
            <Text style={styles.title}>Wearing a Dress</Text>
            <Image style={styles.iconStyle} source={icLogo}/>
        </View>
      
        {mainJSX}
    
        <View style={styles.controlStyle}>
          <TouchableOpacity style={styles.signin} onPress={this.SignIn.bind(this)}>
            <Text style={this.state.isSignIN ? styles.activeStyle : styles.inActiveStyle}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signup} onPress={this.SignUp.bind(this)}>
            <Text style={!this.state.isSignIN ? styles.activeStyle : styles.inActiveStyle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity onPress={() => navigation.pop()}>
            <Text>go to Main</Text>
        </TouchableOpacity>
          <Text>ky Authentication</Text> */}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'#3EBA77',
    padding: 20,
    justifyContent:'space-between',
  },
  inActiveStyle:{
    color:'#D7D7D7',
  },  
  activeStyle:{
    color:'#34B089',

  },
  row1:{ 
    flexDirection:'row', 
    justifyContent:'space-between',
    alignItems:'center',
  }, 
  textinput:{
      height: height/22 , 
      backgroundColor:'white',
      paddingLeft: 10,
      paddingVertical: 0,
      marginTop: 15,
  },
  iconStyle:{
      width: 25,
      height: 25,
  },
  title:{
      color: '#fff',
      fontSize: 18,
      
  },
  controlStyle:{
    flexDirection:'row',
    alignSelf:'stretch',



  },
  signin:{
    backgroundColor:'#fff',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:15,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    marginRight:1,
    color:'#34B089',
  },
  signup:{
    backgroundColor:'#fff',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:15,
    borderTopRightRadius: 20,
    borderBottomRightRadius:20,
    marginLeft:1,
    color:'gray'

  },
  inputStyle:{
    height:50,
    backgroundColor:'#fff',
    marginBottom:10,
    borderRadius:20,
    paddingLeft:15,
  },
  bigButton:{
    height: 50,
    borderRadius:50,
    borderWidth:1,
    borderColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  txtBigButton:{
    color:'#fff',
  }
})