import axios from "axios";
import { Action, AsyncAction } from "overmind";
import { Alert } from "react-native";
import { loginResponse } from "../mockData";

export const cleanState: Action = ({ state }) => {
  state.token = null;
  state.isLoggedIn = false;
  state.user = {
    username: null,
    email: null,
    password: null,
  };
  state.payment = {
    receiver: null,
    amount: null,
    due_date: null,
    uri: null,
  };
};

type LoginInput = {
  email: string;
  password: string;
};

export const login: AsyncAction<LoginInput> = async (
  { state },
  { email, password }
) => {
  try {
    if (email.length >= 1 && password.length >= 1) {
      const resp = await axios.post(
        "https://c20zuamcv7.execute-api.eu-north-1.amazonaws.com/default/CaseStudy_Dummy_Endpoint",
        {
          email,
          password,
        },
        {
          headers: { Authorization: "Mock Authorization Header" },
        }
      );
      if (resp.status === 200) {
        const responseFromServer = loginResponse(email, password);
        state.user = responseFromServer.data.user;
        state.token = responseFromServer.data.token;
        state.isLoggedIn = true;
      }
    } else {
      throw new Error("missing username or password");
    }
  } catch (e) {
    Alert.alert(e.toString());
    console.log(e);
  }
};

type SetPaymentUriInput = {
  uri: string;
};

export const setPaymentUri: Action<SetPaymentUriInput> = (
  { state },
  { uri }
) => {
  state.payment.uri = uri;
};
