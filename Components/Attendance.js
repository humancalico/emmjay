import React from 'react'
import Card from './Card'
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Attendance({navigation}) {
  return (
    <View style={styles.container}>
      {/* <Button title="Visit Again" onPress={()=>navigation.navigate('Attendance')}>
      </Button> */}
    <ScrollView contentContainerStyle={{
    //   alignItems: "center",
    //   justifyContent: "center"
    }}>
      <Card
        Heading="Software Development"
        Ratio="7/10"
        Status="On Track, you can skip the next 2 classes"
      ></Card>
      <Card
        Heading="ANM"
        Ratio="3/10"
        Status="Attend all the classes it is very necessaraerea otherwise you will faildsfjklasdf;ja;"
      ></Card>
      <Card
        Heading="ANM"
        Ratio="3/10"
        Status="Attend all the classes it is very necessaraerea otherwise you will faildsfjklasdf;ja;"
      ></Card>
      <Card
        Heading="ANM"
        Ratio="3/10"
        Status="Attend all the classes it is very necessaraerea otherwise you will faildsfjklasdf;ja;"
      ></Card>
      <Card
        Heading="ANM"
        Ratio="3/10"
        Status="Attend all the classes it is very necessaraerea otherwise you will faildsfjklasdf;ja;"
      ></Card>
      <Card
        Heading="ANM"
        Ratio="3/10"
        Status="Attend all the classes it is very necessaraerea otherwise you will faildsfjklasdf;ja;"
      ></Card>
      <Card
        Heading="ANM"
        Ratio="3/10"
        Status="Attend all the classes it is very necessaraerea otherwise you will faildsfjklasdf;ja;"
      ></Card>
      <Card
        Heading="ANM"
        Ratio="3/10"
        Status="Attend all the classes it is very necessaraerea otherwise you will faildsfjklasdf;ja;"
      ></Card>
      {/* <Login /> */}
      <StatusBar style="auto" />
    </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      paddingTop:40
    },
})