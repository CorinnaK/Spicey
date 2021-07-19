import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";

import SpiceNavigator from "./navigation/SpiceNavigator";
import spiceReducer from "./store/spiceReducer";
import { Provider } from "react-redux";

enableScreens();

const rootReducer = combineReducers({
  spices: spiceReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <SpiceNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
