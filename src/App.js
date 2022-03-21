import React from "react";
import { useLocation } from "react-router-dom";
import WithNavbarPages from "./pages/WithNavbarPages";
import WithOutNavbarPages from "./pages/WithOutNavbarPages";

const App = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname == "/signIn" || location.pathname == "/signUp" ? (
        <WithOutNavbarPages />
      ) : (
        <WithNavbarPages />
      )}
    </>
  );
};

export default App;
