import axios from "axios";
import { citiesURL, languagesURL, statesURL } from "../../api";

export const LOAD_LANGUAGES = () => async (dispatch) => {
  const languages = await axios.get(languagesURL());
  dispatch({
    type: "FETCH_LANGUAGES",
    payload: {
      languages: languages.data.results,
    },
  });
};

export const LOAD_STATES = () => async (dispatch) => {
  const states = await axios.get(statesURL());
  dispatch({
    type: "FETCH_STATES",
    payload: {
      states: states.data.results,
    },
  });
};

export const LOAD_CITIES = (id) => async (dispatch) => {
  const cities = await axios.get(citiesURL(id));
  dispatch({
    type: "FETCH_CITIES",
    payload: {
      cities: cities.data.results,
    },
  });
};