import React, { useState } from 'react'
import PropTypes from 'prop-types'
import csvtojson from 'csvtojson'
import uniqid from 'uniqid'
import sortBy from 'lodash-es/sortBy'
import { makeStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import FormDialog from '../../components/FormDialog'
import { trimObjectValues } from '../../utils/tools'

const useStyles = makeStyles((theme) => ({
  fileInput: {
    display: 'none'
  }
}))

const AddDialog = ({ value, onFormChange, open, onClose, onSubmit }) => {
  const classses = useStyles()
  const [filename, setFilename] = useState('')
  const fileRef = React.createRef()
  const handleChange = (label) => (event) => onFormChange({ ...value, [label]: event.target.value })
  const handleImportFile = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.onload = (e) => {
      csvtojson()
        .fromString(e.target.result)
        .then((rawRows) => {
          const languages = Object.keys(rawRows[0]).filter(key => key !== 'key')
          let start = undefined
          let metas = {}
          const rows = sortBy(rawRows, 'key')
            .map(row => trimObjectValues({ ...row, id: uniqid() }))
            .reduce((collection, row, index, array) => {
              if (start === undefined) {
                start = row.id
              }
              if (index === array.length - 1) {
                metas = { ...metas, [row.id]: { id: row.id, canExport: true } }
              } else {
                metas = { ...metas, [row.id]: { id: row.id, next: array[index + 1].id, canExport: true } }
              }
              return Object.assign({}, collection, { [row.id]: row })
            }, {})
          onFormChange({ ...value, content: { start, languages, rows, metas } })
        })
    }
    reader.readAsText(file)
    setFilename(file.name)
  }
  const handleClose = () => {
    setFilename('')
    onClose()
  }
  const handleSubmit = () => {
    setFilename('')
    onSubmit()
  }
  return (
    <FormDialog
      message="新增專案"
      confirmText="新增"
      cancelText="取消"
      open={open}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <Box display="flex" flexDirection="column">
        <Box mt={1}>
          <TextField
            autoFocus
            fullWidth
            label="專案名稱"
            value={value.name}
            onChange={handleChange('name')}
            required
          />
        </Box>
        <Box mt={1} display="flex" flexDirection="row" alignItems="flex-end">
          <TextField
            disabled
            label="檔案路徑"
            value={filename}
            required
          />
          <Button onClick={() => fileRef.current.click()}>匯入檔案</Button>
          <input
            onChange={handleImportFile}
            className={classses.fileInput}
            type="file"
            accept=".csv"
            ref={fileRef}
          />
        </Box>
      </Box>
    </FormDialog>
  )
}

AddDialog.propTypes = {
  value: PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.shape({
      start: PropTypes.string.isRequired,
      languages: PropTypes.arrayOf(PropTypes.string).isRequired,
      rows: PropTypes.object.isRequired,
      metas: PropTypes.object.isRequired
    }).isRequired
  }).isRequired,
  onFormChange: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default AddDialog

