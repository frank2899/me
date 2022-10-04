import { Facebook, Twitter, Instagram } from "react-bootstrap-icons"

const Social = () => {
    return (
        <div className="position-fixed top-50 end-0 translate-middle-y pe-5 me-5" >
            <div className="socials text-white d-flex flex-column" style={{gap : '1em'}}>
                <a href='#' className="text-decoration-none text-white fs-4">
                    <Facebook/>
                </a>
                <a href='#' className="text-decoration-none text-white fs-4">
                    <Twitter/>
                </a>
                <a href='#' className="text-decoration-none text-white fs-4">
                    <Instagram/>
                </a>    
            </div>
        </div>
    )
}

export default Social