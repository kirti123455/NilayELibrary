import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import TranscationScreen from '../screens/Transaction';
import SearchScreen from '../screens/Search';

const Tab=  createBottomTabNavigator

export default class BottomTabNavigator extends Component 
{
    render(){
        return(
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Transaction" component= {TranscationScreen}></Tab.Screen>
                    <Tab.Screen name = "Search"    component = {SearchScreen}></Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}