import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'


class Init extends Component {

    componentDidMount() {
        this.timer = setTimeout( () => {
            const {navigation} = this.props
            console.log('MainNavigator',this.props)
            navigation.navigate('MainNavigator')
            console.log('navigate end')
        },0)
    }

    componentWillUnMount() {
        this.timer && clearTimeout(this.timer)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{fontSize:50, color: 'red'}}>welcome</Text>
                <Button onPress={this.goTo} title='title'/>
            </View>
        )
    }
}

export default Init;