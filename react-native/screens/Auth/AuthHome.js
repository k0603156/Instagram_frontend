import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Text = styled.Text``;
export default function AuthHome({ navigation }) {
  return (
    <View>
      <Text>Auth Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text>Go to SignUp</Text>
      </TouchableOpacity>
    </View>
  );
}
