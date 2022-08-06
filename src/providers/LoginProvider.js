import React, { createContext, useContext, useState } from 'react'

const loginContext = createContext()
const loginToggleContext = createContext()

export const useLoginContext = () => {
  return useContext(loginContext)
}

export const useLoginToggleContext = () => {
  return useContext(loginToggleContext)
}

export const LoginProvider = ({children}) => {
 const [isLogin, setIsLogin] = useState(true)

 return (
  <loginContext.Provider value={isLogin}>
    <loginToggleContext.Provider value={setIsLogin}>
      {children}
    </loginToggleContext.Provider>
  </loginContext.Provider>
 )
}