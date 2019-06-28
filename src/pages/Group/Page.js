import React, { useState, useEffect } from 'react'
import sortBy from 'lodash-es/sortBy'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useReactRouter from 'use-react-router'
import useFirebase from '../../firebase/useFirebase'
import LoadingPage from '../../components/LoadingPage'
import AddCircleButton from '../../components/AddCircleButton'
import AddDialog from './AddDialog'
import ProjectCard from './ProjectCard'
import uniqid from 'uniqid'

const defaultForm = () => ({
  name: '未命名',
  content: {
    start: '',
    languages: [],
    rows: {},
    metas: {}
  }
})

const Page = () => {
  const { match, history } = useReactRouter()
  const firebase = useFirebase()
  const [isLoading, setIsLoading] = useState(true)
  const [group, setGroup] = useState({})
  const [groupSteam, setGroupSteam] = useState()
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const [form, setForm] = useState(defaultForm())
  const projects = group.projects ? sortBy(Object.values(group.projects), 'createdTime') : []

  const handleClose = () => {
    setOpenAddDialog(false)
    setForm(defaultForm())
  }

  const handleSubmit = () => {
    const projectId = uniqid()
    const now = (new Date()).toString()
    firebase.refGroup({ id: group.id })
      .child(`projects/${projectId}`)
      .set({
        id: projectId,
        name: form.name,
        createdTime: now
      })
      .then(() => {
        firebase.refProjectContents({ id: projectId })
          .set(form.content)
      })
    handleClose()
  }

  useEffect(() => {
    const steam = firebase.refGroup({ id: match.params.id })

    steam.on('value', (snap) => {
      if (!snap.exists()) {
        history.push('/no-content')
        return
      }
      setGroup(snap.val())
      if(isLoading) setIsLoading(false)
    })

    if (groupSteam === undefined) setGroupSteam(groupSteam)

    return () => {
      if (steam !== undefined) steam.off()
    }
  // eslint-disable-next-line
  }, [groupSteam])

  if (isLoading) return (<LoadingPage />)

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      p={5}
    >
      {projects.length !== 0 ? projects.map((project) => (
        <Box key={project.id} m={2}>
          <ProjectCard project={project} />
        </Box>
      )) : (
        <Box m={1}>
          <Typography variant="h6">沒有專案</Typography>
        </Box>
      )}
      <AddCircleButton title="新增專案" onClick={() => setOpenAddDialog(true)} />
      <AddDialog value={form} onFormChange={setForm} open={openAddDialog} onClose={handleClose} onSubmit={handleSubmit} />
    </Box>
  )
}

export default Page
