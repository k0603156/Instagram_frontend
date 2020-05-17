import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useIsLoggedIn, useLogIn, userLogOut } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
export default () => {
  const isLoggedIn = useIsLoggedIn();
  const logIn = useLogIn();
  const logOut = userLogOut();
  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? (
        <TouchableOpacity onPress={logOut}>
          <Text>log out</Text>
        </TouchableOpacity>
      ) : (
        <AuthNavigation />
      )}
    </View>
  );
};
