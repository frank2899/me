import { useContext } from "react"
import { ObserverContext } from "../../context/observer"

const Footer = () => {
	const {
		page
	} = useContext(ObserverContext)

    return (
        <div className="ps-5 position-fixed bottom-0 left-0 w-100">
            <div className="d-flex align-items-center justify-content-between">
                <small className="ps-5 text-white">
                    <small>@ 2022 BUENO</small><br/>
                    <small>ALL RIGHT RESERVED</small>
                </small>
                
                <div className="rounded-start bg-dark-orange">
                    <div className="display-5 text-white ff-cinzel-black m-4 p-2">{page?.toString()?.padStart(2,'0')}</div>
                </div>
            </div>
        </div>
    )
}

export default Footer