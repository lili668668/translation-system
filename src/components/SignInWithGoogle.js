import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import useFirebase from '../firebase/useFirebase'

const SignInWithGoogle = (props) => {
  const { onSuccess, onError } = props
  const firebase = useFirebase()
  const [error, setError] = useState(null)
  const handleSignInWithGoogle = () => {
    firebase
      .signInWithGoogle()
      .then(() => {
        setError(null)
        onSuccess()
      })
      .catch((err) => {
        setError(err)
        onError()
      })
  }
  return (
    <div>
      <Button onClick={handleSignInWithGoogle} size="large" variant="outlined" color="primary">
        登入或註冊
      </Button>
      {error && (<p>{error.message}</p>)}
    </div>
  )
}

SignInWithGoogle.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func
}

SignInWithGoogle.defaultProps = {
  onSuccess: () => {},
  onError: () => {}
}

export default SignInWithGoogle
