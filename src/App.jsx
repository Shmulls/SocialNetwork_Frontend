import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/navbar/navbar";
import Login from "./Pages/login/login";
import About from "./Pages/About/about";
import Game from "./Pages/game/game";
import Register from "./Pages/register/register";
import Home1 from "./Pages/home/Home1";
import Profile from "./Pages/profile/Profile";
import Post from "./component/post/Post";
import Team_pic from "./Pages/register/Team_pic";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/game" element={<Game />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
          <Route path="/team_pic" element={<Team_pic />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;