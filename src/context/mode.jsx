import { createContext, useState } from 'react'

const ModeContext = createContext()

const ModeContextProvider = (props) => {

    const [isDarkMode, setDarkMode] = useState(false)

    return (
        <ModeContext.Provider value={{
            isDarkMode,
            setDarkMode
        }}>
            {props.children}
        </ModeContext.Provider>
    )
}

export { ModeContext, ModeContextProvider }