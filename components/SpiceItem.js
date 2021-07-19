import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import CustomTextCmp from "./CustomTextCmp";

const SpiceItem = (props) => {
  return (
    <LinearGradient
      style={styles.spiceContainer}
      colors={["white", "white"]}
      start={{ x: 0.8, y: 0.5 }}
    >
      <CustomTextCmp style={styles.text}>{props.name}</CustomTextCmp>
      <CustomTextCmp style={styles.text}>{props.amount}</CustomTextCmp>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  spiceContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: Colors.primary,
  },
  text: {
    fontSize: 18,
    marginHorizontal: 10,
  },
});

export default SpiceItem;
