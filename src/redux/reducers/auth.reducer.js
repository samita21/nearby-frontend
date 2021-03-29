export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "STORE_USER_DATA":
      return action.payload;

    case "LOGOUT":
      return {};

    default:
      return state;
  }
};
