import { Fragment, useContext } from "react"
import { motion } from "framer-motion"
import { ObserverContext } from "../context/observer"

const About = () => {

	const {
		aboutRef,
	} = useContext(ObserverContext)

    return (
        <Fragment>
            <div className="page bg-dark d-flex align-items-center justify-content-center" id="about" ref={aboutRef}>
                <div className="container d-flex justify-content-center row" >
                    <motion.section 
                        initial={{ opacity: 0 }}
                        whileInView={{ 
                            opacity: 1,
                        }}
                        className="col-md-2 mb-3">
                        <span className="d-flex align-items-end">
                            <div className="display-3 ff-cinzel-bold text-white me-2">3</div>
                            <div className="fs-3 ff-cinzel-bold text-white">yrs.</div>
                        </span>
                        <div className="fs-5 ff-cinzel-bold text-white">Work <br/> Experience</div>
                    </motion.section>
                    <section className="col-md-7">
                        <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ 
                                    opacity: 1,
                                }}
                                className="ff-cinzel-bold text-white">Full Stack developer specialized in :</motion.p>

                        <div className="row">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ 
                                    opacity: 1,
                                }}
                                transition={{ delay: .1 }}
                                className="col-md-5 pb-3">
                                <p className="ff-cinzel-bold warning">API</p>
                                <small className="text-white">Create a way for two or more computer programs to communicate with each other </small>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ 
                                    opacity: 1,
                                }}
                                transition={{ delay: .2 }}
                                className="col-md-5 pb-3">
                                <p className="ff-cinzel-bold warning">Web Design</p>
                                <small className="text-white">I create a user friendly design that is fully functional and easy to use.</small>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ 
                                    opacity: 1,
                                }}
                                transition={{ delay: .3 }}
                                className="col-md-5 pb-3">
                                <p className="ff-cinzel-bold warning">Web 3.0</p>
                                <small className="text-white">I can create a blockchain application that can read-write-interact on smart contracts.</small>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ 
                                    opacity: 1,
                                }}
                                transition={{ delay: .4 }}
                                className="col-md-5 pb-3">
                                <p className="ff-cinzel-bold warning">Database Management</p>
                                <small className="text-white">Well planned database to easily manipulate and control data to meet necessary conditions throughout the entire data lifecycle</small>
                            </motion.div>
                        </div>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}

export default About