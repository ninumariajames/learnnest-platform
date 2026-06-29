import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Courses from "./pages/Courses";
import Assignments from "./pages/Assignments";
import Videos from "./pages/Videos";
import Progress from "./pages/Progress";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/assignments" element={<Assignments />} />

        <Route path="/videos" element={<Videos />} />

        <Route path="/progress" element={<Progress />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;