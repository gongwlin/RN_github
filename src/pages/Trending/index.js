import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'


class Trending extends Component {
    goToMy = () => {
        const { navigation } = this.props
        console.log('this.props',this.props)
        navigation.navigate('My')
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{ fontSize: 30, color: 'red' }}>Trending</Text>
                <Button title='goToMy' onPress={this.goToMy}/>
            </View>
        )
    }
}

export default Trending