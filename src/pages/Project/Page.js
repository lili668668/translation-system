import React, { useState, useEffect } from 'react'
import useReactRouter from 'use-react-router'
import {
  EditingState,
  FilteringState,
  IntegratedFiltering
} from '@devexpress/dx-react-grid';
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
  TableFilterRow
} from '@devexpress/dx-react-grid-material-ui'
import TableComponent from './components/TableComponent'
import CellComponent from './components/CellComponent'
import RowComponent from './components/RowComponent'
import FilterCellComponent from './components/FilterCellComponent'
import EditCellComponent from './components/EditCellComponent'
import CommandComponent from './components/CommandComponent'
import PointerState from './plugins/PointerState'
import KeyboardController from './plugins/KeyboardController'
import uniqid from 'uniqid'
import sortBy from 'lodash-es/sortBy'
import { linkArray, trimObjectValues } from '../../utils/tools'
import useFirebase from '../../firebase/useFirebase'
import LoadingPage from '../../components/LoadingPage'

const defaultContent = () => ({
  start: '',
  languages: [],
  rows: {},
  metas: {}
})

const Page = () => {
  const { match, history } = useReactRouter()
  const firebase = useFirebase()
  const [isLoading, setIsLoading] = useState(true)
  const [project, setProject] = useState({})
  const [content, setContent] = useState(defaultContent())
  const [projectStream, setProjectSteam] = useState()
  const [contentSteam, setContentSteam] = useState()

  const [filters, setFilters] = useState([])
  const [pointer, setPointer] = useState()

  useEffect(() => {
    const steam = firebase.refGroup({ id: match.params.groupId })
      .child(`projects/${match.params.projectId}`)

    steam
      .on('value', (snap) => {
        if (!snap.exists()) {
          history.push('/no-content')
          return
        }
        setProject(snap.val())
      })

    if (projectStream === undefined) setProjectSteam(steam)

    return () => {
      if (projectStream !== undefined) projectStream.off()
    }
  // eslint-disable-next-line
  }, [projectStream])

  useEffect(() => {
    const steam = firebase.refProjectContents({ id: match.params.projectId })

    steam
      .on('value', (snap) => {
        if (!snap.exists()) {
          setContent(defaultContent())
        }
        setContent(snap.val())
        setIsLoading(false)
      })

    if (contentSteam === undefined) setContentSteam(steam)

    return () => {
      if (contentSteam !== undefined) contentSteam.off()
    }
  // eslint-disable-next-line
  }, [contentSteam])

  const columns = ['key']
    .concat(content.languages)
    .map(lng => ({ name: lng, title: lng }))
  const rows = linkArray(Object.values(content.metas || {}), 'id', 'next', content.start)
    .map(meta => content.rows[meta.id])
  const getRowId = row => row.id
  const commitChanges = ({ added, changed, deleted }) => {
    const ref = firebase.refProjectContents({ id: project.id })
    if (added) {
      sortBy(
        added
          .concat(rows)
          .map(row => trimObjectValues(row)),
        'key'
      )
        .forEach((row, index, array) => {
          if (row.id !== undefined) return
          row.id = uniqid()
          ref.child(`rows/${row.id}`).set(row)
          if (index === 0) {
            ref.child('start').set(row.id)
          } else {
            ref.child(`metas/${array[index - 1].id}/next`).set(row.id)
          }
          if (index === array.length - 1) {
            ref.child(`metas/${row.id}`).set({ id: row.id, canExport: true })
          } else {
            ref.child(`metas/${row.id}`).set({ id: row.id, canExport: true, next: array[index + 1].id || '' })
          }
        })
    }
    if (changed) {
      rows.forEach((row) => {
        if (changed[row.id]) {
          ref.child(`rows/${row.id}`).set({ ...row, ...changed[row.id] })
        }
      })
    }
    if (deleted) {
      const deletedSet = new Set(deleted)
      rows
        .forEach((row, index, array) => {
          if (deletedSet.has(row.id)) {
            if (index === 0) {
              ref.child('start').set(content.metas[row.id].next || '')
                .then(() => {
                  ref.child(`rows/${row.id}`).remove()
                  ref.child(`metas/${row.id}`).remove()
                })
            } else {
              const prevId = array[index - 1].id
              ref.child(`metas/${prevId}/next`).set(content.metas[row.id].next || '')
                .then(() => {
                  ref.child(`rows/${row.id}`).remove()
                  ref.child(`metas/${row.id}`).remove()
                })
            }
          }
        })
    }
  }

  const onDuplicateCellClick = (columnName, value) => setFilters([{columnName, operation: 'equal', value}])
  const EnhanceCellComponent = (props) => (<CellComponent onDuplicateCellClick={onDuplicateCellClick} {...props} />)

  if (isLoading) return (<LoadingPage />)

  return (
    <Grid
      rows={rows}
      columns={columns}
      getRowId={getRowId}
    >
      <PointerState
        pointer={pointer}
        onPointerChange={setPointer}
      />
      <EditingState
        onCommitChanges={commitChanges}
      />
      <FilteringState
        filters={filters}
        onFiltersChange={setFilters}
      />
      <IntegratedFiltering />
      <VirtualTable
        height={840}
        tableComponent={TableComponent}
        cellComponent={EnhanceCellComponent}
        rowComponent={RowComponent}
      />
      <TableHeaderRow />
      <TableFilterRow
        showFilterSelector
        cellComponent={FilterCellComponent}
      />
      <TableEditRow
        cellComponent={EditCellComponent}
      />
      <TableEditColumn
        showAddCommand
        showEditCommand
        showDeleteCommand
        commandComponent={CommandComponent}
      />
      <KeyboardController />
    </Grid>
  )
}

export default Page
