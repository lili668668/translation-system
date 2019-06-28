import React from 'react'
import PropTypes from 'prop-types'
import useReactRouter from 'use-react-router'
import { Route, Redirect } from 'react-router-dom'
import useAuth from '../auth/useAuth'
import { LOGIN } from '../pages/pathnames'

const AuthRoute = ({ component: Component, ...rest }) => {
  const { location } = useReactRouter()
  const auth = useAuth()
  return (
    <Route
      {...rest}
      render={props => auth !== null ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: LOGIN, search: `?redirectTo=${location.pathname}` }} />
      )}
    />
  )
}

AuthRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]).isRequired
}

export default AuthRoute
