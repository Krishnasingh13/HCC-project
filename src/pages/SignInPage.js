import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInAction } from "../redux/actions/auth";

const SignInPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInAction(loginData));
  };
  if (isLoggedIn) {
    navigate("/");
  } else {

  }


  return (
    <div className="loginmodal" id="staticBackdrop">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <div className="loginlogo">
              <img src="./assests/images/logo.png" alt="" />
            </div>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <h3>Hyderabad Casting Club</h3>
              <div className="mb-3">
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-3">
                <div className="submitbutton">
                  <button type="submit" className="btn ">
                    Submit
                  </button>
                </div>
              </div>
              <div className="mb-1">
                <div className="forgotpassword">
                  <a href="#">
                    <p>Forgot Password?</p>
                  </a>
                </div>
              </div>
              <div className="mb-3">
                <div className="forgotpassword signup">
                  <p>
                    Don't have an account ?
                    <Link to="/signUp">
                      <span>Sign up</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
            {/* <h3>Check User Credentials</h3> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
