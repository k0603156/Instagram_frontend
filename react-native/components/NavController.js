import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useIsLoggedIn, useLogIn, userLogOut } from "../AuthContext";
export default () => {
  const isLoggedIn = useIsLoggedIn();
  const logIn = useLogIn();
  const logOut = userLogOut();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoggedIn ? (
        <TouchableOpacity onPress={logOut}>
          <Text>log out</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={logIn}>
          <Text>log in</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
