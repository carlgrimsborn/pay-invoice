import { Action, AsyncAction } from "overmind";

export const cleanState: Action = ({ state }) => {
  state.token = null;
  state.isLoggedIn = false;
  state.user = {
    firstName: null,
    lastName: null,
    password: null,
  };
  state.payment = {
    receiver: null,
    amount: null,
    due_date: null,
  };
};

export const login: AsyncAction = async ({ state }) => {};
