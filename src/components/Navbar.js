import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOutAction } from "../redux/actions/auth";
import { LOAD_SEARCH } from "../redux/actions/search";

const Navbar = () => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const signOutHandler = () => {
    dispatch(signOutAction());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(LOAD_SEARCH(search));
    setSearch('')
  };

  return (
    <nav
      className="navbar navbar-expand navbar-dark navmenu"
      aria-label="Second navbar example"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="./assests/images/logo.png" alt="" />
        </Link>
        <div className="searchform">
          <form onSubmit={submitHandler}>
            <div className="input-group">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="form-control"
                placeholder="Search for Artist"
              />
              <button
                className="btn searchbutton"
                type="button"
                id="button-addon2"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="collapse navbar-collapse menu" id="navbarsExample02">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="index.html"
              >
                <i className="bi bi-house-door"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-images"></i>
              </a>
            </li>

            {isLoggedIn == true ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-bell"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="bi bi-chat-left-text"></i>
                  </a>
                </li>

                <div className="flex-shrink-0 dropdown">
                  <a
                    href="#"
                    className="d-block link-dark text-decoration-none dropdown-toggle"
                    id="dropdownUser2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.user_data.profile_pic !== null ? (
                      <img
                        src={`https://hyderabadcastingclub.com${user.user_data.profile_pic}`}
                        width="32"
                        height="32"
                        className="rounded-circle"
                        alt="profile picture"
                      />
                    ) : (
                      <img
                        src={`http://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png}`}
                        alt="mdo"
                        width="32"
                        height="32"
                        className="rounded-circle"
                      />
                    )}
                  </a>
                  <ul
                    className="dropdown-menu text-small shadow"
                    aria-labelledby="dropdownUser2"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to={"/" + user.user_data.id}
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Change Password
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link
                        onClick={signOutHandler}
                        className="dropdown-item"
                        to="/"
                      >
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="modal fade uploadgallery"
                  id="gallerymodal"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  aria-labelledby="gallerymodalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <div className="upload-header">
                          <h4>Upload a Post</h4>
                        </div>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="uploadhome-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#uploadhome"
                              type="button"
                              role="tab"
                              aria-controls="uploadhome"
                              aria-selected="true"
                            >
                              Post
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="uploadprofile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#uploadprofile"
                              type="button"
                              role="tab"
                              aria-controls="uploadprofile"
                              aria-selected="false"
                            >
                              Status
                            </button>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="uploadhome"
                            role="tabpanel"
                            aria-labelledby="uploadhome-tab"
                          >
                            <div className="post-upload">
                              <div className="row justify-content-center">
                                <div className="col-md-12">
                                  <div className="upload-icon">
                                    <i className="bi bi-image"></i>
                                  </div>
                                  <p>Drag Photos and Videos Here </p>
                                  <input
                                    type="file"
                                    className="form-control"
                                    name="book cover"
                                    accept="image/*"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="uploadprofile"
                            role="tabpanel"
                            aria-labelledby="uploadprofile-tab"
                          >
                            <div className="post-upload">
                              <div className="row justify-content-center">
                                <div className="col-md-12">
                                  <div className="upload-icon">
                                    <i className="bi bi-image"></i>
                                  </div>
                                  <p>Drag Photos and Videos Here </p>
                                  <input
                                    type="file"
                                    className="form-control"
                                    name="book cover"
                                    accept="image/*"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/signIn">
                  <p>
                    <button
                      type="button"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      login
                    </button>
                  </p>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
