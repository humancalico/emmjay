import React from 'react'
import Card from './Card'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { FlatList } from 'react-native';
import { useQuery } from '@tanstack/react-query';

const fetchAttendanceDetail = async (attendanceDetailRequest) => {
  const response = await fetch('https://webportal.jiit.ac.in:6011/StudentPortalAPI/StudentClassAttendance/getstudentattendancedetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer <TOKEN>',
    },
    body: JSON.stringify(attendanceDetailRequest)
  });
  return response.json();
};

const renderItem = ({ item }) => (
  <Card Heading={item.heading} Ratio={item.ratio} Status={item.status} />
);

const AttendanceListComponent = () => {
  const attendanceDetailRequest = {
    "clientid": "JAYPEE",
    "instituteid": "11IN1902J000003",
    "studentid": "J1281900629",
    "stynumber": "8",
    "registrationid": "NDRUM22110000001"
  };
  const { data } = useQuery(['attendanceKey'], () => fetchAttendanceDetail(attendanceDetailRequest), {
    suspense: true,
    onSuccess: (data) => console.log(data),
  });
  const cardsData = data?.response?.studentattendancelist?.map((item, index) => ({
    id: `${index + 1}`,
    heading: item.subjectcode,
    ratio: `${item.Ltotalpres}/${item.Ltotalclass}`,
    status: 'Attend all the classes it is very necessary otherwise you will fail'
  })) ?? [];
  console.log(cardsData);

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