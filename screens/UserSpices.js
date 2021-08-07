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
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";
import SpiceItem from "../components/SpiceItem";
import Colors from "../constants/Colors";
import * as spiceActions from "../store/spiceAction";

const UserSpices = (props) => {
  const userSpiceList = useSelector((state) => state.spices.userSpices);
  const dispatch = useDispatch();

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "My Spices",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName={"md-menu"}
            onPress={() => {
              props.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Add"
            iconName={"md-add"}
            onPress={() => {
              props.navigation.navigate("AddSpices");
            }}
          />
        </HeaderButtons>
      ),
    });
  });

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
      <FlatList data={userSpiceList} renderItem={spice} numColumns={1} />
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
    height: 40,
    borderWidth: 0.5,
    borderColor: Colors.secondary,
  },
});

export default UserSpices;
