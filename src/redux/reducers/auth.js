const initialState = {
  user: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        user: action.payload.user,
      };
    case "USER_AUTHENTICATED":
      return {
        ...state,
        isLoggedIn: true,
      };
    case "USER_UNAUTHENTICATED":
      return {
        ...state,
        isLoggedIn: false,
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default authReducer;
