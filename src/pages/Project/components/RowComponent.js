import React from 'react'
import { TemplateConnector } from '@devexpress/dx-react-core'
import { VirtualTable } from '@devexpress/dx-react-grid-material-ui';
import { makeStyles } from '@material-ui/styles'
import blue from '@material-ui/core/colors/blue'

const useStyles = makeStyles((theme) => ({
  pointed: {
    backgroundColor: `${blue[50]} !important`,
  }
}))

const RowComponent = (props) => {
  const { tableRow } = props
  const classes = useStyles()
  return (
    <TemplateConnector>
      {({ pointer }, { changePointer }) => {
        if (pointer === tableRow.rowId) {
          return (<VirtualTable.Row {...props} className={classes.pointed} />)
        }
        return (<VirtualTable.Row {...props} onClick={() => changePointer(tableRow.rowId)} />)
      }}
    </TemplateConnector>
  )
}

export default RowComponent
