import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_PROFILE } from "../redux/actions/profile";

import Profile from "../components/Profile";
import Gallery from "../components/Gallery";
import Information from "../components/Information";
import Projects from "../components/Projects";

const ProfilePage = () => {
  const Id = useParams();
  const dispatch = useDispatch();
  const { profile, isLoading } = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(LOAD_PROFILE(Id.id));
  }, [Id]);
  return (
    <>
      {!isLoading && (
        <div>
          <Profile />
          <section className="itemtabs">
            <div className="container">
              <div className="tabmenu">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Gallery
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Details
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Previous Projects
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <Gallery />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="profile-gallery profile-details">
                      <div className="candidate-gallery">
                        <div className="actor-details">
                          <h3>Actor Details</h3>
                        </div>
                        <div className="editbutton">
                          <Link to="/editProfile">
                            Edit
                            <i className="bi bi-pencil"></i>
                          </Link>
                        </div>
                      </div>
                      <Information profile={profile}/>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <Projects />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
