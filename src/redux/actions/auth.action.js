export const storeUserData = (userData) => {
  return {
    type: "STORE_USER_DATA",
    payload: userData,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
