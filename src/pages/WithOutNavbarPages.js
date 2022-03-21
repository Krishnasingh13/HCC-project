import React from "react";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";

const WithOutNavbarPages = () => {
  return (
    <>
      <Routes>
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/signIn" element={<SignInPage />} />
      </Routes>
    </>
  );
};

export default WithOutNavbarPages;
