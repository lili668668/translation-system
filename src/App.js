import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import FirebaseProvider from './firebase/FirebaseProvider'
import AuthProvider from './auth/AuthProvider'
import AppBar from './components/AppBar'
import ErrorBoundary from './components/ErrorBoundary'
import LoadingPage from './components/LoadingPage'
import ErrorPage from './components/ErrorPage'
import Router from './pages/Router'

const theme = createMuiTheme()

const Fallback = () => (
  <div>
    <AppBar />
    <LoadingPage />
  </div>
)

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <FirebaseProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <ErrorBoundary errorPage={ErrorPage}>
            <React.Suspense fallback={<Fallback />}>
              <Router topComponent={AppBar} />
            </React.Suspense>
          </ErrorBoundary>
        </ThemeProvider>
      </AuthProvider>
    </FirebaseProvider>
  </React.Fragment>
)

export default App
