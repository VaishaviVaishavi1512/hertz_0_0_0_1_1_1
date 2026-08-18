import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;