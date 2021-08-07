import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";

import SpiceForm from "../components/editSpiceForm";

const AddSpices = (props) => {
  const [selectedSpice, setSelectedSpice] = useState();

  const masterSpiceList = useSelector((state) => state.spices.masterSpices);
  const userSpiceList = useSelector((state) => state.spices.userSpices);

  const onChangeSelectHandler = (spice) => {
    setSelectedSpice(spice);
  };

  return (
    <View>
      <Picker
        selectedValue={selectedSpice}
        onValueChange={(itemValue, itemIndex) => {
          onChangeSelectHandler(itemValue);
        }}
      >
        {masterSpiceList.map((spice) => (
          <Picker.Item label={spice.name} value={spice} key={spice.id} />
        ))}
      </Picker>
      <SpiceForm
        editChoice={selectedSpice ? "curated" : null}
        spiceId={selectedSpice ? selectedSpice.id : 0}
      />
      {/* <Picker
        selectedValue={selectedSpice}
        onValueChange={(itemValue, itemIndex) => {
          onChangeSelectHandler(itemValue);
        }}
      > */}
      {/* {userSpiceList.map((spice) => (
          <Picker.Item label={spice.name} value={spice} key={spice.id} />
        ))}
      </Picker> */}
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
  descriptionInput: {
    borderColor: "black",
    borderWidth: 0.5,
    height: 90,
    textAlignVertical: "top",
  },
});

export default AddSpices;
