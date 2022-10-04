import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = (props) => {
  return (
    <motion.li
      variants={variants}
    >
        <a href={props.id} className={(props.disabled && 'text-decoration-line-through ')+" ff-cinzel-bold menu-color fs-4 text-decoration-none d-block text-right pe-5"}>{props.text}</a>
    </motion.li>
  );
};
