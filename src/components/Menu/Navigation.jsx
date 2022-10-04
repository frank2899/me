import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <motion.ul variants={variants} className="p-5">
    {itemIds.map((e,i) => (
      <MenuItem 
        text={e.text}
        key={i}
        disabled={e.disabled}
        id={e.id}
       />
    ))}
  </motion.ul>
);

const itemIds = [
    {
        id : "https://frank2899.github.io/me/",
        text : "Home",
        disabled : false
    },
    {
        id : "#about",
        text : "About",
        disabled : false
    },
    {
        id : "#skills",
        text : "Skills",
        disabled : false
    },
    {
        id : "#portfolio",
        text : "Portfolio",
        disabled : true
    },
    {
        id : "#contact",
        text : "Contact Me!",
        disabled : true
    }
];