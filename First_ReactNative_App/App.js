import { View, Text, Platform } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  
  // Platform API returns about which Device the code is runnin on.
  // console.log(Platform.OS);

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Dashboard' component={Dashboard} />

      </Stack.Navigator>

    </NavigationContainer>
  )
}

