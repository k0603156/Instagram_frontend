import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { CREATE_ACCOUNT } from "./AuthQueries";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Text = styled.Text``;

export default function Login({ navigation, route: { params } }) {
  const fNameInput = useInput("");
  const lNameInput = useInput("");
  const emailInput = useInput(params?.email || "");
  const usernameInput = useInput("");
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [loading, setLoding] = useState(false);
  const [createAccountMutatioin] = useMutation(CREATE_ACCOUNT, {
    variables: {
      firstName: fNameInput.value,
      lastName: lNameInput.value,
      email: emailInput.value,
      userName: usernameInput.value,
    },
  });
  const handleSignup = async () => {
    const { value: fName } = fNameInput;
    const { value: lName } = lNameInput;
    const { value: email } = emailInput;
    const { value: username } = usernameInput;

    if (fName === "") {
      return Alert.alert("need name");
    }
    if (!emailRegex.test(email)) {
      return Alert.alert("That email is invalid");
    }
    if (username === "") {
      return Alert.alert("That username is invalid");
    }
    try {
      setLoding(true);
      const {
        data: { createAccount },
      } = await createAccountMutatioin();
      if (createAccount) {
        Alert.alert("계정이 생성되었어요", "바로 로그인 하실 수 있어요");
        navigation.navigate("Login", { email });
      }
    } catch (error) {
      console.log(error);
      Alert.alert("해당 계정이 이미 존재합니다", "바로 로그인 하실 수 있어요");
      navigation.navigate("Login", { email });
    } finally {
      setLoding(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...fNameInput}
          placeholder={"First name"}
          autoCorrect={false}
          autoCapitalize="words"
        />
        <AuthInput
          {...lNameInput}
          placeholder={"Last name"}
          autoCorrect={false}
          autoCapitalize="words"
        />
        <AuthInput
          {...emailInput}
          placeholder={"Email"}
          autoCorrect={false}
          keyboardType={"email-address"}
          returnKeyType={"send"}
        />
        <AuthInput
          {...usernameInput}
          placeholder={"Username"}
          autoCorrect={false}
          returnKeyType={"send"}
        />
        <AuthButton text={"Sign up"} onPress={handleSignup} loading={loading} />
      </View>
    </TouchableWithoutFeedback>
  );
}
