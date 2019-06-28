import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'

const AddCircleButton = ({ title, onClick }) => (
  <Tooltip title={title}>
    <IconButton onClick={onClick}>
      <AddCircleOutline />
    </IconButton>
  </Tooltip>
)

AddCircleButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default AddCircleButton
