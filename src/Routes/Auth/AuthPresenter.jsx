import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { ACTION_CONFIRM, ACTION_SIGNUP, ACTION_LOGIN } from "./AuthAction";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${props => props.theme.blueColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

export default ({
  action,
  userName,
  // password,
  firstName,
  lastName,
  email,
  setAction,
  onSubmit,
  secret
}) => (
  <Wrapper>
    <Form>
      {action === ACTION_LOGIN && (
        <>
          <Helmet>
            <title>Log In | Prismagram</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input
              placeholder={"Email"}
              value={email.value}
              onChange={email.onChange}
              type="email"
            />
            {/* <Input placeholder={"Password"} {...password} type="password" /> */}
            <Button text={"Log in"} />
          </form>
        </>
      )}
      {action === ACTION_SIGNUP && (
        <>
          <Helmet>
            <title>Sign Up | Prismagram</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input
              placeholder={"First name"}
              value={firstName.value}
              onChange={firstName.onChange}
            />
            <Input
              placeholder={"Last name"}
              value={lastName.value}
              onChange={lastName.onChange}
            />
            <Input
              placeholder={"Email"}
              value={email.value}
              onChange={email.onChange}
              type="email"
            />
            <Input
              placeholder={"Username"}
              value={userName.value}
              onChange={userName.onChange}
            />
            {/* <Input placeholder={"Password"} {...password} type="password" /> */}
            <Button text={"Sign up"} />
          </form>
        </>
      )}
      {action === ACTION_CONFIRM && (
        <>
          <Helmet>
            <title>Confirm Secret | Prismagram</title>
          </Helmet>
          <form onSubmit={onSubmit}>
            <Input
              placeholder="Paste your secret"
              required
              value={secret.value}
              onChange={secret.onChange}
            />
            <Button text={"Confirm"} />
          </form>
        </>
      )}
    </Form>
    {action !== ACTION_CONFIRM && (
      <StateChanger>
        {action === ACTION_LOGIN ? (
          <>
            Don 't have an account?
            <Link onClick={() => setAction(ACTION_SIGNUP)}> Sign up </Link>
          </>
        ) : (
          <>
            Have an account ?
            <Link onClick={() => setAction(ACTION_LOGIN)}> Log in </Link>
          </>
        )}
      </StateChanger>
    )}
  </Wrapper>
);
