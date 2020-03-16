import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Shop from './Shop/Shop';


export default class Main extends Component {

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render() {
        const {navigation} = this.props;
        // const {navigator} = this.props;
        return (
            // <View style={{flex:1, backgroundColor:'yellow'}}>
            //     <TouchableOpacity  onPress={() => navigation.navigate('AUTHENTICATION')}>
            //         <Text>go to Authentication</Text>
            //     </TouchableOpacity>
            //     <TouchableOpacity onPress={() => navigation.navigate('CHANGEINFO')}>
            //         <Text>go to Chnage info</Text>
            //     </TouchableOpacity>
            //     <TouchableOpacity onPress={() => navigation.navigate('ORDERHISTORY')}>
            //         <Text>go to Order history</Text>
            //     </TouchableOpacity>
            //     <Text>ky Main</Text>
            // </View>
            <Drawer
                ref={(ref) => this._drawer = ref}
                tapToClose={true}
                openDrawerOffset={0.3}
                panCloseMask={0.2}
                // closedDrawerOffset={-3}
                acceptPan={true}
                negotiatePan={true}
                captureGestures="open"
                type="displace"
                panOpenMask={0.2}
                content={<Menu navigation={navigation}/>}
            >
                <Shop open={this.openControlPanel.bind(this)}/>
            </Drawer>


        );
    }
}
