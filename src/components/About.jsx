import React, { useEffect, useRef } from "react";
import Card from "./Card";
import education from "./educationdata";
import { motion, useAnimation, useInView } from "framer-motion";

function createEducationCard(data) {
  return <Card heading={data.titile} content={data.info} />;
}

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    control.start("visible");
  }, [isInView]);
  return (
    <motion.section
      ref={ref}
      className="About-container"
      id="About-container"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={control}
      transition={{ duration: 0.5 }}
    >
      <div className="head">
        <p className="text-centre">Get To Know</p>
        <h1 className="heading">About Me</h1>
      </div>
      <div className="intro">
        <p className="intro  first centre">Hey Folks !</p>
        <p className="style first centre">
          I'm Liladhar Varma, a student with a boundless passion for technology.
          Welcome to my creative corner, where I bring ideas to life, one
          project at a time.
        </p>
      </div>
      <div className="card-container">
        {/* creating multiple cards using map method */}
        {education.map(createEducationCard)}

        <div className="box box3">
          <h2 className="h2-secondary centre">Hobbies</h2>
          <ul className="style">
            <li>Watching Movies, Listening Music , Gaming</li>
          </ul>
          <h2 className="h2-secondary centre">Languages</h2>
          <ul className="style">
            <li>English , Hindi , Marathi , Marwadi</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
