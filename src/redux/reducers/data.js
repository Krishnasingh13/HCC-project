const initState = {
  languages: [],
  states: [],
  cities: [],
};

const dataReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_LANGUAGES":
      return {
        ...state,
        languages: action.payload.languages,
      };
    case "FETCH_STATES":
      return {
        ...state,
        states: action.payload.states,
      };
    case "FETCH_CITIES":
      return {
        ...state,
        cities: action.payload.cities,
      };

    default:
      return { ...state };
  }
};

export default dataReducer;
