import Logo from '../../assets/images/logo.png'
import { Menu } from '../Menu';
import { SunFill, Moon } from 'react-bootstrap-icons';
import { ModeContext } from '../../context/mode';
import { useContext } from 'react';

const Nav = () => {
	const { setDarkMode } = useContext(ModeContext)

    const handleChange = event => {
        let res = false
        if (event.target.checked) res = true
        else res = false

        setDarkMode(current => !current);
    }

    return (
        <div className='p-5 position-fixed top-0 left-0 w-100' style={{
            zIndex : '5'
        }}>
            <div className='d-flex align-items-center justify-content-between px-5'>
                <div className='d-flex align-items-center'>
                    <img src={Logo}/> &nbsp;
                    <small className='ps-5 ms-5 m-0 text-white'>(+63) 9367953785 / aughusf089@gmail.com</small>
                </div>
                
                <span className='d-flex justify-content-end'>
                    <div className="form-check form-switch me-3 bg-opacity-50">
                        <input className="form-check-input border-bluegreen-dark " type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked onChange={handleChange}/>
                        <SunFill className='text-warning'/>
                    </div>
                    <Menu/>
                </span>
            </div>
        </div>
    )
}

export default Nav