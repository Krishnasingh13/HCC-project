//Base_URL
const base_url = `https://hyderabadcastingclub.com/api/`;

//AUTH
//SignIn_Url
export const signInURL = () => `${base_url}login/`;

//SignOut_URl
export const signOutURL = () => `${base_url}logout/`;


//POSTS
//Post_URL
export const postURL = (page) => `${base_url}profiles/?offset=${page}&limit=5`;


//DATA
//Languages_URL
export const languagesURL = () => `${base_url}languages/?limit=20`;

//State_URL
export const statesURL = () => `${base_url}states/?limit=40`;

//Cities_Url
export const citiesURL = (id) => `${base_url}cities/?state=${id}&limit=50`;


//PROFILE
//Profile_URL
export const profileURL = (id) => `${base_url}profiles/${id}/`;

//ModelImage_URL
export const profileImagesURL = (id) => `${base_url}modelimages/?profile=${id}`;

//ProfileInfo_URL
export const personalInfoURL = (id) => `${base_url}personaldetails/?profile=${id}`;

//InterestedInfo_URL
export const interestedInfoURL = (id) =>`${base_url}interestedin/?profile=${id}`;

//SkillsInfo_URL
export const skillsInfoURL = (id) => `${base_url}skills/?profile=${id}`;

//ProjectsInfo_URL
export const projectsInfoURL = (id) =>`${base_url}previousprojects/?profile=${id}`;


//SEARCH
//Search_URL
export const searchInfoURL = (id) => `${base_url}profiles/?search=${id}`;
