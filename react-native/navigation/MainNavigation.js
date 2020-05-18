import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation";

const MainNavigation = createStackNavigator();

const NavigationOptions = {
  gestureEnabled: true,
  gestureDirection: "vertical",
};

export default () => (
  <NavigationContainer>
    <MainNavigation.Navigator
      headerMode="none"
      mode="modal"
      screenOptions={NavigationOptions}
    >
      <MainNavigation.Screen name="TabNavigation" component={TabNavigation} />
      <MainNavigation.Screen
        name="PhotoNavigation"
        component={PhotoNavigation}
      />
    </MainNavigation.Navigator>
  </NavigationContainer>
);
