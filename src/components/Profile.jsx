import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

function Profile({ profilePhoto }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    control.start("visible");
  }, [isInView]);
  return (
    <div id="profile" ref={ref}>
      <motion.div
        className="pic-container"
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={control}
        transition={{ duration: 0.5 }}
      >
        <img className="my-profile" src={profilePhoto} alt="Profile Pic" />
      </motion.div>
      <motion.div
        className="greeting text-white"
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={control}
        transition={{ duration: 0.5 }}
      >
        <p className="text">Hello I'm</p>
        <h1 className="heading">Liladhar Varma</h1>
        <p className="text">Student , Learner , Developer</p>
        <div className="btn-container">
          <a id="btn" href="mailto:liladharvarma29@gmail.com">
            CONTACT ME
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Profile;
