import React, { useEffect, useLayoutEffect } from "react";
import { FlatList, StyleSheet, View, TouchableOpacity } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import SpiceItem from "../components/SpiceItem";
import * as spiceActions from "../store/spiceAction";

const AllSpices = (props) => {
  const globalSpiceList = useSelector((state) => state.spices.masterSpices);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "Global Spice List",
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
      <FlatList data={globalSpiceList} renderItem={spice} numColumns={1} />
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

export default AllSpices;
