import React from "react";
import { motion } from "framer-motion";


function ProjectCard(props) {
  return (
    <motion.div
      className="box box1 project-card"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div className="image-container"
      
      variants={{
        normal : { y : 75  },
        hover : { y : 0 },
      }}
      initial = "normal"
      whileInView = "hover"
      transition={{duration : 0.7}}
      
      >
        <img className="project-image" src={props.img} />
      </motion.div>
      {/* <h2 className="h2-secondary centre">{props.heading}</h2> */}
    <motion.div className="flex "
     variants={{
        normal : { y : -75  },
        hover : { y : 0 },
      }}
      initial = "normal"
      whileInView = "hover"
      transition={{duration : 0.7}}
    >
    <h2 className=" centre">{props.heading}</h2>
      <p className="style">{props.content}</p>
     <div className="project-links">
     <a className="try-button" href={props.link} target="blank">
        Try It Here
      </a>
      <a className="try-button" href={props.githubRepo} target="blank">
        Github Repo
      </a>
     </div>
    </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
