import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { Alert } from "react-native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Text = styled.Text``;

export default function Login() {
  const emailInput = useInput("");
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const handleLogin = () => {
    const { value } = emailInput;
    if (!value.trim().length) {
      return Alert.alert("Email can't not empty");
    } else if (!value.includes("@") || !value.includes(".")) {
      return Alert.alert("Please write an Email");
    } else if (!emailRegex.test(value)) {
      return Alert.alert("That email is invalid");
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...emailInput}
          placeholder={"Email"}
          autoCorrect={false}
          keyboardType={"email-address"}
          returnKeyType={"send"}
          onEndEditing={handleLogin}
        />
        <AuthButton text={"Log in"} onPress={handleLogin} />
      </View>
    </TouchableWithoutFeedback>
  );
}
