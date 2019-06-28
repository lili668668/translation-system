import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import Edit from '@material-ui/icons/Edit'
import Delete from '@material-ui/icons/Delete'
import Save from '@material-ui/icons/Save'
import Cancel from '@material-ui/icons/Cancel'
import useMultiKeyPress from '../../../utils/useMultiKeyPress'

const AddButton = ({ onExecute }) => (
  <Tooltip title="新增一條翻譯(快速鍵：Shift + n)">
    <IconButton onClick={onExecute}>
      <AddCircleOutline />
    </IconButton>
  </Tooltip>
)

const EditButton = ({ onExecute }) => (
  <Tooltip title="修改(快速鍵：Shift + e)">
    <IconButton onClick={onExecute}>
      <Edit />
    </IconButton>
  </Tooltip>
)

const DeleteButton = ({ onExecute }) => (
  <Tooltip title="刪除(快速鍵：Shift + Delete)">
    <IconButton onClick={onExecute}>
      <Delete />
    </IconButton>
  </Tooltip>
)

const CommitButton = ({ onExecute }) => {
  useMultiKeyPress((keys) => {
    if (keys.includes('Shift') && keys.includes('Enter')) onExecute()
  })
  return (
    <Tooltip title="儲存(快速鍵：Shift + Enter)">
      <IconButton onClick={onExecute}>
        <Save />
      </IconButton>
    </Tooltip>
  )
}

const CancelButton = ({ onExecute }) => {
  useMultiKeyPress((keys) => {
    if (keys.includes('Escape')) onExecute()
  })
  return (
    <Tooltip title="取消(快速鍵：Esc)">
      <IconButton onClick={onExecute}>
        <Cancel />
      </IconButton>
    </Tooltip>
  )
}

const CommandComponent = ({ id, onExecute }) => {
  const components = {
    add: AddButton,
    edit: EditButton,
    delete: DeleteButton,
    commit: CommitButton,
    cancel: CancelButton
  }
  const Component = components[id]
  return (<Component onExecute={onExecute} />)
}

export default CommandComponent
