import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import "./styles/global.css";
import Login from "./components/Auth/login";
import Dashboard from "./components/Dashboard/dashboard";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
      />

      <Route
        path="/dashboard"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
