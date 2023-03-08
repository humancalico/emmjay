import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from '../Components/HomeScreen';
import Login from '../Components/Login';

const Stack=createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        {/* <Stack.Screen name="Home" component={HomeScreen}/> */}
        
    </Stack.Navigator>
  )
}
