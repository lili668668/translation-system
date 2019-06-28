import React from 'react'
import BaseAppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import ExitToApp from '@material-ui/icons/ExitToApp'
import useFirebase from '../firebase/useFirebase'
import useAuth from '../auth/useAuth'
import { HOME } from '../pages/pathnames'

const AppBar = () => {
  const firebase = useFirebase()
  const auth = useAuth()
  const handleLogout = () => firebase.signOut()
  return (
    <BaseAppBar position="static">
      <Toolbar>
        <Button component="a" href={HOME} color="inherit">
          <Typography variant="h6" color="inherit">
            多國語系系統 360
          </Typography>
        </Button>
        <Box display="flex" flexGrow={1}/>
        {auth && (
          <Tooltip title="登出">
            <IconButton color="inherit" onClick={handleLogout}>
              <ExitToApp />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </BaseAppBar>
  )
}

export default AppBar
