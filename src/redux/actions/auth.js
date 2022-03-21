import axios from "axios";
import { signInURL, signOutURL } from "../../api";

export const signInAction = (data) => async (dispatch) => {
  const user = await axios.post(signInURL(), data);

  if (user.data.token) {
    dispatch({
      type: "SIGNIN",
      payload: {
        user: user.data,
      },
    });

    dispatch({
      type: "USER_AUTHENTICATED",
    });
  } else {
    dispatch({
      type: "SIGNIN",
      payload: {
        user: user.data,
      },
    });

    dispatch({
      type: "USER_UNAUTHENTICATED",
    });
  }
};

export const signOutAction = () => async (dispatch) => {
  const user = await axios.get(signOutURL());

  dispatch({
    type: "SIGN_OUT",
    payload:{
        user:user.data
    }
  });
};
