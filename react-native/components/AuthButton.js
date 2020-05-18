import * as React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import constants from "../constants";

const Touchable = styled.TouchableOpacity``;
const Container = styled.View`
  background-color: ${(props) => props.theme.blueColor};
  padding: 10px;
  border-radius: 4px;
  width: ${constants.width / 1.8}px;
`;
const Text = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

const AuthButton = ({ text, onPress }) => (
  <Touchable onPress={onPress}>
    <Container>
      <Text>{text}</Text>
    </Container>
  </Touchable>
);
AuthButton.PropTypes = {
  text: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
};
export default AuthButton;
