import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { GROUP_FN } from '../pathnames'

const useCardStyles = makeStyles((theme) => ({
  content: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10)
  }
}))

const GroupCard = ({ group }) => {
  const classes = useCardStyles()
  return (
    <Card>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {group.name}
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="center">
        <CardActions>
          <Button size="small" color="primary" component={Link} to={GROUP_FN({ id: group.id })}>
            進入組織
          </Button>
        </CardActions>
      </Box>
    </Card>
  )
}

GroupCard.propTypes = {
  group: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default GroupCard
