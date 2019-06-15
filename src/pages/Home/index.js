import React, { Component } from 'react'
import { View, Text, BackHandler  } from 'react-native'
import { NavigationActions } from 'react-navigation'
import BottomTab from '../../navigator/tab'
import { connect } from 'react-redux'
import NavigationUtil from '../../navigator/navUtil.js'
class Home extends Component {
    componentDidMount() {
        NavigationUtil.navigation = this.props.navigation
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }

    onBackPress = () => {
        const { dispatch, nav } = this.props
        console.log('nav',nav)
        if (nav.routes[1].index === 0) {
            return false
        }
        dispatch(NavigationActions.back())
        return true
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <BottomTab />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav
    }
}

export default connect(mapStateToProps)(Home)