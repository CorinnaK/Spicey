import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const FooterTextCmp = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const FooterButton = (props) => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerButton}>
        <Ionicons name="md-create" size={33} color={Colors.primary} />
        <FooterTextCmp>EDIT</FooterTextCmp>
        <FooterTextCmp>spice details</FooterTextCmp>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <Ionicons name="md-trash" size={33} color={Colors.primary} />
        <FooterTextCmp>DELETE</FooterTextCmp>
        <FooterTextCmp>from list</FooterTextCmp>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerButton}>
        <Ionicons name="md-add-circle" size={33} color={Colors.primary} />
        <FooterTextCmp>ADD </FooterTextCmp>
        <FooterTextCmp>to cart </FooterTextCmp>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    //backgroundColor: "#rgba(200, 200, 200, 0.4)",
  },
  footerButton: {
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    marginBottom: 10,
    paddingBottom: 50,
    borderWidth: 0.5,
    borderColor: Colors.primary,
    backgroundColor: "#ddd",
    elevation: 10,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  text: {
    fontSize: 12,
    // marginTop: -10,
  },
});

export default FooterButton;
