import axios from "axios";
import { postURL } from "../../api";

export const LOAD_POSTS = (page) => async (dispatch) => {
  const posts = await axios.get(postURL(page));
  dispatch({
    type: "FETCH_POSTS",
    payload: {
      posts: posts.data.results,
    },
  });
};
