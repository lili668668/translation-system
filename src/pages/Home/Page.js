import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid'
import sortBy from 'lodash-es/sortBy'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useAuth from '../../auth/useAuth'
import useFirebase from '../../firebase/useFirebase'
import LoadingPage from '../../components/LoadingPage'
import AddCircleButton from '../../components/AddCircleButton'
import AddDialog from './AddDialog'
import GroupCard from './GroupCard'

const defaultForm = () => ({
  name: '未命名',
  permission: 'private'
})

const Page = () => {
  const auth = useAuth()
  const firebase = useFirebase()
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const [form, setForm] = useState(defaultForm())
  const [isLoading, setIsLoading] = useState(true)
  const [userSteam, setUserSteam] = useState(null)
  const [groups, setGroups] = useState([])

  const handleClose = () => {
    setForm(defaultForm())
    setOpenAddDialog(false)
  }

  const handleSubmit = () => {
    const groupId = uniqid()
    const groupUserId = `${groupId}_${auth.uid}`
    const now = (new Date()).toString()
    firebase.refUser({ uid: auth.uid })
      .child('groups')
      .update({
        [groupId]: now
      })
    firebase.refGroup({ id: groupId }).set({
      id: groupId,
      createdTime: now,
      disableDelete: false,
      disableRename: false,
      permission: form.permission,
      name: form.name,
      users: {
        [auth.uid]: now
      }
    })
    firebase.refGroupUser({ id: groupUserId }).set({
      id: groupUserId,
      groupId: groupId,
      uid: auth.uid,
      joinedTime: now
    })
    handleClose()
  }

  useEffect(() => {
    const steam = firebase.refUser({ uid: auth.uid })
      .child('groups')

    steam.on('value', (snap) => {
      if (!snap.exists()) {
        setGroups([])
        setIsLoading(false)
        return
      }
      const promises = Object.keys(snap.val())
        .map((groupId) => {
          return firebase.refGroup({ id: groupId })
            .once('value')
            .then((snap) => Promise.resolve(snap.val()))
        })
      Promise.all(promises)
        .then((result) => {
          setGroups(sortBy(result, 'createdTime'))
          if (isLoading) setIsLoading(false)
        })
    })

    if (userSteam === null) setUserSteam(steam)

    return () => {
      if (userSteam !== null) userSteam.off()
    }
  // eslint-disable-next-line
  }, [userSteam])

  if (isLoading) return (<LoadingPage />)
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      p={5}
    >
      {groups.length !== 0 ? groups.map((group) => (
        <Box key={group.id} m={2}>
          <GroupCard group={group} />
        </Box>
      )) : (
        <Box m={1}>
          <Typography variant="h6">沒有組織</Typography>
        </Box>
      )}
      <AddCircleButton title="新增組織" onClick={() => setOpenAddDialog(true)} />
      <AddDialog
        value={form}
        onFormChange={setForm}
        open={openAddDialog}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
    </Box>
  )
}

export default Page
