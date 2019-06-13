import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'


class Init extends Component {
    
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{fontSize:30, color: 'red'}}>Favorite</Text>
            </View>
        )
    }
}

export default Init;