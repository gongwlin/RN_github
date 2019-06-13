import React, { Component } from 'react'
import {
    View,
    Text
} from 'react-native'


class Trending extends Component {
    
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{ fontSize: 30, color: 'red' }}>Trending</Text>
            </View>
        )
    }
}

export default Trending