import "react-native-gesture-handler";
import * as React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Tabs/Home";
import Notifications from "../screens/Tabs/Notifications";
import Profile from "../screens/Tabs/Profile";
import Search from "../screens/Tabs/Search";
import MessagesLink from "../components/MessagesLink";

const stackFactory = ({
  route: {
    name,
    params: { initialRoute, customConfig },
  },
  navigation,
}) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={name}
        component={initialRoute}
        options={customConfig}
      />
    </Stack.Navigator>
  );
};

const TabNavigation = createBottomTabNavigator();

export default () => (
  <TabNavigation.Navigator>
    <TabNavigation.Screen
      name="Feed"
      component={stackFactory}
      initialParams={{
        initialRoute: Home,
        customConfig: {
          title: "Home",
          headerRight: () => <MessagesLink />,
        },
      }}
    />
    <TabNavigation.Screen
      name="Notifications"
      component={stackFactory}
      initialParams={{
        initialRoute: Notifications,
        customConfig: {
          title: "Notifications",
        },
      }}
    />
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
    <TabNavigation.Screen
      name="Profile"
      component={stackFactory}
      initialParams={{
        initialRoute: Profile,
        customConfig: {
          title: "Profile",
        },
      }}
    />
    <TabNavigation.Screen
      name="Search"
      component={stackFactory}
      initialParams={{
        initialRoute: Search,
        customConfig: {
          title: "Search",
        },
      }}
    />
  </TabNavigation.Navigator>
);
