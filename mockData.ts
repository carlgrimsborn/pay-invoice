export const loginResponse = (email: string, password: string) => {
  return {
    data: {
      user: {
        username: "Test User",
        email,
        password,
      },
      token: "xxxxxxxxxxxx",
      autostarttoken:
        "4904c4c-3bb4-4e3f-8ac3-0e950e529e5f& redirect=https%3a%2f%2fdemo.bankid.com%2fnyademobanken%2fCavaClientRedirRecei ver.aspx%3forderRef%3dbedea56d-7b46-47b1-890b- f787c650bc93%26returnUrl%3d.%2fCavaClientAuth.aspx%26Environment%3dKundtest",
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

export const paymentResponse = () => {
  return {
    data: {
      payment_status: "success",
    },
  };
};
