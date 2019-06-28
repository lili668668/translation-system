import React from 'react'
import { TemplateConnector } from '@devexpress/dx-react-core'
import { VirtualTable } from '@devexpress/dx-react-grid-material-ui'
import { makeStyles } from '@material-ui/styles'
import pink from '@material-ui/core/colors/pink'
import purple from '@material-ui/core/colors/purple'
import ButtonBase from '@material-ui/core/ButtonBase'
import TableCell from '@material-ui/core/TableCell'

const useStyles = makeStyles((theme) => ({
  cell: {
    padding: 0
  },
  duplicate: {
    paddingLeft: `8px !important`,
    backgroundColor: pink[50],
    width: '100%',
    height: '100%'
  },
  pointed: {
    paddingLeft: `8px !important`,
    backgroundColor: purple[50],
    width: '100%',
    height: '100%'
  },
  button: {
    width: '100%',
    height: '100%'
  }
}))

const CellComponent = ({ onDuplicateCellClick, ...props }) => {
  const classes = useStyles()
  return (
    <TemplateConnector>
      {({ tableBodyRows, pointer }) => {
        const isDuplicate = tableBodyRows
          .map(bodyRow => bodyRow.row)
          .filter(bodyRow => bodyRow.id !== props.row.id)
          .map(bodyRow => bodyRow[props.column.name])
          .includes(props.value)
        if (isDuplicate) {
          const isPointed = props.row.id === pointer
          return (
            <TableCell className={classes.cell}>
              <ButtonBase className={classes.button} onClick={() => onDuplicateCellClick(props.column.name, props.value)}>
                <VirtualTable.Cell
                  {...props}
                  className={isPointed ? classes.pointed : classes.duplicate}
                />
              </ButtonBase>
            </TableCell>
          )
        }
        return (<VirtualTable.Cell {...props} />)
      }}
    </TemplateConnector>
  )
}

export default CellComponent
