const initState = {
  profile: {},
  profileImages: {},
  personalInfo: {},
  interestedInfo: {},
  skillsInfo: {},
  projectsInfo: {},
  isLoading: true,
};

const profileReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_PROFILE":
      return {
        ...state,
        profile: action.payload.profile,
        profileImages: action.payload.profileImages,
        personalInfo: action.payload.personalInfo,
        interestedInfo: action.payload.interestedInfo,
        skillsInfo: action.payload.skillsInfo,
        projectsInfo: action.payload.projectsInfo,
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

export default profileReducer;
