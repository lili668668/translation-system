import React from 'react'
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Box from '@material-ui/core/Box'
import FormDialog from '../../components/FormDialog'

const permissionOptions = ['private', 'protected', 'public']
const permissionText = {
  private: '私有',
  protected: '不公開',
  public: '公開'
}

const AddDialog = ({ value, onFormChange, open, onClose, onSubmit }) => {
  const handleChange = (label) => (event) => onFormChange({ ...value, [label]: event.target.value })
  return (
    <FormDialog
      message="新增組織"
      confirmText="新增"
      cancelText="取消"
      open={open}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <Box display="flex" flexDirection="column">
        <Box mt={1}>
          <TextField
            autoFocus
            fullWidth
            label="組織名稱"
            value={value.name}
            onChange={handleChange('name')}
            required
          />
        </Box>
        <Box mt={1}>
          <FormControl fullWidth>
            <InputLabel htmlFor="permission">權限</InputLabel>
            <Select
              value={value.permission}
              onChange={handleChange('permission')}
              inputProps={{
                id: 'permission',
              }}
            >
              {permissionOptions.map((option, index) => <MenuItem key={index} value={option}>{permissionText[option]}</MenuItem>)}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </FormDialog>
  )
}

AddDialog.propTypes = {
  value: PropTypes.shape({
    name: PropTypes.string.isRequired,
    permission: PropTypes.oneOf(permissionOptions)
  }).isRequired,
  onFormChange: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default AddDialog
