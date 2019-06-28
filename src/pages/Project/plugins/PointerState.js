import React from 'react'
import {
  Plugin,
  Getter,
  Action
} from '@devexpress/dx-react-core'

const PointerState = (props) => {
  const { pointer, onPointerChange } = props
  return (
    <Plugin>
      <Getter name="pointer" value={pointer} />
      <Action name="changePointer" action={onPointerChange} />
    </Plugin>
  )
}

export default PointerState
