type User = {
  username: string | null;
  email: string | null;
  password: string | null;
};

type Payment = {
  receiver: string | null;
  amount: number | null;
  due_date: string | null;
  type: ("basic" | "extended" | "splitted") | null;
  uri: string | null;
};

type State = {
  token: string | null;
  autostarttoken: string | null;
  isLoggedIn: boolean;
  completedPayment: boolean;
  user: User;
  payment: Payment;
};

export const state: State = {
  token: null,
  autostarttoken: null,
  isLoggedIn: false,
  completedPayment: false,
  user: {
    username: null,
    email: null,
    password: null,
  },
  payment: {
    receiver: null,
    amount: null,
    due_date: null,
    type: null,
    uri: null,
  },
};
