import "react-native-gesture-handler";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";

const PhotoNavigation = createMaterialTopTabNavigator();

const NavigationOptions = {};

const PhotoTabs = () => (
  <PhotoNavigation.Navigator
    initialRouteName={"SelectPhoto"}
    headerMode="screen"
    tabBarPosition="bottom"
    tabBarOptions={NavigationOptions}
  >
    <PhotoNavigation.Screen name="SelectPhoto" component={SelectPhoto} />
    <PhotoNavigation.Screen name="TakePhoto" component={TakePhoto} />
  </PhotoNavigation.Navigator>
);
const StackNavigation = createStackNavigator();
export default () => (
  <StackNavigation.Navigator initialRouteName={"PhotoTabs"}>
    <StackNavigation.Screen
      name="PhotoTabs"
      component={PhotoTabs}
      options={{ headerShown: false }}
    />
    <StackNavigation.Screen name="UploadPhoto" component={UploadPhoto} />
  </StackNavigation.Navigator>
);
