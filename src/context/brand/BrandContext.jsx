import React from 'react'
import { initState, reducer } from './brandReducer'

const BrandContext = React.createContext()

export const BrandProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initState)
  return (
    <BrandContext.Provider value={[state, dispatch]}>
      {children}
    </BrandContext.Provider>
  )
}

export const useBrandContext = () => {
  const context = React.useContext(BrandContext)
  if (!context) {
    throw new Error(
      'Called `useBrandContext()` outside of BrandContextProvider'
    )
  }
  return context
}
