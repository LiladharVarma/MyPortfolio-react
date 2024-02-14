import React from "react";
import projectdata from "./projectdata";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function Projects() {
  function CreateProjectCard(entry) {
    return (
      <ProjectCard
        img={entry.img}
        heading={entry.heading}
        content={entry.content}
        link={entry.tryLink}
      />
    );
  }
  return (
    <motion.section
      class="project-container"
      id="project-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 class="heading centre">Projects</h1>
      <div class="intro">
        <p class="style  first centre">
          "The most effective approach to learning is through hands-on
          experience, and embarking on small projects from the outset is the
          optimal method to gain practical knowledge in any field."
        </p>
      </div>

      {/* <div className="card-container"> */}
      <div className="pj-container">{projectdata.map(CreateProjectCard)}</div>
    </motion.section>
  );
}

export default Projects;
