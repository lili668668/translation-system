import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

const FormDialog = (props) => {
  const {
    message,
    confirmText,
    cancelText,
    open,
    onClose,
    onSubmit,
    children
  } = props

  const handleSubmit = (event) => {
    onSubmit(event)
    event.preventDefault()
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{message}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            {cancelText}
          </Button>
          <Button type="submit" color="primary">
            {confirmText}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}


FormDialog.propTypes = {
  message: PropTypes.string,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

FormDialog.defaultProps = {
  message: '',
  confirmText: '是的',
  cancelText: '取消'
}

export default FormDialog
