import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import useReactRouter from 'use-react-router'
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { PROJECT_FN } from '../pathnames'

const useCardStyles = makeStyles((theme) => ({
  content: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10)
  }
}))

const ProjectCard = ({ project }) => {
  const { match } = useReactRouter()
  const classes = useCardStyles()
  return (
    <Card>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {project.name}
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="center">
        <CardActions>
          <Button
            size="small"
            color="primary"
            component={Link}
            to={PROJECT_FN({ groupId: match.params.id, projectId: project.id })}
          >
            進入專案
          </Button>
        </CardActions>
      </Box>
    </Card>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
}

export default ProjectCard
