import React from 'react'
import { TableFilterRow } from '@devexpress/dx-react-grid-material-ui'
import { makeStyles } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import Cancel from '@material-ui/icons/Cancel'
import Box from '@material-ui/core/Box'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles((theme) => ({
  border: {
    borderBottom: '1px solid rgba(224, 224, 224, 1)'
  },
  root: {
    width: '100%',
    borderBottom: 0
  },
  closeButton: {
    width: '48px',
    height: '48px'
  }
}))

const FilterCellComponent = (props) => {
  const classes = useStyles()
  const { onFilter } = props
  return (
    <th className={classes.border}>
      <Box display="flex" flexDirection="row" alignItems="center">
        <Box display="flex" flexGrow={1}>
          <TableFilterRow.Cell {...props} className={classes.root} />
        </Box>
        <Tooltip title="清除查詢">
          <IconButton onClick={() => onFilter(null)} className={classes.closeButton}>
            <Cancel />
          </IconButton>
        </Tooltip>
      </Box>
    </th>
  )
}

export default FilterCellComponent
