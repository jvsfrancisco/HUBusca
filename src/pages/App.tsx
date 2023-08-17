import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React from "react";

import { UserProvider } from "./../contexts/UserContext.tsx";
import HomePage from "./Home";
import GlobalStyles from "./../styles/GlobalStyles";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
