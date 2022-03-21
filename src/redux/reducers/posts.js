const initState = {
  posts: [],
};

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        ...state,
        posts: [...state.posts, ...action.payload.posts],
        isLoading: false,
      };

    default:
      return { ...state };
  }
};

export default postsReducer;
