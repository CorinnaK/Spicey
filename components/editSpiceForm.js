import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import Slider from "@react-native-community/slider";
import { useSelector } from "react-redux";
import Colors from "../constants/Colors";
import { useEffect } from "react";

const editSpiceForm = (props) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState("");
  const spiceId = props.spiceId;

  let spice =
    props.editChoice === "curated"
      ? useSelector((state) =>
          state.spices.masterSpices.find((spice) => spice.id === spiceId)
        )
      : useSelector((state) =>
          state.spices.userSpices.find((spice) => spice.id === spiceId)
        );

  //  TO DO - amalgamate different change handlers into one
  const descriptionChangeHandler = (text) => {
    setDescription(text);
    console.log(spice ? spice.description : "no spice selected");
  };

  const nameChangeHandler = (text) => {
    setName(text);
    console.log(name);
  };

  const amountChangeHandler = (text) => {
    setAmount(parseFloat(text));
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text>Spice Name</Text>
        <TextInput
          style={styles.nameInput}
          onChangeText={nameChangeHandler}
          value={spice ? spice.name : name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Spice Amount</Text>
        <View style={styles.sliderContainer}>
          {/*Slider Docs - https://github.com/callstack/react-native-slider */}
          <Slider
            style={{ width: 200, height: 40 }}
            value={spice ? spice.amount : amount}
            minimumValue={0}
            maximumValue={1}
            step={0.25}
            minimumTrackTintColor="#4a11a9"
            maximumTrackTintColor="#4a11aa"
            onValueChange={amountChangeHandler}
            thumbTintColor={Colors.secondary}
          />
          <Text style={styles.sliderText}>{amount} of a Jar</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text>Description</Text>
        <TextInput
          style={styles.descriptionInput}
          multiline
          numberOfLines={8}
          onChangeText={descriptionChangeHandler}
          value={spice ? spice.description : description}
        />
      </View>
      <View style={styles.inputContainer}></View>
      <View style={styles.buttonContainer}>
        <Button title="Clear" />
        <Button title="Save" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    margin: 20,
  },
  nameInput: {
    borderColor: "black",
    borderWidth: 0.5,
    height: 30,
  },
  sliderContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  sliderText: {
    // borderWidth: 0.5,
    textAlign: "center",
    textAlignVertical: "center",
    paddingHorizontal: 10,
    // width: 60,
  },
  descriptionInput: {
    borderColor: "black",
    borderWidth: 0.5,
    height: 90,
    textAlignVertical: "top",
  },
});

export default editSpiceForm;
