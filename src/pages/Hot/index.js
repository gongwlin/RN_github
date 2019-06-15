import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { changeTheme } from '../../navigator/themeReducer'
import { connect } from 'react-redux'
import NavigationUtil from '../../navigator/navUtil.js'

import styles from './styles'

class Page extends Component {

    goToDetail = () => {
        console.log('this.props',this.props)
        NavigationUtil.goPage('Detail')
        console.log('11111111111')
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>123123</Text>
                <Button title='gotoDetail' onPress={this.goToDetail}  />
            </View>
        )
    }
}



class Hot extends Component {

    goToMy = () => {
        const { navigation } = this.props
        console.log('this.props', this.props)
        navigation.navigate('My')
    }

    genTopTab = () => {
        const tabs = {}
        const keys = ['JAVA', 'Android','React', 'React Native']
        keys.forEach( (val,index) => {
            tabs[`tab${index}`] = {
                screen: props => <Page {...this.props} themeColor={this.props.themeColor} />,
                navigationOptions: {
                    title: val
                }
            }
        })
        return tabs
   }

    render() {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
            this.genTopTab(), {
                tabBarOptions: {
                    tabStyle: styles.tabStyle,
                    upperCaseLabel: false,          //是否使标签大写，默认为true
                    scrollEnabled: true,            //是否支持 选项卡滚动，默认false
                    style: {
                        // backgroundColor: this.props.themeColor,//TabBar 的背景颜色
                        height: 40,                         //fix 开启scrollEnabled后再Android上初次加载时闪烁问题
                    },
                    indicatorStyle: styles.indicatorStyle,  //标签指示器的样式
                    labelStyle: styles.labelStyle,          //文字的样式
                },
                lazy: true
            }
        ))

        return (
            <View style={{ flex: 1}}>
                { TabNavigator && <TabNavigator/> }
                {/* <Button title='goToMy' onPress={this.goToMy} /> */}
                <Button title='change' onPress={this.props.changeTheme.bind(this,'green')} />
            </View>
        )
    }
}

function mapStateToProps (state) {
    return {
        themeColor: state.theme.themeColor
    }
}

function mapDispatchToProps(dispatch) {
    return {
        changeTheme: (color) => dispatch(changeTheme(color))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Hot)