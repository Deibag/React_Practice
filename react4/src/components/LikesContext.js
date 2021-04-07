import { createContext, useContext, useState } from "react"

const appContext = createContext()

const AppProvider = ({ children }) => {
    const [likes, setLikes] = useState(0)

    const getLikes = () => {
        setLikes(likes+1)
    }

    return (
        <appContext.Provider value={{ likes, getLikes }}>
            {children}
        </appContext.Provider>
    )
    
}

export const useGlobalContext = () => {
    return useContext(appContext)
}

export {appContext, AppProvider}