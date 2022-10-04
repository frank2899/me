import { useScroll } from 'framer-motion'
import { Fragment } from 'react'
import waterMark from './assets/images/water-mark.png'
import Footer from './components/Footer'
import Scrollspy from './components/Scrollspy'
import Social from './components/Social'

const Layout = ({page}) => {
	return (
        <Fragment>
            <img src={waterMark} className='position-fixed top-0 left-0'/>
            <Scrollspy/>
            <Social/>
            <Footer/>
        </Fragment>
	)
}

export default Layout