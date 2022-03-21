import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ user }) => {
  return (
    <div className="col-md-4">
      <div className="search-person">
        <div className="profile-head">
          <div className="profile-icon">
            <img src={user.profile_pic} alt="" />
          </div>
          <div className="profile-name">
            <Link to={"/profile/" + user.id}>
              <h3>
                {user.user.first_name} 
              </h3>
            </Link>
            {user.address !== null ? (
              <p key={user.address.id}>
                {user.address.present_state.state_name}
              </p>
            ) : (
              <p key={user.address}>Hyderabad</p>
            )}
            <p className="idname">ID - {user.user.id}</p>
          </div>
        </div>
        <Link to={"/profile/" + user.id}>
          <div className="profile-main">
            <img
              src={`https://hyderabadcastingclub.com${user.display_image.image_url}`}
              alt=""
            />
          </div>
        </Link>
        <div className="follow-button">
          <a href="#">
            <p>+ Follow</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
