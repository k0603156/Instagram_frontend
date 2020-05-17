import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Search from "../screens/Search";

const TabNavigation = createBottomTabNavigator();
const NavigationOptions = {
  gestureEnabled: true,
  gestureDirection: "horizontal-inverted",
};

export default () => (
  <NavigationContainer>
    <TabNavigation.Navigator>
      <TabNavigation.Screen name="Feed" component={Home} />
      <TabNavigation.Screen name="Notifications" component={Notifications} />
      <TabNavigation.Screen
        name="Add"
        component={View}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            console.log("add");
          },
        }}
      />
      <TabNavigation.Screen name="Profile" component={Profile} />
      <TabNavigation.Screen name="Search" component={Search} />
    </TabNavigation.Navigator>
  </NavigationContainer>
);
