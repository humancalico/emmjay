import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Modal, Pressable } from "react-native";

import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import SemesterScreen from "./SemesterScreen";
import { FlatList } from "react-native";
import { AppContext } from "../AppContext";

const Tab = createMaterialBottomTabNavigator();


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
  const {studentDetail, setStudentDetail}=React.useContext(AppContext);

  const handleSignOut = () =>{
    setStudentDetail(null);
    navigation.navigate('Login');
  }

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
                <Pressable style={{alignItems:"center", justifyContent:'center', paddingVertical:15, paddingHorizontal:32, borderRadius: 4, elevation:3, backgroundColor:'black', marginBottom:12}} onPress={handleSignOut}>
                  <Text style={{fontSize:16, lineHeight:21, fontWeight:'bold', letterSpacing:0.25, color:'white'}}>Sign out</Text>
                </Pressable>
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
