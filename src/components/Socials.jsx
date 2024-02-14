import React from "react";
// import IconButton from '@mui/material/IconButton';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import XIcon from "@mui/icons-material/X";
import { motion } from "framer-motion";

function Socials() {
  const iconStyles = {
    width: "5rem",
    height: "5rem",
  };
  return (
    <motion.section
      class="social-container"
      id="social-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1 class="heading centre">Socials</h1>
      <div className="socials-container">
        <a
          className="icons"
          href="https://github.com/LiladharVarma"
          target="blank"
        >
          <GitHubIcon style={iconStyles} />
        </a>
        <a
          className="icons"
          href="https://twitter.com/liladhar_v30948"
          target="blank"
        >
          <XIcon style={iconStyles} />
        </a>
        <a
          className="icons"
          href="https://www.linkedin.com/in/liladhar-varma-752615247/"
          target="blank"
        >
          <LinkedInIcon style={iconStyles} />
        </a>
        <a
          className="icons"
          href="https://www.instagram.com/bajirao1292/"
          target="blank"
        >
          <InstagramIcon style={iconStyles} />
        </a>
        <a
          className="icons"
          href="mailto:liladharvarma29@gmail.com"
          target="blank"
        >
          <MailOutlineIcon style={iconStyles} />
        </a>
      </div>

      <h2 class="heading centre">Thank You</h2>
    </motion.section>
  );
}

export default Socials;
