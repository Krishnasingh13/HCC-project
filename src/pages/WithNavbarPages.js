import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./HomePage";
import ProfilePage from "./ProfilePage";
import SearchPage from "./SearchPage";

const WithNavbarPages = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </>
  );
};

export default WithNavbarPages;
