import React from 'react'
import { VirtualTable } from '@devexpress/dx-react-grid-material-ui';
import { makeStyles } from '@material-ui/styles'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles((theme) => ({
  striped: {
    '& tbody tr:nth-of-type(odd)': {
      backgroundColor: grey[100],
    }
  }
}))

const TableComponent = (props) => {
  const classes = useStyles()
  return (
    <VirtualTable.Table {...props} className={classes.striped} />
  )
}

export default TableComponent
