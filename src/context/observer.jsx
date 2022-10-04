import { createContext, useCallback, useEffect, useRef, useState } from 'react'
import { useInView } from "react-intersection-observer"

const ObserverContext = createContext()

const ObserverContextProvider = (props) => {
    let options = {
        threshold : 1
    }
    
	const [ homeRef, homeRefInView ] =  useInView(options);
	const [ aboutRef, aboutRefInView ] = useInView(options);
	const [ skillRef, skillRefInView ] = useInView(options);

	const [page, setPage] = useState(1)

	useEffect(() => {
        console.log("------")
        console.log(homeRefInView)
        console.log(aboutRefInView)
        console.log(skillRefInView)

        if(homeRefInView) setPage(1)
        else if(aboutRefInView) setPage(2)
        else if(skillRefInView) setPage(3)

	},[homeRefInView,aboutRefInView,skillRefInView])

    return (
        <ObserverContext.Provider value={{
            homeRef,
            aboutRef,
            skillRef,
            page
        }}>
            {props.children}
        </ObserverContext.Provider>
    )
}

export { ObserverContext, ObserverContextProvider }