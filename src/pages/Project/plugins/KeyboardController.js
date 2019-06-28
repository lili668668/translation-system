import React from 'react'
import {
  Plugin,
  TemplateConnector
} from '@devexpress/dx-react-core'
import useMultiKeyPress from '../../../utils/useMultiKeyPress'

const Controller = ({
  pointer,
  tableBodyRows,
  editingRowIds,
  changePointer,
  addRow,
  startEditRows,
  deleteRows,
  commitDeletedRows
}) => {
  useMultiKeyPress((keys, event) => {
    const pointerIndex = tableBodyRows.findIndex(bodyRow => bodyRow.row.id === pointer)
    if (editingRowIds.length !== 0) return
    if (keys.includes('Shift') && (keys.includes('N') || keys.includes('n'))) {
      addRow()
      event.preventDefault()
      return
    }
    if (keys.includes('Shift')
      && (keys.includes('E') || keys.includes('e'))
      && pointerIndex !== -1
    ) {
      startEditRows({ rowIds: [pointer] })
      event.preventDefault()
      return
    }
    if (keys.includes('Shift') && keys.includes('Delete') && pointerIndex !== -1) {
      const length = tableBodyRows.length
      deleteRows({ rowIds: [pointer] })
      commitDeletedRows({ rowIds: [pointer] })
      if (pointerIndex === length - 1) {
        changePointer(tableBodyRows[0].row.id)
      } else {
        changePointer(tableBodyRows[pointerIndex + 1].row.id)
      }
      return
    }
    if (keys.includes('ArrowUp')) {
      if (pointerIndex < 0) {
        changePointer(tableBodyRows[0].row.id)
      } else if (pointerIndex === 0) {
        changePointer(tableBodyRows[tableBodyRows.length - 1].row.id)
      } else {
        changePointer(tableBodyRows[pointerIndex - 1].row.id)
      }
      return
    }
    if (keys.includes('ArrowDown')) {
      if (pointerIndex < 0 || pointerIndex === tableBodyRows.length - 1) {
        changePointer(tableBodyRows[0].row.id)
      } else {
        changePointer(tableBodyRows[pointerIndex + 1].row.id)
      }
      return
    }
  })
  return null
}

const KeyboardController = () => (
  <Plugin>
    <TemplateConnector>
      {({ pointer, tableBodyRows, editingRowIds }, { changePointer, addRow, startEditRows, deleteRows, commitDeletedRows }) => {
        return (
          <Controller
            pointer={pointer}
            tableBodyRows={tableBodyRows}
            editingRowIds={editingRowIds}
            changePointer={changePointer}
            addRow={addRow}
            startEditRows={startEditRows}
            deleteRows={deleteRows}
            commitDeletedRows={commitDeletedRows}
          />
        )
      }}
    </TemplateConnector>
  </Plugin>
)

export default KeyboardController
