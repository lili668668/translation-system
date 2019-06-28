export const HOME = '/'
export const LOGIN = '/login'
export const GROUP = '/group/:id'
export const GROUP_FN = ({ id }) => `/group/${id}`
export const PROJECT = '/group/:groupId/project/:projectId'
export const PROJECT_FN = ({ groupId, projectId }) => `/group/${groupId}/project/${projectId}`
