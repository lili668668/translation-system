import firebase from 'firebase'
import config from './firebaseConfig'

class Firebase {
  constructor () {
    this.app = firebase.initializeApp(config)

    this.auth = this.app.auth()
    this.googleProvider = new firebase.auth.GoogleAuthProvider()

    this.db = this.app.database()
  }

  signInWithGoogle = () => this.auth.signInWithPopup(this.googleProvider)
  signOut = () => this.auth.signOut()
}

export default Firebase
