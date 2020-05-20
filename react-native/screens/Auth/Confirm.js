import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Alert } from "react-native";
import styled from "styled-components";
import AuthButton from "../../components/AuthButton";
import AuthInput from "../../components/AuthInput";
import useInput from "../../hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import { CONFIRM_SECRET } from "./AuthQueries";
import { useLogIn } from "../../AuthContext";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export default function Login({
  navigation,
  route: {
    params: { email },
  },
}) {
  const confirmInput = useInput("");
  const logIn = useLogIn();
  const [loading, setLoding] = useState(false);
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      secret: confirmInput.value,
      email,
    },
  });
  const handleConfirm = async () => {
    const { value } = confirmInput;
    if (value === "" || value === " " || !value.includes(" ")) {
      return Alert.alert("Invalid secret");
    }
    try {
      setLoding(true);
      const {
        data: { confirmSecret },
      } = await confirmSecretMutation();
      if (confirmSecret !== "" || confirmSecret !== false) {
        logIn(confirmSecret);
      } else {
        Alert.alert("Wrong secret!");
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Can't confirm secret");
    } finally {
      setLoding(false);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
        <AuthInput
          {...confirmInput}
          placeholder={"Secret"}
          autoCorrect={false}
          returnKeyType={"send"}
          onSubmitEditing={handleConfirm}
        />
        <AuthButton
          text={"Confirm"}
          onPress={handleConfirm}
          loading={loading}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
