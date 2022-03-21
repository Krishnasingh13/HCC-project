const initState = {
  searchInfo: [],
  isLoading: true,
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_SEARCH":
      return {
        ...state,
        searchInfo: action.payload.searchInfo,
        isLoading: false,
      };
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return { ...state };
  }
};

export default searchReducer;
