import React, { useEffect, useRef } from "react";
import Card from "./Card";
import data from "./skillsdata";

import { motion, useAnimation, useInView } from "framer-motion";

// function to create multiple card here we are passing only single object at a time by name entry

function createSkillCard(entry) {
  return <Card heading={entry.skill} content={entry.description} />;
}

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      console.log(isInView);
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.section
      class="skills-container"
      id="skills-container"
      ref={ref}
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: .8 }}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5 }}
    >
      <h1 class="heading centre">Skills</h1>
      <div class="intro">
        <p class="style  first centre">
          As we recognize that change is the only constant, we can draw a
          parallel with learning, which too remains a constant force in our
          lives.
        </p>
      </div>
      <div id="skills">
        {/* for  creating multiple cards from skillData.js file   */}
        {data.map(createSkillCard)}

        <Card
          heading="Familiar With"
          content={
            <ol class="style  centre">
              <li>Git </li>
              <li>Github</li>
              <li>Intellij IDE</li>
              <li>VSCode</li>
              <li>Eclipse</li>
              <li>Jupyter Notebook</li>
            </ol>
          }
        />
      </div>
    </motion.section>
  );
}

export default Skills;
