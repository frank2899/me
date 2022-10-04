import { Fragment, useContext } from "react"
import phoneModel from '../assets/images/3d-model.png'
import lineImg from '../assets/images/line.png'
import { ObserverContext } from "../context/observer"
import ResumePdf from '../assets/aughus-bueno.pdf'
const Home = () => {

	const {
		homeRef
	} = useContext(ObserverContext)

    return (
        <Fragment>
            <div className="page d-flex align-items-center bg-home justify-content-center" id="home" ref={homeRef}>
                <div className="container">
                    <div className="row">
                        <div className="col-md d-flex align-items-center p-5">
                            <div>
                                <p><i className="text-white">Aughus Frank Z. Bueno</i></p>
                                <div className="display-3 text-white ff-cinzel-bold mb-3">
                                I’m a Full Stack Developer
                                </div>
                                <span className="d-flex flex">
                                    <div className="rounded rounded-3 p-3 bg-light bg-opacity-25 border-bottom border-bluegreen-dark me-3">
                                        <span className="fs-5 ff-cinzel-bold text-light me-3">50+</span>
                                        <span className="text-light">Built Projects</span>
                                    </div>
                                    <div className="rounded rounded-3 p-3 bg-light bg-opacity-25 border-bottom border-bluegreen-dark me-3">
                                        <span className="fs-5 ff-cinzel-bold text-light me-3">30+</span>
                                        <span className="text-light">Satisfied clients</span>
                                    </div>
                                </span>

                                <span className="mt-5 d-block">
                                    <a download href={ResumePdf} className="text-decoration-none">
                                        <img src={lineImg} className="me-3 img-fluid"/> <i className="text-white">Download Resume</i>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="col-md">
                            <img src={phoneModel} className='img-fluid float-end' style={{transform : 'scale(1.1)'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home