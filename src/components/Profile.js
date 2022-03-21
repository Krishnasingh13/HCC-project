import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { profile } = useSelector((state) => state.profile);
  return (
    <>
      <div className="profile-banner">
        <div className="container">
          <div className="row" style={{ width: "100%", height: "75vh" }}>
            <div
              className="col-md-12"
              style={{ width: "100%", height: "100%" }}
            >
              <div
                className="banner-image"
                style={{ width: "100%", height: "100%" }}
              >
                <img src={profile.profile_pic} alt="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="profile-info-bottom">
              <div className="profile-action">
                <button
                  type="button"
                  className="btn btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#gallerymodal"
                >
                  post
                </button>
                <button type="button" className="btn change-pass">
                  Change Password
                </button>
                <div className="btn-group dropup">
                  <button
                    type="button"
                    className="btn dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots"></i>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Save
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Short List
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Follow
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="candidate-profile">
                <div className="row">
                  <div className="col-md-8">
                    <div className="profile-info">
                      <h2>{profile.user.first_name}</h2>
                      <div className="info-follow">
                        <p>
                          <span>{profile.posts} </span>posts
                        </p>
                        <p>
                          <span>{profile.followers} </span>Followers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
