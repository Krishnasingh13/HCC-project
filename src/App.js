import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useLocation } from "react-router-dom";
import WithNavbarPages from "./pages/WithNavbarPages";
import WithOutNavbarPages from "./pages/WithOutNavbarPages";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});

const App = () => {
  const location = useLocation();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {location.pathname == "/signIn" || location.pathname == "/signUp" ? (
          <WithOutNavbarPages />
        ) : (
          <WithNavbarPages />
        )}
      </QueryClientProvider>
    </>
  );
};

export default App;
