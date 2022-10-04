import Nav from "./components/Navs";
import Home from "./pages";
import React, { Fragment, useContext, useEffect } from "react";
import Layout from "./Layout";
import Model3D from "./components/model3d";
import About from "./pages/about";
import Skills from "./pages/skills";
import { ModeContext } from "./context/mode"
import { MenuContext } from "./context/modal";

function App() {
	const { isDarkMode } = useContext(ModeContext)
	const { toggleOpen } = useContext(MenuContext)

	const hashChangeHandler = (e) => {
		toggleOpen()
	}

	useEffect(() => {
		window.addEventListener('hashchange', hashChangeHandler);
		return () => {
		  window.removeEventListener('hashchange', hashChangeHandler);
		};
	}, [])
	
	return (
		<Fragment>
			<Model3D isDarkMode={isDarkMode}/>
			<Layout/>
			<Nav/>
			
			<Home />
			<About />
			<Skills />
		</Fragment>
	);
}

export default App;