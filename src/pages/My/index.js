import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'


class My extends Component {
    
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{fontSize:30, color: 'red'}}>My</Text>
            </View>
        )
    }
}

export default My;