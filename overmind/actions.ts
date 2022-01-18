import axios from "axios";
import { Action, AsyncAction } from "overmind";
import { Alert, Linking } from "react-native";
import { loginResponse, paymentResponse } from "../mockData";

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
        state.autostarttoken = responseFromServer.data.autostarttoken;
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

export const authorizePayment: AsyncAction = async ({ state }) => {
  const url =
    "https://app.bankid.com/?autostarttoken=" +
    state.autostarttoken +
    "&redirect=:/";
  if (!Linking.canOpenURL(url)) {
    Alert.alert("BankID app not installed");
  } else {
    await Linking.openURL(url);
  }
};

type PaymentInput = {
  type: "basic" | "extended" | "splitted";
  completionHandler?: () => void;
};

export const paymentMethod: AsyncAction<PaymentInput> = async (
  { state, actions },
  { type, completionHandler }
) => {
  try {
    actions.authorizePayment();
    if (
      state.payment.receiver &&
      state.payment.amount &&
      state.payment.due_date &&
      state.payment.receiver.length >= 1 &&
      state.payment.amount >= 1 &&
      state.payment.due_date.length >= 1 &&
      type &&
      state.token
    ) {
      const resp = await axios.post(
        "https://c20zuamcv7.execute-api.eu-north-1.amazonaws.com/default/CaseStudy_Dummy_Endpoint",
        {
          receiver: state.payment.receiver,
          amount: state.payment.amount,
          due_date: state.payment.due_date,
          type,
          token: state.token,
        },
        {
          headers: { Authorization: "Mock Authorization Header" },
        }
      );
      if (resp.status === 200) {
        const responseFromServer = paymentResponse(
          state.payment.receiver,
          state.payment.amount,
          state.payment.due_date
        );
        if (responseFromServer.data.payment_status === "success") {
          completionHandler ? completionHandler() : null;
          state.completedPayment = true;
        } else {
          throw new Error("server error");
        }
      }
    } else {
      throw new Error("missing values");
    }
  } catch (e) {
    Alert.alert(e.toString());
    console.log(e);
  }
};

type SetPaymentInput = {
  receiver: string;
  amount: number;
  due_date: string;
  uri: string;
};

export const setPayment: Action<SetPaymentInput> = (
  { state },
  { amount, due_date, receiver, uri }
) => {
  state.payment.receiver = receiver;
  state.payment.amount = amount;
  state.payment.due_date = due_date;
  state.payment.uri = uri;
};

export const pressHome: Action = ({ state }) => {
  state.completedPayment = false;
};
