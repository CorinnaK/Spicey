import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import SpiceNavigator from "./navigation/SpiceNavigator";
import spiceReducer from "./store/spiceReducer";
import { init } from "./helpers/db";

enableScreens();

init()
  .then(() => {
    console.log("SUCCESS");
  })

  .catch((err) => {
    console.log("SOMETHING WENT WRONG");
  });

const rootReducer = combineReducers({
  spices: spiceReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
