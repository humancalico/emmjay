import React from 'react'
import Card from './Card'
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from 'react-native';

const cardsData = [
  { id: '1', heading: 'Mathematics', ratio: '7/10', status: 'Attend all the classes it is very necessary otherwise you will faildsfjklasdf;ja;' },
  { id: '2', heading: 'Science', ratio: '5/10', status: 'Attend all the classes it is very necessary otherwise you will faildsfjklasdf;ja;' },
  { id: '3', heading: 'History', ratio: '8/10', status: 'Attend all the classes it is very necessary otherwise you will faildsfjklasdf;ja;' },
  { id: '4', heading: 'English', ratio: '4/10', status: 'Attend all the classes it is very necessary otherwise you will faildsfjklasdf;ja;' },
  { id: '5', heading: 'Art', ratio: '6/10', status: 'Attend all the classes it is very necessary otherwise you will faildsfjklasdf;ja;' },
];

const renderItem = ({ item }) => (
  <Card Heading={item.heading} Ratio={item.ratio} Status={item.status} />
);

const AttendanceListComponent = () => {
  return (
    <FlatList
      data={cardsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  )
}

export default function Attendance({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Button title="Visit Again" onPress={()=>navigation.navigate('Attendance')}>
      </Button> */}
        <AttendanceListComponent />
        {/* <Login /> */}
        <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  },
})