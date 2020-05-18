import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
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
  autoCapitalize = "none",
  autoCorrect = true,
  returnKeyType = "done",
  keyboardType = "default",
  onEndEditing = () => null,
  onChange,
  value,
}) => (
  <Container>
    <TextInput
      placeholder={placeholder}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      returnKeyType={returnKeyType}
      keyboardType={keyboardType}
      onChangeText={onChange}
      onEndEditing={onEndEditing}
      value={value}
    />
  </Container>
);

AuthInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
  autoCorrect: PropTypes.bool,
  returnKeyType: PropTypes.oneOf(["done", "go", "next", "search", "send"]),
  keyboardType: PropTypes.oneOf([
    "default",
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad",
  ]),
  onChange: PropTypes.func.isRequired,
  onEndEditing: PropTypes.func,
  value: PropTypes.string.isRequired,
};
export default AuthInput;
