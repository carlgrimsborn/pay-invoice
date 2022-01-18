type User = {
  username: string | null;
  email: string | null;
  password: string | null;
};

type Payment = {
  receiver: string | null;
  amount: string | null;
  due_date: string | null;
  uri: string | null;
};

type State = {
  token: string | null;
  isLoggedIn: boolean;
  user: User;
  payment: Payment;
};

export const state: State = {
  token: null,
  isLoggedIn: false,
  user: {
    username: null,
    email: null,
    password: null,
  },
  payment: {
    receiver: null,
    amount: null,
    due_date: null,
    uri: null,
  },
};
