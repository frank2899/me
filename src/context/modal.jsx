import { useCycle } from 'framer-motion'
import { createContext, useState } from 'react'

const MenuContext = createContext()

const MenuContextProvider = (props) => {

    const [isOpen, toggleOpen] = useCycle(false, true)

    return (
        <MenuContext.Provider value={{
            isOpen,
            toggleOpen
        }}>
            {props.children}
        </MenuContext.Provider>
    )
}

export { MenuContext, MenuContextProvider }