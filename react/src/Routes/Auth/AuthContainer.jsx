import React, { useState, useCallback } from "react";
import AuthPresenter from "./AuthPresenter";
import useInput from "../../Hooks/useInput";
import { useMutation } from "react-apollo-hooks";
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOCAL_LOG_IN
} from "./AuthQueries";
import { toast } from "react-toastify";
import { ACTION_CONFIRM, ACTION_SIGNUP, ACTION_LOGIN } from "./AuthAction";
import { TOAST_ERROR, TOAST_SUCESS } from "./AuthAction";

export default () => {
  const [action, setAction] = useState(ACTION_LOGIN);
  const userName = useInput("");
  // const password = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const email = useInput("");
  const secret = useInput("");
  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: { email: email.value }
  });
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      userName: userName.value,
      firstName: firstName.value,
      lastName: lastName.value
    }
  });
  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value
    }
  });
  const [localLogiInMutation] = useMutation(LOCAL_LOG_IN);

  const actionWithToast = useCallback((type, message, callback) => {
    toast[type](message);
    if (callback) callback();
    return () => {};
  }, []);
  const onSubmit = async e => {
    e.preventDefault();
    if (action === ACTION_LOGIN) {
      if (email.value !== "") {
        try {
          const {
            data: { requestSecret }
          } = await requestSecretMutation();
          console.log(requestSecret);
          if (!requestSecret) {
            actionWithToast(
              "error",
              "You don't have an account yet. create one",
              () => {
                setTimeout(() => {
                  setAction(ACTION_SIGNUP);
                }, 3000);
              }
            );
          } else {
            actionWithToast(
              "success",
              "Check your inbox for your login secret",
              () => setAction(ACTION_CONFIRM)
            );
          }
        } catch {
          actionWithToast("error", "Cant' request secret, try again");
        }
      } else {
        actionWithToast("error", "Email is required");
      }
    } else if (action === ACTION_SIGNUP) {
      if (
        email.value !== "" &&
        userName.value !== "" &&
        firstName.value !== "" &&
        lastName.valu !== ""
      ) {
        try {
          const {
            data: { createAccount }
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("Can't create account");
          } else {
            toast.success("Account created! Log In now!");
            setTimeout(() => {
              setAction("logIn");
            }, 3000);
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("All field is required");
      }
    } else if (action === ACTION_CONFIRM) {
      if (secret.value !== "") {
        try {
          const {
            data: { confirmSecret: token }
          } = await confirmSecretMutation();
          if (token !== "" && token !== undefined) {
            localLogiInMutation({ variables: { token } });
          } else {
            throw Error();
          }
        } catch {
          toast.error("Can't confirm secret, check again");
        }
      }
    }
  };

  return (
    <AuthPresenter
      setAction={setAction}
      action={action}
      userName={userName}
      // password={password}
      firstName={firstName}
      lastName={lastName}
      email={email}
      onSubmit={onSubmit}
      secret={secret}
    />
  );
};
