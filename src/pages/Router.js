import React, { lazy } from 'react'
import PropTypes from 'prop-types'
import { HashRouter, Route } from 'react-router-dom'
import AuthRoute from '../components/AuthRoute'
import {
  HOME,
  LOGIN,
  GROUP,
  PROJECT
} from './pathnames'

const Home = lazy(() => import('./Home'))
const Login = lazy(() => import('./Login'))
const Group = lazy(() => import('./Group'))
const Project = lazy(() => import('./Project'))

const Router = ({
  topComponent: TopComponent,
  bottomComponent: BottomComponent
}) => (
  <HashRouter>
    <TopComponent />
    <AuthRoute path={HOME} exact component={Home} />
    <AuthRoute path={GROUP} exact component={Group} />
    <AuthRoute path={PROJECT} exact component={Project} />
    <Route path={LOGIN} exact component={Login} />
    <BottomComponent />
  </HashRouter>
)

Router.propTypes = {
  topComponent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ]),
  bottomComponent: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func
  ])
}

Router.defaultProps = {
  topComponent: () => null,
  bottomComponent: () => null
}

export default Router
