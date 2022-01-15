import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import AuthState from "./context/authState";
import tokenAuth from "./config/tokenAuth";
import Private from "./routes/Private";

const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

const App = () => {
  return (
    <AuthState>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Private />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthState>
  );
};
export default App;
