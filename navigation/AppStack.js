import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import React from 'react'
import Attendance from '../Components/Attendance';
import HomeScreen from '../Components/HomeScreen';
import Notification from '../Components/Notification';
import Profile from '../Components/Profile';
import Search from '../Components/Search';

const Tab = createMaterialBottomTabNavigator();

export default function AppStack() {
  return (
    <Tab.Navigator labeled={true} barStyle={{ backgroundColor: "white" }} activeColor="black" initialRouteName="Home" >
      <Tab.Screen name="Home1" component={HomeScreen} options={{ tabBarIcon: "home" }} ></Tab.Screen>
      <Tab.Screen name="Attendance" component={Attendance} options={{ tabBarIcon: "home" }} ></Tab.Screen>
      <Tab.Screen name="Social" component={Search} options={{ tabBarIcon: "magnify" }} ></Tab.Screen>
      {/* <Tab.Screen name="Mess" component={Notification} options={{tabBarIcon:'camera'}} ></Tab.Screen> */}
      <Tab.Screen name="Grades" component={Notification} options={{ tabBarIcon: "file" }} ></Tab.Screen>
      <Tab.Screen name="Time-Table" component={Profile} options={{ tabBarIcon: "table" }} ></Tab.Screen>
    </Tab.Navigator>
  )
}
