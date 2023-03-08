import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Tab = createMaterialBottomTabNavigator();
// const Home = () => {
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
//       <ScrollView style={{ padding: 35 }}>
//         <View style={{ flexDirection: "row", marginBottom: 20, justifyContent: "space-between" }}>
//           <Text style={{ fontSize: 18, fontFamily: "Roboto-Medium" }}>Hello Fellow</Text>
//           <TouchableOpacity onPress={() => navigation.goBack()}>
//             <ImageBackground
//               source={require("../assets/images/profile.jpg")}
//               style={{ width: 35, height: 35 }}
//               imageStyle={{ borderRadius: 25 }}
//             />
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>;
//   };

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <ScrollView style={{ padding: 35 }}>
        <View style={{ flexDirection: "row", marginBottom: 20, justifyContent: "space-between" }}>
          <Text style={{ fontSize: 18, fontFamily: "Roboto-Medium" }}>Hello Fellow</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ImageBackground
              source={require("../assets/images/profile.jpg")}
              style={{ width: 35, height: 35 }}
              imageStyle={{ borderRadius: 25 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
