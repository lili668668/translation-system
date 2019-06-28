import React, { useState } from 'react'
import useFirebase from '../firebase/useFirebase'

export const AuthContext = React.createContext(null)

const AuthProvider = ({ children }) => {
  const firebase = useFirebase()
  const [auth, setAuth] = useState(null)
  firebase.auth.onAuthStateChanged(setAuth)
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
