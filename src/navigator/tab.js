import React, { Component } from 'react'
import { createAppContainer } from "react-navigation"
import { connect } from 'react-redux'

import Favorite from '../pages/Favorite'
import My from '../pages/My'
import Trending from '../pages/Trending'
import Hot from '../pages/Hot'

// Icon
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

// import EventTypes from '../util/EventTypes'
import { BottomTabBar, createBottomTabNavigator } from 'react-navigation-tabs'
// import EventBus from 'react-native-event-bus'

type Props = {}

const TABS = {//在这里配置页面的路由
    Hot: {
        screen: Hot,
        navigationOptions: {
            tabBarLabel: "最热",
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    },
    Trending: {
        screen: Trending,
        navigationOptions: {
            tabBarLabel: "趋势",
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={'md-trending-up'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    },
    Favorite: {
        screen: Favorite,
        navigationOptions: {
            tabBarLabel: "收藏",
            tabBarIcon: ({ tintColor, focused }) => (
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    },
    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: "我的",
            tabBarIcon: ({ tintColor, focused }) => (
                <Entypo
                    name={'user'}
                    size={26}
                    style={{ color: tintColor }}
                />
            )
        }
    }
}
// 配置底部导航颜色
class TabBarComponent extends Component {
    render() {
        // const { routes, index} = this.props.navigation.state
        // console.log('state', this.props.navigation.state)
        // console.log('this.theme', this.theme)
        // if(routes[index].params) {
        //     const { theme } = routes[index].params
        //     if (theme && theme.updateTime > this.theme.updateTime) {
        //         this.theme = theme
        //     }
        // }
        console.log('this.props.themeColor', this.props.themeColor)
        return (
        <BottomTabBar
            {...this.props}
            activeTintColor={this.props.themeColor}
        />)
    }
}


class BottomTabNavigator extends Component<Props> {
    constructor(props) {
        super(props);
        console.disableYellowBox = true
    }

    _tabNavigator() {
        if (this.Tabs) {
            return this.Tabs
        }
        const { Hot, Trending, Favorite, My } = TABS
        const tabs = { Hot, Trending, Favorite, My }
        console.log('this.props.theme', this.props.themeColor)


        // Trending.navigationOptions.tabBarLabel = '最热';//动态配置Tab属性
        return this.Tabs = createAppContainer(createBottomTabNavigator(tabs, {
            tabBarComponent: props => {
                return <TabBarComponent {...props} themeColor={this.props.themeColor}/>
                // return <TabBarComponent {...props} />
            }
        }))
    }

    render() {
        const Tab = this._tabNavigator();
        return <Tab
            onNavigationStateChange={(prevState, newState, action) => {
                // EventBus.getInstance().fireEvent(EventTypes.bottom_tab_select, {//发送底部tab切换的事件
                //     from: prevState.index,
                //     to: newState.index
                // })
            }}
        />
    }
}

const mapStateToProps = state => ({
    themeColor: state.theme.themeColor,
})

export default connect(mapStateToProps)(BottomTabNavigator)