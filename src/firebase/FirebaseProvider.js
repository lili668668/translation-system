import React from 'react'
import Firebase from './firebase'

export const FirebaseContext = React.createContext(null)

const firebase = new Firebase()

const FirebaseProvider = ({ children }) => (
  <FirebaseContext.Provider value={firebase}>
    {children}
  </FirebaseContext.Provider>
)

export default FirebaseProvider
