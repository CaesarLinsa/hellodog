/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
    View,
    Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Detail  from "./components/Detail";
import List  from "./components/List";

export type BottomTabList = {
  Home: undefined,
  Detail: undefined
}

const Tab = createBottomTabNavigator<BottomTabList>()
function App(): JSX.Element {
  return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name={'Home'} component={List} options={{tabBarLabel: '首页',
              tabBarIcon: ({color, size}) => (
              <Icon name={'home'} size={size} color={color} />
              )
            }}></Tab.Screen>
            <Tab.Screen name={'Detail'} component={Detail} options={{tabBarLabel: '详情页',
              tabBarIcon: ({color, size}) => (
                  <MaterialIcons name={'details'} size={size} color={color} />
              )}}></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'

  },
  v1: {
    borderColor: 'dark',
    borderWidth: 1,
    width: 50,
    height: 50
  },
  v2: {
    borderColor: 'dark',
    borderWidth: 1,
    width: 50,
    height: 50,
    alignSelf: 'flex-start'
  }
});

export default App;
