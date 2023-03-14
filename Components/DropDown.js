import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useQuery } from '@tanstack/react-query';


const fetchRegistrationDetail = async (registrationDetailRequest) => {
  const response = await fetch('https://webportal.jiit.ac.in:6011/StudentPortalAPI/StudentClassAttendance/getstudentInforegistrationforattendence', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwRUV3VnBmdndEeTlCaVFxTkx4b3RnPT0iLCJzY29wZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfU1RVREVOVCJ9XSwiaXNzIjoiaHR0cDovL2NhbXB1c2x5bnguY29tIiwiaWF0IjoxNjc4NzA2NTY2LCJleHAiOjE2Nzg3OTY1NjZ9.WatoroJeOUKB7w5X5rmmpZsEV9lC1p0Tb5d1fnX1Lcc`,
    },
    body: JSON.stringify(registrationDetailRequest)
  });
  return response.json();
};

// const { data } = useQuery(['registrationKey'], () => fetchRegistrationDetail(registrationDetailRequest, bearerToken), {
//   suspense: true,
//   onSuccess: (data) => console.log(data),
// });
// const data = [
//   { label: 'Item 1', value: '1' },
//   { label: 'Item 2', value: '2' },
//   { label: 'Item 3', value: '3' },
//   { label: 'Item 4', value: '4' },
//   { label: 'Item 5', value: '5' },
//   { label: 'Item 6', value: '6' },
//   { label: 'Item 7', value: '7' },
//   { label: 'Item 8', value: '8' },
// ];

const DropDown = () => {
  const registrationDetailRequest = {
    "clientid":"JAYPEE",
    "instituteid": "11IN1902J000003",
    "studentid": "J1281900629",
    // "registrationid": "NDRUM22050000001",
    // "branchid": "NDBRN19040000001",
    // "programid": "NDPRO19040000021"
  };
  const { data } = useQuery(['registrationKey'], () => fetchRegistrationDetail(registrationDetailRequest), {
    suspense: true
  });
  console.log(data);
  // const tData = data?.response?.semlist.map((registrationcode, index) => [`${index + 1}`, semlist.registrationcode]);
  // console.log(tData);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Select Semester
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        // placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select Semester"
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 120,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});