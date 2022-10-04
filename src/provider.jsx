import { ModeContextProvider } from "./context/mode"
import { MenuContextProvider } from "./context/modal"
import { ObserverContextProvider } from "./context/observer"

const AppProviders = (props) => {
    return (
        <ModeContextProvider >
            <MenuContextProvider>
                <ObserverContextProvider>
                    {props.children}
                </ObserverContextProvider>
            </MenuContextProvider>
        </ModeContextProvider>
    )
}

export default AppProviders