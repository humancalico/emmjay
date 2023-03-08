import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button,SafeAreaView,TouchableOpacity,ImageBackground } from "react-native";
import Card from "./Components/Card";
import Login from "./Components/Login";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";
import Search from "./Components/Search";
import Profile from "./Components/Profile";
import Notification from "./Components/Notification";
import Attendance from "./Components/Attendance";
import HomeScreen from "./Components/HomeScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./navigation/AuthStack";
import AppStack from "./navigation/AppStack";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();



export default function App() {
  return (
    // <View style={styles.container}>
    // <ScrollView contentContainerStyle={{
    //   alignItems: "center",
    //   justifyContent: "center"
    // }}>
    //   <Card
    //     Heading="Software Development"
    //     Ratio="7/10"
    //     Status="On Track, you can skip the next 2 classes"
    //   ></Card>
    //   <Card
    //     Heading="ANM"
    //     Ratio="3/10"
    //     Status="Attend all the classes it is very necessaraerea otherwise you will faildsfjklasdf;ja;"
    //   ></Card>
    //   <Card
    //     Heading="ANM"
    //     Ratio="3/10"
    //     Status="Attend all the classes it is very necessaraerea otherwise you will faildsfjklasdf;ja;"
    //   ></Card>
    //   <Card
    //     Heading="ANM"
    //     Ratio="3/10"
    //     Status="Attend all the classes it is very necessaraerea otherwise you will faildsfjklasdf;ja;"
    //   ></Card>
    //   <Card
    //     Heading="ANM"
    //     Ratio="3/10"
    //     Status="Attend all the classes it is very necessaraerea otherwise you will faildsfjklasdf;ja;"
    //   ></Card>
    //   <Card
    //     Heading="ANM"
    //     Ratio="3/10"
    //     Status="Attend all the classes it is very necessaraerea otherwise you will faildsfjklasdf;ja;"
    //   ></Card>
    //   <Card
    //     Heading="ANM"
    //     Ratio="3/10"
    //     Status="Attend all the classes it is very necessaraerea otherwise you will faildsfjklasdf;ja;"
    //   ></Card>
    //   <Card
    //     Heading="ANM"
    //     Ratio="3/10"
    //     Status="Attend all the classes it is very necessaraerea otherwise you will faildsfjklasdf;ja;"
    //   ></Card>
    //   {/* <Login /> */}
    //   <StatusBar style="auto" />
    // </ScrollView>
    // </View>
    // <NavigationContainer>
    //   <Stack.Navigator labeled={true} barStyle={{backgroundColor:'white'}} activeColor='black' initialRouteName="Home">
    //     <Stack.Screen
    //       name='Home'
    //       component={HomeScreen}
    //       options={{tabBarIcon:'home'}}
    //     ></Stack.Screen>
    //     <Stack.Screen
    //       name='Attendance'
    //       component={Home}
    //       options={{tabBarIcon:'home'}}
    //     ></Stack.Screen>
    //     <Stack.Screen
    //       name="Social"
    //       component={Search}
    //       options={{tabBarIcon:'magnify'}}
    //     ></Stack.Screen>
    //     <Stack.Screen
    //       name="Mess"
    //       component={Notification}
    //       options={{tabBarIcon:'camera'}}
    //     ></Stack.Screen>
    //     <Stack.Screen
    //       name="Grades"
    //       component={Notification}
    //       options={{tabBarIcon:'file'}}
    //     ></Stack.Screen>
    //     <Stack.Screen
    //       name="Time-Table"
    //       component={Profile}
    //       options={{tabBarIcon:'table'}}
    //     ></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
    // ----- Navigation-----
    // <NavigationContainer>
    //   <Tab.Navigator
    //     labeled={true}
    //     barStyle={{ backgroundColor: "white" }}
    //     activeColor="black"
    //     initialRouteName="Home"
    //   >
    //     <Tab.Screen
    //       name="Home"
    //       component={Home}
    //       options={{ tabBarIcon: "home" }}
    //     ></Tab.Screen>
    //     <Tab.Screen
    //       name="Attendance"
    //       component={Attendance}
    //       options={{ tabBarIcon: "home" }}
    //     ></Tab.Screen>
    //     <Tab.Screen
    //       name="Social"
    //       component={Search}
    //       options={{ tabBarIcon: "magnify" }}
    //     ></Tab.Screen>
    //     {/* <Tab.Screen
    //     name="Mess"
    //     component={Notification}
    //     options={{tabBarIcon:'camera'}}
    //   ></Tab.Screen> */}
    //     <Tab.Screen
    //       name="Grades"
    //       component={Notification}
    //       options={{ tabBarIcon: "file" }}
    //     ></Tab.Screen>
    //     <Tab.Screen
    //       name="Time-Table"
    //       component={Profile}
    //       options={{ tabBarIcon: "table" }}
    //     ></Tab.Screen>
    //   </Tab.Navigator>
    // </NavigationContainer>
    
    <NavigationContainer>
      {/* <AuthStack /> */}
      <AppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
