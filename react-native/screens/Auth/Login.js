import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { LOG_IN } from "./AuthQueries";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Text = styled.Text``;

export default function Login({ navigation, route: { params } }) {
  const emailInput = useInput(params?.email || "");
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [loading, setLoding] = useState(false);
  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: {
      email: emailInput.value,
    },
  });

  const handleLogin = async () => {
    const { value } = emailInput;
    if (!value.trim().length) {
      return Alert.alert("Email can't not empty");
    } else if (!value.includes("@") || !value.includes(".")) {
      return Alert.alert("Please write an Email");
    } else if (!emailRegex.test(value)) {
      return Alert.alert("That email is invalid");
    }
    try {
      setLoding(true);
      const {
        data: { requestSecret },
      } = await requestSecretMutation();
      if (requestSecret) {
        Alert.alert("Check your email");
        navigation.navigate("Confirm", { email: value });
        return;
      } else {
        Alert.alert("Account not found");
        navigation.navigate("Signup", { email: value });
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Can't log in now");
    } finally {
      setLoding(false);
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
          onSubmitEditing={handleLogin}
        />
        <AuthButton text={"Log in"} onPress={handleLogin} loading={loading} />
      </View>
    </TouchableWithoutFeedback>
  );
}
