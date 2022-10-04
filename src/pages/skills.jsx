import { Fragment, useContext } from "react"
import meImg from '../assets/images/me.jpeg'
import { motion } from "framer-motion"
import { ObserverContext } from "../context/observer"

const Skills = ({isDarkMode}) => {

	const {
		skillRef
	} = useContext(ObserverContext)

    return (
        <Fragment>
            <div className="page bg-bluegreen d-flex align-items-center justify-content-center" id="skills" ref={skillRef}>
                <div className="container d-flex justify-content-center row" >
                    <section className="col-md-4 mb-3 d-flex">
                        <span className="img-container position-relative mb-5">
                            <motion.img 
                                initial={{ opacity: 0 }}
                                whileInView={{ 
                                    opacity: 1,
                                }}
                                src={meImg} className="rounded position d-block w-100" style={{height : '100%'}}/>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ 
                                    opacity: 1,
                                }}
                                transition={{ delay: .2 }}
                                className="img-circles rounded-circle c-1 position-absolute bg-bluegreen-dark p-4 start-100 top-0 translate-middle shadow"></motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ 
                                    opacity: 1
                                }}
                                transition={{ delay: .6 }}
                                className="img-circles rounded-circle c-2 position-absolute bg-warning p-4 top-100 translate-middle shadow"></motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ 
                                    opacity: 1
                                }}
                                transition={{ delay: .4 }}
                                className="img-circles rounded-circle c-3 position-absolute bg-dark-orange p-4 start-0 translate-middle-x shadow"></motion.span>
                        </span>
                    </section>
                    <section className="col-md-5">
                        <p className="ff-cinzel-bold text-white">Top tools and languages that i used on my work</p>
                        <span className="mb-3 d-block">
                            <p className={" mb-1 "+(isDarkMode && 'text-white')}>MERN Stack</p>
                            <div className="progress" style={{height: '7px'}}>
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: '90%'}}></div>
                            </div>
                        </span>
                        <span className="mb-3 d-block">
                            <p className={" mb-1 "+(isDarkMode && 'text-white')}>Mongo DB</p>
                            <div className="progress" style={{height: '7px'}}>
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: '90%'}}></div>
                            </div>
                        </span>
                        <span className="mb-3 d-block">
                            <p className={" mb-1 "+(isDarkMode && 'text-white')}>Node JS</p>
                            <div className="progress" style={{height: '7px'}}>
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: '80%'}}></div>
                            </div>
                        </span>
                        <span className="mb-3 d-block">
                            <p className={" mb-1 "+(isDarkMode && 'text-white')}>JS Frameworks</p>
                            <div className="progress" style={{height: '7px'}}>
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: '70%'}}></div>
                            </div>
                        </span>
                        <span className="d-block">
                            <p className={" mb-1 "+(isDarkMode && 'text-white')}>Native PHP/ PHP Frameworks</p>
                            <div className="progress" style={{height: '7px'}}>
                                <div className="progress-bar bg-warning" role="progressbar" style={{width: '50%'}}></div>
                            </div>
                        </span>
                    </section>
                </div>
            </div>
        </Fragment>
    )
}

export default Skills