import axios from "axios";
import {
  interestedInfoURL,
  personalInfoURL,
  profileImagesURL,
  profileURL,
  projectsInfoURL,
  skillsInfoURL,
} from "../../api";

export const LOAD_PROFILE = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING",
  });
  
  const profile = await axios.get(profileURL(id));
  const profileImages = await axios.get(profileImagesURL(id));
  const personalInfo = await axios.get(personalInfoURL(id));
  const interestedInfo = await axios.get(interestedInfoURL(id));
  const skillsInfo = await axios.get(skillsInfoURL(id));
  const projectsInfo = await axios.get(projectsInfoURL(id));
  dispatch({
    type: "FETCH_PROFILE",
    payload: {
      profile: profile.data,
      profileImages: profileImages.data.results,
      personalInfo: personalInfo.data.results,
      interestedInfo: interestedInfo.data.results,
      skillsInfo: skillsInfo.data.results,
      projectsInfo: projectsInfo.data.results,
    },
  });
  console.log(profile)

  
};
