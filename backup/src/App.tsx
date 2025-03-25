import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
interface User {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  return (
    <Router>
      <GlobalStyle />
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <LoginPage users={users} setLoggedInUser={setLoggedInUser} />
          }
        />
        <Route
          path="/cadastro"
          element={<RegisterPage setUsers={setUsers} />}
        />
        <Route
          path="/home"
          element={
            loggedInUser ? (
              <HomePage user={loggedInUser} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
