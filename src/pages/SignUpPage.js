import React from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="signup">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-md-0">
            <div className="leftcolumn">
              <img src="./assests/images/sign-up.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="rightcolumn">
              <div className="loginlogo">
                <a href="index.html">
                  <img src="./assests/images/logo.png" alt="" />
                </a>
                <h3>Hyderabad Casting Club</h3>
              </div>
              <form>
                <div className="signupform">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          aria-describedby="name"
                          placeholder="Firstname"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn dropdown-toggle"
                          data-bs-toggle="dropdown"
                          data-bs-display="static"
                          aria-expanded="false"
                        >
                          City
                        </button>
                        <ul className="dropdown-menu dropdown-menu-lg-end">
                          <li>
                            <button className="dropdown-item" type="button">
                              Hyderabad
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              Warangal
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              Vizag
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn dropdown-toggle"
                          data-bs-toggle="dropdown"
                          data-bs-display="static"
                          aria-expanded="false"
                        >
                          Districts
                        </button>
                        <ul className="dropdown-menu dropdown-menu-lg-end">
                          <li>
                            <button className="dropdown-item" type="button">
                              Hyderabad
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              Warangal
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              Vizag
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          aria-describedby="name"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="tel"
                          className="form-control"
                          id="mobile-number"
                          aria-describedby="name"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn dropdown-toggle"
                          data-bs-toggle="dropdown"
                          data-bs-display="static"
                          aria-expanded="false"
                        >
                          Gender
                        </button>
                        <ul className="dropdown-menu dropdown-menu-lg-end">
                          <li>
                            <button className="dropdown-item" type="button">
                              Male
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              Female
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              Other
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="date"
                          className="form-control"
                          id="dob"
                          aria-describedby="name"
                          placeholder="Date of birth"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="file"
                          className="form-control"
                          id="img"
                          name="img"
                          accept="image/*"
                          placeholder="Upload a pic"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="mobile-number"
                          aria-describedby="name"
                          placeholder="Enter Password"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="confirm-password"
                          aria-describedby="name"
                          placeholder="Confirm Password"
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="submitbutton submitbutton1">
                        <button type="submit" className="btn ">
                          Submit
                        </button>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="loginbutton">
                        <p>
                          Already have an account click 
                          <Link to='/signIn'>
                            <button
                              type="button"
                              className="btn "
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              Sign In
                            </button>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
