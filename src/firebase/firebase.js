import firebase from 'firebase'
import config from './firebaseConfig'
import * as path from './refPath'

class Firebase {
  constructor () {
    this.app = firebase.initializeApp(config)

    this.auth = this.app.auth()
    this.googleProvider = new firebase.auth.GoogleAuthProvider()

    this.db = this.app.database()
    this.ref = this.app.database().ref(path.ROOT)
  }

  signInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider)
  signOut = () => this.auth.signOut()

  refUsers = () => this.ref.child(path.USERS)
  refUser = ({ uid }) => this.ref.child(path.USER_FN({ uid }))
  refGroups = () => this.ref.child(path.GROUPS)
  refGroup = ({ id }) => this.ref.child(path.GROUP_FN({ id }))
  refGroupUser = ({ id }) => this.ref.child(path.GROUP_USER_FN({ id }))
  refProjectContents = ({ id }) => this.ref.child(path.PROJECT_CONTENTS({ id }))
}

export default Firebase
