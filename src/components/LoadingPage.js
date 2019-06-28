import React from 'react'
import { makeStyles } from '@material-ui/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 400
  }
}))

const LoadingPage = () => {
  const classes = useStyles()
  return (
    <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
      <CircularProgress disableShrink color="secondary" />
    </Grid>
  )
}

export default LoadingPage

