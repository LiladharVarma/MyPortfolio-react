import React, { useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Socials from "./Socials";
import darkProfile from "../images/ProfileDark.png";
import lightProfile from "../images/Profile.png";
function App() {
  const [color, setColor] = useState("dark");

  const getTheme = (theme) => {
    console.log(theme);
    setColor(theme);
  };

  return (
    <div className="container">
      <Header currentTheme={getTheme} />
      <Profile profilePhoto={color == "light" ? lightProfile : darkProfile} />
      <About />
      <Skills />
      <Projects />
      <Socials />
    </div>
  );
}

export default App;
