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
