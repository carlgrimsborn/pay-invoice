export const loginResponse = (email: string, password: string) => {
  return {
    data: {
      user: {
        username: "Test User",
        email,
        password,
      },
      token: "xxxxxxxxxxxx",
    },
  };
};

export const documentScanLibResponse = () => {
  return {
    receiver: "Tele2 AB",
    amount: 19167,
    due_date: "2020-06-06",
  };
};
