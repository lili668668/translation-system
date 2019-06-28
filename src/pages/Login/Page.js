import React from 'react'
import useReactRouter from 'use-react-router'
import Box from '@material-ui/core/Box'
import useFirebase from '../../firebase/useFirebase'
import { HOME } from '../pathnames'
import SignInWithGoogle from '../../components/SignInWithGoogle'

const Page = () => {
  const { history, location } = useReactRouter()
  const query = new URLSearchParams(location.search)
  const redirectTo = query.get('redirectTo') || HOME
  const firebase = useFirebase()
  firebase.auth.onAuthStateChanged((auth) => {
    if (auth) history.push(redirectTo)
  })
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={5}
    >
      <SignInWithGoogle />
    </Box>
  )
}

export default Page
