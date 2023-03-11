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

import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <ScrollView style={{ paddingTop: 45 }}>
        <View style={{ justifyContent: "space-evenly" }}>
          <TouchableOpacity onPress={() => alert("Working")}>
            <MaterialCommunityIcons
              name="dots-vertical"
              size={30}
              style={{ marginLeft: 8 }}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons
              name="account"
              size={40}
              style={{ alignSelf: "flex-end", marginTop: -30, marginRight: 5 }}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text>What else to add???</Text>
      </View>
    </SafeAreaView>
  );
}
