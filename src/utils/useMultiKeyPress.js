import { useEffect } from 'react'
import union from 'lodash-es/union'

export default function useMultiKeyPress(onKeysPressed) {
  let keysPressed = []

  const downHandler = (event) => {
    const { key } = event
    keysPressed = union(keysPressed, [key])
    onKeysPressed(keysPressed, event)
  }

  const upHandler = ({ key }) => {
    keysPressed = keysPressed.filter(keyPressed => keyPressed !== key)
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  })

  return keysPressed
}
