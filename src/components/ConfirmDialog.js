import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogTitle from '@material-ui/core/DialogTitle'

const ConfirmDialog = ({
  message,
  confirmText,
  cancelText,
  onClose,
  onConfirm,
  open
}) => (
  <Dialog
    open={open}
    onClose={onClose}
  >
    <DialogTitle>{message}</DialogTitle>
    <DialogActions>
      <Button onClick={onClose} autoFocus>
        {cancelText}
      </Button>
      <Button onClick={onConfirm} color="secondary">
        {confirmText}
      </Button>
    </DialogActions>
  </Dialog>
)

ConfirmDialog.propTypes = {
  message: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func,
  open: PropTypes.bool
}

ConfirmDialog.defaultProps = {
  message: '',
  confirmText: '是的',
  cancelText: '取消',
  onClose: () => {},
  onConfirm: () => {},
  open: false
}

export default ConfirmDialog
