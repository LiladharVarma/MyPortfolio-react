import React from "react";
import { motion } from "framer-motion";

function Card(props) {
  return (
    <motion.div
      className="box box1"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h2 className="h2-secondary centre">{props.heading}</h2>
      <p className="style">{props.content}</p>
    </motion.div>
  );
}

export default Card;
