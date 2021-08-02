import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import UserSpices from "../screens/UserSpices";
import SpiceDetails from "../screens/SpiceDetails";
import Colors from "../constants/Colors";

const Stack = createStackNavigator();

const SpiceNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserSpices"
          component={UserSpices}
          options={{
            title: "My Spices",
            headerStyle: {
              backgroundColor: Colors.secondary,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen name="SpiceDetails" component={SpiceDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SpiceNavigator;
