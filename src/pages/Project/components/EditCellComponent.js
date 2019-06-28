import React from 'react'
import classNames from 'classnames'
import { makeStyles } from '@material-ui/styles'
import { TableEditRow } from '@devexpress/dx-react-grid-material-ui'
import Input from '@material-ui/core/Input'

const useStyles = makeStyles((theme) => ({
  inputRoot: {
    width: '100%'
  },
  inputRight: {
    textAlign: 'right'
  },
  inputCenter: {
    textAlign: 'center'
  }
}))

const EditCellComponent = (props) => {
  const classes = useStyles()
  const { value, editingEnabled, onValueChange, column, tableColumn } = props
  const inputClasses = classNames({
    [classes.inputRight]: tableColumn && tableColumn.align === 'right',
    [classes.inputCenter]: tableColumn && tableColumn.align === 'center'
  })
  return (
    <TableEditRow.Cell {...props}>
      <Input
        multiline
        className={classes.inputRoot}
        classes={{ input: inputClasses }}
        value={value || ''}
        disabled={!editingEnabled}
        onChange={e => onValueChange(e.target.value)}
        autoFocus={editingEnabled && column.name === 'key'}
      />
    </TableEditRow.Cell>
  )
}

export default EditCellComponent
