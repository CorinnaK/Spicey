import React from "react";
import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import SpiceItem from "../components/SpiceItem";
import Colors from "../constants/Colors";
import * as spiceActions from "../store/spiceAction";

const UserSpices = (props) => {
  const userSpiceList = useSelector((state) => state.spices.userSpices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(spiceActions.loadSpices());
  }, [dispatch]);

  const spice = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          props.navigation.navigate("SpiceDetails", {
            spiceId: itemData.item.id,
          });
        }}
      >
        <SpiceItem name={itemData.item.name} amount={itemData.item.amount} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={userSpiceList}
        renderItem={spice}
        numColumns={1}
        // contentContainerStyle={{ margin: 40 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.secondary,
  },
  container: {
    flex: 1,
    marginHorizontal: 2,
    // marginVertical: 2,
    height: 40,
    borderWidth: 0.5,
    borderColor: Colors.secondary,
  },
});

export default UserSpices;
