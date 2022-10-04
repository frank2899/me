import { useContext, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { MenuContext } from "../../context/modal";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 90% 40px)`,
    // clipPath: `circle(${height * 2 + 200}px at 90% 40px)`,
    backgroundColor : '#fff',
    transition: {
      type: "spring",
      stiffness: 200,
      restDelta: 20
    }
  }),
  closed: {
    clipPath: "circle(30px at 90% 40px)",
    backgroundColor : 'rgba(0,0,0,0)',
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

export const Menu = () => {
  const { isOpen, toggleOpen } = useContext(MenuContext)
  // const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen}/>
    </motion.nav>
  );
};
