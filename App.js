import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Home from './screens/Home'
import Registration from './screens/Registration'
import Modal from './screens/Modal'
import PickGame from './screens/PickGame'
import EnterCode from './screens/EnterCode'
import Game from './screens/Game'



const Stack = createStackNavigator();


export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= 'Home' component={Home} />
        <Stack.Screen name= 'Registration' component={Registration} />
        <Stack.Screen name = 'PickGame' component={PickGame} />
        <Stack.Screen name = 'EnterCode' component={EnterCode} />
        <Stack.Screen name = 'Game' component= {Game} />
        <Stack.Screen name= 'Modal' component={Modal}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

