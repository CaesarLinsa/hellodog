import React, {Component} from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// @ts-ignore
import Icon from "react-native-vector-icons/FontAwesome";
// @ts-ignore
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Detail  from "./Detail";
import List  from "./List";
import Calender from "./Calender"

export type BottomTabList = {
    Home: undefined,
    Detail: undefined,
    Calender: undefined
}
const Tab = createBottomTabNavigator<BottomTabList>()
export default class Navigation extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name={'Home'} component={List} options={{tabBarLabel: '首页',
                        tabBarIcon: ({color, size}) => (
                            <Icon name={'home'} size={size} color={color} />
                        )
                    }}></Tab.Screen>
                    <Tab.Screen name={'Calender'} component={Calender} options={{tabBarLabel: '日历',
                        tabBarIcon: ({color, size}) => (
                            <Icon name={'heart'} size={size} color={color} />
                        )
                    }}></Tab.Screen>
                    <Tab.Screen name={'Detail'} component={Detail} options={{tabBarLabel: '详情页',
                        tabBarIcon: ({color, size}) => (
                            <MaterialIcons name={'details'} size={size} color={color} />
                        )}}></Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>

        )
    }

}
