import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Login({navigation}) {
  const [isSecure, setIsSecure] = useState(true);
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login Screen</Text>
      <Text style={styles.description}>Login</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your enrollment number</Text>
        {/* Add keyboardType='numeric' or not?? maxLength={10} or not??*/}
        <TextInput style={styles.inputStyle} keyboardType='default' autoCorrect={false}></TextInput>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your password</Text>
        {/* Add keyboardType='numeric' or not?? maxLength={10} or not??*/}
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          secureTextEntry={isSecure}>
        </TextInput>
        <TouchableOpacity style={styles.btnEye} onPress={() => {
            setIsSecure(!isSecure)
          }}>
            <MaterialCommunityIcons name={isSecure==false?'eye-outline':'eye-off-outline'} size={20} color={'rgba(255,255,255,0.7'}></MaterialCommunityIcons>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={()=>{navigation.navigate('Home')}}
        >
          <Text style={{ color: "#fff" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 25,
    fontFamily: "serif",
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontSize: 18,
    color: "#000",
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: "serif",
    fontWeight: "bold",
  },
  inputStyle: {
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#6E42E5",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 6,
    fontFamily: "serif",
    fontSize: 18,
  },
  // wrapper: {
  //   // paddingHorizontal: 10,
  //   // paddingVertical: 15,
  //   // paddingBottom: 30
  //   flexDirection: "row",
  //   // justifyContent:'center',
  //   alignItems: "center",
  //   marginTop: 15,
  //   marginBottom: 360,
  //   // alignContent:"center"
  // },
  // wrapperText: {
  //   // paddingLeft: 30
  //   marginTop: 0,
  // },
  buttonStyle: {
    borderRadius: 40,
    height: 50,
    width: 141,
    marginTop: 23,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6E42E5",
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "600",
  },
  btnEye:{
    position:'absolute',
    right:15,
    top:49,
  }
});
