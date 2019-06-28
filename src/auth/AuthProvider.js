import React, { useState } from 'react'
import useFirebase from '../firebase/useFirebase'

export const AuthContext = React.createContext(null)

const AuthProvider = ({ children }) => {
  const firebase = useFirebase()
  const [auth, setAuth] = useState(null)
  firebase.auth.onAuthStateChanged(setAuth)
  if (auth) {
    firebase.refUser({ uid: auth.uid })
      .once('value')
      .then((user) => {
        if (!user.exists()) {
          const now = (new Date()).toString()
          const groupUserId = `${auth.uid}_${auth.uid}`
          firebase.refUser({ uid: auth.uid }).set({
            id: auth.uid,
            createdTime: now,
            name: auth.displayName,
            groups: {
              [auth.uid]: now
            }
          })
          firebase.refGroup({ id: auth.uid }).set({
            id: auth.uid,
            createdTime: now,
            disableDelete: true,
            disableRename: true,
            permission: 'private',
            name: '私人',
            users: {
              [auth.uid]: now
            }
          })
          firebase.refGroupUser({ id: groupUserId }).set({
            id: groupUserId,
            groupId: auth.uid,
            uid: auth.uid,
            joinedTime: now
          })
        }
      })
  }
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
