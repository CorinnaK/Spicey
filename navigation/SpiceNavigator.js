import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UserSpices from "../screens/UserSpices";
import SpiceDetails from "../screens/SpiceDetails";

const Stack = createStackNavigator();

const SpiceNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserSpices" component={UserSpices} />
        <Stack.Screen name="SpiceDetails" component={SpiceDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SpiceNavigator;
