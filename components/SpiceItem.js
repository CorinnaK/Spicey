import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Colors";
import CustomTextCmp from "./CustomTextCmp";

const SpiceItem = (props) => {
  const [isEnabled, setIsEnabled] = useState(props.amount !== 0);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <LinearGradient
      style={styles.spiceContainer}
      colors={["white", "white"]}
      start={{ x: 0.8, y: 0.5 }}
    >
      <CustomTextCmp style={styles.text}>{props.name}</CustomTextCmp>
      {/* <CustomTextCmp style={styles.text}>{props.amount}</CustomTextCmp> */}
      <Switch
        disabled={false}
        trackColor={{ false: "#767577", true: Colors.secondary }}
        thumbColor={isEnabled ? Colors.primary : "#f0f0f0"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
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
