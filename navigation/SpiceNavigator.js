import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import UserSpices from "../screens/UserSpices";
import SpiceDetails from "../screens/SpiceDetails";
import AllSpices from "../screens/AllSpices";
import Colors from "../constants/Colors";
import EditSpices from "../screens/EditSpices";
import AddSpices from "../screens/AddSpices";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const navOptions = {
  headerStyle: {
    backgroundColor: Colors.secondary,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const SpiceNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navOptions}>
      <Stack.Screen name="UserSpices" component={UserSpices} />
      <Stack.Screen name="SpiceDetails" component={SpiceDetails} />
      <Stack.Screen name="AllSpices" component={AllSpices} />
      <Stack.Screen name="EditSpices" component={EditSpices} />
      <Stack.Screen name="AddSpices" component={AddSpices} />
    </Stack.Navigator>
  );
};
const GlobalSpiceNavigator = () => {
  return (
    <Stack.Navigator screenOptions={navOptions}>
      <Stack.Screen name="AllSpices" component={AllSpices} />
      <Stack.Screen name="SpiceDetails" component={SpiceDetails} />
    </Stack.Navigator>
  );
};

const SpiceDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="UserSpices"
        screenOptions={navOptions}
      >
        <Drawer.Screen name="GlobalSpices" component={GlobalSpiceNavigator} />
        <Drawer.Screen name="UserSpices" component={SpiceNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default SpiceDrawer;
