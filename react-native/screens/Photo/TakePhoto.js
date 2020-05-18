import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
const Text = styled.Text``;
export default function TakePhoto({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("UploadPhoto")}>
        <Text>TakePhoto</Text>
      </TouchableOpacity>
    </View>
  );
}
