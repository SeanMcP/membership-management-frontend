import React from 'react'

const AppContext = React.createContext()

const data = {
    name: 'Membership Management'
}

export const AppContextProvider = ({ children }) => {
    return <AppContext.Provider value={data}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
    const context = React.useContext(AppContext)
    if (!context) {
        throw new Error(
            'Called `useAppContext()` outside of AppContextProvider'
        )
    }
    return context
}
