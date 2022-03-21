import axios from "axios";
import { searchInfoURL } from "../../api";

export const LOAD_SEARCH = (id) => async (dispatch) => {
  const searchInfo = await axios.get(searchInfoURL(id));
  dispatch({
    type: "FETCH_SEARCH",
    payload: {
      searchInfo: searchInfo.data.results,
    },
  });

  dispatch({
    type: "LOADING",
  });
};
