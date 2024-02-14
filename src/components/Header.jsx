import React, { useState } from "react";
import Nav from "./Nav";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

function Header({ currentTheme }) {
  const [theme, setTheme] = useState("dark");
  

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    if (newTheme === "light") {
      setLightMode();
    } else {
      setDarkMode();
    }

    setTheme(newTheme);
    currentTheme(newTheme);
  };

  return (
    <div className="navbar-section">
      <nav className="nav">
        <div className="logo">
          <h3 className="">Liladhar Varma</h3>
        </div>

        <ul className="nav-links">
          <Nav link="#About-container" name="About" />
          <Nav link="#skills-container" name="Skills" />
          <Nav link="#project-container" name="Projects" />
          <Nav link="#social-container" name="Socials" />

          {theme == "dark" ? (
            <button className="dark-icon" onClick={toggleTheme}>
              <DarkModeIcon />
            </button>
          ) : (
            <button className="light-icon" onClick={toggleTheme}>
              {" "}
              <LightModeIcon />{" "}
            </button>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
