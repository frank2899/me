import { motion } from "framer-motion";

const Motion = (props) => {
    return (
        <motion.div 
            className="overflow-hidden"
            initial={{opacity : 0}}
            animate={{opacity : 1}}
            exit={{opacity : 0}}
            transition={{
                duration : 1.5,
                default: { ease: "linear" }
            }}
        >
            {props.children}
        </motion.div>
    )
}

export default Motion