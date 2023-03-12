import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Modal } from "react-native";

import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import SemesterScreen from "./SemesterScreen";
import { FlatList } from "react-native";

const Tab = createMaterialBottomTabNavigator();

const semData = [
  { id: "1", heading: "1st Semester" },
  { id: "2", heading: "2st Semester" },
  { id: "3", heading: "3st Semester" },
  { id: "4", heading: "4st Semester" },
  { id: "5", heading: "5st Semester" },
  { id: "6", heading: "6st Semester" },
  { id: "7", heading: "7st Semester" },
  { id: "8", heading: "8st Semester" },
];

// const renderItem = ({ item }) => {
//   <SemesterScreen Heading={item.heading} />;
// };

// const SemListComponent = () => {
//   return (
//     <FlatList
//       data={semData}
//       renderItem={renderItem}
//       keyExtractor={(item) => item.id}
//     />
//   )
// }

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
      <ScrollView style={{ paddingTop: 45 }}>
        <View style={{ justifyContent: "space-evenly" }}>
          <View>
            <Modal
              animationType={"slide"}
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                // console.log("Modal has been closed");
                setModalVisible(!modalVisible);
              }}
            >
              <View
                style={{ flex: 1, backgroundColor: "#fff",marginLeft:5,marginRight:9,marginTop:10 }}
              >
                <Text style={{alignSelf:'center'}}>Select Semester</Text>
                <FlatList
                  data={semData}
                  renderItem={({ item }) => <SemesterScreen Heading={item.heading} />}
                  keyExtractor={(item) => item.id}
                />
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  <Entypo name="cross" size={30} style={{alignSelf:'center', marginBottom:60}}></Entypo>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
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
