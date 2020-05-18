import "react-native-gesture-handler";
import * as React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import Search from "../screens/Search";

const TabNavigation = createBottomTabNavigator();

export default () => (
  <TabNavigation.Navigator>
    <TabNavigation.Screen name="Feed" component={Home} />
    <TabNavigation.Screen name="Notifications" component={Notifications} />
    <TabNavigation.Screen
      name="Add"
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          e.preventDefault();
          navigation.navigate("PhotoNavigation");
        },
      })}
      component={View}
    />
    <TabNavigation.Screen name="Profile" component={Profile} />
    <TabNavigation.Screen name="Search" component={Search} />
  </TabNavigation.Navigator>
);
