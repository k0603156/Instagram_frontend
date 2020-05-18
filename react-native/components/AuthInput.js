import * as React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import constants from "../constants";

const Container = styled.View`
  margin-bottom: 10px;
`;
const TextInput = styled.TextInput`
  width: ${constants.width / 1.8}px;
  padding: 5px 10px;
  background-color: ${(props) => props.theme.greyColor};
  border: 1px solid ${(props) => props.theme.darkGreyColor};
  border-radius: 4px;
`;

const AuthInput = ({
  placeholder,
  value,
  keyboardType = "default",
  autoCapitalize = "none",
  onChange,
}) => (
  <Container>
    <TextInput
      onChangeText={onChange}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      placeholder={placeholder}
      value={value}
    />
  </Container>
);

AuthInput.PropTypes = {
  placeholder: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  keyboardType: propTypes.oneOf([
    "default",
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad",
  ]),
  autoCapitalize: propTypes.oneOf(["none", "sentences", "words", "characters"]),
  onChange: propTypes.func.isRequired,
};
export default AuthInput;
