import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const EditSpices = (props) => {
  const [selectedSpice, setSelectedSpice] = useState();

  return (
    <View>
      <Text>Hello edit spice</Text>
      <Picker
        selectedValue={selectedSpice}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedSpice(itemValue);
        }}
      >
        <Picker.Item label="Basil" value="basil" />
        <Picker.Item label="Cummin" value="cummin" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditSpices;
