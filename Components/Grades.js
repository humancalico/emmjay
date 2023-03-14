import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { ScrollView } from 'react-native';

const fetchSemesterGradeDetails = async (gradeDetailRequest) => {
  const response = await fetch('https://webportal.jiit.ac.in:6011/StudentPortalAPI/studentgradecard/showstudentgradecard', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwRUV3VnBmdndEeTlCaVFxTkx4b3RnPT0iLCJzY29wZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfU1RVREVOVCJ9XSwiaXNzIjoiaHR0cDovL2NhbXB1c2x5bnguY29tIiwiaWF0IjoxNjc4NzA2NTY2LCJleHAiOjE2Nzg3OTY1NjZ9.WatoroJeOUKB7w5X5rmmpZsEV9lC1p0Tb5d1fnX1Lcc',
    },
    body: JSON.stringify(gradeDetailRequest)
  });
  return response.json();
};

export default function Grades() {
  const gradeDetailRequest = {
    "instituteid": "11IN1902J000003",
    "studentid": "J1281900629",
    "registrationid": "NDRUM22050000001",
    "branchid": "NDBRN19040000001",
    "programid": "NDPRO19040000021"
  };
  const { data } = useQuery(['gradeKey'], () => fetchSemesterGradeDetails(gradeDetailRequest), {
    suspense: true
  });
  const [tableHead, setTableHead] = useState(['S. No.', 'Subject Code', 'Subject Description', 'Grade Awarded', 'Course Credit', 'Grade Points']);
  const tData = data?.response?.gradecard.map((grade, index) => [`${index + 1}`, grade.subjectcode, grade.subjectdesc, grade.grade, grade.earnedcredit, grade.gradepoint]);
  console.log(tData);
  const [tableData, setTableData] = useState(tData);


  return (
    <ScrollView>
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 100, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});

