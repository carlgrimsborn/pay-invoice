type User = {
  firstName: string | null;
  lastName: string | null;
  password: string | null;
};

type Payment = {
  receiver: string | null;
  amount: string | null;
  due_date: string | null;
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
    firstName: null,
    lastName: null,
    password: null,
  },
  payment: {
    receiver: null,
    amount: null,
    due_date: null,
  },
};
