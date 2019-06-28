export const ROOT = '/'
export const USERS = '/users'
export const USER_FN = ({ uid }) => `${USERS}/${uid}`
export const GROUPS = '/groups'
export const GROUP_FN = ({ id }) => `${GROUPS}/${id}`
export const GROUP_USER_FN = ({ id }) => `/group_user/${id}`
export const PROJECT_CONTENTS = ({ id }) => `/project_contents/${id}`
