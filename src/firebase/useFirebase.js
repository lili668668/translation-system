import { useContext } from 'react'
import { FirebaseContext } from './FirebaseProvider'

const useFirebase = () => {
  return useContext(FirebaseContext)
}

export default useFirebase
